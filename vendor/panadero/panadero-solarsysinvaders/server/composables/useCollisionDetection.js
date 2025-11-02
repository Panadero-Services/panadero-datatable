// vendor/panadero/panadero-solarsysinvaders/server/composables/useCollisionDetection.js

// Import required dependencies
import { 
    areShipsColliding, 
    handleShipCollisionBounce,
    handleSafeZoneBounce,
    checkCollectibleCollision,
    checkPathCollision,
    isInRange,
    checkAllShipCollisions,
    checkAllCollectibleCollisions
} from '../../shared/collision.js';

export function useCollisionDetection() {
    // Constants
    const SHIP_RADIUS = 10;
    const SAFE_ZONE_RADIUS = 150;
    const VISIBILITY_RANGE = 1000;

    // Check if a position is in any safe zone
    const isInSafeZone = (x, y, playerId, homePositions) => {
        for (const [homeId, homePos] of homePositions) {
            const dx = Math.abs(x - homePos.x);
            const dy = Math.abs(y - homePos.y);
            if (dx <= SAFE_ZONE_RADIUS && dy <= SAFE_ZONE_RADIUS) {
                return true;
            }
        }
        return false;
    };

    // Update ship movement handling to make ships bounce off safe zones
    const updateShipPosition = (playerId, ship, homePositions, players) => {
        const nextX = ship.x + ship.velocity.x;
        const nextY = ship.y + ship.velocity.y;
        
        for (const [homeId, homePos] of homePositions) {
            if (homeId === playerId) continue;
            
            const homeOwnerShip = players.get(homeId)?.ship;
            if (!homeOwnerShip) continue;
            
            if (homeOwnerShip.color === ship.color) continue;
            
            const dx = Math.abs(nextX - homePos.x);
            const dy = Math.abs(nextY - homePos.y);
            
            if (dx <= SAFE_ZONE_RADIUS && dy <= SAFE_ZONE_RADIUS) {
                handleSafeZoneBounce(ship, homePos);
                return false;
            }
        }
        
        ship.x = nextX;
        ship.y = nextY;
        return true;
    };

    // Check all ship-to-ship collisions
    const checkShipCollisions = (players, collisionCallback) => {
        checkAllShipCollisions(players, collisionCallback);
    };

    // Check all collectible collisions
    const checkCollectibleCollisions = (players, collectibles, collisionCallback, collectItem) => {
        checkAllCollectibleCollisions(players, collectibles, collisionCallback, collectItem);
    };

    // Check bullet collisions with ships
    const checkBulletCollisions = (bullets, players) => {
        const now = Date.now();
        for (const [bulletId, bullet] of bullets) {
            for (const [playerId, player] of players) {
                if (player.ship && bullet.playerId !== playerId) {
                    const dx = bullet.x - player.ship.x;
                    const dy = bullet.y - player.ship.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < SHIP_RADIUS) {
                        const damage = bullet.damage || 1;
                        for (let i = 0; i < damage; i++) {
                            player.ship.takeDamage(true);
                        }
                        bullets.delete(bulletId);
                        break;
                    }
                }
            }
        }
    };

    // Check if bullet is in safe zone
    const isBulletInSafeZone = (bullet, homePositions) => {
        return isInSafeZone(bullet.x, bullet.y, bullet.playerId, homePositions);
    };

    // Get visible objects for a player
    const getVisibleObjects = (playerX, playerY, objects) => {
        const visibleObjects = {};
        for (const [objectId, object] of objects) {
            if (isInRange(playerX, playerY, object.x, object.y, VISIBILITY_RANGE)) {
                visibleObjects[objectId] = object;
            }
        }
        return visibleObjects;
    };

    // Check if two objects are colliding
    const areObjectsColliding = (obj1, obj2, radius1 = SHIP_RADIUS, radius2 = SHIP_RADIUS) => {
        const dx = obj1.x - obj2.x;
        const dy = obj1.y - obj2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < (radius1 + radius2);
    };

    // Get collision data for two ships
    const getShipCollisionData = (ship1, ship2) => {
        return {
            ship1: {
                id: ship1.id,
                callSign: ship1.callSign,
                color: ship1.color
            },
            ship2: {
                id: ship2.id,
                callSign: ship2.callSign,
                color: ship2.color
            },
            timestamp: Date.now()
        };
    };

    return {
        isInSafeZone,
        updateShipPosition,
        checkShipCollisions,
        checkCollectibleCollisions,
        checkBulletCollisions,
        isBulletInSafeZone,
        getVisibleObjects,
        areObjectsColliding,
        getShipCollisionData
    };
}