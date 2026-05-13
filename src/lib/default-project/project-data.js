import { defineMessages } from 'react-intl';
import sharedMessages from '../shared-messages';

const defaultMsg_README = `
#README #Welocome

# Welcome to **GaiaMod**, a Scratch editor based on PenguinMod, with features that served as ultimate experiences to coders eevrywhere!

Here, we put thi README feature from Astra Editor in here. Don't tell us that we stole those features because we are just lowkey people.

For its source code, pelase visit our source codes: [code repository](https://github.com/GaiaMod-Main).

Got a bug? Go to [this link](https://github.com/GaiaMod-Main/gaiamod-main.github.io/issues) to report it for us!

> [!NOTE]
> [Follow the head developer's profile on YouTube](https://www.youtube.com/@GaiaWindWave90)`;

let messages = defineMessages({
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    },
    tip: {
        defaultMessage: defaultMsg_README,
        description: 'a README',
        id: 'tw.defaultProject.readme'
    }
});

messages = { ...messages, ...sharedMessages };

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
                    '`jEk@4|i[#Fk?(8x)AV.-my variable': [
                        translator(messages.variable),
                        0
                    ]
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(messages.backdrop, { index: 1 }),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [],
                volume: 100
            },
            {
                isStage: false,
                name: translator(messages.sprite, { index: 1 }),
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '21ccd231439bc50cb761ecb7609fd799',
                        name: translator(messages.costume, { index: 1 }),
                        bitmapResolution: 1,
                        md5ext: '592bae6f8bb9c8d88401b54ac431f7b6.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 26,
                        rotationCenterY: 47
                    }
                ],
                sounds: [],
                volume: 100,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: ''
        }
    });
};


export default projectData;
