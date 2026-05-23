import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import classNames from 'classnames';

import poster from './poster.png';
import styles from './welcome-modal.css';
import FancyCheckbox from '../tw-fancy-checkbox/checkbox.jsx';

const WelcomeModalComponent = props => (
    <Modal
        className={styles.modalContent}
        onRequestClose={props.onClose}
        contentLabel="Welcome to GaiaMod!"
        id="welcomeModal"
    >
        <Box className={styles.body}>
            <p className={styles.text}>
                <b>GaiaMod</b> is based on <b>PenguinMod</b> and adds a bunch of new stuff like <b>new blocks</b>, <b>extensions</b> and <b>other features</b>.
                <br />
            </p>
            <br />
            <img
                className={styles.poster}
                src={poster}
                draggable={false}
            />
            <p className={styles.text}>
                GaiaMod was made by only one developer: <a href="https://github.com/gaiawindwave90">GaiaWindWave90</a>.
                <br />
                View all contributors on <a href={`${process.env.ROOT}credits`}>credits page</a>.
                <br />
                Customize editor to your preference on the <a href={`${process.env.ROOT}addons`}>addons page</a>.
            </p>
        </Box>
        <Box className={styles.buttonRow}>
            <label className={styles.dontShowContainer}>
                <FancyCheckbox
                    className={styles.dontShowCheckbox}
                    checked={props.dontShow}
                    onChange={props.onChangeDontShow}
                />
                <p>Don't show this again</p>
            </label>
            <p className={styles.text}>
                <FormattedMessage
                    defaultMessage="By using Dash, you agree to our {termsOfService} and {privacyPolicy}."
                    description="Text to inform users about terms of service and privacy policy when registering"
                    id="gm.tosAndPrivacy"
                    values={{
                        termsOfService: (
                            <a href={`${process.env.ROOT}tos`} target="_blank">
                                <FormattedMessage
                                    defaultMessage="Terms of Service"
                                    description="Link to terms of service page"
                                    id="gm.tosAndPrivacy.tos"
                                />
                            </a>
                        ),
                        privacyPolicy: (
                            <a href={`${process.env.ROOT}privacy`} target="_blank">
                                <FormattedMessage
                                    defaultMessage="Privacy Policy"
                                    description="Link to privacy policy page"
                                    id="gm.tosAndPrivacy.privacy"
                                />
                            </a>
                        )
                    }}
                />
            </p>
            <button
                className={styles.closeButton}
                onClick={props.onClose}
            >Close</button>
        </Box>
    </Modal>
);

WelcomeModalComponent.propTypes = {
    intl: intlShape,
    dontShow: PropTypes.bool.isRequired,
    onChangeDontShow: PropTypes.func,
    onClose: PropTypes.func.isRequired
};

export default injectIntl(WelcomeModalComponent);