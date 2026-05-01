(function (Scratch) {
    "use strict";
class GaiaModDetector {
    getInfo() {
      return {
        id: 'gaiaModDetector',
        name: 'Gaia Mod Detector',
        blocks: [
          {
            opcode: 'isGaiaMod',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is GaiaMod?'
          }
        ]
      };
    }
  
    isGaiaMod() {
      this.isem = Scratch.extensions.isGaiaMod
    ? "true"  : "false";
  return this.isem
  
    }
  }
  
  Scratch.extensions.register(new GaiaModDetector());
})(Scratch);