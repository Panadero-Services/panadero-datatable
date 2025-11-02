// vendor/panadero/panadero-solarsysinvaders/client/src/composables/useGameLoop.js
import { ref } from 'vue';

// Add frame counters at the top of the composable
let frameCount = 0;
const STARFIELD_UPDATE_RATE = 30;  // Update every 30 frames
const RESOURCE_UPDATE_RATE = 60;   // Update every 60 frames

export function useGameLoop({ 
    camera,
    ship,
    gameState,
    canvasManager,
    drawStarfield,
    drawHome,
    drawSafeZone,
    drawResourceField,
    drawCollectible,
    drawBlackHole,
    drawBullet,
    drawShip,
    updateAndRenderParticles,
    prevPositions,
    GAME_CONFIG,
    worldToScreen,
    shipInfo,
    score,
    socket,
    isInSafeZone
}) {
    const isRunning = ref(false);
    const loopId = ref(null);  // Make it a ref so it's in the proper scope
    let frameTime = 0;  // Simple variable, not a ref

const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString().substr(11, 12);  // Returns HH:MM:SS.mmm
};



        
        const loop = () => {
            if (!isRunning.value) return;
            
            const frameStart = performance.now();
            let partTime = 0;

            // 1. Camera update timing
            const cameraStart = performance.now();
            if (ship.value) {
                const targetX = ship.value.x;
                const targetY = ship.value.y;
                camera.value.x += (targetX - camera.value.x) * 0.1;
                camera.value.y += (targetY - camera.value.y) * 0.1;
            }
            partTime = performance.now() - cameraStart;
            if (partTime > 5) console.debug("Time:",  formatTime(Date.now()), 'Heavy camera update:', Math.round(partTime), 'ms');

            // 2. Starfield timing
            const starStart = performance.now();
            drawStarfield(canvasManager.value.ctx, camera.value);
            partTime = performance.now() - starStart;
            if (partTime > 15) console.debug("Time:",  formatTime(Date.now()), 'Heavy starfield:', Math.round(partTime), 'ms');

            // 3. Game objects timing
            const objectsStart = performance.now();
            // Only draw objects that are in view
            const viewportBounds = {
                left: camera.value.x - (GAME_CONFIG.CANVAS_WIDTH / 2 / camera.value.scale),
                right: camera.value.x + (GAME_CONFIG.CANVAS_WIDTH / 2 / camera.value.scale),
                top: camera.value.y - (GAME_CONFIG.CANVAS_HEIGHT / 2 / camera.value.scale),
                bottom: camera.value.y + (GAME_CONFIG.CANVAS_HEIGHT / 2 / camera.value.scale)
            };

            // Draw everything that's visible
            if (gameState.value?.resourceFields) {
                for (const field of Object.values(gameState.value.resourceFields)) {
                    if (field.x >= viewportBounds.left && field.x <= viewportBounds.right &&
                        field.y >= viewportBounds.top && field.y <= viewportBounds.bottom) {
                        drawResourceField(canvasManager.value.ctx, field, worldToScreen, camera.value);
                    }
                }
            }

            // Keep the direct coordinate version for testing
            //drawBlackHole(canvasManager.value.ctx, -500, -500, camera.value);

            // And fix the game state version
            //console.debug('Black holes:', gameState.value?.blackHoles);

            if (gameState.value?.blackHoles) {
                //console.debug('Black holes in game loop:', gameState.value.blackHoles);
                // Use Object.entries since we're getting an object from the server
                for (const [id, blackHole] of Object.entries(gameState.value.blackHoles)) {
                    // Add debug log to see what we're drawing
                   // console.debug('Drawing black hole:', blackHole);
                  
                    drawBlackHole(
                        canvasManager.value.ctx,
                        blackHole.x,
                        blackHole.y,
                        camera.value
                    );
                }
            }
            
            // Draw home positions first (so they appear behind ships)
            if (gameState.value?.homePositions) {
                for (const homePosition of Object.values(gameState.value.homePositions)) {
                    drawSafeZone(canvasManager.value.ctx, homePosition, worldToScreen, camera.value);
                    drawHome(canvasManager.value.ctx, homePosition, worldToScreen, camera.value);
                }
            }

            // Draw collectibles
            if (gameState.value?.collectibles) {
                for (const collectible of Object.values(gameState.value.collectibles)) {
                    drawCollectible(canvasManager.value.ctx, collectible, worldToScreen, camera.value);
                }
            }

            // Dynamic elements (ships, bullets) need every frame updates
            if (gameState.value?.bullets) {
                gameState.value.bullets.forEach(bullet => {
                    drawBullet(canvasManager.value.ctx, bullet, worldToScreen, camera.value);
                });
            }

            // Add particle rendering
            updateAndRenderParticles(canvasManager.value.ctx, worldToScreen, camera.value);
            
            // Draw all players from game state
            for (const [id, playerState] of Object.entries(gameState.value.players)) {
                // Initialize previous position if not exists
                if (!prevPositions.value.has(id)) {
                    prevPositions.value.set(id, {
                        x: playerState.position.x,
                        y: playerState.position.y
                    });
                }

                const prevPos = prevPositions.value.get(id);
                
                // Interpolate position
                const lerpPos = {
                    x: prevPos.x + (playerState.position.x - prevPos.x) * GAME_CONFIG.LERP_FACTOR,
                    y: prevPos.y + (playerState.position.y - prevPos.y) * GAME_CONFIG.LERP_FACTOR
                };

                // Draw with interpolated position
                drawShip(canvasManager.value.ctx, {
                    ...playerState,
                    position: lerpPos
                }, worldToScreen, camera.value);

                // Store interpolated position for next frame
                prevPositions.value.set(id, lerpPos);
                
                // Update info panel for our ship
                if (socket.value && id === socket.value.id && ship.value) {
                    ship.value.x = playerState.position.x;
                    ship.value.y = playerState.position.y;
                    ship.value.angle = playerState.angle;
                    ship.value.velocity = playerState.velocity;
                    
                    shipInfo.value = {
                        callSign: playerState.callSign,
                        health: playerState.health,
                        maxHealth: playerState.maxHealth,
                        position: { 
                            x: Math.round(playerState.position.x), 
                            y: Math.round(playerState.position.y) 
                        },
                        home: playerState.home,
                        angle: Math.round((playerState.angle * 180 / Math.PI) % 360),
                        velocity: { 
                            x: playerState.velocity.x.toFixed(2), 
                            y: playerState.velocity.y.toFixed(2) 
                        },
                        controls: playerState.controls,
                        color: playerState.color,
                        pattern: playerState.pattern,
                        score: playerState.score,
                        collections: playerState.collections,
                        streak: playerState.streak
                    };

                    score.value = playerState.score || 0;
                    
                    // Update safe zone status
                    if (socket.value && socket.value.id) {
                        isInSafeZone.value = isInSafeZone(
                            playerState.position.x, 
                            playerState.position.y,
                            socket.value.id
                        );
                    }
                }
            }
            
            partTime = performance.now() - objectsStart;
            if (partTime > 15) console.debug("Time:",  formatTime(Date.now()),'Heavy objects render:', Math.round(partTime), 'ms');

            // 4. Player updates timing
            const playerStart = performance.now();
            // Total frame time
            const totalTime = performance.now() - frameStart;
            if (totalTime > 20) console.debug("Time:",  formatTime(Date.now()),' Heavy frame:', Math.round(totalTime), 'ms');

            // Schedule next frame ONLY if still running
            if (isRunning.value) {
                loopId.value = requestAnimationFrame(loop);
            }
        };

    const startGameLoop = () => {
        console.debug('🎮 Starting game loop at:', new Date().toISOString());
        if (isRunning.value || loopId.value) {
            console.warn('🎮 Loop already running! Started at:', new Date().toISOString());
            return;
        }
        isRunning.value = true;
        loop(); // Just call loop directly, it will schedule itself
    };

    const stopGameLoop = () => {
        console.debug('🎮 Stopping game loop at:', new Date().toISOString());
        isRunning.value = false;
        if (loopId.value) {
            cancelAnimationFrame(loopId.value);
            loopId.value = null;
        }
    };

    return {
        isRunning,
        startGameLoop,
        stopGameLoop
    };
}