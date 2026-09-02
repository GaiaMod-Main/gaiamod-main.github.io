/* eslint-disable max-len */
/* Just a bunch of those lol */
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../brand';
import {
	pmExtensions,
	arkExtensions,
	dinoExtensions,
	snailExtensions,
	emExtensions,
	gmExtensions,
	gvbmExtensions,
	spExtensions,
	nbExtensions,
	amExtensions,
	dbExtensions,
	mistExtensions,
	aeExtensions,
	bilupExtensions,
	ztEngineExtensions,
	twExtensions,
	ccwExtensions,
	adacraftExtensions,
	otherExtensions,
	ml5Extensions,
	builtIns,
	scratch,
	extensionGalleries,
	extensionBuilders,
	extras,
	secrets
	}
	from './extensionlist.jsx';

import customExtensionIcon from './custom/custom.svg';
import customExtIcon from './custom/CustomEx.svg';
import customExtInsetIcon from './custom/CustomSmall.svg';

import mysteryThumb from './gaiamod/unknown.png';
import mysteryInsetIcon from './gaiamod/unknown-small.png';

const urlParams = new URLSearchParams(location.search);
const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');
const IsSecretExt = urlParams.has('newchallengersapporaching');
const IsMysteriousExt = urlParams.has('666');

const menuItems = [
    {
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: '',
        iconURL: customExtIcon, //customExtensionIcon
		insetIconURL: customExtInsetIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        featured: true,
        favoritable: true,
        favorited: true
    },
	{
            seperator: true
        }
];



//GaiaMod. Always go first.
gmExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//Ark IDE
arkExtensions.forEach(ext => {
        menuItems.push(ext);
    });

//Dino Mod
dinoExtensions.forEach(ext => {
        menuItems.push(ext);
    });

//Snail IDE
snailExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//Electra Mod
emExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//PenguinMod
pmExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//SharkPool
spExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//GvbvdxxMod2
gvbmExtensions.forEach(ext => {
        menuItems.push(ext);
    });

//NitroBolt
nbExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//AcidMod
amExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
	
//DashBlocks
dbExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//MistWarp
mistExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//Astra Editor
aeExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
	
//Bilup
bilupExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//02 Engine
ztEngineExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//TurboWarp
twExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//Cocrea World
ccwExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//Adacraft
adacraftExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//ML5
ml5Extensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//Other
otherExtensions.forEach(ext => {
        menuItems.push(ext);
    });
	
//Built-Ins
builtIns.forEach(ext => {
        menuItems.push(ext);
    });
	
//Scratch
scratch.forEach(ext => {
        menuItems.push(ext);
    });
	
//Galleries
extensionGalleries.forEach(ext => {
        menuItems.push(ext);
    });
	
//Builders
extensionBuilders.forEach(ext => {
        menuItems.push(ext);
    });


/*
----------------------------------------------
Secret extensions that only showed up when a certain password is entered as url params in the url address bar.
----------------------------------------------
*/
if (IsSecretExt) {
    secrets.forEach(ext => {
        menuItems.push(ext);
    });
}

if (IsMysteriousExt && IsSecretExt) {
const mysteryExtension = [
	{
        name: '???',
        extensionId: 'https://gaiamod-main.github.io/extensions/MysteryExtension.js',
        iconURL: mysteryThumb,
		insetIconURL: mysteryInsetIcon,
		customInsetColor: '#0F0F0F',
        credits: 'arajf',
        tags: ['othermods', 'jokes'],
        description: 'What\'s this extension doing here? You only know it when you use it.',
        featured: true
    },
];
mysteryExtension.forEach(ext => {
        menuItems.push(ext);
    });
}

/*
----------------------------------------------
### NOTE TO PENGUINMOD FORKS: ###
Please DO NOT make the extensions below accessible in the editor without livetests!
They are NOT fully developed for people to use and create full projects with!

These extensions could have missing features, cause random errors, broken projects, or even crash the editor!
Moving these into the main extension list will cause people who use your fork to assume they are ready for them to use!

Please keep these in livetests to reduce bug reports on your fork! :)
----------------------------------------------
*/
if (IsLocal || IsLiveTests) {
    extras.forEach(ext => {
        menuItems.push(ext);
    });
}

export default menuItems;
