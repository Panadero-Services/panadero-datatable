// vendor/panadero/panadero-solarsysinvaders/server/composables/useBulletManagement.js

// Constants
const BULLET_CONFIG = {
    NORMAL: {
        SPEED: 10,
        DAMAGE: 1,
        SIZE: 1,
        LIFESPAN: 2000
    },
    ROCKET: {
        SPEED: 10,
        DAMAGE: 3,
        SIZE: 1,
        LIFESPAN: 2000
    },
    UFO: {
        SPEED: 5,
        DAMAGE: 1,
        SIZE: 1,
        LIFESPAN: 2000
    }
};

const SHIP_RADIUS = 10;

export function useBulletManagement() {
    const bullets = new Map();
    const playerUpgrades = new Map(); // Track player upgrades

    // Add rocket upgrade function
    const addRocketUpgrade = (playerId) => {
        if (!playerUpgrades.has(playerId)) {
            playerUpgrades.set(playerId, {});
        }
        const upgrades = playerUpgrades.get(playerId);
        upgrades.rocket = (upgrades.rocket || 0) + 1;
        console.debug(`🚀 Rocket upgrade added for player ${playerId}, level: ${upgrades.rocket}`);
    };

    // Enhanced bullet creation with rocket upgrade
    const createBullet = (playerId, ship, bulletType = 'normal') => {
        const upgrades = playerUpgrades.get(playerId) || {};
        const rocketLevel = upgrades.rocket || 0;
        
        let bulletSpeed = ship.pattern === 'ufo' ? BULLET_CONFIG.UFO.SPEED : BULLET_CONFIG.NORMAL.SPEED;
        let bulletDamage = BULLET_CONFIG.NORMAL.DAMAGE;
        let bulletSize = BULLET_CONFIG.NORMAL.SIZE;
        let particleCount = 0;
        
        // Apply rocket effects
        if (bulletType === 'rocket') {
            bulletDamage = BULLET_CONFIG.ROCKET.DAMAGE + rocketLevel;
            bulletSpeed *= (1 + rocketLevel * 0.5);
            bulletSize = BULLET_CONFIG.ROCKET.SIZE + rocketLevel * 0.3;
            particleCount = rocketLevel * 3;
        }
        
        const bulletId = `bullet_${playerId}_${Date.now()}`;
        
        const bulletVelocityX = Math.sin(ship.angle) * bulletSpeed;
        const bulletVelocityY = -Math.cos(ship.angle) * bulletSpeed;
        
        const finalVelocityX = bulletVelocityX + ship.velocity.x;
        const finalVelocityY = bulletVelocityY + ship.velocity.y;
        
        const minForwardSpeed = bulletSpeed * 0.5;
        const currentForwardSpeed = Math.sqrt(bulletVelocityX * bulletVelocityX + bulletVelocityY * bulletVelocityY);
        
        let adjustedVelocityX = finalVelocityX;
        let adjustedVelocityY = finalVelocityY;
        
        if (currentForwardSpeed < minForwardSpeed) {
            const scaleFactor = minForwardSpeed / currentForwardSpeed;
            adjustedVelocityX = bulletVelocityX * scaleFactor + ship.velocity.x;
            adjustedVelocityY = bulletVelocityY * scaleFactor + ship.velocity.y;
        }
        
        const bullet = {
            id: bulletId,
            x: ship.x,
            y: ship.y,
            angle: ship.angle,
            speed: bulletSpeed,
            velocity: {
                x: adjustedVelocityX,
                y: adjustedVelocityY
            },
            color: ship.color,
            playerId: playerId,
            created: Date.now(),
            lifespan: BULLET_CONFIG.NORMAL.LIFESPAN,
            type: bulletType,
            damage: bulletDamage,
            size: bulletSize,
            particleCount: particleCount,
            particles: []
        };
        
        if (bulletType === 'rocket' && particleCount > 0) {
            for (let i = 0; i < particleCount; i++) {
                bullet.particles.push({
                    x: ship.x,
                    y: ship.y,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 30 + Math.random() * 20,
                    maxLife: 30 + Math.random() * 20,
                    color: ship.color,
                    size: Math.random() * 2 + 1
                });
            }
        }
        
        bullets.set(bulletId, bullet);
        
        // UFO ships fire multiple bullets
        if (ship.pattern === 'ufo' && bulletType === 'normal') {
            const angles = [0.2, -0.2];
            angles.forEach((angleOffset, index) => {
                const bulletId2 = `bullet_${playerId}_${Date.now()}_${index + 2}`;
                const bullet2VelocityX = Math.sin(ship.angle + angleOffset) * bulletSpeed;
                const bullet2VelocityY = -Math.cos(ship.angle + angleOffset) * bulletSpeed;
                const bullet2FinalX = bullet2VelocityX + ship.velocity.x;
                const bullet2FinalY = bullet2VelocityY + ship.velocity.y;
                
                const bullet2 = {
                    ...bullet,
                    id: bulletId2,
                    angle: ship.angle + angleOffset,
                    velocity: {
                        x: bullet2FinalX,
                        y: bullet2FinalY
                    }
                };
                
                bullets.set(bulletId2, bullet2);
            });
        }
        
        return bullet;
    };

    // Enhanced bullet update with particle system
    const updateBullets = (players, isInSafeZone) => {
        const now = Date.now();
        for (const [bulletId, bullet] of bullets) {
            bullet.x += bullet.velocity.x;
            bullet.y += bullet.velocity.y;
            
            if (bullet.particles && bullet.particles.length > 0) {
                bullet.particles.forEach(particle => {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    particle.life--;
                    particle.vx += (Math.random() - 0.5) * 0.1;
                    particle.vy += (Math.random() - 0.5) * 0.1;
                });
                bullet.particles = bullet.particles.filter(particle => particle.life > 0);
            }
            
            if (isInSafeZone(bullet.x, bullet.y)) {
                bullets.delete(bulletId);
                continue;
            }
            
            if (now - bullet.created > bullet.lifespan) {
                bullets.delete(bulletId);
                continue;
            }
            
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

    const getBullets = () => {
        return bullets;
    };

    const getPlayerUpgrades = () => {
        return playerUpgrades;
    };

    const clearBullets = () => {
        bullets.clear();
    };

    const removeBullet = (bulletId) => {
        bullets.delete(bulletId);
    };

    return {
        bullets,
        playerUpgrades,
        addRocketUpgrade,
        createBullet,
        updateBullets,
        getBullets,
        getPlayerUpgrades,
        clearBullets,
        removeBullet
    };
}