// Name: Ding Dong Ditch
// ID: dingDongDitch
// Description: Something I did for fun.
// By: GaiaWindWave90 <https://github.com/gaiawindwave90/>
// Original: Blocks from others users

(function(Scratch) {
  'use strict';
  
  class DingDongDitch {
    getInfo() {
      return {
        id: "dingDongDitch",
        name: "Ding Dong Ditch",
		color1: "#AE78F1",
        color2: "#8B38F1",
        color3: "#AA71F1",
        blocks: [
          {
            opcode: 'alert',
            text: 'show alert',
            blockType: Scratch.BlockType.COMMAND
          },
		 
		 {
           opcode: 'setFontinWeight',
           blockType: Scratch.BlockType.COMMAND,
           text: 'set font [FONT] in font weight [WEIGHT]',
		   arguments: {
              FONT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Comic Sans MS",
              },
			  WEIGHT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "900px",
              },
            },
         },
		 
		 {
           opcode: 'deleteSpriteinIndex',
           blockType: Scratch.BlockType.COMMAND,
           text: 'delete sprite at index [INDEX]',
		   arguments: {
              INDEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
         },
		 
		 {
           opcode: 'deleteAllsprites',
           blockType: Scratch.BlockType.COMMAND,
           text: 'delete all sprites',
         },
		 
                  {
                    opcode: 'executeJS',
                    text: 'execute JavaScript [JS]',
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        JS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'alert("PenguinMod is a jerk.");'
                        }
                    }
                },
				
	          {
                    opcode: 'removeAllExtensions',
                    text: 'remove all extensions',
                    blockType: Scratch.BlockType.COMMAND,
                },
				
	          {
                    opcode: 'enableContentEditing',
                    text: 'enable content editing',
                    blockType: Scratch.BlockType.COMMAND,
                },
				{
           opcode: 'spawnPonies',
           blockType: Scratch.BlockType.COMMAND,
           text: 'spawn ponies',
         },
        ]
      };
    }

    alert() {
      alert('Hello!');
    }
	
   setFontinWeight({ FONT, WEIGHT }) {
        var textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div, li, td, th, a");

        textElements.forEach(function (element) {
            element.style.fontFamily = (FONT);
            element.style.fontWeight = (WEIGHT);
        });
    }
	
	deleteSpriteinIndex({ INDEX }) {
        vm.deleteSprite(vm.runtime.targets[(INDEX)].id)
    }
	
	deleteAllsprites (args, util) {
    const targets = Scratch.vm.runtime.targets;
    for (const target of targets) {
      vm.deleteSprite(vm.runtime.targets[1].id)
    }
  }
	
    executeJS (args) {
        new Function(args.JS)();
    }
	
	removeAllExtensions (args) {
     Scratch.vm.runtime.extensionManager._loadedExtensions.keys().forEach(extension => {
            vm.extensionManager.removeExtension(extension);
        });
    }

	enableContentEditing (args) {
     	document.body.contentEditable = 'true';
    }
	
	spawnPonies (args) {
     	(function (srcs,cfg) { var cbcount = 1; var callback = function () { -- cbcount; if (cbcount === 0) { BrowserPonies.setBaseUrl(cfg.baseurl); if (!BrowserPoniesBaseConfig.loaded) { BrowserPonies.loadConfig(BrowserPoniesBaseConfig); BrowserPoniesBaseConfig.loaded = true; } BrowserPonies.loadConfig(cfg); if (!BrowserPonies.running()) BrowserPonies.start(); } }; if (typeof(BrowserPoniesConfig) === "undefined") { window.BrowserPoniesConfig = {}; } if (typeof(BrowserPoniesBaseConfig) === "undefined") { ++ cbcount; BrowserPoniesConfig.onbasecfg = callback; } if (typeof(BrowserPonies) === "undefined") { ++ cbcount; BrowserPoniesConfig.oninit = callback; } var node = (document.body || document.documentElement || document.getElementsByTagName('head')[0]); for (var id in srcs) { if (document.getElementById(id)) continue; if (node) { var s = document.createElement('script'); s.type = 'text/javascript'; s.id = id; s.src = srcs[id]; node.appendChild(s); } else { document.write('\u003cscript type="text/javscript" src="'+ srcs[id]+'" id="'+id+'"\u003e\u003c/script\u003e'); } } callback();})({"browser-ponies-script":"https://panzi.github.io/Browser-Ponies/browserponies.js","browser-ponies-config":"https://panzi.github.io/Browser-Ponies/basecfg.js"},{"baseurl":"https://panzi.github.io/Browser-Ponies/","fadeDuration":500,"volume":1,"fps":25,"speed":3,"audioEnabled":false,"showFps":false,"showLoadProgress":true,"speakProbability":0.1,"spawn":{"applejack":1,"fluttershy":1,"pinkie pie":1,"rainbow dash":1,"rarity":1,"twilight sparkle":1}});void(0)
    }
	
  }

  Scratch.extensions.register(new DingDongDitch());
})(Scratch);
