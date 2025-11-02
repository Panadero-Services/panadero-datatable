// vendor/panadero/panadero-solarsysinvaders/client/src/composables/drawing/useStarfield.js
import { GAME_CONFIG } from '../../../../shared/gameConfig.js';
import { useGameUtils } from '../useGameUtils';

let instance = null;

export function useStarfield() {
    if (instance) return instance;

    const { worldToScreen } = useGameUtils();
    
    const drawStarfield = (ctx, camera) => {
        // Clear the canvas with black background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);

        // Update the star layers with higher counts
        const layers = [
            { count: 60,  parallax: 0.01, size: 0.8, brightness: 0.2 },
            { count: 50,  parallax: 0.02, size: 1.0, brightness: 0.3 },
            { count: 40,  parallax: 0.029, size: 1.3, brightness: 0.5 },
            { count: 30,  parallax: 0.045, size: 1.7, brightness: 0.7 },
            { count: 20,  parallax: 0.059, size: 2.0, brightness: 0.9 }
        ];

        const time = Date.now() * 0.001;

        layers.forEach((layer, layerIndex) => {
            const viewX = camera.x * layer.parallax;
            const viewY = camera.y * layer.parallax;
            
            const areaSize = GAME_CONFIG.CANVAS_WIDTH * 2;
            const startX = Math.floor(viewX / areaSize) * areaSize;
            const startY = Math.floor(viewY / areaSize) * areaSize;

            for (let areaX = startX - areaSize; areaX <= startX + areaSize; areaX += areaSize) {
                for (let areaY = startY - areaSize; areaY <= startY + areaSize; areaY += areaSize) {
                    for (let i = 0; i < layer.count; i++) {
                        const seed = (areaX + areaY * 1000 + i * 100 + layerIndex * 10000);
                        const x = areaX + Math.abs(Math.sin(seed * 0.37)) * areaSize;
                        const y = areaY + Math.abs(Math.cos(seed * 0.23)) * areaSize;
                        
                        const starX = x - viewX;
                        const starY = y - viewY;
                        
                        const flickerRate = 0.3 + (Math.sin(seed * 0.37) * 0.3);
                        const flickerAmount = 0.25 + (Math.cos(seed * 0.23) * 0.15);
                        const flicker = Math.sin(time * flickerRate + seed) * flickerAmount + 0.8;
                        const alpha = layer.brightness * flicker;
                        
                        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                        ctx.beginPath();
                        ctx.arc(starX, starY, layer.size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        });
    };

    instance = { drawStarfield };
    return instance;
}
