import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import VM from 'scratch-vm';
import {STAGE_SIZE_MODES} from '../lib/layout-constants';
import {setStageSize} from '../reducers/stage-size';
import {setFullScreen} from '../reducers/mode';
import {openSettingsModal} from '../reducers/modals';

import {connect} from 'react-redux';

import StageHeaderComponent from '../components/stage-header/stage-header.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class StageHeader extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleKeyPress'
        ]);
    }
    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress (event) {
        if (event.key === 'Escape' && this.props.isFullScreen) {
            this.props.onSetStageUnFull(false);
        }
    }
    render () {
        const {
            ...props
        } = this.props;
        return (
            <StageHeaderComponent
                {...props}
                onKeyPress={this.handleKeyPress}
            />
        );
    }
}

StageHeader.propTypes = {
    isFullScreen: PropTypes.bool,
    // tw: update when dimensions or isWindowFullScreen changes
    isWindowFullScreen: PropTypes.bool,
    dimensions: PropTypes.arrayOf(PropTypes.number),
    isPlayerOnly: PropTypes.bool,
    onSetStageUnFull: PropTypes.func.isRequired,
    onOpenSettings: PropTypes.func.isRequired,
    // tw: replace showBranding
    isEmbedded: PropTypes.bool,
    stageSizeMode: PropTypes.oneOf(Object.keys(STAGE_SIZE_MODES)),
    vm: PropTypes.instanceOf(VM).isRequired
};

const mapStateToProps = state => ({
    stageSizeMode: state.scratchGui.stageSize.stageSize,
    // tw: replace showBranding
    isEmbedded: state.scratchGui.mode.isEmbedded,
    isFullScreen: state.scratchGui.mode.isFullScreen,
    // tw: update when dimensions or isWindowFullScreen changes
    isWindowFullScreen: state.scratchGui.tw.isWindowFullScreen,
    dimensions: state.scratchGui.tw.dimensions,
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSetStageLarge: () => dispatch(setStageSize(STAGE_SIZE_MODES.large)),
    onSetStageSmall: () => dispatch(setStageSize(STAGE_SIZE_MODES.small)),
    onSetStageFull: () => dispatch(setFullScreen(true)),
    onSetStageUnFull: () => dispatch(setFullScreen(false)),
    onOpenSettings: () => dispatch(openSettingsModal()),
	onTakeScreenshot: () => {
        const vm = ownProps.vm;
        if (!vm || !vm.runtime || !vm.runtime.renderer) {
            console.error('VM not available for screenshot');
            return;
        }
        
        try {
            const renderer = vm.runtime.renderer;
            const canvas = renderer.canvas;
            
            if (!canvas) {
                console.error('Canvas not available');
                return;
            }
            
            const captureCallback = () => {
                const now = new Date();
                const filename = `gaiamod-${now.toISOString().split('T')[0]}-${now.toTimeString().split(' ')[0].replace(/:/g, '-')}`;
                
                canvas.toBlob((blob) => {
                    if (!blob) {
                        console.error('Failed to create blob');
                        return;
                    }
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
        } catch (error) {
            console.error('Screenshot error:', error);
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StageHeader);
