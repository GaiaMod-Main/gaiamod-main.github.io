(function(Scratch) {
    const variables = {};
    let vm = Scratch.vm

    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This extension must run unsandboxed');
    }
	
	    const Gemini = {
        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },
    }

    let CloseTabDisabled = true;

    window.addEventListener("beforeunload", (e) => {
      if (CloseTabDisabled) {
        e.preventDefault();
      }
    });
	
const renderer = Scratch.vm.runtime.renderer;
const runtime = Scratch.vm.runtime;
this.mediaRecorder = {};


class GaiaBlocks {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'gaiaBlocks',
      name: 'Gaia Utilities',
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
          opcode: "setAPIKey",
          text: "set API key: [KEY]",
          blockType: "command",
          arguments: {
          KEY: {
          type: "string"
                 }
              }
                },
		{
                    opcode: "askGemini",
                    text: "Ask Gemini: [PROMPT]",
                    blockType: "reporter",
                    arguments: {
                        PROMPT: {
                            type: "string"
                        }
                    }
                },
		{
                    opcode: "set_system_prompt",
                    text: "Set Gemini System Prompt: [PROMPT]",
                    blockType: "command",
                    arguments: {
                        PROMPT: {
                            type: "string",
                            defaultValue: "You are a helpful assistant."
                        }
                    }
                },
                  	{
                    opcode: "return_api_key",
                    text: "returnapikey",
                    blockType: "reporter",
                    arguments: {}
                },
                  	{
                    opcode: "ai_response",
                    text: "latestresponce",
                    blockType: "reporter",
                    arguments: {}
                },
                  {
                    opcode: "block_clear_memory",
                    text: "Clear Gemini Memory",
                    blockType: "command",
                    arguments: {}
                },
      {
        opcode: "copyToClipboard",
        text: "Copy to clipboard: [TEXT]",
        blockType: Scratch.BlockType.COMMAND,
        arguments: {
        TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Welcome to GaiaMod!"
              },
                }
                  },
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
		{
            opcode: "snapshotStage",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("snapshot stage"),
            disableMonitor: true,
          },
		{
            opcode: "snapshotImage",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("snapshot image"),
            disableMonitor: true,
          },
		{
            opcode: "startRecording",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("start recording"),
            disableMonitor: true,
          },
		{
            opcode: "stopRecording",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("stop recording"),
            disableMonitor: true,
          },
		  {
            opcode: "eraseData",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("erase data"),
            disableMonitor: true,
          },
		  {
            opcode: "reload",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("reload"),
            disableMonitor: true,
          },
		  {
                    opcode: 'loadProjectDataUrl',
                    text: 'load project from [URL]',
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        }
                    },
                },
				{
                    opcode: 'getProjectDataUrl',
                    text: 'get data url of project',
                    blockType: Scratch.BlockType.REPORTER,
                    disableMonitor: true
                },
				
		/////lols
      ],
	  menus: {
          ENABLED_MENU: {
            acceptReporters: true,
            items: ['on', 'off']
          }
        }
	/////lols	
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
      this.ispm = Scratch.extensions.isPenguinMod
    ? "true"  : "false";
  return this.ispm  
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
	
    restartProject() {
      vm.greenFlag();
    }
	
    enableDebug() {
      vm.enableDebug();
    }
	
