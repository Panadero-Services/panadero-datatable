// vendor/panadero/panadero-solarsysinvaders/client/src/composables/drawing/useBlackHole.js

import { useGameUtils } from '../useGameUtils';

let instance = null;
let outerGlowGradient = null;
let borderGlowGradient = null;

const updateBorderGlowGradient = (ctx, currentRadius) => {
    borderGlowGradient = ctx.createRadialGradient(0, 0, currentRadius - 2, 0, 0, currentRadius + 2);
    borderGlowGradient.addColorStop(0, 'rgba(128, 0, 255, 0.8)');
    borderGlowGradient.addColorStop(0.5, 'rgba(255, 0, 255, 0.5)');
    borderGlowGradient.addColorStop(1, 'rgba(128, 0, 255, 0)');
};

export function useBlackHole() {
    if (instance) return instance;

    const { worldToScreen } = useGameUtils();
    
    const drawBlackHole = (ctx, x, y, camera) => {
        const screenPos = worldToScreen(x, y, camera);
        
        ctx.save();
        ctx.translate(screenPos.x, screenPos.y);
        
        const time = performance.now() * 0.001;
        
        // Calculate black hole size FIRST
        const baseRadius = 61;  
        const pulseAmount = Math.sin(time * 0.5) * 59;
        const currentRadius = baseRadius + pulseAmount;
        
        // Outer glow
        if (!outerGlowGradient) {
            outerGlowGradient = ctx.createRadialGradient(0, 0, 1, 0, 0, 100);
            outerGlowGradient.addColorStop(0, 'rgba(128, 0, 128, 0.8)');
            outerGlowGradient.addColorStop(0.5, 'rgba(75, 0, 130, 0.4)');
            outerGlowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }
        
        ctx.beginPath();
        ctx.arc(0, 0, 100, 0, Math.PI * 2);
        ctx.fillStyle = outerGlowGradient;
        ctx.fill();
        
        // Draw rotating accretion disk - optimized
        for (let i = 0; i < 360; i += 30) {
            const angle = (i + time * 20) * Math.PI / 180;
            const radius = 60;
            
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius
            );
            ctx.strokeStyle = `hsla(${(i + time * 100) % 360}, 100%, 50%, 0.5)`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Define base orbit radii and calculate expansion
        const baseOrbitRadii = [120, 150, 180];
        const expansionFactor = (currentRadius - baseRadius) / baseRadius;
        const orbitExpansion = expansionFactor * 20;

        // Draw the orbit paths and objects
        baseOrbitRadii.forEach((baseRadius, orbitIndex) => {
            const orbitRadius = baseRadius + orbitExpansion;
            
            // Draw orbit path
            ctx.beginPath();
            ctx.arc(0, 0, orbitRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(128, 0, 128, 0.4)';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw objects - optimized to 3
            for (let i = 0; i < 3; i++) {
                let speed;
                if (orbitIndex === 1) {
                    speed = -(0.5 - (orbitIndex * 0.1));
                } else {
                    speed = 0.5 - (orbitIndex * 0.1);
                }
                
                const angle = ((i * 120) + time * speed * 50) * Math.PI / 180;
                
                const x = Math.cos(angle) * orbitRadius;
                const y = Math.sin(angle) * orbitRadius;
                
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.atan2(y, x) + Math.PI / 2);
                
                // Different objects for each orbit
                if (orbitIndex === 0) {
                    // Inner orbit - Asteroids
                    ctx.beginPath();
                    ctx.moveTo(0, -6);
                    ctx.lineTo(4, 4);
                    ctx.lineTo(0, 2);
                    ctx.lineTo(-4, 4);
                    ctx.closePath();
                    ctx.fillStyle = '#8B8B8B';
                    ctx.fill();
                } else if (orbitIndex === 1) {
                    // Middle orbit - Rocks
                    ctx.beginPath();
                    ctx.moveTo(0, -6);
                    ctx.lineTo(3, 4);
                    ctx.lineTo(-3, 4);
                    ctx.closePath();
                    ctx.fillStyle = '#A0A0A0';
                    ctx.fill();
                } else {
                    // Outer orbit - Ice crystals
                    ctx.beginPath();
                    ctx.moveTo(0, -6);
                    ctx.lineTo(3, 0);
                    ctx.lineTo(0, 6);
                    ctx.lineTo(-3, 0);
                    ctx.closePath();
                    ctx.fillStyle = '#B0B0FF';
                    ctx.fill();
                }
                
                ctx.restore();
            }
        });

        // Draw pulsing black hole center with glowing border
        updateBorderGlowGradient(ctx, currentRadius);

        ctx.beginPath();
        ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
        ctx.lineWidth = 4;
        ctx.strokeStyle = borderGlowGradient;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
        
        ctx.restore();
    };

    instance = { drawBlackHole };
    return instance;
}