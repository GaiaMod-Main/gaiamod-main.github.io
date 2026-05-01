(function (Scratch) {
    'use strict';

    const penguin = "https://library.penguinmod.com/files/images/penguin-styled.svg";
    const bonkAudio = "https://library.penguinmod.com/files/sounds/bonk3.mp3";

    const BlockType = Scratch.BlockType;
    const vm = Scratch.vm;
    const runtime = Scratch.vm.runtime;
    const renderer = Scratch.vm.runtime.renderer;

    class Extension {
        constructor() {
            this.audioNode = runtime.audioEngine.inputNode;
            this.gainNode = this.audioNode.context.createGain();
            this.gainNode.gain.value = 1;
            this.gainNode.connect(this.audioNode);
            runtime.on("PROJECT_STOP_ALL", () => {
                this.clearNodes();
            });

            this.buffer = null;
            this.nodes = [];
            this.initialize();
        }

        async initialize() {
            let buffer = null;
            try {
                buffer = await this.decodeAudioBuffer(bonkAudio);
            } catch (err) {
                return console.warn("Failed to load", err);
            }
            this.buffer = buffer;
        }

        getInfo() {
            return {
                id: "penguinAttack",
                name: "Penguin Attack!",
                menuIconURI: penguin,
                blockIconURI: penguin,
                color1: "#005C99",
                blocks: [
                    {
                        opcode: "penguinAttack",
                        blockType: BlockType.COMMAND,
                        text: "Penguin attack!"
                    }
                ]
            };
        }

        decodeAudioBuffer(url) {
            return new Promise((resolve, reject) => {
                // eslint-disable-next-line
                fetch(url)
                    .then(response => {
                        response.arrayBuffer()
                            .then(arrayBuffer => {
                                runtime.audioEngine.inputNode.context.decodeAudioData(arrayBuffer, (audioBuffer) => {
                                    resolve(audioBuffer);
                                }, reject).catch(reject);
                            })
                            .catch(reject);
                    })
                    .catch(reject);
            });
        }

        penguinAttack() {
            const image = document.createElement("img");
            image.src = penguin;
            image.style.width = "100%";
            image.style.height = "100%";
            image.style.position = "absolute";
            image.style.left = "-50%";
            image.style.top = "-50%";
            renderer.addOverlay(image, "scale-centered");
            this.fadeOutImage(image);

            // dont play sound if
            if (!this.buffer) return;
            if (this.nodes.length >= 3) return;

            const node = this.audioNode.context.createBufferSource();
            node.buffer = this.buffer;
            node.connect(this.gainNode);

            node.onended = () => {
                const idx = this.nodes.indexOf(node);
                if (idx !== -1) {
                    this.nodes.splice(idx, 1);
                }
            };

            this.nodes.push(node);
            node.start(0);
        }

        fadeOutImage(image) {
            let opacity = 1;
            const interval = setInterval(() => {
                image.style.opacity = opacity;
                opacity -= 0.007;
                if (opacity <= 0) {
                    clearInterval(interval);
                    renderer.removeOverlay(image);
                    return;
                }
            }, 10);
        }

        clearNodes() {
            this.nodes.forEach(node => {
                try {
                    node.disconnect(this.gainNode);
                } catch { }
            });
            this.nodes = [];
        }
    }

    Scratch.extensions.register(new Extension());
})(Scratch);