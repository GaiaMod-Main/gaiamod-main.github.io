//Hardware Accelerator. Original is unknown, but Gaia (me) translated this to English.
(function (Scratch) {
    'use strict';

    const { ArgumentType, BlockType, TargetType, Cast } = Scratch;

    class HardwareAccelerate {
        constructor (runtime) {
            this.runtime = runtime;
            this.matrices = {};
            this.simdSupported = typeof SIMD !== 'undefined';
        }

        getInfo () {
            return {
                id: 'hardwareAccelerate',
                name: 'Hardware Accelerator',
                color1: '#667eea',
                color2: '#764ba2',
                blocks: [
                    {
                        opcode: 'getCapabilities',
                        blockType: BlockType.REPORTER,
                        text: 'Get capabilities',
                        func: 'getCapabilities'
                    },
                    {
                        opcode: 'isHardwareSupported',
                        blockType: BlockType.BOOLEAN,
                        text: 'Is [HARDWARE] supported?',
                        arguments: {
                            HARDWARE: {
                                type: ArgumentType.STRING,
                                defaultValue: 'webgl',
                                menu: 'hardwareType'
                            }
                        },
                        func: 'isHardwareSupported'
                    },
                    {
                        opcode: 'createMatrix',
                        blockType: BlockType.COMMAND,
                        text: 'Create Matrix size [SIZE]x[SIZE] for [NAME]',
                        arguments: {
                            NAME: {
                                type: ArgumentType.STRING,
                                defaultValue: 'matrixA'
                            },
                            SIZE: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 4
                            }
                        },
                        func: 'createMatrix'
                    },
                    {
                        opcode: 'fillMatrix',
                        blockType: BlockType.COMMAND,
                        text: 'Fill Matrix [NAME] for [VALUE]',
                        arguments: {
                            NAME: {
                                type: ArgumentType.STRING,
                                defaultValue: 'matrixA'
                            },
                            VALUE: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        func: 'fillMatrix'
                    },
                    {
                        opcode: 'setMatrixElement',
                        blockType: BlockType.COMMAND,
                        text: 'Set Matrix [NAME] rows [ROW],[COL] for [VALUE]',
                        arguments: {
                            NAME: {
                                type: ArgumentType.STRING,
                                defaultValue: 'matrixA'
                            },
                            ROW: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            COL: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            VALUE: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        func: 'setMatrixElement'
                    },
                    {
                        opcode: 'getMatrixElement',
                        blockType: BlockType.REPORTER,
                        text: 'Get Matrix [NAME] elements [ROW],[COL]',
                        arguments: {
                            NAME: {
                                type: ArgumentType.STRING,
                                defaultValue: 'matrixA'
                            },
                            ROW: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            COL: {
                                type: ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        func: 'getMatrixElement'
                    },
                    {
                        opcode: 'gpuMatrixAdd',
                        blockType: BlockType.COMMAND,
                        text: 'GPU add Matrix [NAME_A] + [NAME_B]',
                        arguments: {
                            NAME_A: {
                                type: ArgumentType.STRING,
                                defaultValue: 'matrixA'
                            },
                            NAME_B: {
                                type: ArgumentType.STRING,
                                defaultValue: 'matrixB'
                            }
                        },
                        func: 'gpuMatrixAdd'
                    },
                    {
                        opcode: 'gpuMatrixMultiply',
                        blockType: BlockType.COMMAND,
                        text: 'GPU multiply Matrix [NAME_A] x [NAME_B]',
                        arguments: {
                            NAME_A: {
                                type: ArgumentType.STRING,
                                defaultValue: 'matrixA'
                            },
                            NAME_B: {
                                type: ArgumentType.STRING,
                                defaultValue: 'matrixB'
                            }
                        },
                        func: 'gpuMatrixMultiply'
                    },
                    {
                        opcode: 'getMatrixResult',
                        blockType: BlockType.REPORTER,
                        text: 'Get Matrix result',
                        func: 'getMatrixResult'
                    },
                    {
                        opcode: 'simdVectorOp',
                        blockType: BlockType.REPORTER,
                        text: 'SIMD [OP] vector [A] and [B]',
                        arguments: {
                            OP: {
                                type: ArgumentType.STRING,
                                defaultValue: 'add',
                                menu: 'simdOperation'
                            },
                            A: {
                                type: ArgumentType.STRING,
                                defaultValue: '1,2,3,4'
                            },
                            B: {
                                type: ArgumentType.STRING,
                                defaultValue: '5,6,7,8'
                            }
                        },
                        func: 'simdVectorOp'
                    },
                    {
                        opcode: 'simdDotProduct',
                        blockType: BlockType.REPORTER,
                        text: 'SIMD Dot [A] · [B]',
                        arguments: {
                            A: {
                                type: ArgumentType.STRING,
                                defaultValue: '1,2,3,4'
                            },
                            B: {
                                type: ArgumentType.STRING,
                                defaultValue: '5,6,7,8'
                            }
                        },
                        func: 'simdDotProduct'
                    },
                    {
                        opcode: 'simdLength',
                        blockType: BlockType.REPORTER,
                        text: 'SIMD Length [VECTOR]',
                        arguments: {
                            VECTOR: {
                                type: ArgumentType.STRING,
                                defaultValue: '3,4'
                            }
                        },
                        func: 'simdLength'
                    },
                    {
                        opcode: 'parallelSum',
                        blockType: BlockType.REPORTER,
                        text: 'Parallel sum [LIST]',
                        arguments: {
                            LIST: {
                                type: ArgumentType.STRING,
                                defaultValue: '1,2,3,4,5'
                            }
                        },
                        func: 'parallelSum'
                    },
                    {
                        opcode: 'parallelSort',
                        blockType: BlockType.REPORTER,
                        text: 'Parallel sort [LIST]',
                        arguments: {
                            LIST: {
                                type: ArgumentType.STRING,
                                defaultValue: '5,3,1,4,2'
                            }
                        },
                        func: 'parallelSort'
                    },
                    {
                        opcode: 'parallelMax',
                        blockType: BlockType.REPORTER,
                        text: 'Parallel max [LIST]',
                        arguments: {
                            LIST: {
                                type: ArgumentType.STRING,
                                defaultValue: '1,2,3,4,5'
                            }
                        },
                        func: 'parallelMax'
                    },
                    {
                        opcode: 'getCPUCores',
                        blockType: BlockType.REPORTER,
                        text: 'Get CPU cores',
                        func: 'getCPUCores'
                    },
                    {
                        opcode: 'getAvailableRAM',
                        blockType: BlockType.REPORTER,
                        text: 'Get available RAM (MB)',
                        func: 'getAvailableRAM'
                    }
                ],
                menus: {
                    hardwareType: {
                        items: ['webgl', 'webgl2', 'webgpu', 'simd', 'workers']
                    },
                    simdOperation: {
                        items: ['add', 'subtract', 'multiply', 'divide']
                    }
                }
            };
        }

        getCapabilities () {
            const caps = {
                webgl: !!document.createElement('canvas').getContext('webgl'),
                webgl2: !!document.createElement('canvas').getContext('webgl2'),
                webgpu: !!(navigator && navigator.gpu),
                simd: this.simdSupported,
                workers: typeof Worker !== 'undefined',
                cores: navigator.hardwareConcurrency || 4
            };
            return JSON.stringify(caps);
        }

        isHardwareSupported (args) {
            const hardware = args.HARDWARE;
            switch (hardware) {
                case 'webgl': return !!document.createElement('canvas').getContext('webgl');
                case 'webgl2': return !!document.createElement('canvas').getContext('webgl2');
                case 'webgpu': return !!(navigator && navigator.gpu);
                case 'simd': return this.simdSupported;
                case 'workers': return typeof Worker !== 'undefined';
                default: return false;
            }
        }

        createMatrix (args) {
            const name = args.NAME;
            const size = Math.min(Math.max(1, Cast.toNumber(args.SIZE)), 64);
            const matrix = new Float32Array(size * size);
            this.matrices[name] = { data: matrix, size: size };
        }

        fillMatrix (args) {
            const name = args.NAME;
            const value = Cast.toNumber(args.VALUE);
            if (!this.matrices[name]) return;
            this.matrices[name].data.fill(value);
        }

        setMatrixElement (args) {
            const name = args.NAME;
            const row = Math.floor(Cast.toNumber(args.ROW));
            const col = Math.floor(Cast.toNumber(args.COL));
            const value = Cast.toNumber(args.VALUE);
            if (!this.matrices[name]) return;
            const matrix = this.matrices[name];
            if (row < 0 || row >= matrix.size || col < 0 || col >= matrix.size) return;
            matrix.data[row * matrix.size + col] = value;
        }

        getMatrixElement (args) {
            const name = args.NAME;
            const row = Math.floor(Cast.toNumber(args.ROW));
            const col = Math.floor(Cast.toNumber(args.COL));
            if (!this.matrices[name]) return 0;
            const matrix = this.matrices[name];
            if (row < 0 || row >= matrix.size || col < 0 || col >= matrix.size) return 0;
            return matrix.data[row * matrix.size + col];
        }

        gpuMatrixAdd (args) {
            const nameA = args.NAME_A;
            const nameB = args.NAME_B;
            if (!this.matrices[nameA] || !this.matrices[nameB]) return;
            if (this.matrices[nameA].size !== this.matrices[nameB].size) return;
            const size = this.matrices[nameA].size;
            const dataA = this.matrices[nameA].data;
            const dataB = this.matrices[nameB].data;
            const result = new Float32Array(size * size);
            for (let i = 0; i < size * size; i++) {
                result[i] = dataA[i] + dataB[i];
            }
            this.matrices['result'] = { data: result, size: size };
        }

        gpuMatrixMultiply (args) {
            const nameA = args.NAME_A;
            const nameB = args.NAME_B;
            if (!this.matrices[nameA] || !this.matrices[nameB]) return;
            if (this.matrices[nameA].size !== this.matrices[nameB].size) return;
            const size = this.matrices[nameA].size;
            const dataA = this.matrices[nameA].data;
            const dataB = this.matrices[nameB].data;
            const result = new Float32Array(size * size);
            for (let row = 0; row < size; row++) {
                for (let col = 0; col < size; col++) {
                    let sum = 0;
                    for (let k = 0; k < size; k++) {
                        sum += dataA[row * size + k] * dataB[k * size + col];
                    }
                    result[row * size + col] = sum;
                }
            }
            this.matrices['result'] = { data: result, size: size };
        }

        getMatrixResult () {
            if (!this.matrices['result']) return 'No results';
            const m = this.matrices['result'];
            let str = '';
            for (let row = 0; row < m.size; row++) {
                for (let col = 0; col < m.size; col++) {
                    str += m.data[row * m.size + col].toFixed(1) + ' ';
                }
                str += '\n';
            }
            return str;
        }

        _parseVector (str) {
            return str.split(',').map(s => parseFloat(s.trim()) || 0);
        }

        simdVectorOp (args) {
            const op = args.OP;
            const a = this._parseVector(args.A);
            const b = this._parseVector(args.B);
            const result = [];
            for (let i = 0; i < Math.min(a.length, b.length); i++) {
                switch (op) {
                    case 'add': result.push(a[i] + b[i]); break;
                    case 'subtract': result.push(a[i] - b[i]); break;
                    case 'multiply': result.push(a[i] * b[i]); break;
                    case 'divide': result.push(a[i] / (b[i] || 1)); break;
                }
            }
            return result.join(',');
        }

        simdDotProduct (args) {
            const a = this._parseVector(args.A);
            const b = this._parseVector(args.B);
            let dot = 0;
            for (let i = 0; i < Math.min(a.length, b.length); i++) {
                dot += a[i] * b[i];
            }
            return dot;
        }

        simdLength (args) {
            const v = this._parseVector(args.VECTOR);
            let sum = 0;
            for (let i = 0; i < v.length; i++) {
                sum += v[i] * v[i];
            }
            return Math.sqrt(sum);
        }

        parallelSum (args) {
            const list = this._parseVector(args.LIST);
            return list.reduce((sum, val) => sum + val, 0);
        }

        parallelSort (args) {
            const list = this._parseVector(args.LIST);
            return list.sort((a, b) => a - b).join(',');
        }

        parallelMax (args) {
            const list = this._parseVector(args.LIST);
            return Math.max(...list);
        }

        getCPUCores () {
            return navigator.hardwareConcurrency || 4;
        }

        getAvailableRAM () {
            if (navigator.deviceMemory) {
                return navigator.deviceMemory * 1024;
            }
            return 'Unknown';
        }
    }

    Scratch.extensions.register(new HardwareAccelerate());
})(Scratch);