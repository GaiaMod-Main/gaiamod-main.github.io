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
}
    Scratch.extensions.register(new GaiaBlocks(Scratch.vm.runtime));
})(Scratch);