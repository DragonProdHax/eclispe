import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import gamesData from '../data/games.json';

// Import game images
import cookieClickerImg from '../assets/cookie-clicker.png';
import oneVOneLolImg from '../assets/1v1lol.png';
import polytrackImg from '../assets/polytrack.jpg';
import ragdollArchersImg from '../assets/ragdoll-archers.jpg';
import clusterRushImg from '../assets/cluster-rush.png';

const GamePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentGame, setCurrentGame] = useState(null);
  const [randomGames, setRandomGames] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameNotFound, setGameNotFound] = useState(false);

  const gameImages = {
    1: oneVOneLolImg,
    2: clusterRushImg,
    3: cookieClickerImg,
    4: polytrackImg,
    5: ragdollArchersImg
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const gameId = searchParams.get('id') || location.search.substring(1);

    // If no game ID, redirect to games page
    if (!gameId) {
      navigate('/games');
      return;
    }

    // Find the game by gameId
    const game = gamesData.games.find(g => g.gameId === gameId);
    
    if (game) {
      setCurrentGame({
        ...game,
        image: gameImages[game.id]
      });
      setGameNotFound(false);
      
      // Get 3 random games excluding current game
      const otherGames = gamesData.games.filter(g => g.id !== game.id);
      const shuffled = otherGames.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3).map(g => ({
        ...g,
        image: gameImages[g.id]
      }));
      setRandomGames(selected);
    } else {
      setGameNotFound(true);
      setCurrentGame(null);
    }
  }, [location, navigate, gameImages]);

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePlayGame = () => {
    if (currentGame && currentGame['raw-game-link']) {
      setIsPlaying(true);
    }
  };

  const handleGameNavigation = (gameId) => {
    navigate(`/game?${gameId}`);
  };

  if (gameNotFound) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 max-w-md mx-auto"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-2xl mb-4">Game Not Found</h2>
            <p className="text-white/60 text-lg mb-6">This game is not in the CDN</p>
            <motion.button
              onClick={() => navigate('/games')}
              className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Games
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (!currentGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Game Section */}
            <div className="flex-1">
              {/* Game Header */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Game Icon */}
                  <motion.div
                    className="w-32 h-32 rounded-3xl overflow-hidden bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 p-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={currentGame.image} 
                      alt={currentGame.name}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </motion.div>

                  {/* Game Info */}
                  <div className="flex-1">
                    <motion.h1 
                      className="text-4xl md:text-5xl font-black text-white mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {currentGame.name}
                    </motion.h1>
                    
                    <motion.div
                      className="flex flex-wrap gap-3 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <span className="px-4 py-2 bg-purple-500/30 text-purple-300 text-sm rounded-full">
                        {currentGame.category}
                      </span>
                      {currentGame.tags.slice(0, 3).map((tag, index) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.button
                      onClick={handlePlayGame}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={!currentGame['raw-game-link']}
                    >
                      {currentGame['raw-game-link'] ? 'PLAY NOW!' : 'Coming Soon'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Game Player */}
              <AnimatePresence>
                {isPlaying && currentGame['raw-game-link'] && (
                  <motion.div
                    className="mb-8 bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-bold text-xl">Now Playing: {currentGame.name}</h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => window.location.reload()}
                          className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                          title="Reload Game"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            const iframe = document.querySelector('#game-iframe');
                            if (iframe.requestFullscreen) {
                              iframe.requestFullscreen();
                            }
                          }}
                          className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                          title="Fullscreen"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                      <iframe
                        id="game-iframe"
                        src={currentGame['raw-game-link']}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={currentGame.name}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Game Description */}
              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-white font-bold text-2xl mb-4">Description</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {currentGame.description}
                </p>
                <div className="text-white/50 text-sm">
                  <span>Today's Date: {getCurrentDate()}</span>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Random Games */}
            <div className="w-full lg:w-80">
              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 sticky top-24"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-white font-bold text-xl mb-6">More Games</h3>
                <div className="space-y-4">
                  {randomGames.map((game, index) => (
                    <motion.div
                      key={game.id}
                      className="group cursor-pointer"
                      onClick={() => handleGameNavigation(game.gameId)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500/50 via-pink-400/50 to-purple-600/50 group-hover:from-purple-500 group-hover:via-pink-400 group-hover:to-purple-600 transition-all duration-300">
                        <div className="bg-gray-900 rounded-2xl p-4 flex items-center gap-4">
                          <img 
                            src={game.image} 
                            alt={game.name}
                            className="w-16 h-16 object-cover rounded-xl"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-semibold text-sm truncate group-hover:text-purple-300 transition-colors duration-300">
                              {game.name}
                            </h4>
                            <p className="text-white/50 text-xs mt-1">
                              {game.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
