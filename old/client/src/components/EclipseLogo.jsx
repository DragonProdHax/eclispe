import React from 'react';
import { motion } from 'framer-motion';

const EclipseLogo = ({ size = 120 }) => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="eclipse-shadow"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer glow */}
        <defs>
          <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9c6eff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#5a0fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="moonGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#475569" stopOpacity="0.5" />
          </radialGradient>
          
          <radialGradient id="eclipseGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="1" />
            <stop offset="80%" stopColor="#1e293b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5a0fff" stopOpacity="0.3" />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer glow circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="url(#outerGlow)"
          className="opacity-60"
        />
        
        {/* Moon (background) */}
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="url(#moonGradient)"
          filter="url(#glow)"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Eclipse shadow */}
        <motion.ellipse
          cx="120"
          cy="100"
          rx="45"
          ry="60"
          fill="url(#eclipseGradient)"
          animate={{ 
            cx: [120, 80, 120],
            opacity: [0.9, 0.7, 0.9]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Corona effect */}
        <motion.circle
          cx="100"
          cy="100"
          r="65"
          fill="none"
          stroke="#9c6eff"
          strokeWidth="1"
          strokeOpacity="0.6"
          animate={{ 
            r: [65, 70, 65],
            strokeOpacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Inner corona */}
        <motion.circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="#c026d3"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          animate={{ 
            r: [75, 80, 75],
            strokeOpacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-eclipse-400 rounded-full particle"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EclipseLogo;
