"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() - 0.5) * 20}%`,
              `${particle.x}%`,
            ],
            y: [
              `${particle.y}%`,
              `${particle.y + (Math.random() - 0.5) * 20}%`,
              `${particle.y}%`,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground; 