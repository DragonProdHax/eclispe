import React from 'react';
import { motion } from 'framer-motion';

const EclipseTitle = () => {
  return (
    <motion.div
      className="fixed top-6 left-6 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Half Moon Icon */}
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Multiple layered glows for intense illumination */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-white/60 to-purple-300/40 rounded-full blur-xl"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1.5, 2.2, 1.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 bg-white/50 rounded-full blur-lg"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1.2, 1.8, 1.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />
            <motion.div
              className="absolute inset-0 bg-cyan-200/60 rounded-full blur-md"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
            />
            
            {/* Shiny moon with gradient and shine effect */}
            <motion.div className="relative z-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-10"
              >
                <defs>
                  <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="30%" stopColor="#e0f2fe" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#b3e5fc" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#81d4fa" stopOpacity="0.7" />
                  </linearGradient>
                  <filter id="moonGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M12 3a6 6 0 0 0 9 5.2A9 9 0 1 1 8.2 3Z"
                  fill="url(#moonGradient)"
                  filter="url(#moonGlow)"
                />
                {/* Shine highlight */}
                <path
                  d="M15 6a3 3 0 0 0 4 2.8A5 5 0 1 1 10.8 6Z"
                  fill="rgba(255, 255, 255, 0.6)"
                />
              </svg>
              
              {/* Animated shine streak */}
              <motion.div
                className="absolute top-1 left-2 w-1 h-3 bg-white/80 rounded-full blur-sm"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
            
          </motion.div>
          
          {/* Eclipse Text */}
          <motion.div
            className="text-white font-bold text-lg tracking-wide"
          >
            ECLIPSE
          </motion.div>
        </motion.div>
        
        {/* Ambient glow around the title */}
        <motion.div
          className="absolute inset-0 bg-white/5 rounded-full blur-xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default EclipseTitle;
