(function (Scratch) {
	"use strict";
    
	class BaseExt {
	  getInfo() {
		return {
		  id: "gaiabase",
		  name: "Base Extension",
		  color1: "#FF4AD5",
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
	Scratch.extensions.register(new BaseExt());
  })(Scratch);
  