import PropTypes from 'prop-types';
import React from 'react';
import {injectIntl, intlShape} from 'react-intl';
import bindAll from 'lodash.bindall';
import {connect} from 'react-redux';
import {closeExtManagerModal} from '../reducers/modals';
import ExtensionsManagerModalComponent from '../components/extension-manager-modal/modal.jsx';

class ExtensionsManagerModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, 'handleClose');
    }
    handleClose () {
        this.props.onCloseExtManagerModal();
    }
    render () {
        const {
            /* eslint-disable no-unused-vars */
            onCloseExtManagerModal,
            vm,
            /* eslint-enable no-unused-vars */
            ...props
        } = this.props;
        return (
            <ExtensionsManagerModalComponent
                onClose={this.handleClose}
                vm={this.props.vm}
            />
        );
    }
}

ExtensionsManagerModal.propTypes = {
    intl: intlShape,
    onCloseExtManagerModal: PropTypes.func,
    vm: PropTypes.shape({
        extensionManager: PropTypes.shape({
            removeExtension: PropTypes.func
        })
    })
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm,
});

const mapDispatchToProps = dispatch => ({
    onCloseExtManagerModal: () => dispatch(closeExtManagerModal())
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(ExtensionsManagerModal));