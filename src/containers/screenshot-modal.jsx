import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { closeScreenshotModal } from '../reducers/modals';
import ScreenshotModalComponent from '../components/aide-screenshot-modal/screenshot-modal.jsx';

class ScreenshotModal extends React.Component {
    render() {
        const {
            /* eslint-disable no-unused-vars */
            onClose,
            /* eslint-enable no-unused-vars */
            ...props
        } = this.props;
        return (
            <ScreenshotModalComponent
                vm={this.props.vm}
                projectTitle={this.props.projectTitle}
                onClose={this.props.onClose}
                {...props}
            />
        );
    }
}

ScreenshotModal.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func,
    vm: PropTypes.shape({
        runtime: PropTypes.shape({
            renderer: PropTypes.shape({
                canvas: PropTypes.object,
                _snapshotCallbacks: PropTypes.array,
                dirty: PropTypes.bool
            })
        })
    }),
    projectTitle: PropTypes.string
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm,
    projectTitle: state.scratchGui.projectTitle
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeScreenshotModal())
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenshotModal));