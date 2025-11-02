// In shared/physics.js
export function calculateBlackHoleForce(ship, blackHole) {
    const dx = blackHole.x - ship.x;
    const dy = blackHole.y - ship.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > BLACK_HOLE_CONFIG.GRAVITY_RADIUS) return { x: 0, y: 0 };
    
    // Inverse square law for gravity
    const forceMagnitude = BLACK_HOLE_CONFIG.MAX_GRAVITY_FORCE * 
        Math.pow(1 - distance / BLACK_HOLE_CONFIG.GRAVITY_RADIUS, 2);
    
    // Normalize direction and apply force
    return {
        x: (dx / distance) * forceMagnitude,
        y: (dy / distance) * forceMagnitude,
        distance // Return distance for visual effects
    };
}

// Update ship physics to include black hole gravity
export function updateShipPhysics(ship, deltaTime, blackHoles) {
    let totalForceX = 0;
    let totalForceY = 0;
    
    // Calculate forces from all black holes
    for (const blackHole of blackHoles.values()) {
        const force = calculateBlackHoleForce(ship, blackHole);
        totalForceX += force.x;
        totalForceY += force.y;
        
        // Check if ship is past event horizon
        if (force.distance < BLACK_HOLE_CONFIG.EVENT_HORIZON_RADIUS) {
            ship.caughtInBlackHole = blackHole.id;
            return true; // Ship is captured
        }
    }
    
    // Apply forces to velocity
    ship.velocity.x += totalForceX * deltaTime;
    ship.velocity.y += totalForceY * deltaTime;
    
    // Apply velocity to position
    ship.x += ship.velocity.x * deltaTime;
    ship.y += ship.velocity.y * deltaTime;
    
    return false; // Ship is not captured
}