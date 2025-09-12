import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import GamesPage from './components/GamesPage';
import GamePage from './components/GamePage';
import SettingsPage from './components/SettingsPage';
import IntroAnimation from './components/IntroAnimation';
import MenuBar from './components/MenuBar';
import EclipseTitle from './components/EclipseTitle';
import MouseSpotlight from './components/MouseSpotlight';
import './index.css';

function AppContent() {
  const [showIntro, setShowIntro] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleNavigation = (page) => {
    const routes = {
      'home': '/',
      'games': '/games',
      'settings': '/settings'
    };
    navigate(routes[page] || '/');
  };

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/games') return 'games';
    if (path === '/settings') return 'settings';
    return 'home';
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        ) : (
          <>
            <MouseSpotlight />
            <EclipseTitle />
            <MenuBar currentPage={getCurrentPage()} onNavigate={handleNavigation} />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage key="home" />} />
                <Route path="/games" element={<GamesPage key="games" />} />
                <Route path="/game" element={<GamePage key="game" />} />
                <Route path="/settings" element={<SettingsPage key="settings" />} />
              </Routes>
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
