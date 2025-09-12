import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gamesData from '../data/games.json';

// Import game images
import cookieClickerImg from '../assets/cookie-clicker.png';
import oneVOneLolImg from '../assets/1v1lol.png';
import polytrackImg from '../assets/polytrack.jpg';
import ragdollArchersImg from '../assets/ragdoll-archers.jpg';
import clusterRushImg from '../assets/cluster-rush.png';

const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Map image imports to game IDs
    const gameImages = {
      1: oneVOneLolImg,
      2: clusterRushImg,
      3: cookieClickerImg,
      4: polytrackImg,
      5: ragdollArchersImg
    };

    // Load games from JSON
    const loadedGames = gamesData.games.map(game => ({
      ...game,
      image: gameImages[game.id]
    }));
    setGames(loadedGames);
    setFilteredGames(loadedGames);
  }, []);

  useEffect(() => {
    // Filter games based on search term and selected tag
    let filtered = games;
    
    // Filter by selected tag first
    if (selectedTag) {
      filtered = filtered.filter(game =>
        game.category.toLowerCase() === selectedTag.toLowerCase() ||
        game.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))
      );
    }
    
    // Then filter by search term
    if (searchTerm) {
      filtered = filtered.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredGames(filtered);
  }, [searchTerm, games, selectedTag]);

  const handleGameClick = (game) => {
    navigate(`/game?${game.gameId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-black mb-6 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              GAMES
            </motion.h1>
            
            <motion.p 
              className="text-white/70 text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover and play amazing games from our collection
            </motion.p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <motion.input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Tag Filters */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {/* All Games Button */}
              <motion.button
                onClick={() => setSelectedTag(null)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedTag === null
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Games
              </motion.button>

              {/* Racing Filter */}
              <motion.button
                onClick={() => setSelectedTag('racing')}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedTag === 'racing'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Racing
              </motion.button>

              {/* Battle Royale Filter */}
              <motion.button
                onClick={() => setSelectedTag('battle royale')}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedTag === 'battle royale'
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Battle Royale
              </motion.button>

              {/* Platformer Filter */}
              <motion.button
                onClick={() => setSelectedTag('platformer')}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedTag === 'platformer'
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Platformer
              </motion.button>
            </div>
          </motion.div>

          {/* Games Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {filteredGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  layout
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => handleGameClick(game)}
                >
                  {/* Game Card */}
                  <motion.div
                    className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gray-900 rounded-3xl p-6 h-80 flex flex-col">
                      {/* Game Image */}
                      <div className="relative flex-1 rounded-2xl overflow-hidden mb-4">
                        <img 
                          src={game.image} 
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                      </div>
                      
                      {/* Game Info */}
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg mb-2">{game.name}</h3>
                        <span className="inline-block px-3 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full">
                          {game.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          <AnimatePresence>
            {filteredGames.length === 0 && (searchTerm || selectedTag) && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-md mx-auto"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </motion.div>
                  <motion.h3 
                    className="text-white font-bold text-xl mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    No Games Found
                  </motion.h3>
                  <motion.p 
                    className="text-white/60 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {searchTerm && selectedTag 
                      ? `No games match "${searchTerm}" in ${selectedTag} category`
                      : searchTerm 
                        ? `No games found matching "${searchTerm}"`
                        : `No games found in ${selectedTag} category`
                    }
                  </motion.p>
                  <motion.button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedTag(null);
                    }}
                    className="mt-4 px-6 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear Filters
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
