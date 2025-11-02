/**
 * Check if two ships are colliding.
 * @param {Object} ship1
 * @param {Object} ship2
 * @returns {boolean}
 */
export function areShipsColliding(ship1, ship2) {
    const dx = ship1.x - ship2.x;
    const dy = ship1.y - ship2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (ship1.radius + ship2.radius) * 2;
}

/**
 * Handle bounce physics for two colliding ships.
 * @param {Object} ship1
 * @param {Object} ship2
 */
export function handleShipCollisionBounce(ship1, ship2) {
    const dx = ship1.x - ship2.x;
    const dy = ship1.y - ship2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) return; // Prevent division by zero

    // Normalize the collision normal
    const nx = dx / distance;
    const ny = dy / distance;

    // Calculate relative velocity
    const relativeVelocityX = ship1.velocity.x - ship2.velocity.x;
    const relativeVelocityY = ship1.velocity.y - ship2.velocity.y;

    // Calculate velocity along normal
    const velocityAlongNormal = relativeVelocityX * nx + relativeVelocityY * ny;

    // If ships are moving apart, don't bounce
    if (velocityAlongNormal > 0) return;

    // Calculate bounce force (elastic collision)
    const restitution = 0.8; // How bouncy the collision is (0-1)
    const impulse = -(1 + restitution) * velocityAlongNormal;

    // Apply impulse to both ships
    ship1.velocity.x += impulse * nx;
    ship1.velocity.y += impulse * ny;
    ship2.velocity.x -= impulse * nx;
    ship2.velocity.y -= impulse * ny;

    // Separate ships to prevent sticking
    const separationDistance = (ship1.radius + ship2.radius) * 2.1;
    const overlap = separationDistance - distance;

    if (overlap > 0) {
        const separationX = nx * overlap * 0.5;
        const separationY = ny * overlap * 0.5;

        ship1.x += separationX;
        ship1.y += separationY;
        ship2.x -= separationX;
        ship2.y -= separationY;
    }
}

/**
 * Handle bounce physics when a ship hits a safe zone boundary.
 * @param {Object} ship - The ship object (must have x, y, velocity).
 * @param {Object} homePos - The safe zone center position (must have x, y).
 */
export function handleSafeZoneBounce(ship, homePos) {
    // Calculate distance from ship to safe zone center
    const dx = ship.x - homePos.x;
    const dy = ship.y - homePos.y;
    
    // Calculate angle of impact
    const angle = Math.atan2(dy, dx);
    
    // Simply reverse direction while maintaining speed
    ship.velocity.x = -ship.velocity.x;
    ship.velocity.y = -ship.velocity.y;
    
    // Move ship slightly outside the safe zone to prevent getting stuck
    const SAFE_OFFSET = 5; // Small offset to ensure ship is clear of boundary
    ship.x += Math.cos(angle) * SAFE_OFFSET;
    ship.y += Math.sin(angle) * SAFE_OFFSET;
}

/**
 * Check if a ship collides with a collectible.
 * @param {Object} ship
 * @param {Object} collectible
 * @returns {boolean}
 */
export function checkCollectibleCollision(ship, collectible) {
    const dx = ship.x - collectible.x;
    const dy = ship.y - collectible.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (ship.radius + collectible.radius);
}

/**
 * Check if a path between two points collides with a collectible.
 * @param {Object} oldPos
 * @param {Object} newPos
 * @param {Object} collectible
 * @param {number} [radius=10] - Ship radius (optional, default 10)
 * @returns {boolean}
 */
export function checkPathCollision(oldPos, newPos, collectible, radius = 10) {
    const steps = Math.ceil(Math.sqrt(
        Math.pow(newPos.x - oldPos.x, 2) + 
        Math.pow(newPos.y - oldPos.y, 2)
    ) / 10); // One check every 10 units

    for(let i = 0; i <= steps; i++) {
        const t = i / steps;
        const checkX = oldPos.x + (newPos.x - oldPos.x) * (t * (2 - t));
        const checkY = oldPos.y + (newPos.y - oldPos.y) * (t * (2 - t));
        const dx = checkX - collectible.x;
        const dy = checkY - collectible.y;
        if(Math.sqrt(dx * dx + dy * dy) < radius * 2) {
            return true;
        }
    }
    return false;
}

/**
 * Check if two points are within a given range.
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} range
 * @returns {boolean}
 */
export function isInRange(x1, y1, x2, y2, range) {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy) <= range;
}

/**
 * Check all ship-to-ship collisions and handle bouncing/damage.
 * @param {Map} players - The game state players map.
 * @param {Function} onCollision - Callback for collision events (for server-specific logic).
 */
export function checkAllShipCollisions(players, onCollision = null) {
    const playerArray = Array.from(players.entries());
    
    for (let i = 0; i < playerArray.length; i++) {
        const [playerId1, player1] = playerArray[i];
        if (!player1 || !player1.ship) continue;
        
        for (let j = i + 1; j < playerArray.length; j++) {
            const [playerId2, player2] = playerArray[j];
            if (!player2 || !player2.ship) continue;
            
            // Check if ships are colliding
            if (areShipsColliding(player1.ship, player2.ship)) {
                // Handle bounce physics
                handleShipCollisionBounce(player1.ship, player2.ship);
                
                // Handle collision damage (with cooldown)
                if (player1.ship.canTakeCollisionDamage()) {
                    player1.ship.takeDamage(false); // false = collision damage, not bullet
                    
                    if (onCollision) {
                        onCollision(playerId1, {
                            type: 'ship_collision',
                            damage: 1,
                            with: player2.ship.callSign
                        });
                    }
                }
                
                if (player2.ship.canTakeCollisionDamage()) {
                    player2.ship.takeDamage(false); // false = collision damage, not bullet
                    
                    if (onCollision) {
                        onCollision(playerId2, {
                            type: 'ship_collision',
                            damage: 1,
                            with: player1.ship.callSign
                        });
                    }
                }
            }
        }
    }
}

/**
 * Check all collectible collisions for all players.
 * @param {Map} players - Game state players map.
 * @param {Map} collectibles - Game state collectibles map.
 * @param {Function} onCollectibleCollision - Callback when a collectible is collected.
 */
export function checkAllCollectibleCollisions(players, collectibles, onCollectibleCollision, collectItemFn) {
    for (const [playerId, player] of players) {
        if (!player || !player.ship) continue;
        
        for (const [collectibleId, collectible] of collectibles) {
            if (checkCollectibleCollision(player.ship, collectible)) {
                const ship = player.ship;
                const result = collectItemFn(ship, collectible);
                
                // Remove collectible
                collectibles.delete(collectibleId);
                
                // Call callback with result
                onCollectibleCollision(playerId, result, collectible);
            }
        }
    }
}
