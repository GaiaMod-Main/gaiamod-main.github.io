import defaultsDeep from 'lodash.defaultsdeep';

import accentGaia from './accents/gaiablue.js';
import accentLime from './accents/lime.js';
import accentLightBlue from './accents/light-blue.js';
import accentPurple from './accents/purple.js';
import accentRed from './accents/red.js';

const ACCENT_GAIABLUE = 'Gaia Blue';
const ACCENT_LIME = 'Lime Green';
const ACCENT_LIGHTBLUE = 'Light Blue';
const ACCENT_PURPLE = 'Purple';
const ACCENT_RED = 'Red';
const ACCENT_BLUE = 'Blue';
const ACCENT_SCRATCH = 'Scratch';
const ACCENT_MAGENTA = 'Magenta';
const ACCENT_PINK = 'Pink';
const ACCENT_SERENEBLUE = 'Serene Blue';
const ACCENT_PALEPURPLE = 'Gray Purple';
const ACCENT_GOLD = 'Gold';
const ACCENT_SILVER = 'Silver';
const ACCENT_BLACK = 'Black';
const ACCENT_RAINBOW = 'Rainbow';
const ACCENT_NEBULA = 'Nebula';
const ACCENT_COSMIC = 'Cosmic';
const ACCENT_AURORA = 'Aurora';
const ACCENT_MINT = 'Mint';
const ACCENT_CHERRY = 'Cherry';
const ACCENT_MAP = {
    [ACCENT_GAIABLUE]: accentGaia,
    [ACCENT_LIME]: accentLime,
    [ACCENT_LIGHTBLUE]: accentLightBlue,
    [ACCENT_PURPLE]: accentPurple,
    [ACCENT_RED]: accentRed,
    [ACCENT_BLUE]: {
        'motion-primary': 'hsla(215, 100%, 65%, 1)'
    },
    [ACCENT_SCRATCH]: {
        'motion-primary': 'hsla(260, 60%, 60%, 1)'
    },
    [ACCENT_MAGENTA]: {
        'motion-primary': 'hsla(289, 100%, 54%, 1)'
    },
    [ACCENT_PINK]: {
        'motion-primary': 'hsla(325, 60%, 60%, 1)'
    },
    [ACCENT_SERENEBLUE]: {
        'motion-primary': 'hsla(261, 100%, 50%, 1)'
    },
    [ACCENT_PALEPURPLE]: {
        'motion-primary': '#625E97'
    },
    [ACCENT_GOLD]: {
        'motion-primary': 'hsla(46, 100%, 64%, 1)'
    },
    [ACCENT_SILVER]: {
        'motion-primary': 'hsla(268, 0%, 73%, 1)'
    },
    [ACCENT_BLACK]: {
        'motion-primary': 'hsla(268, 0%, 24% 1)'
    },
    [ACCENT_RAINBOW]: {
        'motion-primary': '#ff4c4c'
    },
    [ACCENT_NEBULA]: {
        'motion-primary': 'oklab(0.55 0.08 -0.12)'
    },
    [ACCENT_COSMIC]: {
        'motion-primary': 'oklab(0.68 0.15 -0.08)'
    },
    [ACCENT_AURORA]: {
        'motion-primary': 'oklab(0.70 -0.10 0.08)'
    },
    [ACCENT_MINT]: {
        'motion-primary': 'oklab(0.78 -0.12 0.08)'
    },
    [ACCENT_CHERRY]: {
        'motion-primary': 'oklab(0.70 0.18 0.08)'
    },
    ["custom"]: {}
};

const ACCENT_DEFAULT = ACCENT_GAIABLUE;

let themeObjectsCreated = 0;

class Theme {
    constructor(accent) {
        // do not modify these directly
        /** @readonly */
        this.id = ++themeObjectsCreated;
        /** @readonly */
        this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
        /** @readonly */
        this.accentData = ACCENT_MAP[accent] ? ACCENT_MAP[accent] : ACCENT_MAP[ACCENT_DEFAULT]
    }

    static light = new Theme(ACCENT_DEFAULT);
    static dark = new Theme(ACCENT_DEFAULT);
    static highContrast = new Theme(ACCENT_DEFAULT);

    set (to) {
        return new Theme(to);
    }

    getGuiColors () {
        return defaultsDeep(
            {},
            ACCENT_MAP[this.accent]
        );
    }
}

export {
    Theme,

    ACCENT_GAIABLUE,
    ACCENT_LIME,
    ACCENT_LIGHTBLUE,
    ACCENT_PURPLE,
    ACCENT_RED,
    ACCENT_SCRATCH,
    ACCENT_MAGENTA,
    ACCENT_PINK,
    ACCENT_SERENEBLUE,
    ACCENT_PALEPURPLE,
    ACCENT_GOLD,
    ACCENT_SILVER,
    ACCENT_BLACK,
    ACCENT_BLUE,
    ACCENT_RAINBOW,
    ACCENT_NEBULA,
    ACCENT_COSMIC,
    ACCENT_AURORA,
    ACCENT_MINT,
    ACCENT_CHERRY,
    ACCENT_MAP
}