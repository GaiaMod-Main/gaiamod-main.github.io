(function (Scratch) {
    "use strict";
class PenguinModDetector {
    getInfo() {
      return {
        id: 'penguinModDetector',
        name: 'PenguinMod Detector',
		color1: '#00c3ff',
        blocks: [
          {
            opcode: 'isPenguinMod',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is PenguinMod?'
          }
        ]
      };
    }
  
    isPenguinMod() {
      this.isem = Scratch.extensions.isPenguinMod
    ? "true"  : "false";
  return this.isem
  
    }
  }
  
  Scratch.extensions.register(new PenguinModDetector());
})(Scratch);