import React, { useEffect, useState, useCallback } from 'react';

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

interface Cupid {
  id: number;
  x: number;
  y: number;
  visible: boolean;
  opacity: number;
  scale: number;
}

const ParticleEffects: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [cupid, setCupid] = useState<Cupid | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Particle emojis for petals and hearts
  const petalEmojis = ['🌸', '🌺', '💖', '💕', '🌹', '🌷'];

  // Optimized animation loop
  useEffect(() => {
    let animationFrame: number;
    
    const animate = () => {
      // Update particles with better performance
      setParticles(prev => {
        if (prev.length === 0) return prev;
        
        return prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.2, // increased gravity for faster fall
          life: particle.life - 2, // faster fade (1.25 seconds instead of 2.5)
          rotation: particle.rotation + particle.rotationSpeed
        })).filter(particle => particle.life > 0);
      });

      // Update cupid animation
      setCupid(prev => {
        if (!prev) return prev;
        
        if (prev.visible && prev.opacity > 0) {
          return {
            ...prev,
            opacity: prev.opacity - 0.02,
            scale: prev.scale + 0.005
          };
        } else if (prev.opacity <= 0) {
          return null;
        }
        
        return prev;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Cupid random appearance
  useEffect(() => {
    const showCupid = () => {
      if (!cupid) {
        const newCupid: Cupid = {
          id: Date.now(),
          x: Math.random() * (window.innerWidth - 100),
          y: Math.random() * (window.innerHeight - 100),
          visible: true,
          opacity: 1,
          scale: 0.8
        };
        setCupid(newCupid);
      }
    };

    const interval = setInterval(showCupid, Math.random() * 8000 + 5000); // 5-13 seconds
    return () => clearInterval(interval);
  }, [cupid]);

  // Mouse move handler for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create particles on mouse move (hover effect) - reduced frequency for better performance
      if (Math.random() > 0.85) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          vx: (Math.random() - 0.5) * 3,
          vy: -Math.random() * 3 - 1,
          life: 75, // 1.25 seconds for faster fade
          maxLife: 75,
          size: Math.random() * 15 + 10,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8
        };

        setParticles(prev => [...prev, newParticle]);
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Create burst of particles on click - optimized for better performance
      const particleCount = 20;
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const speed = Math.random() * 4 + 3; // faster initial speed
        
        newParticles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          life: 75, // 1.25 seconds for faster fade
          maxLife: 75,
          size: Math.random() * 20 + 15,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12
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
            className="absolute select-none will-change-transform"
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

      {/* Cupid character */}
      {cupid && (
        <div
          className="absolute select-none will-change-transform animate-fade-in"
          style={{
            left: cupid.x,
            top: cupid.y,
            fontSize: '60px',
            opacity: cupid.opacity,
            transform: `scale(${cupid.scale})`,
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            zIndex: 60
          }}
        >
          💘
        </div>
      )}
    </div>
  );
};

export default ParticleEffects;