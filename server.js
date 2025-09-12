const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve game assets
app.use('/game-assets', express.static(path.join(__dirname, 'client/src/game-assets')));

// Debug endpoint to check available games
app.get('/debug/game-assets', (req, res) => {
  const fs = require('fs');
  const gameAssetsPath = path.join(__dirname, 'client/src/game-assets');
  
  try {
    const directories = fs.readdirSync(gameAssetsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => {
        const gamePath = path.join(gameAssetsPath, dirent.name);
        const files = fs.readdirSync(gamePath);
        return {
          name: dirent.name,
          files: files,
          hasIndex: files.includes('index.html')
        };
      });
    
    res.json({
      message: 'Game assets debug info',
      gameAssetsPath,
      availableGames: directories,
      totalGames: directories.length
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to read game assets',
      message: error.message
    });
  }
});

// API Routes
app.get('/api/games', (req, res) => {
  const games = [
    {
      id: 1,
      name: '1v1 LOL',
      description: 'Fast-paced battle royale with building mechanics',
      category: 'Battle Royale',
      gameUrl: '/game-assets/1v1-lol/index.html'
    }
  ];
  
  res.json(games);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌙 Eclipse server running on port ${PORT}`);
});
