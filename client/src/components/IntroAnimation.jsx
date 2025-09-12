import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < 4) {
        setCurrentPhase(currentPhase + 1);
      } else {
        onComplete();
      }
    }, currentPhase === 0 ? 2000 : currentPhase === 1 ? 1500 : currentPhase === 2 ? 1500 : currentPhase === 3 ? 2500 : 800);

    return () => clearTimeout(timer);
  }, [currentPhase, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-void-900 via-eclipse-900 to-void-900 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        scale: 0.8,
        opacity: 0,
        filter: "blur(10px)"
      }}
      transition={{ 
        duration: 1.0, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-eclipse-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Eclipse Animation */}
        <motion.div className="relative mb-12">
          {/* Moon */}
          <motion.svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            className="absolute"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ 
              scale: currentPhase >= 0 ? 1.5 : 0.3,
              opacity: currentPhase >= 0 ? 1 : 0,
            }}
            transition={{ 
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <defs>
              <radialGradient id="moonGradient" cx="25%" cy="25%" r="80%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="20%" stopColor="#f1f5f9" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#94a3b8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#475569" stopOpacity="0.6" />
              </radialGradient>
              
              <radialGradient id="craterGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#475569" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#334155" stopOpacity="0.4" />
              </radialGradient>
              
              <radialGradient id="shadowGradient" cx="60%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#1e293b" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0f172a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
              </radialGradient>
              
              <filter id="moonGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="craterDepth">
                <feGaussianBlur stdDeviation="1" result="blur"/>
                <feOffset in="blur" dx="1" dy="1" result="offset"/>
                <feMerge>
                  <feMergeNode in="offset"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main moon surface */}
            <motion.circle
              cx="100"
              cy="100"
              r="60"
              fill="url(#moonGradient)"
              filter="url(#moonGlow)"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Large crater - Mare Tranquillitatis inspired */}
            <motion.ellipse
              cx="85"
              cy="90"
              rx="12"
              ry="8"
              fill="url(#craterGradient)"
              filter="url(#craterDepth)"
              animate={{ 
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Medium crater */}
            <circle
              cx="115"
              cy="85"
              r="6"
              fill="url(#craterGradient)"
              filter="url(#craterDepth)"
              opacity="0.7"
            />
            
            {/* Small craters */}
            <circle cx="95" cy="110" r="3" fill="url(#craterGradient)" opacity="0.5" />
            <circle cx="120" cy="105" r="2" fill="url(#craterGradient)" opacity="0.6" />
            <circle cx="75" cy="115" r="2.5" fill="url(#craterGradient)" opacity="0.4" />
            <circle cx="110" cy="120" r="1.5" fill="url(#craterGradient)" opacity="0.7" />
            
            {/* Mare (dark plains) */}
            <motion.path
              d="M 70 95 Q 85 85 100 95 Q 115 105 130 95 Q 125 115 100 120 Q 75 115 70 95 Z"
              fill="url(#shadowGradient)"
              opacity="0.3"
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Lunar highlands texture */}
            <motion.circle
              cx="100"
              cy="100"
              r="58"
              fill="none"
              stroke="url(#shadowGradient)"
              strokeWidth="0.5"
              strokeDasharray="2,3"
              opacity="0.3"
              animate={{ 
                rotate: 360,
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.svg>


          {/* Moonlight Glow Effect */}
          <motion.svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentPhase >= 0 ? 1 : 0,
            }}
            transition={{ 
              duration: 1.5,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.circle
              cx="100"
              cy="100"
              r="75"
              fill="none"
              stroke="#f8fafc"
              strokeWidth="1"
              strokeOpacity="0.3"
              animate={{ 
                r: [75, 85, 75],
                strokeOpacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="0.5"
              strokeOpacity="0.2"
              animate={{ 
                r: [90, 100, 90],
                strokeOpacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.svg>
        </motion.div>

        {/* Text Animations */}
        <div className="relative h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentPhase === 0 && (
              <motion.h1
                key="welcome"
                className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black text-glow text-center"
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.5 }}
                transition={{ 
                  duration: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                Welcome to Eclipse
              </motion.h1>
            )}
            
            {currentPhase === 2 && (
              <motion.h2
                key="games"
                className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-eclipse-300 text-center"
                initial={{ opacity: 0, y: 80, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -150, scale: 0.6 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                A lot of games
              </motion.h2>
            )}
            
            {currentPhase === 3 && (
              <motion.h3
                key="fingertips"
                className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-semibold text-nebula-300 text-center"
                initial={{ opacity: 0, x: 150, scale: 0.6 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                All at your fingertips
              </motion.h3>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-void-900/50 pointer-events-none" />
    </motion.div>
  );
};

export default IntroAnimation;
