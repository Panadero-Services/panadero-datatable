// vendor/panadero/panadero-solarsysinvaders/client/src/composables/drawing/useEffects.js
import { useGameUtils } from '../useGameUtils';
import { useParticleSystem } from '../shared/useParticleSystem';

let instance = null;

export function useEffects() {
    if (instance) return instance;

    const { worldToScreen } = useGameUtils();
    const { particleSystem } = useParticleSystem();
    
    const drawBullet = (ctx, bullet, worldToScreen, camera) => {
        const screenPos = worldToScreen(bullet.x, bullet.y, camera);
        
        ctx.save();
        ctx.translate(screenPos.x, screenPos.y);
        ctx.rotate(bullet.angle);
        
        if (bullet.type === 'rocket') {
            // Draw rocket bullets larger and with orange color
            ctx.fillStyle = '#ff6600';
            ctx.strokeStyle = '#ff9900';
            ctx.lineWidth = 2;
            
            // Rocket shape
            ctx.beginPath();
            ctx.moveTo(0, -bullet.size * 2);
            ctx.lineTo(bullet.size, bullet.size * 2);
            ctx.lineTo(0, bullet.size);
            ctx.lineTo(-bullet.size, bullet.size * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Add rocket particles
            particleSystem.createRocketParticles(bullet.x, bullet.y, '#ff6600', bullet.particleCount || 5);
        } else {
            // Regular bullet - make it MUCH bigger
            const bulletSize = bullet.size || 8;
            ctx.fillStyle = bullet.color || '#ffffff';
            
            // Add glow effect for regular bullets
            ctx.shadowColor = bullet.color || '#ffffff';
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.arc(0, 0, bulletSize, 0, Math.PI * 2);
            ctx.fill();
            
            // Inner bright core
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#ffffcc';
            ctx.beginPath();
            ctx.arc(0, 0, bulletSize * 0.6, 0, Math.PI * 2);
            ctx.fill();
            
            // Outer ring
            ctx.strokeStyle = bullet.color || '#ffffff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, bulletSize, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        ctx.restore();
    };

    const createParticlesByType = (x, y, type, options = {}) => {
        switch (type) {
            case 'plasma':
                particleSystem.createPlasmaTrail(x, y, options.angle || 0, options.count || 15);
                break;
            case 'gravity':
                particleSystem.createGravityWell(x, y, options.count || 20);
                break;
            case 'crystal':
                particleSystem.createCrystalShards(x, y, options.count || 12);
                break;
            case 'rocket':
            default:
                particleSystem.createRocketParticles(x, y, options.color || '#ff9900', options.count || 10);
                break;
        }
    };

    const updateAndRenderParticles = (ctx, worldToScreen, camera) => {
        particleSystem.update();
        particleSystem.render(ctx, worldToScreen, camera);
    };

    instance = {
        drawBullet,
        createParticlesByType,
        updateAndRenderParticles
    };
    return instance;
}
