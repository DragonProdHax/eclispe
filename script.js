// Global state
let currentPage = "home";
let currentGame = null;
let filteredGames = [...gamesData.games];

// DOM elements GG Sucks BTW
const pages = {
  home: document.getElementById("home-page"),
  games: document.getElementById("games-page"),
  game: document.getElementById("game-page"),
  about: document.getElementById("about-page"),
};

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  initializeNavigation();
  initializeParticlesJS();
  initializeHomeGames();
  initializeGamesPage();
  initializeGamePage();

  // Set initial page
  showPage("home");
});

// Navigation
function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const startButton = document.getElementById("startButton");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      showPage(page);
      updateActiveNavLink(link);
    });
  });

  startButton.addEventListener("click", () => {
    showPage("games");
    updateActiveNavLink(document.querySelector('[data-page="games"]'));
  });
}

function showPage(pageName) {
  // Hide all pages
  Object.values(pages).forEach((page) => {
    if (page) page.classList.remove("active");
  });

  // Show selected page
  if (pages[pageName]) {
    pages[pageName].classList.add("active");
    currentPage = pageName;
  }
}

function updateActiveNavLink(activeLink) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Particles.js initialization
function initializeParticlesJS() {
  if (typeof particlesJS !== "undefined") {
    // Initialize particles for home page
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#a855f7", "#ec4899", "#8b5cf6", "#c026d3"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#a855f7",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });

    // Initialize particles for other pages
    const particleConfig = {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#a855f7", "#ec4899", "#8b5cf6"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#a855f7",
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.4,
          },
          push: {
            particles_nb: 3,
          },
        },
      },
      retina_detect: true,
    };

    // Initialize particles for games page
    particlesJS("particles-js-games", particleConfig);

    // Initialize particles for game page
    particlesJS("particles-js-game", particleConfig);

    // Initialize particles for about page
    particlesJS("particles-js-about", particleConfig);
  }
}

// Home page games
function initializeHomeGames() {
  const homeGamesGrid = document.getElementById("homeGamesGrid");
  if (!homeGamesGrid) return;

  // Show first 4 games
  const featuredGames = gamesData.games.slice(0, 4);

  featuredGames.forEach((game, index) => {
    const gameCard = createHomeGameCard(game, index);
    homeGamesGrid.appendChild(gameCard);
  });
}

function createHomeGameCard(game, index) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.style.animationDelay = `${index * 0.2}s`;

  card.innerHTML = `
        <div class="game-card-inner">
            <img src="${game.icon}" alt="${
    game.name
  }" class="game-card-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="game-card-fallback" style="display: none; align-items: center; justify-content: center; background: #1e293b; color: #a855f7; font-size: 0.8rem;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,6V8H3V6H21M3,18V16H21V18H3M3,13H21V11H3V13Z" />
                </svg>
            </div>
            <div class="game-card-overlay">
                <div class="game-card-title">${game.name.toUpperCase()}</div>
            </div>
        </div>
    `;

  card.addEventListener("click", () => {
    if (game["raw-game-link"]) {
      playGame(game);
    } else {
      showPage("games");
      updateActiveNavLink(document.querySelector('[data-page="games"]'));
    }
  });

  return card;
}

// Games page
function initializeGamesPage() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  if (searchInput) {
    searchInput.addEventListener("input", filterGames);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterGames);
  }

  renderGamesList();
}

