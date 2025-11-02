// vendor/panadero/panadero-solarsysinvaders/client/src/composables/drawing/useCollectibles.js
import { useGameUtils } from '../useGameUtils';

let instance = null;

export function useCollectibles() {
    if (instance) return instance;
 
    const { worldToScreen } = useGameUtils();
    
    const drawCollectible = (ctx, collectible, worldToScreen, camera) => {
        const screenPos = worldToScreen(collectible.x, collectible.y, camera);
        
        ctx.save();
        ctx.translate(screenPos.x, screenPos.y);
        
        const time = Date.now() * 0.003;
        const pulse = Math.sin(time) * 0.2 + 0.8;
        const size = collectible.radius * 0.5 * pulse;
        
        ctx.strokeStyle = collectible.color;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(-size, 0);
        ctx.lineTo(size, 0);
        ctx.moveTo(0, -size);
        ctx.lineTo(0, size);
        ctx.stroke();
        
        ctx.restore();
    };

    const drawResourceField = (ctx, field, worldToScreen, camera) => {
        const screenPos = worldToScreen(field.x, field.y, camera);
        
        ctx.save();
        ctx.translate(screenPos.x, screenPos.y);
        
        ctx.strokeStyle = field.type.color;
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(0, 0, field.radius, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
    };

    // Helper shape drawing functions
    const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        
        for(let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };

    const drawDroplet = (ctx, cx, cy, radius) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy - radius);
        
        ctx.bezierCurveTo(
            cx + radius, cy - radius,
            cx + radius, cy,
            cx, cy + radius
        );
        ctx.bezierCurveTo(
            cx - radius, cy,
            cx - radius, cy - radius,
            cx, cy - radius
        );
        
        ctx.fill();
        ctx.stroke();
    };

    const drawCrystal = (ctx, cx, cy, radius) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy - radius);
        ctx.lineTo(cx + radius, cy);
        ctx.lineTo(cx, cy + radius);
        ctx.lineTo(cx - radius, cy);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };

    instance = {
        drawCollectible,
        drawResourceField,
        drawStar,
        drawDroplet,
        drawCrystal
    };
    return instance;
}
