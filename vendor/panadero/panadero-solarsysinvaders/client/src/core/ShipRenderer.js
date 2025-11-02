// Ship visual configurations
const SHIP_CONFIGS = {
    fighter: {
        shootDelay: 150,
        speed: 0.1,
        turnSpeed: 0.1,
        drag: 0.99,
        health: 100
    },
    ufo: {
        shootDelay: 250,
        speed: 0.08,
        turnSpeed: 0.08,
        drag: 0.995,
        health: 120
    }
};

/**
 * ShipRenderer - Client-side ship visualization
 * This class only handles rendering and animations.
 * All game state (position, health, score) comes from ServerShip through playerState.
 */
export class ShipRenderer {
    constructor(x, y, gameWidth = 600, gameHeight = 400) {
        // Initial local display values - will be overwritten by server state
        this.x = x;
        this.y = y;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.angle = 0;
        this.rotatingLeft = false;
        this.rotatingRight = false;
        this.engineOn = false;
        this.velocity = { x: 0, y: 0 };
        
        // Visual configuration only
        this.pattern = Math.random() < 0.5 ? 'fighter' : 'ufo';
        const config = SHIP_CONFIGS[this.pattern];
        this.shootDelay = config.shootDelay;
        this.speed = config.speed;
        this.turnSpeed = config.turnSpeed;
        this.drag = config.drag;
        this.health = config.health;  // This will be overwritten by server state
    }

    // Rest of the rendering methods...
} 