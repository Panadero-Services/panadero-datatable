// vendor/panadero/panadero-solarsysinvaders/client/src/composables/drawing/useSafeZones.js
import { useGameUtils } from '../useGameUtils';

let instance = null;

export function useSafeZones() {
    if (instance) return instance;

    const drawSafeZone = (ctx, homePosition, worldToScreen, camera) => {
        // Convert world coordinates to screen coordinates
        const screenPos = worldToScreen(homePosition.x, homePosition.y, camera);
        
        ctx.save();
        ctx.translate(screenPos.x, screenPos.y);
        
        // Safe zone box reduced to 300 units
        const safeZoneSize = 300;
        ctx.strokeStyle = homePosition.color || '#FFFFFF';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        
        ctx.beginPath();
        ctx.rect(
            -safeZoneSize/2, 
            -safeZoneSize/2, 
            safeZoneSize, 
            safeZoneSize
        );
        ctx.stroke();
        
        ctx.setLineDash([]);
        ctx.restore();
    };

    const drawHome = (ctx, homePosition, worldToScreen, camera) => {
        // Convert world coordinates to screen coordinates
        const screenPos = worldToScreen(homePosition.x, homePosition.y, camera);
        
        ctx.save();
        ctx.translate(screenPos.x, screenPos.y);
        
        // Draw a box with border lines
        const boxSize = 20; // Size of the box
        ctx.strokeStyle = homePosition.color || '#FFFFFF'; // Use player color or default to white
        ctx.lineWidth = 2;
        
        // Draw the box
        ctx.beginPath();
        ctx.rect(-boxSize/2, -boxSize/2, boxSize, boxSize);
        ctx.stroke();
        
        ctx.restore();
    };

    instance = { drawHome, drawSafeZone };
    return instance;
}
