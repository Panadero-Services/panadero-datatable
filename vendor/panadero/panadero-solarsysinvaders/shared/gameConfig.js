// vendor/panadero/panadero-solarsysinvaders/shared/gameConfig.js

export const GAME_CONFIG = {
    // Existing world dimensions
    WORLD_WIDTH: 80000,        
    WORLD_HEIGHT: 80000,       
    WORLD_MIN_X: -40000,       
    WORLD_MAX_X: 40000,        
    WORLD_MIN_Y: -40000,       
    WORLD_MAX_Y: 40000,        
    
    // Display/canvas dimensions
    CANVAS_WIDTH: 800,         
    CANVAS_HEIGHT: 600,        
    
    // Game settings
    TICK_RATE: 60,             
    VISIBILITY_RANGE: 2000,     
    
    // Border anti-gravity settings
    BORDER_FORCE_RADIUS: 5000,    
    BORDER_FORCE_STRENGTH: 0.5,   
    BORDER_FORCE_MAX: 2.0,        

    // Movement interpolation
    LERP_FACTOR: 0.2,  // Controls smoothness of ship movement (0.2 = 20% per frame)

    // Ship configuration
    SHIP_RADIUS: 10,

    // Field configuration
    FIELD: {
        COUNT: 3,
        RADIUS: 1200,
        INNER_RADIUS: 400,
        REPOSITION_INTERVAL: 60 * 60 * 1000,  // 60 minutes
        MAX_COLLECTIBLES: {
            TOTAL: 15,
            INNER: 8
        },
        MIN_DISTANCE: 4000  // Minimum distance between fields
    }
};