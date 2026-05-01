(function(Scratch) {
  'use strict';

  class FrictionMovement {
    constructor() {
      this.velocities = {};
      this.frictionValues = {};
    }

    getInfo() {
      return {
        id: 'frictionMoveV2',
        name: 'Move via friction',
        color1: '#4C97FF',
        blocks: [
          {
            opcode: 'setFriction',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Turn friction into [VAL]',
            arguments: {
              VAL: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.9 }
            }
          },
          {
            opcode: 'addImpulse',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Thrust out with momentum [VAL]',
            arguments: {
              VAL: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }
            }
          },
          {
            opcode: 'applyFrictionStep',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Calculate friction and take one step forward.',
          }
        ]
      };
    }

    setFriction(args, util) {
      this.frictionValues[util.target.id] = Scratch.Cast.toNumber(args.VAL);
    }

    addImpulse(args, util) {
      const currentV = this.velocities[util.target.id] || 0;
      this.velocities[util.target.id] = currentV + Scratch.Cast.toNumber(args.VAL);
    }

    applyFrictionStep(args, util) {
      const target = util.target;
      let v = this.velocities[target.id] || 0;
      const f = this.frictionValues[target.id] !== undefined ? this.frictionValues[target.id] : 0.9;

      if (Math.abs(v) > 0.01) {
        // Move in the direction of the sprite (Scratch standard movement logic)
        const radians = (90 - target.direction) * Math.PI / 180;
        const dx = v * Math.cos(radians);
        const dy = v * Math.sin(radians);
        
        target.setXY(target.x + dx, target.y + dy);

        // Apply friction
        v *= f;
        if (Math.abs(v) < 0.1) v = 0;
        this.velocities[target.id] = v;
      }
    }
  }

  Scratch.extensions.register(new FrictionMovement());
})(Scratch);