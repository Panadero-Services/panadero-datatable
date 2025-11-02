export class ParticleSystem {
    constructor() {
        this.particles = [];
        this.plasmaConnections = []; // For electric arcs
    }

    // Create rocket particles (existing)
    createRocketParticles(x, y, color, count = 10) {
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                life: 30 + Math.random() * 20,
                maxLife: 30 + Math.random() * 20,
                color: color || '#ff9900',
                size: Math.random() * 3 + 1,
                type: 'rocket'
            });
        }
    }

    // Create plasma trail for UFO ships - smaller and behind the ship
    createPlasmaTrail(x, y, shipAngle, count = 8) { // Reduced count from 15 to 8
        for (let i = 0; i < count; i++) {
            // Calculate position behind the ship (opposite to ship's facing direction)
            const behindDistance = 8 + Math.random() * 6; // Smaller spread
            const behindX = x - Math.sin(shipAngle) * behindDistance;
            const behindY = y + Math.cos(shipAngle) * behindDistance;
            
            // Add small random offset behind the ship
            const spreadX = (Math.random() - 0.5) * 8; // Smaller spread
            const spreadY = (Math.random() - 0.5) * 8;
            
            // Velocity should move away from the ship (opposite to ship's direction)
            const speed = 1 + Math.random() * 2; // Slower speed
            const velocityAngle = shipAngle + Math.PI + (Math.random() - 0.5) * 0.3; // Behind ship with small spread
            
            this.particles.push({
                x: behindX + spreadX,
                y: behindY + spreadY,
                vx: Math.sin(velocityAngle) * speed + (Math.random() - 0.5) * 1, // Smaller random velocity
                vy: -Math.cos(velocityAngle) * speed + (Math.random() - 0.5) * 1,
                life: 30 + Math.random() * 20, // Shorter life
                maxLife: 30 + Math.random() * 20,
                color: `hsl(${200 + Math.random() * 40}, 100%, 60%)`, // Blue/cyan variations
                size: Math.random() * 2 + 1, // Smaller size (was 4 + 2)
                type: 'plasma',
                charge: Math.random() > 0.5 ? 1 : -1, // Positive/negative charge
                frequency: 0.1 + Math.random() * 0.2, // For electric arcs
                amplitude: 1 + Math.random() * 2 // Smaller amplitude for wave motion
            });
        }
    }

    // Create gravity well particles (prepared for future)
    createGravityWell(x, y, count = 20) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count; // Evenly distributed
            const radius = 30 + Math.random() * 20;
            
            this.particles.push({
                x: x + Math.cos(angle) * radius,
                y: y + Math.sin(angle) * radius,
                vx: -Math.cos(angle) * 1.5, // Spiral inward
                vy: -Math.sin(angle) * 1.5,
                life: 60 + Math.random() * 40,
                maxLife: 60 + Math.random() * 40,
                color: `hsl(${280 + Math.random() * 40}, 80%, 60%)`, // Purple/violet
                size: Math.random() * 3 + 1,
                type: 'gravity',
                angularVelocity: 0.02 + Math.random() * 0.03,
                orbitRadius: radius
            });
        }
    }

    // Create crystal shard particles (prepared for future)
    createCrystalShards(x, y, count = 12) {
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: x + (Math.random() - 0.5) * 30,
                y: y + (Math.random() - 0.5) * 30,
                vx: (Math.random() - 0.5) * 6,
                vy: (Math.random() - 0.5) * 6,
                life: 50 + Math.random() * 30,
                maxLife: 50 + Math.random() * 30,
                color: `hsl(${0 + Math.random() * 60}, 0%, ${80 + Math.random() * 20}%)`, // Silver/white
                size: Math.random() * 4 + 2,
                type: 'crystal',
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.2,
                scale: 0.5 + Math.random() * 0.5,
                points: 3 + Math.floor(Math.random() * 4) // 3-6 sided crystals
            });
        }
    }

    // Update all particles with enhanced physics
    update() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;
            
            // Type-specific updates
            switch (particle.type) {
                case 'rocket':
                    // Add some randomness to movement
                    particle.vx += (Math.random() - 0.5) * 0.2;
                    particle.vy += (Math.random() - 0.5) * 0.2;
                    break;
                    
                case 'plasma':
                    // Electric wave motion
                    const time = Date.now() * particle.frequency;
                    particle.vx += Math.sin(time) * particle.amplitude * 0.01;
                    particle.vy += Math.cos(time) * particle.amplitude * 0.01;
                    
                    // Plasma fades with electric flicker
                    if (Math.random() < 0.1) {
                        particle.color = `hsl(${200 + Math.random() * 40}, 100%, ${60 + Math.random() * 40}%)`;
                    }
                    break;
                    
                case 'gravity':
                    // Spiral inward motion
                    const dx = particle.x - (particle.x + particle.vx);
                    const dy = particle.y - (particle.y + particle.vy);
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance > 5) {
                        particle.vx *= 0.98; // Slow down
                        particle.vy *= 0.98;
                    }
                    
                    // Rotate around center
                    particle.rotation = (particle.rotation || 0) + particle.angularVelocity;
                    break;
                    
                case 'crystal':
                    // Rotate crystal
                    particle.rotation += particle.rotationSpeed;
                    
                    // Crystal shards reflect light
                    if (Math.random() < 0.05) {
                        particle.color = `hsl(${0 + Math.random() * 60}, 0%, ${90 + Math.random() * 10}%)`;
                    }
                    break;
            }
        });
        
        // Remove dead particles
        this.particles = this.particles.filter(particle => particle.life > 0);
    }

    // Render all particles with enhanced visuals
    render(ctx, worldToScreen, camera) {
        this.particles.forEach(particle => {
            const screenPos = worldToScreen(particle.x, particle.y, camera);
            
            ctx.save();
            ctx.globalAlpha = particle.life / particle.maxLife;
            
            switch (particle.type) {
                case 'rocket':
                    // Simple circular particles
                    ctx.fillStyle = particle.color;
                    ctx.beginPath();
                    ctx.arc(screenPos.x, screenPos.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                    
                case 'plasma':
                    // Electric plasma with glow effect
                    const gradient = ctx.createRadialGradient(
                        screenPos.x, screenPos.y, 0,
                        screenPos.x, screenPos.y, particle.size * 2
                    );
                    gradient.addColorStop(0, particle.color);
                    gradient.addColorStop(1, 'rgba(0, 150, 255, 0)');
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(screenPos.x, screenPos.y, particle.size * 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                    
                case 'gravity':
                    // Spiral particles
                    ctx.fillStyle = particle.color;
                    ctx.beginPath();
                    ctx.arc(screenPos.x, screenPos.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                    
                case 'crystal':
                    // Geometric crystal shapes
                    ctx.fillStyle = particle.color;
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.lineWidth = 1;
                    
                    ctx.save();
                    ctx.translate(screenPos.x, screenPos.y);
                    ctx.rotate(particle.rotation);
                    ctx.scale(particle.scale, particle.scale);
                    
                    // Draw crystal shape
                    ctx.beginPath();
                    for (let i = 0; i < particle.points; i++) {
                        const angle = (Math.PI * 2 * i) / particle.points;
                        const x = Math.cos(angle) * particle.size;
                        const y = Math.sin(angle) * particle.size;
                        
                        if (i === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                    break;
            }
            
            ctx.restore();
        });
    }

    // Clear all particles
    clear() {
        this.particles = [];
    }
} 