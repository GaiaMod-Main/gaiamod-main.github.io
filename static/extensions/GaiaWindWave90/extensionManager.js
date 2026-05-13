(function(Scratch) {
    'use strict';

    const m = Scratch.vm.runtime.extensionManager;

    class ExtensionManagerTools {
        getInfo() {
            return {
                id: 'extensionManagerTools',
                name: 'Extension Management',
                color1: '#4C97FF',
                color2: '#3373CC',
                blocks: [
                    {
                        opcode: 'isLoaded',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'Is extension [EXTID] loaded?',
                        arguments: {
                            EXTID: { type: Scratch.ArgumentType.STRING, defaultValue: 'jgJSON' }
                        }
                    },
                    {
                        opcode: 'loadById',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Load Extension ID [EXTID]',
                        arguments: {
                            EXTID: { type: Scratch.ArgumentType.STRING, defaultValue: 'jgJSON' }
                        }
                    },
                    {
                        opcode: 'loadByURL',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Load Extension URL [EXTURL]',
                        arguments: {
                            EXTURL: { type: Scratch.ArgumentType.STRING, defaultValue: 'https://example.com/myext.js' }
                        }
                    },
                    {
                        opcode: 'removeExtension',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Delete extension [EXTID]',
                        arguments: {
                            EXTID: { type: Scratch.ArgumentType.STRING, defaultValue: 'jgJSON' }
                        }
                    },
                    {
                        opcode: 'listLoaded',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'List of Loaded Extensions (JSON)'
                    },
                    {
                        opcode: 'getExtensionURLFromId',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Retrieve the extension URL from ID [EXTID]',
                        arguments: {
                            EXTID: { type: Scratch.ArgumentType.STRING, defaultValue: 'jgJSON' }
                        }
                    },
                    {
                        opcode: 'getAllExtensionURLs',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'List of All Loaded URLs (JSON)'
                    },
                    {
                        opcode: 'refreshBlocks',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Refresh blocks'
                    },
                    {
                        opcode: 'isValidExtensionURL',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'Is the URL [EXTURL] a valid extension URL?',
                        arguments: {
                            EXTURL: { type: Scratch.ArgumentType.STRING, defaultValue: 'https://example.com/myext.js' }
                        }
                    }
                ]
            };
        }

        isLoaded(args) {
            return m.isExtensionLoaded(args.EXTID);
        }

        loadById(args) {
            try {
                m.loadExtensionIdSync(args.EXTID);
            } catch (e) {
                console.warn('Loading extension failed:', e);
            }
        }

        loadByURL(args) {
            try {
                m.loadExtensionURL(args.EXTURL);
            } catch (e) {
                console.warn('Loading extension URL failed:', e);
            }
        }

        removeExtension(args) {
            try {
                m.removeExtension(args.EXTID);
            } catch (e) {
                console.warn('Removing extension failed:', e);
            }
        }

        listLoaded() {
            return JSON.stringify(Array.from(m._loadedExtensions.keys()));
        }

        getExtensionURLFromId(args) {
            return m.extensionUrlFromId(args.EXTID) || '';
        }

        getAllExtensionURLs() {
            return JSON.stringify(m.getExtensionURLs());
        }

        refreshBlocks() {
            m.refreshBlocks();
        }

        isValidExtensionURL(args) {
            return m._isValidExtensionURL(args.EXTURL);
        }
    }

    Scratch.extensions.register(new ExtensionManagerTools());
})(Scratch);