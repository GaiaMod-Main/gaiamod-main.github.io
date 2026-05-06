import React from 'react';
import {FormattedMessage} from 'react-intl';

import speech2scratchIconURL from './speech2scratch.png';
import speech2scratchInsetIconURL from './speech2scratch-small.png';

const translationMap = {
    'ja': {
        'gui.extension.speech2scratch.description': '音声を認識してテキストに変換する。'
    },
    'ja-Hira': {
        'gui.extension.speech2scratch.description': 'おんせいをにんしきしてテキストにへんかんする。'
    }
};

const entry = {
    name: 'Speech2Scratch',
    extensionId: 'speech2scratch',
    extensionURL: 'https://champierre.github.io/speech2scratch/speech2scratch.mjs',
    collaborator: 'champierre',
    iconURL: speech2scratchIconURL,
    insetIconURL: speech2scratchInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Speech2Scratch Blocks."
            description="Description for Speech2Scratch Blocks."
            id="gui.extension.speech2scratch.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: true,
    helpLink: 'https://github.com/champierre/speech2scratch/',
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
