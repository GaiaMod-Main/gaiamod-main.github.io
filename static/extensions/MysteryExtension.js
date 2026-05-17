class MysteryExtension {
    constructor() {}

    getInfo() {
        return {
            id: "unknown",
            name: "???",
            color1: "#550000",
            color2: "#330000",
            blocks: [
                {
                    opcode: "BOO",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "BOO with image url [URL] for [TIME] seconds",
                    arguments: {
                        URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://example.com/jumpscare.png" },
                        TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
                    }
                },
                {
                    opcode: "spawnEntity",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "spawn entity with image url [URL] for [TIME] seconds",
                    arguments: {
                        URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://example.com/entity.png" },
                        TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
                    }
                },
                {
                    opcode: "earthquake",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "earthquake for [TIME] seconds",
                    arguments: { TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } }
                },
                {
                    opcode: "distortionMode",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "EPILEPSY for [TIME] seconds",
                    arguments: { TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 } }
                },
                {
                    opcode: "screenDownfall",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "SCREEN DOWNFALL for [TIME] seconds",
                    arguments: { TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 } }
                },
                {
                    opcode: "drift",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "drift for [TIME] seconds",
                    arguments: { TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 } }
                },
                {
                    opcode: "setTitle",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set title as [TEXT]",
                    arguments: { TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "New Title" } }
                },
                {
                    opcode: "setContrast",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set contrast to [NUMBER]",
                    arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1.5 } }
                },
                {
                    opcode: "showNotification",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "show notification [TEXT] for [TIME] seconds",
                    arguments: {
                        TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "Hello." },
                        TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
                    }
                },
                {
                    opcode: "fogOverlay",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "fog overlay for [TIME] seconds",
                    arguments: { TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 } }
                }
            ]
        };
    }

    BOO(args) {
        const doc = window.top.document;
        const container = doc.createElement("div");
        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.zIndex = "999999";
        container.style.background = "black";
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.pointerEvents = "none";

        const img = doc.createElement("img");
        img.src = args.URL;
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";

        container.appendChild(img);
        doc.body.appendChild(container);

        this._shake(args.TIME, 20);
        setTimeout(() => container.remove(), args.TIME * 1000);
    }

    spawnEntity(args) {
        const doc = window.top.document;
        const body = doc.body;

        const entity = doc.createElement("img");
        entity.src = args.URL;
        entity.style.position = "fixed";
        entity.style.width = "120px";
        entity.style.pointerEvents = "auto";
        entity.style.zIndex = "999998";

        const vw = window.top.innerWidth;
        const vh = window.top.innerHeight;
        entity.style.left = Math.random() * (vw - 120) + "px";
        entity.style.top = Math.random() * (vh - 120) + "px";

        const shakeInterval = setInterval(() => {
            if (!entity.isConnected) return clearInterval(shakeInterval);
            const dx = (Math.random() - 0.5) * 6;
            const dy = (Math.random() - 0.5) * 6;
            const rot = (Math.random() - 0.5) * 4;
            entity.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
        }, 60);

        entity.onclick = () => {
            for (let i = 0; i < 1 + Math.floor(Math.random() * 3); i++) {
                const clone = entity.cloneNode(true);
                const vw2 = window.top.innerWidth;
                const vh2 = window.top.innerHeight;
                clone.style.left = Math.random() * (vw2 - 120) + "px";
                clone.style.top = Math.random() * (vh2 - 120) + "px";

                let cloneInterval = setInterval(() => {
                    if (!clone.isConnected) return clearInterval(cloneInterval);
                    const dx = (Math.random() - 0.5) * 6;
                    const dy = (Math.random() - 0.5) * 6;
                    const rot = (Math.random() - 0.5) * 4;
                    clone.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
                }, 60);

                body.appendChild(clone);
                setTimeout(() => {
                    clone.remove();
                    clearInterval(cloneInterval);
                }, args.TIME * 1000);
            }
        };

        body.appendChild(entity);

        const teleport = () => {
            if (!entity.isConnected) return;
            const vw2 = window.top.innerWidth;
            const vh2 = window.top.innerHeight;
            entity.style.left = Math.random() * (vw2 - 120) + "px";
            entity.style.top = Math.random() * (vh2 - 120) + "px";
            setTimeout(teleport, 400 + Math.random() * 1200);
        };
        teleport();

        setTimeout(() => {
            entity.remove();
            clearInterval(shakeInterval);
        }, args.TIME * 1000);
    }

    earthquake(args) {
        this._shake(args.TIME, 15);
    }

    distortionMode(args) {
        const body = window.top.document.body;
        const originalTransform = body.style.transform;
        const originalFilter = body.style.filter;

        let t = 0;
        const interval = setInterval(() => {
            const driftX = Math.sin(t * 4) * 25;
            const driftY = Math.cos(t * 3) * 20;
            const shakeX = (Math.random() - 0.5) * 10;
            const shakeY = (Math.random() - 0.5) * 10;
            const rot = (Math.random() - 0.5) * 4;

            body.style.transform = `translate(${driftX + shakeX}px, ${driftY + shakeY}px) rotate(${rot}deg)`;

            const brightness = 0.6 + Math.random() * 0.8;
            const contrast = 0.8 + Math.random() * 1.4;
            const hue = Math.random() * 360;
            const saturate = 0.7 + Math.random() * 2.0;
            const invert = Math.random() < 0.2 ? 1 : 0;

            body.style.filter =
                `brightness(${brightness}) ` +
                `contrast(${contrast}) ` +
                `hue-rotate(${hue}deg) ` +
                `saturate(${saturate}) ` +
                `invert(${invert})`;

            t += 0.06;
            if (t >= args.TIME) {
                clearInterval(interval);
                body.style.transform = originalTransform;
                body.style.filter = originalFilter;
            }
        }, 60);
    }

    screenDownfall(args) {
        const body = window.top.document.body;
        const original = body.style.transform;

        let t = 0;
        const interval = setInterval(() => {
            const stretch = 1 + Math.random() * 0.3;
            const skew = (Math.random() - 0.5) * 10;
            body.style.transform = `scaleY(${stretch}) skewY(${skew}deg)`;

            t += 0.06;
            if (t >= args.TIME) {
                clearInterval(interval);
                body.style.transform = original;
            }
        }, 60);
    }

    drift(args) {
        const body = window.top.document.body;
        const original = body.style.transform;

        let t = 0;
        const interval = setInterval(() => {
            const x = Math.sin(t * 2) * 20;
            const y = Math.cos(t * 1.5) * 15;
            const rot = Math.sin(t * 1.2) * 3;
            body.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;

            t += 0.06;
            if (t >= args.TIME) {
                clearInterval(interval);
                body.style.transform = original;
            }
        }, 60);
    }

    setTitle(args) {
        window.top.document.title = args.TEXT;
    }

    setContrast(args) {
        window.top.document.body.style.filter = `contrast(${args.NUMBER})`;
    }

    showNotification(args) {
        const doc = window.top.document;

        const box = doc.createElement("div");
        box.style.position = "fixed";
        box.style.bottom = "20px";
        box.style.right = "20px";
        box.style.padding = "12px 18px";
        box.style.background = "rgba(30,30,30,0.9)";
        box.style.color = "white";
        box.style.fontSize = "14px";
        box.style.fontFamily = "sans-serif";
        box.style.borderRadius = "6px";
        box.style.zIndex = "999999";
        box.textContent = args.TEXT;

        doc.body.appendChild(box);
        setTimeout(() => box.remove(), args.TIME * 1000);
    }

    fogOverlay(args) {
        const doc = window.top.document;

        const fog = doc.createElement("div");
        fog.style.position = "fixed";
        fog.style.top = "0";
        fog.style.left = "0";
        fog.style.width = "100vw";
        fog.style.height = "100vh";
        fog.style.background = "rgba(200,200,200,0.18)";
        fog.style.backdropFilter = "blur(3px)";
        fog.style.zIndex = "999995";
        fog.style.pointerEvents = "none";

        doc.body.appendChild(fog);
        setTimeout(() => fog.remove(), args.TIME * 1000);
    }

    _shake(time, intensity) {
        const body = window.top.document.body;
        const original = body.style.transform;

        let t = 0;
        const interval = setInterval(() => {
            const x = (Math.random() - 0.5) * intensity;
            const y = (Math.random() - 0.5) * intensity;
            body.style.transform = `translate(${x}px, ${y}px)`;

            t += 0.06;
            if (t >= time) {
                clearInterval(interval);
                body.style.transform = original;
            }
        }, 60);
    }
}

Scratch.extensions.register(new MysteryExtension());