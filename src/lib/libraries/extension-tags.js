import messages from './tag-messages.js';
export default [
    { tag: 'penguinmod', intlLabel: messages.penguinmod },
    { tag: 'gaiamod', intlLabel: messages.gaiamod },
    { tag: 'electramod', intlLabel: messages.electramod },
    { tag: 'dinosaurmod', intlLabel: messages.dinosaurmod },
    { tag: 'snailide', intlLabel: messages.snailide },
	{ tag: 'adacraft', intlLabel: messages.adacraft },
	{ tag: 'astraeditor', intlLabel: messages.astraeditor },
	{ tag: 'genesiside', intlLabel: messages.genesiside },
	{ tag: 'othermods', intlLabel: messages.othermods },
    { tag: 'turbowarp', intlLabel: messages.turbowarp },
    { tag: 'scratch', intlLabel: messages.scratch },
    { tag: 'divider2', intlLabel: messages.scratch, type: 'divider' },
    { tag: 'graphics', intlLabel: messages.graphics },
    { tag: 'noisemaker', intlLabel: messages.noisemaker },
    { tag: 'math', intlLabel: messages.math },
    { tag: 'jokes', intlLabel: messages.jokes },
    { tag: 'datamgmt', intlLabel: messages.datamgmt },
    { tag: 'hardware', intlLabel: messages.hardware },
    { tag: 'ai', intlLabel: messages.ai },
    { tag: 'divider2', intlLabel: messages.scratch, type: 'divider' },
    { tag: 'categoryexpansion', intlLabel: messages.categoryexpansion },
    { tag: 'programminglanguage', intlLabel: messages.programminglanguage },
    { tag: 'divider1', intlLabel: messages.scratch, type: 'divider' },
    { tag: 'library', intlLabel: messages.library },
    { tag: 'extcreate', intlLabel: messages.extcreate },
    { tag: 'divider3', intlLabel: messages.scratch, type: 'divider' },
    { tag: 'divider1', intlLabel: 'Actions', type: 'title' }, //??
    { tag: 'custom', intlLabel: messages.customextension, type: 'custom', func: (library) => {
        library.select(''); // selects custom extension since it's id is ''
    } },
];
