const gamesData = {
  "games": [
    {
      "id": 1,
      "gameId": "1v1lol",
      "name": "1v1 LOL",
      "description": "Fast-paced 1v1 battle royale game with building mechanics. Test your skills against other players in intense combat.",
      "icon": "assets/1v1lol.png",
      "link": null,
      "raw-game-link": "game-assets/1v1-lol/index.html",
      "category": "Battle Royale",
      "tags": ["battle royale", "building", "combat", "competitive"]
    },
    {
      "id": 2,
      "gameId": "clusterrush",
      "name": "Cluster Rush",
      "description": "Navigate through challenging obstacle courses with precise timing and quick reflexes in this addictive platformer.",
      "icon": "assets/cluster-rush.png",
      "link": null,
      "raw-game-link": "/game-assets/cluster-rush/index.html",
      "category": "Platformer",
      "tags": ["platformer", "obstacles", "timing", "challenging"]
    },
    {
      "id": 3,
      "gameId": "cookieclicker",
      "name": "Cookie Clicker",
      "description": "The ultimate idle clicking game. Build your cookie empire and unlock upgrades to maximize your cookie production.",
      "icon": "assets/cookie-clicker.png",
      "link": null,
      "raw-game-link": "/game-assets/cookieclicker/index.html",
      "category": "Idle",
      "tags": ["idle", "clicker", "incremental", "casual"]
    },
    {
      "id": 4,
      "gameId": "polytrack",
      "name": "Polytrack",
      "description": "Race through colorful geometric tracks in this high-speed racing game with stunning visual effects.",
      "icon": "assets/polytrack.jpg",
      "link": null,
      "raw-game-link": "game-assets/polytrack/index.html",
      "category": "Racing",
      "tags": ["racing", "speed", "geometric", "colorful"]
    },
    {
      "id": 5,
      "gameId": "ragdollarchers",
      "name": "Ragdoll Archers",
      "description": "Physics-based archery combat with ragdoll mechanics. Aim carefully and watch your enemies fall in hilarious ways.",
      "icon": "assets/ragdoll-archers.jpg",
      "link": null,
      "raw-game-link": "/game-assets/RagdollArchers/index.html",
      "category": "Action",
      "tags": ["archery", "physics", "ragdoll", "combat", "funny"]
    },
    {
      "id": 6,
      "gameId": "snowrider3d",
      "name": "Snow Rider 3D",
      "description": "Race down snowy mountain slopes on your sled in this thrilling 3D winter sports game. Avoid obstacles, collect gifts, and master the slopes!",
      "icon": "assets/snow-rider-3d.jpg",
      "link": null,
      "raw-game-link": "/game-assets/snow-rider-3d/game.html",
      "category": "Racing",
      "tags": ["3d", "winter", "sledding", "obstacles", "snow", "racing", "sports"]
    },
    {
      "id": 7,
      "gameId": "leveldevil",
      "name": "Level Devil",
      "description": "Navigate through devilishly difficult platformer levels filled with traps, spikes, and unexpected surprises. Can you outsmart the devil's tricks?",
      "icon": "assets/level-devil.jpg",
      "link": null,
      "raw-game-link": "/game-assets/leveldevil/index.html",
      "category": "Platformer",
      "tags": ["platformer", "difficult", "traps", "puzzle", "challenging", "devil", "precision"]
    },
    {
      "id": 8,
      "gameId": "bikeobby",
      "name": "Bike Obby",
      "description": "Navigate challenging obstacle courses on your bike in this thrilling obby-style game. Master jumps, avoid traps, and reach the finish line!",
      "icon": "assets/bike-obby.jpg",
      "link": null,
      "raw-game-link": "/game-assets/bikeobby/index.html",
      "category": "Sports",
      "tags": ["bike", "obby", "obstacles", "racing", "stunts", "challenging", "parkour"]
    },
    {
      "id": 9,
      "gameId": "drivemad",
      "name": "Drive Mad",
      "description": "Navigate crazy obstacle courses with your vehicle in this physics-based driving game. Balance speed and control to reach the finish line without crashing!",
      "icon": "assets/drive-mad.png",
      "link": null,
      "raw-game-link": "/game-assets/drive-mad/index.html",
      "category": "Racing",
      "tags": ["driving", "physics", "obstacles", "balance", "crazy", "vehicles", "challenging"]
    },
    {
      "id": 10,
      "gameId": "driftboss",
      "name": "Drift Boss",
      "description": "Master the art of drifting in this endless driving game. Keep your car on the winding track as long as possible while performing perfect drifts!",
      "icon": "assets/drift-boss.png",
      "link": null,
      "raw-game-link": "/game-assets/driftboss/index.html",
      "category": "Racing",
      "tags": ["drifting", "endless", "driving", "skill", "precision", "cars", "arcade"]
    },
    {
      "id": 11,
      "gameId": "grannys",
      "name": "Granny's",
      "description": "Escape from Granny's creepy house in this thrilling horror survival game. Solve puzzles, avoid traps, and find your way out before it's too late!",
      "icon": "assets/grannys.jpg",
      "link": null,
      "raw-game-link": "/game-assets/granny/index.html",
      "category": "Horror",
      "tags": ["horror", "escape", "survival", "puzzle", "scary", "stealth", "thriller"]
    },
    {
      "id": 12,
      "gameId": "skyriders",
      "name": "Sky Riders",
      "description": "Soar through the skies in this high-flying adventure game. Navigate aerial challenges, collect power-ups, and master the art of flight!",
      "icon": "assets/sky-riders.jpg",
      "link": null,
      "raw-game-link": "/game-assets/skyriders/index.html",
      "category": "Adventure",
      "tags": ["flying", "aerial", "adventure", "sky", "power-ups", "flight", "soaring"]
    },
    {
      "id": 13,
      "gameId": "retrobowl",
      "name": "Retro Bowl",
      "description": "Experience classic American football in this retro-style sports game. Manage your team, call plays, and lead them to championship glory!",
      "icon": "assets/retro-bowl.png",
      "link": null,
      "raw-game-link": "/game-assets/retrobowl/index.html",
      "category": "Sports",
      "tags": ["football", "retro", "sports", "team", "strategy", "championship", "american"]
    },
    {
      "id": 14,
      "gameId": "tag",
      "name": "Tag",
      "description": "Classic tag game with a twist! Chase and avoid being tagged in this fast-paced multiplayer action game. Quick reflexes and strategy required!",
      "icon": "assets/tag.png",
      "link": null,
      "raw-game-link": "/game-assets/tag/index.html",
      "category": "Action",
      "tags": ["multiplayer", "chase", "fast-paced", "reflexes", "strategy", "classic", "competitive"]
    },
    {
      "id": 16,
      "gameId": "bitlife",
      "name": "BitLife",
      "description": "Live a virtual life from birth to death! Make choices that shape your character's destiny in this addictive life simulation game.",
      "icon": "assets/bitlife.jpg",
      "link": null,
      "raw-game-link": "/game-assets/bitlife/index.html",
      "category": "Simulation",
      "tags": ["life", "simulation", "choices", "virtual", "destiny", "addictive", "character"]
    },
    {
      "id": 17,
      "gameId": "basketballstars",
      "name": "Basketball Stars",
      "description": "Show off your basketball skills in this exciting sports game! Shoot hoops, perform tricks, and compete against players worldwide.",
      "icon": "assets/basketball-stars.png",
      "link": null,
      "raw-game-link": "/game-assets/basketballstars/index.html",
      "category": "Sports",
      "tags": ["basketball", "sports", "shooting", "tricks", "competitive", "skills", "multiplayer"]
    }
  ]
};
