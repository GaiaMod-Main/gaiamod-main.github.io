(function (Scratch) {
	 const variables = {};
    let vm = Scratch.vm

    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This extension must run unsandboxed');
    }
	
	const renderer = Scratch.vm.runtime.renderer;
    
	class GaiaRuntime {
	  getInfo() {
		return {
		  id: "gaiaruntime",
		  name: "Runtime Tools",
		  color1: "#7A8EBA",
		  blocks: [
			{
			  opcode: "sayHello",
			  blockType: Scratch.BlockType.REPORTER,
			  text: Scratch.translate("Say hello!"),
			},
		  ],
		};
	  }
  
	  sayHello() {
		return 'Hello!';
	  }
	}
    Scratch.extensions.register(new GaiaRuntime(Scratch.vm.runtime));
})(Scratch);
  