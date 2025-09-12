import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import game images
import cookieClickerImg from '../assets/cookie-clicker.png';
import oneVOneLolImg from '../assets/1v1lol.png';
import polytrackImg from '../assets/polytrack.jpg';
import ragdollArchersImg from '../assets/ragdoll-archers.jpg';

const HomePage = () => {
  const [hoveredGame, setHoveredGame] = useState(null);
  const [particles] = useState(() => {
    // Create static particles - no animation to avoid lag
    const staticParticles = [];
    for (let i = 0; i < 25; i++) {
      staticParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
      });
    }
    return staticParticles;
  });

  const games = [
    {
      id: 1,
      title: "Cookie Clicker",
      image: cookieClickerImg,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "1v1.lol",
      image: oneVOneLolImg,
      color: "bg-red-500"
    },
    {
      id: 3,
      title: "Polytrack",
      image: polytrackImg,
      color: "bg-green-600"
    },
    {
      id: 4,
      title: "Ragdoll Archers",
      image: ragdollArchersImg,
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Optimized Static Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-purple-400 rounded-full opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: particle.id * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Simple decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line
            x1="10%"
            y1="20%"
            x2="90%"
            y2="80%"
            stroke="#a855f7"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="20%"
            y1="80%"
            x2="80%"
            y2="20%"
            stroke="#a855f7"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 flex items-center justify-between">
          
          {/* Left side content */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-7xl md:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-purple-400">ECLIPSE</span>
            </motion.h1>
            
            <motion.p 
              className="text-white text-xl mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              DIVE INTO 250+ TOP EXPERIENCES ACROSS MULTIPLE DIFFERENT 
              CATEGORIES—THERE'S SO MUCH TO EXPLORE AND ENJOY.
            </motion.p>
            
            <motion.button
              className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-400 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START PLAYING!
            </motion.button>

            {/* Recommended section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h3 className="text-white text-lg font-semibold mb-2 flex items-center">
                RECOMMENDED 
                <motion.div
                  className="ml-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </h3>
            </motion.div>
          </motion.div>

          {/* Right side games grid */}
          <motion.div 
            className="flex-1 max-w-lg ml-16"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Trending Section with Outline */}
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-3xl p-1"
                style={{
                  background: 'linear-gradient(135deg, #9333ea, #facc15, #9333ea)'
                }}
                animate={{
                  background: [
                    'linear-gradient(135deg, #9333ea, #facc15, #9333ea)',
                    'linear-gradient(225deg, #facc15, #9333ea, #facc15)',
                    'linear-gradient(315deg, #9333ea, #facc15, #9333ea)',
                    'linear-gradient(45deg, #facc15, #9333ea, #facc15)',
                    'linear-gradient(135deg, #9333ea, #facc15, #9333ea)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full bg-gray-900/90 backdrop-blur-sm rounded-3xl" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Trending Header */}
                <motion.div
                  className="flex items-center justify-center mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <svg
                    className="w-6 h-6 mr-2 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                  </svg>
                  <h3 className="text-white text-xl font-bold tracking-wide">TRENDING</h3>
                </motion.div>
                
                <div className="grid grid-cols-2 gap-6">
              {games.map((game, index) => (
                <motion.div 
                  key={game.id} 
                  className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 0.8 + index * 0.1 },
                    scale: { duration: 0.6, delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 },
                    y: { 
                      duration: 2 + index * 0.3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5 + index * 0.4
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -12,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                >
                  <div
                    className={`${game.color} rounded-xl p-6 h-40 flex items-center justify-center cursor-pointer relative overflow-hidden group`}
                  >
                    {/* Game image and overlay */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-white font-bold text-sm tracking-wide">
                            {game.title.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    {/* Hover tooltip */}
                    {hoveredGame === game.id && (
                      <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-full text-sm font-semibold whitespace-nowrap z-50 shadow-lg border border-purple-400"
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {game.title}
                        {/* Tooltip arrow - rounded */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 -mt-1"></div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
