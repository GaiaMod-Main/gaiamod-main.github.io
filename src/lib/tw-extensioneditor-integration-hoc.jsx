/**
* Extension Editor Hot-Reload Integration
*
* Listens for hot-reload messages from the `scratch-extension-editor` window,
* unloads the old extension, and loads the new one.
 */

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import log from './log';

const DEFAULT_EXTENSION_EDITOR_URL = 'https://gaiamod-main.github.io/Extension-Editor/';

const HOT_RELOAD_MESSAGE_TYPE = 'gm-extension-hot-reload';

const debugHotReload = (stage, payload = {}) => {
    console.log('[hot-reload][gui]', stage, payload);
    if (typeof HotReloadDebug !== 'undefined' && HotReloadDebug && HotReloadDebug.log) {
        HotReloadDebug.log(stage, payload);
    }
};

const ExtensionEditorHotReloadHOC = function (WrappedComponent) {
    class ExtensionEditorHotReloadComponent extends React.Component {
        constructor(props) {
            super(props);
            this.handleClickExtensionEditor = this.handleClickExtensionEditor.bind(this);
            this.handleMessage = this.handleMessage.bind(this);
            this.handleHotReloadData = this.handleHotReloadData.bind(this);
            this.extensionEditorWindow = null;
        }

        componentDidMount() {
            window.addEventListener('message', this.handleMessage);
            if (typeof EditorPreload !== 'undefined' && EditorPreload.setExtensionEditorHotReloadHandler) {
                EditorPreload.setExtensionEditorHotReloadHandler(this.handleHotReloadData);
            }
        }

        componentWillUnmount() {
            window.removeEventListener('message', this.handleMessage);
            if (typeof EditorPreload !== 'undefined' && EditorPreload.setExtensionEditorHotReloadHandler) {
                EditorPreload.setExtensionEditorHotReloadHandler(null);
            }
        }

        handleClickExtensionEditor() {
            const url = this.props.extensioneditorurl || DEFAULT_EXTENSION_EDITOR_URL;
            console.log('[ExtensionEditor] Opening URL:', url);
            
            // Opening Windows via IPC in a Desktop Environment
            if (typeof EditorPreload !== 'undefined' && EditorPreload.openExtensionEditor) {
                console.log('[ExtensionEditor] Using IPC to open window');
                EditorPreload.openExtensionEditor();
                return;
            }
            
            // Fallback: Using `window.open` (Online Version)
            this.extensionEditorWindow = window.open(
                url,
                'gm-extension-editor',
                'width=1400,height=900,menubar=no,toolbar=no,location=no,status=no'
            );
        }

        async handleHotReloadData(data) {
            if (data.type !== HOT_RELOAD_MESSAGE_TYPE) {
                return null;
            }

            const { extensionId, code } = data;
            const loadedExtensionIds = this.props.vm &&
                this.props.vm.extensionManager &&
                this.props.vm.extensionManager._loadedExtensions &&
                typeof this.props.vm.extensionManager._loadedExtensions.keys === 'function'
                ? Array.from(this.props.vm.extensionManager._loadedExtensions.keys())
                : [];

            debugHotReload('gui-hot-reload-received', {
                extensionId,
                codeLength: typeof code === 'string' ? code.length : null,
                loadedExtensionIds
            });
            
            if (!extensionId || !code) {
                log.error('Hot reload: missing extensionId or code');
                debugHotReload('gui-hot-reload-missing-data', {
                    extensionId,
                    hasCode: !!code
                });
                return {
                    success: false,
                    error: 'Missing extensionId or code'
                };
            }

            try {
                log.log(`Hot reload: reloading extension ${extensionId}`);
                debugHotReload('gui-hot-reload-start', {
                    extensionId,
                    wasLoaded: this.props.vm.extensionManager.isExtensionLoaded(extensionId)
                });
                
                // Uninstall the old extension (if present), retaining the blocks for hot reloading.
                if (this.props.vm.extensionManager.isExtensionLoaded(extensionId)) {
                    this.props.vm.extensionManager.unloadExtension(extensionId, {
                        preserveBlocks: true,  // Keep blocks; do not delete blocks in the workspace.
                        skipConfirm: true      // Skip confirmation dialog
                    });
                    debugHotReload('gui-hot-reload-after-unload', {
                        extensionId,
                        stillLoaded: this.props.vm.extensionManager.isExtensionLoaded(extensionId)
                    });
                }

                // Create a Data URL to Load the Extension
                const dataUrl = `data:application/javascript,${encodeURIComponent(code)}`;
                debugHotReload('gui-hot-reload-before-load', {
                    extensionId,
                    dataUrlLength: dataUrl.length
                });
                
                // Load New Extension (true indicates trusting this extension)
                await this.props.vm.extensionManager.loadExtensionURL(dataUrl, true);
                debugHotReload('gui-hot-reload-after-load', {
                    extensionId,
                    isLoaded: this.props.vm.extensionManager.isExtensionLoaded(extensionId),
                    loadedExtensionIds: this.props.vm.extensionManager._loadedExtensions &&
                        typeof this.props.vm.extensionManager._loadedExtensions.keys === 'function'
                        ? Array.from(this.props.vm.extensionManager._loadedExtensions.keys())
                        : []
                });

                // Force block metadata/toolbox refresh after preserveBlocks hot reload.
                if (this.props.vm.extensionManager.refreshBlocks) {
                    await this.props.vm.extensionManager.refreshBlocks(extensionId);
                    debugHotReload('gui-hot-reload-after-refresh-blocks', {
                        extensionId
                    });
                }
                
                // Refresh the workspace to update block definitions.
                this.props.vm.emitWorkspaceUpdate();
                debugHotReload('gui-hot-reload-workspace-updated', {
                    extensionId
                });
                
                log.log(`Hot reload: extension ${extensionId} loaded successfully`);
                debugHotReload('gui-hot-reload-success', {
                    extensionId
                });
                
                // Notify that the extension editor window has loaded successfully.
                if (this.extensionEditorWindow && !this.extensionEditorWindow.closed) {
                    this.extensionEditorWindow.postMessage({
                        type: 'gm-extension-hot-reload-result',
                        success: true
                    }, '*');
                }

                return {
                    success: true
                };
            } catch (error) {
                log.error('Hot reload failed:', error);
                debugHotReload('gui-hot-reload-error', {
                    extensionId,
                    error: error && error.message,
                    stack: error && error.stack
                });
                
                // Notification: Extension Editor Window Failed to Load
                if (this.extensionEditorWindow && !this.extensionEditorWindow.closed) {
                    this.extensionEditorWindow.postMessage({
                        type: 'gm-extension-hot-reload-result',
                        success: false,
                        error: error.message
                    }, '*');
                }

                return {
                    success: false,
                    error: error.message
                };
            }
        }

        async handleMessage(e) {
            // Security Check: Ensure the message originates from an expected source.
// This check should be performed in a production environment. e.origin
            return this.handleHotReloadData(e.data);
        }

        render() {
            return (
                <WrappedComponent
                    onClickExtensionEditor={this.handleClickExtensionEditor}
                    {...this.props}
                />
            );
        }
    }

    ExtensionEditorHotReloadComponent.propTypes = {
        extensioneditorurl: PropTypes.string,
        vm: PropTypes.shape({
            extensionManager: PropTypes.shape({
                isExtensionLoaded: PropTypes.func,
                unloadExtension: PropTypes.func,
                loadExtensionURL: PropTypes.func
            }),
            emitWorkspaceUpdate: PropTypes.func
        })
    };

    const mapStateToProps = (state, ownProps) => ({
        vm: state.scratchGui.vm,
        extensioneditorurl: ownProps.extensioneditorurl
    });

    const mapDispatchToProps = () => ({});

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(ExtensionEditorHotReloadComponent);
};

export {
    ExtensionEditorHotReloadHOC as default,
    HOT_RELOAD_MESSAGE_TYPE,
    DEFAULT_EXTENSION_EDITOR_URL
};