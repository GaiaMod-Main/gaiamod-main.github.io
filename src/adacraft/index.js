import xhr from 'xhr';

import { createClient } from '@supabase/supabase-js'

// TODO Si le serveur supabase n'est pas joignable, ça tourne en boucle.

// TODO Move this into env vars and .env
const supabaseUrl = 'https://eavcjnlemtekarukkytz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhdmNqbmxlbXRla2FydWtreXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MzYyMjcsImV4cCI6MjA2NDIxMjIyN30.eCkGDRZkc2WVzhlSDJ9LNq4oPRYBnYwMBN3oidjcFWk'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const getCurrentAuthUser = async () => {
    const { data, error } = await supabase.auth.getUser()

    if (error) {
        return null
    }

    // value is null if no user is connected
    return data
}

const getCurrentSession = async () => {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
        return;
    }
    return session
}

const getCurrentUser = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError) {
        return null
    }

    if (!user) {
        return null
    }

    // Récupérer le profil de l'utilisateur courant
    const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('user_id', user.id)
        .single() // On s'attend à un seul profil

    if (error) {
        return null
    }

    return data
}


const getProjectByPublicId = async (publicId) => {
    console.log(publicId)
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('public_id', publicId)
        .single();

    if (error) {
        return null
    }
    return data
}

import { manualUpdateProject, setProjectId } from '../reducers/project-state';
import {
    activateTab,
    BLOCKS_TAB_INDEX,
    COSTUMES_TAB_INDEX,
    SOUNDS_TAB_INDEX
} from '../reducers/editor-tab';
import {
    enableProjectSaving,
    disableProjectSaving
} from './reducers/adacraft';
import { selectLocale } from '../reducers/locales';
import { setProjectTitle } from '../reducers/project-title';

import devtools from './devtools';
import features from './features';


const getOptionalTimestampFromQueryString = () => {
    const timestampMatches = window.location.href.match(/[?&]timestamp=([^&]*)&?/);
    let timestamp = timestampMatches !== null ? timestampMatches[1] : undefined;
    return timestamp;
};

const adacraftStorage = {
    // Tell if we allow loading a project when its ID is set in the URL (like
    // "/?project=6bf78fc9").
    allowLoadingProjectFromUrl: true,

    config: {
        gotrueUrlOrigin: process.env.GOTRUE_URL_ORIGIN,
        faunaPublicKey: process.env.ADACRAFT_FAUNA_PUBLIC_KEY,
        storageUrl: process.env.ADACRAFT_STORAGE_URL,
    },

    // Tell if everything is OK for the storage to work properlly.
    configIsValid () {
        return (
            this.config.storageUrl
            && this.config.gotrueUrlOrigin
            && this.config.faunaPublicKey
        )
    },

    get defaultProjectHost () {
        return `${this.config.storageUrl}/projects`;
    },

    get defaultAssetHost () {
        return `${this.config.storageUrl}/assets`;
    },

    // Value of "withCredentials" option for all XHR requests. We set it to
    // "false" to avoid CORS errors with adacraft backend.
    withCredentials: false,

    getProjectGetConfig (project) {
        let projectUrl;
        const timestamp = getOptionalTimestampFromQueryString();
        if (timestamp) {
            // In that case we want to load a previous version of the project.

            // From "https://storage.adacraft.org" to something like
            // "https://storage-history.beta.adacraft.org"
            const storageBaseUrl = new URL(adacraftStorage.defaultProjectHost).origin
            let historyBaseUrl = storageBaseUrl.replace('storage.', 'storage-history.')

            projectUrl = `${historyBaseUrl}/011projects/${project.assetId}/${timestamp}`;
        } else {
            // Add a random query string value to be sure that the browser don't
            // use a cached version.
            // TODO Maybe there is a better wau to manage this.
            projectUrl = `${adacraftStorage.defaultProjectHost}/${project.assetId}?random=${Math.random()}`;
        }
        return projectUrl;
    },
    getAssetGetConfig (asset) {
        return `${adacraftStorage.defaultAssetHost}/${asset.assetId}.${asset.dataFormat}`;
    },
    getAssetCreateConfig (asset) {
        return {
            method: 'put',
            url: `${adacraftStorage.defaultAssetHost}/${asset.assetId}.${asset.dataFormat}`,
            withCredentials: adacraftStorage.withCredentials
        };
    },

    /**
     * Save a project JSON to the project server.
     * @param {number} projectId the ID of the project, null if a new project.
     * @param {object} projectJson the JSON project representation.
     * @param {object} params the request params.
     * @property {?number} params.originalId the original project ID if a copy/remix.
     * @property {?boolean} params.isCopy a flag indicating if this save is creating a copy.
     * @property {?boolean} params.isRemix a flag indicating if this save is creating a remix.
     * @property {?string} params.title the title of the project.
     * @return {Promise} A promise that resolves when the network request resolves.
     */
    saveProjectToServer (projectId, projectJson, params) {
        const url = `${adacraftStorage.defaultProjectHost}/${projectId}`
        const options = {
            method: 'put',
            url,
            body: projectJson,
            // If we set json:true then the body is double-stringified, so don't
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: adacraftStorage.withCredentials
        };
        return new Promise((resolve, reject) => {
            getCurrentSession().then(session => {
                if (session) {
                    options.headers['Account-Token'] = session.access_token
                }
                // @ts-ignore
                xhr(options, (error, response) => {
                    if (error) {
                        return reject(error);
                    }
                    // Storage for adacraft returns with 201 status
                    if (response.statusCode !== 200 && response.statusCode !== 201) {
                        return reject(response.statusCode);
                    }
                    let body;
                    try {
                        // Since we didn't set json: true, we have to parse manually
                        // @ts-ignore
                        body = JSON.parse(response.body);
                    } catch (e) {
                        return reject(e);
                    }
                    // Storage for adacraft returns an empty body
                    if (!body) {
                        body = {};
                    }
                    body.id = projectId;
                    resolve(body);
                });
            })
    
        });
    },

    getExtraProjectInfo (projectId) {
        devtools.console.log(`getExtraProjectInfo for ${projectId}`)
        return new Promise(async (resolve, reject) => {
            const info = {
                projectOwnedByCurrentUser: false
            };
        
            const project = await getProjectByPublicId(projectId)
            if (project !== null) {
                info.project = project
                const dbUser = await getCurrentUser()
                if (dbUser && project.owner_id === dbUser.id) {
                    info.projectOwnedByCurrentUser = true;
                }
            }
            resolve(info);
        });
    }
}

