/*
Based on Gen1x's CATS, MrIncredibleMaker's DOGS and pooiod7's Raccoon Facts Extensions
*/
(function(Scratch) {
    const prefix = "SPINACH_"
    const variables = {};

    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This extension must run unsandboxed');
    }


class SpinachExtension {
        constructor() {
            this.wikiSnippet = 
                'Spinach (Spinacia oleracea) is a leafy green flowering plant native to Central and Western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae.';
        }
		
  getInfo() {
    return {
      id: 'ahoySpinach',
      name: 'SPINACH',
	  color1: "#009300",
      blocks: [
        {
          opcode: 'wikiSpinach',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Wiki information on spinach',
          disableMonitor: true,
        },
		{
            opcode: 'isSpinachGreat',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is spinach a great food?',
            disableMonitor: true,
        },
      ],
    };
  }

        async wikiSpinach() {
            const wikipediaApiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/Spinach';
            try {
                const response = await fetch(wikipediaApiUrl);
                const data = await response.json();
                if (data.extract) {
                    return data.extract;
                } else {
                    throw new Error('No Wikipedia extract found.');
                }
            } catch (e) {
                return this.wikiSnippet;
            }
        }
  
  isSpinachGreat() {
     return true;
  }
}
    Scratch.extensions.register(new SpinachExtension());
})(Scratch);
