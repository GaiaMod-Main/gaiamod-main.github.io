import './import-first';

import ReactDOM from 'react-dom';
import React from 'react';
import {compose} from 'redux';
import {setAppElement} from 'react-modal';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import TWEmbedFullScreenHOC from '../lib/tw-embed-fullscreen-hoc.jsx';
import TWStateManagerHOC from '../lib/tw-state-manager-hoc.jsx';
import runAddons from '../addons/entry';

import GUI from './render-gui.jsx';
import appTarget from './app-target';

const getProjectId = () => {
    // For compatibility reasons, we first look at the hash.
    // eg. https://turbowarp.org/embed.html#1
    const hashMatch = location.hash.slice(1);
    if (hashMatch !== '') {
        return hashMatch;
    }
    // Otherwise, we'll recreate what "wildcard" routing does.
    // eg. https://turbowarp.org/1/embed
    const pathMatch = location.pathname.match(/(\d+)\/embed/);
    if (pathMatch !== null) {
        return pathMatch[pathMatch.length - 1];
    }
    return '0';
};

const projectId = getProjectId();
const urlParams = new URLSearchParams(location.search);

let vm;

const onVmInit = _vm => {
    vm = _vm;
    if (vm.runtime.renderer?.setPrivateSkinAccess)
        vm.runtime.renderer.setPrivateSkinAccess(false);
	
// Add global screenshot function
    window.takeScreenshot = () => {
        if (!vm) return;
        const renderer = vm.runtime.renderer;
        const canvas = renderer.canvas;
        
        const captureCallback = () => {
            const now = new Date();
            const filename = `arkide-${now.toISOString().split('T')[0]}-${now.toTimeString().split(' ')[0].replace(/:/g, '-')}`;
            
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.download = `${filename}.png`;
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
            });
        };
        
        renderer._snapshotCallbacks.push(captureCallback);
        renderer.dirty = true;
    };
};

const onProjectLoaded = () => {
    if (urlParams.has('autoplay')) {
        vm.start();
        vm.greenFlag();
    }

    // Add screenshot keyboard shortcut (Ctrl+Shift+S)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'S') {
            e.preventDefault();
            window.takeScreenshot();
        }
    });
};

const WrappedGUI = compose(
    AppStateHOC,
    TWStateManagerHOC,
    TWEmbedFullScreenHOC
)(GUI);

setAppElement(appTarget);
ReactDOM.render(<WrappedGUI
    isEmbedded
    projectId={projectId}
    onVmInit={onVmInit}
    onProjectLoaded={onProjectLoaded}
    routingStyle="none"
/>, appTarget);

if (urlParams.has('addons')) {
    runAddons();
}
