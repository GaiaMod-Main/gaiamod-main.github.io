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
import customExtIcon from './custom/CustomEx.svg';
import customExtInsetIcon from './custom/CustomSmall.svg';
import turbowarpIcon from './penguinmod/extensions/turbowarp_icon.svg';
import gaiamodIcon from './gaiamod/gaiamod_icon.png';
import penguinmodIcon from './gaiamod/penguinmod_icon.png';
import arkideIcon from './arkide/arkide_icon.png';
import dinosaurmodIcon from './dinosaurmod/dinosaurmod_icon.png';
import snailideIcon from './snail-ide/snailide_icon.png';
import electramodIcon from './electramod/electramod_icon.png';
import astraeditorIcon from './gaiamod/astraeditor_icon.svg';
import zeroTwoEngineIcon from './gaiamod/zerotwoengine_icon.png';
import mistwarpIcon from './mistium/mistwarp_icon.svg';
import dashblocksIcon from './dashblocks/dashblocks_icon.png';
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

//champierre
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

//um
import ohbotIconURL from './ohbot/ohbot.png';
import ohbotInsetIconURL from './ohbot/ohbot-small.svg';
import webmidiIconURL from './webmidi/webmidi.png';
import webmidiInsetIconURL from './webmidi/webmidi-small.png';
import newBlockImage from './newblocks/newblocks.png';
import newBlockButtonImage from './newblocks/newblocks-small.png';
import newMicrobitImage from './newmicrobit/newmicrobit.png';
import newMicrobitButtonImage from './newmicrobit/newmicrobit-small.png';
import ExtensionInsetIconURL from './ellabsextension/extension-icon.png';
import ExtensionIconURL from './ellabsextension/extension-background.png';
import maikaIconURL from './olliMaika/maika.png';
import maikaforInsetIconURL from './olliMaika/maika-small.png';

import playgoIconURL from './playgo/playgo.png';
import playgoInsetIconURL from './playgo/playgo-small.svg';
import playgoConnectionIconURL from './wedo2/wedo-illustration.svg';
import playgoConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playgoConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import playIoTIconURL from './playiot/playiot.png';
import playIoTInsetIconURL from './playiot/playiot-small.svg';
import playIoTConnectionIconURL from './wedo2/wedo-illustration.svg';
import playIoTConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playIoTConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import playMeIconURL from './playme/playme.png';
import playMeInsetIconURL from './playme/playme-small.svg';
import playMeConnectionIconURL from './wedo2/wedo-illustration.svg';
import playMeConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playMeConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

//junilab
import jdcodeIconURL from './jdcode/jdcode.png';
import jdcodeInsetIconURL from './jdcode/jdcode-small.png';
import jdcodeConnectionIconURL from './jdcode/jdcode-illustration.png';
import jdcodeConnectionSmallIconURL from './jdcode/jdcode-small.png';
import robodogIconURL from './robodog/robodog.png';
import robodogInsetIconURL from './robodog/robodog-small.png';
import robodogConnectionIconURL from './robodog/robodog-illustration.png';
import robodogConnectionSmallIconURL from './robodog/robodog-small.png';
import jcboardIconURL from './jcboard/jcboard.png';
import jcboardInsetIconURL from './jcboard/jcboard-small.png';
import jcboardConnectionIconURL from './jcboard/jcboard-illustration.png';
import jcboardConnectionSmallIconURL from './jcboard/jcboard-small.png';
import uglybotIconURL from './uglybot/uglybot.png';
import uglybotInsetIconURL from './uglybot/uglybot-small.png';
import uglybotConnectionIconURL from './uglybot/uglybot-illustration.png';
import uglybotConnectionSmallIconURL from './uglybot/uglybot-small.png';
import firmtechIconURL from './firmtech/firmtech.png';
import firmtechInsetIconURL from './firmtech/firmtech-small.png';
import firmtechConnectionIconURL from './firmtech/firmtech-illustration.png';
import firmtechConnectionSmallIconURL from './firmtech/firmtech-small.png';
import aidroneIconURL from './aidrone/aidrone.png';
import aidroneInsetIconURL from './aidrone/aidrone-small.png';
import aidroneConnectionIconURL from './aidrone/aidrone-illustration.png';
import aidroneConnectionSmallIconURL from './aidrone/aidrone-small.png';
import aicobotIconURL from './aicobot/aicobot.png';
import aicobotInsetIconURL from './aicobot/aicobot-small.png';
import aicobotConnectionIconURL from './aicobot/aicobot-illustration.png';
import aicobotConnectionSmallIconURL from './aicobot/aicobot-small.png';

//AkariGroup
import akariBlocksImage from './akariBlocks/logo320.jpg';
import akariBlocksButtonImage from './akariBlocks/logo320_ex.jpg';
import akariCameraImage from './akariCamera/logo320.jpg';
import akariCameraButtonImage from './akariCamera/logo320_ex.jpg';
import akariBlocksSimpleImage from './akariBlocksSimple/logo320.jpg';
import akariBlocksSimpleButtonImage from './akariBlocksSimple/logo320_ex.jpg';
import akariCameraSimpleImage from './akariCameraSimple/logo320.jpg';
import akariCameraSimpleButtonImage from './akariCameraSimple/logo320_ex.jpg';

//other
import appMakerIconURL from './librekitten/appmaker/appmaker.svg';
import appMakerInsetIconURL from './librekitten/appmaker/software-small.svg';
import mbotIconURL from './mbot/mbot-header.png';
import mbotInsetIconURL from './mbot/mbot.svg';
import roku from './roku/big.jpg';
import rokuSmall from './roku/small.png';
import axerAIIconURL from './other/AxerAI.svg';
import axerAIInsetIconURL from './other/InsetAxerAI.png';
import nftIconURL from './nft/nft.png';
import nftInsetIconURL from './nft/nft-small.svg';
import toonco1ImageURL from './webKit/webKit.png';
import toonco1ImageSmallURL from './webKit/webKit-small.png';
import bodyblocksIconURL from './bodyblocks/background.png';
import bodyblocksInsetIconURL from './bodyblocks/inset-small.svg';
import PictoBloxMathIconURL from './PictoBloxMath/PictoBloxMath.png';
import PictoBloxMathInsetIconURL from './PictoBloxMath/PictoBloxMath-small.svg';
import PictoBloxStringIconURL from './PictoBloxString/PictoBloxString.png';
import PictoBloxStringInsetIconURL from './PictoBloxString/PictoBloxString-small.svg';

//GvbvdxxMod2
import NESEmuThumb from './nes_emulator/nes.svg';
import NESInsetIcon from './nes_emulator/nes-small.svg';
import gm2HTML5Small from './html5/small.svg';
import gm2HTML5Large from './html5/large.svg';
import sndanalyserBig from './sound_analyser/big.svg';
import jsDialogsBigIcon from './dialog/dialogs.png';
import jsDialogsSmallIcon from './dialog/small.png';
import speech4pcDialogsBigIcon from './speech4pc/speech.png';
import speech4pcDialogsSmallIcon from './speech4pc/small.png';
import websitesBigIcon from './websites/websites.png';
import websitesSmallIcon from './websites/small.png';
import scratchBigIcon from './control/scratch.png';
import scratchSmallIcon from './control/small.png';
import wssmall from './websockets/small.png';
import wsbig from './websockets/big.png';
import audioctxsmall from './audio_context/small.png';
import audioctxbig from './audio_context/big.png';
import userdatasmall from './userdata/small.png';
import userdatabig from './userdata/big.png';

//by yj
import battleImage from './gitblock/battle.png';
import battleInsetImage from './gitblock/battle-small.svg';
import puzzleImage from './gitblock/puzzle.png';
import puzzleInsetImage from './gitblock/puzzle-small.svg';
import communityImage from './gitblock/community.png';
import communityInsetImage from './gitblock/community-small.svg';
import kinectImage from './gitblock/kinect.png';
import kinectInsetImage from './gitblock/kinect-small.svg';
import canvasIconURL from './gitblock/canvas.png';
import canvasInsetIconURL from './gitblock/canvas-small.svg';
import lazyAudioIconURL from './gitblock/lazy-audio.png';
import lazyAudioInsetIconURL from './gitblock/lazy-audio-small.svg';
import jsInsetIconURL from './gitblock/js-small.svg';

// ESP32
import esp32SerialIconURL from './zumiAI/zumiAI.png';
import esp32SerialInsetIconURL from './zumiAI/zumiAI-small.svg';
import esp32SerialConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import esp32SerialConnectionSmallIconURL from './zumiAI/zumiAI-small.svg';

// ESP32
import esp32BluetoothIconURL from './zumiAI/zumiAI.png';
import esp32BluetoothInsetIconURL from './zumiAI/zumiAI_bluetooth-small.svg';
import esp32BluetoothConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import esp32BluetoothConnectionSmallIconURL from './zumiAI/zumiAI_bluetooth-small.svg'; //

//166iwase-lgtm/taichan0123
import meshImage from './mesh/mesh.png';
import ledButtonImage from './led/led-small.png';
import brightnessButtonImage from './brightness/brightness-small.png';
import motionButtonImage from './motion/motion-small.png';
import gpioButtonImage from './gpio/gpio-small.png';

//garragames
import koriIconURL from './kori/kori.png';
import koriInsetIconURL from './kori/kori-small.svg';
import koriConnectionIconURL from './kori/kori-illustration.svg';
import koriConnectionSmallIconURL from './kori/kori-small.svg';

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
import gaiaBlocksThumb from './gaiamod/GaiaUtilities.png';
import gaiaExGalleryThumb from './gaiamod/gallery.png';
import sailormoonThumb from './gaiamod/lolsailormoon.png';
import kittenbotThumb from './gaiamod/KittenBot.png';
import cocreaFetchThumb from './gaiamod/cocreaFetch.png';
import promptsThumb from './gaiamod/prompts.png';
import spinachThumb from './gaiamod/spinach.png';
import catsThumb from './gaiamod/CatFacts.png';
import AlexaThumb from './gaiamod/Alexa.png';
import penguinThumb from './gaiamod/PenguinAttack.png';
import scratchmegarepoThumb from './gaiamod/ScratchMegaRepo.png';
import snailIDEGalleryThumb from './gaiamod/snailIDEEXGallery.png';
import loremIpsumThumb from './gaiamod/LoremIpsumThumb.png';
import webcamThumb from './gaiamod/WebCamThumb.png';
import chatNioThumb from './gaiamod/ChatNio.png';
import mysteryThumb from './gaiamod/unknown.png';
import mysteryInsetIcon from './gaiamod/unknown-small.png';
import scratchUtilitiesIcon from './gaiamod/ScratchUtilities.png';
import turboWeatherIcon from './gaiamod/TurboWeather.png';
import wonderBlocksIcon from './gaiamod/WonderBlocks.png';

import ampmodgalleryThumb from './gaiamod/AmpMod.svg';
import obgalleryIcon from './gaiamod/OmniBlocks.svg';

import shareImage from "./share/share.svg";

import lassImage from "./lass/lass.png";
import iftttImage from "./ifttt/ifttt.png";
import thingspeakImage from "./thingspeak/thingspeak.png";