function filterGames() {
  const searchTerm =
    document.getElementById("searchInput")?.value.toLowerCase() || "";
  const selectedCategory =
    document.getElementById("categoryFilter")?.value || "";

  filteredGames = gamesData.games.filter((game) => {
    const matchesSearch =
      game.name.toLowerCase().includes(searchTerm) ||
      game.description.toLowerCase().includes(searchTerm) ||
      game.tags.some((tag) => tag.toLowerCase().includes(searchTerm));

    const matchesCategory =
      !selectedCategory || game.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  renderGamesList();
}

function renderGamesList() {
  const gamesList = document.getElementById("gamesList");
  if (!gamesList) return;

  gamesList.innerHTML = "";

  if (filteredGames.length === 0) {
    gamesList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; opacity: 0.6;">
                <h3>No games found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
    return;
  }

  filteredGames.forEach((game) => {
    const gameItem = createGameItem(game);
    gamesList.appendChild(gameItem);
  });
}

function createGameItem(game) {
  const item = document.createElement("div");
  item.className = "game-item";

  const tagsHtml = game.tags
    .map((tag) => `<span class="game-tag">${tag}</span>`)
    .join("");

  item.innerHTML = `
        <div class="game-item-header">
            <img src="${game.icon}" alt="${game.name}" class="game-item-icon" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="game-item-icon-fallback" style="display: none; width: 60px; height: 60px; background: #1e293b; border-radius: 12px; align-items: center; justify-content: center; color: #a855f7;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
                </svg>
            </div>
            <div class="game-item-info">
                <h3>${game.name}</h3>
                <div class="game-item-category">${game.category}</div>
            </div>
        </div>
        <p class="game-item-description">${game.description}</p>
        <div class="game-item-tags">${tagsHtml}</div>
    `;

  item.addEventListener("click", () => {
    if (game["raw-game-link"]) {
      playGame(game);
    } else {
      // Show a message that the game is not available
      alert("This game is not available yet. More games coming soon!");
    }
  });

  return item;
}

// Game player page
function initializeGamePage() {
  const backButton = document.getElementById("backButton");
  const reloadButton = document.getElementById("reloadButton");
  const fullscreenButton = document.getElementById("fullscreenButton");

  if (backButton) {
    backButton.addEventListener("click", () => {
      showPage("games");
      updateActiveNavLink(document.querySelector('[data-page="games"]'));

      // Clear the iframe
      const gameFrame = document.getElementById("gameFrame");
      if (gameFrame) {
        gameFrame.src = "";
      }
    });
  }

  if (reloadButton) {
    reloadButton.addEventListener("click", () => {
      const gameFrame = document.getElementById("gameFrame");
      if (gameFrame && gameFrame.src) {
        const currentSrc = gameFrame.src;
        gameFrame.src = "";
        setTimeout(() => {
          gameFrame.src = currentSrc;
        }, 100);
      }
    });
  }

  if (fullscreenButton) {
    fullscreenButton.addEventListener("click", () => {
      const gameFrame = document.getElementById("gameFrame");
      if (gameFrame) {
        if (gameFrame.requestFullscreen) {
          gameFrame.requestFullscreen();
        } else if (gameFrame.webkitRequestFullscreen) {
          gameFrame.webkitRequestFullscreen();
        } else if (gameFrame.mozRequestFullScreen) {
          gameFrame.mozRequestFullScreen();
        } else if (gameFrame.msRequestFullscreen) {
          gameFrame.msRequestFullscreen();
        }
      }
    });
  }
}

function playGame(game) {
  currentGame = game;

  // Update game page content
  const gameTitle = document.getElementById("gameTitle");
  const gameFrame = document.getElementById("gameFrame");
  const gameIcon = document.getElementById("gameIcon");
  const gameInfoTitle = document.getElementById("gameInfoTitle");
  const gameDescription = document.getElementById("gameDescription");
  const gameTags = document.getElementById("gameTags");

  if (gameTitle) gameTitle.textContent = game.name;
  if (gameFrame) gameFrame.src = game["raw-game-link"];
  if (gameIcon) gameIcon.src = game.icon;
  if (gameInfoTitle) gameInfoTitle.textContent = game.name;
  if (gameDescription) gameDescription.textContent = game.description;

  if (gameTags) {
    gameTags.innerHTML = game.tags
      .map((tag) => `<span class="game-tag">${tag}</span>`)
      .join("");
  }

  // Update related games
  updateRelatedGames(game);

  // Show game page
  showPage("game");
  updateActiveNavLink(null);
}

function updateRelatedGames(currentGame) {
  const relatedGamesList = document.getElementById("relatedGamesList");
  if (!relatedGamesList) return;

  // Get 3 random games excluding current game
  const otherGames = gamesData.games.filter((g) => g.id !== currentGame.id);
  const shuffled = otherGames.sort(() => 0.5 - Math.random());
  const relatedGames = shuffled.slice(0, 3);

  relatedGamesList.innerHTML = "";

  relatedGames.forEach((game) => {
    const item = document.createElement("div");
    item.className = "related-game-item";

    item.innerHTML = `
            <img src="${game.icon}" alt="${game.name}" class="related-game-icon" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="related-game-icon-fallback" style="display: none; width: 40px; height: 40px; background: #1e293b; border-radius: 8px; align-items: center; justify-content: center; color: #a855f7;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
            </div>
            <div class="related-game-info">
                <h4>${game.name}</h4>
                <div class="related-game-category">${game.category}</div>
            </div>
        `;

    item.addEventListener("click", () => {
      if (game["raw-game-link"]) {
        playGame(game);
      } else {
        alert("This game is not available yet. More games coming soon!");
      }
    });

    relatedGamesList.appendChild(item);
  });
}

// Mouse spotlight effect
document.addEventListener("mousemove", (e) => {
  const spotlight = document.querySelector(".mouse-spotlight");
  if (!spotlight) {
    const newSpotlight = document.createElement("div");
    newSpotlight.className = "mouse-spotlight";
    newSpotlight.style.cssText = `
            position: fixed;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease;
        `;
    document.body.appendChild(newSpotlight);
  }

  const currentSpotlight = document.querySelector(".mouse-spotlight");
  if (currentSpotlight) {
    currentSpotlight.style.left = e.clientX + "px";
    currentSpotlight.style.top = e.clientY + "px";
    currentSpotlight.style.opacity = "1";
  }
});

// Hide spotlight when mouse leaves window
document.addEventListener("mouseleave", () => {
  const spotlight = document.querySelector(".mouse-spotlight");
  if (spotlight) {
    spotlight.style.opacity = "0";
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading states for games
function showLoadingState(element) {
  if (element) {
    element.style.opacity = "0.5";
    element.style.pointerEvents = "none";
  }
}

function hideLoadingState(element) {
  if (element) {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
  }
}

// Handle iframe loading
document.addEventListener("DOMContentLoaded", function () {
  const gameFrame = document.getElementById("gameFrame");
  if (gameFrame) {
    gameFrame.addEventListener("load", function () {
      hideLoadingState(this.parentElement);
    });

    gameFrame.addEventListener("error", function () {
      this.parentElement.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #a855f7; text-align: center; padding: 2rem;">
                    <div>
                        <h3>Game Not Available</h3>
                        <p>This game is currently unavailable. Please try another game.</p>
                    </div>
                </div>
            `;
    });
  }
});

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  // ESC key to go back
  if (e.key === "Escape" && currentPage === "game") {
    document.getElementById("backButton")?.click();
  }

  // Enter key to search
  if (e.key === "Enter" && e.target.id === "searchInput") {
    e.target.blur();
  }
});

// Add some visual feedback for interactions
document.addEventListener("click", function (e) {
  // Add ripple effect to buttons
  if (e.target.matches("button, .game-card, .game-item, .related-game-item")) {
    const ripple = document.createElement("div");
    ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(168, 85, 247, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

    const rect = e.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    e.target.style.position = "relative";
    e.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
});

// Add ripple animation CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
