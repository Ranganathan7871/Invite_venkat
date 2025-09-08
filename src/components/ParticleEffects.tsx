import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface FloatingCouple {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  rotation: number;
}

const ParticleEffects: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingCouples, setFloatingCouples] = useState<FloatingCouple[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Particle emojis for petals and hearts
  const petalEmojis = ['🌸', '🌺', '💖', '💕', '🌹', '🌷'];

  useEffect(() => {
    let animationFrame: number;
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;
    
    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        setParticles(prev => 
          prev.map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.15, // gravity
            life: particle.life - 1,
            rotation: particle.rotation + particle.rotationSpeed
          })).filter(particle => particle.life > 0)
        );
        
        lastTime = currentTime;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate(0);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Mouse move handler for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create particles on mouse move (hover effect)
      if (Math.random() > 0.7) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 2 - 1,
          life: 150, // 2.5 seconds at 60fps
          maxLife: 150,
          size: Math.random() * 15 + 10,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 5
        };

        setParticles(prev => [...prev, newParticle]);
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Create burst of particles on click
      const particleCount = 15;
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const speed = Math.random() * 3 + 2;
        
        newParticles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          life: 150, // 2.5 seconds at 60fps
          maxLife: 150,
          size: Math.random() * 20 + 15,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8
        });
      }

      setParticles(prev => [...prev, ...newParticles]);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Flower petal particles */}
      {particles.map(particle => {
        const opacity = particle.life / particle.maxLife;
        const emoji = petalEmojis[Math.floor(particle.id) % petalEmojis.length];
        
        return (
          <div
            key={particle.id}
            className="absolute select-none"
            style={{
              left: particle.x,
              top: particle.y,
              fontSize: `${particle.size}px`,
              opacity: opacity,
              transform: `rotate(${particle.rotation}deg)`,
              transition: 'none'
            }}
          >
            {emoji}
          </div>
        );
      })}

    </div>
  );
};

export default ParticleEffects;