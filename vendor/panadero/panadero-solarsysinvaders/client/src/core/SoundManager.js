class SoundManager {
    constructor() {
        console.debug('Initializing SoundManager');
        const basePath = '/sounds/';
        
        this.initialized = false;
        this.sounds = {
            rocket: new Audio(basePath + 'laser2.mp3'),
            shoot: new Audio(basePath + 'laser.mp3'),
            engine: new Audio(basePath + 'engine.mp3'),
            explosion: new Audio(basePath + 'explosion.mp3'),
            collect: new Audio(basePath + 'collect.mp3'),
            hit: new Audio(basePath + 'hit.mp3'),
            levelComplete: new Audio(basePath + 'level-complete.mp3')
        };

        // Configure engine sound for looping
        this.sounds.engine.loop = true;
        
        // Set volume levels
        this.sounds.shoot.volume = 0.3;
        this.sounds.rocket.volume = 0.4;
        this.sounds.engine.volume = 0.2;
        this.sounds.explosion.volume = 0.4;
        this.sounds.collect.volume = 0.3;
        this.sounds.hit.volume = 0.3;
        this.sounds.levelComplete.volume = 0.4;
        
    }

    async init() {
        if (this.initialized) return;
        
        try {
            // Create a silent audio context to unlock audio
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            await audioContext.resume();
            this.initialized = true;
            console.debug('🎵 Sound system initialized successfully');
        } catch (error) {
            console.debug('❌ Failed to initialize sound system:', error);
        }
    }

    play(soundName) {
        if (!this.initialized) {
            console.debug('Sound system not initialized yet - attempting to initialize...');
            this.init();
            return;
        }

        if (this.sounds[soundName]) {
            //console.debug(`Attempting to play sound: ${soundName}`);
            this.sounds[soundName].currentTime = 0;
            this.sounds[soundName].play().catch(err => {
                console.debug(`Failed to play ${soundName}:`, err);
            });
        } else {
            console.debug(`Sound not found: ${soundName}`);
        }
    }

    stopEngine() {
        if (!this.initialized) return;
        
        if (this.sounds.engine) {
            this.sounds.engine.pause();
            this.sounds.engine.currentTime = 0;
        }
    }
}

export const soundManager = new SoundManager(); 