/* eslint-disable max-len */
/* Just a bunch of those lol */
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../brand';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import animatedTextIconURL from './penguinmod/extensions/text extension.png';
import animatedTextInsetIconURL from './penguinmod/extensions/text extension small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import faceSensingIconURL from './faceSensing/thumb.png';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

// turbowarp, penguinmod & gallery icons
import twIcon from './tw/tw.svg';
import rubyIcon from './snail-ide/ruby.png';
import galleryIcon from './gallery/gallery.svg';
import customExtensionIcon from './custom/custom.svg';
import turbowarpIcon from './penguinmod/extensions/turbowarp_icon.svg';
import gaiamodIcon from './gaiamod/gaiamod_icon.png';
import penguinmodIcon from './gaiamod/penguinmod_icon.png';
import electramodIcon from './electramod/electramod_icon.png';
import astraeditorIcon from './gaiamod/astraeditor_icon.svg';
import penguinmodLibraryExtensionIcon from './penguinmod/library.svg';
import sharkpoolGalleryIcon from './penguinmod/sharkpool-library.svg';

import ExtForgeIcon from './penguinmod/extforge.svg';

import DiscordIcon from './discord/icon.svg';
import DiscordRPCIcon from './discord/rpc.png';

import filesExtensionIcon from './penguinmod/extensions/files.svg';
import jgTailgatingExtensionIcon from './penguinmod/extensions/tailgating.png';
import jgRuntimeExtensionIcon from './penguinmod/extensions/runtime.svg';
import jgPrismExtensionIcon from './penguinmod/extensions/prism.png';
import jgDebuggingIcon from './penguinmod/extensions/debugging.svg';

import jwProtoExtensionIcon from './penguinmod/extensions/proto.svg';
import jwUniteExtensionIcon from './penguinmod/extensions/Unite.png';

import jwStructsExtensionIcon from './penguinmod/extensions/ooplogo.png';

import jwArrayExtensionThumb from './penguinmod/extensions/jwArray.svg';
import jwTargetsExtensionThumb from './penguinmod/extensions/jwTargets.svg';
import jwNumExtensionThumb from './penguinmod/extensions/jwNum.svg';
import jwColorExtensionThumb from './penguinmod/extensions/jwColor.svg';
import jwVectorExtensionThumb from './penguinmod/extensions/jwVector.svg';
import jwLambdaExtensionThumb from './penguinmod/extensions/jwLambda.svg';
import jwScopeExtensionThumb from './penguinmod/extensions/jwScope.svg';
import jwXMLExtensionIcon from './penguinmod/extensions/jwXML.svg';
import jwPointerExtensionThumb from './penguinmod/extensions/jwPointer.svg';
import jwIntExtensionThumb from './penguinmod/extensions/jwInt.svg';

import iygPerlinNoiseExtensionIcon from './penguinmod/extensions/perlinnoisebanner.png';

// thank yo godslayerakp for makin pmCamera :good:
import pmCameraExtensionIcon from './penguinmod/extensions/pmcamera_thumbnail.png';

// cl waw
// import cloudlinkThumb from './penguinmod/extensions/cloudlinkThumb.png';
import cloudlinkIcon from './penguinmod/extensions/cloudlinkIcon.svg';
import clfiveIcon from './cloudlink/cl5.svg';
import clomegaIcon from './cloudlink/clomega.svg';

// thx jeremey
import canvasExtensionBanner from './penguinmod/extensions/CanvasExtensionMenu.png';
import canvasExtensionIcon from './penguinmod/extensions/CanvasSmall.png';

// griffpatch stuff that hopefully we can keep pls plsplspl !!S!
import griffpatchPhysicsThumb from './penguinmod/extensions/griffpatch_physics.png';
import griffpatchPhysicsIcon from './penguinmod/extensions/griffpatch_physicsIcon.svg';

import gp from './penguinmod/extensions/gamepad.svg';
import clippingblending from './penguinmod/extensions/clippingblending.svg';

import pointerlockThumb from './penguinmod/extensions/pointerlock.png';
import cursorThumb from './penguinmod/extensions/cursor.svg';

// LilyMakesThings 🙏
import lilyTempVariablesExtensionIcon from './penguinmod/orgtw/TempVariables2.svg';

// more icons so they arent just red when the extension color is not red
import gsaTempVariablesExtensionIcon from './penguinmod/extensions/tempvariables.svg';
import jgIframeExtensionIcon from './penguinmod/extensions/iframe.png';
import jgExtendedAudioExtensionIcon from './penguinmod/extensions/extendedaudio.png';
import jgScratchAuthExtensionIcon from './penguinmod/extensions/scratchauth2.svg';
import jgPermissionExtensionIcon from './penguinmod/extensions/permissions.png';
import jgCloneManagerExtensionIcon from './penguinmod/extensions/clonemanager.png';
import pmInlineBlocksExtensionIcon from './penguinmod/extensions/inlineblocks.png';
import jgPackagerApplicationsExtensionIcon from './penguinmod/extensions/packagedApplications.png';
import jgPackagerApplicationsInsetExtensionIcon from './penguinmod/extensions/packagedApplications_inset.png';
import spJSONExtensionIcon from './penguinmod/extensions/sp_json.svg';

// import jgTweeningExtensionIcon from './penguinmod/extensions/tween.png';
import jgsilvxrcatInterfacesExtensionIcon from './penguinmod/extensions/interfaces2.png';

// 3D MAN WTF
import jg3dExtensionIcon from './penguinmod/extensions/3d.png';
import jg3dInsetExtensionIcon from './penguinmod/extensions/3dicon.png';
import jg3dVrExtensionIcon from './penguinmod/extensions/3dVr.png';
import jg3dVrInsetExtensionIcon from './penguinmod/extensions/3dVr_Inset.png';
import fr3dPhysicsExtensionIcon from './penguinmod/extensions/3d_physics.png';
import fr3dPhysicsInsetExtensionIcon from './penguinmod/extensions/3d_physics_icon_sized.png';

// virtal realty
import jgVrExtensionIcon from './penguinmod/extensions/vr_extension.png';

import theshovelCustomStylesIcon from './penguinmod/orgtw/CustomStyles.svg';
import theshovelCanvasEffectsIcon from './penguinmod/extensions/canvas_effects.svg';
import theshovelLzCompressIcon from './penguinmod/orgtw/lz-compress2.svg';
import theshovelColorPickerIcon from './penguinmod/orgtw/ColorPicker.svg';

// sharkpool
import sharkpoolPrintingIcon from './penguinmod/extensions/printing.svg';
import sharkpoolTuneIcon from './penguinmod/extensions/tuneShark.svg';
import sharkpoolMBPIcon from './penguinmod/extensions/myBlocksPlus.svg';
import sharkpoolBCIcon from './penguinmod/extensions/BetterComments.svg';
import sharkpoolPEIcon from './penguinmod/extensions/particleEngine.svg';
import jgScriptsExtensionIcon from './penguinmod/extensions/scripts.svg';
import sharkpoolLooksExpandedIcon from './penguinmod/extensions/looksExpanded.svg';
import spTurboSkinsIcon from './penguinmod/extensions/turboSkins.svg';
import spFontManagerIcon from './penguinmod/extensions/fontManager.svg';
import spSoundWaveIcon from './penguinmod/extensions/soundWaves.svg';
import spTempVarsIcon from './penguinmod/extensions/sp_tempVars.svg';

// events
import jgStorageExtensionIcon from './penguinmod/extensions/storage.png';
import jgTimersExtensionIcon from './penguinmod/extensions/multipletimers.png';
import jgAdvancedTextExtensionIcon from './penguinmod/extensions/advancedtext.png';

import jgJavascriptExtensionIcon from './penguinmod/extensions/javascript.png';
import jgPathfindingExtensionIcon from './penguinmod/extensions/pathfinding.png';
import jgAnimationExtensionIcon from './penguinmod/extensions/animation.png';

// category expansions
import pmMotionExpansionExtensionIcon from './penguinmod/extensions/motion_expanded.png';
import pmEventsExpansionExtensionIcon from './penguinmod/extensions/events_expanded.png';
import pmControlsExpansionExtensionIcon from './penguinmod/extensions/controls_expanded.png';
import pmSensingExpansionExtensionIcon from './penguinmod/extensions/sensing_expanded.png';
import pmOperatorsExpansionExtensionIcon from './penguinmod/extensions/operators_expanded.png';

// default icon if one is not made yet...
import defaultExtensionIcon from './penguinmod/extensions/placeholder.png';


// um...
import turboBuilderIcon from './gaiamod/turbobuilder.png';
import turboBuilderDevIcon from './gaiamod/turbobuilder-dev.png';
import silvxrcatOddMessagesExtensionIcon from './penguinmod/extensions/oddmessages.svg';

// dinosaurmod
import luaIcon from './dinosaurmod/lua.png';
import pythonIcon from './dinosaurmod/python.png';

//sip snip snip lol
import chatgpt2scratchIconURL from './chatgpt2scratch/chatgpt2scratch.png';
import chatgpt2scratchInsetIconURL from './chatgpt2scratch/chatgpt2scratch-small.png';
import facemesh2scratchIconURL from './facemesh2scratch/facemesh2scratch.png';
import facemesh2scratchInsetIconURL from './facemesh2scratch/facemesh2scratch-small.png';
import scratch2webserialapiIconURL from './scratch2webserialapi/scratch2webserialapi.png';
import scratch2webserialapiInsetIconURL from './scratch2webserialapi/scratch2webserialapi-small.png';
import handpose2scratchIconURL from './handpose2scratch/handpose2scratch.png';
import handpose2scratchInsetIconURL from './handpose2scratch/handpose2scratch-small.png';
import ic2scratchIconURL from './ic2scratch/ic2scratch.png';
import ic2scratchInsetIconURL from './ic2scratch/ic2scratch-small.png';
import posenet2scratchIconURL from './posenet2scratch/posenet2scratch.png';
import posenet2scratchInsetIconURL from './posenet2scratch/posenet2scratch-small.png';
import ml2scratchIconURL from './ml2scratch/ml2scratch.png';
import ml2scratchInsetIconURL from './ml2scratch/ml2scratch-small.png';
import tm2scratchIconURL from './tm2scratch/tm2scratch.png';
import tm2scratchInsetIconURL from './tm2scratch/tm2scratch-small.png';
import tmpose2scratchIconURL from './tmpose2scratch/tmpose2scratch.png';
import tmpose2scratchInsetIconURL from './tmpose2scratch/tmpose2scratch-small.png';

import roku from './roku/roku.jpg';

// onegpio

