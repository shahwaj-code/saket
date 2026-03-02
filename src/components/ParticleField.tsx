import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const ParticleField = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(var(--neon-purple))",
      "hsl(var(--neon-cyan))",
      "hsl(var(--neon-pink))",
      "hsl(var(--neon-green))",
    ];

    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: 20 + i * 5,
            height: 20 + i * 5,
            border: `1px solid hsl(var(--neon-${['purple', 'cyan', 'pink'][i % 3]}) / 0.3)`,
            borderRadius: i % 2 === 0 ? '50%' : '0',
            transform: i % 2 === 0 ? 'rotate(0deg)' : 'rotate(45deg)',
          }}
          animate={{
            rotate: i % 2 === 0 ? [0, 360] : [45, 405],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--neon-purple) / 0.2), transparent)',
        }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--neon-cyan) / 0.2), transparent)',
        }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
};

export default ParticleField;
