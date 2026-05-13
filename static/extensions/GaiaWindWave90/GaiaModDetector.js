(function (Scratch) {
    "use strict";
class GaiaModDetector {
    getInfo() {
      return {
        id: 'gaiaModDetector',
        name: 'GaiaMod Detector',
        color1: '#2D2DD2',
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