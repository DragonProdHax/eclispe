import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(255, 255, 255, 0.08) 0%, 
          rgba(255, 255, 255, 0.04) 30%, 
          rgba(255, 255, 255, 0.02) 50%, 
          transparent 70%)`
      }}
      animate={{
        opacity: [0.6, 0.8, 0.6]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default MouseSpotlight;
