import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import {connect} from 'react-redux';
import log from '../lib/log';
import localforage from 'localforage';
import vm from 'scratch-vm';
import CCWExtensionModalComponent from '../components/tw-ccw-extension-modal/ccw-extension-modal.jsx';
import { closeCCWExtensionModal } from '../reducers/modals';
import {manuallyTrustExtension, isTrustedExtension, isTrustedExtensionOrigin} from './tw-security-manager.jsx';
import {getPersistedUnsandboxed, setPersistedUnsandboxed} from '../lib/tw-persisted-unsandboxed.js';

const CCW_EXTENSION_METADATA_BASE = 'https://bfs-web.ccw.site/extensions/';

class CCWExtensionModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'getSelectedVersion',
            'handleChangeExtensionId',
            'handleChangeVersion',
            'handleClose',
            'handleConfirm',
            'handleKeyDown',
            'handleLookup'
        ]);
        this.state = {
            extensionId: '',
            metadata: null,
            selectedVersionIndex: 0,
            loading: false,
            error: null
        };
    }
    getSelectedVersion () {
        const versions = this.state.metadata?.versions;
        if (!Array.isArray(versions) || !versions.length) {
            return null;
        }
        return versions[this.state.selectedVersionIndex] || versions[0];
    }
    handleChangeExtensionId (event) {
        this.setState({
            extensionId: event.target.value,
            error: null
        });
    }
    handleChangeVersion (event) {
        this.setState({
            selectedVersionIndex: Number(event.target.value) || 0
        });
    }
    handleClose () {
        this.props.onClose();
    }
    handleKeyDown (event) {
        if (event.key === 'Enter' && this.state.extensionId.trim()) {
            event.preventDefault();
            this.handleLookup();
        }
    }
    async handleLookup () {
        const extensionId = this.state.extensionId.trim();
        if (!extensionId) {
            this.setState({error: 'Please enter an extension ID.'});
            return;
        }
        this.setState({
            loading: true,
            error: null,
            metadata: null,
            selectedVersionIndex: 0
        });
        try {
            const response = await fetch(`${CCW_EXTENSION_METADATA_BASE}${encodeURIComponent(extensionId)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const metadata = data?.body || data;
            if (!metadata || !Array.isArray(metadata.versions) || !metadata.versions.length) {
                throw new Error('No versions found for this extension.');
            }
            if (!metadata.versions[0]?.assetUri) {
                throw new Error('The latest version does not include an asset URL.');
            }
            this.setState({
                metadata,
                selectedVersionIndex: 0,
                loading: false
            });
        } catch (err) {
            log.error(err);
            this.setState({
                error: err.message || String(err),
                loading: false
            });
        }
    }
    handleConfirm () {
        const selectedVersion = this.getSelectedVersion();
        const extensionId = this.state.metadata?.eid || this.state.extensionId.trim();
        if (!selectedVersion?.assetUri) {
            this.setState({error: 'Please select a valid version.'});
            return;
        }
        this.props.onClose();
        this.props.vm.extensionManager.loadExtensionIdSync(extensionId);
    }
    render () {
        return (
            <CCWExtensionModalComponent
                error={this.state.error}
                extensionId={this.state.extensionId}
                loading={this.state.loading}
                metadata={this.state.metadata}
                selectedVersionIndex={this.state.selectedVersionIndex}
                onChangeExtensionId={this.handleChangeExtensionId}
                onChangeVersion={this.handleChangeVersion}
                onClose={this.handleClose}
                onConfirm={this.handleConfirm}
                onKeyDown={this.handleKeyDown}
                onLookup={this.handleLookup}
            />
        );
    }
}

CCWExtensionModal.propTypes = {
    onClose: PropTypes.func,
	vm: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeCCWExtensionModal())
});

export default connect(
    null,
    mapDispatchToProps
)(CCWExtensionModal);