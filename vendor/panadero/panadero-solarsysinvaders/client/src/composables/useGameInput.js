export function useGameInput(sendInput, playSound, stopEngine, gameState, socket) {
    
    console.debug('🔄 useGameInput called - this should only happen once!');
    
    // Separate cooldown tracking for different shot types
    let lastShotTime = 0;
    let lastRocketTime = 0;
    
    // Track if keys were actually pressed (to avoid false keyup events)
    let spaceKeyPressed = false;
    let rocketKeyPressed = false;
    
    // Prevent multiple processing of the same key press
    let lastProcessedKey = null;
    let lastProcessedTime = 0;
    
    // Get player's ship pattern for cooldown calculation
    const getPlayerShipPattern = () => {
        if (!gameState?.value?.players || !socket?.value?.id) return 'fighter';
        const player = gameState.value.players[socket.value.id];
        return player?.ship?.pattern || 'fighter';
    };
    
    // Check if player can shoot (client-side cooldown)
    const canShoot = () => {
        const now = Date.now();
        const pattern = getPlayerShipPattern();
        const cooldown = pattern === 'ufo' ? 500 : 250;
        const timeSinceLastShot = now - lastShotTime;
        const canShootNow = timeSinceLastShot >= cooldown;
        
       /* console.debug('🔫 Shoot cooldown check:', {
            now,
            lastShotTime,
            timeSinceLastShot,
            cooldown,
            canShootNow
        });*/
        
        return canShootNow;
    };
    
    // Check if player can shoot rocket (separate cooldown)
    const canShootRocket = () => {
        const now = Date.now();
        const pattern = getPlayerShipPattern();
        const cooldown = pattern === 'ufo' ? 1000 : 500;
        const timeSinceLastRocket = now - lastRocketTime;
        const canShootRocketNow = timeSinceLastRocket >= cooldown;
        
        /*console.debug('🚀 Rocket cooldown check:', {
            now,
            lastRocketTime,
            timeSinceLastRocket,
            cooldown,
            canShootRocketNow
        });*/
        
        return canShootRocketNow;
    };
    
    // Update handleKeyDown to include space for shooting
    const handleKeyDown = (event) => {
        // Prevent duplicate processing of the same key press
        const now = Date.now();
        const keyId = `${event.key}_${now}`;
        
        lastProcessedKey = keyId;
        lastProcessedTime = now;
        
      //  console.debug('Key down event:', event.key);
        switch(event.key) {
            case 'ArrowLeft':
                sendInput('rotate_left', true);
                break;
            case 'ArrowRight':
                sendInput('rotate_right', true);
                break;
            case 'ArrowUp':
                sendInput('thrust', true);
                playSound('engine');
                break;
            case ' ':
                const canShootNow = canShoot();
                if (canShootNow) {
                    playSound('shoot');
                    lastShotTime = Date.now();
                    spaceKeyPressed = true;
                    sendInput('shoot', true);
                } else {
                    spaceKeyPressed = false;
                }
                break;
            case 'r':
            case 'R':
                const canShootRocketNow = canShootRocket();
                if (canShootRocketNow) {
                    playSound('rocket');
                    lastRocketTime = Date.now();
                    rocketKeyPressed = true;
                    sendInput('rocket', true);
                } else {
                    rocketKeyPressed = false;
                }
                break;
            case 'h':
            case 'H':
                sendInput('warp_home', true);
                break;
            case 'T':
                // Test sounds
                break;
        }
    };

    const handleKeyUp = (event) => {
        switch(event.key) {
            case 'ArrowLeft':
                sendInput('rotate_left', false);
                break;
            case 'ArrowRight':
                sendInput('rotate_right', false);
                break;
            case 'ArrowUp':
                sendInput('thrust', false);
                stopEngine();
                break;
            case ' ':
                if (spaceKeyPressed) {
                    sendInput('shoot', false);
                    spaceKeyPressed = false;
                }
                break;
            case 'r':
            case 'R':
                if (rocketKeyPressed) {
                    sendInput('rocket', false);
                    rocketKeyPressed = false;
                }
                break;
        }
    };

    // Add test key for sound debugging
    const handleTestSounds = (event) => {
        if (event.key === 'T') {
            console.log('Testing all sounds');
            playSound('shoot');
            setTimeout(() => playSound('hit'), 500);
            setTimeout(() => playSound('collect'), 1000);
            setTimeout(() => playSound('explosion'), 1500);
            setTimeout(() => playSound('levelComplete'), 2000);
            
            // Test engine sound
            playSound('engine');
            setTimeout(() => stopEngine(), 3000);
        }
    };

    return {
        handleKeyDown,
        handleKeyUp,
        handleTestSounds
    };
} 