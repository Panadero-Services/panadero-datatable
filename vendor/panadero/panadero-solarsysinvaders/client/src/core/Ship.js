// src/core/Ship.js
import { Bullet } from './Bullet';
import { MOVEMENT_CONFIG, SHIP_CONFIGS } from '../../shared/movementConfig.js';

const type = this.type || 'fighter';
const shipConfig = SHIP_CONFIGS[type] || {};

function avg(a, b) {
    // If per-ship config is missing, just use global
    if (b === undefined) return a;
    return (a + b) / 2;
}

const config = {
    ROTATION_SPEED: avg(MOVEMENT_CONFIG.ROTATION_SPEED, shipConfig.ROTATION_SPEED),
    THRUST_POWER:   avg(MOVEMENT_CONFIG.THRUST_POWER,   shipConfig.THRUST_POWER),
    FRICTION:       avg(MOVEMENT_CONFIG.FRICTION,       shipConfig.FRICTION),
    MAX_SPEED:      avg(MOVEMENT_CONFIG.MAX_SPEED,      shipConfig.MAX_SPEED),
    SHOOT_DELAY:    avg(MOVEMENT_CONFIG.SHOOT_DELAY,    shipConfig.SHOOT_DELAY),
    HEALTH:         avg(MOVEMENT_CONFIG.HEALTH,         shipConfig.HEALTH)
};

export class Ship {
    constructor(x, y, gameWidth = 600, gameHeight = 400) {
        this.x = x;
        this.y = y;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.angle = 0;
        this.rotatingLeft = false;
        this.rotatingRight = false;
        this.engineOn = false;
        this.velocity = { x: 0, y: 0 };
        this.pattern = Math.random() < 0.5 ? 'fighter' : 'ufo';
        
        // Apply ship type configuration
        const config = SHIP_CONFIGS[this.pattern];
        this.shootDelay = config.SHOOT_DELAY;
        this.speed = config.MAX_SPEED;
        this.turnSpeed = config.ROTATION_SPEED;
        this.drag = config.FRICTION;
        this.health = config.HEALTH;
        
        // Add bullet properties
        this.bullets = [];
        this.lastShot = 0;

        // Add acceleration property
        this.acceleration = { x: 0, y: 0 };

        // Add event emitter
        this.emit = null;  // Will be set by parent
    }

    shoot() {
        const now = Date.now();
        if (now - this.lastShot >= this.shootDelay) {
            // Create new bullet at ship's position
            const bullet = new Bullet(
                this.x,
                this.y,
                this.angle,
                10,
                this.color || '#FFFF00'
            );
            this.bullets.push(bullet);
            this.lastShot = now;

            // Emit when bullet is actually created
            if (this.emit) {
                this.emit('bulletCreated');
            }
            
            return true;
        }
        return false;
    }

    move() {
        const deltaTime = 1/60;
        
        // Rotation - keep as is for now
        if (this.rotatingLeft) this.angle -= this.turnSpeed * deltaTime * 60;
        if (this.rotatingRight) this.angle += this.turnSpeed * deltaTime * 60;

        // Improved thrust with acceleration
        if (this.engineOn) {
            // Calculate thrust direction
            const thrustX = Math.sin(this.angle) * this.speed;
            const thrustY = -Math.cos(this.angle) * this.speed;
            
            // Apply thrust to acceleration
            this.acceleration.x = thrustX;
            this.acceleration.y = thrustY;
        } else {
            // Gradually reduce acceleration when engine is off
            this.acceleration.x *= 0.95;
            this.acceleration.y *= 0.95;
        }

        // Apply acceleration to velocity
        this.velocity.x += this.acceleration.x * deltaTime * 60;
        this.velocity.y += this.acceleration.y * deltaTime * 60;

        // Apply drag to velocity
        this.velocity.x *= config.FRICTION;
        this.velocity.y *= config.FRICTION;

        // Update position
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Keep screen wrapping as is
        this.x = ((this.x % this.gameWidth) + this.gameWidth) % this.gameWidth;
        this.y = ((this.y % this.gameHeight) + this.gameHeight) % this.gameHeight;

        // Update bullets as before
        this.bullets = this.bullets.filter(bullet => bullet.active);
        this.bullets.forEach(bullet => bullet.move());

        // Handle engine sound
        if (this.engineOn) {
            //soundManager.play('engine');
        } else {
            //soundManager.stopEngine(); // This line was removed as per the edit hint
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(Math.round(this.x), Math.round(this.y));
        ctx.rotate(this.angle);
        
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;

        if (this.pattern === 'ufo') {
            // UFO Pattern
            // Main saucer body
            ctx.beginPath();
            ctx.ellipse(0, 0, 15, 6, 0, 0, Math.PI * 2);
            ctx.stroke();
            
            // Top dome
            ctx.beginPath();
            ctx.arc(0, -3, 8, Math.PI, 0, false);
        ctx.stroke();

            // Bottom lights
            [-10, -5, 0, 5, 10].forEach(x => {
                ctx.beginPath();
                ctx.arc(x, 2, 1, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            });

            // Engine flame for UFO
            if (this.engineOn) {
                ctx.beginPath();
                ctx.strokeStyle = '#00ffff';
                [-8, 0, 8].forEach(x => {
                    ctx.beginPath();
                    ctx.moveTo(x, 4);
                    ctx.lineTo(x, 8 + Math.random() * 3);
                    ctx.stroke();
                });
            }
        } else {
            // Fighter Pattern (original triangle ship)
            ctx.beginPath();
            ctx.moveTo(0, -15);
            ctx.lineTo(10, 15);
            ctx.lineTo(-10, 15);
            ctx.closePath();
            ctx.stroke();

            // Original engine flame
            if (this.engineOn) {
                ctx.beginPath();
                ctx.moveTo(-5, 15);
                ctx.lineTo(5, 15);
                ctx.lineTo(0, 25 + Math.random() * 10);
                ctx.closePath();
                ctx.fillStyle = 'orange';
                ctx.fill();
            }
        }
        
        // Draw bullets
        this.bullets.forEach(bullet => bullet.draw(ctx));
        
        ctx.restore();
    }
}