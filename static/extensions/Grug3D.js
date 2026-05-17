(function(Scratch) {
    'use strict';
    if (!Scratch.extensions.unsandboxed) throw new Error('Grug 3D must run unsandboxed.');

    // âââ Asset URLs ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    const defaultPlayerTexture = "https://i.imgur.com/ccAcwss.png";
    const bootFloorTexture     = "https://i.imgur.com/pjBI1SL.jpeg";
    const defaultSideTexture   = "https://i.imgur.com/zFABqKa.png";
    const defaultTopTexture    = "https://i.imgur.com/I3Su5B5.png";
    const defaultSkyboxUrl     = "https://i.imgur.com/H6k1f9F.jpeg";
    const extensionIcon        = "https://i.imgur.com/BYJdiyh.png";
    // New player/NPC model â update the raw path if the gist filename differs
    const objModelUrl          = 'https://gist.githubusercontent.com/gabrielman25/69636d72abf22fd7926c6a806675262b/raw/b23f42609af0d035dd346c1804689d4094fe91f6/gistfile1.txt';
    const GIST_TEXTURE_LIST    = "https://gist.githubusercontent.com/gabrielman25/499da4a14cdde72703afdb0f734ca02a/raw/61473c287f78e5e1177fe2be8ae07bbfc32b49d8/gistfile1.txt";
    const JUMP_BTN_IMG         = "https://i.imgur.com/REPLACE_ME.png"; // â swap for your icon

    // âââ Physics âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    const GRAVITY_RISE  = 0.017;
    const GRAVITY_FALL  = 0.031;
    const APEX_VEL      = 0.08;
    const APEX_GRAVITY  = 0.006;
    const JUMP_POWER    = 0.28;
    const JUMP_BUFFER_F = 8;
    const PLAYER_HEIGHT = 1.0;
    const STEP_HEIGHT   = 0.38;
    const FP_THRESHOLD  = 1.2;
    const FLOOR_Y       = 0;
    const EYE_HEIGHT    = 0.85;
    const CAM_SENS      = 0.007;

    // âââ Screen-effect filter map âââââââââââââââââââââââââââââââââââââââââââââââââ
    const EFFECT_FNS = {
        brightness:  v => `brightness(${Math.max(0, v)})`,
        saturation:  v => `saturate(${Math.max(0, v)})`,
        contrast:    v => `contrast(${Math.max(0, v)})`,
        blur:        v => `blur(${Math.max(0, v)}px)`,
        sepia:       v => `sepia(${Math.max(0, Math.min(1, v))})`,
        'hue-rotate':v => `hue-rotate(${v}deg)`,
        grayscale:   v => `grayscale(${Math.max(0, Math.min(1, v))})`,
        invert:      v => `invert(${Math.max(0, Math.min(1, v))})`,
    };

    // âââ TOD keyframes ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    // pt = player tint hex, tc = [r,g,b,alpha] overlay tint
    const TOD = [
        { h: 0,  top:0x020c20, mid:0x061028, hz:0x0a1530, fog:0x08101e, sc:0x101828, si:0.04, hs:0x080c18, hg:0x050808, sx:0.4,  sz:0.3, pt:0x334488, tc:[10,15,55,0.58]  },
        { h: 5,  top:0x1a2a5a, mid:0x3a3060, hz:0x8a5030, fog:0x6a4028, sc:0xff7040, si:0.45, hs:0x3050a0, hg:0x3a2010, sx:0.9,  sz:0.1, pt:0xff9966, tc:[200,90,30,0.20]  },
        { h: 7,  top:0x2060a0, mid:0x6090c0, hz:0xffa070, fog:0xd08060, sc:0xffb060, si:0.80, hs:0x70aadd, hg:0x604830, sx:0.7,  sz:0.3, pt:0xffddbb, tc:[255,150,60,0.08]  },
        { h: 12, top:0x1a5ca8, mid:0x6aaee0, hz:0xc8dff5, fog:0xbcd9f0, sc:0xfff2d5, si:1.15, hs:0x88c0e8, hg:0x6b4c2a, sx:0.4,  sz:0.3, pt:0xffffff, tc:[0,0,0,0.0]        },
        { h: 17, top:0x2050a0, mid:0x7060a0, hz:0xff9060, fog:0xff8050, sc:0xff8840, si:0.90, hs:0x5080c0, hg:0x603820, sx:-0.6, sz:0.3, pt:0xffcc88, tc:[255,110,30,0.13]  },
        { h: 19, top:0x100820, mid:0x301820, hz:0x804030, fog:0x5a3020, sc:0xff5020, si:0.30, hs:0x201040, hg:0x201008, sx:-0.9, sz:0.1, pt:0xff7744, tc:[180,60,15,0.28]  },
        { h: 22, top:0x020c20, mid:0x061028, hz:0x0a1530, fog:0x08101e, sc:0x101828, si:0.04, hs:0x080c18, hg:0x050808, sx:0.4,  sz:0.3, pt:0x223366, tc:[8,12,45,0.52]   },
        { h: 24, top:0x020c20, mid:0x061028, hz:0x0a1530, fog:0x08101e, sc:0x101828, si:0.04, hs:0x080c18, hg:0x050808, sx:0.4,  sz:0.3, pt:0x334488, tc:[10,15,55,0.58]  },
    ];

    // âââ Device detection âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    const isTouchDevice = (() => {
        let c = null;
        return () => { if (c === null) c = ('ontouchstart' in window || navigator.maxTouchPoints > 0); return c; };
    })();

    // âââ Scene state âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    let scene, camera, renderer, camRay;
    let worldContainer, floorGroup;
    let skyDome = null, usingCustomSkybox = true;
    let sunLight = null, hemiLight = null;
    let colliders = [], cameraColliders = [], npcInstances = [];
    let currentPlayerTint = null;

    // ââ Player ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    let playerPos = null, playerVelY = 0, playerRotationY = 0, playerSpeed = 0.12, activeLayer = 1;
    let playerGroup, walkGroup, player3DGroup; // walkGroup sits between playerGroup and player3DGroup
    let playerTextures = { image1: null, image2: null, image3: null };

    // ââ Camera ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    let cameraAngle = { phi: Math.PI / 4, theta: 0 };
    let cameraDistance = 10, targetCameraDistance = 10, occludedCamDist = 10;
    let isFirstPerson = false, bottomMargin = -120;

    // ââ Physics âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    let coyoteTimer = 0, jumpBufferTimer = 0, wasOnGround = false, isJumping = false, prevVelY = 0;

    // ââ Visual FX âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    let cameraShake = 0, walkBobTime = 0, pScaleY = 1, pScaleXZ = 1;
    let walkCycle = 0, playerLean = 0;            // waddle animation state
    let dustSystem = null, impactFlashEl = null, mobileJumpBtn = null, todTintEl = null;

    // ââ Editor preview window âââââââââââââââââââââââââââââââââââââââââââââââââââââ
    // White frame that hosts the 3D renderer while the project runs inside
    // TurboWarp's editor. Hidden when fullscreened or in a packaged build.
    let editorWindow = null;
    let editorYOffset = 45;            // px below stage top
    let editorHeightMult = 0.53;       // fraction of stage height
    let editorIsDragging = false;
    const EDITOR_HANDLE_H = 10;

    // ââ Sprite â 3D model bindings ââââââââââââââââââââââââââââââââââââââââââââââââ
    // targetId â { model, type, userY, costumeName }
    const spriteModels = new Map();

    // ââ Floor bookkeeping (multi-chunk) âââââââââââââââââââââââââââââââââââââââââââ
    // placedFloorsList preserves creation order so setFloor can retexture the
    // most recent floor. placedFloorsMap maps "ox,oz" chunk keys to meshes so
    // addWall can decide whether to auto-generate a floor for that chunk.
    let placedFloorsList = [];
    const placedFloorsMap = new Map();

    // ââ Screen effects âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    const screenEffects = {};                     // effectName â value
    function applyScreenEffects() {
        const parts = Object.entries(screenEffects)
            .filter(([k]) => k in EFFECT_FNS)
            .map(([k, v]) => EFFECT_FNS[k](v));
        if (renderer) renderer.domElement.style.filter = parts.join(' ') || 'none';
    }

    // ââ Greedy mesh bookkeeping ââââââââââââââââââââââââââââââââââââââââââââââââââââ
    // materialBlocks: key â { sideTex, topTex, botTex, shininess, blocks: Map<yâSet<"x,z">> }
    const materialBlocks = new Map();
    // materialCache: key â THREE.MeshPhongMaterial  (shared across meshes with same params)
    const materialCache  = new Map();
    let   greedyMeshObjects = [];    // meshes currently in worldContainer from greedy mesh
    let   greedyMeshTimer   = null;

    // ââ Input âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    const keys  = {};
    const mouse = { leftDown:false, rightDown:false, leftStart:{x:0,y:0}, leftCurrent:{x:0,y:0}, rightLastX:0, rightLastY:0 };
    let activeTouches = {};

    // ââ Settings ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    const settings = { resolutionScale:1.0, shadowSize:1024, fov:75, fogEnabled:true, renderDistance:1000 };

    // âââ CSS animations (injected once) ââââââââââââââââââââââââââââââââââââââââââ
    (function injectStyles() {
        const s = document.createElement('style');
        s.textContent = `
        @keyframes g3d-pulse{0%,100%{box-shadow:0 0 0 0 rgba(237,119,61,.55)}70%{box-shadow:0 0 0 10px rgba(237,119,61,0)}}
        @keyframes g3d-float{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-5px) scale(1.06)}}
        @keyframes g3d-pop{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}
        .g3d-gear{transition:transform .38s cubic-bezier(.34,1.56,.64,1)!important;animation:g3d-pulse 2.5s ease infinite!important}
        .g3d-gear:hover{transform:rotate(90deg) scale(1.12)!important;animation:none!important}
        .g3d-gear:active{transform:rotate(90deg) scale(.92)!important}
        .g3d-btn{position:relative;overflow:hidden;transition:transform .15s cubic-bezier(.34,1.56,.64,1),filter .12s,box-shadow .15s!important}
        .g3d-btn::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);transform:translateX(-120%);transition:transform .5s}
        .g3d-btn:hover{transform:translateY(-2px) scale(1.04)!important;filter:brightness(1.10)!important}
        .g3d-btn:hover::after{transform:translateX(120%)}
        .g3d-btn:active{transform:scale(.94)!important;filter:brightness(.92)!important}
        .g3d-close{transition:transform .25s cubic-bezier(.34,1.56,.64,1),color .15s!important}
        .g3d-close:hover{transform:rotate(90deg) scale(1.25)!important;color:#ED773D!important}
        .g3d-seg{transition:background .18s,color .18s,transform .12s!important}
        .g3d-seg:hover{filter:brightness(.96)!important;transform:scale(1.03)!important}
        .g3d-seg:active{transform:scale(.93)!important}
        .g3d-tile{transition:transform .18s cubic-bezier(.34,1.56,.64,1),box-shadow .18s,border-color .15s!important}
        .g3d-tile:hover{transform:scale(1.11)!important;box-shadow:0 8px 20px rgba(0,0,0,.22)!important}
        .g3d-jump{animation:g3d-float 2.2s ease-in-out infinite!important}
        .g3d-jump:active{animation:none!important;transform:scale(.88)!important;transition:transform .08s!important}
        `;
        document.head.appendChild(s);
        // Best-effort matrix colour override
        const ms = document.createElement('style');
        ms.textContent = `.blocklyDropdownDiv .matrix-button.matrix-button-active,.blocklyDropdownDiv [class*="matrixActive"]{background:#ED773D!important}`;
        document.head.appendChild(ms);
    })();

    // âââ Texture cache ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    const textureCache = new Map();
    const getTexture = (url, isAvatar = false) => {
        if (!url || typeof THREE === 'undefined') return null;
        if (textureCache.has(url)) return textureCache.get(url);
        const tex = new THREE.TextureLoader().load(url, (t) => {
            t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter;
            t.wrapS = t.wrapT = THREE.RepeatWrapping;
            if (isAvatar) {
                const a = t.image.width / t.image.height;
                if (a > 1)      { t.repeat.set(1, 1/a); t.offset.set(0, (1-1/a)/2); }
                else if (a < 1) { t.repeat.set(a, 1);   t.offset.set((1-a)/2, 0); }
            }
            t.needsUpdate = true;
        });
        textureCache.set(url, tex);
        return tex;
    };

    // âââ Cached material factory ââââââââââââââââââââââââââââââââââââââââââââââââââ
    // Returns a MeshPhongMaterial for the given tex+repeat+shininess combination.
    // Clones the base texture with independent repeat settings (shares GPU image).
    function getMat(tex, repU, repV, shininess) {
        const key = `${tex ? tex.uuid : 'null'}|${repU}|${repV}|${shininess}`;
        if (materialCache.has(key)) return materialCache.get(key);
        const mat = new THREE.MeshPhongMaterial({
            shininess,
            specular: shininess > 0 ? new THREE.Color(0.12, 0.12, 0.12) : new THREE.Color(0, 0, 0),
        });
        if (tex) {
            const t = tex.clone();
            t.wrapS = t.wrapT = THREE.RepeatWrapping;
            t.repeat.set(repU, repV);
            t.needsUpdate = true;
            mat.map = t;
        }
        materialCache.set(key, mat);
        return mat;
    }

    // âââ Greedy mesh algorithms âââââââââââââââââââââââââââââââââââââââââââââââââââ

    // Greedy 2-D mesh on an XZ Set<"x,z"> â array of {x,z,w,d} rectangles.
    function greedyMesh2D(xzSet) {
        if (!xzSet || !xzSet.size) return [];
        let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
        xzSet.forEach(p => {
            const [x, z] = p.split(',').map(Number);
            minX = Math.min(minX, x); maxX = Math.max(maxX, x);
            minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
        });
        const W = maxX - minX + 1, H = maxZ - minZ + 1;
        const grid    = new Uint8Array(W * H);
        const visited = new Uint8Array(W * H);
        xzSet.forEach(p => { const [x, z] = p.split(',').map(Number); grid[(x-minX) + (z-minZ)*W] = 1; });
        const rects = [];
        for (let zi = 0; zi < H; zi++) {
            for (let xi = 0; xi < W; xi++) {
                const idx = xi + zi * W;
                if (!grid[idx] || visited[idx]) continue;
                let w = 1;
                while (xi + w < W && grid[(xi+w) + zi*W] && !visited[(xi+w) + zi*W]) w++;
                let d = 1;
                outer: while (zi + d < H) {
                    for (let k = 0; k < w; k++) { if (!grid[(xi+k) + (zi+d)*W] || visited[(xi+k) + (zi+d)*W]) break outer; }
                    d++;
                }
                for (let dz = 0; dz < d; dz++) for (let dx = 0; dx < w; dx++) visited[(xi+dx) + (zi+dz)*W] = 1;
                rects.push({ x: xi + minX, z: zi + minZ, w, d });
            }
        }
        return rects;
    }

    function setsEqual(a, b) {
        if (a.size !== b.size) return false;
        for (const v of a) if (!b.has(v)) return false;
        return true;
    }

    // Rebuild all greedy-meshed geometry from materialBlocks.
    // Groups consecutive identical Y-layers vertically â taller merged boxes.
    // Uses texture repeat so each block face still shows one tile of the texture.
    function rebuildGreedyMesh() {
        greedyMeshTimer = null;
        const newMeshes = [], newColliders = [];

        materialBlocks.forEach((matData) => {
            const { sideTex, topTex, botTex, shininess, blocks } = matData;

            // Sort Y levels (layer centres: 0.5, 1.5, 2.5 â¦)
            const yLevels = Array.from(blocks.keys()).sort((a, b) => a - b);
            if (!yLevels.length) return;

            // Build vertical slabs: consecutive Y-levels with identical XZ block sets
            const slabs = [];
            let slabStart = yLevels[0], slabH = 1, slabXZ = blocks.get(yLevels[0]);
            for (let i = 1; i < yLevels.length; i++) {
                const y = yLevels[i], prevY = yLevels[i-1];
                const xzSet = blocks.get(y);
                if (Math.abs(y - prevY - 1) < 0.001 && setsEqual(xzSet, slabXZ)) {
                    slabH++;
                } else {
                    slabs.push({ startY: slabStart, height: slabH, xzSet: slabXZ });
                    slabStart = y; slabH = 1; slabXZ = xzSet;
                }
            }
            slabs.push({ startY: slabStart, height: slabH, xzSet: slabXZ });

            slabs.forEach(({ startY, height, xzSet }) => {
                greedyMesh2D(xzSet).forEach(({ x, z, w, d }) => {
                    // cx/cz: centre of merged block in world units
                    const cx = x + w / 2 - 0.5;
                    const cy = startY + (height - 1) / 2;  // centre of vertical slab
                    const cz = z + d / 2 - 0.5;

                    // Six face materials with correct per-face texture tiling.
                    // BoxGeometry face order: +X, -X, +Y, -Y, +Z, -Z
                    //   Â±X faces span  d (depth)  Ã  height  blocks
                    //   Â±Z faces span  w (width)  Ã  height  blocks
                    //   Â±Y faces span  w          Ã  d       blocks
                    const mats = [
                        getMat(sideTex, d, height, shininess),
                        getMat(sideTex, d, height, shininess),
                        getMat(topTex,  w, d,      shininess),
                        getMat(botTex,  w, d,      shininess),
                        getMat(sideTex, w, height, shininess),
                        getMat(sideTex, w, height, shininess),
                    ];
                    const geo  = new THREE.BoxGeometry(w, height, d);
                    const mesh = new THREE.Mesh(geo, mats);
                    mesh.position.set(cx, cy, cz);
                    mesh.castShadow = mesh.receiveShadow = true;
                    mesh.isGreedyMesh = true;
                    newMeshes.push(mesh);
                    newColliders.push(mesh);
                });
            });
        });

        // Atomic swap â remove old, add new
        greedyMeshObjects.forEach(m => { m.geometry.dispose(); worldContainer.remove(m); });
        newMeshes.forEach(m => worldContainer.add(m));
        greedyMeshObjects = newMeshes;
        colliders        = colliders.filter(c => !c.isGreedyMesh).concat(newColliders);
        cameraColliders  = cameraColliders.filter(c => !c.isGreedyMesh).concat(newColliders);
    }

    function scheduleGreedyMesh() {
        if (greedyMeshTimer) clearTimeout(greedyMeshTimer);
        greedyMeshTimer = setTimeout(rebuildGreedyMesh, 60);
    }

    // âââ Dust particles âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    class DustSystem {
        constructor(s) {
            this.MAX=80;this.pos=new Float32Array(this.MAX*3);this.vel=new Float32Array(this.MAX*3);this.life=new Float32Array(this.MAX);
            this.geo=new THREE.BufferGeometry();this.geo.setAttribute('position',new THREE.BufferAttribute(this.pos,3));
            this.mat=new THREE.PointsMaterial({color:0xd4c5a9,size:.09,transparent:true,opacity:.85,depthWrite:false,sizeAttenuation:true});
            this.pts=new THREE.Points(this.geo,this.mat);this.pts.renderOrder=2;this.pts.frustumCulled=false;
            s.add(this.pts);for(let i=0;i<this.MAX;i++)this.pos[i*3+1]=-9999;this.geo.attributes.position.needsUpdate=true;
        }
        emit(x,y,z,n=8){let k=0;for(let i=0;i<this.MAX&&k<n;i++){if(this.life[i]<=0){this.pos[i*3]=x+(Math.random()-.5)*.8;this.pos[i*3+1]=y+.04;this.pos[i*3+2]=z+(Math.random()-.5)*.8;this.vel[i*3]=(Math.random()-.5)*.055;this.vel[i*3+1]=Math.random()*.075+.012;this.vel[i*3+2]=(Math.random()-.5)*.055;this.life[i]=1;k++;}}}
        update(){for(let i=0;i<this.MAX;i++){if(this.life[i]<=0)continue;this.life[i]-=.032;if(this.life[i]<=0){this.pos[i*3+1]=-9999;continue;}this.pos[i*3]+=this.vel[i*3];this.pos[i*3+1]+=this.vel[i*3+1];this.pos[i*3+2]+=this.vel[i*3+2];this.vel[i*3+1]-=.0025;}this.geo.attributes.position.needsUpdate=true;}
    }

    // âââ Helpers ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    function lerpColor(hex1, hex2, t) { return new THREE.Color(hex1).lerp(new THREE.Color(hex2), t); }

    function parseSheen(s) {
        const m = { none:0, matte:0, low:18, subtle:18, medium:45, shiny:80, high:80, wet:110, glass:140, mirror:200 };
        const lo = String(s || 0).toLowerCase().trim();
        if (lo in m) return m[lo];
        const n = parseFloat(lo);
        return isNaN(n) ? 0 : Math.max(0, n);
    }

    // âââ Time of day âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    function applyTimeOfDay(hour) {
        hour = ((hour % 24) + 24) % 24;
        let a = TOD[0], b = TOD[TOD.length-1];
        for (let i = 0; i < TOD.length-1; i++) { if (hour >= TOD[i].h && hour <= TOD[i+1].h) { a=TOD[i]; b=TOD[i+1]; break; } }
        const t = a.h === b.h ? 0 : (hour - a.h) / (b.h - a.h);

        if (skyDome && skyDome.visible && skyDome.material.uniforms) {
            const u = skyDome.material.uniforms;
            u.topColor.value.copy(lerpColor(a.top, b.top, t));
            u.midColor.value.copy(lerpColor(a.mid, b.mid, t));
            u.horizColor.value.copy(lerpColor(a.hz, b.hz, t));
            const elev = Math.max(Math.sin(((hour-6)/12)*Math.PI), 0);
            const sx = a.sx+(b.sx-a.sx)*t, sz = a.sz+(b.sz-a.sz)*t;
            u.sunDir.value.set(sx, elev, sz).normalize();
        }
        if (scene && scene.fog) scene.fog.color.copy(lerpColor(a.fog, b.fog, t));
        if (sunLight) { sunLight.color.copy(lerpColor(a.sc, b.sc, t)); sunLight.intensity = a.si+(b.si-a.si)*t; }
        if (hemiLight) { hemiLight.color.copy(lerpColor(a.hs, b.hs, t)); hemiLight.groundColor.copy(lerpColor(a.hg, b.hg, t)); }

        // Overlay tint (affects mood of 360 skybox + environment)
        if (todTintEl) {
            const r=Math.round(a.tc[0]+(b.tc[0]-a.tc[0])*t), g=Math.round(a.tc[1]+(b.tc[1]-a.tc[1])*t);
            const bl=Math.round(a.tc[2]+(b.tc[2]-a.tc[2])*t), al=(a.tc[3]+(b.tc[3]-a.tc[3])*t).toFixed(3);
            todTintEl.style.background = `rgba(${r},${g},${bl},${al})`;
        }

        // Player tint
        if (currentPlayerTint) {
            currentPlayerTint.copy(lerpColor(a.pt, b.pt, t));
            if (player3DGroup) player3DGroup.traverse(c => { if (c.isMesh && c.material?.isMeshBasicMaterial) c.material.color.copy(currentPlayerTint); });
        }
    }

    // âââ Procedural sky dome ââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    function createSkyDome() {
        const geo = new THREE.SphereGeometry(480, 32, 16);
        const mat = new THREE.ShaderMaterial({
            uniforms: {
                topColor:    { value: new THREE.Color(0x1a5ca8) },
                midColor:    { value: new THREE.Color(0x6aaee0) },
                horizColor:  { value: new THREE.Color(0xc8dff5) },
                sunDir:      { value: new THREE.Vector3(0.4, 0.85, 0.3).normalize() },
                sunColor:    { value: new THREE.Color(1, 0.97, 0.85) },
                sunSize:     { value: 0.9982 },
                haloStrength:{ value: 0.30 },
            },
            vertexShader: `varying vec3 vDir;void main(){vDir=normalize((modelMatrix*vec4(position,0.)).xyz);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position.z=gl_Position.w;}`,
            fragmentShader: `
                uniform vec3 topColor,midColor,horizColor,sunDir,sunColor;uniform float sunSize,haloStrength;varying vec3 vDir;
                void main(){float h=vDir.y;vec3 sky=h>=0.?mix(midColor,topColor,pow(h,.65)):mix(horizColor,midColor,pow(clamp(h+1.,0.,1.),.45));float cosA=dot(vDir,sunDir),abH=max(sunDir.y,0.);float disc=smoothstep(sunSize,sunSize+.0005,cosA)*abH,halo=pow(max(cosA,0.),18.)*haloStrength*abH,glow=exp(-abs(h)*6.)*max(dot(normalize(vDir*vec3(1,0,1)),normalize(sunDir*vec3(1,0,1))),0.)*.18*abH;sky=mix(sky,sunColor,clamp(disc+halo+glow,0.,1.));gl_FragColor=vec4(sky,1.);}`,
            side: THREE.BackSide, depthWrite:false, depthTest:false,
        });
        const m = new THREE.Mesh(geo, mat); m.renderOrder=-1; m.frustumCulled=false; return m;
    }

    // âââ Settings helpers âââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    function applyShadows(size) {
        settings.shadowSize=size; if(!renderer)return; renderer.shadowMap.enabled=size>0;
        if(sunLight&&size>0){if(sunLight.shadow.map){sunLight.shadow.map.dispose();sunLight.shadow.map=null;}sunLight.shadow.mapSize.set(size,size);}
    }
    function applyFOV(v)     { settings.fov=v;              if(camera){camera.fov=v;camera.updateProjectionMatrix();} }
    function applyFog(on)    { settings.fogEnabled=on;       if(scene)scene.fog=on?new THREE.Fog(scene.fog?scene.fog.color:0xbcd9f0,22,85):null; }
    function applyRenderDist(d){settings.renderDistance=d;  if(camera){camera.far=d;camera.updateProjectionMatrix();} }

    // âââ initThree ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    function initThree() {
        if (renderer || typeof THREE === 'undefined') return;
        const stageCanvas = Scratch.renderer.canvas;
        currentPlayerTint = new THREE.Color(1, 1, 1);

        scene  = new THREE.Scene(); scene.fog = new THREE.Fog(0xbcd9f0, 22, 85);
        camera = new THREE.PerspectiveCamera(75, stageCanvas.width / stageCanvas.height, 0.1, 1000);
        camRay = new THREE.Raycaster();

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.domElement.style.cssText      = 'position:fixed;z-index:10000;pointer-events:none;transition:filter .5s ease;';
        renderer.toneMapping                   = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure           = 1.05;
        renderer.outputEncoding                = THREE.sRGBEncoding;
        renderer.shadowMap.enabled             = true;
        renderer.shadowMap.type                = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);

        worldContainer = new THREE.Group(); scene.add(worldContainer);
        floorGroup     = new THREE.Group(); scene.add(floorGroup);

        skyDome = createSkyDome(); skyDome.visible = false; scene.add(skyDome);

        // Lighting
        hemiLight = new THREE.HemisphereLight(0x88c0e8, 0x6b4c2a, 0.65); scene.add(hemiLight);
        sunLight  = new THREE.DirectionalLight(0xfff2d5, 1.15);
        sunLight.position.set(15, 25, 10); sunLight.castShadow = true;
        sunLight.shadow.mapSize.set(1024, 1024);
        sunLight.shadow.camera.near=0.5; sunLight.shadow.camera.far=90;
        sunLight.shadow.camera.left=-28; sunLight.shadow.camera.right=28;
        sunLight.shadow.camera.top=28;   sunLight.shadow.camera.bottom=-28;
        sunLight.shadow.bias=-0.001;
        scene.add(sunLight); scene.add(sunLight.target);
        const fill=new THREE.DirectionalLight(0xd0e8ff,.28); fill.position.set(-8,10,-8); scene.add(fill);
        scene.add(new THREE.AmbientLight(0xffffff,.18));

        // Default 360Â° equirectangular skybox
        new THREE.TextureLoader().load(defaultSkyboxUrl, (tex) => { tex.mapping=THREE.EquirectangularReflectionMapping; scene.background=tex; });

        // Player hierarchy:  playerGroup â walkGroup â player3DGroup â OBJ meshes
        playerPos     = new THREE.Vector3(0, 0, 0);
        playerGroup   = new THREE.Group();
        walkGroup     = new THREE.Group();
        player3DGroup = new THREE.Group();
        playerGroup.add(walkGroup); walkGroup.add(player3DGroup);
        scene.add(playerGroup);
        playerTextures.image1 = getTexture(defaultPlayerTexture, true);
        internalUpdatePlayerVisuals();

        dustSystem = new DustSystem(scene);

        // Keyboard
        window.addEventListener('keydown', (e)=>keys[e.code]=true);
        window.addEventListener('keyup',   (e)=>keys[e.code]=false);

        // Desktop mouse
        stageCanvas.addEventListener('mousedown',(e)=>{if(isTouchDevice())return;mouse.rightDown=true;mouse.rightLastX=e.clientX;mouse.rightLastY=e.clientY;});
        window.addEventListener('mousemove',(e)=>{if(!isTouchDevice()&&mouse.rightDown){cameraAngle.theta-=(e.clientX-mouse.rightLastX)*CAM_SENS;cameraAngle.phi=Math.max(.1,Math.min(Math.PI-.1,cameraAngle.phi+(e.clientY-mouse.rightLastY)*CAM_SENS));mouse.rightLastX=e.clientX;mouse.rightLastY=e.clientY;}});
        window.addEventListener('mouseup',()=>{mouse.rightDown=false;});
        window.addEventListener('wheel',(e)=>{if(settingsModal&&settingsModal.style.display!=='none')return;targetCameraDistance=Math.max(0,Math.min(40,targetCameraDistance+e.deltaY*.02));},{passive:true});

        // Touch
        stageCanvas.addEventListener('touchstart',(e)=>{e.preventDefault();const rect=stageCanvas.getBoundingClientRect();for(const t of e.changedTouches){if(t.clientX-rect.left<rect.width/2){mouse.leftDown=true;mouse.leftStart={x:t.clientX,y:t.clientY};mouse.leftCurrent={x:t.clientX,y:t.clientY};activeTouches[t.identifier]='move';}else{mouse.rightDown=true;mouse.rightLastX=t.clientX;mouse.rightLastY=t.clientY;activeTouches[t.identifier]='rotate';}}},{passive:false});
        window.addEventListener('touchmove',(e)=>{for(const t of e.changedTouches){if(activeTouches[t.identifier]==='move'){mouse.leftCurrent={x:t.clientX,y:t.clientY};}else if(activeTouches[t.identifier]==='rotate'){cameraAngle.theta-=(t.clientX-mouse.rightLastX)*CAM_SENS;cameraAngle.phi=Math.max(.1,Math.min(Math.PI-.1,cameraAngle.phi+(t.clientY-mouse.rightLastY)*CAM_SENS));mouse.rightLastX=t.clientX;mouse.rightLastY=t.clientY;}}},{passive:false});
        window.addEventListener('touchend',(e)=>{for(const t of e.changedTouches){if(activeTouches[t.identifier]==='move')mouse.leftDown=false;if(activeTouches[t.identifier]==='rotate')mouse.rightDown=false;delete activeTouches[t.identifier];}});

        new ResizeObserver(()=>updateRendererLayout()).observe(stageCanvas);
        createUI(); updateRendererLayout(); addBoundaries();

        // Default boot floor
        const floorMat=new THREE.MeshLambertMaterial({color:0xffffff,transparent:true,side:THREE.DoubleSide});
        new THREE.TextureLoader().load(bootFloorTexture,(tex)=>{tex.wrapS=tex.wrapT=THREE.RepeatWrapping;floorMat.map=tex;floorMat.needsUpdate=true;});
        const floorMesh=new THREE.Mesh(new THREE.PlaneGeometry(25,25),floorMat);
        floorMesh.rotation.x=-Math.PI/2; floorMesh.position.y=-0.01; floorMesh.receiveShadow=true; floorGroup.add(floorMesh);
        placedFloorsMap.set('0,0',floorMesh); placedFloorsList.push(floorMesh);

        applyTimeOfDay(12); animate();
    }

    // âââ UI ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    let uiOverlay, settingsModal;
    const SEG_ON  = 'flex:1;padding:8px 0;border-radius:7px;border:none;font-size:11px;font-weight:800;cursor:pointer;background:#ED773D;color:white;';
    const SEG_OFF = 'flex:1;padding:8px 0;border-radius:7px;border:none;font-size:11px;font-weight:700;cursor:pointer;background:#ebebeb;color:#888;';
    const LBL     = 'font-weight:700;font-size:10px;color:#aaa;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;display:block;';

    function makeSegGroup(groupEl, onChange) {
        groupEl.querySelectorAll('button').forEach(btn => {
            btn.classList.add('g3d-seg');
            btn.onclick = () => { groupEl.querySelectorAll('button').forEach(b=>b.style.cssText=SEG_OFF); btn.style.cssText=SEG_ON; onChange(parseFloat(btn.dataset.val)); };
        });
    }

    function createEditorWindow() {
        if (editorWindow) return;
        const div = document.createElement('div');
        div.id = 'g3d-editor-window';
        Object.assign(div.style, {
            position: 'absolute',
            backgroundColor: '#ffffff',
            border: '1px solid #d8dde3',
            borderRadius: '6px',
            zIndex: '999',
            pointerEvents: 'auto',
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'none'
        });

        // Drag handle pinned to the bottom edge of the white frame
        const handle = document.createElement('div');
        Object.assign(handle.style, {
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: `${EDITOR_HANDLE_H}px`,
            cursor: 'ns-resize',
            backgroundColor: 'rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '2'
        });
        const grip = document.createElement('div');
        Object.assign(grip.style, {
            width: '30px', height: '3px',
            backgroundColor: 'rgba(120,120,120,0.6)',
            borderRadius: '2px'
        });
        handle.appendChild(grip);
        div.appendChild(handle);

        document.body.appendChild(div);
        editorWindow = div;

        // ââ Drag-to-resize ââââââââââââââââââââââââââââââââââââââââââââââââââââ
        const onMove = (e) => {
            if (!editorIsDragging) return;
            const stage = document.querySelector('[class*="stage-and-target-wrapper"]');
            if (!stage) return;
            const sr = stage.getBoundingClientRect();
            const top = sr.top + editorYOffset;
            const base = sr.bottom - sr.top;
            const newH = e.clientY - top;
            const mult = newH / base;
            editorHeightMult = Math.max(0.05, Math.min(2.0, mult));
            updateRendererLayout();
        };
        const onUp = () => {
            editorIsDragging = false;
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.body.style.cursor = '';
        };
        handle.addEventListener('mousedown', (e) => {
            e.preventDefault();
            editorIsDragging = true;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
            document.body.style.cursor = 'ns-resize';
        });

        // Keep the frame in sync with flyout / stage layout changes.
        new ResizeObserver(() => updateRendererLayout()).observe(document.body);
        setInterval(() => { if (renderer) updateRendererLayout(); }, 16);
    }

    function createUI() {
        if (uiOverlay) return;

        // ââ Editor preview window (white frame, no shadow) âââââââââââââââââââ
        // Sits between the block palette and the stage when running inside
        // TurboWarp's editor. Hidden in fullscreen / packaged builds.
        createEditorWindow();

        uiOverlay = document.createElement('div');
        uiOverlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:10001;pointer-events:none;';
        document.body.appendChild(uiOverlay);

        todTintEl = document.createElement('div');
        todTintEl.style.cssText = 'position:absolute;inset:0;pointer-events:none;transition:background 3s ease;z-index:0;';
        uiOverlay.appendChild(todTintEl);

        impactFlashEl = document.createElement('div');
        impactFlashEl.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:rgba(255,255,255,0);transition:background .06s ease-out;z-index:1;';
        uiOverlay.appendChild(impactFlashEl);

        const gearBtn = document.createElement('button');
        gearBtn.className = 'g3d-gear';
        gearBtn.style.cssText = `position:absolute;top:10px;right:10px;width:44px;height:44px;border-radius:10px;border:none;background:#ED773D url(${extensionIcon}) center/68% no-repeat;cursor:pointer;pointer-events:auto;box-shadow:0 3px 10px rgba(237,119,61,.45);z-index:2;`;
        gearBtn.onclick = toggleSettings; uiOverlay.appendChild(gearBtn);

        mobileJumpBtn = document.createElement('button');
        mobileJumpBtn.className = 'g3d-jump';
        mobileJumpBtn.style.cssText = `position:absolute;bottom:28px;right:28px;width:74px;height:74px;border-radius:50%;border:3px solid rgba(255,255,255,.55);background:rgba(0,0,0,.38) url(${JUMP_BTN_IMG}) center/55% no-repeat;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);cursor:pointer;pointer-events:auto;display:${isTouchDevice()?'flex':'none'};align-items:center;justify-content:center;font-size:30px;color:rgba(255,255,255,.9);-webkit-tap-highlight-color:transparent;user-select:none;z-index:2;`;
        mobileJumpBtn.textContent = 'â²';
        mobileJumpBtn.addEventListener('touchstart',(e)=>{e.preventDefault();keys['Space']=true;},{passive:false});
        mobileJumpBtn.addEventListener('touchend', ()=>keys['Space']=false);
        mobileJumpBtn.addEventListener('mousedown',()=>keys['Space']=true);
        mobileJumpBtn.addEventListener('mouseup',  ()=>keys['Space']=false);
        uiOverlay.appendChild(mobileJumpBtn);

        settingsModal = document.createElement('div');
        settingsModal.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:min(90vw,820px);height:min(90vh,620px);background:#F2F4F5;color:#393B3D;border-radius:14px;font-family:sans-serif;display:none;pointer-events:auto;box-shadow:0 24px 70px rgba(0,0,0,.45);z-index:10002;overflow:hidden;';
        settingsModal.innerHTML = `
<div style="height:100%;display:flex;">
  <div style="flex:1.2;position:relative;overflow:hidden;background:linear-gradient(135deg,#1a1a2e,#16213e);border-right:1px solid rgba(255,255,255,.06);">
    <div id="previewContainer" style="width:100%;height:100%;"></div>
    <div style="position:absolute;bottom:10px;left:0;right:0;text-align:center;font-size:11px;color:rgba(255,255,255,.35);pointer-events:none;letter-spacing:.5px;">DRAG TO ROTATE</div>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;padding:20px;background:white;min-width:0;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
      <span style="font-size:17px;font-weight:800;letter-spacing:-.2px;">Settings</span>
      <button id="closeSettings" class="g3d-close" style="background:none;border:none;font-size:26px;cursor:pointer;color:#ccc;line-height:1;padding:0 4px;">&times;</button>
    </div>
    <div style="display:flex;gap:5px;margin-bottom:14px;">
      <button id="tabBtnSkins" style="${SEG_ON}">Skins</button>
      <button id="tabBtnGraphics" style="${SEG_OFF}">Graphics</button>
    </div>
    <div id="tabSkins" style="flex:1;display:flex;flex-direction:column;overflow:hidden;transition:opacity .15s;">
      <span style="${LBL}">Player Skin Library</span>
      <div id="textureLibrary" style="flex:1;overflow-y:auto;background:#F2F4F5;border-radius:10px;padding:8px;display:grid;grid-template-columns:repeat(auto-fill,minmax(68px,1fr));gap:7px;align-content:start;margin-bottom:12px;">
        <div id="libraryStatus" style="grid-column:1/-1;color:#ccc;font-size:12px;text-align:center;padding:20px;">Loading skinsâ¦</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <button id="importBtn" class="g3d-btn" style="padding:11px;border-radius:8px;border:none;background:#00B06F;color:white;font-weight:800;cursor:pointer;font-size:11px;box-shadow:0 4px 0 #008A57;">Import Image</button>
        <select id="importType" style="padding:8px;border-radius:8px;border:1.5px solid #DEE1E3;font-size:11px;background:white;">
          <option value="base">Set Base</option><option value="shirt">Set Shirt</option><option value="pants">Set Pants</option>
        </select>
      </div>
    </div>
    <div id="tabGraphics" style="flex:1;display:none;overflow-y:auto;transition:opacity .15s;">
      <span style="${LBL}">Resolution</span>
      <div style="display:flex;gap:5px;margin-bottom:14px;" id="resGroup">
        <button data-val="0.5" style="${SEG_OFF}">0.5Ã</button><button data-val="1" style="${SEG_ON}">1Ã</button>
        <button data-val="1.5" style="${SEG_OFF}">1.5Ã</button><button data-val="2" style="${SEG_OFF}">2Ã</button>
      </div>
      <span style="${LBL}">Shadows</span>
      <div style="display:flex;gap:5px;margin-bottom:14px;" id="shadowGroup">
        <button data-val="0" style="${SEG_OFF}">Off</button><button data-val="512" style="${SEG_OFF}">Low</button>
        <button data-val="1024" style="${SEG_ON}">Med</button><button data-val="2048" style="${SEG_OFF}">High</button>
      </div>
      <span style="${LBL}">FOV &nbsp;<b id="fovLabel" style="color:#ED773D;">75Â°</b></span>
      <input type="range" id="fovSlider" min="50" max="110" value="75" style="accent-color:#ED773D;cursor:pointer;width:100%;margin-bottom:14px;">
      <span style="${LBL}">View Distance &nbsp;<b id="rdLabel" style="color:#ED773D;">1000</b></span>
      <input type="range" id="rdSlider" min="40" max="500" value="100" style="accent-color:#ED773D;cursor:pointer;width:100%;margin-bottom:14px;">
      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;margin-bottom:14px;">
        <span style="${LBL}margin:0;">Fog</span>
        <input type="checkbox" id="fogToggle" checked style="accent-color:#ED773D;width:16px;height:16px;">
      </label>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:10px;border-top:1px solid #f0f0f0;margin-top:auto;">
      <button id="browseBtn" class="g3d-btn" style="padding:10px;border-radius:8px;border:none;background:#ED773D;color:white;font-weight:800;cursor:pointer;font-size:11px;box-shadow:0 4px 0 #C45B2A;">Browse Assets</button>
      <button id="discordBtn" class="g3d-btn" style="padding:10px;border-radius:8px;border:none;background:#5865F2;color:white;font-weight:800;cursor:pointer;font-size:11px;box-shadow:0 4px 0 #3E49BC;">Discord</button>
    </div>
  </div>
</div>
<input type="file" id="hiddenUpload" style="display:none" accept="image/*">`;
        document.body.appendChild(settingsModal);

        settingsModal.querySelector('#closeSettings').onclick = toggleSettings;
        settingsModal.querySelector('#discordBtn').onclick    = ()=>window.open('https://discord.gg/rnRKsU7WN','_blank');
        settingsModal.querySelector('#browseBtn').onclick     = ()=>window.open('https://grug3dengine.com/home','_blank');

        const tabBtnS=settingsModal.querySelector('#tabBtnSkins'), tabBtnG=settingsModal.querySelector('#tabBtnGraphics');
        const tabS=settingsModal.querySelector('#tabSkins'), tabG=settingsModal.querySelector('#tabGraphics');
        [tabBtnS,tabBtnG].forEach(b=>b.classList.add('g3d-seg'));
        const switchTab=(show,hide,on,off)=>{
            hide.style.opacity='0'; setTimeout(()=>{hide.style.display='none';show.style.display=show===tabS?'flex':'block';show.style.opacity='0';requestAnimationFrame(()=>{show.style.transition='opacity .15s';show.style.opacity='1';});},140);
            on.style.cssText=SEG_ON; off.style.cssText=SEG_OFF;
        };
        tabBtnS.onclick=()=>switchTab(tabS,tabG,tabBtnS,tabBtnG);
        tabBtnG.onclick=()=>switchTab(tabG,tabS,tabBtnG,tabBtnS);
        makeSegGroup(settingsModal.querySelector('#resGroup'),v=>{settings.resolutionScale=v;updateRendererLayout();});
        makeSegGroup(settingsModal.querySelector('#shadowGroup'),v=>applyShadows(v));
        const fovSl=settingsModal.querySelector('#fovSlider'); fovSl.oninput=()=>{settingsModal.querySelector('#fovLabel').textContent=fovSl.value+'Â°';applyFOV(+fovSl.value);};
        const rdSl=settingsModal.querySelector('#rdSlider'); rdSl.oninput=()=>{settingsModal.querySelector('#rdLabel').textContent=rdSl.value;applyRenderDist(+rdSl.value);};
        settingsModal.querySelector('#fogToggle').onchange=(e)=>applyFog(e.target.checked);
        const upInp=settingsModal.querySelector('#hiddenUpload');
        settingsModal.querySelector('#importBtn').onclick=()=>upInp.click();
        upInp.onchange=(e)=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=(ev)=>{const layer=settingsModal.querySelector('#importType').value;const tex=getTexture(ev.target.result,true);if(layer==='base')playerTextures.image1=tex;if(layer==='shirt')playerTextures.image2=tex;if(layer==='pants')playerTextures.image3=tex;internalUpdatePlayerVisuals();updatePreviewAvatar();};reader.readAsDataURL(file);e.target.value='';};

        initPreviewEngine(); fetchLibraryTextures();
    }

    function toggleSettings() {
        if (!settingsModal) return;
        const opening = settingsModal.style.display === 'none';
        if (opening) {
            settingsModal.style.display='block';
            settingsModal.style.transform='translate(-50%,-50%) scale(0.82) rotate(-2deg)';
            settingsModal.style.opacity='0';
            settingsModal.style.transition='transform .36s cubic-bezier(.34,1.56,.64,1),opacity .2s ease';
            requestAnimationFrame(()=>requestAnimationFrame(()=>{settingsModal.style.transform='translate(-50%,-50%) scale(1) rotate(0deg)';settingsModal.style.opacity='1';}));
            updatePreviewAvatar();
            const c=document.getElementById('previewContainer');
            if(previewRenderer&&c){previewRenderer.setSize(c.clientWidth,c.clientHeight);previewCamera.aspect=c.clientWidth/c.clientHeight;previewCamera.updateProjectionMatrix();}
        } else {
            settingsModal.style.transform='translate(-50%,-50%) scale(0.88)';
            settingsModal.style.opacity='0';
            settingsModal.style.transition='transform .2s ease,opacity .15s ease';
            setTimeout(()=>settingsModal.style.display='none',200);
        }
    }

    // âââ Skin library âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    async function fetchLibraryTextures() {
        const container=document.getElementById('textureLibrary'), statusEl=document.getElementById('libraryStatus');
        if(!container)return;
        try {
            const res=await fetch(GIST_TEXTURE_LIST); if(!res.ok)throw new Error(`HTTP ${res.status}`);
            let text=(await res.text()).trim().replace(/,(\s*[\]}])/g,'$1'); let urls;
            try{const p=JSON.parse(text);urls=Array.isArray(p)?p:Object.values(p);}catch{urls=(text.match(/https?:\/\/[^\s"',\]>]+/g)||[]);}
            urls=urls.filter(u=>typeof u==='string'&&u.startsWith('http'));
            if(statusEl)statusEl.remove();
            if(!urls.length){container.innerHTML='<div style="grid-column:1/-1;color:#ccc;font-size:12px;text-align:center;padding:20px;">No skins found.</div>';return;}
            urls.forEach(url=>{
                const btn=document.createElement('div'); btn.className='g3d-tile'; btn.setAttribute('data-skinbtn','');
                btn.style.cssText='aspect-ratio:1;background:#eee;border-radius:8px;overflow:hidden;border:2px solid transparent;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,.1);';
                const img=document.createElement('img');img.src=url;img.loading='lazy';img.style.cssText='width:100%;height:100%;object-fit:cover;display:block;';img.onerror=()=>btn.remove();
                btn.appendChild(img);btn.setAttribute('data-skinbtn','');
                btn.onclick=()=>{
                    const layer=settingsModal.querySelector('#importType').value;const tex=getTexture(url,true);
                    if(layer==='base')playerTextures.image1=tex;if(layer==='shirt')playerTextures.image2=tex;if(layer==='pants')playerTextures.image3=tex;
                    internalUpdatePlayerVisuals();updatePreviewAvatar();
                    container.querySelectorAll('[data-skinbtn]').forEach(d=>{d.style.borderColor='transparent';d.style.boxShadow='0 2px 5px rgba(0,0,0,.1)';});
                    btn.style.borderColor='#ED773D';btn.style.boxShadow='0 0 0 3px #ED773D55';
                    btn.style.animation='g3d-pop .3s ease';setTimeout(()=>btn.style.animation='',300);
                };
                container.appendChild(btn);
            });
        }catch(err){console.error('Grug 3D skins:',err);if(container)container.innerHTML='<div style="grid-column:1/-1;color:#e74c3c;font-size:12px;text-align:center;padding:20px;">Could not load skins.</div>';}
    }

    // âââ Preview engine âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    let previewScene,previewCamera,previewRenderer,previewAvatarGroup;
    let previewAngle={phi:Math.PI/2,theta:0},previewAutoRotate=true,previewDragging=false,previewDragLast={x:0,y:0},previewResumeTimer=null;
    const previewDist=2.5;

    function initPreviewEngine() {
        const container=document.getElementById('previewContainer');if(!container||typeof THREE==='undefined')return;
        previewScene=new THREE.Scene();previewCamera=new THREE.PerspectiveCamera(35,container.clientWidth/container.clientHeight,.1,100);
        previewRenderer=new THREE.WebGLRenderer({antialias:true,alpha:true});previewRenderer.setSize(container.clientWidth,container.clientHeight);previewRenderer.setPixelRatio(window.devicePixelRatio);previewRenderer.toneMapping=THREE.ACESFilmicToneMapping;
        container.appendChild(previewRenderer.domElement);
        previewScene.add(new THREE.AmbientLight(0xffffff,.7));const dl=new THREE.DirectionalLight(0xfff2d5,1);dl.position.set(2,3,2);previewScene.add(dl);
        previewAvatarGroup=new THREE.Group();previewScene.add(previewAvatarGroup);
        const el=previewRenderer.domElement;el.style.cursor='grab';
        const startD=(x,y)=>{previewDragging=true;previewAutoRotate=false;previewDragLast={x,y};el.style.cursor='grabbing';if(previewResumeTimer)clearTimeout(previewResumeTimer);};
        const moveD=(x,y)=>{if(!previewDragging)return;previewAngle.theta+=(x-previewDragLast.x)*.012;previewAngle.phi=Math.max(.1,Math.min(Math.PI-.1,previewAngle.phi-(y-previewDragLast.y)*.012));previewDragLast={x,y};};
        const endD=()=>{previewDragging=false;el.style.cursor='grab';previewResumeTimer=setTimeout(()=>previewAutoRotate=true,2000);};
        el.addEventListener('mousedown',(e)=>startD(e.clientX,e.clientY));window.addEventListener('mousemove',(e)=>moveD(e.clientX,e.clientY));window.addEventListener('mouseup',endD);
        el.addEventListener('touchstart',(e)=>{e.preventDefault();const t=e.touches[0];startD(t.clientX,t.clientY);},{passive:false});
        el.addEventListener('touchmove',(e)=>{e.preventDefault();const t=e.touches[0];moveD(t.clientX,t.clientY);},{passive:false});
        el.addEventListener('touchend',endD);
        animatePreview();
    }
    function updatePreviewAvatar(){
        if(!previewAvatarGroup||typeof THREE.OBJLoader==='undefined')return;
        while(previewAvatarGroup.children.length)previewAvatarGroup.remove(previewAvatarGroup.children[0]);
        new THREE.OBJLoader().load(objModelUrl,(object)=>{
            const size=new THREE.Vector3();new THREE.Box3().setFromObject(object).getSize(size);const scale=1/(size.y||1);
            [playerTextures.image1,playerTextures.image2,playerTextures.image3].forEach((tex,i)=>{
                if(!tex)return;const layer=object.clone();
                layer.traverse(c=>{if(c.isMesh){c.material=new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide});c.renderOrder=i;}});
                layer.scale.set(scale,scale,scale);const center=new THREE.Box3().setFromObject(layer).getCenter(new THREE.Vector3());layer.position.set(-center.x,0,-center.z);previewAvatarGroup.add(layer);
            });
        });
    }
    function animatePreview(){
        requestAnimationFrame(animatePreview);if(!previewRenderer||!settingsModal||settingsModal.style.display==='none')return;
        if(previewAutoRotate)previewAngle.theta+=.01;
        previewCamera.position.set(previewDist*Math.sin(previewAngle.phi)*Math.sin(previewAngle.theta),previewDist*Math.cos(previewAngle.phi)+.5,previewDist*Math.sin(previewAngle.phi)*Math.cos(previewAngle.theta));
        previewCamera.lookAt(0,.5,0);previewRenderer.render(previewScene,previewCamera);
    }

    // âââ Player visuals âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    function internalUpdatePlayerVisuals() {
        if(!renderer||typeof THREE.OBJLoader==='undefined')return;
        while(player3DGroup.children.length>0)player3DGroup.remove(player3DGroup.children[0]);
        new THREE.OBJLoader().load(objModelUrl,(object)=>{
            const size=new THREE.Vector3();new THREE.Box3().setFromObject(object).getSize(size);const scale=1/(size.y||1);
            [playerTextures.image1,playerTextures.image2,playerTextures.image3].forEach((tex,i)=>{
                if(!tex)return;const layer=object.clone();
                layer.traverse(c=>{
                    if(c.isMesh){
                        c.material=new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide});
                        c.material.fog=false;
                        if(currentPlayerTint)c.material.color.copy(currentPlayerTint);
                        c.renderOrder=i;c.castShadow=true;
                    }
                });
                layer.scale.set(scale,scale,scale);const center=new THREE.Box3().setFromObject(layer).getCenter(new THREE.Vector3());layer.position.set(-center.x,0,-center.z);player3DGroup.add(layer);
            });
        });
    }

    // âââ Sprite-bound model sync âââââââââââââââââââââââââââââââââââââââââââââââââ
    // Each frame: mirror Scratch sprite/clone position, size, direction onto
    // its associated 3D model, and remove models whose targets have been
    // deleted (covers clone deletion).
    const SCRATCH_TO_3D = 0.05;       // 240 Scratch units â 12 world units
    function updateSpriteModels() {
        if (!spriteModels.size) return;
        const vm = (typeof Scratch !== 'undefined') ? Scratch.vm : null;
        const runtime = vm && vm.runtime;
        if (!runtime) return;
        const toDelete = [];
        spriteModels.forEach((entry, targetId) => {
            // Locate target â supports getTargetById and array fallback
            let target = null;
            if (typeof runtime.getTargetById === 'function') target = runtime.getTargetById(targetId);
            if (!target && runtime.targets) target = runtime.targets.find(t => t.id === targetId) || null;
            if (!target) {
                if (entry.model && entry.model.parent) entry.model.parent.remove(entry.model);
                toDelete.push(targetId);
                return;
            }
            // Position: Scratch x â 3D x, Scratch y â 3D z (negated so Scratch
            // "up" reads as 3D "forward")
            entry.model.position.x = (target.x || 0) * SCRATCH_TO_3D;
            entry.model.position.z = -(target.y || 0) * SCRATCH_TO_3D;
            entry.model.position.y = entry.userY || 0;
            // Size: Scratch size is a percentage (100 = 1Ã)
            const s = (target.size || 100) / 100;
            entry.model.scale.set(s, s, s);
            // Direction: Scratch 90Â° = right (no rotation), 0Â° = up
            entry.model.rotation.y = (90 - (target.direction || 90)) * Math.PI / 180;
            // Hide model if sprite is hidden
            entry.model.visible = target.visible !== false;
            // Costume swap â refresh texture (cheap thanks to textureCache)
            const costumes = target.sprite && target.sprite.costumes;
            if (costumes && costumes.length) {
                const cur = costumes[target.currentCostume] || costumes[0];
                if (cur && cur.name !== entry.costumeName) {
                    entry.costumeName = cur.name;
                    const tex = getTexture(cur.asset.encodeDataURI(), true);
                    if (entry.type === 'block' && entry.model.material) {
                        entry.model.material.map = tex;
                        entry.model.material.needsUpdate = true;
                    } else {
                        entry.model.traverse(c => {
                            if (c.isMesh && c.material) {
                                c.material.map = tex;
                                c.material.needsUpdate = true;
                            }
                        });
                    }
                }
            }
        });
        toDelete.forEach(id => spriteModels.delete(id));
    }

    // âââ Layout âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    // True when running inside TurboWarp's editor (block palette visible and
    // the stage isn't taking over the viewport). False in packaged builds or
    // when the stage has been fullscreened.
    function isInEditorMode(){
        const flyout=document.querySelector('.blocklyFlyout');
        if(!flyout)return false;
        const fr=flyout.getBoundingClientRect();
        if(fr.width<=0)return false;
        const stage=document.querySelector('[class*="stage-and-target-wrapper"]');
        if(!stage)return false;
        const sr=stage.getBoundingClientRect();
        // If the stage occupies most of the viewport, we're effectively fullscreen
        if(sr.width>window.innerWidth*0.9)return false;
        return true;
    }

    function updateRendererLayout(){
        if(!renderer)return;
        const stageCanvas=Scratch.renderer.canvas;

        if(isInEditorMode()){
            // ââ Editor mode: render INSIDE the white frame window âââââââââââââ
            const flyout=document.querySelector('.blocklyFlyout');
            const stage=document.querySelector('[class*="stage-and-target-wrapper"]');
            if(!flyout||!stage)return;
            const flyoutRect=flyout.getBoundingClientRect();
            const stageRect=stage.getBoundingClientRect();

            const left=flyoutRect.right+10;
            const right=stageRect.left-10;
            const top=stageRect.top+editorYOffset;
            const baseHeight=stageRect.bottom-stageRect.top;
            const height=baseHeight*editorHeightMult;
            const width=right-left;

            if(width<=0||height<=0){
                if(editorWindow)editorWindow.style.display='none';
                renderer.domElement.style.display='none';
                if(uiOverlay)uiOverlay.style.display='none';
                return;
            }

            // White frame
            if(editorWindow){
                editorWindow.style.display='block';
                editorWindow.style.left=`${left}px`;
                editorWindow.style.top=`${top}px`;
                editorWindow.style.width=`${width}px`;
                editorWindow.style.height=`${height}px`;
            }

            // Three.js canvas sits inside the frame, above the drag handle
            const innerH=Math.max(1,height-EDITOR_HANDLE_H);
            renderer.domElement.style.display='block';
            renderer.domElement.style.left=`${left}px`;
            renderer.domElement.style.top=`${top}px`;
            renderer.domElement.style.width=`${width}px`;
            renderer.domElement.style.height=`${innerH}px`;
            renderer.setPixelRatio(window.devicePixelRatio*settings.resolutionScale);
            renderer.setSize(width,innerH,false);
            if(uiOverlay){
                uiOverlay.style.display='block';
                uiOverlay.style.width=`${width}px`;
                uiOverlay.style.height=`${innerH}px`;
                uiOverlay.style.top=`${top}px`;
                uiOverlay.style.left=`${left}px`;
            }
            if(camera){camera.aspect=width/(innerH||1);camera.updateProjectionMatrix();}
        }else{
            // ââ Fullscreen / packaged: render on top of the stage âââââââââââââ
            if(editorWindow)editorWindow.style.display='none';
            const rect=stageCanvas.getBoundingClientRect();
            const visH=rect.height*Math.max(0,Math.min(1.5,(180-bottomMargin)/360));
            renderer.domElement.style.display='block';
            renderer.domElement.style.width=rect.width+'px';renderer.domElement.style.height=visH+'px';
            renderer.domElement.style.top=rect.top+'px';renderer.domElement.style.left=rect.left+'px';
            renderer.setPixelRatio(window.devicePixelRatio*settings.resolutionScale);renderer.setSize(rect.width,visH,false);
            if(uiOverlay){uiOverlay.style.display='block';uiOverlay.style.width=rect.width+'px';uiOverlay.style.height=rect.height+'px';uiOverlay.style.top=rect.top+'px';uiOverlay.style.left=rect.left+'px';}
            if(camera){camera.aspect=rect.width/(visH||1);camera.updateProjectionMatrix();}
        }
    }

    // âââ World helpers ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    function addBoundaries(){
        const mat=new THREE.MeshBasicMaterial({visible:false}),size=26;
        [{w:size,h:20,d:1,x:0,z:size/2},{w:size,h:20,d:1,x:0,z:-size/2},{w:1,h:20,d:size,x:size/2,z:0},{w:1,h:20,d:size,x:-size/2,z:0}].forEach(w=>{
            const mesh=new THREE.Mesh(new THREE.BoxGeometry(w.w,w.h,w.d),mat);mesh.position.set(w.x,w.h/2,w.z);worldContainer.add(mesh);colliders.push(mesh);
        });
    }
    function checkCollision(x,y,z){
        const r=.3,headY=y+PLAYER_HEIGHT;
        for(const col of colliders){const b=new THREE.Box3().setFromObject(col);if(!(x+r>b.min.x&&x-r<b.max.x&&z+r>b.min.z&&z-r<b.max.z))continue;if(b.max.y>y+STEP_HEIGHT&&b.min.y<headY)return true;}
        return false;
    }
    function getSurfaceY(x,z,approachY){
        let maxY=FLOOR_Y;const r=.3;
        for(const col of colliders){const b=new THREE.Box3().setFromObject(col);if(!(x+r>b.min.x&&x-r<b.max.x&&z+r>b.min.z&&z-r<b.max.z))continue;if(b.max.y<=approachY+.5&&b.max.y>maxY)maxY=b.max.y;}
        return maxY;
    }

    // âââ Main loop ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    function animate(){
        requestAnimationFrame(animate);if(!renderer||!playerPos)return;

        cameraDistance+=(targetCameraDistance-cameraDistance)*.1;
        isFirstPerson=cameraDistance<FP_THRESHOLD;

        // Movement
        const Y=new THREE.Vector3(0,1,0);
        const fwd=new THREE.Vector3(0,0,-1).applyAxisAngle(Y,cameraAngle.theta);
        const rgt=new THREE.Vector3(1,0, 0).applyAxisAngle(Y,cameraAngle.theta);
        let dx=0,dz=0;
        if(keys['KeyW']||keys['ArrowUp']){dx+=fwd.x;dz+=fwd.z;}
        if(keys['KeyS']||keys['ArrowDown']){dx-=fwd.x;dz-=fwd.z;}
        if(keys['KeyA']||keys['ArrowLeft']){dx-=rgt.x;dz-=rgt.z;}
        if(keys['KeyD']||keys['ArrowRight']){dx+=rgt.x;dz+=rgt.z;}
        if(isTouchDevice()&&mouse.leftDown){const jdx=mouse.leftCurrent.x-mouse.leftStart.x,jdy=mouse.leftCurrent.y-mouse.leftStart.y,d=Math.sqrt(jdx*jdx+jdy*jdy);if(d>5){dx+=fwd.x*(-jdy/d)+rgt.x*(jdx/d);dz+=fwd.z*(-jdy/d)+rgt.z*(jdx/d);}}
        const moving=(dx!==0||dz!==0);
        if(moving){
            const spd=new THREE.Vector3(dx,0,dz).normalize().multiplyScalar(playerSpeed);
            if(!checkCollision(playerPos.x+spd.x,playerPos.y,playerPos.z))playerPos.x+=spd.x;
            if(!checkCollision(playerPos.x,playerPos.y,playerPos.z+spd.z))playerPos.z+=spd.z;
            const tr=Math.atan2(dx,dz);let diff=tr-playerRotationY;while(diff<-Math.PI)diff+=Math.PI*2;while(diff>Math.PI)diff-=Math.PI*2;
            playerRotationY+=diff*.15;
        }

        // Physics
        const surfaceY=getSurfaceY(playerPos.x,playerPos.z,playerPos.y);
        const onGround=playerPos.y<=surfaceY+.05;
        prevVelY=playerVelY;
        const jumpKey=keys['Space']||keys['KeyE'];
        if(jumpKey)jumpBufferTimer=JUMP_BUFFER_F;else if(jumpBufferTimer>0)jumpBufferTimer--;
        if(onGround){
            playerPos.y=surfaceY;playerVelY=0;coyoteTimer=10;
            if(!wasOnGround&&Math.abs(prevVelY)>.06){
                const imp=Math.abs(prevVelY);
                pScaleXZ=1+Math.min(imp*.9,.32);pScaleY=Math.max(1-imp*.7,.60);
                cameraShake=Math.min(imp*7,.45);
                if(dustSystem)dustSystem.emit(playerPos.x,playerPos.y,playerPos.z,Math.min(Math.floor(imp*50),18));
                if(impactFlashEl&&imp>.18){impactFlashEl.style.background=`rgba(255,255,255,${Math.min((imp-.18)*.5,.10)})`;setTimeout(()=>impactFlashEl.style.background='rgba(255,255,255,0)',70);}
            }
        }else{
            const nearApex=Math.abs(playerVelY)<APEX_VEL;
            if(nearApex)playerVelY-=APEX_GRAVITY;
            else if(playerVelY>0){playerVelY-=GRAVITY_RISE;if(!jumpKey&&isJumping&&playerVelY>.09)playerVelY*=.88;}
            else playerVelY-=GRAVITY_FALL;
            coyoteTimer--;
        }
        if(jumpBufferTimer>0&&coyoteTimer>0){playerVelY=JUMP_POWER;coyoteTimer=0;jumpBufferTimer=0;isJumping=true;pScaleXZ=.78;pScaleY=1.32;if(dustSystem)dustSystem.emit(playerPos.x,playerPos.y,playerPos.z,5);}
        if(onGround)isJumping=false;
        playerPos.y+=playerVelY;if(playerPos.y<FLOOR_Y){playerPos.y=FLOOR_Y;playerVelY=0;}
        wasOnGround=onGround;

        // Squash/stretch
        pScaleXZ+=(1-pScaleXZ)*.19;pScaleY+=(1-pScaleY)*.19;
        player3DGroup.scale.set(pScaleXZ,pScaleY,pScaleXZ);

        // ââ Waddle animation ââââââââââââââââââââââââââââââââââââââââââââââââââââââ
        // walkCycle drives a sinusoidal sway. When idle, it decays to the nearest
        // half-period so the player always comes to rest in a neutral upright pose.
        if (moving && onGround) {
            walkCycle += 0.19;
            playerLean += (-0.062 - playerLean) * 0.10; // lean forward while walking
        } else {
            // Snap to nearest neutral (multiples of Ï give sin=0)
            const nearest = Math.round(walkCycle / Math.PI) * Math.PI;
            walkCycle += (nearest - walkCycle) * 0.12;
            playerLean += (0 - playerLean) * 0.12;
        }
        // In the air: reduce lean slightly for floaty feel
        if (!onGround) playerLean += (-0.03 - playerLean) * 0.06;

        const swayZ  = Math.sin(walkCycle) * 0.09;           // side-to-side tilt
        const bobY   = moving ? Math.abs(Math.sin(walkCycle)) * 0.022 : 0; // up-down
        const sideX  = Math.sin(walkCycle) * 0.026;           // lateral hip shift

        // Apply to player3DGroup (local space of walkGroup so sway stays body-relative)
        player3DGroup.rotation.x  = playerLean;
        player3DGroup.rotation.z  = swayZ;
        player3DGroup.position.y  = bobY;
        player3DGroup.position.x  = sideX;
        // ââ End waddle ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

        // Player world transform
        playerGroup.position.set(playerPos.x, playerPos.y, playerPos.z);
        walkGroup.rotation.y = playerRotationY;

        // NPC behavior (idle / look at player / wander)
        npcInstances.forEach(npc=>{
            const beh=npc.behavior||'look at player';
            if(beh==='idle'){
                // nothing
            }else if(beh==='wander'){
                npc.wanderTimer=(npc.wanderTimer||0)-1;
                if(npc.wanderTimer<=0){npc.wanderDir=Math.random()*Math.PI*2;npc.wanderTimer=60+Math.random()*180;}
                const sp=0.04;
                const nx=npc.position.x+Math.sin(npc.wanderDir)*sp;
                const nz=npc.position.z+Math.cos(npc.wanderDir)*sp;
                const sx=npc.spawnX!==undefined?npc.spawnX:0;
                const sz=npc.spawnZ!==undefined?npc.spawnZ:0;
                const inBounds=Math.abs(nx-sx)<10&&Math.abs(nz-sz)<10;
                if(inBounds&&!checkCollision(nx,npc.position.y,nz)){
                    npc.position.x=nx; npc.position.z=nz;
                    let diff=npc.wanderDir-npc.rotation.y;while(diff<-Math.PI)diff+=Math.PI*2;while(diff>Math.PI)diff-=Math.PI*2;
                    npc.rotation.y+=diff*0.1;
                }else{
                    // hit a wall or bound â turn around next frame
                    npc.wanderTimer=0;
                }
            }else{ // 'look at player' (default, legacy behavior)
                const tr=Math.atan2(playerPos.x-npc.position.x,playerPos.z-npc.position.z);
                let diff=tr-npc.rotation.y;while(diff<-Math.PI)diff+=Math.PI*2;while(diff>Math.PI)diff-=Math.PI*2;
                npc.rotation.y+=diff*.1;
            }
        });

        // Sprite-bound 3D models â sync x/z/size/rotation, prune dead clones
        updateSpriteModels();

        if(dustSystem)dustSystem.update();

        // Sun tracks player for correct shadow coverage
        if(sunLight){sunLight.position.set(playerPos.x+15,playerPos.y+28,playerPos.z+10);sunLight.target.position.copy(playerPos);sunLight.target.updateMatrixWorld();}

        // Camera
        cameraShake=cameraShake>.005?cameraShake*.70:0;
        const bob=(moving&&!isFirstPerson)?Math.sin(walkCycle*2)*.028:0;
        const shX=cameraShake?(Math.random()-.5)*cameraShake*.18:0,shY=cameraShake?(Math.random()-.5)*cameraShake*.18:0;

        if(isFirstPerson){
            playerGroup.visible=false;
            const pitch=Math.cos(cameraAngle.phi);
            camera.position.set(playerPos.x+shX,playerPos.y+EYE_HEIGHT+shY,playerPos.z);
            camera.lookAt(playerPos.x-Math.sin(cameraAngle.theta)*10+shX,playerPos.y+EYE_HEIGHT-pitch*5+shY,playerPos.z-Math.cos(cameraAngle.theta)*10);
            occludedCamDist=FP_THRESHOLD;
        }else{
            playerGroup.visible=true;
            const idealX=playerPos.x+cameraDistance*Math.sin(cameraAngle.phi)*Math.sin(cameraAngle.theta);
            const idealY=playerPos.y+cameraDistance*Math.cos(cameraAngle.phi)+1.5;
            const idealZ=playerPos.z+cameraDistance*Math.sin(cameraAngle.phi)*Math.cos(cameraAngle.theta);
            const lookTarget=new THREE.Vector3(playerPos.x,playerPos.y+.8,playerPos.z);
            const rayDir=new THREE.Vector3(idealX,idealY,idealZ).sub(lookTarget);const rayLen=rayDir.length();rayDir.divideScalar(rayLen);
            camRay.set(lookTarget,rayDir);camRay.far=rayLen;
            const hits=camRay.intersectObjects(cameraColliders,true);
            const maxDist=hits.length>0?Math.max(hits[0].distance-.3,.5):rayLen;
            const target=Math.min(cameraDistance,maxDist);const lf=target<occludedCamDist?.65:.055;
            occludedCamDist+=(target-occludedCamDist)*lf;occludedCamDist=Math.max(occludedCamDist,.5);
            const sd=occludedCamDist;
            camera.position.set(playerPos.x+sd*Math.sin(cameraAngle.phi)*Math.sin(cameraAngle.theta)+shX,Math.max(FLOOR_Y+.3,playerPos.y+sd*Math.cos(cameraAngle.phi)+1.5+bob)+shY,playerPos.z+sd*Math.sin(cameraAngle.phi)*Math.cos(cameraAngle.theta));
            camera.lookAt(lookTarget);
        }
        if(skyDome)skyDome.position.copy(camera.position);
        renderer.render(scene,camera);
    }

    // âââ Extension class ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    class Grug3D {
        getInfo() {
            return {
                id:'grug3D', name:'Grug 3D', color1:'#ED773D',
                blocks:[
                    {opcode:'clearRoom',       blockType:Scratch.BlockType.COMMAND,  text:'Clear room'},
                    {opcode:'setLayer',        blockType:Scratch.BlockType.COMMAND,  text:'Layer [LAYER]',arguments:{LAYER:{type:Scratch.ArgumentType.NUMBER,menu:'layerMenu',defaultValue:1}}},
                    {opcode:'setFloor',        blockType:Scratch.BlockType.COMMAND,  text:'Floor [COSTUME]',arguments:{COSTUME:{type:Scratch.ArgumentType.NUMBER,defaultValue:0}}},
                    {opcode:'setSkybox',       blockType:Scratch.BlockType.COMMAND,  text:'Set skybox [COSTUME]',arguments:{COSTUME:{type:Scratch.ArgumentType.NUMBER,defaultValue:0}}},
                    {opcode:'setTimeOfDay',    blockType:Scratch.BlockType.COMMAND,  text:'Time of day [HOUR]',arguments:{HOUR:{type:Scratch.ArgumentType.NUMBER,defaultValue:12}}},
                    {opcode:'setSunPosition',  blockType:Scratch.BlockType.COMMAND,  text:'Sun X [X] Y [Y]',arguments:{X:{type:Scratch.ArgumentType.NUMBER,defaultValue:45},Y:{type:Scratch.ArgumentType.NUMBER,defaultValue:45}}},
                    {opcode:'setScreenEffect', blockType:Scratch.BlockType.COMMAND,  text:'Screen effect [EFFECT] intensity [INTENSITY]',arguments:{EFFECT:{type:Scratch.ArgumentType.STRING,menu:'effectMenu',defaultValue:'brightness'},INTENSITY:{type:Scratch.ArgumentType.NUMBER,defaultValue:1.5}}},
                    {opcode:'clearScreenEffects',blockType:Scratch.BlockType.COMMAND,text:'Clear screen effects'},
                    {opcode:'setGuiY',         blockType:Scratch.BlockType.COMMAND,  text:'GUI Y [MARGIN]',arguments:{MARGIN:{type:Scratch.ArgumentType.NUMBER,defaultValue:-120}}},
                    {opcode:'setCamera',       blockType:Scratch.BlockType.COMMAND,  text:'Set camera Orbit X [H] Y [V] Zoom [ZOOM]',arguments:{H:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},V:{type:Scratch.ArgumentType.NUMBER,defaultValue:45},ZOOM:{type:Scratch.ArgumentType.NUMBER,defaultValue:10}}},
                    {opcode:'addWall',         blockType:Scratch.BlockType.COMMAND,  text:'Wall [MATRIX] Side [COSTUME] Top [TOP] Bottom [BOTTOM] at [SECTOR] Height [HEIGHT] Offset X [OFFSET_X] Z [OFFSET_Z] shine [SHEEN]',arguments:{MATRIX:{type:Scratch.ArgumentType.MATRIX,defaultValue:'1111110001100011000111111'},COSTUME:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},TOP:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},BOTTOM:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},SECTOR:{type:Scratch.ArgumentType.MATRIX,defaultValue:'1010100100000001101110001'},HEIGHT:{type:Scratch.ArgumentType.STRING,defaultValue:'1'},OFFSET_X:{type:Scratch.ArgumentType.STRING,defaultValue:'0'},OFFSET_Z:{type:Scratch.ArgumentType.STRING,defaultValue:'0'},SHEEN:{type:Scratch.ArgumentType.STRING,defaultValue:'0'}}},
                    {opcode:'addNPC',          blockType:Scratch.BlockType.COMMAND,  text:'NPC [COSTUME] at [X] [Z] behavior [BEHAVIOR]',arguments:{COSTUME:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},X:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},Z:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},BEHAVIOR:{type:Scratch.ArgumentType.STRING,menu:'npcBehaviorMenu',defaultValue:'look at player'}}},
                    {opcode:'spriteAsModel',   blockType:Scratch.BlockType.COMMAND,  text:'Sprite as model [TYPE]',arguments:{TYPE:{type:Scratch.ArgumentType.STRING,menu:'modelTypeMenu',defaultValue:'block'}}},
                    {opcode:'setSpriteModelY', blockType:Scratch.BlockType.COMMAND,  text:'Sprite\'s model Y [Y]',arguments:{Y:{type:Scratch.ArgumentType.NUMBER,defaultValue:0}}},
                    {opcode:'setPlayerSpeed',  blockType:Scratch.BlockType.COMMAND,  text:'Player speed [SPEED]',arguments:{SPEED:{type:Scratch.ArgumentType.NUMBER,defaultValue:0.12}}},
                    {opcode:'setPlayerXYZ',    blockType:Scratch.BlockType.COMMAND,  text:'Set player X [X] Y [Y] Z [Z]',arguments:{X:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},Y:{type:Scratch.ArgumentType.NUMBER,defaultValue:0},Z:{type:Scratch.ArgumentType.NUMBER,defaultValue:0}}},
                    {opcode:'getPlayerX',      blockType:Scratch.BlockType.REPORTER, text:'Player X'},
                    {opcode:'getPlayerY',      blockType:Scratch.BlockType.REPORTER, text:'Player Y'},
                    {opcode:'getPlayerZ',      blockType:Scratch.BlockType.REPORTER, text:'Player Z'},
                ],
                menus:{
                    layerMenu:{acceptReporters:true,items:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16']},
                    effectMenu:{acceptReporters:false,items:['brightness','saturation','contrast','blur','sepia','hue-rotate','grayscale','invert']},
                    modelTypeMenu:{acceptReporters:false,items:['block','NPC']},
                    npcBehaviorMenu:{acceptReporters:false,items:['idle','look at player','wander']},
                }
            };
        }

        clearRoom() {
            initThree();
            // Cancel any pending greedy mesh rebuild
            if(greedyMeshTimer){clearTimeout(greedyMeshTimer);greedyMeshTimer=null;}
            // Clear world geometry
            while(worldContainer.children.length)worldContainer.remove(worldContainer.children[0]);
            while(floorGroup.children.length)floorGroup.remove(floorGroup.children[0]);
            // Dispose greedy mesh geometry
            greedyMeshObjects.forEach(m=>m.geometry.dispose());greedyMeshObjects=[];
            // Clear block data and material cache
            materialBlocks.clear();
            materialCache.forEach(mat=>{if(mat.map)mat.map.dispose();mat.dispose();});materialCache.clear();
            // Clear floor bookkeeping â all floors are gone
            placedFloorsMap.clear();placedFloorsList.length=0;
            // Clear sprite-bound models
            spriteModels.forEach(entry=>{if(entry.model&&entry.model.parent)entry.model.parent.remove(entry.model);});
            spriteModels.clear();
            colliders=[];cameraColliders=[];npcInstances=[];activeLayer=1;
            // Restore default 360 skybox
            usingCustomSkybox=true;if(skyDome)skyDome.visible=false;
            new THREE.TextureLoader().load(defaultSkyboxUrl,(tex)=>{tex.mapping=THREE.EquirectangularReflectionMapping;scene.background=tex;});
            addBoundaries();
        }

        setLayer(args)    {activeLayer=Math.max(1,Math.min(16,parseInt(args.LAYER)||1));}
        setGuiY(args)     {bottomMargin=parseFloat(args.MARGIN)||0;updateRendererLayout();}
        setTimeOfDay(args){initThree();applyTimeOfDay(parseFloat(args.HOUR)||12);}

        setSunPosition(args){
            initThree();
            const az=(parseFloat(args.X)||45)*Math.PI/180, el=Math.max(-5,Math.min(90,parseFloat(args.Y)||45))*Math.PI/180;
            const sx=Math.sin(az)*Math.cos(el),sy=Math.sin(el),sz=Math.cos(az)*Math.cos(el);
            if(sunLight)sunLight.position.set(sx*40,sy*40+1,sz*40);
            if(skyDome&&skyDome.visible&&skyDome.material.uniforms)skyDome.material.uniforms.sunDir.value.set(sx,sy,sz).normalize();
        }

        setScreenEffect(args){
            initThree();
            const effect=String(args.EFFECT||'brightness').toLowerCase().trim();
            const val=parseFloat(args.INTENSITY);
            if(effect in EFFECT_FNS){screenEffects[effect]=isNaN(val)?1:val;applyScreenEffects();}
        }
        clearScreenEffects(){Object.keys(screenEffects).forEach(k=>delete screenEffects[k]);applyScreenEffects();}

        setCamera(args){
            initThree();
            cameraAngle.theta=(parseFloat(args.H)||0)*(Math.PI/180);
            cameraAngle.phi=(parseFloat(args.V)||45)*(Math.PI/180);
            targetCameraDistance=parseFloat(args.ZOOM)||10;
        }

        setFloor(args,util){
            initThree();
            const url=this._getCostume(args.COSTUME,util,bootFloorTexture);
            // If no floor exists yet, create one at the origin chunk
            if(placedFloorsList.length===0){
                const floorMat=new THREE.MeshLambertMaterial({transparent:true,side:THREE.DoubleSide});
                new THREE.TextureLoader().load(url,(tex)=>{tex.wrapS=tex.wrapT=THREE.ClampToEdgeWrapping;floorMat.map=tex;floorMat.needsUpdate=true;});
                const floor=new THREE.Mesh(new THREE.PlaneGeometry(25,25),floorMat);
                floor.rotation.x=-Math.PI/2;floor.position.set(0,-0.01,0);floor.receiveShadow=true;
                floorGroup.add(floor);
                placedFloorsMap.set('0,0',floor);
                placedFloorsList.push(floor);
                return;
            }
            // Retexture the most recent floor only â earlier floors stay as they were
            const target=placedFloorsList[placedFloorsList.length-1];
            new THREE.TextureLoader().load(url,(tex)=>{
                tex.wrapS=tex.wrapT=THREE.ClampToEdgeWrapping;
                if(target.material.map)target.material.map.dispose();
                target.material.map=tex;
                target.material.needsUpdate=true;
            });
        }

        setSkybox(args,util){
            initThree();const url=this._getCostume(args.COSTUME,util,defaultSkyboxUrl);
            usingCustomSkybox=true;if(skyDome)skyDome.visible=false;
            new THREE.TextureLoader().load(url,(texture)=>{texture.mapping=THREE.EquirectangularReflectionMapping;scene.background=texture;});
        }

        addWall(args,util){
            initThree();
            const m=String(args.MATRIX).split('').map(v=>parseInt(v)||0);
            const s=String(args.SECTOR).split('').map(v=>parseInt(v)||0);
            const shininess=parseSheen(args.SHEEN);
            const sideTex=getTexture(this._getCostume(args.COSTUME,util,defaultSideTexture));
            const topTex =getTexture(this._getCostume(args.TOP,    util,defaultTopTexture));
            const botTex =getTexture(this._getCostume(args.BOTTOM, util,defaultTopTexture));

            // New args â fall back to legacy defaults so old projects work unchanged
            const height=Math.max(1,Math.floor(parseFloat(args.HEIGHT))||1);
            const offX=Math.floor(parseFloat(args.OFFSET_X))||0;
            const offZ=Math.floor(parseFloat(args.OFFSET_Z))||0;

            // Auto-generate a floor for this chunk if none exists at this offset
            const floorKey=`${offX},${offZ}`;
            if(!placedFloorsMap.has(floorKey)){
                const autoMat=new THREE.MeshLambertMaterial({color:0xffffff,transparent:true,side:THREE.DoubleSide});
                new THREE.TextureLoader().load(bootFloorTexture,(tex)=>{tex.wrapS=tex.wrapT=THREE.RepeatWrapping;autoMat.map=tex;autoMat.needsUpdate=true;});
                const autoFloor=new THREE.Mesh(new THREE.PlaneGeometry(25,25),autoMat);
                autoFloor.rotation.x=-Math.PI/2;
                autoFloor.position.set(offX*25,-0.01,offZ*25);
                autoFloor.receiveShadow=true;
                floorGroup.add(autoFloor);
                placedFloorsMap.set(floorKey,autoFloor);
                placedFloorsList.push(autoFloor);
            }

            // Material key: identifies this unique combination of textures + shininess
            const texKey=(t)=>t?t.uuid:'null';
            const matKey=`${texKey(sideTex)}|${texKey(topTex)}|${texKey(botTex)}|${shininess}`;

            if(!materialBlocks.has(matKey)){
                materialBlocks.set(matKey,{sideTex,topTex,botTex,shininess,blocks:new Map()});
            }
            const matData=materialBlocks.get(matKey);

            // Stack `height` layers, each shifted by the chunk offset
            const wx=offX*25, wz=offZ*25;
            for(let layer=0;layer<height;layer++){
                const yPos=activeLayer-0.5+layer;
                if(!matData.blocks.has(yPos))matData.blocks.set(yPos,new Set());
                const ySet=matData.blocks.get(yPos);
                this._buildFromMatrix(m,s,(x,z)=>{ySet.add(`${x+wx},${z+wz}`);});
            }
            scheduleGreedyMesh();
        }

        addNPC(args,util){
            initThree();
            const url=this._getCostume(args.COSTUME,util,defaultPlayerTexture);
            const tex=getTexture(url,true);const npcGroup=new THREE.Group();
            const spawnX=parseFloat(args.X)||0, spawnZ=parseFloat(args.Z)||0;
            npcGroup.position.set(spawnX,0,spawnZ);
            // Per-NPC behavior state
            npcGroup.behavior=String(args.BEHAVIOR||'look at player').toLowerCase();
            npcGroup.spawnX=spawnX; npcGroup.spawnZ=spawnZ;
            npcGroup.wanderDir=Math.random()*Math.PI*2;
            npcGroup.wanderTimer=0;
            new THREE.OBJLoader().load(objModelUrl,(object)=>{
                const size=new THREE.Vector3();new THREE.Box3().setFromObject(object).getSize(size);const scale=1/(size.y||1);
                const layer=object.clone();
                layer.traverse(c=>{if(c.isMesh){c.material=new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide});c.castShadow=true;}});
                layer.scale.set(scale,scale,scale);const center=new THREE.Box3().setFromObject(layer).getCenter(new THREE.Vector3());layer.position.set(-center.x,0,-center.z);npcGroup.add(layer);
            });
            worldContainer.add(npcGroup);npcInstances.push(npcGroup);
        }

        // ââ Sprite â 3D model binding ââââââââââââââââââââââââââââââââââââââââ
        // Each sprite or clone that runs this block gets its own 3D model that
        // mirrors the sprite's x (â object X), y (â object Z), size and
        // direction in real time. When the sprite or clone is deleted, the
        // associated model is removed automatically (see animate loop).
        spriteAsModel(args,util){
            initThree();
            const target=util.target;
            if(!target)return;
            const type=String(args.TYPE||'block').toLowerCase();
            const costumes=target.sprite&&target.sprite.costumes;
            if(!costumes||!costumes.length)return;
            const costume=costumes[target.currentCostume]||costumes[0];
            const url=costume.asset.encodeDataURI();
            const tex=getTexture(url,true);

            // If this target already has a model, remove the old one first
            const existing=spriteModels.get(target.id);
            if(existing&&existing.model&&existing.model.parent){
                existing.model.parent.remove(existing.model);
            }

            let model;
            if(type==='npc'){
                model=new THREE.Group();
                new THREE.OBJLoader().load(objModelUrl,(object)=>{
                    const size=new THREE.Vector3();new THREE.Box3().setFromObject(object).getSize(size);
                    const scale=1/(size.y||1);
                    const layer=object.clone();
                    layer.traverse(c=>{if(c.isMesh){c.material=new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide});c.castShadow=true;}});
                    layer.scale.set(scale,scale,scale);
                    const center=new THREE.Box3().setFromObject(layer).getCenter(new THREE.Vector3());
                    layer.position.set(-center.x,0,-center.z);
                    model.add(layer);
                });
            }else{ // 'block' â a textured cube
                const mat=new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide});
                model=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),mat);
                model.castShadow=true;
            }

            worldContainer.add(model);
            spriteModels.set(target.id,{
                model, type,
                userY:existing?existing.userY:0,
                costumeName:costume.name
            });
        }

        setSpriteModelY(args,util){
            const target=util.target;
            if(!target)return;
            const entry=spriteModels.get(target.id);
            if(entry)entry.userY=parseFloat(args.Y)||0;
        }

        setPlayerSpeed(args){playerSpeed=parseFloat(args.SPEED)||.12;}
        setPlayerXYZ(args){initThree();const nx=parseFloat(args.X),ny=parseFloat(args.Y),nz=parseFloat(args.Z);playerPos.set(isNaN(nx)?playerPos.x:nx,isNaN(ny)?playerPos.y:ny,isNaN(nz)?playerPos.z:nz);}
        getPlayerX(){return playerPos?Math.round(playerPos.x*100)/100:0;}
        getPlayerY(){return playerPos?Math.round(playerPos.y*100)/100:0;}
        getPlayerZ(){return playerPos?Math.round(playerPos.z*100)/100:0;}

        _buildFromMatrix(m,s,callback){
            const sectorSize=5,worldOffset=-12;
            s.forEach((activeS,si)=>{if(!activeS)return;const sr=Math.floor(si/5),sc=si%5;m.forEach((activeM,mi)=>{if(!activeM)return;const mr=Math.floor(mi/5),mc=mi%5;callback(sc*sectorSize+mc+worldOffset,sr*sectorSize+mr+worldOffset);});});
        }
        _getCostume(num,util,fallback){
            const index=Math.floor(num)-1;const costumes=util.target.sprite.costumes;
            return(index>=0&&index<costumes.length)?costumes[index].asset.encodeDataURI():fallback;
        }
    }

    // âââ Bootstrap ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
    const loadScript=(url)=>new Promise(r=>{const s=document.createElement('script');s.src=url;s.onload=r;document.head.appendChild(s);});
    if(typeof THREE==='undefined'){
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
        .then(()=>loadScript('https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/js/loaders/OBJLoader.js'))
        .then(()=>{Scratch.extensions.register(new Grug3D());setTimeout(initThree,100);});
    }else{Scratch.extensions.register(new Grug3D());setTimeout(initThree,100);}

})(Scratch);