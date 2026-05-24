(function(Scratch) {
    const variables = {};
    let vm = Scratch.vm

    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This extension must run unsandboxed');
    }
	
const renderer = Scratch.vm.runtime.renderer;
const runtime = Scratch.vm.runtime;


class GaiaRuntime {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
		  id: "gaiaruntime",
		  name: "Runtime Tools",
		  color1: "#968eba",
      blocks: [
          {
            opcode: 'loadExtension',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Load an extension from [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/utilities.js",
              },
            },
          },
          {
            opcode: 'removeUnusedExtensions',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Remove all unused extensions',
          },
          {
            opcode: 'refreshBlocks',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Refresh blocks',
          },
          "---",
          {
            opcode: 'setTurboMode',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set Turbo Mode to [ENABLED]',
            arguments: {
              ENABLED: {
                type: Scratch.ArgumentType.STRING,
                menu: 'ENABLED_MENU'
              },
            },
          },
          {
            opcode: 'restartProject',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Restart a project',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
            },
          },
          {
            opcode: 'enableDebug',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Enable debug mode',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
            },
          },
		   "---",
          {
            opcode: "getFramerate",
            text: Scratch.translate("framerate limit"),
            blockType: Scratch.BlockType.REPORTER,
          },
          {
            opcode: "setFramerate",
            text: Scratch.translate("set framerate limit to [fps]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              fps: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "30",
              },
            },
          },
          "---",
          {
            opcode: 'setStageSize',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set stage width: [WIDTH] height: [HEIGHT]',
            arguments: {
              WIDTH: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "640"
               },
              HEIGHT: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "360"
               },
            },
          },
         {
        opcode: 'widescreen',
        blockType: Scratch.BlockType.COMMAND,
        text: 'Widescreen',
        },
         {
        opcode: 'normal',
        blockType: Scratch.BlockType.COMMAND,
        text: 'Standard screen',
        },
         {
        opcode: 'widehd',
        blockType: Scratch.BlockType.COMMAND,
        text: 'Widescreen HD',
        },
         {
        opcode: 'normalhd',
        blockType: Scratch.BlockType.COMMAND,
        text: 'Standard HD',
        },
          "---",
		  {
            opcode: "renderscale",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "set canvas render size to width: [X] height: [Y]"
            ),
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "640",
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },
          "---",
		  {
         opcode: 'setBackgroundColor',
         text: 'set stage background color to [COLOR]',
         blockType: Scratch.BlockType.COMMAND,
         arguments: {
         COLOR: {
         type: Scratch.ArgumentType.COLOR,
                defaultValue: "#855CD6",
           }
          }
         },
		/////lols
      ],
        menus: {
          ENABLED_MENU: {
            acceptReporters: true,
            items: ['on', 'off']
          }
        }
    };
  }

  
    restartProject() {
      vm.greenFlag();
    }
    enableDebug() {
      vm.enableDebug();
    }
    async loadExtension({ TEXT }) {
      if (await vm.securityManager.canLoadExtensionFromProject(TEXT)) {
        vm.extensionManager.loadExtensionURL(TEXT);
      }
    }
    async removeUnusedExtensions() {
      vm.extensionManager.removeUnusedExtensions();
    }
	refreshBlocks() {
            vm.extensionManager.refreshBlocks();
        }
	setTurboMode(args) {
      vm.setTurboMode(args.ENABLED === 'on');
    }
	getFramerate() {
      return Scratch.vm.runtime.frameLoop.framerate;
    }

    setFramerate({ fps }) {
      fps = Scratch.Cast.toNumber(fps);
      Scratch.vm.setFramerate(fps);
    }
	setStageSize(args) {
        if (vm) vm.setStageSize(
            Math.max(1, Scratch.Cast.toNumber(args.WIDTH)), Math.max(1, Scratch.Cast.toNumber(args.HEIGHT))
        );
    }
widescreen() {
        let width = 640;
        let height = 360;
        if (width <= 0) width = 1;
        if (height <= 0) height = 1;
        if (vm) vm.setStageSize(width, height);
    }
    normal() {
        let width = 480;
        let height = 360;
        if (width <= 0) width = 1;
        if (height <= 0) height = 1;
        if (vm) vm.setStageSize(width, height);
    }
  widehd() {
        let width = 1280;
        let height = 720;
        if (width <= 0) width = 1;
        if (height <= 0) height = 1;
        if (vm) vm.setStageSize(width, height);
    }
  normalhd() {
        let width = 960;
        let height = 720;
        if (width <= 0) width = 1;
        if (height <= 0) height = 1;
        if (vm) vm.setStageSize(width, height);
    }
    renderscale({ X, Y }) {
      // The function normally expects a stage size and therefore scales by DPI.
      // However, this block is meant for a fixed pixel size
      // (usually used in conjunction with the pixelated resize rendering mode).
      // Therefore, scale it back according to the devicePixelRatio.
      const pixelRatio = window.devicePixelRatio || 1;
      Scratch.vm.renderer.resize(X / pixelRatio, Y / pixelRatio);
    }
setBackgroundColor(args) {
        let RGB;
        if (typeof args.COLOR === "number") {
            RGB = Scratch.Cast.toRgbColorObject(args.COLOR);
            this.runtime.renderer.setBackgroundColor(RGB.r / 255, RGB.g / 255, RGB.b / 255);
        } else {
            RGB = Scratch.Cast.toString(args.COLOR);
            RGB = RGB.startsWith("#") ? RGB.slice(1) : RGB;
            this.runtime.renderer.setBackgroundColor(
                parseInt(RGB.slice(0, 2), 16) / 255,
                parseInt(RGB.slice(2, 4), 16) / 255,
                parseInt(RGB.slice(4, 6), 16) / 255,
                RGB.length === 8 ? parseInt(RGB.slice(6, 8), 16) / 255 : 1
            )
        }
    }
}
    Scratch.extensions.register(new GaiaRuntime(Scratch.vm.runtime));
})(Scratch);