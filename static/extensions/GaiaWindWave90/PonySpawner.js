(function (Scratch) {
	"use strict";
	
	const pony = "https://raw.githubusercontent.com/GaiaMod-Main/Browser-Ponies/refs/heads/gh-pages/favicon.ico";
    
	class PonySpawner {
	  getInfo() {
		return {
		  id: "ponyspawn",
		  name: "Pony Spawner",
		  color1: "#FF7DCD",
		  menuIconURI: pony,
          blockIconURI: pony,
		  blocks: [
			{
           opcode: 'spawnPonies',
           blockType: Scratch.BlockType.COMMAND,
           text: 'spawn ponies',
         },
		 {
           opcode: 'spawnPoniesEdit',
           blockType: Scratch.BlockType.COMMAND,
           text: 'spawn [NUM] ponies: speak probility [PROB] fade duration [FADE] volume [VOL] fps [FPS] speed [SPEED] audio [AUDIO] show FPS [SHOWFPS] load progress [PROG]',
		   arguments: {
			  NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
			  PROB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0.05,
              },
			  FADE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 500,
              },
			  VOL: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
			  FPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 25,
              },
			  SPEED: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3,
              },
			  AUDIO: {
                type: Scratch.ArgumentType.STRING,
                menu: "onOffAudio",
              },
			  SHOWFPS: {
                type: Scratch.ArgumentType.STRING,
                menu: "onOffFPS",
              },
			  PROG: {
                type: Scratch.ArgumentType.STRING,
                menu: "onOffProg",
              },
		   }
         },
		 {
           opcode: 'erasePonies',
           blockType: Scratch.BlockType.COMMAND,
           text: 'erase ponies',
         },
		 {
           opcode: 'startPonies',
           blockType: Scratch.BlockType.COMMAND,
           text: 'replay ponies',
         },
		 {
           opcode: 'pausePonies',
           blockType: Scratch.BlockType.COMMAND,
           text: 'pause ponies',
         },
		 {
           opcode: 'resumePonies',
           blockType: Scratch.BlockType.COMMAND,
           text: 'resume ponies',
         },
	     {
           opcode: 'stopPonies',
           blockType: Scratch.BlockType.COMMAND,
           text: 'stop ponies',
         },
		],
		   menus: {
		  onOffAudio: {
            acceptReporters: true,
            items: ["true", "false"],
           },
			
			onOffFPS: {
            acceptReporters: true,
            items: ["true", "false"],
           },
			
			onOffProg: {
            acceptReporters: true,
            items: ["true", "false"],
            },
           },
		};
	  }
  
	  spawnPonies (args) {
     	(function (srcs,cfg) { var cbcount = 1; var callback = function () { -- cbcount; if (cbcount === 0) { BrowserPonies.setBaseUrl(cfg.baseurl); if (!BrowserPoniesBaseConfig.loaded) { BrowserPonies.loadConfig(BrowserPoniesBaseConfig); BrowserPoniesBaseConfig.loaded = true; } BrowserPonies.loadConfig(cfg); if (!BrowserPonies.running()) BrowserPonies.start(); } }; if (typeof(BrowserPoniesConfig) === "undefined") { window.BrowserPoniesConfig = {}; } if (typeof(BrowserPoniesBaseConfig) === "undefined") { ++ cbcount; BrowserPoniesConfig.onbasecfg = callback; } if (typeof(BrowserPonies) === "undefined") { ++ cbcount; BrowserPoniesConfig.oninit = callback; } var node = (document.body || document.documentElement || document.getElementsByTagName('head')[0]); for (var id in srcs) { if (document.getElementById(id)) continue; if (node) { var s = document.createElement('script'); s.type = 'text/javascript'; s.id = id; s.src = srcs[id]; node.appendChild(s); } else { document.write('\u003cscript type="text/javscript" src="'+ srcs[id]+'" id="'+id+'"\u003e\u003c/script\u003e'); } } callback();})({"browser-ponies-script":"https://panzi.github.io/Browser-Ponies/browserponies.js","browser-ponies-config":"https://panzi.github.io/Browser-Ponies/basecfg.js"},{"baseurl":"https://panzi.github.io/Browser-Ponies/","fadeDuration":500,"volume":1,"fps":60,"speed":3,"audioEnabled":false,"showFps":false,"showLoadProgress":false,"speakProbability":0.00,"spawn":{"princess twilight sparkle":1,"spike":1,"rarity":1,"rainbow dash":1,"pinkie pie":1,"fluttershy":1,"applejack":1}});void(0)
    }

      spawnPoniesEdit ( {NUM, FADE, VOL, FPS, SPEED, AUDIO, SHOWFPS, PROG, PROB} ) {
     	(function (srcs,cfg) { var cbcount = 1; var callback = function () { -- cbcount; if (cbcount === 0) { BrowserPonies.setBaseUrl(cfg.baseurl); if (!BrowserPoniesBaseConfig.loaded) { BrowserPonies.loadConfig(BrowserPoniesBaseConfig); BrowserPoniesBaseConfig.loaded = true; } BrowserPonies.loadConfig(cfg); if (!BrowserPonies.running()) BrowserPonies.start(); } }; if (typeof(BrowserPoniesConfig) === "undefined") { window.BrowserPoniesConfig = {}; } if (typeof(BrowserPoniesBaseConfig) === "undefined") { ++ cbcount; BrowserPoniesConfig.onbasecfg = callback; } if (typeof(BrowserPonies) === "undefined") { ++ cbcount; BrowserPoniesConfig.oninit = callback; } var node = (document.body || document.documentElement || document.getElementsByTagName('head')[0]); for (var id in srcs) { if (document.getElementById(id)) continue; if (node) { var s = document.createElement('script'); s.type = 'text/javascript'; s.id = id; s.src = srcs[id]; node.appendChild(s); } else { document.write('\u003cscript type="text/javscript" src="'+ srcs[id]+'" id="'+id+'"\u003e\u003c/script\u003e'); } } callback();})({"browser-ponies-script":"https://panzi.github.io/Browser-Ponies/browserponies.js","browser-ponies-config":"https://panzi.github.io/Browser-Ponies/basecfg.js"},{"baseurl":"https://panzi.github.io/Browser-Ponies/","fadeDuration":(FADE),"volume":(VOL),"fps":(FPS),"speed":(SPEED),"audioEnabled":(AUDIO),"showFps":(SHOWFPS),"showLoadProgress":(PROG),"speakProbability":(PROB),"spawn":{"princess twilight sparkle":(NUM),"spike":(NUM),"rarity":(NUM),"rainbow dash":(NUM),"pinkie pie":(NUM),"fluttershy":(NUM),"applejack":(NUM)}});void(0)
    }

     erasePonies (args) {
     	BrowserPonies.unspawnAll();BrowserPonies.stop();void(0)
    }
	
	stopPonies (args) {
        BrowserPonies.stop();void(0)
    }
	
	startPonies (args) {
        BrowserPonies.start();void(0)
    }
	
	pausePonies (args) {
        BrowserPonies.pause();void(0)
    }
	
	resumePonies (args) {
        BrowserPonies.resume();void(0)
    }

	}
	
	Scratch.extensions.register(new PonySpawner());
  })(Scratch);
  