/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {APP_NAME} from '../../lib/brand.js';
import {FormattedMessage, defineMessages, injectIntl, intlShape} from 'react-intl';
import styles from './footer.css';
import userstyles from '../../playground/credits/credits.css';
import UserData from '../../playground/credits/users.js';
import Swal from 'sweetalert2';

const User = ({ image, text, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={userstyles.user}
    >
        <img
            className={userstyles.userImage}
            src={image}
            width="60"
            height="60"
        />
        <div className={userstyles.userInfo}>
            {text}
        </div>
    </a>
);
User.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string
};

const UserList = ({ users }) => (
    <div className={userstyles.users}>
        {users.map((data, index) => (
            <User
                key={index}
                {...data}
            />
        ))}
    </div>
);
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

//Taken from LibreKitten.
const hardRefresh = () => {
    const search = location.search.replace(/[?&]nocache=\d+/, '');
    location.replace(`${location.pathname + search + (search ? '&' : '?')}nocache=${Math.floor(Math.random() * 100000)}`);
};

const eraseData = async () => {
    if (confirm('Please be aware that this will reset all your local data, including the Restore Points and backpack. Are you sure you want to continue?')) {
        
        localStorage.clear();
        // We have to manually delete the databases due to Firefox not supporting indexedDB.databases(). WHYYYY???
        indexedDB.deleteDatabase('TW_RestorePoints');
        indexedDB.deleteDatabase('TW_Backpack');
        location.reload();
    }
};

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.footerText}>
                <FormattedMessage
                    // eslint-disable-next-line max-len
                    defaultMessage="GaiaMod, PenguinMod and TurboWarp are not affiliated with Scratch, the Scratch Team, or the Scratch Foundation."
                    description="Disclaimer that GaiaMod, PenguinMod and TurboWarp are not connected to Scratch"
                    id="tw.footer.disclaimer"
                />
            </div>
            <div className={styles.footerColumns}>
                <div className={styles.footerSection}>
                    <a href="credits.html">
                        <FormattedMessage
                            defaultMessage="Credits"
                            description="Credits link in footer"
                            id="tw.footer.credits"
                        />
                    </a>
					<a href="https://arkide.site/donate">
                        <FormattedMessage
                            defaultMessage="Donate to Ark IDE Developer"
                            description="Donation link to Ark IDE in footer"
                            id="tw.footer.donateArkIDE"
                        />
                    </a>
					 <a href="https://electramod-home.vercel.app/donate">
                        <FormattedMessage
                            defaultMessage="Donate to ElectraMod Developer"
                            description="Donation link to ElectraMod in footer"
                            id="tw.footer.donateElectramod"
                        />
                    </a>
                    <a href="https://penguinmod.com/donate">
                        <FormattedMessage
                            defaultMessage="Donate to PenguinMod Developer"
                            description="Donation link to PenguinMod in footer"
                            id="tw.footer.donatePenguinmod"
                        />
                    </a>
					  <a href="https://github.com/sponsors/GarboMuffin">
                        <FormattedMessage
                            defaultMessage="Donate to TurboWarp Developer"
                            description="Donation link in footer"
                            id="tw.footer.donate"
                        />
                    </a>
					<a href="https://www.scratchfoundation.org/donate">
                        <FormattedMessage
                            defaultMessage="Donate to Scratch Developers"
                            description="Donation link to Scratch in footer"
                            id="tw.footer.donateScratch"
                        />
                    </a>
                </div>
                <div className={styles.footerSection}>
				     <a href="https://gaiamod-main.github.io/GaiaMod-Packager">
                       {/* Do not translate */}
                        {'GaiaMod Packager'}
                    </a>
                    <a href="https://studio.penguinmod.com/PenguinMod-Packager">
                        {/* Do not translate */}
                        {'PenguinMod Packager'}
                    </a>
                    <a href="https://desktop.turbowarp.org/">
                        {/* Do not translate */}
                        {'TurboWarp Desktop'}
                    </a>
					<a href="https://docs.turbowarp.org/embedding">
                        <FormattedMessage
                            defaultMessage="Embedding"
                            description="Link in footer to embedding documentation for embedding link"
                            id="tw.footer.embed"
                        />
                    </a>
                    <a href="https://docs.turbowarp.org/url-parameters">
                        <FormattedMessage
                            defaultMessage="URL Parameters"
                            description="Link in footer to URL parameters documentation"
                            id="tw.footer.parameters"
                        />
                    </a>
                </div>
                <div className={styles.footerSection}>
                    <a href="#">
                        <FormattedMessage
                            defaultMessage="Terms of Service"
                            description="Link to Terms of Service"
                            id="pm.terms"
                        />
                    </a>
                    <a href="#">
                        <FormattedMessage
                            defaultMessage="Privacy Policy"
                            description="Link to privacy policy"
                            id="tw.privacy"
                        />
                    </a>
					<a href="https://gaiamod-main.github.io/editor.html?livetests">
                        <FormattedMessage
                            defaultMessage="Live Tests"
                            description="Opens the livetests page"
                            id="tw.livetests"
                        />
                    </a>
                    <a href="https://github.com/GaiaMod-Main/gaiamod-main.github.io/issues">
                        <FormattedMessage
                            defaultMessage="Feedback & Bugs"
                            description="Link to feedback/bugs page"
                            id="tw.feedback"
                        />
                    </a>
                    <a href="https://github.com/GaiaMod-Main/gaiamod-main.github.io">
                        <FormattedMessage
                            defaultMessage="Source Code"
                            description="Link to source code"
                            id="tw.code"
                        />
                    </a>
					<a href="https://gaiamod-main.github.io/GaiaMod-Home">
                        <FormattedMessage
                            defaultMessage="Homepage"
                            description="Link to homepage"
                            id="tw.home"
                        />
                    </a>
                    <a href="https://gaiawindwave90.github.io">
                        <FormattedMessage
                            defaultMessage="Gaia Zone"
                            description="The main website."
                            id="tw.gaiasite"
                        />
                    </a>
                    <a href="https://docs.turbowarp.org/">
                        <FormattedMessage
                            defaultMessage="Documentation"
                            description="Link in footer to additional documentation"
                            id="tw.footer.documentation"
                        />
                    </a>
                </div>
            </div>
            </div>
			<hr></hr>
		<div style={{textAlign: 'center'}}>
                <p>
                    <h1>
                        <em>Hey, You!</em>
                    </h1>
                    <FormattedMessage
                        defaultMessage="If you like GaiaMod, why should you check out other Scratch mods, too?"
                        id="gm.footer.othermods"
                    />
                </p>
			<p className={userstyles.main}>
                <UserList users={UserData.scratchMods} />
				<i>
				The list order is randomized on each refresh.
				</i>
				</p>
				<hr></hr>
            <p className={styles.info}>
                Version: 15.7 | <a
                    onClick={eraseData}
                    style={{color: 'red'}}
                >Erase data</a>
            </p>
        </div>
    </footer>
);

export default Footer;