import onegpioArduinoImage from './onegpioArduino/onegpioArduino.png';
import onegpioArduinoInsetIconURL from './onegpioArduino/onegpioArduino-small.png';

import onegpioRpiImage from './onegpioRpi/onegpioRpi.png';
import onegpioRpiInsetIconURL from './onegpioRpi/onegpioRpi-small.png';

import onegpioEspImage from './onegpioEsp/onegpioEsp.png';
import onegpioEspInsetIconURL from './onegpioEsp/onegpioEsp-small.png';

import onegpioPicoboardImage from './onegpioPicoboard/onegpioPicoboard.jpg';
import onegpioPicoboardInsetIconURL from './onegpioPicoboard/onegpioPicoboard-small.png';

import onegpioCpxImage from './onegpioCpx/onegpioCpx.jpg';
import onegpioCpxInsetIconURL from './onegpioCpx/onegpioCpx-small.png';

import onegpioRoboHATImage from './onegpioRoboHAT/onegpioRoboHAT.png';
import onegpioRoboHATInsetIconURL from './onegpioRoboHAT/onegpioRoboHAT-small.png';

import onegpioRpiPicoImage from './onegpioRpiPico/onegpioRpiPico.png';
import onegpioRpiPicoInsetIconURL from './onegpioRpiPico/onegpioRpiPico-small.png';

//gaiamod
import gaiaGPTThumb from './gaiamod/GaiaGPT.png';
import gaiaRuntimeThumb from './gaiamod/runtimeThumb.svg';
import gaiaBlocksThumb from './gaiamod/gaiablocks.png';
import gaiaExGalleryThumb from './gaiamod/gallery.png';
import sailormoonThumb from './gaiamod/lolsailormoon.png';
import kittenbotThumb from './gaiamod/KittenBot.png';
import cocreaFetchThumb from './gaiamod/cocreaFetch.png';
import promptsThumb from './gaiamod/prompts.png';
import spinachThumb from './gaiamod/spinach.png';
import catsThumb from './gaiamod/CatFacts.png';
import NESEmuThumb from './gaiamod/NESEmulator.png';
import AlexaThumb from './gaiamod/Alexa.png';
import penguinThumb from './gaiamod/PenguinAttack.png';
import scratchmegarepoThumb from './gaiamod/ScratchMegaRepo.png';
import snailIDEGalleryThumb from './gaiamod/snailIDEEXGallery.png';
import loremIpsumThumb from './gaiamod/LoremIpsumThumb.png';
import webcamThumb from './gaiamod/WebCamThumb.png';
import chatNioThumb from './gaiamod/ChatNio.png';

import ampmodgalleryThumb from './gaiamod/AmpMod.svg';

