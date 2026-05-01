import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import { APP_NAME } from '../../lib/brand.js';
import styles from './ext-manager-modal.css';

const handleRemoveBtnClick = (ext, props) => {
    props.vm.extensionManager.removeExtension(ext[0]);
    props.onClose(); 
};


const ExtensionsManagerModalComponent = props => {
    const [loadedExtensions, setLoadedExtensions] = useState([]);
    const [sortingCriteria, setSortingCriteria] = useState('byLoadedDate');

    useEffect(() => {
        const entriesArray = Array.from(props.vm.extensionManager._loadedExtensions).map((ext, i) => [ext[0], ext[1], i]);
        setLoadedExtensions(entriesArray);
    }, [props.vm.extensionManager]);

    const numberOfExtensions = loadedExtensions.length;
    

    // Fonction de tri pour les extensions
    const sortExtensions = (criteria) => {
        if (criteria === 'alphabetical') {
            setLoadedExtensions([...loadedExtensions.sort((a, b) => a[0].localeCompare(b[0]))]);
        } else if (criteria === 'reverseAlphabetical') {
            setLoadedExtensions([...loadedExtensions.sort((a, b) => b[0].localeCompare(a[0]))]);
        } else if (criteria === 'byLoadedDate') {
            setLoadedExtensions([...loadedExtensions.sort((a, b) => a[2] - b[2])]);
        }
    };

    return (
        <Modal
            className={styles.modalContent}
            onRequestClose={(...args) => props.onClose(...args)}
            contentLabel="Extensions Manager"
            id="extManagerModal"
        >
            <Box className={styles.body}>
                {numberOfExtensions > 0 ? (
                    <>
                        <div>
                            <center><h3>Total Extensions Loaded: {numberOfExtensions}</h3></center>
                        </div>
                        <div>
                            {loadedExtensions.map((ext, i) => (
                                <React.Fragment key={i}>
                                    <button className={styles.button} onClick={() => handleRemoveBtnClick(ext, props)}>
                                        Remove {ext[0]}
                                    </button>
                                    &nbsp;
                                </React.Fragment>
                            ))}
                        </div>
                        <br />
                        <div>
                            <center>
                                <select
                                    value={sortingCriteria}
                                    onChange={(e) => {
                                        setSortingCriteria(e.target.value);
                                        sortExtensions(e.target.value);
                                    }}
                                >
                                    <option value="byLoadedDate" disabled={sortingCriteria === 'byLoadedDate'}>
                                        Sort by Loaded Date
                                    </option>
                                    <option value="alphabetical">Sort A-Z</option>
                                    <option value="reverseAlphabetical">Sort Z-A</option>
                                </select>
                            </center>
                        </div>
                    </>
                ) : (
                    <div>
                        <center><h3>No Extensions Loaded</h3></center>
                        <br />
                        <center>Try to load an extension on {APP_NAME}.</center>
                    </div>
                )}
            </Box>
        </Modal>
    );
};

ExtensionsManagerModalComponent.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func,
    vm: PropTypes.shape({
        extensionManager: PropTypes.shape({
            removeExtension: PropTypes.func
        })
    })
};

export default injectIntl(ExtensionsManagerModalComponent);