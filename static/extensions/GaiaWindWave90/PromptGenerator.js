//Shout-out to soiz1, edited by GaiaWindWave90
class PromptGeneratorExtension {
  constructor() {
    this.baseUrl = 'https://soiz1-stable-diffusion-prompt-generator.hf.space/';
    this.params = {
      text: '',
      max_length: 80,
      min_length: 0,
      temperature: 1.0,
      top_k: 50,
      top_p: 0.95,
      repetition_penalty: 1.0,
      do_sample: true
    };
  }

  getInfo() {
    return {
      id: 'promptGenerator',
      name: 'Prompt Generation',
	  color1: '#8B71EC', // main block color
      color2: '#341D8C', // border color
      color3: '#BAADEC', // highlight color
      blocks: [
        {
          opcode: 'generatePrompt',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Generate Prompt',
        },
        {
          opcode: 'setText',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set to the default prompt[VALUE]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'setMaxLength',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set max length to [VALUE]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 80
            }
          }
        },
        {
          opcode: 'setMinLength',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set min length to [VALUE]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'setTemperature',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set temperature to [VALUE] (0.0～2.0)',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1.0
            }
          }
        },
        {
          opcode: 'setTopK',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set top_k to [VALUE] (Number of Candidates)',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'setTopP',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set top_p to [VALUE] (0.0～1.0)',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.95
            }
          }
        },
        {
          opcode: 'setRepetitionPenalty',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set repetition penalty to [VALUE] (>=1.0)',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1.0
            }
          }
        },
        {
          opcode: 'setDoSample',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set sample to [VALUE] (true/false)',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        }
      ]
    };
  }

async generatePrompt() {
  const queryParams = new URLSearchParams({
    text: this.params.text,
    max_length: this.params.max_length,
    min_length: this.params.min_length,
    temperature: this.params.temperature,
    top_k: this.params.top_k,
    top_p: this.params.top_p,
    repetition_penalty: this.params.repetition_penalty,
    do_sample: this.params.do_sample.toString()
  });

  const url = `${this.baseUrl}?${queryParams.toString()}`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    // json If it is an array, return the first element.
    if (Array.isArray(json) && json.length > 0) {
      return json[0];
    }
    return '(Failed to retrieve prompt)';
  } catch (e) {
    return `(Error: ${e.message})`;
  }
}


  setText(args) {
    this.params.text = args.VALUE;
  }

  setMaxLength(args) {
    this.params.max_length = parseInt(args.VALUE);
  }

  setMinLength(args) {
    this.params.min_length = parseInt(args.VALUE);
  }

  setTemperature(args) {
    this.params.temperature = parseFloat(args.VALUE);
  }

  setTopK(args) {
    this.params.top_k = parseInt(args.VALUE);
  }

  setTopP(args) {
    this.params.top_p = parseFloat(args.VALUE);
  }

  setRepetitionPenalty(args) {
    this.params.repetition_penalty = parseFloat(args.VALUE);
  }

  setDoSample(args) {
    const val = args.VALUE.toString().toLowerCase();
    this.params.do_sample = ['true', '1', 'yes'].includes(val);
  }
}

Scratch.extensions.register(new PromptGeneratorExtension());