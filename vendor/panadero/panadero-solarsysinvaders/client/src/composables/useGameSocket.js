

export function useGameSocket() {
    
    const setupSocketEventHandlers = (socket, handlers, playSound) => {
        // Add shoot blocked handler
        socket.value.on('shoot_blocked', (data) => {
            if (data.reason === 'in_safe_zone') {
                console.log('Cannot shoot in safe zones!');
            }
        });

        // Add collision sound
        socket.value.on('collision', () => {
            playSound('hit');
        });

        // Add explosion sound
        socket.value.on('ship_destroyed', () => {
            playSound('explosion');
        });

        // Add collect sound
        socket.value.on('collectible_collected', (data) => {
            playSound('collect');
            
            if (handlers.shipInfo && handlers.shipInfo.value) {
                handlers.shipInfo.value.collections = data.collections;
            }
            
            console.log('Collections updated:', data.collections);

            // Fix: Ensure streak popup appears
            if (data.hasStreak && handlers.createScorePopup) {
                const playerState = handlers.gameState.value.players[socket.value.id];
                if (playerState && playerState.position) {
                    handlers.createScorePopup(
                        playerState.position.x,
                        playerState.position.y,
                        10,  // Streak bonus amount
                        handlers.scorePopups.value
                    );
                }
            }
        });

        // Add level complete sound
        socket.value.on('level_complete', () => {
            playSound('levelComplete');
        });

        // Update the gameState handler to populate resourceFields
        socket.value.on('game_state', (state) => {
            handlers.gameState.value = state;
            if (state.resourceFields && handlers.resourceFields) {
                handlers.resourceFields.value = new Map(Object.entries(state.resourceFields));
            }
        });

        // Listen for help responses from server
        socket.value.on('help', (data) => {
            if (handlers.helpContent) {
                handlers.helpContent.value = data.content;
            }
            if (handlers.showHelpOverlay) {
                handlers.showHelpOverlay.value = true;
            }
        });

        // Listen for help requests from server
        socket.value.on('help_request', (data) => {
            if (handlers.parseHelpCommand && handlers.gameServerInfo) {
                const helpResult = handlers.parseHelpCommand(data.content, handlers.gameServerInfo.value);
                if (helpResult && handlers.helpContent) {
                    handlers.helpContent.value = helpResult.formatted;
                    handlers.showHelpOverlay.value = true;
                }
            }
        });

        // Add this after the existing socket event listeners
        socket.value.on('update-player-resources', (data) => {
            console.log('=== CLIENT RECEIVED SSOT DATA ===');
            console.log('Data:', data);
            
            if (data.resources && handlers.shipInfo && handlers.shipInfo.value) {
                handlers.shipInfo.value.collections = data.resources;
            }
        });
    };

    const setupWindowEventHandlers = (handlers, playSound) => {
        // COMMENT OUT THIS ONE LINE:
        // window.addEventListener('bullet-created', () => {
        //     playSound('shoot');
        // });

        // Collectible sound and scoring
        window.addEventListener('item-collected', (event) => {
            if (handlers.handleCollectible && handlers.score) {
                handlers.handleCollectible(event, handlers.score);
            }
        });

        // Ship hit sound
        window.addEventListener('ship-hit', () => {
            playSound('hit');
        });

        // Ship destroyed sound
        window.addEventListener('ship-destroyed', () => {
            playSound('explosion');
        });

        // Level complete sound
        window.addEventListener('level-complete', () => {
            playSound('levelComplete');
        });
    };





    const cleanupEventHandlers = (handlers, playSound) => {
        window.removeEventListener('bullet-created', () => {
           // playSound('shoot');
        });
        window.removeEventListener('item-collected', (event) => {
            if (handlers.handleCollectible && handlers.score) {
                handlers.handleCollectible(event, handlers.score);
            }
        });
        window.removeEventListener('ship-hit', () => playSound('hit'));
        window.removeEventListener('ship-destroyed', () => playSound('explosion'));
        window.removeEventListener('level-complete', () => playSound('levelComplete'));
    };

    return {
        setupSocketEventHandlers,
        setupWindowEventHandlers,
        cleanupEventHandlers
    };
} 