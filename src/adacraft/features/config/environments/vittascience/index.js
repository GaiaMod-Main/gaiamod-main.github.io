import greenFlag from './gui/green-flag'
import stopAll from './gui/stop-all'
import stageHeader from './gui/stage-header'
import defaultProject from './default-project';

// Just to load the CSS content, we won't use the result of the import.
import _ from './gui/theme.css'

export default {
    themeLocalStorageKey: 'theme',
    scratchAddons: {
        'clones': {
            enabledByDefault: false
        },
        'custom-block-shape': {
            enabledByDefault: false
        },
        'data-category-tweaks-v2': {
            enabledByDefault: false
        },
        'debugger': {
            enabledByDefault: false
        },
        'hide-flyout': {
            enabledByDefault: false
        },
        'load-extensions': {
            enabledByDefault: false
        },
        'mediarecorder': {
            enabledByDefault: false
        },
        'mute-project': {
            enabledByDefault: false
        },
        'mouse-pos': {
            enabledByDefault: false
        },
        'pause': {
            enabledByDefault: false
        },
        'remove-curved-stage-border': {
            enabledByDefault: false
        },
        'variable-manager': {
            enabledByDefault: false
        },
        'variable-manager': {
            enabledByDefault: false
        }
    },
    gui: {
        // Must be the same name as used in gui/theme.css for "data-color-theme".
        colorThemeName: 'vittascience',
        greenFlag,
        stopAll,
        stageHeader
    },
    defaultProject,
    defaultStageDimensions: {
        width: 480,
        height: 360
    },
    extensions: {
        adasound: {
            name: 'IA Son',
        },
        adavision: {
            name: 'IA Image',
        }
    }
}