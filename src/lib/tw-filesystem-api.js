const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
            {
                description: 'GaiaMod Project',
                accept: {
                    'application/x.scratch.sb3': '.gaia'
                }
            },
            {
                description: 'CodeTorch Project',
                accept: {
                    'application/x.scratch.sb3': '.torch'
                }
            },
            {
                description: 'Omega Turbo Project',
                accept: {
                    'application/x.scratch.sb3': '.omega'
                }
            },
            {
                description: 'DinosaurMod Project',
                accept: {
                    'application/x.scratch.sb3': '.dino'
                }
            },
            {
                description: 'ElectraMod Project',
                accept: {
                    'application/x.scratch.sb3': '.electra'
                }
            },
            {
                description: 'Snail-IDE Project',
                accept: {
                    'application/x.scratch.sb3': '.snail'
                }
            },
            {
                description: 'PenguinMod Project',
                accept: {
                    'application/x.scratch.sb3': '.pmp'
                }
            },
            {
                description: 'Scratch 3.0 Project',
                accept: {
                    'application/x.scratch.sb3': '.sb3'
                }
            }
    ],
    excludeAcceptAllOption: true
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
                {
                    description: 'Supported Files',
                    accept: {
                        'application/x.scratch.sb3': ['.gaia', '.torch', '.omega', '.dino', '.electra', '.snail', '.pmp', '.pm', '.sb3', '.sb2', '.sb']
                    }
                },
                {
                    description: 'GaiaMod Project',
                    accept: {
                        'application/x.scratch.sb3': ['.gaia']
                    }
                },
                {
                    description: 'CodeTorch Project',
                    accept: {
                        'application/x.scratch.sb3': ['.torch']
                    }
                },
                {
                    description: 'Omega Turbo Project',
                    accept: {
                        'application/x.scratch.sb3': ['.omega']
                    }
                },
                {
                    description: 'DinosaurMod Project',
                    accept: {
                        'application/x.scratch.sb3': ['.dino']
                    }
                },
                {
                    description: 'ElectraMod Project',
                    accept: {
                        'application/x.scratch.sb3': ['.electra']
                    }
                },
                {
                    description: 'Snail-IDE Project',
                    accept: {
                        'application/x.scratch.sb3': ['.snail']
                    }
                },
                {
                    description: 'PenguinMod Project',
                    accept: {
                        'application/x.scratch.sb3': ['.pmp', '.pm']
                    }
                },
                {
                    description: 'Scratch Project',
                    accept: {
                        'application/x.scratch.sb3': ['.sb3', '.sb2', '.sb']
                    }
                }
        ]
    });
    return handle;
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker
};
