import { ParticleSystem } from '../../core/ParticleSystem.js';

// Create a single shared instance
const particleSystem = new ParticleSystem();

export function useParticleSystem() {
    return {
        particleSystem
    };
}