import smartLumiesIconURL from './smart-lumies/smart-lumies.png';
import smartLumiesInsetIconURL from './smart-lumies/smart-lumies-small.svg';
import smartLumiesConnectionIconURL from './smart-lumies/smart-lumies-illustration.svg';
import smartLumiesConnectionSmallIconURL from './smart-lumies/smart-lumies-small.svg';
import smartLumiesConnectionTipIconURL from './smart-lumies/smart-lumies-button-illustration.svg';
import matatabotIconURL from './matatabot/matatabot.png';
import matatabotInsetIconURL from './matatabot/matatabot-small.svg';
import matatabotConnectionIconURL from './matatabot/matatabot-illustration.svg';
import matatabotConnectionSmallIconURL from './matatabot/matatabot-small.svg';
import midiIconURL from './midi/midi.png';
import midiInsetIconURL from './midi/midi-small.svg';
import spikePrimeIconURL from './spikePrime/spikePrime.png';
import spikePrimeInsetIconURL from './spikePrime/spikePrime-small.svg';
import spikePrimeConnectionIconURL from './spikePrime/spikePrime-illustration.svg';
import spikePrimeConnectionSmallIconURL from './spikePrime/spikePrime-small.svg';
import futureBoardIconURL from './futureBoard/futureBoard.png';
import futureBoardInsetIconURL from './futureBoard/futureBoard-small.svg';
import minecraftIconURL from './minecraft/minecraft.png';
import minecraftInsetIconURL from './minecraft/minecraft-small.svg';
import toolboxIconURL from './toolbox/toolbox.png';
import toolboxInsetIconURL from './toolbox/toolbox-small.svg';
import iCarProIconURL from './iCarPro/iCarPro.png';
import iCarProInsetIconURL from './iCarPro/iCarPro-small.svg';
import snapCircuitsU33IconURL from './snapCircuitsU33/snapCircuitsU33.png';
import snapCircuitsU33InsetIconURL from './snapCircuitsU33/snapCircuitsU33-small.svg';
import magicBlueUUIconURL from './magicBlueUU/magicBlueUU.png';
import magicBlueUUInsetIconURL from './magicBlueUU/magicBlueUU-small.svg';
import emoBlockImage from './emo/Scratch_emo.png';
import emoBlockInsertIconImage from './emo/bocco-emo_body.png';
import missmixalotIconURL from "./missmixalot/missmixalot.png";
import missmixalotInsetIconURL from "./missmixalot/missmixalot-small.svg";

