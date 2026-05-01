(function() {
    class StageGeneratorAI {
        getInfo() {
            return {
                id: 'stageGenAIv6',
                name: 'AI Maze Generator',
                color1: '#ff00ff',
                color2: '#8000ff',
                menuIconURI: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0icmVkIi8+PHRleHQgeD0iMjAiIHk9IjI4IiBmb250LWZhbWlseT0iU2Fucy1TZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5BSTwvdGV4dD48L3N2Zz4=',
                blocks: [
                    {
                        opcode: 'generateMaze',
                        blockType: 'command',
                        text: 'Auto-generate maze using AI'
                    }
                ]
            };
        }

        async generateMaze(args, util) {
            const target = util.target;
            const stepSize = 40; // Grid size
            const visited = new Set();
            
            // A helper for recording coordinates.
            const getPosKey = (x, y) => `${Math.round(x)},${Math.round(y)}`;
            
            //Record Start Position
            visited.add(getPosKey(target.x, target.y));

            // Recursively Digging Paths (Simplified Digging Algorithm)
            const dig = async (x, y) => {
                const dirs = [
                    { dx: 0, dy: stepSize, angle: 0 },
                    { dx: 0, dy: -stepSize, angle: 180 },
                    { dx: stepSize, dy: 0, angle: 90 },
                    { dx: -stepSize, dy: 0, angle: -90 }
                ].sort(() => Math.random() - 0.5); // Shuffle directions

                for (const d of dirs) {
                    const nextX = x + d.dx;
                    const nextY = y + d.dy;
                    const key = getPosKey(nextX, nextY);

                    // If within the screen boundaries and at an unvisited location, proceed.
                    if (nextX > -240 && nextX < 240 && nextY > -180 && nextY < 180 && !visited.has(key)) {
                        visited.add(key);
                        
                        // Move (Draws if the pen is down)
                        target.setDirection(d.angle);
                        target.setXY(nextX, nextY);
                        
                        // Waiting a moment to allow some movement to develop.
                        await new Promise(resolve => setTimeout(resolve, 50));
                        
                        await dig(nextX, nextY);
                        
                        // Backtrack (If you hit a dead end, go back and look for another path.)
                        target.setXY(x, y);
                    }
                }
            };

            await dig(target.x, target.y);
            alert('Maze generation finished!');
        }
    }

    Scratch.extensions.register(new StageGeneratorAI());
})();