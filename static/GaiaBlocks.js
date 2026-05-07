(function(Scratch) {
    const variables = {};
    let vm = Scratch.vm

    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This extension must run unsandboxed');
    }

    let CloseTabDisabled = true;

    window.addEventListener("beforeunload", (e) => {
      if (CloseTabDisabled) {
        e.preventDefault();
      }
    });
	
const renderer = Scratch.vm.runtime.renderer;


class GaiaBlocks {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'gaiaBlocks',
      name: 'Gaia Blocks',
	  color1: "#007BFF",
menuIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMTcuMjA4NDYiIGhlaWdodD0iMjA4LjI3MTEzIiB2aWV3Qm94PSIwLDAsMjE3LjIwODQ2LDIwOC4yNzExMyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMS4zOTU3NywtNzMuNjQ1MDkpIj48ZyBmaWxsPSIjMDBhMWZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTMxOS45OTk5OSw5Ni42Mzg5OGwyMS41MDkyLDYyLjMzNzUzbDY1LjQ5NzM0LDEuMzQ0NjJsLTUyLjIwMzkzLDM5Ljg3MTMzbDE4Ljk3MDM5LDYzLjE2ODU1bC01My43NzMsLTM3LjY5NTdsLTUzLjc3MywzNy42OTU3bDE4Ljk3MDM5LC02My4xNjg1NWwtNTIuMjAzOTMsLTM5Ljg3MTMzbDY1LjQ5NzM0LC0xLjM0NDYyeiIvPjwvZz48L2c+PC9zdmc+",
blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMTcuMjA4NDYiIGhlaWdodD0iMjA4LjI3MTEzIiB2aWV3Qm94PSIwLDAsMjE3LjIwODQ2LDIwOC4yNzExMyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMS4zOTU3NywtNzMuNjQ1MDkpIj48ZyBmaWxsPSIjMDBhMWZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTMxOS45OTk5OSw5Ni42Mzg5OGwyMS41MDkyLDYyLjMzNzUzbDY1LjQ5NzM0LDEuMzQ0NjJsLTUyLjIwMzkzLDM5Ljg3MTMzbDE4Ljk3MDM5LDYzLjE2ODU1bC01My43NzMsLTM3LjY5NTdsLTUzLjc3MywzNy42OTU3bDE4Ljk3MDM5LC02My4xNjg1NWwtNTIuMjAzOTMsLTM5Ljg3MTMzbDY1LjQ5NzM0LC0xLjM0NDYyeiIvPjwvZz48L2c+PC9zdmc+",
      blocks: [
        {
          opcode: 'currentDate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current date',
          disableMonitor: true,
        },
        {
          opcode: 'isOnline',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Online?',
          disableMonitor: true,
        },
        {
          opcode: 'cookiesEnabled',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Cookies enabled?',
          disableMonitor: true,
        },
        {
          opcode: 'hostname',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hostname',
          disableMonitor: true,
        },
        {
          opcode: 'isWindowClosed',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is window closed?',
          disableMonitor: true,
        },
		{
            opcode: 'closeTabDisabled',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'closing tab enabled without asking?',
            disableMonitor: true,
        },
          {
            opcode: 'isPenguinMod',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is a PenguinMod fork?'
          },
          {
            opcode: 'loadExtension',
            blockType: Scratch.BlockType.COMMAND,
            text: 'load an extension from [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/utilities.js",
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
		{
          opcode: 'sayName',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Say [TEXT]',
          arguments: {
            TEXT: { type: Scratch.ArgumentType.STRING }
          }
        },
		{
            opcode: "snapshotStage",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("snapshot stage"),
            disableMonitor: true,
          },
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
    };
  }

  currentDate() {
   // Get the current date
        const today = new Date();

        // Define an array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        // Get the month name (using getMonth() which returns 0-11)
        const month = monthNames[today.getMonth()];

        // Get the day of the month
        const day = today.getDate();
        
      const year = today.getFullYear();

        // Format the date string
        const formattedDate = `${month} ${day}, ${year}`;
	  
            return formattedDate;
  }
  
  isOnline() {
        // Modern Node.js has a navigator object but does .onLine === undefined
        if (typeof navigator === 'object' && typeof navigator.onLine === 'boolean') {
            return navigator.onLine;
        }
        // We're running in some non-browser environment. We probably have internet.
        return true;
    }
  
  cookiesEnabled() {
     return navigator.cookieEnabled;
  }
  hostname() {
     return location.hostname;
  }
  
  isWindowClosed() {
     return window.closed;
  }
   closeTabDisabled() {
            return CloseTabDisabled;
   }
    isPenguinMod() {
      this.isem = Scratch.extensions.isPenguinMod
    ? "true"  : "false";
  return this.isem
  
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
	  sayName({ TEXT }) {
    return TEXT;
  }
snapshotStage(args, util) {
      return new Promise((resolve) => {
        renderer.requestSnapshot((uri) => {
          resolve(uri);
        });
      });
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
    Scratch.extensions.register(new GaiaBlocks(Scratch.vm.runtime));
})(Scratch);