async setAPIKey(args) {
            Gemini.Variables.set("apikey", args["KEY"])
        }
        
        async set_system_prompt(args) {
            Gemini.Variables.set("system_prompt", args.PROMPT);
            Gemini.Variables.set("gemini_history", []);
        }
        
        async askGemini(args) {
            try {
                if (!Gemini.Variables.get("gemini_history")) {
                    Gemini.Variables.set("gemini_history", []);
                }
                
                let history = Gemini.Variables.get("gemini_history");
                
                history.push({
                    role: "user",
                    parts: [{text: args[PROMPT]}]
                });
                
                let requestBody = {
                    contents: history
                };
                
                const systemPrompt = Gemini.Variables.get("system_prompt");
                if (systemPrompt) {
                    requestBody.systemInstruction = {
                        parts: [{text: systemPrompt}]
                    };
                }
                
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${Gemini.Variables.get("apikey")}`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(requestBody)
                });
                
                const data = await response.json();
                
                if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                    const aiResponse = data.candidates[0].content.parts[0].text;
                    
                    history.push({
                        role: "model",
                        parts: [{text: aiResponse}]
                    });
                    
                    Gemini.Variables.set("gemini_history", history);
                    Gemini.Variables.set("latestresponce", aiResponse);
                    
                    return aiResponse;
                } else {
                    console.error("Unexpected response structure:", data);
                    const errorMsg = "Error: " + (data.error?.message || JSON.stringify(data));
                    Gemini.Variables.set("latestresponce", errorMsg);
                    return errorMsg;
                }
            } catch (error) {
                console.error("Fetch error:", error);
                const errorMsg = "Error: " + error.message;
                Gemini.Variables.set("latestresponce", errorMsg);
                return errorMsg;
            }
        }
        
        async return_api_key(args) {
            await new Promise(resolve => setTimeout(() => resolve(), (1) * 1000));
            return Gemini.Variables.get("apikey");
        }
        
        async ai_response(args) {
            return Gemini.Variables.get("latestresponce");
        }
        
        async block_clear_memory(args) {
            Gemini.Variables.set("gemini_history", []);
            console.log("Gemini conversation memory cleared");
        }
	
    async loadExtension({ TEXT }) {
      if (await vm.securityManager.canLoadExtensionFromProject(TEXT)) {
        vm.extensionManager.loadExtensionURL(TEXT);
      }
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
	
	async copyToClipboard(args) {
            try {
                await navigator.clipboard.writeText(args.TEXT);
                console.log("Copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy", err);
            }
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
	
snapshotImage () {
        this.runtime.renderer.draw();

        const image = this.runtime.renderer.canvas.toDataURL('image/png');

        const tmpLink = document.createElement('a');
        tmpLink.download = `image-${Date.now()}.png`;
        tmpLink.href = image;

        document.body.appendChild(tmpLink);
        tmpLink.click();
        document.body.removeChild(tmpLink);
    }
	
startRecording () {
	const canvas = this.runtime.renderer.canvas;
	var video = document.createElement('video');
	var videoStream = canvas.captureStream(30);
	var chunks = [];

	const options = {
	  mimeType: "video/webm; codecs=vp9",
	};

	this.mediaRecorder = new MediaRecorder(videoStream, options);
	
	// Capture audio from the VM's audio engine context
      const audioContext = this.runtime.audioEngine.audioContext;
      const audioDestination = audioContext.createMediaStreamDestination();
      
      // Connect the master gain to the recorder destination
      this.runtime.audioEngine.inputNode.connect(audioDestination);
      
      const audioTrack = audioDestination.stream.getAudioTracks()[0];
      videoStream.addTrack(audioTrack);

	this.mediaRecorder.ondataavailable = function(e) {
	  chunks.push(e.data);
	};

	this.mediaRecorder.onstop = function(e) {
	  var blob = new Blob(chunks, { 'type' : 'video/mp4' });
	  chunks = [];
	  var videoURL = URL.createObjectURL(blob);
	  video.src = videoURL;

	  // Attach the object URL to an <a> element, setting the download file name
	  const a = document.createElement('a');
	  a.style = "display: none;";
	  a.href = videoURL;
	  a.download = "video.webm";
	  document.body.appendChild(a);
	  // Trigger the file download
	  a.click();
	  setTimeout(() => {
	    // Clean up - see https://stackoverflow.com/a/48968694 for why it is in a timeout
	    URL.revokeObjectURL(videoURL);
	    document.body.removeChild(a);
	    document.body.removeChild(video);
	  }, 0);
	};

	this.mediaRecorder.start();
    }
	
 stopRecording () {
	this.mediaRecorder.stop();
    }
	
	eraseData () {
	if (confirm('Warning: This will reset all your local data, including the Restore Points and backpack. Are you sure you want to do this?')) {  
        localStorage.clear();
        indexedDB.deleteDatabase('TW_RestorePoints');
        indexedDB.deleteDatabase('TW_Backpack');
        window.location.reload();
    }
    }
	
	reload () {
	window.location.reload();
    }
	
	loadProjectDataUrl(args) {
        const url = Scratch.Cast.toString(args.URL);
        if (typeof ScratchBlocks !== "undefined") {
            // We are in the editor. Ask before loading a new project to avoid unrecoverable data loss.
            if (!confirm(`Runtime Extension - Editor: Are you sure you want to load a new project?\nEverything in the current project will be permanently deleted.`)) {
                return;
            }
        }
        console.log("Loading project from custom source...");
        fetch(url)
            .then((r) => r.arrayBuffer())
            .then((buffer) => vm.loadProject(buffer))
            .then(() => {
                console.log("Loaded project!");
                vm.greenFlag();
            })
            .catch((error) => {
                console.log("Error loading custom project;", error);
            });
    }
    getProjectDataUrl() {
        return new Promise((resolve) => {
            const failingUrl = 'data:application/octet-stream;base64,';
            vm.saveProjectSb3().then(blob => {
                const fileReader = new FileReader();
                fileReader.onload = () => { resolve(fileReader.result); };
                fileReader.onerror = () => { resolve(failingUrl) }
                fileReader.readAsDataURL(blob);
            }).catch(() => { resolve(failingUrl) });
        });
    }
	
}
    Scratch.extensions.register(new GaiaBlocks(Scratch.vm.runtime));
})(Scratch);