// PenguinMod extensions
const pmExtensions = [
{
        name: 'WebRTC',
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/webrtc.js',
        tags: ['penguinmod'],
        iconURL: 'https://extensions.penguinmod.com/images/MikeDev101/webrtc.svg',
        insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        description: 'A barebones WebRTC implementation.',
        credits: 'MikeDev101.',
        featured: true
    },
{
        name: '3D VR',
        extensionId: 'jg3dVr',
        iconURL: jg3dVrExtensionIcon,
		insetIconURL: jg3dVrInsetExtensionIcon,
        tags: ['penguinmod'],
        description: "Unfinished PenguinMod Extension.",
        extDeveloper: "JeremyGamer13",
        featured: true,
		isBuggy: true
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
        name: 'Beepbox Player',
        extensionId: 'https://extensions.penguinmod.com/extensions/DogeisCut/BeepBoxPlayer.js',
        iconURL: 'https://extensions.penguinmod.com/images/DogeisCut/BeepBoxPlayer.svg',
        tags: ['penguinmod', 'noisemaker'],
        description: 'Play, edit, and read songs from any BeepBox mod directly from the URL or JSON!',
        extDeveloper: 'DogeisCut',
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
        name: 'Sound Waves',
        extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/Sound-Waves.js',
        iconURL: spSoundWaveIcon,
        tags: ['penguinmod', 'noisemaker'],
        description: 'Make sounds with oscillators!',
        extDeveloper: 'SharkPool',
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
        name: 'Pang API',
        extensionId: 'https://extensions.penguinmod.com/extensions/SammerLOL/pangapi.js',
        iconURL: 'https://extensions.penguinmod.com/images/SammerLOL/pangapi.avif',
        credits: 'oc9x97',
        tags: ['penguinmod'],
        description: 'Fetch details of projects and users from PenguinMod.',
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
        name: 'AuthPenguin',
        extensionId: 'https://extensions.penguinmod.com/extensions/MubiLop/authpenguin.js',
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
        iconURL: 'https://extensions.penguinmod.com/images/MubiLop/authpenguin.avif',
        description: 'Authenticate with anything and everything!',
        credits: 'MubiLop',
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
        name: 'TurboWeather',
        extensionId: 'https://extensions.penguinmod.com/extensions/RubyDevs/turboweather.js',
        extDeveloper: 'RubyDevs',
        description: 'Show weather and location data for any place in our world. Data that could be used for doxxing is deleted from results.',
        iconURL: turboWeatherIcon,
        tags: ['penguinmod'],
		insetIconURL: penguinmodIcon,
		customInsetColor: '#00c3ff',
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
    },
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
    /*DEPRECATED
	    {
        name: 'CCW Extension Loader',
        extensionId: 'ccw_extension_loader',
        iconURL: 'https://extensions.02engine.02studio.xyz/image/ccw.svg',
        description: 'Load extensions from Cocrea World.',
        featured: true
    },
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

    const pmExtras = [
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
            name: 'the doo doo extension',
            extensionId: 'jgDooDoo',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'jokes'],
            description: 'dr bob eae',
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
            isBuggy: true
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
            isBuggy: true
        }
    ];


//SharkPool's extensions
const spExtensions = [
    {
      name: 'Sharktilities',
      description: 'Various utility blocks for various operations',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sharktilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sharktilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
      name: 'YouTube-Operations',
      description: 'Fetch and play Youtube videos and statistics in your Project',
      credits: 'SharkPool, Nekl300 (contributor)',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/YouTube-Operations.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/YouTube-Operations.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Scratch-Utilities',
      description: 'Blocks for fetching Scratch statistics and assets, inspired by NexusKitten\'s S-Grab. Can even fetch cloud data from projects!',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Scratch-Utilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Scratch-Utilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Tune-Shark-V3',
      description: 'Advanced Audio Engine with complex Sound Control, Audio Effects and more',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark-V3.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Tune-Shark-V3.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Tune-Shark',
      description: 'Outdated Sound Engine for playing sounds. Please use Tune Shark V3',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Tune-Shark.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Camera',
      description: 'Use Cameras to move the visible part of the Stage',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Camera.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Camera.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Added-Motion',
      description: 'New Motion Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Added-Motion.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Added-Motion.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Geometry-Dash-API',
      description: 'Fetch statistics and information from Geometry Dash. Deprecated, expect incorrect values.',
      credits: 'SharkPool, thank you RobTopGames and GD Colon',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Geometry-Dash-API.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Geometry-Dash-API.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Sound-Waves',
      description: 'Play various Oscillators in your Project',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sound-Waves.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sound-Waves.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Hyper-Sense',
      description: 'New Sensing Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Hyper-Sense-V2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Hyper-Sense.svg',
      tags: ['sharkpool'],
	  featured: true
    },
    {
	 name: 'Keys-Plus-V2',
      description: 'Powerful and flexible Key detection Blocks with some additional features (No longer maintained)',
      credits: 'StackOverflow',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/KeysPlusV2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Keys-Plus-V2.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Popup-Phoenix',
      description: 'Create and design custom Popups! A remaster of \'Better Input\'',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Input.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Popup-Phoenix.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Better-Input',
      description: 'Expansion of the \'Ask and Wait\' Block. Deprecated, please use Popup-Phoenix',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Camera-Sensing-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Better-Input.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Camera-Sensing-Plus',
      description: 'Expansion of the \'Video Sensing\' extension. Display the Camera on Sprites and take Photos',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Camera-Sensing-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Camera-Sensing-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Particle-Engine',
      description: 'Create customizable and powerful Particle Engines with NO Clones',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Particle-Engine.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Particle-Engine.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Particle-Tools',
      description: 'Tools that make creating Particle Systems easy',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Particle-Tools.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Particle-Tools.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
   {
	 name: 'Looks-Expanded',
      description: 'Expansion of the Looks Category',
      credits: 'SharkPool, CST1229',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Looks-Expanded.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Looks-Expanded.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Sprite-Effects',
      description: 'Apply SVG Filters to Images, Sprites, and the Canvas! Faster than Image Effects',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sprite-Effects-V2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sprite-Effects.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Image-Effects',
      description: 'Apply Effects and Filters to Images',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Image-Effects.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Image-Effects.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Image-Editor',
      description: 'Create and modify images and their pixel data',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Image-Editor.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Image-Editor.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Pixel-Utilities',
      description: 'Some Utility Blocks that Roltycore 2\'s Developer made for some reason',
      credits: 'LittleBlueGamer',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Pixel-Utilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Pixel-Utilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Recording',
      description: 'Blocks for Recording your Microphone while your Project runs',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Recording-V2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Recording.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Newgrounds-Audio',
      description: 'Fetch Audio and Audio Information from Newgrounds. Works best with Tune Shark V3',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Newgrounds-Audio.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Newgrounds-Audio.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Sprite-Parenting',
      description: 'Link Sprites together and make them follow their parent\'s movement',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sprite-Parenting.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sprite-Parenting.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Rigidbodies',
      description: 'Fast, math-based Collision detections using Rigidbodies',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Rigidbodies.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Rigidbodies.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Lazy-Collisions',
      description: 'Utility Blocks that make detecting box Collisions easy and fast',
      credits: 'SharkPool, Food (contributor)',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Lazy-Collisions.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Lazy-Collisions.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Files-Expanded',
      description: 'Expansion of GarboMuffin\'s File Extension',
      credits: 'SharkPool, Drago Cuven, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Files-Expanded.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Files-Expanded.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Temporary-Variables',
      description: 'Create Temporary Variables for Sprites, Threads, and the Project',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Temporary-Variables.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Temporary-Variables.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Variables-Expanded',
      description: 'New Variable Blocks and New Variable Monitors',
      credits: 'SharkPool, DogeIsCut',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Variables-Expanded.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Variables-Expanded.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Sty-Lists',
      description: 'Customize and Organize List Monitors',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sty-Lists.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sty-Lists.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Gamepad-Expanded',
      description: 'Expansion of Garbomuffin\'s Gamepad Extension',
      credits: 'DNin01, Meehdrescher',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Gamepad-Expanded.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Gamepad-Expanded.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Tile-Grids',
      description: 'Position Sprites on Tile Grids',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tile-Grids.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Tile-Grids.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Animations',
      description: 'Create Animations and Keyframes in your Project',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Animations.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Animations.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Text-to-Speech',
      description: 'Better Text to Speech using the TikTok API',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Text-to-Speech.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Text-to-Speech.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Font-Manager',
      description: 'Manage, Create, and Delete Fonts from your Project',
      credits: 'SharkPool, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Font-Manager.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Font-Manager.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Pause-Utilities',
      description: 'Pause your Project, Scripts, and Sprites',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Pause-Utilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Pause-Utilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Script-Control',
      description: 'Monitor and Control specific Scripts in your Project, inspired by 0znzw',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Script-Control.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Script-Control.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Messages-Plus',
      description: 'Powerful New Message Blocks that work with Vanilla Messages',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Messages-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Messages-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Advanced-Messages',
      description: 'New Message Blocks for Advanced, Non-Vanilla Purposes',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Advanced-Messages.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Advanced-Messages.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Events-Plus',
      description: 'New Event Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Events-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Events-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Runtime-Events',
      description: 'Detect Events from Runtime',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Runtime-Events.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Runtime-Events.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Fetch-Plus',
      description: 'Fetch and Encode Content from URLs while viewing the Progress and Status of the Fetch',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Fetch-Progress.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Fetch-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Geolocation',
      description: 'Get users\' Location and calculate Real-World Distances',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Geolocation.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Geolocation.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Spotify',
      description: 'Fetch Statistics, Information, and Play Songs from Spotify',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Spotify.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Spotify.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'SoundCloud-API',
      description: 'Fetch Tracks, Artists, and Statistics from Soundcloud',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/SoundCloud-API.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/SoundCloud-API.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Google-Spreadsheets',
      description: 'Read and Write Google Spreadsheets',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Google-Spreadsheets.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Google-Spreadsheets.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Money-Utilities',
      description: 'Convert Currencies and get Currency Information',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Money-Utilities.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Money-Utilities.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Display-Text',
      description: 'Display Text in your Projects, with Markdown Support',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Display-Text-V2.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Display-Text.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Color-Master',
      description: 'Color Utility and Conversion Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Color-Master.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Color-Master.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'QR-Codes',
      description: 'Create and Read QR Codes on the Client',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/QR-Codes.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/QR-Codes.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Speech-Bubbles',
      description: 'Customizable Speech Bubbles',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Speech-Bubbles.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Speech-Bubbles.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Layer-Control',
      description: 'Relayer Pen, Video Camera, Backdrops, Sprites and more',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Layer-Control.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Layer-Control.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Renderer-Control',
      description: 'Control the visuals of Pen, Video Camera, Backdrops, Sprites and more',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Renderer-Control.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Renderer-Control.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Time-Calculation',
      description: 'Blocks for calculating Time differences',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Time-Calculation.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Time-Calculation.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Timezones',
      description: 'Convert and get the Time in different Timezones',
      credits: 'Ammunimium',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Timezones.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Timezones.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Since-2000',
      description: 'Expansion of the \'since 2000\' Blocks',
      credits: 'Ammunimium, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Since-2000.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Since-2000.svg',
      'status': '',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Seeds',
      description: 'Generate random seeded numbers, generated terrain, and more',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Seeds.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Seeds.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Perlin-Noise',
      description: 'Generate randomized Perlin Noise',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Perlin-Noise.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Perlin-Noise.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	  name: 'Extra-Controls',
      description: 'New Advanced Control Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Extra-Controls.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Extra-Controls.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'More-Operators',
      description: 'New Powerful Operator Blocks',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/More-Operators.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/More-Operators.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Captchas',
      description: 'Simple Client-Based Captchas, this does not promise 100% security',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Captchas.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Captchas.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Better-Comments',
      description: 'Better Comments with Color and Text Customization',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Comments.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Better-Comments.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Sprite-Panel',
      description: 'Addon for viewing and managing Sprites and Clones',
      credits: 'SharkPool, FurryR',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sprite-Panel.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Sprite-Panel.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'DOM-Selector',
      description: 'Read Elements and Create Events from the website HTML',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/DOM-Selector.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/DOM-Selector.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'SVG-Spritesheets',
      description: 'Create and Export SVG Spritesheets',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/SVG-Spritesheets.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/SVG-Spritesheets.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Community-Spotlight',
      description: 'Display and Promote Projects for free',
      credits: 'SharkPool, Community Spotlight Team',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Community-Spotlight.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Community-Spotlight.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'GIF-Manager',
      description: 'Create and Split GIF Frames',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/GIF-Manager.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/GIF-Manager.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Swift-JSON',
      description: 'Super Fast JSON and Array extension',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/JSON-Array.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/JSON-Array.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'My-Blocks-Plus',
      description: 'Better Custom Blocks',
      credits: 'SharkPool, CST1229, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/My-Blocks-Plus.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/My-Blocks-Plus.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Dropdown-Maker',
      description: 'Create Custom Dropdowns! Best paired with My Blocks+',
      credits: 'SharkPool, CST1229, 0znzw',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Dropdown-Maker.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Dropdown-Maker.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Turbo-Skins',
      description: 'Improved Skins extension, inspired by LilyMakesThings',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Turbo-Skins.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Turbo-Skins.svg',
      tags: ['sharkpool'],
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
	 name: 'Scenes',
      description: 'Create Scenes (savestates), like Unity, in your Project',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Scenes.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Scenes.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'Pen-Papers',
      description: 'Create Multiple Pen Layers! Inspired by ObviousAlex',
      credits: 'SharkPool',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Pen-Papers.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Pen-Papers.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    },
    {
	 name: 'MIDI-Tools',
      description: 'Utilities For Making Midi Notes Into Functions',
      credits: 'ObscuraPH',
      extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/MIDI-Tools.js',
      iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/MIDI-Tools.svg',
      tags: ['sharkpool'],
	  featured: true,
	  credits: 'SharkPool'
    }
];


// Ark IDE extensions
const arkExtensions = [
	    {
        name: 'ArkIDE additions',
        extensionId: 'https://extensions.arkide.site/extensions/Ark/arkide-additons.js',
        credits: 'Ark',
        iconURL: 'https://extensions.arkide.site/images/Ark/banner.png',
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide', 'ai'],
        description: 'A simple extension that adds some cool new blocks from ArkIDE. Google Gemini included.',
        featured: true
    },
	    {
        name: 'Json Number Array Operations',
        extensionId: 'https://extensions.arkide.site/extensions/Ark/jsonnumberarray.js',
        credits: 'Ark',
        iconURL: 'https://extensions.arkide.site/images/Ark/jsonant.png',
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        description: 'A nice extension that adds useful operation blocks for Json Number Arrays.',
        featured: true
    },
{
        name: 'Console',
        extensionId: 'https://extensions.arkide.site/extensions/Ark/arkide-console.js',
        credits: 'Ark',
        iconURL: 'https://extensions.arkide.site/images/Ark/console.png',
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        description: 'Add a console to your project to log messages, errors, and warnings.',
        featured: true
    },
	    {
        name: 'Timer Utils',
        extensionId: 'https://extensions.arkide.site/extensions/Ark/timerutils.js',
        credits: 'Ark',
        iconURL: 'https://extensions.arkide.site/images/Ark/timerutils.svg',
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        description: 'An extension that helps you count down to certain dates without having to do a bunch of math and coding.',
        featured: true
    },
	    {
        name: 'Store My Stuff',
        extensionId: 'https://extensions.arkide.site/extensions/Ark/store-my-stuff.js',
        credits: 'Ark',
        iconURL: 'https://extensions.arkide.site/images/Ark/storemystuff.png',
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        description: 'Another varible storage extension but the server is running on the centeral ArkIDE server instead.',
        featured: true
    },
	    {
        name: 'Comments',
        extensionId: 'https://extensions.arkide.site/extensions/Ark/comments.js',
        credits: 'Ark',
        iconURL: 'https://extensions.arkide.site/images/Ark/comments.png',
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        description: 'Adds comment blocks to your project.',
        featured: true
    },
    {
        name: "Advanced Keyboard",
        description: "Upgraded keyboard input: key combos (2–5 keys), long press detection, WASD direction, key counters, HAT events with edge trigger, and last key tracking..",
        extensionId:"https://extensions.arkide.site/extensions/Askyy/Advanced_keyboard.js",
        iconURL: "https://extensions.arkide.site/images/Askyy/keyboard.jpg",
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        credits: "Askyy",
		featured: true
    },
    {
        name: "Game Dev Utils",
        description: "Essential game dev blocks: FPS counter, delta time, frame count, rectangle collision, LERP, distance & angle calculations, camera follow, snap-to-grid, named timers, and screen wrap.",
        extensionId:"https://extensions.arkide.site/extensions/Askyy/Devs_utilities_ex.js",
        iconURL: "https://extensions.arkide.site/images/Askyy/game_dev_utils.jpg",
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        credits: "Askyy",
		featured: true
    },
    {
        name: "Geography (Ark)",
        description: "Country data for 195+ nations: capital, population, region, subregion, currency, timezone, flag URL, languages. Plus live geolocation and IP address lookup.",
        extensionId:"https://extensions.arkide.site/extensions/Askyy/Geography_ex.js",
        iconURL: "https://extensions.arkide.site/images/Askyy/geography.jpg",
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        credits: "Askyy",
		featured: true
    },
    {
        name: "Internet & Device",
        description: "Read device info directly from the browser: connection status, browser name/version, screen size, CPU cores, memory, orientation, language, battery level and charging state.",
        extensionId:"https://extensions.arkide.site/extensions/Askyy/Internet_Device_ex.js",
        iconURL: "https://extensions.arkide.site/images/Askyy/internet_and_device.jpg",
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        credits: "Askyy",
		featured: true
    },
    {
        name: "Weather",
        description: "Real-time weather for 300+ world cities via Open-Meteo: temperature, feels like, humidity, wind speed & direction, weather description, rain/snow detection, and tomorrow's forecast.",
        extensionId:"https://extensions.arkide.site/extensions/Askyy/Weather_ex.js",
        iconURL: "https://extensions.arkide.site/images/Askyy/weather.png",
		insetIconURL: arkideIcon,
		customInsetColor: '#5900FF',
        tags: ['arkide'],
        credits: "Askyy",
		featured: true
    },
];

//DinosaurMod extensions
const dinoExtensions = [
 {
            name: 'Extra Inputs',
            extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/extrainputs.js',
            tags: ['dinosaurmod'],
			insetIconURL: dinosaurmodIcon,
		    customInsetColor: '#80f41a',
            iconURL: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/images/ExtraInputsThumbnail.png',
            description: "This Extension has been merged into the main toolbox. Extra Inputs that you can use.",
            featured: true,
            extDeveloper: 'MrIncredibleMakerZe'
        },
        {
            name: 'Timers Plus',
            extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/legacy-extensions/timers-plus.js',
            tags: ['dinosaurmod'],
			insetIconURL: dinosaurmodIcon,
		    customInsetColor: '#80f41a',
            iconURL: defaultExtensionIcon,
            description: "(This Extension won't be worked on because during the creation of this extension i forgot about the Multiple Timers Extension) (Timers don't save!) Create your own timers! There's also pause and resume options.",
            featured: true,
            extDeveloper: 'MrIncredibleMakerZe'
        },
{
            name: 'Typable Tab Key',
            extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/typable-tab-character.js',
            iconURL: defaultExtensionIcon,
            tags: ['dinosaurmod'],
			insetIconURL: dinosaurmodIcon,
		    customInsetColor: '#80f41a',
            description: 'Replaced by the Keys+ Extension. Gives the ability of typing the tab character.',
            featured: true
        },
{
        name: 'DinosaurMod Blocks',
        extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/dinosaurmodextras.js',
        iconURL: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/images/dinosaurmodextras.png',
        tags: ['dinosaurmod'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        description: 'Extra Blocks',
        inspiredExt: 'TurboWarp Blocks',
        featured: true
    },
 {
        name: 'Python (DinosaurMod)',
        extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/python.js',
        iconURL: 'https://dinosaurmod.github.io/extensions/e6fa369466ec201961c4.png',
        tags: ['dinosaurmod', 'programminglanguage'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        description: 'Run your own custom code written in Python using Pyodide!',
        credits: 'Pyodide',
        internetConnectionRequired: true,
        featured: true
    },
    {
        name: 'Lua',
        extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/lua.js',
        iconURL: 'https://dinosaurmod.github.io/extensions/f9ffd88d8aba0d58b284.png',
        tags: ['dinosaurmod', 'programminglanguage'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        description: 'Run your own custom code written in Lua using Fengari!',
        credits: 'Fengari',
        internetConnectionRequired: true,
        featured: true
    },
{
        name: 'GitHub API',
        extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/github-api.js',
        iconURL: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/images/githubapi.png',
        tags: ['dinosaurmod'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        description: 'Fetch IDs, Description, etc. from Repositories, Users and Organizations.',
        internetConnectionRequired: true,
        featured: true
    },
{
        name: 'Site Runtime',
        extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/webextension.js',
        tags: ['dinosaurmod'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        iconURL: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/images/site-runtime.png',
        description: 'A Combined version of 2 Extensions: Packager Applications & AdaBrowser',
        featured: true,
        extDeveloper: 'MrIncredibleMaker',
        internetConnectionRequired: true,
        disabled: false
    },
{
        name: 'Keys Plus (DinosaurMod)',
        extensionId: 'https://raw.githubusercontent.com/Dinosaurmod/extensions/refs/heads/main/src/extensions/keys-plus-extension.js',
        iconURL: 'https://raw.githubusercontent.com/Dinosaurmod/extensions/refs/heads/main/src/icons/keysPlus.png',
        tags: ['categoryexpansion', 'dinosaurmod'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        description: 'Detect more keys when they are pressed or hit and make certain keys typable.',
        extDeveloper: 'MrIncredibleMaker',
        inspiredExt: 'Typable Tab Key Extension and More Keys Events (by julmik6478) Extension',
        featured: true
    },
{
        name: 'Hacked Blocks',
        extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/penguinmod-version/hackedblocks.js',
        iconURL: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/images/hackedblocks.png',
        tags: ['dinosaurmod'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        description: 'Hacked Blocks that exist in Penguinmod but are not shown on the main toolbox.',
        credits: 'Some blocks from pumpkinhasapatch, LilyMakesThings, MrIncredibleMakerZE',
        featured: true
    },
{
        name: 'Wait block Expansion',
        extensionId: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/extensions/waitblockexpansion.js',
        iconURL: pmControlsExpansionExtensionIcon,
        tags: ['dinosaurmod', 'categoryexpansion'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        description: "More wait blocks, i guess..",
        featured: true,
    },
	{
        name: 'Useless blocks',
        extensionId: 'https://raw.githubusercontent.com/Dinosaurmod/extensions/refs/heads/main/src/extensions/Useless_Blocks.js',
		iconURL: defaultExtensionIcon,
		tags: ['dinosaurmod', 'jokes'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        iconURL: 'https://gabsthecuriouskid.github.io/DinosaurModExtensions/images/Useless_Blocks.png',
        description: 'Stupid blocks.',
		credits: 'Jambs / jlgri',
        featured: true
    },
    {
        name: 'Dogs',
        extensionId: 'https://raw.githubusercontent.com/Dinosaurmod/extensions/refs/heads/main/src/extensions/dogs.js',
        iconURL: defaultExtensionIcon,
		tags: ['dinosaurmod', 'jokes'],
		insetIconURL: dinosaurmodIcon,
		customInsetColor: '#80f41a',
        description: 'Blocks related to dogs.',
        featured: true,
        inspiredExt: 'G1nX\'s Cats Extension',
        extDeveloper: 'MrIncredibleMaker'
    },
];

// Snail IDE extensions.
const snailExtensions = [
     {
        name: 'Rounding+',
        description: 'Expansion to the rounding blocks',
        extensionId: 'https://snail-ide-extensions-gallery.vercel.app/extensions/CharCoalAfterLife/rounding.js',
        iconURL: 'https://snail-ide-extensions-gallery.vercel.app/images/CharCoalAfterLife/rounding.png',
        credits: 'CharCoalAfterLife',
		insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
		tags: ['snailide'],
		featured: true
    },
      {
        name: 'SnailShare API',
        extensionId: 'https://snail-ide.js.org/api.js',
        iconURL: 'https://snail-ide.js.org/snailideapiext.png',
        collaborator: 'BA4X',
		insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide'],
        description: 'Fetch details of projects and users from Snailshare.',
        featured: true
    },
     {
        name: 'Prompts (Snail)',
        extensionId: 'https://snail-ide.js.org/Prompts.js',
        iconURL: 'https://snail-ide.js.org/Prompts.png',
        collaborator: 'LoganCreatez',
		insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide', 'ai'],
        description: 'Good prompts for PenguinGPT',
        featured: true
    },
	{
        name: 'ISS',
        extensionId: 'https://snail-ide.js.org/iss.js',
        iconURL: 'https://github.com/Snail-IDE/snail-ide.github.io/blob/develop/src/lib/libraries/extensions/snail-ide/iss.jpg?raw=true',
        insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide'],
        description: 'Get the latitude and longitude of the International Space Station',
        featured: true
    },
     {
        name: 'URL Information',
        extensionId: 'https://snail-ide.js.org/urlinfo.js',
        iconURL: 'https://github.com/Snail-IDE/snail-ide.github.io/blob/develop/src/lib/libraries/extensions/urlinfo/urlinfo.png?raw=true',
		insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide'],
        credits: 'redspacecat',
        description: 'Get information about the URL',
        featured: true
    },
    {
        name: 'Browser & OS Information',
        extensionId: 'https://snail-ide.js.org/browserandosinfo.js',
        iconURL: 'https://github.com/Snail-IDE/snail-ide.github.io/blob/develop/src/lib/libraries/extensions/browserandosinfo/browserandosinfo.png?raw=true',
	    insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide'],
        credits: 'redspacecat',
        description: 'Get information about the user\'s browser and operating system',
        featured: true
    },
      {
        name: 'Random Utils',
        extensionId: 'https://snail-ide.js.org/random_utils.js',
        iconURL: 'https://snail-ide.js.org/random.png',
		insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide'],
        description: "Random utilites that you may or may not use.",
        featured: true
    },
	{
        name: 'Time Utils',
        extensionId: 'https://snail-ide.js.org/Time_Utilities.js',
        iconURL: 'https://snail-ide.js.org/time.svg',
        collaborator: 'GingerNinjaStickdudeWorld',
        insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide'],
        description: "Simple blocks to handle time.",
        featured: true
    },
	{
            name: 'Share',
            extensionId: 'shareExt',
            iconURL: shareImage,
            insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide'],
            description: 'Share your projects with friends!',
            featured: true
        },
      {
        name: 'Save Data',
        extensionId: 'https://snail-ide.js.org/save.js',
        credits: 'Mr_rudy',
        iconURL: 'https://raw.githubusercontent.com/Snail-IDE/snail-ide.github.io/2d2190779715b9d4d14e6c62dbd487f0563dbba0/src/lib/libraries/extensions/snailsavedata/cool.svg',
		insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['snailide'],
        description: "Extremely easy way to save data.",
        featured: true
    },
    {
        name: 'Grayscale',
        extensionId: 'https://snail-ide.js.org/grayscale.js',
        credits: 'Mr_rudy',
        iconURL: 'https://snail-ide.js.org/grayscale.svg',
		insetIconURL: snailideIcon,
		customInsetColor: '#cc00ff',
        tags: ['penguinmod', 'snailide'],
        description: "Toggle a dramatic grayscale effect on your project. ",
        featured: true
    },
];

// GaiaMod extensions
const gmExtensions = [
{
        name: 'Gaia Utilities',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/GaiaBlocks.js',
        credits: 'GaiaWindWave90 with some blocks from other users.',
        iconURL: gaiaBlocksThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod'],
		gaiaModRequired: true,
        description: 'Wonderful utility blocks!',
        featured: true
    },
	{
        name: 'GaiaGPT',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/GaiaGPT.js',
        iconURL: gaiaGPTThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod', 'ai'],
		gaiaModRequired: true,
        description: 'A GaiaMod modification of Pang AI with more prompts.',
        extDeveloper: 'logise1123 and GaiaWindWave90',
        internetConnectionRequired: true,
        featured: true
    },
	{
        name: 'Webcam Recorder',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/Webcamrecorder.js',
        iconURL: webcamThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        credits: '-SIPC-, with modifications by GaiaWindWave90',
        tags: ['gaiamod'],
		gaiaModRequired: true,
        description: 'Records videos straight out of webcam.',
        internetConnectionRequired: false,
        featured: true
    },
	{
        name: 'Prompts',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/GTPPrompts.js',
        iconURL: promptsThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        extDeveloper: 'GaiaWindWave90',
        tags: ['gaiamod', 'ai'],
		gaiaModRequired: true,
        description: 'Prompts made for Gaia AI. Inspired by the prompts extension found in Snail-IDE.',
        featured: true
    },
	{
        name: 'Wonder Blocks',
        extensionId: 'wonderblocks',
        iconURL: wonderBlocksIcon,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        tags: ['gaiamod'],
        description: 'Some mysterious blocks.',
        credits: 'GaiaWindWave90 with some blocks from other users.',
        gaiaModRequired: true,
        featured: true
    },
	{
        name: 'Spinach Facts',
        extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/SpinachFacts.js',
        iconURL: spinachThumb,
		insetIconURL: gaiamodIcon,
		customInsetColor: '#2D2DD2',
        credits: 'GaiaWindWave90 with some blocks from other users.',
        tags: ['gaiamod', 'jokes'],
		gaiaModRequired: true,
        description: 'An extension about spinach! Based on Gen1x\'s CATS, MrIncredibleMaker\'s DOGS and pooiod7\'s Raccoon Facts extensions.',
        internetConnectionRequired: true,
        featured: true
    },
	{
            name: 'Penguin Attack!',
            extensionId: 'https://gaiamod-main.github.io/extensions/GaiaWindWave90/PenguinAttack.js',
            iconURL: penguinThumb,
    		insetIconURL: gaiamodIcon,
	    	customInsetColor: '#2D2DD2',
            tags: ['gaiamod', 'jokes'],
			gaiaModRequired: true,
            internetConnectionRequired: true,
            credits: 'JeremyGamer13, with modifications by GaiaWindWave90',
            description: 'Edited version of the Fire in the Hole extension.',
            featured: true
      },
];


// NitroBolt extensions
const nbExtensions = [
    {
        name: 'Vectors',
        extensionId: 'https://extensions.nitrobolt.org/ddededodediamante/Vectors.js',
        credits: 'ddededodediamante',
        iconURL: 'https://extensions.nitrobolt.org/images/ddededodediamante/Vectors.svg',
        tags: ['nitrobolt'],
        description: 'Manipulate vectors with common math operations.',
        featured: true
    },
    {
        name: 'NitroBolt Comments',
        extensionId: 'https://extensions.nitrobolt.org/Comments.js',
        iconURL: 'https://extensions.nitrobolt.org/images/Comments.svg',
        tags: ['nitrobolt'],
        description: 'Organize and label your code.',
        featured: true
    },
    {
        name: 'Rich Presence',
        extensionId: 'https://extensions.nitrobolt.org/CubesterYT/RichPresence.js',
		credits: 'CubesterYT',
        iconURL: 'https://extensions.nitrobolt.org/images/unknown.svg',
        tags: ['nitrobolt'],
        description: 'Adds rich presence support to your project.',
        featured: true
    },
    {
        name: 'Libxmp',
        extensionId: 'https://extensions.nitrobolt.org/NishiOwO/libxmp.js',
		credits: 'NishiOwO',
        iconURL: 'https://extensions.nitrobolt.org/images/NishiOwO/libxmp.svg',
        tags: ['nitrobolt'],
        description: 'Play tracker modules using Libxmp.',
        featured: true
    },
    {
        name: 'ODE',
        extensionId: 'https://extensions.nitrobolt.org/NishiOwO/ode.js',
		credits: 'NishiOwO',
        iconURL: 'https://extensions.nitrobolt.org/images/NishiOwO/ode.svg',
        tags: ['nitrobolt'],
        description: '3D physics using ODE.',
        featured: true
    },
];


// AcidMod extensions
const amExtensions = [
    {
        name: 'AcidMod Test',
        extensionId: 'https://acidmod.js.org/extensions/AcidMod/test.js',
        credits: 'AcidMod',
        iconURL: 'https://acidmod.js.org/extensions/images/AcidMod/test.svg',
        tags: ['acidmod'],
        description: 'Blocks used for testing stuff in AcidMod.',
        featured: true
    },
	    {
        name: 'Cooleans',
        extensionId: 'https://acidmod.js.org/extensions/AcidMod/cooleans.js',
        credits: 'AcidMod',
        iconURL: 'https://acidmod.js.org/extensions/images/AcidMod/cooleans.svg',
        tags: ['acidmod'],
        description: 'Cooleans, the definitive way of if condition reporters.',
        featured: true
    },
	    {
        name: 'Super Variables',
        extensionId: 'https://acidmod.js.org/extensions/AcidMod/superVars.js',
        credits: 'AcidMod',
        iconURL: 'https://acidmod.js.org/extensions/images/AcidMod/superVars.svg',
        tags: ['acidmod'],
        description: 'Super Variables, advanced variable creation and clearing on a separate temporary spectrum.',
        featured: true
    },
	{
        name: 'AcidMod Console',
        extensionId: 'https://acidmod.js.org/extensions/AcidMod/acidConsole.js',
        credits: 'AcidMod',
        iconURL: 'https://acidmod.js.org/extensions/images/AcidMod/acidConsole.svg',
        tags: ['acidmod'],
        description: 'Interact with your developer console.',
        featured: true
    },
];

// DashBlocks extensions
const dbExtensions = [
    {
        name: "Playgama Bridge SDK",
        description: "Blocks that initialize and interact with the Playgama Bridge SDK. Official.",
        extensionId: "https://github.com/playgama/bridge-scratch/releases/latest/download/PlaygamaBridge.js",
		iconURL: defaultExtensionIcon,
        credits: "Playgama, sergei-playgama and DBDev-IT",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "YaGames SDK",
        description: "Blocks that initialize and interact with the Yandex Games SDK. Unofficial.",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/timaaos/YaGames.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/timaaos/YaGames.svg",
        credits: "timaaos, scratch_craft_2, DBDev-IT, and Den4ik-12",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Telegram Bot API",
        description: "Blocks that interact with the Telegram API for bots. Unofficial.",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/damir2809/TelegramBotAPI.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/damir2809/TelegramBotAPI.svg",
        credits: "DBDev-IT, scratch_craft_2, ttt999, By-ROlil-CO, AnonimKing24, and Den4ik-12",
        internetConnectionRequired: true,
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Discord Webhook API",
        description: "Blocks that interact with the Discord Webhook API. Unofficial.",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/damir2809/DiscordWebhookAPI.js",
		iconURL: defaultExtensionIcon,
        credits: "DBDev-IT",
        internetConnectionRequired: true,
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Pathfinding",
        description: "Find paths from one position to another, avoiding obstacles.",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/Den4ik-12/Pathfinding.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/Den4ik-12/Pathfinding.svg",
        credits: "Den4ik-12",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Wheel Scroll",
        description: "Blocks for detecting mouse wheel scrolling.",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/Den4ik-12/WheelScroll.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/Den4ik-12/WheelScroll.svg",
        credits: "Den4ik-12",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Maps",
        description: "Blocks for working with Map, which is more powerful than Object.",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/Den4ik-12/Maps.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/Den4ik-12/Maps.svg",
        credits: "Den4ik-12",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Dash Targets",
        description: "Easily manage your sprites, clones, and their properties.",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/Den4ik-12/Targets.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/Den4ik-12/Targets.svg",
        credits: "Den4ik-12",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Modals",
        description: "Control classic modal windows in browsers!",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/scratch_craft_2/Modals.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/scratch_craft_2/Modals.png",
        credits: "scratch_craft_2",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "MediaRecorder",
        description: "Record your projects directly in Dash!",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/scratch_craft_2/MediaRecorder.js",
		iconURL: defaultExtensionIcon,
        credits: "scratch_craft_2",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Arduino ULTIMATE",
        description: "Allows you to control Arduino directly from the browser. Supports digital/analog I/O, PWM, Servo, I2C, basic sensors and devices.",
		iconURL: "https://ozrobotics.com/wp-content/uploads/2022/07/Adeept-04-12.jpg",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/scratch_craft_2/ArduinoULTIMATE.js",
        insetIconURL: dashblocksIcon,
        credits: 'scratch_craft_2',
        tags: ['dash', 'hardware', 'iot'],
		customInsetColor: '#F98947',
		bluetoothRequired: true,
        featured: true
    },
    {
        name: "Notification",
        description: "Send notifications with icons.",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/shilenin/Notification.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/shilenin/Notification.svg",
        credits: "shilenin",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Code Cleaner",
        description: "Clean and optimize your code!",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/shilenin/CodeCleaner.js",
        iconURL: "https://raw.githubusercontent.com/Mirazstudio-offical/Dash_code_cleaner_extension/refs/heads/main/logo.svg",
        credits: "shilenin",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "JavaScript Runner",
        description: "Run the JavaScript code!",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/shaman2016/JavaScriptRunner.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/shaman2016/JavaScriptRunner.svg",
        credits: "polzovatel_8787 and DBDev-IT",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
    {
        name: "Auto Save",
        description: "Several features for games",
        extensionId: "https://dashblocks.github.io/extensions/static/extensions/QBacks/AutoSave.js",
        iconURL: "https://dashblocks.github.io/extensions/static/images/QBacks/AutoSave.svg",
        credits: "QBacks",
		insetIconURL: dashblocksIcon,
        tags: ['dash'],
		customInsetColor: '#F98947',
		featured: true
    },
];

// MistWarp extensions
const mistExtensions = [
{
        name: 'Async Skins',
        extensionId: 'https://extensions.mistium.com/featured/Async%20Skins.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Async%20Skins.png',
        tags: ['mistwarp'],
        insetIconURL: mistwarpIcon,
       customInsetColor: '#D399E5',
        description: "Have your sprites render as other images or costumes.",
        featured: true
    },
{
        name: 'MistWarp Canvas',
        extensionId: 'https://extensions.mistium.com/featured/Canvas.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Canvas.png',
        tags: ['mistwarp'],
        insetIconURL: mistwarpIcon,
       customInsetColor: '#D399E5',
        description: "Create and manipulate canvases with this extension.",
        featured: true
    },
    {
        name: 'Discord Bot',
        extensionId: 'https://extensions.mistium.com/featured/DiscordBot.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/DiscordBot.png',
        tags: ['mistwarp'],
        description: 'Makes Discord bots.',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
    {
        name: 'EvalPlus',
        extensionId: 'https://extensions.mistium.com/featured/EvalPlus.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/EvalPlus.png',
        tags: ['mistwarp'],
        description: 'Evaluate JS better (plus some dom stuff).',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
    {
        name: 'Github (Mist)',
        extensionId: 'https://extensions.mistium.com/featured/Github.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Github.png',
        tags: ['mistwarp'],
        description: 'Access GitHub from Scratch.',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
    {
        name: 'HTMLInputs',
        extensionId: 'https://extensions.mistium.com/featured/HTMLInputs.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/HTMLInputs.png',
        tags: ['mistwarp'],
        description: 'Manage html inut elements on the stage.',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
{
        name: 'Iframe+',
        extensionId: 'https://extensions.mistium.com/featured/Iframe+.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Iframe+.png',
        tags: ['mistwarp'],
       insetIconURL: mistwarpIcon,
       customInsetColor: '#D399E5',
        description: "Have many iframes at once.",
        internetConnectionRequired: true,
        featured: true
    },
{
        name: 'IndexedDB',
        extensionId: 'https://extensions.mistium.com/featured/IndexedDB.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/IndexedDB.png',
        tags: ['mistwarp'],
       insetIconURL: mistwarpIcon,
       customInsetColor: '#D399E5',
        description: "Access and write to IndexedDB.",
        internetConnectionRequired: true,
        featured: true
    },
{
        name: 'KeyHistory',
        extensionId: 'https://extensions.mistium.com/featured/KeyHistory.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/KeyHistory.png',
        tags: ['mistwarp'],
       insetIconURL: mistwarpIcon,
       customInsetColor: '#D399E5',
        description: "Manage previous keys simply",
        featured: true
    },
	    {
        name: 'MediaUtils',
        extensionId: 'https://extensions.mistium.com/featured/MediaUtils.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/MediaUtils.png',
        tags: ['mistwarp'],
        description: 'Just some uilities for media devices.',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
	    {
        name: 'Mist\'s Utils',
        extensionId: 'https://extensions.mistium.com/featured/Mist\'s%20Utils.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Mist\'s%20Utils.png',
        tags: ['mistwarp'],
        description: 'A bunch of compiled stuff',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
	    {
        name: 'MistFetch',
        extensionId: 'https://extensions.mistium.com/featured/MistFetch.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/MistFetch.png',
        tags: ['mistwarp'],
        description: 'Fetch extension for http and stuff.',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
{
        name: 'OASM',
        extensionId: 'https://extensions.mistium.com/featured/OASM.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/OASM.png',
        tags: ['mistwarp'],
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        description: "Run the full oasm interpreter except very fast.",
        internetConnectionRequired: true,
        featured: true
    },
	    {
        name: 'Persistent File System',
        extensionId: 'https://extensions.mistium.com/featured/Persistent%20File%20System.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Persistent%20File%20System.png',
        tags: ['mistwarp'],
        description: 'Persistent file system using IndexedDB.',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
{
        name: 'Python',
        extensionId: 'https://extensions.mistium.com/featured/Python.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Python.png',
        tags: ['mistwarp'],
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        description: "Run python with piodide.",
        internetConnectionRequired: false,
        featured: true
    },
	    {
        name: 'RDF',
        extensionId: 'https://extensions.mistium.com/featured/RDF.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/RDF.png',
        tags: ['mistwarp'],
        description: 'Type restricted data formatting',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
 {
        name: 'Rotur',
        extensionId: 'https://extensions.mistium.com/featured/Rotur.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Rotur.png',
        tags: ['mistwarp'],
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
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
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        description: "Voice and video calling for GaiaMod and other Scratch mods.",
        internetConnectionRequired: true,
        featured: true
    },
 {
        name: 'Shaders',
        extensionId: 'https://extensions.mistium.com/featured/Shaders.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Shaders.png',
        tags: ['mistwarp'],
        insetIconURL: mistwarpIcon,
       customInsetColor: '#D399E5',
        description: "Run GLSL shaders on your sprites.",
        internetConnectionRequired: false,
        featured: true
    },
	    {
        name: 'MistWarp Tables',
        extensionId: 'https://extensions.mistium.com/featured/Tables.js',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Tables.png',
        tags: ['mistwarp'],
        description: 'basically just compiled 2d arrays',
		insetIconURL: mistwarpIcon,
		customInsetColor: '#D399E5',
        credits: 'Mistium',
        featured: true
    },
{
        name: 'Virtual File System',
        extensionId: 'https://extensions.mistium.com/featured/Virtual%20File%20System.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/Virtual%20File%20System.png',
        tags: ['mistwarp'],
        insetIconURL: mistwarpIcon,
       customInsetColor: '#D399E5',
        description: "in memory file system as an ext goes pretty crazy.",
        internetConnectionRequired: true,
        featured: true
    },
{
        name: 'WebsocketPlus',
        extensionId: 'https://extensions.mistium.com/featured/WebsocketPlus.js',
        credits: 'Mistium',
        iconURL: 'https://raw.githubusercontent.com/Mistium/extensions.mistium/main/images/WebsocketPlus.png',
        tags: ['mistwarp'],
        insetIconURL: mistwarpIcon,
       customInsetColor: '#D399E5',
        description: "Connect and manage multiple websocket connections.",
        internetConnectionRequired: true,
        featured: true
    },
];

// Astra Editor extensions
const aeExtensions = [
    {
      extensionId: 'https://editors.astras.top/extensions/cyberexplorertools.js',
      name: 'Cyberexplorer\'s Toolbox Mini',
      description: 'A toolbox mini.',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/cyberexplorertools.png',
      credits: 'Cyberexplorer',
      featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/prohibitedWordsExtension.js',
      name: 'XJY\'s blocked words',
      description: 'Makes it easier for you to manage blocked words, suitable for chat features',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/prohibitedWordsExtension.png',
      credits: '小金鱼',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/cyberexplorerfilereader.js',
      name: 'Cyberexplorer\'s File Reader',
      description: 'Open files and folders, and return contents in specified formats.',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/cyberexplorerfilereader.png',
      credits: 'Cyberexplorer',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/cyberexplorerterminal.js',
      name: 'Cyberexplorer\'s Terminal',
      description: 'Better than the terminal addon!',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/cyberexplorerterminal.png',
      credits: 'Cyberexplorer',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/hashhelper.js',
      name: '哈希助手',
      description: '提供一些哈希函数，包括SHA-1、SHA-256、CRC32和HMAC-SHA256，用于数据完整性的验证。',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/hashhelper.png',
      credits: 'fhy-action',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/WinUI3.js',
      name: '类WinUI3弹窗',
      description: '弹窗！更好用的弹窗！',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/WinUI3.png',
      credits: 'E.R.T.J',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/textprocessing.js',
      name: 'TextProcessing',
      description: 'Provides a rich set of text processing blocks for advanced text manipulation scenarios: case conversion, search & replace, regex, split/join, statistics, text cleaning, and more.',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/textprocessing.png',
      credits: 'fhy-action',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/ImageProcessor.js',
      name: 'image processor',
      description: 'A simple image processing',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/ImageProcessor.png',
      credits: 'CramYing',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/textcheck.js',
      name: 'Text Check',
      description: 'This is a text checking extension that provides blocks to check if an input is a valid character/number and whether it contains specified special characters.',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/textcheck.png',
      credits: 'GALAXY__a',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/EsayWindows10Windows11Animations.js',
      name: 'Imitating Windows10&11 window pop-up animations',
      description: 'Let your Scratch OS project have window pop-up animations similar to Windows 10 & 11.',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/EsayWindows10Windows11Animations.png',
      credits: '蓝莓是颗果',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/SheepToolkit.js',
      name: 'SheepToolkit',
      description: 'Some strange blocks.',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/SheepToolkit.png',
      credits: '小小羊',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/ningqiRepetitiveblock.js',
      name: 'ningqi-Repetitive block',
      description: 'Let you simplify some repetitive building blocks',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/ningqiRepetitiveblock.png',
      credits: 'ningqi',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/ningqiVariableTool.js',
      name: 'ningqiVariableTool',
      description: 'Allows you to create new variables within the extension, list',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/ningqiVariableTool.png',
      credits: 'ningqi',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/ningqiSensings.js',
      name: 'ningqiSensings',
      description: 'Check for some things that may not be part of the scratchwork',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/ningqiSensings.png',
      credits: 'ningqi',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/ningqiCollect.js',
      name: 'ningqi Collection1.5',
      description: 'Collected a bunch of useful and fun things!',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/ningqiCollect.png',
      credits: 'ningqi',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/ningqiMultiSourceExtensions.js',
      name: 'Multi-Source Extensions List',
      description: 'Fetches extension lists from AstraEditor or ningqiCollectCollection repositories, and allows loading extensions from arbitrary URLs.',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/ningqiMultiSourceExtensions.png',
      credits: 'ningqi',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/windowstoast.js',
      name: 'Windows toast',
      description: 'Send Windows Toast notifications with icon, sound and duration settings',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/windowstoast.png',
      credits: 'DVD',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/browserDetector.js',
      name: 'Browser Check',
      description: 'Detects the browser type running the project, supports multiple browser identification',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/browserDetector.png',
      credits: 'DVD',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/betterIframe.js',
      name: 'Better Iframe',
      description: 'Better Iframe framework, containing more features!',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/betterIframe.png',
      credits: 'fhy-action',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/NTcolor.js',
      name: 'NTcolor',
      description: 'URL-Only High-Performance Color Analyzer',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/NTcolor.png',
      credits: 'NTUN',
	  featured: true
    },
    {
      extensionId: 'https://editors.astras.top/extensions/lmslogic.js',
      name: 'Logic Operations',
      description: 'Provides various logic gates, boolean operations, and bitwise operations.',
      tags: ['astraeditor'],
	  insetIconURL: astraeditorIcon,
	  customInsetColor: '#0099FF',
      iconURL: 'https://editors.astras.top/extensions/images/lmslogic.png',
      credits: 'fhy-action',
	  featured: true
    },
];

// Bilup extensions
const bilupExtensions = [
    {
      extensionId: 'https://extensions.bilup.org/colortools.js',
      name: 'Color Toolset',
      description: 'Tons of color-related tools, meow. you can mix colors, invert them, find complementary colors, convert formats, and more — super useful tools, meow',
      iconURL: 'https://extensions.bilup.org/images/colortools.svg',
      credits: 'MR醉诗',
	  tags: ['bilup'],
	  featured: true
    },
    {
      extensionId: 'https://extensions.bilup.org/easyblock.js',
      name: 'Easy Block+',
      description: 'Make creation simpler and more convenient.',
      iconURL: 'https://extensions.bilup.org/images/easyblock.svg',
      credits: 'DL_Grass',
	  tags: ['bilup'],
	  featured: true
    },
    {
      extensionId: 'https://extensions.bilup.org/stringtools.js',
      name: 'String Tools',
      description: 'Make handling strings more convenient',
      iconURL: 'https://extensions.bilup.org/images/stringtools.svg',
      credits: 'DL_Grass',
	  tags: ['bilup'],
	  featured: true
    },
    {
      extensionId: 'https://extensions.bilup.org/approaches.js',
      name: 'Approaches!',
      description: 'Nonlinear approach functions.',
      iconURL: 'https://extensions.bilup.org/images/approaches.svg',
      credits: 'DL_Grass and 蓝立方Blue3',
	  tags: ['bilup'],
	  featured: true
    },
    {
      extensionId: 'https://extensions.bilup.org/shangcloud.js',
      name: 'ShangCloud',
      description: 'ShangCloud SDK for Scratch',
      iconURL: 'https://extensions.bilup.org/images/shangcloud.png',
      credits: 'Yearnstudio',
	  tags: ['bilup'],
	  featured: true
    }
];

//Others/Built-Ins
const builtIns = [
 {
        name: 'App Utilities',
        extensionId: 'appmaker',
        iconURL: appMakerIconURL,
		insetIconURL: appMakerInsetIconURL,
        credits: 'LibreKitten',
        tags: ['othermods'],
        description: 'Develop apps in GaiaMod.',
        featured: true
    },
		{
        name: 'HTML5 Elements',
        extensionId: 'html5',
		insetIconURL: gm2HTML5Small,
        iconURL: gm2HTML5Large,
        description: 'Create HTMl5 elements. Display sprite costumes out of the stage!',
        featured: true,
        credits: 'Gvbvdxx',
        tags: ['othermods'],
    },
{
        name: 'Gvbvdxx Extras',
        extensionId: 'extra',
		iconURL: defaultExtensionIcon,
        description: 'Unfinished Gvbvdxx Mod Helper App.',
        featured: true,
        credits: 'Gvbvdxx',
        tags: ['othermods'],
    },
{
        name: 'Website API',
        extensionId: 'websites',
		iconURL: websitesBigIcon,
        insetIconURL: websitesSmallIcon,
        description: 'Website API',
        featured: true,
        credits: 'Gvbvdxx',
        tags: ['othermods'],
    },
{
        name: 'Websockets',
        extensionId: 'websocket',
        iconURL: wsbig,
        insetIconURL: wssmall,
        description: 'Connect to servers!',
        featured: true,
        credits: 'Gvbvdxx',
        tags: ['othermods'],
    },
    {
        name: 'Roku',
        extensionId: 'roku',
        internetConnectionRequired: true,
        credits: 'Gvbvdxx',
        iconURL: roku,
		insetIconURL: rokuSmall,
        tags: ['othermods', 'iot'],
        description: 'Interact with your Roku tv via the GM2Helper software!',
        featured: true
    },
	{
        name: "LASS",
        extensionId: "gasoLASS",
        collaborator: "gasolin",
        iconURL: lassImage,
        description: 'Fetch LASS.',
		tags: ['othermods', 'iot'],
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        useAutoScan: false,
        helpLink: "https://github.com/gasolin/scratch3-internet",
    },
	{
        name: "ThingSpeak",
        extensionId: "gasoThingSpeak",
        collaborator: "gasolin",
        iconURL: thingspeakImage,
        description: 'ThingSpeak blocks.',
        featured: true,
        disabled: false,
		tags: ['othermods', 'iot'],
        internetConnectionRequired: true,
        useAutoScan: false,
        helpLink: "https://github.com/gasolin/scratch3-internet",
    },
	{
        name: "IFTTT",
        extensionId: "gasoIFTTT",
        collaborator: "gasolin",
        iconURL: iftttImage,
        description: 'IFTTT Webhook',
        featured: true,
        disabled: false,
		tags: ['othermods', 'iot'],
        internetConnectionRequired: true,
        useAutoScan: false,
        helpLink: "https://github.com/gasolin/scratch3-internet",
    },
	{
        name: 'Web kit',
        extensionId: "webkit",
        iconURL: toonco1ImageURL,
        insetIconURL: toonco1ImageSmallURL,
		credits: 'toonco1',
		tags: ['othermods', 'iot'],
        description: 'Make your own webkit in GaiaMod!',
        featured: true,
    },
    {
        name: 'Body Blocks',
        extensionId: 'bodyblocks',
        iconURL: bodyblocksIconURL,
        insetIconURL: bodyblocksInsetIconURL,
		credits: 'Stephen Howell',
		tags: ['othermods'],
        description: 'Control sprites with body movements.\nRequires Android phone app.',
        featured: true
    },
    {
        name: 'NES Emulator',
        extensionId: 'nesemulator', // update reference once file names are updated
        tags: ['othermods'],
        bluetoothRequired: false,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: false,
        iconURL: NESEmuThumb,
        insetIconURL: NESInsetIcon,
        description: 'Use the power of the NES emulation in GaiaMod!',
        featured: true,
        credits: 'Gvbvdxx',
    },
	
	{
        name: 'WebMIDI',
        extensionId: 'webmidi',
        iconURL: webmidiIconURL,
        insetIconURL: webmidiInsetIconURL,
        tags: ['othermods', 'hardware', 'noisemaker'],
        description: 'Web MIDI for Musical Instrument',
        featured: true
    },
	{
        name: 'Another MIDI',
        extensionId: 'midi',
        collaborator: 'UchiwaFuujinn',
        iconURL: midiIconURL,
        insetIconURL: midiInsetIconURL,
		tags: ['othermods', 'hardware', 'noisemaker'],
        description: 'A second Web MIDI extension.',
        featured: true,
        disabled: false
    },
	{
        name: 'GitBlock Community',
        extensionId: 'community',
        collaborator: 'GitBlock',
        iconURL: communityImage,
        insetIconURL: communityInsetImage,
        description: 'Community blocks.',
		tags: ['othermods'],
        featured: true
    },
{
        name: 'PictoBloxMath',
        extensionId: 'pictobloxmath',
        iconURL: PictoBloxMathIconURL,
        insetIconURL: PictoBloxMathInsetIconURL,
        description: 'New extension for Square',
		tags: ['othermods'],
		credits: 'rachit-keshari',
        featured: true,
    },
    {
        name: 'PictoBloxString',
        extensionId: 'pictobloxstring',
        iconURL: PictoBloxStringIconURL,
        insetIconURL: PictoBloxStringInsetIconURL,
        description: 'New extension for PictoBlox String',
		tags: ['othermods'],
		credits: 'rachit-keshari',
        featured: true,
    },
      {
        name: (
            <FormattedMessage
                defaultMessage="NFT Collection Utilities"
                description="Name for the 'NFT' extension"
                id="gui.extension.nft.name"
            />
        ),
        extensionId: 'nft',
        iconURL: nftIconURL,
        insetIconURL: nftInsetIconURL,
        credits: 'Digital Education Safety',
		tags: ['othermods'],
        description: (
            <FormattedMessage
                defaultMessage="Create NFTs"
                description="Description for the 'nft' extension"
                id="gui.extension.nft.description"
            />
        ),
        featured: true
    },
	  {
        name: 'Extra Utilities',
        extensionId: 'extraUtilz',
        collaborator: 'SCR4TCH | by Arslaan Pathan',
        iconURL: 'data:image/png;base64,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',
        insetIconURL: 'data:image/png;base64,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',
        description: 'Some extra utilities for advanced users.',
		tags: ['othermods'],
        featured: true
    },
	{
        name: 'Minecraft EDU',
        extensionId: 'minecraft',
        collaborator: 'PlusPlus',
        iconURL: minecraftIconURL,
        insetIconURL: minecraftInsetIconURL,
		tags: ['othermods'],
        description: (
            <FormattedMessage
                defaultMessage="Minecraft EDU extension."
                description="Description for the Minecraft EDU extension"
                id="gui.extension.minecraft.description"
            />
        ),
        featured: true,
        disabled: false
    },
 {
        name: 'Puzzle',
        extensionId: 'puzzle',
        collaborator: 'GitBlock',
        iconURL: puzzleImage,
        insetIconURL: puzzleInsetImage,
        description: 'Puzzle blocks.',
		tags: ['othermods'],
        featured: true
    },
	{
        name: 'Toolbox',
        extensionId: 'toolbox',
        collaborator: 'PlusPlus',
        iconURL: toolboxIconURL,
        insetIconURL: toolboxInsetIconURL,
		tags: ['othermods'],
        description: (
            <FormattedMessage
                defaultMessage="Blocks that help the user in one way or another."
                description="Description for the Toolbox extension"
                id="gui.extension.toolbox.description"
            />
        ),
        featured: true,
        disabled: false
    },
	{
        name: 'Smart Lumies',
        extensionId: 'smartLumies',
        collaborator: 'PlusPlus',
        iconURL: smartLumiesIconURL,
        insetIconURL: smartLumiesInsetIconURL,
        description: 'Have fun with Smart Lumies Cube in GaiaMod!',
		tags: ['othermods', 'iot'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: smartLumiesConnectionIconURL,
        connectionSmallIconURL: smartLumiesConnectionSmallIconURL,
        connectionTipIconURL: smartLumiesConnectionTipIconURL,
        connectingMessage: 'Have your Cube nearby.',
        helpLink: 'https://smartlumies.com'
    },
	{
        name: 'Magic Blue UU',
        extensionId: 'magicBlueUU',
        collaborator: 'PlusPlus',
        iconURL: magicBlueUUIconURL,
        insetIconURL: magicBlueUUInsetIconURL,
		tags: ['othermods', 'hardware', 'iot'],
        description: (
            <FormattedMessage
                defaultMessage="Magic Blue UU extension."
                description="Description for the Magic Blue UU extension"
                id="gui.extension.magicBlueUU.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your Magic Blue UU nearby."
                id="gui.extension.magicBlueUU.connectingMessage"
            />
        )
    },
    {
        name: 'Kori Assistant',
        extensionId: 'kori',
        collaborator: 'OpenAI',
        iconURL: koriIconURL,
        insetIconURL: koriInsetIconURL,
		connectionIconURL: koriConnectionIconURL,
        connectionSmallIconURL: koriConnectionSmallIconURL,
		connectingMessage: 'Connecting',
        tags: ['othermods', 'ai', 'hardware', 'iot'],
        description: 'Experiment with Generative AI.',
        bluetoothRequired: true,
        internetConnectionRequired: true,
		launchPeripheralConnectionFlow: true,
		useAutoScan: false,
		helpLink: 'https://scratch.mit.edu/kori',
        featured: true
    },
	{
        name: 'Ohbot',
        extensionId: 'ohbot',
        iconURL: ohbotIconURL,
        insetIconURL: ohbotInsetIconURL,
		credits: 'Ohbot',
		tags: ['othermods', 'hardware', 'iot'],
        description: 'Control your Ohbot',
        featured: true
    },
	{
        name: 'Future Board',
        extensionId: 'futureBoard',
        collaborator: 'PlusPlus',
        iconURL: futureBoardIconURL,
        insetIconURL: futureBoardInsetIconURL,
		tags: ['othermods', 'hardware', 'iot'],
        description: (
            <FormattedMessage
                defaultMessage="Future Board extension."
                description="Description for the Future Board extension"
                id="gui.extension.futureBoard.description"
            />
        ),
        featured: true,
        disabled: false
    },
	{
        name: 'Kinect',
        extensionId: 'kinect',
        collaborator: 'GitBlock',
        iconURL: kinectImage,
        insetIconURL: kinectInsetImage,
        description: 'Kinect blocks.',
		tags: ['othermods', 'hardware', 'iot'],
        featured: true
    },
    {
        name: 'scratch2maqueen',
        extensionId: 'scratch2maqueen', // update reference once file names are updated
        tags: ['othermods', 'hardware', 'iot'],
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
        name: 'Adruino',
        extensionId: 'https://khanning.github.io/scratch-arduino-extension/arduino_extension.js',
        twDeveloper: 'khanning',
        iconURL: 'https://web.archive.org/web/20220326094337im_/https://scratchx.org/images/extensions/arduino_small.png',
        insetIconURL: 'https://play-lh.googleusercontent.com/AmzHCh6UEelYfh9AfWXh1WIOC0Z_Z69N9bTvEi-hbRhDe7XL04xuuQfvQXCKLHSHcgVk',
        tags: ['othermods', 'hardware', 'iot'],
        description: 'Scratch X - Experiment',
        featured: true
    },
{
        name: 'Marty the Robot',
        extensionId: 'marty',
        collaborator: "Robotical",
        iconURL: 'https://scratch3beta.robotical.io/static/assets/f1f767c70b08089a3940f35ebfdc315e.png',
        insetIconURL: 'https://scratch3beta.robotical.io/static/assets/825efb8616528b0a1ed8fe7d6f325408.svg',
        description: 'Play and program with Marty.',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
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
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
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
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true
    },
    {
        name: 'LEGO SPIKE Prime',
        extensionId: 'spikePrime',
        collaborator: 'bricklife',
        iconURL: spikePrimeIconURL,
        insetIconURL: spikePrimeInsetIconURL,
        description: 'LEGO SPIKE Prime extension.',
		tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: spikePrimeConnectionIconURL,
        connectionSmallIconURL: spikePrimeConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://github.com/bricklife/scratch-lego-bluetooth-extensions'
    },
	 {
        name: 'ELLabs Extension',
        extensionId: 'ellabsextension',
        iconURL: ExtensionIconURL,
        insetIconURL: ExtensionInsetIconURL,
		collaborator: "ishakboufatah",
        description: 'ELLabs Scratch extension',
		tags: ['othermods', 'iot'],
        featured: true,
        disabled: false
    },
	{
        name: 'Zumi AI (with dongle)',
        extensionId: 'zumiAIS',
        collaborator: 'ROBOLINK',
        iconURL: esp32SerialIconURL,
        insetIconURL: esp32SerialInsetIconURL,
        description: (
            <FormattedMessage
                id="gui.extension.zumiAIS.description"
                defaultMessage="Zumi AI for Scratch 3 with Bluetooth"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
		tags: ['othermods', 'hardware', 'ai', 'iot'],
        connectionIconURL: esp32SerialConnectionIconURL,
        connectionSmallIconURL: esp32SerialConnectionSmallIconURL,
        connectingMessage: 'connecting...', //

        helpLink: 'https://your-custom-help-link.com'
    },

    {
        name: 'Zumi AI (with bluetooth)',
        extensionId: 'zumiAIB',
        collaborator: 'ROBOLINK',
        iconURL: esp32BluetoothIconURL,
        insetIconURL: esp32BluetoothInsetIconURL,
        description: (
            <FormattedMessage
                id="gui.extension.zumiAIB.description"
                defaultMessage="Zumi AI for Scratch 3 with Bluetooth"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
		tags: ['othermods', 'hardware', 'ai', 'iot'],
        connectionIconURL: esp32BluetoothConnectionIconURL,
        connectionSmallIconURL: esp32BluetoothConnectionSmallIconURL,
        connectingMessage: 'connecting...', // 👈

        helpLink: 'https://your-custom-help-link.com'
    },
	 {        
        name: 'PlayGo',
        extensionId: 'playgo',
        collaborator: 'tdrobotica',
        iconURL: playgoIconURL,
        insetIconURL: playgoInsetIconURL,
        description: 'Playgo Scratch extension',
		tags: ['othermods', 'hardware', 'iot'],
		internetConnectionRequired: true,
		bluetoothRequired: true,
        featured: true,        
    }, 
    {
        name: 'PlayIoT',
        extensionId: 'playiot',
        collaborator: 'tdrobotica',
        iconURL: playIoTIconURL,
        insetIconURL: playIoTInsetIconURL,
		description: 'PlayIoT Scratch extension',
		tags: ['othermods', 'hardware', 'iot'],
		internetConnectionRequired: true,
		bluetoothRequired: true,
        featured: true,        
    },
	{
        name: 'AKARI Blocks',
        extensionId: 'akariblocks',
        collaborator: 'AKARI Groups',
        iconURL: akariBlocksImage,
        insetIconURL: akariBlocksButtonImage,
        description: 'AKARI control block',
		tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    {
        name: 'AKARI Camera',
        extensionId: 'akaricamera',
        collaborator: 'AKARI Groups',
        iconURL: akariCameraImage,
        insetIconURL: akariCameraButtonImage,
        description: 'AKARI camera block',
		tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    {
        name: 'AKARI Blocks(Simple)',
        extensionId: 'akariblockssimple',
        collaborator: 'AKARI Groups',
        iconURL: akariBlocksSimpleImage,
        insetIconURL: akariBlocksSimpleButtonImage,
        description: 'Simple Akari blocks.',
		tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    {
        name: 'AKARI Camera(Simple)',
        extensionId: 'akaricamerasimple',
        collaborator: 'AKARI Groups',
        iconURL: akariCameraSimpleImage,
        insetIconURL: akariCameraSimpleButtonImage,
        description: 'Simple Akari camera blocks.',
		tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
	{
        name: 'MatataBot',
        extensionId: 'matatabot',
        collaborator: 'matatalab',
        iconURL: matatabotIconURL,
        insetIconURL: matatabotInsetIconURL,
		tags: ['othermods', 'hardware', 'iot'],
        description: 'Connect your projects with the MatataBot.',
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: matatabotConnectionIconURL,
        connectionSmallIconURL: matatabotConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://matatalab.com/'
    },
	{
        name: 'Vgate iCar Pro',
        extensionId: 'iCarPro',
        collaborator: 'PlusPlus',
        iconURL: iCarProIconURL,
        insetIconURL: iCarProInsetIconURL,
		tags: ['othermods', 'hardware', 'iot'],
        description: (
            <FormattedMessage
                defaultMessage="Vgate iCar Pro extension."
                description="Description for the Vgate iCar Pro extension"
                id="gui.extension.iCarPro.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your iCar Pro nearby."
                id="gui.extension.iCarPro.connectingMessage"
            />
        )
    },
{
        name: 'JDCode',
        extensionId: 'jdcode',
        collaborator: 'Junilab Inc.',
        iconURL: jdcodeIconURL,
        insetIconURL: jdcodeInsetIconURL,
        description: 'JDCode Drone with GaiaMod',
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
		tags: ['othermods', 'hardware', 'iot'],
        useAutoScan: false,
        connectionIconURL: jdcodeConnectionIconURL,
        connectionSmallIconURL: jdcodeConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://www.junilab.co.kr/sub/jdkit.php'
    },
    {
        name: 'JCBoard',
        extensionId: 'jcboard',
        collaborator: 'Junilab Inc.',
        iconURL: jcboardIconURL,
        insetIconURL: jcboardInsetIconURL,
        description: 'JCBoard with GaiaMod',
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
		tags: ['othermods', 'hardware', 'iot'],
        useAutoScan: false,
        connectionIconURL: jcboardConnectionIconURL,
        connectionSmallIconURL: jcboardConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://www.junilab.co.kr/sub/jcboard.php'
    },
    {
        name: 'UglyBot',
        extensionId: 'uglybot',
        collaborator: 'Junilab Inc.',
        iconURL: uglybotIconURL,
        insetIconURL: uglybotInsetIconURL,
        description: 'UglyBot with GaiaMod',
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
		tags: ['othermods', 'hardware', 'iot'],
        useAutoScan: false,
        connectionIconURL: uglybotConnectionIconURL,
        connectionSmallIconURL: uglybotConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://www.junilab.co.kr/sub/uglybot.php'
    },
    {
        name: 'Robodog',
        extensionId: 'robodog',
        collaborator: 'Junilab Inc.',
        iconURL: robodogIconURL,
        insetIconURL: robodogInsetIconURL,
        description: 'RoboDog with GaiaMod',
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
		tags: ['othermods', 'hardware', 'iot'],
        useAutoScan: false,
        connectionIconURL: robodogConnectionIconURL,
        connectionSmallIconURL: robodogConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://jcblock.co.kr'
    },
    {
        name: 'Firmtech Drone2',
        extensionId: 'firmtech',
        collaborator: 'www.codingkit.co.kr',
        iconURL: firmtechIconURL,
        insetIconURL: firmtechInsetIconURL,
        description: 'Firmtech Drone2 with GaiaMod',
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
		tags: ['othermods', 'hardware', 'iot'],
        useAutoScan: false,
        connectionIconURL: firmtechConnectionIconURL,
        connectionSmallIconURL: firmtechConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://www.codingkit.co.kr'
    },
    {
        name: 'AIDrone',
        extensionId: 'aidrone',
        collaborator: 'ir-brain',
        iconURL: aidroneIconURL,
        insetIconURL: aidroneInsetIconURL,
        description: 'AI Drone with GaiaMod',
        featured: true,
		tags: ['othermods', 'ai', 'hardware', 'iot'],
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: aidroneConnectionIconURL,
        connectionSmallIconURL: aidroneConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://www.ir-brain.com/'
    },
    {
        name: 'AICoBot',
        extensionId: 'aicobot',
        collaborator: 'K-EdTech',
        iconURL: aicobotIconURL,
        insetIconURL: aicobotInsetIconURL,
        description: 'AICoBot with GaiaMod',
        featured: true,
		tags: ['othermods', 'ai', 'hardware', 'iot'],
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: aicobotConnectionIconURL,
        connectionSmallIconURL: aicobotConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://www.k-edtech.co.kr'
    },
	{
        name: 'Scratch Emo',
        extensionId: 'emo',
        collaborator: 'Yukai Engineering Inc.',
		tags: ['othermods', 'hardware', 'iot'],
        iconURL: emoBlockImage,
        insetIconURL: emoBlockInsertIconImage,
        description: "Play with BOCCO emo!",
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
    },
	 {
        name: "Miss Mix A Lot",
        extensionId: "missmixalot",
        collaborator: "Coding Class Odense",
        iconURL: missmixalotIconURL,
        insetIconURL: missmixalotInsetIconURL,
		tags: ['othermods', 'iot'],
        description: 'Miss Mix A Lot blocks.',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: "https://codingclassodense.dk/",
    },
	{
        name: 'Snap Circuits U33',
        extensionId: 'snapCircuitsU33',
        collaborator: 'PlusPlus',
        iconURL: snapCircuitsU33IconURL,
        insetIconURL: snapCircuitsU33InsetIconURL,
		tags: ['othermods', 'hardware', 'iot'],
        description: (
            <FormattedMessage
                defaultMessage="Snap Circuits U33 extension."
                description="Description for the Snap Circuits U33 extension"
                id="gui.extension.snapCircuitsU33.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Have your Snap Circuits U33 nearby."
                id="gui.extension.snapCircuitsU33.connectingMessage"
            />
        )
    },
{
        name: 'OneGpio Arduino',
        extensionId: 'onegpioArduino',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioArduinoImage,
        insetIconURL: onegpioArduinoInsetIconURL,
        description: 'OneGPIOArduino',
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
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
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
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
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
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
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
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
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
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
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
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
        tags: ['othermods', 'hardware', 'iot'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
];

// Extension Galleries
    const extensionGalleries = [
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
        href: 'https://sharkpools-extensions.vercel.app',
        extensionId: 'special_sharkpoolExtensionLibrary',
        iconURL: sharkpoolGalleryIcon,
        description: 'Tons of extensions created by SharkPool.\n\nClick on an extension while this menu is open to add it to your project.',
        credits: 'Listed in the site',
        tags: ['sharkpool', 'library'],
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
        href: 'https://gaiamod-main.github.io/GaiaMod-ExtensionsGallery/?editor=true',
        extensionId: 'special_gaiamodExtensionLibrary',
        iconURL: gaiaExGalleryThumb,
        description: 'See some GaiaMod External extensions, even user-submitted. Opens in a new tab.',
        tags: ['gaiamod', 'library'],
        featured: true
    },
    {
        name: 'ArkIDE Extra Extensions',
        href: 'https://extensions.arkide.site/',
        extensionId: 'special_arkideExtensionLibrary',
        iconURL: 'https://studio.arkide.site/static/assets/ec6c0b201605163f47d10636142e36b9.svg',
        description: 'See some Ark IDE External extensions, even user-submitted. Opens in a new tab.',
        tags: ['arkide', 'library'],
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
        name: 'DinosaurMod Extra Extensions',
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
        name: 'Dash Extra Extensions',
        href: 'https://dashblocks.github.io/extensions/',
        extensionId: 'special_dashExtensionLibrary',
        iconURL: 'https://raw.githubusercontent.com/DashBlocks/scratch-gui/3ce7fe9c45c09bc33b5da54b7b9db449344bdfec/src/lib/libraries/extensions/gallery/gallery.svg',
        description: 'See some Dash External extensions. Opens in a new tab.',
        tags: ['dash', 'library'],
        featured: true
    },
	{
        name: 'Astra Editor Extra Extensions',
        href: 'https://editors.astras.top/extensions/',
        extensionId: 'special_aeExtensionLibrary',
        iconURL: 'https://github.com/AstraEditor/scratch-gui/blob/develop/src/lib/libraries/extensions/gallery/aegallery.png?raw=true',
        description: 'See some Astra Editor External extensions. Opens in a new tab.',
        tags: ['astraeditor', 'library'],
        featured: true
    },
	{
        name: 'AmpMod Extra Extensions',
        href: 'https://ampmod.codeberg.page/extensions/',
        extensionId: 'special_ampmodExtensionLibrary',
        iconURL: ampmodgalleryThumb,
        description: 'See some AmpMod External extensions. Opens in a new tab.',
        tags: ['othermods', 'library'],
        featured: true
    },
	{
        name: 'OmniBlocks Extra Extensions',
        href: 'https://omniblocks.github.io/extensions/',
        extensionId: 'special_omniblocksExtensionLibrary',
        iconURL: obgalleryIcon,
        description: 'See some OmniBlocks External extensions. Opens in a new tab.',
        tags: ['othermods', 'library'],
        featured: true
    },
   ];

// Extension Builders
 const extensionBuilders = [
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
        name: 'ExtCreate',
        href: 'https://extcreate.snail-ide.com/',
        extensionId: 'special_ExtCreate',
        iconURL: 'https://raw.githubusercontent.com/Snail-IDE/snail-ide.github.io/2d2190779715b9d4d14e6c62dbd487f0563dbba0/src/lib/libraries/extensions/ext-create/logo.svg',
        insetIconURL: 'https://raw.githubusercontent.com/ElectraMod/scratch-gui/4751b8232c951c6119cca8776054fa5b496c30dc/src/lib/libraries/extensions/ext-create/inset.svg',
        customInsetColor: '#FFF',
        description: 'Snail IDE version of TurboBuilder. Disabled due to the link not working.',
        credits: 'Started by JeremyGamer13, continued by jwklong, modified by nmsderp.',
        tags: ['snail-ide', 'builders', 'extcreate', 'disabled'],
        disabled: true,
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
   ];



export {
	pmExtensions,
	pmExtras,
	arkExtensions,
	dinoExtensions,
	snailExtensions,
	gmExtensions,
	spExtensions,
	nbExtensions,
	amExtensions,
	dbExtensions,
	mistExtensions,
	aeExtensions,
	bilupExtensions,
	builtIns,
	extensionGalleries,
	extensionBuilders
	}