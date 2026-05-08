class BananaBlock {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'sayRandomWord',
      name: 'Say a random word',
      color1: "#6EAAC9",
        color2: "#2E84B0",
        color3: "#005C91",
      blocks: [
        {
          opcode: 'sayName',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Say [TEXT]',
          arguments: {
            TEXT: { type: Scratch.ArgumentType.STRING }
          }
        },
      ],
    };
  }
  
  sayName({ TEXT }) {
    return TEXT;
  }
}

Scratch.extensions.register(new BananaBlock());
