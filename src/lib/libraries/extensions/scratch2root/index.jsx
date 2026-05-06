import React from 'react';
import {FormattedMessage} from 'react-intl';

import speech2scratchIconURL from './scratch2root.png';
import speech2scratchInsetIconURL from './scratch2root-small.png';

const translationMap = {
    'ja': {
        'gui.extension.scratch2root.description': 'Rootに接続する。'
    },
    'ja-Hira': {
        'gui.extension.scratch2root.description': 'Rootにせつぞくする。'
    }
};

const entry = {
    name: 'Scratch2Root',
    extensionId: 'scratch2root',
    extensionURL: 'https://champierre.github.io/scratch2root/scratch2root.mjs',
    collaborator: 'champierre',
    iconURL: scratch2rootIconURL,
    insetIconURL: scratch2rootInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Scratch2Root Blocks."
            description="Description for Scratch2Root Blocks."
            id="gui.extension.scratch2root.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: true,
    helpLink: 'https://github.com/champierre/scratch2root/',
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
