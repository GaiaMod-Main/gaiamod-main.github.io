import React from 'react';
import {FormattedMessage} from 'react-intl';

import speech2scratchIconURL from './scratch2webserialapi.png';
import speech2scratchInsetIconURL from './scratch2webserialapi-small.png';

const translationMap = {
    'ja': {
        'gui.extension.scratch2webserialapi.description': 'Web Serial APIに接続する。'
    },
    'ja-Hira': {
        'gui.extension.scratch2webserialapi.description': 'Web Serial APIにせつぞくする。'
    }
};

const entry = {
    name: 'Scratch2WebSerialAPI',
    extensionId: 'scratch2webserialapi',
    extensionURL: 'https://champierre.github.io/scratch2webserialapi/scratch2webserialapi.mjs',
    collaborator: 'champierre',
    iconURL: scratch2webserialapiIconURL,
    insetIconURL: scratch2webserialapiInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Scratch2WebSerialAPI Blocks."
            description="Description for Scratch2WebSerialAPI Blocks."
            id="gui.extension.scratch2webserialapi.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: true,
    helpLink: 'https://github.com/champierre/scratch2webserialapi/',
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
