// Import game configuration and all drawing-related composables
import { GAME_CONFIG } from '../../../shared/gameConfig.js';
import { useBlackHole } from './drawing/useBlackHole';
import { useStarfield } from './drawing/useStarfield';
import { useShips } from './drawing/useShips';
import { useCollectibles } from './drawing/useCollectibles';
import { useEffects } from './drawing/useEffects';
import { useSafeZones } from './drawing/useSafeZones';
import { useParticleSystem } from './shared/useParticleSystem';
import { useGameUtils } from './useGameUtils';

let instance = null;

/**
 * Main drawing composable that aggregates all game rendering functions.
 * Acts as a central hub for all canvas drawing operations, collecting
 * specialized drawing functions from individual composables.
 */
export function useGameDrawing() {
    if (instance) return instance;

    const clearCanvas = (ctx) => {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
    };

    const { worldToScreen } = useGameUtils();
    const { particleSystem } = useParticleSystem();
    
    // Get singleton instances
    const { drawBlackHole } = useBlackHole();
    const { drawStarfield } = useStarfield();
    const { drawShip } = useShips();
    const { drawCollectible, drawResourceField, drawStar, drawDroplet, drawCrystal } = useCollectibles();
    const { drawBullet, createParticlesByType, updateAndRenderParticles } = useEffects();
    const { drawHome, drawSafeZone } = useSafeZones();

    const drawScorePopup = (ctx, popup, camera) => {
        const screenPos = worldToScreen(popup.x, popup.y, camera);
        
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 0, ${popup.opacity})`;
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`+${popup.amount}`, screenPos.x, screenPos.y - 20);
        ctx.restore();
        
        // Update popup animation
        popup.y -= 1;
        popup.opacity -= 0.02;
    };

    // Export all drawing functions as a unified API
    // This allows components to import just what they need
    // while maintaining a single source of truth for drawing logic
    instance = {
        clearCanvas,
        drawBlackHole,
        drawStarfield,
        drawShip,
        drawCollectible,
        drawResourceField,
        drawStar,
        drawDroplet,
        drawCrystal,
        drawBullet,
        drawHome,
        drawSafeZone,
        updateAndRenderParticles,
        createParticlesByType,
        particleSystem,
        drawScorePopup
    };
    
    return instance;
} 