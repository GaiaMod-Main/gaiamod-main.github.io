(function(Scratch) {
  'use strict'

  function mulberry32(seed) {
    return function() {
      seed |= 0
      seed = seed + 0x6D2B79F5 | 0
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed)
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
      return ((t ^ t >>> 14) >>> 0) / 4294967296
    }
  }

  class Mulberry32Random {
    getInfo() {
      return {
        id: 'mulberry32random',
        name: 'Mulberry32 Random 🍇',
        color1: '#a94dc0', // main block color
        color2: '#9449b3', // border color
        color3: '#ba6cda', // highlight color
        blocks: [
          {
            opcode: 'randomFromSeed',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Mulberry32 random with seed [SEED]',
            arguments: {
              SEED: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            }
          }
        ]
      }
    }

    randomFromSeed(args) {
      let seed = Number(args.SEED)
      if (isNaN(seed)) seed = 0
      const rng = mulberry32(seed)
      return rng()
    }
  }

  Scratch.extensions.register(new Mulberry32Random())
})(Scratch)