const storageManager = {
    add (name, storage) {
        adacraft.storage = storage
    }
};

const defaultAdacraftPreInitConfig = {
    loadProjectOnStartup: true,
    // A callback that will be called with a reference of the global adacraft
    // module object so external tools can get and store a reference to it.
    onModuleReady: (adacraftModule) => {},
    noDefaultStorage: features.decisions.noDefaultStorage
}

// @ts-ignore
const adacraftPreInitConfig = window.adacraftPreInitConfig || defaultAdacraftPreInitConfig

const adacraft = {
    config: {
        loadProjectOnStartup: adacraftPreInitConfig.loadProjectOnStartup
    },

    // A link to the UI instance for the menu bar. For example, to access some
    // of it menu actions (like save on computer) that are stored in the props.
    menuBar: null,

    // The following property is a reference to the main app state store. It is
    // the low level way to get information and change the app behavior, like
    // changing the current project content or allowing the saving of the
    // project:
    //
    //      adacraft.appStateStore.dispatch({
    //          type: 'adacraft/ENABLE_PROJECT_SAVING'
    //      })
    //
    // This property will be updated when the store is created in
    // app-state-hoc.js (at the time of this writing).
    appStateStore: null,

    setAppStateStore (store) {
        this.appStateStore = store

        // Add the watcher that will load extra project info (like project
        // title) when a new project is loaded in the editor.
        if (this.storage.getExtraProjectInfo) {
            this.watchAppState(
                (state) => (state.scratchGui.projectState.loadingState),
                (newLoadingState) => {
                    if (newLoadingState  === 'LOADING_VM_WITH_ID') {
                        const state = this.appStateStore.getState()
                        const { projectId } = state.scratchGui.projectState
                        this.storage.getExtraProjectInfo(projectId).then((info) => {
                            const timestamp = getOptionalTimestampFromQueryString();
                            if (info.project) {
                                let title = info.project.info.name
                                if (timestamp !== undefined) {
                                    title += ` (old version)`
                                }
                                this.appStateStore.dispatch(
                                    setProjectTitle(title)
                                )
                            }
                            if (
                                info.projectOwnedByCurrentUser
                                // We don't allow saving if we are viewing an
                                // old version of the project.
                                && timestamp === undefined
                            ) {
                                this.enableProjectSaving()
                            } else {
                                this.disableProjectSaving()
                            }
                        })
                    }
                }
            )
        }
    },

    async preLoadProjectHook (projectId) {
        if (this.storage.getExtraProjectInfo) {
            const info = await this.storage.getExtraProjectInfo(projectId)
            if (
                info
                && info.project
                && info.project.storage
                && info.project.storage === 'https://storage.adacraft.org/2'
            ) {
                // This project is stored in the second storage container. For now,
                // we don't use the base URL from the project description but we
                // compute it based on the current configuration of the editor. This
                // allows us to have separate storage spaces for different
                // deployment environment (prod, staging, beta...) even with a
                // shared project database.
                //
                // So, basicly, we convert from something like
                // "https://storage.beta.adacraft.org" to something like
                // "https://storage2.beta.adacraft.org"
                this.storage.config.storageUrl = this.storage.config.storageUrl.replace('storage.', 'storage2.')
            }
        }
    },

    switchToDarkTheme: () => {},
    switchToLightTheme: () => {},

    // Mainly used by the main app store to add adacraft stuff.
    getAdacraftReducers () {
        const adacraftRedux = require('./reducers/adacraft')
        return adacraftRedux.default
    },

    enableProjectSaving () {
        this.appStateStore.dispatch(enableProjectSaving())
    },
    
    disableProjectSaving () {
        this.appStateStore.dispatch(disableProjectSaving())
    },

    getCurrentProjectJson () {
        const state = this.appStateStore.getState()
        return state.scratchGui.vm.toJSON()
    },

    loadProjectFromComputer () {
        this.menuBar.props.onStartSelectingFileUpload()
    },

    saveProjectToComputer () {
        this.menuBar.props.handleSaveProject()
    },

    askLoadingOfProjectById (projectId) {
        this.appStateStore.dispatch(setProjectId(projectId))
    },

    saveCurrentProject () {
        this.appStateStore.dispatch(manualUpdateProject())
    },

    tabs: {
        BLOCKS_TAB_INDEX,
        COSTUMES_TAB_INDEX,
        SOUNDS_TAB_INDEX,

        switchToTab (tabIndex) {
            adacraft.appStateStore.dispatch(activateTab(tabIndex))
        }
    },

    setLocale (locale) {
        adacraft.appStateStore.dispatch(selectLocale(locale))
    },

    greenFlag () {
        const state = this.appStateStore.getState();
        const vm =  state.scratchGui.vm;
        vm.start();
        vm.greenFlag();
    },

    undo () {
        const workspace = Blockly.getMainWorkspace();
        workspace.undo();
    },

    redo () {
        const workspace = Blockly.getMainWorkspace();
        const redo = true;
        workspace.undo(redo);
    },

    watchAppState (stateValueGetter, onChange) {
        const store = this.appStateStore;
        let previousValue;
        const checkStateChange = () => {
            const currentValue = stateValueGetter(store.getState());
            if (currentValue !== previousValue) {
                onChange(currentValue, previousValue);
                previousValue = currentValue;
            }
        }
        const unwatch = store.subscribe(checkStateChange);
        checkStateChange();
        return unwatch;
    },

    watchProjectChanged (onChange) {
        const unwatch = this.watchAppState(
            (state) => (state.scratchGui.projectChanged),
            onChange
        );
        return unwatch;
    },

    watchIsFullScreen (onChange) {
        const unwatch = this.watchAppState(
            (state) => (state.scratchGui.mode.isFullScreen),
            onChange
        );
        return unwatch;
    },

    async openProjectPage (projectId) {
        if (this.storage.getExtraProjectInfo) {
            const info = await this.storage.getExtraProjectInfo(projectId)
            window.open(`/project/${info.project.id}`, '_self')
        }
    },

    fullscreenExitIsAllowed ({isFullScreen = false, isPlayerOnly = false}) {
        // The exit fullscreen is only disabled when a player display is in
        // fullscreen.
        return !(isFullScreen && isPlayerOnly)
    },

    requestBrowserFullscreen () {
        // [adacraft] TODO We want to request the fullscreen on the highest
        // element that doesn't contain other stuff (like stage header).
        // This element is the Box with class stageCanvasWrapper in
        // stage-wrapper.jsx. It is a bit complicated to make it work
        // cleanly (maybe we should use some redux for this?). For now we
        // use this hack (inspired by Scratch Addons way of doing things).
        const element = document.querySelector('[class*="stage-wrapper_stage-canvas-wrapper"]');
        element.requestFullscreen();
    },

    requestBrowserFullscreenSwitch () {
        if (document.fullscreenElement === null) {
            this.requestBrowserFullscreen();
        } else {
            document.exitFullscreen();
        }
    },

    storage: {},

    devtools,
    features,

    storageManager
}

if (!adacraftPreInitConfig.noDefaultStorage) {
    if (adacraftStorage.configIsValid()) {
        adacraft.storageManager.add('adacraft', adacraftStorage);
    }
}
adacraftPreInitConfig.onModuleReady(adacraft)


// Apply the color theme if defined for the given environment (like green for
// Vittascience, etc.).
const { colorThemeName } = features.config.gui;
if (colorThemeName) {
    document
        .querySelector('body')
        .setAttribute('data-color-theme', colorThemeName);
}

export default adacraft
