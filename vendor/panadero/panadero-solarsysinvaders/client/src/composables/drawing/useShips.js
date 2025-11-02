// vendor/panadero/panadero-solarsysinvaders/client/src/composables/drawing/useShips.js
import { useGameUtils } from '../useGameUtils';
import { useParticleSystem } from '../shared/useParticleSystem';

let instance = null;

export function useShips() {
    if (instance) return instance;

    const { worldToScreen } = useGameUtils();
    const { particleSystem } = useParticleSystem();

    const drawShip = (ctx, shipState, worldToScreen, camera) => {
        const screenPos = worldToScreen(shipState.position.x, shipState.position.y, camera);
        
        ctx.save();
        ctx.translate(screenPos.x, screenPos.y);
        
        // Draw ship first (existing ship drawing code)
        ctx.rotate(shipState.angle);
        ctx.strokeStyle = shipState.color;
        ctx.fillStyle = shipState.color;
        ctx.lineWidth = 2;
        
        if (shipState.pattern === 'ufo') {
            // Main saucer body
            ctx.beginPath();
            ctx.ellipse(0, 0, 15, 6, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
            
            // Top dome
            ctx.beginPath();
            ctx.arc(0, -3, 8, Math.PI, 0, false);
            ctx.stroke();
            ctx.fill();
            
            // Bottom lights - changed to black
            [-10, -5, 0, 5, 10].forEach(x => {
                ctx.beginPath();
                ctx.arc(x, 2, 1, 0, Math.PI * 2);
                ctx.fillStyle = 'black';
                ctx.fill();
            });
            
            // Add plasma trail for UFO ships ONLY when engine is on
            if (shipState.controls?.engineOn) {
                particleSystem.createPlasmaTrail(shipState.position.x, shipState.position.y, shipState.angle);
            }
        } else {
            // Default fighter shape
            ctx.beginPath();
            ctx.moveTo(0, -10);
            ctx.lineTo(7, 10);
            ctx.lineTo(0, 7);
            ctx.lineTo(-7, 10);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        
        // Draw engine effect if active
        if (shipState.controls?.engineOn) {
            const time = Date.now() * 0.01;
            const flicker = Math.sin(time) * 0.3 + 0.7;
            
            // Main flame
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 153, 0, ${flicker})`;
            ctx.fillStyle = `rgba(255, 200, 0, ${flicker * 0.8})`;
            
            const flameLength = (Math.sin(time * 1.5) * 2 + 10) * flicker;
            const flameWidth = 4 * flicker;
            
            ctx.moveTo(0, 8);
            ctx.lineTo(flameWidth, 8 + flameLength * 0.3);
            ctx.lineTo(0, 8 + flameLength);
            ctx.lineTo(-flameWidth, 8 + flameLength * 0.3);
            ctx.closePath();
            
            ctx.fill();
            ctx.stroke();
            
            // Inner flame glow
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 200, ${flicker * 0.8})`;
            ctx.moveTo(0, 8);
            ctx.lineTo(flameWidth * 0.5, 8 + flameLength * 0.4);
            ctx.lineTo(0, 8 + flameLength * 0.8);
            ctx.lineTo(-flameWidth * 0.5, 8 + flameLength * 0.4);
            ctx.closePath();
            ctx.stroke();
            
            // Add particle effect
            const particleCount = 3;
            ctx.fillStyle = `rgba(255, 200, 0, ${flicker * 0.5})`;
            for (let i = 0; i < particleCount; i++) {
                const particleOffset = Math.sin(time + i * Math.PI * 2 / particleCount) * 2;
                const particleY = 8 + flameLength * (0.5 + Math.random() * 0.5);
                ctx.beginPath();
                ctx.arc(particleOffset, particleY, 1, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Reset rotation for UI elements
        ctx.rotate(-shipState.angle);
        
        // Draw callSign and health bar at 2 o'clock position
        if (shipState.callSign) {
            const distance = 35;
            const angle = -Math.PI/3;
            
            const uiX = Math.cos(angle) * distance;
            const uiY = Math.sin(angle) * distance;
            
            const isCritical = shipState.health < 25;
            
            if (isCritical) {
                ctx.shadowColor = '#FF0000';
                ctx.fillStyle = '#FF0000';
            } else {
                ctx.shadowBlur = 0;
                ctx.fillStyle = '#FFFFFF';
            }
            
            ctx.font = 'bold 12px Courier New';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            ctx.lineWidth = 1;
            
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.strokeText(shipState.callSign, uiX, uiY);
            ctx.fillText(shipState.callSign, uiX, uiY);
            
            ctx.shadowBlur = 0;
            
            // Draw health bar
            const healthBarWidth = 30;
            const healthBarHeight = 4;
            const healthBarY = uiY + 4;
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fillRect(uiX, healthBarY, healthBarWidth, healthBarHeight);
            
            const healthPercent = shipState.health / shipState.maxHealth;
            ctx.fillStyle = isCritical ? '#FF0000' : '#FFFFFF';
            ctx.fillRect(uiX, healthBarY, healthBarWidth * healthPercent, healthBarHeight);
            
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.lineWidth = 1;
            ctx.strokeRect(uiX, healthBarY, healthBarWidth, healthBarHeight);
        }
        
        ctx.restore();
    };

    instance = { drawShip };
    return instance;
}