const urlParams = new URLSearchParams(location.search);
const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');

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
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        featured: true
    },
    {
        name: 'GaiaBlocks',
        extensionId: 'https://gaiamod-main.github.io/GaiaBlocks.js',
        extDeveloper: 'GaiaWindWave90',
        iconURL: gaiaBlocksThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod'],
        description: 'Wonderful utility blocks! Modified by Gaia.',
        featured: true
    },
    {
        name: 'GaiaGPT',
        extensionId: 'https://gaiamod-main.github.io/GaiaGPT.js',
        iconURL: gaiaGPTThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod', 'ai'],
        description: 'A GaiaMod modification of Pang AI with more prompts.',
        extDeveloper: 'logise1123 and GaiaWindWave90',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'Runtime Tools',
        extensionId: 'https://gaiamod-main.github.io/GaiaRuntime.js',
        iconURL: gaiaRuntimeThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod'],
        description: 'Blocks for modifying Scratch objects like Turbo Mode, stage size, clone limits, and more!',
        extDeveloper: 'GaiaWindWave90',
        featured: true
    },
    {
        name: 'Prompts',
        extensionId: 'https://gaiamod-main.github.io/GTPPrompts.js',
        iconURL: promptsThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        extDeveloper: 'GaiaWindWave90',
        tags: ['gaiamod', 'ai'],
        description: 'Prompts made for Gaia AI. Inspired by the prompts extension found in Snail-IDE.',
        featured: true
    },
    {
        name: 'Spinach Facts',
        extensionId: 'https://gaiamod-main.github.io/SpinachFacts.js',
        iconURL: spinachThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        extDeveloper: 'GaiaWindWave90',
        tags: ['gaiamod', 'jokes'],
        description: 'An extension about spinach! Based on Gen1x\'s CATS, MrIncredibleMaker\'s DOGS and pooiod7\'s Raccoon Facts extensions.',
        internetConnectionRequired: true,
        featured: true
    },
    {
            name: 'Penguin Attack!',
            extensionId: 'https://gaiamod-main.github.io/PenguinAttack.js',
            iconURL: penguinThumb,
    		insetIconURL: gaiamodIcon,
	    	customInsetColor: '#2D2DD2',
            tags: ['gaiamod', 'jokes'],
            internetConnectionRequired: true,
            credits: 'JeremyGamer13, with modifications by GaiaWindWave90',
            description: 'Edited version of the Fire in the Hole extension.',
            featured: true
        },
    {
        name: 'Webcam Recorder',
        extensionId: 'https://gaiamod-main.github.io/Webcamrecorder.js',
        iconURL: webcamThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        credits: '-SIPC-, with modifications by GaiaWindWave90',
        tags: ['gaiamod'],
        description: 'Records videos straight out of webcam.',
        internetConnectionRequired: false,
        featured: true
    },
    {
        name: 'Extension Manager',
        extensionId: 'https://gaiamod-main.github.io/extensionManager.js',
        iconURL: 'https://cicpowerbox.us/wp-content/uploads/2021/08/CIC-POWERBOX-CROSSOVER-3.png',
        credits: 'soiz1, with modifications by GaiaWindWave90',
        tags: ['othermods'],
        description: 'Manages extensions.',
        internetConnectionRequired: false,
        featured: true
    },
    {
        name: 'Speech Bubbles',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Speech-Bubbles.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Speech-Bubbles.svg',
        credits: 'SharkPool',
        tags: ['penguinmod'],
        description: 'Customizable Speech Bubbles.',
        internetConnectionRequired: false,
        featured: true
    },
    {
        name: 'Adacraft HTTP',
        extensionId: 'adahttp',
        tags: ['adacraft'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/dea779e4ed4e0d1e4d553755f0beea24.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/c82f3fea945be86f2c208f2e3d799c8e.svg',
        description: 'Some new blocks to send HTTP requests ad manage results.',
        credits: 'Adacraft',
        featured: true
    },
    {
        name: 'Scratch Utitlites',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Scratch-Utilities.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Scratch-Utilities.svg',
        credits: 'SharkPool',
        tags: ['penguinmod'],
        description: 'Do many things via the Scratch API; you can even fetch cloud data from projects!',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'Browser Check',
        tags: ['astraeditor'],
        extensionId: 'https://editors.astras.top/extensions/browserDetector.js',
        iconURL: 'https://editors.astras.top/extensions/images/browserDetector.png',
        insetIconURL: astraeditorIcon,
		customInsetColor: '#0099FF',
        description: 'Detects the browser type running the project, supports multiple browser identification',
        extDeveloper: 'DVD',
        featured: true
    },
    {
        name: 'Adacraft GIF',
        extensionId: 'gif',
        tags: ['adacraft'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/e482db7668b6f6bbc8ce5223e4427e96.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/bbb78885842b3cd65078881647f674f2.svg',
        description: 'Some new blocks to encode GIF files.',
        credits: 'Adacraft',
        featured: true
    },
	{
        name: '3D',
        extensionId: 'jg3d',
        iconURL: jg3dExtensionIcon,
        tags: ['penguinmod'],
        customInsetColor: '#B200FF',
        insetIconURL: jg3dInsetExtensionIcon,
        description: 'Use the wonders and magic of 3D to power-up your project!',
        extDeveloper: 'JeremyGamer13',
        featured: true
    },
    {
        name: 'Cocrea Fetch API',
        extensionId: 'https://gaiamod-main.github.io/CocreaFetch.js',
        iconURL: cocreaFetchThumb,
        credits: 'fath11',
        tags: ['gandiide'],
        description: 'Fetches API from Cocrea.',
        featured: true
    },
    {
        name: 'Video',
        extensionId: 'https://extensions.turbowarp.org/Lily/Video.js',
        extDeveloper: 'LilyMakesThings, SharkPool, and Fath11',
        iconURL: 'https://extensions.turbowarp.org/images/Lily/Video.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        description: 'Play videos from URLs.',
        featured: true
    },
	   {
        name: 'Newgrounds',
        extensionId: 'https://extensions.turbowarp.org/obviousAlexC/newgroundsIO.js',
        extDeveloper: 'ObviousAlexC',
        iconURL: 'https://extensions.turbowarp.org/images/obviousAlexC/newgroundsIO.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Blocks that allow games to interact with the Newgrounds API.',
        featured: true
    },
	{
        name: 'Newgrounds Audio',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Newgrounds-Audio.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Newgrounds-Audio.svg',
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'Fetch Audio and Audio Information from Newgrounds. Works best with Tune Shark',
        featured: true
    },
    {
        name: 'Dangerous, But Useful',
        extensionId: 'https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/custom%20extensions/UpgradedDangerousBusUseful.js',
        iconURL: 'https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/extendedGallery/Icons/DBU.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        description: 'Dangerous Utility Blocks!',
		extDeveloper: 'ObviousAlexC',
        featured: true
    },
    {
        name: 'URL Information',
        extensionId: 'https://snail-ide.js.org/urlinfo.js',
        iconURL: 'https://github.com/Snail-IDE/snail-ide.github.io/blob/develop/src/lib/libraries/extensions/urlinfo/urlinfo.png?raw=true',
        tags: ['snailide'],
        credits: 'redspacecat',
        description: 'Get information about the URL',
        featured: true
    },
    {
        name: 'Browser & OS Information',
        extensionId: 'https://snail-ide.js.org/browserandosinfo.js',
        iconURL: 'https://github.com/Snail-IDE/snail-ide.github.io/blob/develop/src/lib/libraries/extensions/browserandosinfo/browserandosinfo.png?raw=true',
        tags: ['snailide'],
        credits: 'redspacecat',
        description: 'Get information about the user\'s browser and operating system',
        featured: true
    },
    {
        name: 'Better Quake',
        extensionId: 'https://raw.githubusercontent.com/Gandi-IDE/custom-extension/refs/heads/main/extensions/QuakeStudio/BetterQuake/BetterQuake.js',
        iconURL: 'https://github.com/Gandi-IDE/custom-extension/blob/main/extensions/QuakeStudio/assets/banner.png?raw=true',
        credits: 'fath11',
        tags: ['gandiide'],
        description: 'Better shader loader.',
        featured: true
    },
    {
        name: 'Cyberexplorer\'s Toolbox Mini',
        tags: ['astraeditor'],
        extensionId: 'https://editors.astras.top/extensions/cyberexplorertools.js',
        iconURL: 'https://editors.astras.top/extensions/images/cyberexplorertools.png',
		insetIconURL: astraeditorIcon,
		customInsetColor: '#0099FF',
        description: 'Uh....',
        extDeveloper: 'Cyberexplorer',
        featured: true
    },
    {
        name: 'Ada Browser',
        tags: ['adacraft'],
        extensionId: 'adabrowser',
        iconURL: 'https://www.adacraft.org/studio/static/assets/40998229311219c2117265d5e4bd9745.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/f1fe0bbe960a0d60c783b111c84b837e.svg',
        description: 'Some new blocks to interact with the browser',
        credits: 'Adacraft',
        featured: true
    },
    {
        name: 'Croquet',
        extensionId: 'croquet',
        tags: ['adacraft'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/05479b8bc697d26fee9740d868c2a30e.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/3ebaeec3436fd9dd59d325a879e1a0dc.svg',
        description: 'Croquet Collaboration Library',
        credits: 'Croquet Corporation',
        featured: true
    },
    {
        name: 'Windows Toast',
        extensionId: 'https://editors.astras.top/extensions/windowstoast.js',
        tags: ['astraeditor'],
        iconURL: 'https://editors.astras.top/extensions/images/windowstoast.png',
		insetIconURL: astraeditorIcon,
		customInsetColor: '#0099FF',
        description: 'Send Windows Toast notifications with icon, sound and duration settings',
        extDeveloper: 'DVD',
        featured: true
    },
	{
        name: 'On-Screen Controls',
        extensionId: 'https://raw.githubusercontent.com/axolayDev/extensions/refs/heads/main/resources/extensions/controls.js',
        iconURL: 'https://github.com/axolayDev/extensions/blob/main/resources/controls.png?raw=true',
        extDeveloper: 'AxolayDev',
        tags: ['othermods'],
        description: 'Control your projects with multitouch without a hassle!',
        featured: true
    },
    {
        name: 'Ada Vision',
        extensionId: 'adavision',
        tags: ['adacraft', 'ai'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/e0dbaa558a96f981dd0a34c25b4b4b84.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/327aa5322c2e9cd1cd90cb69efa1c15a.svg',
        description: 'Use TeachableMachine models to detect things in images.',
        credits: 'Adacraft',
        featured: true
    },
    {
        name: 'Ada Sound',
        extensionId: 'adasound',
        tags: ['adacraft', 'ai'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/3aa7424034ffdc3bd8027132a5b1b5b9.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/21800acf6e3a345f805d74d75e32bb2d.png',
        description: 'Use TeachableMachine models to detect things in sounds.',
        credits: 'Adacraft',
        featured: true
    },
    {
        name: 'Rotur',
        extensionId: 'https://extensions.mistium.com/featured/Rotur.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Rotur.png',
        tags: ['mistwarp'],
        description: "Utilise Rotur in your projects.",
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'RoturVoice',
        extensionId: 'https://extensions.mistium.com/featured/roturVoice.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/roturVoice.png',
        tags: ['mistwarp'],
        description: "Voice and video calling for GaiaMod and other Scratch mods.",
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'Multi-Source Extensions List',
        extensionId: 'https://editors.astras.top/extensions/ningqiMultiSourceExtensions.js',
        tags: ['astraeditor'],
		insetIconURL: astraeditorIcon,
		customInsetColor: '#0099FF',
        iconURL: 'https://editors.astras.top/extensions/images/ningqiMultiSourceExtensions.png',
        description: 'Fetches extension lists from AstraEditor or ningqiCollectCollection repositories, and allows loading extensions from arbitrary URLs.',
        extDeveloper: 'ningqi',
        featured: true
    },
    {
        name: 'Adacraft Runtime',
        extensionId: 'adaruntime',
        tags: ['adacraft'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/53d3dbd30eb60a7860a3ffdb4753a43f.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/e91bb243062b53cc04ac11d1c7e381d6.svg',
        description: 'Some new blocks to interact with the adacraft runtime (renderer, VM, etc.)',
        credits: 'Adacraft',
        featured: true
    },
    {
        name: 'Lorem Ipsum Generator',
        extensionId: 'https://huggingface.co/datasets/soiz1/my-scratch-ai-extensions/raw/main/Lorem-Ipsum-Generator.js',
        iconURL: loremIpsumThumb,
        credits: 'Flappy25',
        tags: ['othermods'],
        description: 'Generates random text examples.',
        internetConnectionRequired: false,
        featured: true
    },
    {
        name: 'Ollama',
        extensionId: 'https://raw.githubusercontent.com/axolayDev/extensions/refs/heads/main/resources/extensions/ollama.js',
        iconURL: 'https://github.com/axolayDev/extensions/blob/main/resources/ollama.png?raw=true',
        extDeveloper: 'AxolayDev',
        tags: ['othermods', 'ai'],
        description: 'Connect to your local Ollama server or an API through Scratch!',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'ChatGPT2Scratch',
        extensionId: 'chatgpt2scratch',
        iconURL: chatgpt2scratchIconURL,
        insetIconURL: chatgpt2scratchInsetIconURL,
        credits: 'ichiroc',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Interact with ChatGPT in Scratch!',
        featured: true
    },
    {
        name: 'ML2Scratch',
        extensionId: 'ml2scratch',
        iconURL: ml2scratchIconURL,
        insetIconURL: ml2scratchInsetIconURL,
		credits: 'champierre',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'ML2Scratch Blocks.',
        featured: true
    },
    {
        name: 'TM2Scratch',
        extensionId: 'ml2scratch',
        iconURL: tm2scratchIconURL,
        insetIconURL: tm2scratchInsetIconURL,
		credits: 'Tsukurusha, YengawaLab and Google',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Lets you train with images and audio.',
        featured: true
    },
    {
        name: 'TMPose2Scratch',
        extensionId: 'tmpose2scratch',
        iconURL: tmpose2scratchIconURL,
        insetIconURL: tmpose2scratchInsetIconURL,
		credits: 'champierre',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Lets you train with poses.',
        featured: true
    },
    {
        name: 'HandPose2Scratch',
        extensionId: 'handpose2scratch',
        credits: 'champierre',
        description: 'Hand tracking in Scratch.',
        iconURL: handpose2scratchIconURL,
        insetIconURL: handpose2scratchInsetIconURL,
        tags: ['othermods', 'ai'],
        internetConnectionRequired: true,
        featured: true
    },	
    {
        name: 'Posenet2Scratch',
        extensionId: 'posenet2scratch',
        iconURL: posenet2scratchIconURL,
        insetIconURL: posenet2scratchInsetIconURL,
        credits: 'champierre',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Detect human poses quickly and accurately with a normal WebCam without using a special device',
        featured: true
    },
    {
        name: 'Facemesh2scratch',
        extensionId: 'facemesh2scratch',
        iconURL: facemesh2scratchIconURL,
        insetIconURL: facemesh2scratchInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Use facetracking in your projects!',
        featured: true
    },
    {
        name: 'Scratch2WebSerialAPI',
        extensionId: 'scratch2webserialapi',
        iconURL: scratch2webserialapiIconURL,
        insetIconURL: scratch2webserialapiInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['othermods'],
        description: 'Do more complex things with hardware via the serial ports.',
        featured: true
    },
    {
        name: 'scratch2maqueen',
        extensionId: 'scratch2maqueen', // update reference once file names are updated
        tags: ['othermods'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        iconURL: 'https://raw.githubusercontent.com/champierre/scratch2maqueen/master/scratch-gui/src/lib/libraries/extensions/scratch2maqueen/scratch2maqueen.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/scratch2maqueen/master/scratch-gui/src/lib/libraries/extensions/scratch2maqueen/scratch2maqueen-small.png',
        description: 'Control DFRobot Maqueen.',
        featured: true,
        credits: 'Vernier',
    },
    {
        name: 'ImageClassifer2Scratch',
        extensionId: 'ic2scratch',
        iconURL: ic2scratchIconURL,
        insetIconURL: ic2scratchInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['othermods', 'ai'],
        description: 'Image Classification Blocks.',
        featured: true
    },
    {
        name: 'Site Runtime',
        extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/webextension.js',
        tags: ['dinosaurmod'],
        iconURL: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/images/site-runtime.png',
        description: 'A Combined version of 2 Extensions: Packager Applications & AdaBrowser',
        featured: true,
        extDeveloper: 'MrIncredibleMaker',
        internetConnectionRequired: true,
        disabled: false
    },
    {
        name: 'NES Emulator',
        extensionId: 'nesemulator', // update reference once file names are updated
        tags: ['snailide'],
        bluetoothRequired: false,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: false,
        iconURL: NESEmuThumb,
        description: 'Use the power of the NES emulation in your projects!',
        featured: true,
        credits: 'Unknown',
    },
{
        name: '3D VR',
        extensionId: 'jg3dVr',
        iconURL: jg3dVrExtensionIcon,
		insetIconURL: jg3dVrInsetExtensionIcon,
        tags: ['penguinmod'],
        description: "Unfinished PenguinMod Extension.",
        extDeveloper: "JeremyGamer13",
        featured: true
    },
    {
        name: 'PangAI',
        extensionId: 'https://raw.githubusercontent.com/Logise1123/myextensions/refs/heads/main/pangai.js',
        iconURL: 'https://raw.githubusercontent.com/Logise1123/myextensions/refs/heads/main/pangai.png',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'ai'],
        description: 'Extension for AI usage.',
        credits: 'logise1123',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'FireBase Auth',
        extensionId: 'https://raw.githubusercontent.com/Logise1123/FirebaseDB-/refs/heads/main/auth.js',
        iconURL: 'https://raw.githubusercontent.com/Logise1123/myextensions/refs/heads/main/firebaseauth.png',
        tags: ['penguinmod'],
        description: 'Secure Authentication.',
        credits: 'logise1123',
        internetConnectionRequired: true,
        featured: true
    },
	    {
        name: 'Kobold AI',
        extensionId: 'https://p7scratchextensions.pages.dev/ext/KoboldAI/main.js',
        extDeveloper: 'Pooiod7',
        description: 'Generate text and images for free with the power of The Horde',
        iconURL: 'https://p7scratchextensions.pages.dev/ext/KoboldAI/cover.svg',
        tags: ['penguinmod', 'ai'],
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'SAM Speech',
        extensionId: 'https://p7scratchextensions.pages.dev/ext/Sam/main.js',
        extDeveloper: 'Pooiod7',
        description: 'Generate speech from text using sam',
        iconURL: 'https://p7scratchextensions.pages.dev/ext/Sam/cover.svg',
        tags: ['penguinmod'],
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'QR Codes',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/QR-Codes.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/QR-Codes.svg',
        tags: ['penguinmod'],
        description: 'Create and Read QR Codes on the Client.',
        extDeveloper: 'SharkPool',
        featured: true
    },
    {
        name: 'Roku',
        extensionId: 'roku',
        internetConnectionRequired: true,
        credits: 'gvbvdxx',
        iconURL: roku,
        tags: ['snailide'],
        description: 'Interact with your Roku tv via the GM2Helper software!',
        featured: true
    },
        {
        name: 'Video Sharing',
        extensionId: 'https://p7scratchextensions.pages.dev/ext/VideoSharing/main.js',
        iconURL: 'https://p7scratchextensions.pages.dev/ext/VideoSharing/cover.svg',
        tags: ['penguinmod'],
        description: 'Share your screen or camera on your project as a data-uri.',
        extDeveloper: 'Pooiod7',
        featured: true
    },	
    {
        name: 'Beepbox Player',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/BeepBoxPlayer.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/BeepBoxPlayer.svg',
        tags: ['penguinmod', 'noisemaker'],
        description: 'Play, edit, and read songs from any BeepBox mod directly from the URL or JSON!',
        extDeveloper: 'DogeisCut',
        featured: true
    },
	    {
        name: 'Spotify',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Spotify.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Spotify.svg',
        credits: 'SharkPool',
        tags: ['penguinmod', 'noisemaker'],
        description: 'Fetch Statistics, Information, and Play Songs from Spotify.',
        internetConnectionRequired: false,
        featured: true
    },
	    {
        name: 'SoundCloud API',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/SoundCloud-API.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/SoundCloud-API.svg',
        credits: 'SharkPool',
        tags: ['penguinmod', 'noisemaker'],
        description: 'Fetch Statistics, Information, and Play Songs from SoundCloud.',
        internetConnectionRequired: false,
        featured: true
    },
	{
        name: 'Meme Extension',
        extensionId: 'https://banana-mod.github.io/MemeExtension/MemeExtension.js',
        iconURL: 'https://banana-mod.github.io/MemeExtension/memeextension.svg',
        credits: 'Banana-mod',
        tags: ['othermods'],
        description: 'Get fresh baked memes.',
        featured: true
    },
    {
        name: 'Italian Brainrot Extension',
        extensionId: 'https://banana-mod.github.io/Italian-Brainrot-Extension/italianbrainrot.js',
        iconURL: 'https://banana-mod.github.io/Italian-Brainrot-Extension/itbr.svg',
        credits: 'Banana-mod',
        tags: ['othermods'],
        description: 'Let the italian brainrot enter!',
        featured: true
    },
    {
        name: 'BlockBeat',
        extensionId: 'https://banana-mod.github.io/BlockBeat/blockBeat.js',
        iconURL: 'https://banana-mod.github.io/BlockBeat/blockBeat.svg',
        credits: 'Banana-mod',
        tags: ['othermods', 'noisemaker'],
        description: 'Lets you play blockBeat!',
        featured: true
    },
    {
        name: 'Stage Camera',
        extensionId: 'pmCamera',
        iconURL: pmCameraExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: (
            <FormattedMessage
                defaultMessage="Allows the camera to move around anywhere on the stage."
                description="The description for the PenguinMod Camera extension."
                id="pm.extension.camera.description"
            />
        ),
        credits: 'Inspired by⠀⠀⠀⠀⠀⠀ DT-is-not-available',
        featured: true
    },
    {
        name: 'Files',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Files-Expanded.js',
        extDeveloper: 'SharkPool',
        iconURL: filesExtensionIcon,
        tags: ['turbowarp', 'datamgmt'],
        description: 'Blocks for reading, editing, & creating files & folders.',
        featured: true
    },
    {
        name: 'Network',
        extensionId: 'https://extensions.turbowarp.org/true-fantom/network.js',
        extDeveloper: 'TrueFantom',
        iconURL: 'https://extensions.turbowarp.org/images/true-fantom/network.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Various blocks for interacting with the network.',
        featured: true
    },
    {
        name: 'Zip',
        extensionId: 'https://extensions.turbowarp.org/CST1229/zip.js',
        iconURL: 'https://extensions.turbowarp.org/images/CST1229/zip.svg',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Create and edit .zip format files, including .sb3 files.',
        twDeveloper: 'CST1229',
        featured: true
    },
    {
        name: 'Pen+',
        extensionId: 'https://extensions.penguinmod.com/extensions/ObviousAlexC/PenPlus.js',
        tags: ['categoryexpansion', 'graphics'],
        iconURL: 'https://extensions.penguinmod.com/images/ObviousAlexC/PenPlus.svg',
        description: 'An extension to the Pen category! Adds blocks for drawing triangles using textures and tints, drawing images and editing their pixels, etc.',
        featured: true,
        extDeveloper: 'pinksheep2917'
    },
    {
        name: 'Ruby Maps',
        extensionId: 'https://ruby-devs.vercel.app/cdn/extensions/rubymaps.js',
        tags: ['penguinmod'],
        iconURL: 'https://ruby-devs.vercel.app/cdn/thumbnails/rubymaps.svg',
        description: 'Lets you integrate the power of maps into your projects!',
        credits: 'The RubyDevs Team',
        featured: true
    },
    {
        name: 'Sound Systems',
        extensionId: 'jgExtendedAudio',
        iconURL: jgExtendedAudioExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion', 'noisemaker'],
        description: 'An audio grouping system for more intensive audio work.',
        featured: true
    },
    {
        name: 'Tune Shark V3',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark-V3.js',
        iconURL: sharkpoolTuneIcon,
        tags: ['penguinmod', 'categoryexpansion', 'noisemaker'],
        description: 'Advanced audio engine with complex sound control, multiple audio effects and more!',
        extDeveloper: 'SharkPool',
        featured: true
    },
    {
        name: 'Sound Waves',
        extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/Sound-Waves.js',
        iconURL: spSoundWaveIcon,
        tags: ['penguinmod', 'noisemaker'],
        description: 'Make sounds with oscillators!',
        extDeveloper: 'SharkPool',
        featured: true
    },
     {
            name: 'ShovelUtils',
            extensionId: 'https://extensions.turbowarp.org/TheShovel/ShovelUtils.js',
            tags: ['turbowarp'],
            iconURL: 'https://extensions.turbowarp.org/images/TheShovel/ShovelUtils.png',
            insetIconURL: turbowarpIcon,
			customInsetColor: '#ff4d4d',
            description: 'A bunch of miscellaneous blocks.',
            featured: true,
            twDeveloper: 'TheShovel and Mio'
        },
    {
        name: 'Pang API',
        extensionId: 'https://extensions.penguinmod.com/extensions/SammerLOL/pangapi.js',
        iconURL: 'https://extensions.penguinmod.com/images/SammerLOL/pangapi.avif',
        credits: 'oc9x97',
        tags: ['penguinmod'],
        description: 'Fetch details of projects and users from PenguinMod.',
        featured: true
    },
    {
        name: 'PenguinGPT',
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/penguingpt.js',
        iconURL: 'https://ruby-devs.vercel.app/cdn/thumbnails/penguingpt.png',
        tags: ['penuinmod', 'ai'],
        description: 'Using WorkingTurboGPT\'s source code, we made PenguinGPT! New features will come like DALL-E, etc, all for free!',
        credits: 'MubiLop',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'Looks Expanded',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Looks-Expanded.js',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        iconURL: sharkpoolLooksExpandedIcon,
        tags: ['penguinmod', 'categoryexpansion', 'graphics'],
        description: 'Expansion of the Looks Category.',
        extDeveloper: 'SharkPool, CST1229',
        featured: true
    },
    {
        name: 'Motion Expansion',
        extensionId: 'pmMotionExpansion',
        iconURL: pmMotionExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'More small motion blocks for movement or collision.',
        featured: true,
        credits: 'Some blocks from NexusKitten'
    },
    {
        name: 'Events Expansion',
        extensionId: 'pmEventsExpansion',
        iconURL: pmEventsExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'More events for sending & receiving information, notifing specific sprites or better control when things should happen.',
        featured: true,
        credits: 'Some blocks from LilyMakesThings'
    },
    {
        name: 'Controls Expansion',
        extensionId: 'pmControlsExpansion',
        iconURL: pmControlsExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'More control blocks for animations, complex systems or cleaner one-time use blocks.',
        featured: true,
        credits: '"new thread" by CubesterYT, CST1229, SharkPool'
    },
    {
        name: 'Sensing Expansion',
        extensionId: 'pmSensingExpansion',
        iconURL: pmSensingExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion'],
        description: "More sensing blocks for specific use cases or interacting with the user's device.",
        credits: 'Some blocks from SharkPool-SP',
        featured: true
    },
    {
        name: 'Operators Expansion',
        extensionId: 'pmOperatorsExpansion',
        iconURL: pmOperatorsExpansionExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'categoryexpansion', 'math'],
        description: 'More operators like nand, nor, character code to character, reading multiple lined text line by line, etc.',
        featured: true
    },
    {
        name: 'My Blocks+',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/My-Blocks-Plus.js',
        iconURL: sharkpoolMBPIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'Create private or global custom blocks with custom inputs, colors, and more!',
        extDeveloper: 'SharkPool, CST1229, 0znzw',
        featured: true
    },
    {
        name: 'More Fields',
        extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/MoreFields.js',
        iconURL: 'https://extensions.penguinmod.com/images/0znzw/MoreFields.avif',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Custom Field Types',
        extDeveloper: 'yuri-kiss',
        featured: true
    },
    {
        name: 'Better Comments',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Comments.js',
        iconURL: sharkpoolBCIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'Better Comments with Customization and Markdown support',
        extDeveloper: 'SharkPool',
        featured: true
    },
    {
        name: 'Particle Engine',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Particle-Engine.js',
        iconURL: sharkpoolPEIcon,
        tags: ['penguinmod', 'graphics'],
        description: 'Create powerful Particle Engines without Clones',
        extDeveloper: 'SharkPool',
        featured: true
    },
    {
        name: 'Custom Styles',
        extensionId: 'shovelcss',
        iconURL: theshovelCustomStylesIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'graphics'],
        description: 'Customize the appearance of variable monitors and prompts in your project.',
        extDeveloper: 'TheShovel',
        featured: true
    },
    {
        name: 'Physics',
        extensionId: 'https://extensions.turbowarp.org/box2d.js',
        tags: ['turbowarp'],
        extDeveloper: 'griffpatch',
        iconURL: griffpatchPhysicsThumb,
        insetIconURL: griffpatchPhysicsIcon,
        description: 'Box2D Physics extension created by Griffpatch.',
        customInsetColor: '#D9F0FF',
        featured: true
    },
        {
        name: 'All Menus',
        extensionId: 'https://extensions.penguinmod.com/extensions/Lily/AllMenus.js',
        iconURL: 'https://extensions.penguinmod.com/images/Lily/AllMenus.svg',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Every dropdown menu for each block, in one extension.',
        extDeveloper: 'LilyMakesThings',
        featured: true
    },
    {
        name: 'Tweening',
        extensionId: 'jgTween',
        credits: 'easings.net, Arrow & GarboMuffin',
        description: 'Smoothly animating values using different easing functions and directions.',
        iconURL: 'https://extensions.turbowarp.org/images/JeremyGamer13/tween.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        featured: true
    },
    {
        name: 'Tailgating',
        extensionId: 'jgTailgating',
        description: 'Have sprites & clones follow behind other sprites & clones by an offset, like RPG party members.',
        iconURL: jgTailgatingExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        featured: true
    },
    {
        name: 'Tile Grids',
        extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/Tile-Grids.js',
        iconURL: 'https://extensions.penguinmod.com/images/SharkPool/Tile-Grids.svg',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Place sprites on grids.',
        extDeveloper: 'SharkPool-SP',
        featured: true
    },
    {
        name: 'Canvas Effects',
        extensionId: 'theshovelcanvaseffects',
        iconURL: theshovelCanvasEffectsIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'graphics'],
        description: 'Apply visual effects to the entire stage.',
        extDeveloper: 'TheShovel',
        credits: 'SharkPool',
        featured: true
    },
    {
        name: 'Clones+',
        extensionId: 'https://extensions.turbowarp.org/Lily/ClonesPlus.js',
        tags: ['turbowarp', 'categoryexpansion'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/ClonesPlus.svg',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        description: "Expansion of Scratch's clone features.",
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
        name: 'Text to Speech Redone',
        extensionId: 'https://extensions.penguinmod.com/extensions/PuzzlingGGG/ttsr.js',
        twDeveloper: 'PuzzlingGGG',
        iconURL: 'https://extensions.penguinmod.com/images/PuzzlingGGG/TTSR.avif',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'A better alternitive to the base text to speech extension. Powered by the TTStool API.',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'Speech2Text',
        extensionId: 'https://ruby-devs.vercel.app/cdn/extensions/speechtotext.js',
        tags: ['penguinmod', 'othermods'],
        iconURL: 'https://ruby-devs.vercel.app/cdn/thumbnails/speechtotext.png',
        description: 'Recognizes words or sentences said into the microphone.',
        credits: 'The RubyDevs Team',
        featured: true
    },
    {
        name: 'PenguinPedia',
        extensionId: 'https://ruby-devs.vercel.app/cdn/extensions/penguinpedia.js',
        iconURL: 'https://ruby-devs.vercel.app/cdn/thumbnails/penguinpedia.webp',
        internetConnectionRequired: true,
        tags: ['penguinmod', 'othermods'],
        description: 'Get a lot of data from Wikipedia, like definitions and images!',
        credits: 'The RubyDevs Team',
        featured: true
    },
    {
        name: 'Turbo Skins',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Turbo-Skins.js',
        tags: ['penguinmod', 'graphics'],
        iconURL: spTurboSkinsIcon,
        description: 'Display sprites with various images or costumes and control their hitboxes',
        extraLabels: [
            {
                name: "Inspired by",
                value: "\"Skins\" by LilyMakesThings"
            }
        ],
        featured: true,
        credits: 'SharkPool'
    },
    {
        name: 'Multiple Timers',
        extensionId: 'jgTimers',
        iconURL: jgTimersExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Create different timers you can control seperately.',
        eventSubmittor: 'Arrow',
        featured: true
    },
    {
        name: 'Temporary Variables',
        extensionId: 'tempVars',
        iconURL: gsaTempVariablesExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Create temporary variables for use in one block stack.',
        featured: true
    },
    {
        name: 'TurboWarp Temporary Variables',
        extensionId: 'lmsTempVars2',
        iconURL: lilyTempVariablesExtensionIcon,
        tags: ['turbowarp'],
        description: 'Create disposable runtime or thread variables.',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        credits: 'LilyMakesThings',
        featured: true
    },
    {
        name: 'Swift JSON',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/JSON-Array.js',
        iconURL: spJSONExtensionIcon,
        tags: ['penguinmod', 'datamgmt'],
        extDeveloper: 'SharkPool',
        description: 'FAST Extension for handling JSON objects and arrays efficiently. Recommended if you are heavily using JSON several times in a project.',
        featured: true
    },
    {
        name: 'Runtime Modifications',
        extensionId: 'jgRuntime',
        tags: ['penguinmod'],
        iconURL: jgRuntimeExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'Blocks for updating Scratch objects like the stage and sprites.',
        credits: 'TheShovel, showierdata9978, SharkPool',
        featured: true
    },
    {
        name: 'Font Manager',
        extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/Font-Manager.js',
        iconURL: spFontManagerIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'graphics'],
        description: 'Manage, create, and delete fonts.',
        credits: 'SharkPool, Ashimee',
        featured: true
    },
    {
        name: 'Storage',
        extensionId: 'jgStorage',
        iconURL: jgStorageExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Store data after PenguinMod has already been closed out. Basic Server Storage is also included.',
        eventSubmittor: 'Fir & silvxrcat',
        featured: true
    },
    {
        name: 'HTTP',
        extensionId: 'https://extensions.turbowarp.org/godslayerakp/http.js',
        iconURL: 'https://extensions.turbowarp.org/images/godslayerakp/http.svg',
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Comprehensive extension for interacting with external websites.',
        featured: true,
        internetConnectionRequired: true,
        customInsetColor: '#ff4d4d'
    },
    {
        name: 'CloudLink',
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/cloudlink.js',
        tags: ['turbowarp', 'penguinmod'],
        insetIconURL: cloudlinkIcon,
        iconURL: 'https://extensions.penguinmod.com/images/MikeDev101/cloudlink.svg',
        description: 'A powerful WebSocket extension for Scratch.',
        featured: true,
        extDeveloper: 'MikeDev',
        internetConnectionRequired: true
    },
    {
        name: 'CloudLink Ω',
        extensionId: 'https://electramod-extensions-gallery.vercel.app/internal_extensions/clomega.js',
        tags: ['electramod', 'penguinmod', 'turbowarp'],
        iconURL: clomegaIcon,
        description: 'Register and login to accounts via Cloud Link 5 (WIP Extension!!!)',
        featured: true,
        extDeveloper: 'MikeDev',
        internetConnectionRequired: false
    },
    {
        name: 'CloudLink 5',
        extensionId: 'https://electramod-extensions-gallery.vercel.app/internal_extensions/cl5.js',
        tags: ['electramod', 'penguinmod', 'turbowarp'],
        insetIconURL: cloudlinkIcon,
        iconURL: clfiveIcon,
        description: 'A powerful websocket extension for Scratch with account systems, and much more to offer. (WIP Extension!!!)',
        featured: true,
        extDeveloper: 'MikeDev',
        internetConnectionRequired: false
    },
    {
        name: 'Scripts',
        extensionId: 'jgScripts',
        iconURL: jgScriptsExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Create compiled scripts with blocks while the project is running.',
        featured: true
    },
    {
        name: '3D Math',
        extensionId: 'https://extensions.penguinmod.com/extensions/ObviousAlexC/3DMath.js',
        iconURL: 'https://extensions.penguinmod.com/images/ObviousAlexC/3DMath.svg',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', '3d', 'graphics', 'math'],
        description: 'A handful of utilities for making your own sprite-based 3D engine.',
        extDeveloper: 'pinksheep2917',
        featured: true
    },
    {
        name: 'Random Utilities',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/random_utils.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/randomutils.avif',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Many blocks related to generating random values, including seed-based number generation, true number generation, UUID\'s, random strings, etc.',
        extDeveloper: 'G1nX',
        featured: true
    },
    {
        name: 'LZ Compress',
        extensionId: 'shovellzcompresss',
        iconURL: theshovelLzCompressIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Compress and decompress text using lz-string.',
        extDeveloper: 'TheShovel',
        featured: true
    },
    {
        name: 'ToastNotifs',
        extensionId: 'https://ruby-devs.vercel.app/cdn/extensions/toastnotifs.js',
        tags: ['penguinmod', 'othermods'],
        iconURL: 'https://ruby-devs.vercel.app/cdn/thumbnails/toastnotifs.png',
        description: 'Use toast-styled notifications in your projects!',
        credits: 'The RubyDevs Team',
        featured: true
    },
    {
        name: 'Odd Messages',
        extensionId: 'oddMessage',
        tags: ['penguinmod'],
        iconURL: silvxrcatOddMessagesExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'For logging and variable utilization.',
        featured: true,
        extDeveloper: 'silvxrcat'
    },
    {
        name: 'Prism',
        extensionId: 'jgPrism',
        tags: ['penguinmod', 'datamgmt'],
        iconURL: jgPrismExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'Blocks for specific use-cases or major convenience.',
        featured: true
    },
    {
        name: 'HTML iframe Elements',
        extensionId: 'jgIframe',
        iconURL: jgIframeExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Blocks to place and move around frames that contain HTML content or websites.',
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Color Picker',
        extensionId: 'shovelColorPicker',
        iconURL: theshovelColorPickerIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Allow the user to choose a color using the built-in color picker, so you don\'t need to make your own.',
        extDeveloper: 'TheShovel',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Labels"
                description="Name of Proto extension"
                id="jwProto.jwProtoExtension.name"
            />
        ),
        extensionId: 'jwProto',
        iconURL: jwProtoExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: (
            <FormattedMessage
                // change this back if you update the extension to have more things
                defaultMessage="Labelling and Placeholders."
                description="Description of Proto extension"
                id="jwProto.jwProtoExtension.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Perlin Noise"
                description="Name of perlin noise extension"
                id="iygPerlin.iygPerlinExtension.name"
            />
        ),
        extensionId: 'iygPerlin',
        tags: ['penguinmod'],
        iconURL: iygPerlinNoiseExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: (
            <FormattedMessage
                defaultMessage="Blocks for generating and using Perlin noise. Good for generating terrain, clouds, and other things."
                description="Description of perlin noise extension"
                id="iygPerlin.iygPerlinExtension.description"
            />
        ),
        featured: true
    },
    {
        name: 'GamePad',
        extensionId: 'Gamepad',
        tags: ['turbowarp', 'hardware'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        twDeveloper: 'GarboMuffin',
        iconURL: gp,
        description: (
            <FormattedMessage
                defaultMessage="Directly access gamepads instead of just mapping buttons to keys."
                description="Description for the 'GamePad' extension"
                id="GamepadExtension.GamepadExtension.description"
            />
        ),
        featured: true
    },
    {
        name: 'Printing',
        tags: ['penguinmod', 'hardware'],
        extensionId: 'sharkpoolPrinting',
        iconURL: sharkpoolPrintingIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'Allows you to show a dialog for printing text, images, and custom HTML to a printer.',
        featured: true
    },
    {
        name: 'Clipping and Blending',
        extensionId: 'https://extensions.turbowarp.org/Xeltalliv/clippingblending.js',
        iconURL: clippingblending,
        tags: ['turbowarp', 'graphics'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        description: 'Clipping outside of a specified rectangular area and additive color blending.',
        featured: true,
        twDeveloper: 'Vadik1'
    },
    {
        name: 'Pointer Lock',
        extensionId: 'https://extensions.turbowarp.org/pointerlock.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        iconURL: pointerlockThumb,
        description: (
            <FormattedMessage
                defaultMessage="A extension to lock the mouse cursor in the stage."
                description="Scratch utilities"
                id="gui.extension.pointerlock.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Mouse Cursor',
        extensionId: 'https://extensions.turbowarp.org/cursor.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        iconURL: 'https://extensions.turbowarp.org/images/cursor.png',
        description: (
            <FormattedMessage
                defaultMessage="A extension to change what the mouse cursor looks like on the stage."
                description="Scratch utilities"
                id="gui.extension.MouseCursor.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        iconURL: jgScratchAuthExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: "Interact with Scratch Authentication to prove the player is a real scratch user.",
        featured: true
    },
    {
        name: 'Random Utils',
        extensionId: 'https://snail-ide.js.org/random_utils.js',
        snailExt: true,
        iconURL: 'https://snail-ide.js.org/random.png',
        tags: ['snailide'],
        description: "Random utilites that you may or may not use.",
        featured: true
    },
    {
        name: 'JavaScript',
        extensionId: 'SPjavascriptV2',
        iconURL: jgJavascriptExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'programminglanguage'],
        description: 'Run your own custom code written in JavaScript!',
        featured: true
    },
    {
        name: 'Save Data',
        extensionId: 'https://snail-ide.js.org/save.js',
        credits: 'Mr_rudy',
        iconURL: 'https://raw.githubusercontent.com/Snail-IDE/snail-ide.github.io/2d2190779715b9d4d14e6c62dbd487f0563dbba0/src/lib/libraries/extensions/snailsavedata/cool.svg',
        tags: ['snailide'],
        description: "Extremely easy way to save data.",
        featured: true
    },
        {
        name: 'Jul Mik Utilities',
        extensionId: 'https://electramod-extensions-gallery.vercel.app/extensions/julmik6478/julmik_utilities.js',
        credits: 'V1 & V2 by julmik6478, V3 by Aness6040',
        description: 'An Extension of Blocks Utilities by Jul Mik (V1 and V2 when named Jul Mik Blocks with Turbobuilder) and helped by Aness6040 (Actual v3)',
        iconURL: 'https://electramod-extensions-gallery.vercel.app/images/julmik6478/julmik_utilities.svg',
		insetIconURL: electramodIcon,
		customInsetColor: '#625e97',
        tags: ['electramod'],
        featured: true
    },
    {
        name: 'Grayscale',
        extensionId: 'https://snail-ide.js.org/grayscale.js',
        credits: 'Mr_rudy',
        iconURL: 'https://snail-ide.js.org/grayscale.svg',
        tags: ['penguinmod', 'snailide'],
        description: "Toggle a dramatic grayscale effect on your project. ",
        featured: true
    },
    {
        name: 'Discord Bot',
        extensionId: 'https://extensions.mistium.com/featured/DiscordBot.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/DiscordBot.png',
        tags: ['mistwarp', 'datamgmt'],
        description: 'Makes Discord bots.',
        credits: 'Mistium',
        featured: true
    },
    /*{
        name: 'Arrays',
        extensionId: 'jwArray',
        iconURL: jwArrayExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Store data efficiently in multi-purpose arrays.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Objects',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/dogeiscutObject.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/dogeiscutObject.svg',
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Store data efficiently in multi-purpose objects.',
        extDeveloper: 'DogeisCut',
        featured: true
    },
    {
        name: 'XML',
        extensionId: 'jwXML',
        iconURL: jwXMLExtensionIcon,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Creating, parsing and modifying XML data.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Targets',
        extensionId: 'jwTargets',
        iconURL: jwTargetsExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Direct access to sprites and their clones.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Infinity',
        extensionId: 'jwNum',
        iconURL: jwNumExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'math'],
        description: 'Advanced number type capable of really big numbers.',
        extDeveloper: 'jwklong',
        credits: 'Naruyoko for ExpantaNum.js',
        featured: true
    },
    {
        name: 'Color',
        extensionId: 'jwColor',
        iconURL: jwColorExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'graphics'],
        description: 'Utilities for anything involving colors.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Vector',
        extensionId: 'jwVector',
        iconURL: jwVectorExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'math'],
        description: 'Vector type for calculating with X and Y coordinates.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Lambda',
        extensionId: 'jwLambda',
        iconURL: jwLambdaExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Create anonymous functions with arguments and execute them.',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Scope',
        extensionId: 'jwScope',
        iconURL: jwScopeExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod'],
        description: 'Temporary variables based on block stack. (extra blocks if used with Array extension)',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Pointers',
        extensionId: 'jwPointer',
        iconURL: jwPointerExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'datamgmt'],
        description: 'Define references to values. (extra blocks if used with Array extension)',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Integers',
        extensionId: 'jwInt',
        iconURL: jwIntExtensionThumb,
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        tags: ['penguinmod', 'math'],
        description: 'Large integers with zero precision loss.',
        extDeveloper: 'jwklong',
        featured: true
    },*/
    {
            name: 'Unsandboxed Detector',
            extensionId: 'https://ldsjvg.webwave.dev/lib/ldsjvg/jmunsandboxdetect-lwcbhcjw.js',
            iconURL: 'https://ldsjvg.webwave.dev/files/dynamicContent/sites/ldsjvg/images/pl/webpage_20/lwcfkkaq/element_437/rwdMode_1/574x139/block_18052024-18_19_55.webp',
            twDeveloper: 'julmik6478',
            tags: ['penguinmod'],
			customInsetColor: '#00c3ff',
            description: 'Detect that extension is run in sandbox or without sandbox',
            featured: true
        },
        {
            name: 'Easy Save',
            extensionId: 'jgEasySave',
            iconURL: defaultExtensionIcon,
			insetIconURL: penguinmodIcon,
			customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'datamgmt'],
            description: 'Save variables, lists and extra info to a file, then load those things back in.',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="TurboWarp Blocks"
                    description="Name of TW extension"
                    id="tw.twExtension.name"
                    values={{
                        APP_NAME: "TurboWarp"
                    }}
                />
            ),
            extensionId: 'tw',
            twDeveloper: 'GarboMuffin',
            tags: ['turbowarp'],
            insetIconURL: turbowarpIcon,
			customInsetColor: '#ff4d4d',
            iconURL: twIcon,
            description: 'Weird new blocks. Replaced by Sensing Expansion.',
            featured: true
        },
        {
            name: 'Christmas',
            extensionId: 'jgChristmas',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/christmas.avif',
			insetIconURL: penguinmodIcon,
			customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'jokes'],
            description: 'It\'s not Christmas just yet!',
            featured: true
        },
        {
            name: 'CATS',
            extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/CATS.js',
            iconURL: catsThumb,
			insetIconURL: penguinmodIcon,
			customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'jokes'],
            description: 'Blocks related to cats.',
            extDeveloper: 'G1nX',
            featured: true
        },
        {
            name: 'Packager Applications',
            extensionId: 'jgPackagerApplications',
            iconURL: jgPackagerApplicationsExtensionIcon,
            insetIconURL: jgPackagerApplicationsInsetExtensionIcon,
            twDeveloper: 'CubesterYT',
            customInsetColor: '#66B8FF',
            tags: ['penguinmod', 'packager'],
            description: 'In development. Do extra things in packaged applications that you can\'t do in the website!',
            featured: true
        },
{
        name: 'Marty the Robot',
        extensionId: 'marty',
        collaborator: "Robotical",
        iconURL: 'https://scratch3beta.robotical.io/static/assets/f1f767c70b08089a3940f35ebfdc315e.png',
        insetIconURL: 'https://scratch3beta.robotical.io/static/assets/825efb8616528b0a1ed8fe7d6f325408.svg',
        description: 'Play and program with Marty.',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: true

    },
{
        name: 'LEGO Duplo Train',
        extensionId: 'duploTrain',
        collaborator: "bricklife",
        iconURL: 'https://bricklife.com/scratch-gui/static/assets/12fd44910fedc5b99761e024ddf05c59.png',
        insetIconURL: 'https://bricklife.com/scratch-gui/static/assets/4e8df03eb146bd7f93b355c62450029b.svg',
        description: 'Build and control your train!',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: true

    },
{
        name: 'LEGO Powered Up',
        extensionId: 'poweredUp',
        collaborator: "bricklife",
        iconURL: 'https://bricklife.com/scratch-gui/static/assets/27d60d6cf54cf80ce2bbb8493e43262e.png',
        insetIconURL: 'https://bricklife.com/scratch-gui/static/assets/9a7b1e04a4d5afda42d2d4bb2de61247.svg',
        description: 'Build with motors and sensors!',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: true

    },
{
        name: 'OneGpio Arduino',
        extensionId: 'onegpioArduino',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioArduinoImage,
        insetIconURL: onegpioArduinoInsetIconURL,
        description: 'OneGPIOArduino',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Raspberry Pi',
        extensionId: 'onegpioRpi',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRpiImage,
        insetIconURL: onegpioRpiInsetIconURL,
        description: 'OneGPIORpi',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio ESP-8266',
        extensionId: 'onegpioEsp',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioEspImage,
        insetIconURL: onegpioEspInsetIconURL,
        description: 'OneGPIOEsp',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Picoboard',
        extensionId: 'onegpioPicoboard',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioPicoboardImage,
        insetIconURL: onegpioPicoboardInsetIconURL,
        description: 'OneGPIOPicoboard',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Playground Express',
        extensionId: 'onegpioCpx',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioCpxImage,
        insetIconURL: onegpioCpxInsetIconURL,
        description: 'OneGPIOCpx',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio RoboHAT MM1',
        extensionId: 'onegpioRoboHAT',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRoboHATImage,
        insetIconURL: onegpioRoboHATInsetIconURL,
        description: 'OneGPIORoboHAT',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Raspberry Pi Pico',
        extensionId: 'onegpioRpiPico',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRpiPicoImage,
        insetIconURL: onegpioRpiPicoInsetIconURL,
        description: 'onegpioRpiPico',
        tags: ['othermods', 'hardware'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        customInsetColor: '#CF63CF',
        tags: ['scratch', 'noisemaker'],
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        tags: ['scratch', 'graphics'],
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: 'Animated Text',
        extensionId: 'text',
        iconURL: 'https://extensions.turbowarp.org/images/lab/text.svg',
        insetIconURL: 'https://extensions.turbowarp.org/images/lab/text.svg',
        customInsetColor: '#9A66FF',
        tags: ['scratch'],
        description: 'Bring words to life.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        customInsetColor: '#74BDDC',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: 'Face Sensing',
        extensionId: 'https://extensions.turbowarp.org/lab/face-sensing.js',
        iconURL: 'https://extensions.turbowarp.org/images/lab/face-sensing.svg',
		insetIconURL: 'https://extensions.turbowarp.org/images/lab/face-sensing.svg',
        tags: ['scratch', 'ai'],
        description: 'Sense faces with the camera.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        credits: 'Google TTS',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        customInsetColor: '#9966FF',
        tags: ['scratch', 'noisemaker'],
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        customInsetColor: '#5CB1D6',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        customInsetColor: '#E64D00',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        customInsetColor: '#FFBF00',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        customInsetColor: '#FFAB19',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        tags: ['scratch', 'hardware'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        customInsetColor: '#FF6680',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        customInsetColor: '#4C97FF',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PenguinMod Extra Extensions"
                description="Name of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.name"
            />
        ),
        href: 'https://extensions.penguinmod.com/?editor=true',
        extensionId: 'special_penguinmodExtensionLibrary',
        iconURL: penguinmodLibraryExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="See some user-submitted extensions. Opens in a new tab."
                description="Description of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.description"
            />
        ),
        tags: ['penguinmod', 'library'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Extension Gallery"
                description="Name of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.name"
                values={{
                    APP_NAME: "TurboWarp"
                }}
            />
        ),
        href: 'https://extensions.turbowarp.org/',
        extensionId: 'special_turbowarpExtensionLibrary',
        iconURL: galleryIcon,
        description: (
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="We list many TurboWarp extensions here for convenience, but you can find even more on extensions.turbowarp.org."
                description="Description of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.description"
            />
        ),
        tags: ['tw', 'turbowarp', 'library'],
        featured: true
    },
    {
        name: 'SharkPool\'s Extension Collection',
        href: 'https://sharkpools-extensions.vercel.app/?originPM=true',
        extensionId: 'special_sharkpoolExtensionLibrary',
        iconURL: sharkpoolGalleryIcon,
        description: 'Tons of extensions created by SharkPool.\n\nClick on an extension while this menu is open to add it to your project.',
        credits: 'Listed in the site',
        tags: ['library'],
        featured: true
    },
    {
        name: 'Scratch Repo Mega Extension Gallery',
        href: 'https://scratchmegarepo.pages.dev/extensions',
        extensionId: 'special_scratchmegaExtensionLibrary',
        iconURL: scratchmegarepoThumb,
        description: 'A mega gallery for most of the extensions',
        tags: ['library'],
        featured: true
    },
    {
        name: 'Mistium\'s Extensions Gallery',
        href: 'https://extensions.mistium.com/',
        extensionId: 'special_mistiumExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/ElectraMod/scratch-gui/4751b8232c951c6119cca8776054fa5b496c30dc/src/lib/libraries/extensions/mistium/library.svg',
        description: 'Extensions made by Mistium',
        tags: ['mistwarp', 'library'],
        featured: true
    },
    {
        name: 'ElmoBear\'s Extension Gallery',
        href: 'https://kylekart.github.io/ScratchExtensions/',
        extensionId: 'special_elmobearExtensionLibrary',
        iconURL: defaultExtensionIcon,
        description: 'Extensions made by ElmoBear',
        tags: ['library'],
        featured: true
    },
        {
        name: 'Ruby Extension Gallery',
        href: 'https://ruby-devs.vercel.app/gallery',
        extensionId: 'rubyextension',
        iconURL: 'https://github.com/Snail-IDE/snail-ide.github.io/blob/develop/src/lib/libraries/extensions/snail-ide/ruby.png?raw=true',
        description: 'View the Useful Ruby Team Extensions!',
        credits: 'Ruby Team',
        tags: ['library'],
        featured: true
    },
    {
        name: 'GaiaMod Extra Extensions',
        href: 'https://gaiamod-main.github.io/GaiaMod-ExtensionsGallery/',
        extensionId: 'special_gaiamodExtensionLibrary',
        iconURL: gaiaExGalleryThumb,
        description: 'See some GaiaMod External extensions, even user-submitted. Opens in a new tab.',
        tags: ['gaiamod', 'library'],
        featured: true
    },
    {
        name: 'ElectraMod Extra Extensions',
        href: 'https://electramod-extensions-gallery.vercel.app',
        extensionId: 'special_electramodExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/ElectraMod/scratch-gui/4751b8232c951c6119cca8776054fa5b496c30dc/src/lib/libraries/extensions/electramod/library.svg',
        description: 'See some user-submitted, ElectraMod External extensions. Opens in a new tab.',
        tags: ['electramod', 'library'],
        featured: true
    },
    {
        name: 'DinosaurMod Extensions',
        href: 'https://dinosaurmod.github.io/extensions/',
        extensionId: 'special_dinosaurmodExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/Dinosaurmod/Dinosaurmod.github.io/d32911e4a99caafcc7ba7523b468cf91de061b7e/src/lib/libraries/extensions/dinosaurmod/gallery.svg',
        description: 'See some Dinosaurmod and user-submitted extensions. Opens in a new tab.',
        tags: ['dinosaurmod', 'library'],
        featured: true
    },
    {
        name: 'Snail-IDE Extra Extensions',
        href: 'https://snail-ide-extensions-gallery.vercel.app/',
        extensionId: 'special_snailideExtensionLibrary',
        iconURL: snailIDEGalleryThumb,
        description: 'See some Snail-IDE and user-submitted extensions. Opens in a new tab.',
        tags: ['snailide', 'library'],
        featured: true
    },
	{
        name: 'AmpMod Extensions Gallery',
        href: 'https://ampmod.codeberg.page/extensions/',
        extensionId: 'special_ampmodExtensionLibrary',
        iconURL: ampmodgalleryThumb,
        description: 'See some AmpMod External extensions. Opens in a new tab.',
        tags: ['othermods', 'library'],
        featured: true
    },
    {
        name: 'KittenBot Extension Maker',
        href: 'https://kittenbot.github.io/scratch3-extension/',
        extensionId: 'special_kittenBotExtensionMaker',
        iconURL: kittenbotThumb,
        description: 'Create extensions with KittenBot!',
        tags: ['othermods', 'builders', 'extcreate'],
        featured: true
    },
    {
        // not really an extension, but it's easiest to present it as one
        name: 'ExtForge',
        href: 'https://jwklong.github.io/extforge',
        extensionId: 'special_extforge',
        iconURL: ExtForgeIcon,
        description: 'Create extensions with a block-based UI.',
        extDeveloper: 'jwklong',
        isNew: true,
        tags: ['penguinmod', 'builders', 'extcreate'],
        featured: true
    },
    {
        name: 'TurboBuilder',
        href: 'https://turbobuilder.vercel.app/',
        extensionId: 'special_turboBuilder',
        iconURL: turboBuilderIcon,
        description: 'Create your own amazing extensions using a scratch-based UI!',
        credits: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['turbowarp', 'builders', 'extcreate'],
        featured: true
    },
    {
        name: 'TurboBuilder - Dev Branch',
        href: 'https://dev-turbobuilder.vercel.app/',
        extensionId: 'special_turboBuilderDev',
        iconURL: turboBuilderDevIcon,
        description: 'Publicly available developer branch, with the latest features.',
        credits: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['turbowarp', 'builders', 'extcreate'],
        featured: true
    },
    {
        name: 'PenguinBuilder',
        href: 'https://penguinbuilder.github.io/editor/',
        extensionId: 'special_PenguinBuilder',
        iconURL: 'https://u.cubeupload.com/Mr_rudy/costume1.png',
        description: 'Create your own extensions using Blockly.',
        credits: 'chickencuber',
        tags: ['penguinmod', 'builders', 'extcreate'],
        featured: true
    },
    {
        name: 'DinoBuilder',
        href: 'https://dinobuilder.vercel.app',
        extensionId: 'special_dinoBuilder',
        iconURL: 'https://github.com/Dinosaurmod/Dinosaurmod.github.io/blob/develop/src/lib/libraries/extensions/dinosaurmod/dinobuilder.png?raw=true',
        description: 'Create your own amazing extensions using a TurboBuilder Mod scratch-based UI!',
        credits: 'MrIncredibleMaker',
        tags: ['dinosaurmod', 'builders', 'extcreate'],
        featured: true,
        disabled: false
    },
    {
        name: 'ExtCreate',
        href: 'https://extcreate.snail-ide.com/',
        extensionId: 'special_ExtCreate',
        iconURL: 'https://raw.githubusercontent.com/Snail-IDE/snail-ide.github.io/2d2190779715b9d4d14e6c62dbd487f0563dbba0/src/lib/libraries/extensions/ext-create/logo.svg',
        insetIconURL: 'https://raw.githubusercontent.com/ElectraMod/scratch-gui/4751b8232c951c6119cca8776054fa5b496c30dc/src/lib/libraries/extensions/ext-create/inset.svg',
        customInsetColor: '#FFF',
        description: 'Snail IDE version of TurboBuilder',
        credits: 'Started by JeremyGamer13, continued by jwklong, modified by nmsderp',
        tags: ['snail-ide', 'builders', 'extcreate'],
        featured: true
    },
    {
        name: 'ElectraBuilder',
        href: 'https://electrabuilder.vercel.app/',
        extensionId: 'special_electraBuilder',
        iconURL: 'https://raw.githubusercontent.com/ElectraMod/scratch-gui/4751b8232c951c6119cca8776054fa5b496c30dc/src/lib/libraries/extensions/electramod/electrabuilder.svg',
        insetIconURL: 'https://github.com/ElectraMod/scratch-gui/blob/develop/src/lib/libraries/extensions/electramod/electrabuilder.png?raw=true',
        description: 'ElectraMod version of TurboBuilder',
        credits: 'Started by JeremyGamer13, continued by jwklong, modified by Aness6040',
        tags: ['electramod', 'builders', 'extcreate'],
        featured: true
    }
    /*DEPRECATED
    {
        name: 'JSON',
        extensionId: 'jgJSON',
        iconURL: jgJSONExtensionIcon,
        tags: ['penguinmod', 'datamgmt'],
        description: 'Blocks for handling JSON objects and Arrays.',
        featured: true
    },
    {
        name: 'Color Utility Blocks',
        extensionId: 'colors',
        iconURL: gsaColorUtilExtensionIcon,
        tags: ['penguinmod'],
        description: 'Converters for Hex, RGB, HSV and Decimal colors and other color related things.',
        featured: true
    },
    {
        name: 'Extra Mathematics',
        extensionId: 'https://extensions.penguinmod.com/extensions/jwklong/mathematics.js',
        iconURL: 'https://extensions.penguinmod.com/images/jwklong/mathematics.avif',
        tags: ['penguinmod', 'categoryexpansion', 'math'],
        description: 'Complicated maths extension for nerds.',
        extDeveloper: 'jwklong',
        featured: false
    },*/
];

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
    const extras = [
        {
            name: (
                <FormattedMessage
                    defaultMessage="HTML Canvas"
                    description="Name of Text extension"
                    id="canvas.name"
                />
            ),
            extensionId: 'newCanvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: (
                <FormattedMessage
                    defaultMessage="Extra drawing tools using an HTML Canvas. Works well when used with other extensions."
                    description="Description of Text extension"
                    id="text.description"
                />
            ),
            featured: true
        },
        {
            name: 'OLD Canvas',
            extensionId: 'canvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: 'depracated version of HTML Canvas.',
            featured: true
        },
        {
            name: 'Legacy Files',
            extensionId: 'jgFiles',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'Basic blocks for files. This has been replaced by the TurboWarp files extension.',
            featured: true
        },
        {
            name: 'Clone Communication',
            extensionId: 'jgClones',
            iconURL: jgCloneManagerExtensionIcon,
            tags: ['penguinmod'],
            description: 'Mainly sharing data between clones and the main sprite, but also some other small features. This has been replaced by the TurboWarp Clones+ extension.',
            featured: true
        },
        {
            name: 'Easy Save',
            extensionId: 'jgEasySave',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'Save variables, lists and extra info to a file, then load those things back in.',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="TurboWarp Blocks"
                    description="Name of TW extension"
                    id="tw.twExtension.name"
                    values={{
                        APP_NAME: "TurboWarp"
                    }}
                />
            ),
            extensionId: 'tw',
            twDeveloper: 'GarboMuffin',
            tags: ['turbowarp'],
            insetIconURL: turbowarpIcon,
			customInsetColor: '#ff4d4d',
            iconURL: twIcon,
            description: 'Weird new blocks. Replaced by Sensing Expansion.',
            featured: true
        },
        {
            name: 'the doo doo extension',
            extensionId: 'jgDooDoo',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'jokes'],
            description: 'dr bob eae',
            featured: true
        },
        {
            name: 'Christmas',
            extensionId: 'jgChristmas',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/christmas.avif',
            tags: ['penguinmod', 'jokes'],
            description: 'It\'s not Christmas just yet!',
            featured: true
        },
        {
            name: 'an amazing extension',
            extensionId: 'jgBestExtension',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epic.avif',
            internetConnectionRequired: true,
            tags: ['penguinmod', 'jokes'],
            description: 'this is SUCH A GOOD EXTENSION USE IT NOW',
            featured: true
        },
        {
            name: 'Epic utilities',
            extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/AprilFools.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epicutils.avif',
            tags: ['penguinmod', 'jokes'],
            description: 'the super good utilities brought to you by todays sponsor sharkpool (the epic utilities)',
            featured: true
        },
        {
            name: 'CATS',
            extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/CATS.js',
            iconURL: catsThumb,
            tags: ['penguinmod', 'jokes'],
            description: 'Blocks related to cats.',
            extDeveloper: 'G1nX',
            featured: true
        },
        {
            name: 'McUtils',
            extensionId: 'https://extensions.turbowarp.org/Lily/McUtils.js',
            tags: ['turbowarp', 'jokes'],
            iconURL: 'https://extensions.turbowarp.org/images/Lily/McUtils.png',
            insetIconURL: turbowarpIcon,
			customInsetColor: '#ff4d4d',
            description: 'Basic utilities for any fast food employee',
            featured: true,
            twDeveloper: 'LilyMakesThings'
        },
        {
            name: 'image blocks',
            extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/funneimageblocks.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/screenshot1.avif',
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'jokes'],
            internetConnectionRequired: true,
            description: 'who needs cat blocks when you have penguin block',
            extDeveloper: 'Ashimee, 0znzw, CST1229',
            featured: true
        },
        {
            name: 'Unite',
            extensionId: 'jwUnite',
            iconURL: jwUniteExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            tags: ['penguinmod'],
            description: 'Legacy extension that was eventually merged into the default toolbox.',
            featured: true
        },
        {
            name: 'Debugging',
            extensionId: 'jgDebugging',
            iconURL: jgDebuggingIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            tags: ['penguinmod'],
            description: 'Log information and run commands. Good for debugging packaged projects or just easily changing things.',
            featured: true
        },
        {
            name: 'Test Extension Loader',
            href: 'https://studio.penguinmod.com/loadExt.html',
            extensionId: 'special_testExtensionLibrary',
            iconURL: defaultExtensionIcon,
            description: 'Test loading extensions from a library. For developers.',
            featured: true
        },
		
        {
            name: 'Editor',
            href: 'https://studio.penguinmod.com/editor.html',
            extensionId: 'special_editorExtensionLibrary',
            iconURL: penguinmodLibraryExtensionIcon,
            description: 'Opens the editor with this tab as the parent, still with the library opened. For developers.',
            featured: true
        },
        {
            name: 'localhost:5173',
            href: 'http://localhost:5173',
            extensionId: 'special_extensionLibraryLocalhost5173',
            iconURL: defaultExtensionIcon,
            description: 'Opens localhost:5173 in a new tab with this tab as the parent. For developers',
            featured: true
        },
        {
            name: 'localhost:5173?editor=true',
            href: 'http://localhost:5173?editor=true',
            extensionId: 'special_extensionLibraryLocalhost5173EditorTrue',
            iconURL: defaultExtensionIcon,
            description: 'Opens localhost:5173 in a new tab with this tab as the parent. Sets ?editor=true. For developers',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="OOP"
                    description="Name of OOP extension"
                    id="jwStructs.jwStructsExtension.name"
                />
            ),
            extensionId: 'jwStructs',
            tags: ['penguinmod'],
            iconURL: jwStructsExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            description: (
                <FormattedMessage
                    defaultMessage="Removed from list. OOP blocks. OOp is a programming paradigm that uses objects and their interactions to design applications and computer programs."
                    description="Description of OOP extension"
                    id="jwStructs.jwStructsExtension.description"
                />
            ),
            featured: true
        },
        {
            name: 'PenguinMod Permissions',
            extensionId: 'JgPermissionBlocks',
            iconURL: jgPermissionExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            tags: ['penguinmod'],
            description: 'Legacy extension, old blocks no longer serve a real purpose. Direct blocks to manage permissions that PenguinMod requires you have to do certain tasks.',
            featured: true
        },
        {
            name: 'Jeremys Dev Tools',
            extensionId: 'jgDev',
            iconURL: defaultExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            tags: ['penguinmod'],
            description: 'Test extension to see if things are possible.\nDO NOT USE THIS IN PRODUCTION as blocks are subject to change and may corrupt your projects.',
            credits: 'Some features added from LilyMakesThings, CubesterYT, TheShovel',
            featured: true
        },
        {
            name: '3D',
            extensionId: 'jg3d',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dInsetExtensionIcon,
            description: 'Do not use for real projects. Not recommended, unstable, and will be rewritten/remade entirely at a later date. In development.',
            featured: true,
            extensionWarningOnImport: true
        },
        {
            name: '3D Physics',
            extensionId: 'fr3d',
            iconURL: fr3dPhysicsExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#D066FE',
            insetIconURL: fr3dPhysicsInsetExtensionIcon,
            description: 'Physics for the 3D extension.',
            featured: true
        },
        {
            name: 'Interfaces',
            extensionId: 'jgInterfaces',
            iconURL: jgsilvxrcatInterfacesExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            credits: 'silvxrcat',
            tags: ['penguinmod'],
            description: 'In development.',
            featured: true
        },
        {
            name: 'Packager Applications',
            extensionId: 'jgPackagerApplications',
            iconURL: jgPackagerApplicationsExtensionIcon,
            insetIconURL: jgPackagerApplicationsInsetExtensionIcon,
            twDeveloper: 'CubesterYT',
            customInsetColor: '#66B8FF',
            tags: ['penguinmod', 'packager'],
            description: 'In development. Do extra things in packaged applications that you can\'t do in the website!',
            featured: true
        },

        {
            name: 'Inline Blocks',
            extensionId: 'pmInlineBlocks',
            iconURL: pmInlineBlocksExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            tags: ['penguinmod'],
            description: 'Create quick blocks for simple tasks. Insert them into any circle spot and have them return any value you want.',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="Pathfinding"
                    description="Name of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.name"
                />
            ),
            extensionId: 'jgPathfinding',
            tags: ['penguinmod'],
            iconURL: jgPathfindingExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            description: (
                <FormattedMessage
                    defaultMessage="(Unstable and or laggy; Needs further work) Have sprites navigate around obstacles in your game instead of clipping into them."
                    description="Description of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.description"
                />
            ),
            featured: true
        },
        {
            name: 'Animation',
            extensionId: 'jgAnimation',
            iconURL: jgAnimationExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            tags: ['penguinmod'],
            description: 'In development. Currently buggy and missing features.',
            featured: true
        },
        {
            name: 'Virtual Reality',
            extensionId: 'jgVr',
            iconURL: jgVrExtensionIcon,
			insetIconURL: penguinmodIcon,
		    customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'hardware'],
            description: 'In development.',
            extDeveloper: "JeremyGamer13",
            extraLabels: [
                {
                    name: "Uses code from",
                    value: "\"Augmented Reality\" by Vadik1"
                }
            ],
            featured: true,
            extensionWarningOnImport: true
        }
    ];
    extras.forEach(ext => {
        menuItems.push(ext);
    });
}

export default menuItems;
