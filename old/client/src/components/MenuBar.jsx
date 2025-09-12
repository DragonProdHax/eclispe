import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MenuBar = ({ currentPage = 'home', onNavigate }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'games', label: 'Games', path: '/games' },
    { id: 'settings', label: 'Settings', path: '/settings' }
  ];

  const handleNavigation = (item) => {
    console.log('Navigation clicked:', item.id);
    // Use React Router navigation directly
    navigate(item.path);
    // Also call the parent callback if provided
    if (onNavigate) {
      onNavigate(item.id);
    }
  };

  return (
    <div
      className="fixed top-6 right-6 z-50"
      style={{ pointerEvents: 'auto' }}
    >
      <div
        className="flex items-center space-x-1 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-2xl"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Menu Items */}
        <div className="flex items-center space-x-1">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            className={`menu-button relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
              currentPage === item.id
                ? 'text-white'
                : 'text-white/70 hover:text-white'
            }`}
            style={{ pointerEvents: 'auto', zIndex: 100 }}
            onMouseEnter={() => {
              console.log('Mouse enter:', item.id);
              setHoveredItem(item.id);
            }}
            onMouseLeave={() => {
              console.log('Mouse leave:', item.id);
              setHoveredItem(null);
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Button clicked:', item.id);
              handleNavigation(item);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Background glow effect on hover */}
            {hoveredItem === item.id && (
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                layoutId="menuHover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            )}
            
            {/* Active indicator */}
            {currentPage === item.id && (
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-full"
                layoutId="activeTab"
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}
            
            {/* Text with enhanced hover effect */}
            <motion.span
              className="relative z-10"
              animate={{
                textShadow: hoveredItem === item.id 
                  ? '0 0 20px rgba(255, 255, 255, 0.5)' 
                  : '0 0 0px rgba(255, 255, 255, 0)'
              }}
              transition={{ duration: 0.3 }}
            >
              {item.label}
            </motion.span>
            
            {/* Particle effect on hover */}
            {hoveredItem === item.id && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.button>
        ))}
        </div>
        
        {/* Ambient glow around the entire menu */}
        <div
          className="absolute inset-0 bg-white/5 rounded-full blur-xl opacity-30"
        />
      </div>
    </div>
  );
};

export default MenuBar;
