import { defineMessages, FormattedMessage, intlShape, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import bindAll from 'lodash.bindall';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import Input from '../forms/input.jsx';
import BufferedInputHOC from '../forms/buffered-input-hoc.jsx';
import styles from './screenshot-modal.css';
import VM from 'scratch-vm';

const BufferedInput = BufferedInputHOC(Input);

const messages = defineMessages({
    title: {
        defaultMessage: 'Take Screenshot',
        description: 'Title of screenshot modal',
        id: 'pm.screenshotModal.title'
    }
});

class ScreenshotModalComponent extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleDownload',
            'handleFilenameChange',
            'handleWidthChange',
            'handleHeightChange',
            'handleScaleChange'
        ]);
        
        // Generate default filename
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        const time = now.toTimeString().split(' ')[0].replace(/:/g, '-');
        const projectName = props.projectTitle || 'scratch-project';
        
        // Get actual canvas dimensions
        const canvas = props.vm.runtime.renderer.canvas;
        const canvasWidth = canvas.width || 480;
        const canvasHeight = canvas.height || 360;
        
        this.state = {
            filename: `${projectName}-${date}-${time}`,
            width: canvasWidth,
            height: canvasHeight,
            baseWidth: canvasWidth,
            baseHeight: canvasHeight,
            scale: 1
        };
    }
    
    handleFilenameChange(filename) {
        this.setState({ filename });
    }
    
    handleWidthChange(width) {
        const numWidth = parseInt(width, 10);
        if (!isNaN(numWidth) && numWidth > 0) {
            // Calculate new scale based on width change
            const newScale = numWidth / this.state.baseWidth;
            this.setState({ 
                width: numWidth,
                height: Math.round(this.state.baseHeight * newScale),
                scale: newScale
            });
        }
    }
    
    handleHeightChange(height) {
        const numHeight = parseInt(height, 10);
        if (!isNaN(numHeight) && numHeight > 0) {
            // Calculate new scale based on height change
            const newScale = numHeight / this.state.baseHeight;
            this.setState({ 
                height: numHeight,
                width: Math.round(this.state.baseWidth * newScale),
                scale: newScale
            });
        }
    }
    
    handleScaleChange(e) {
        const scale = parseFloat(e.target.value);
        this.setState({
            scale: scale,
            width: Math.round(this.state.baseWidth * scale),
            height: Math.round(this.state.baseHeight * scale)
        });
    }
    
    handleDownload() {
        const vm = this.props.vm;
        const { filename, width, height } = this.state;
        
        try {
            const renderer = vm.runtime.renderer;
            
            const captureCallback = () => {
                const canvas = renderer.canvas;
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = width;
                tempCanvas.height = height;
                const ctx = tempCanvas.getContext('2d');
                
                // Draw the source canvas scaled to the target size
                ctx.drawImage(canvas, 0, 0, width, height);
                
                tempCanvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.download = `${filename}.png`;
                    link.href = url;
                    link.click();
                    URL.revokeObjectURL(url);
                });
                
                // Close modal after download
                this.props.onClose();
            };
            
            renderer._snapshotCallbacks.push(captureCallback);
            renderer.dirty = true;
        } catch (e) {
            console.error('Screenshot failed:', e);
        }
    }
    
    render() {
        return (
            <Modal
                className={styles.modalContent}
                onRequestClose={this.props.onClose}
                contentLabel={this.props.intl.formatMessage(messages.title)}
                id="screenshotModal"
            >
                <Box className={styles.body}>
                    <div className={styles.section}>
                        <div className={styles.label}>
                            <FormattedMessage
                                defaultMessage="Filename"
                                description="Screenshot filename label"
                                id="pm.screenshotModal.filename"
                            />
                        </div>
                        <BufferedInput
                            value={this.state.filename}
                            onSubmit={this.handleFilenameChange}
                            className={styles.input}
                            type="text"
                        />
                        <div className={styles.hint}>
                            <FormattedMessage
                                defaultMessage=".png will be added automatically"
                                description="Filename hint"
                                id="pm.screenshotModal.filenameHint"
                            />
                        </div>
                    </div>
                    
                    <div className={styles.section}>
                        <div className={styles.label}>
                            <FormattedMessage
                                defaultMessage="Resolution"
                                description="Screenshot resolution label"
                                id="pm.screenshotModal.resolution"
                            />
                        </div>
                        <div className={styles.resolutionContainer}>
                            <BufferedInput
                                value={this.state.width}
                                onSubmit={this.handleWidthChange}
                                className={styles.resolutionInput}
                                type="number"
                                min="1"
                                max="4096"
                                step="1"
                            />
                            <span className={styles.resolutionX}>×</span>
                            <BufferedInput
                                value={this.state.height}
                                onSubmit={this.handleHeightChange}
                                className={styles.resolutionInput}
                                type="number"
                                min="1"
                                max="4096"
                                step="1"
                            />
                        </div>
                        <div className={styles.hint}>
                            <FormattedMessage
                                defaultMessage="Original size: {width}×{height}"
                                description="Resolution hint"
                                id="pm.screenshotModal.resolutionHint"
                                values={{
                                    width: this.state.baseWidth,
                                    height: this.state.baseHeight
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.section}>
                        <div className={styles.label}>
                            <FormattedMessage
                                defaultMessage="Scale ({scale}x)"
                                description="Screenshot scale label"
                                id="pm.screenshotModal.scale"
                                values={{
                                    scale: this.state.scale.toFixed(2)
                                }}
                            />
                        </div>
                        <input
                            type="range"
                            min="0.25"
                            max="4"
                            step="0.25"
                            value={this.state.scale}
                            onChange={this.handleScaleChange}
                            className={styles.scaleSlider}
                        />
                        <div className={styles.scaleMarkers}>
                            <span>0.25x</span>
                            <span>1x</span>
                            <span>2x</span>
                            <span>4x</span>
                        </div>
                    </div>
                    
                    <div className={styles.buttonContainer}>
                        <button
                            onClick={this.handleDownload}
                            className={styles.downloadButton}
                        >
                            <FormattedMessage
                                defaultMessage="Download"
                                description="Download button"
                                id="pm.screenshotModal.download"
                            />
                        </button>
                    </div>
                </Box>
            </Modal>
        );
    }
}

ScreenshotModalComponent.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func.isRequired,
    projectTitle: PropTypes.string,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default injectIntl(ScreenshotModalComponent);