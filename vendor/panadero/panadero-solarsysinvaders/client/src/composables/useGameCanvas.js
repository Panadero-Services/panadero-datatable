import { GAME_CONFIG } from '../../../shared/gameConfig.js';

export function useGameCanvas() {
    
    const initCanvas = (canvas, ShipRenderer, CanvasManager) => {
        console.log('🎮 Initializing canvas');
        if (!canvas.value) return false;
        
        // Set both the canvas element AND its drawing context size
        canvas.value.style.width = `${GAME_CONFIG.CANVAS_WIDTH}px`;
        canvas.value.style.height = `${GAME_CONFIG.CANVAS_HEIGHT}px`;
        canvas.value.width = GAME_CONFIG.CANVAS_WIDTH;
        canvas.value.height = GAME_CONFIG.CANVAS_HEIGHT;
        
        const canvasManager = new CanvasManager(canvas.value, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
        const ship = new ShipRenderer(GAME_CONFIG.CANVAS_WIDTH / 2, GAME_CONFIG.CANVAS_HEIGHT / 2, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
        
        // Set up emit function for ship
        ship.emitEvent = (eventName) => {
            if (eventName === 'shoot') {
                // We'll need to pass soundManager as a parameter
                // soundManager.play('shoot');
            }
        };
        
        return { canvasManager, ship };
    };

    const createGameLoop = (params) => {
        const {
            isRunning,
            ship,
            camera,
            canvasManager,
            gameState,
            prevPositions,
            worldToScreen,
            drawStarfield,
            drawShip,
            drawHome,
            drawSafeZone,
            drawResourceField,
            drawCollectible,
            drawBullet,
            isInSafeZone,
            socket,
            shipInfo,
            score,
            inSafeZone,
            scorePopups,
            GAME_CONFIG
        } = params;

        return () => {
            if (!isRunning.value) return;
            
            // Update camera position to follow player's ship
            if (ship.value) {
                const targetX = ship.value.x;
                const targetY = ship.value.y;
                camera.value.x += (targetX - camera.value.x) * 0.1;
                camera.value.y += (targetY - camera.value.y) * 0.1;
            }
            
            // Clear and draw starfield
            drawStarfield(canvasManager.value.ctx, camera.value);
            
            // Draw home positions first (so they appear behind ships)
            if (gameState.value.homePositions) {
                for (const homePosition of Object.values(gameState.value.homePositions)) {
                    drawSafeZone(canvasManager.value.ctx, homePosition, worldToScreen, camera.value);
                    drawHome(canvasManager.value.ctx, homePosition, worldToScreen, camera.value);
                }
            }

            // Draw resource fields
            if (gameState.value.resourceFields) {
                for (const field of Object.values(gameState.value.resourceFields)) {
                    drawResourceField(canvasManager.value.ctx, field, worldToScreen, camera.value);
                }
            }
            
            // Draw collectibles
            if (gameState.value.collectibles) {
                for (const collectible of Object.values(gameState.value.collectibles)) {
                    drawCollectible(canvasManager.value.ctx, collectible, worldToScreen, camera.value);
                }
            }

            // Debug log bullets before rendering
            console.log('Current game state bullets:', gameState.value.bullets);

            // Draw bullets with debug logging
            if (gameState.value?.bullets) {
                console.log('Drawing bullets:', gameState.value.bullets);
                gameState.value.bullets.forEach(bullet => {
                    drawBullet(canvasManager.value.ctx, bullet, worldToScreen, camera.value);
                });
            }
            
            // Debug log the game state
            console.log('Current game state:', gameState.value);
            
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
                    console.log('Score updated to:', score.value);
                    
                    // Update safe zone status
                    inSafeZone.value = isInSafeZone(
                        playerState.position.x, 
                        playerState.position.y,
                        socket.value.id
                    );
                    
                    score.value = playerState.score || 0;
                }
            }
            
            // Draw score popups
            scorePopups.value.forEach(popup => {
                const screenPos = worldToScreen(popup.x, popup.y, camera.value);
                
                canvasManager.value.ctx.save();
                canvasManager.value.ctx.fillStyle = `rgba(255, 255, 0, ${popup.opacity})`;
                canvasManager.value.ctx.font = 'bold 16px Arial';
                canvasManager.value.ctx.textAlign = 'center';
                canvasManager.value.ctx.fillText(`+${popup.amount}`, screenPos.x, screenPos.y - 20);
                canvasManager.value.ctx.restore();
                
                // Animate popup
                popup.y -= 1;
                popup.opacity -= 0.02;
            });

            requestAnimationFrame(() => createGameLoop(params)());
        };
    };

    return {
        initCanvas,
        createGameLoop
    };
} 