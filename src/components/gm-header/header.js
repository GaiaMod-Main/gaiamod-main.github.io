import classNames from 'classnames';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {defineMessages, FormattedMessage, injectIntl, intlShape} from 'react-intl';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import bowser from 'bowser';
import React from 'react';

import Button from '../button/button.jsx';

import styles from './header.css';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.mainGroup}>
            <a
                href="https://gaiamod-main.github.io/Gaiamod-Home"
                className={classNames(styles.headerItem, styles.hoverable)}
            >
                <div className={styles.logo} />
            </a>
            <a
                href="/editor.html"
                className={classNames(styles.headerItem, styles.hoverable)}
            >
                Create
            </a>
            <a
                href="/credits.html"
                className={classNames(styles.headerItem, styles.hoverable)}
            >
                Credits
            </a>
        </div>
    </div>
);

export default Header;