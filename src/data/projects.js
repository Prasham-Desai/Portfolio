export const projects = [
  {
    id: "chesstrix",
    title: "Chesstrix",
    tagline: "Where classic strategy meets modern mobile",
    shortDescription: "A fully-featured mobile chess game with AI opponent, online multiplayer, and custom puzzle modes.",
    category: "Strategy / Board Game",
    platform: "Android / iOS",
    year: "2024",
    coverColor: "#1a2a3a",
    accentColor: "#00d4ff",
    tags: ["Unity", "Multiplayer", "AI", "Mobile"],
    thumbnail: null,
    overview: "Chesstrix is a premium mobile chess experience combining classic strategy with modern UX. Built from scratch in Unity, it features a custom chess engine, ELO-based matchmaking, and an adaptive AI opponent.",
    problem: "Most chess apps feel either too casual or overly complex. Chesstrix targets the middle ground — a polished, intuitive experience for players who want to improve while enjoying a beautifully crafted game.",
    goal: "Build a cross-platform chess game with offline AI and real-time online multiplayer, optimized for mobile performance and minimal battery drain.",
    systems: [
      { name: "Chess Engine", description: "Custom-built MiniMax engine with Alpha-Beta pruning and positional scoring tables for AI difficulty scaling." },
      { name: "Matchmaking System", description: "ELO-based rating system with socket-based real-time match pairing and spectator mode." },
      { name: "Move Validation", description: "Full legal move generation including en passant, castling, and promotion edge cases." },
      { name: "Game State Persistence", description: "Firebase Realtime DB for saving ongoing matches and resuming from any device." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity 2022 LTS", "C#"] },
      { category: "Backend", items: ["Firebase", "Node.js"] },
      { category: "Networking", items: ["Photon PUN2", "WebSockets"] },
      { category: "Analytics", items: ["Firebase Analytics", "Custom Event Tracking"] }
    ],
    challenges: [
      { challenge: "AI performance on low-end Android devices", solution: "Implemented iterative deepening with time-budget cuts — AI never exceeds 300ms per move regardless of hardware." },
      { challenge: "Real-time sync latency in online matches", solution: "Switched from state-sync to RPC-based move broadcasting, reducing perceived lag by ~60%." },
      { challenge: "Complex board state serialization", solution: "Implemented FEN notation serialization for compact, resumable game states." }
    ],
    features: ["ELO Matchmaking", "Offline AI (5 difficulty levels)", "Game history & replay", "Push notifications for async play", "Custom board themes", "Puzzle mode with 100+ positions"],
    outcome: "Launched on both platforms with 4.3★ average rating. Achieved sub-300ms AI response time across all tested Android devices. Online match completion rate of 78%.",
    learnings: "Building a chess engine taught me the depth of game tree search algorithms and how to balance correctness with real-world performance constraints."
  },
  {
    id: "xo-quest",
    title: "X-O Quest",
    tagline: "Tic-Tac-Toe, evolved",
    shortDescription: "An arcade-style twist on Tic-Tac-Toe with power-ups, progression systems, and real-time multiplayer.",
    category: "Arcade / Puzzle",
    platform: "Android",
    year: "2023",
    coverColor: "#1a1a2e",
    accentColor: "#ff6b6b",
    tags: ["Unity", "Multiplayer", "Casual", "AdMob"],
    thumbnail: null,
    overview: "X-O Quest reinvents the classic 3x3 grid game with strategic depth — expandable boards, power-up tiles, timed rounds, and global leaderboards.",
    problem: "Classic Tic-Tac-Toe has zero depth after age 10. The goal was to reintroduce strategy and replayability for casual mobile players.",
    goal: "Create an infinitely replayable casual game with monetization through rewarded ads, not pay-to-win.",
    systems: [
      { name: "Dynamic Grid System", description: "Configurable board sizes from 3x3 to 7x7 with win condition auto-detection at any scale." },
      { name: "Power-Up Framework", description: "Modular power-up system — Block tiles, Swap tiles, Bomb tiles — each with unique visual feedback." },
      { name: "Progression System", description: "XP and level system that unlocks board sizes, themes, and power-up slots." },
      { name: "Monetization Layer", description: "AdMob rewarded video ads tied to power-up refills — never intrusive, always value-added." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity 2021", "C#"] },
      { category: "Ads", items: ["Google AdMob"] },
      { category: "Backend", items: ["Firebase Auth", "Firestore"] },
      { category: "Tools", items: ["DOTween", "Unity Addressables"] }
    ],
    challenges: [
      { challenge: "Win detection across variable board sizes", solution: "Generic row/column/diagonal scan algorithm that adapts to any NxN grid without hardcoding." },
      { challenge: "Ad timing without hurting retention", solution: "Implemented a cooldown + session-length trigger — ads only show after 3+ turns and never mid-game." }
    ],
    features: ["3x3 to 7x7 grids", "4 unique power-ups", "Local + Online PvP", "Global leaderboards", "Daily challenges", "Rewarded ads"],
    outcome: "Top casual pick in regional Play Store featuring. Day-7 retention at 34%, significantly above genre average of ~22%.",
    learnings: "Learned that casual games live or die on the first 30 seconds. Spent significant iteration on the first-run experience (FRE) to reduce drop-off."
  },
  {
    id: "think-sudoku",
    title: "Think Sudoku",
    tagline: "The thinking person's Sudoku",
    shortDescription: "A premium Sudoku app with smart hints, difficulty progression, daily puzzles, and accessibility-first design.",
    category: "Puzzle",
    platform: "Android / iOS",
    year: "2023",
    coverColor: "#0f1923",
    accentColor: "#ffd700",
    tags: ["Unity", "Puzzle", "Firebase", "Mobile"],
    thumbnail: null,
    overview: "Think Sudoku is a handcrafted Sudoku experience focused on depth of play over quantity. Features a proprietary puzzle generator, smart mistake analysis, and a daily challenge system with social sharing.",
    problem: "Most Sudoku apps are visually cluttered and rely on tedious hint systems. Players want to feel smart, not assisted.",
    goal: "Build a Sudoku app that teaches logical deduction instead of just highlighting mistakes — for both beginners and speed-solvers.",
    systems: [
      { name: "Puzzle Generator", description: "Backtracking generator with difficulty classification using constraint satisfaction scoring — guarantees unique solutions." },
      { name: "Smart Hint Engine", description: "Contextual hint system that identifies the logical technique needed (naked pair, X-wing, etc.) rather than just showing the answer." },
      { name: "Error Analysis", description: "Post-game breakdown showing which cells took longest, where mistakes occurred, and suggested practice areas." },
      { name: "Daily Challenge Engine", description: "Server-generated daily puzzle seeded by date — same puzzle globally, shareable result card." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity 2022", "C#"] },
      { category: "Backend", items: ["Firebase Functions", "Firestore"] },
      { category: "UI", items: ["Unity UI Toolkit", "DOTween"] }
    ],
    challenges: [
      { challenge: "Generating puzzles of consistent difficulty", solution: "Built a solver that counts logical deduction steps rather than just counting given clues — actual measure of difficulty." },
      { challenge: "Smooth number input on all screen sizes", solution: "Custom gesture-based numpad with haptic feedback, tested across 12 device profiles." }
    ],
    features: ["50,000+ unique puzzles", "5 difficulty levels", "Smart hints (technique-based)", "Daily challenges with streak tracking", "Mistake-free mode", "Statistics & performance graphs"],
    outcome: "Featured on Google Play's 'Editor's Choice' shortlist. 4.6★ average rating across 2k+ reviews. 45% of users engage with daily challenge feature.",
    learnings: "Puzzle game UX is about reducing friction, not adding features. Every interaction had to feel effortless — learned to prioritize feel over function during polish phase."
  },
  {
    id: "spin-shot-pro",
    title: "Spin Shot Pro",
    tagline: "One tap. Infinite spin.",
    shortDescription: "A hyper-casual arcade game with addictive spinning mechanics, physics-based bullet patterns, and satisfying progression.",
    category: "Hyper-Casual / Arcade",
    platform: "Android",
    year: "2023",
    coverColor: "#1a0a2e",
    accentColor: "#b44fff",
    tags: ["Unity", "Hyper-Casual", "Physics", "AdMob"],
    thumbnail: null,
    overview: "Spin Shot Pro is a one-touch arcade game where players control a rotating shooter to clear incoming waves. Deceptively simple, deeply satisfying.",
    problem: "Hyper-casual games often sacrifice depth for accessibility. Spin Shot Pro needed to feel instantly playable but hide meaningful skill progression.",
    goal: "Design a game where 5-minute sessions feel complete but players naturally come back — through mastery curve and daily content, not dark patterns.",
    systems: [
      { name: "Spin Physics System", description: "Custom angular velocity model — players feel the weight of rotation, not just position changes." },
      { name: "Bullet Pattern Engine", description: "Scriptable pattern system allowing designers to create complex wave patterns without code changes." },
      { name: "Combo & Multiplier System", description: "Real-time combo tracking with visual + haptic escalation — rewards consistent play without punishing misses." },
      { name: "Procedural Level Generation", description: "Seed-based wave generation that scales difficulty by analyzing recent player performance." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity 2021", "C#"] },
      { category: "Physics", items: ["Unity Physics 2D", "Custom Angular System"] },
      { category: "Ads", items: ["AdMob", "MAX Mediation"] },
      { category: "Analytics", items: ["Firebase Analytics", "GameAnalytics"] }
    ],
    challenges: [
      { challenge: "Frame-rate-independent spin feel", solution: "Decoupled input from physics update cycle using fixed timestep interpolation for consistent feel at 30fps and 60fps." },
      { challenge: "Balancing difficulty without alienating beginners", solution: "Implemented dynamic difficulty adjustment (DDA) based on 3-session rolling average of player accuracy." }
    ],
    features: ["One-touch controls", "50+ unique bullet patterns", "Combo & multiplier system", "Daily missions", "Unlock-able shooters", "Leaderboard integration"],
    outcome: "D1 retention of 48% (genre average: ~40%). AdMob eCPM above category benchmark due to natural rewarded ad placement at level-up moments.",
    learnings: "Game feel is everything in arcade games. Spent 20% of development time purely on juice — particles, screen shake, sound timing — and it was the right call."
  },
  {
    id: "zyyngo",
    title: "Zyyngo",
    tagline: "Connect the dots. Race the clock.",
    shortDescription: "A real-time competitive puzzle game where players connect color-coded nodes in a dynamic board before time runs out.",
    category: "Competitive Puzzle",
    platform: "Android",
    year: "2024",
    coverColor: "#0a1a0a",
    accentColor: "#00ff88",
    tags: ["Unity", "Multiplayer", "Real-time", "Firebase"],
    thumbnail: null,
    overview: "Zyyngo is a fast-paced connection puzzle game with real-time PvP. Players race to find the optimal path through color-coded nodes on a dynamically generated board.",
    problem: "Most puzzle games are async — Zyyngo makes puzzles feel like a sport by adding real-time competition and a live opponent overlay.",
    goal: "Create a puzzle game where skill is visibly rewarded and competitive pressure enhances the experience rather than creating frustration.",
    systems: [
      { name: "Real-time Board Sync", description: "Both players see the same board — solved using deterministic seeded generation and Firebase RTDB for sub-100ms state sync." },
      { name: "Pathfinding Validation", description: "Server-side path validation prevents cheating while client-side prediction maintains smooth UX." },
      { name: "Spectator Ghost Mode", description: "Opponent's progress shown as semi-transparent ghost overlay — adds competitive tension without revealing their solution." },
      { name: "Season + Ranking System", description: "Seasonal ELO with decay mechanic — keeping the competitive ladder fresh each month." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity 2022", "C#"] },
      { category: "Backend", items: ["Firebase RTDB", "Cloud Functions"] },
      { category: "Networking", items: ["Custom WebSocket layer"] }
    ],
    challenges: [
      { challenge: "Deterministic board generation across clients", solution: "Seeded RNG with identical seed transmitted pre-match — both clients generate identical boards without server sending full board data." },
      { challenge: "Anti-cheat for path validation", solution: "Server validates all submitted paths against a mirrored solver — invalid submissions auto-penalize with a 3-second delay." }
    ],
    features: ["Real-time PvP", "Ghost overlay system", "Seasonal rankings", "Daily free puzzles", "Power-up economy", "Tutorial puzzle tree"],
    outcome: "Peak concurrent users of 340 in first month post-launch. Average match duration of 2.4 minutes with 71% rematch rate.",
    learnings: "Building competitive real-time systems taught me the critical difference between client prediction and authoritative server logic — getting this wrong creates unfair gameplay."
  },
  {
    id: "ufo-io",
    title: "UFO.io",
    tagline: "Abduct. Grow. Dominate.",
    shortDescription: "An .io-style multiplayer game where you pilot a UFO, abduct humans to grow larger, and compete against players worldwide.",
    category: ".io / Multiplayer",
    platform: "Android / WebGL",
    year: "2024",
    coverColor: "#050520",
    accentColor: "#00d4ff",
    tags: ["Unity", "Multiplayer", "WebGL", "DOTS"],
    thumbnail: null,
    overview: "UFO.io is a massively multiplayer .io game inspired by Agar.io mechanics — but with a UFO abduction twist. Players grow by abducting humans and smaller objects while avoiding larger UFOs.",
    problem: ".io games on mobile often suffer from poor controls and server-side lag making them feel unresponsive. UFO.io needed to feel instant at scale.",
    goal: "Build a fluid, scalable .io game that supports 50+ concurrent players per room with smooth client-side prediction and minimal perceived lag.",
    systems: [
      { name: "Client-Side Prediction", description: "Immediate local movement with server reconciliation — players never feel input lag even at 150ms ping." },
      { name: "Entity Streaming", description: "Only entities within a dynamic viewport radius are synced per client — scales to 100+ entities without bandwidth spikes." },
      { name: "DOTS-Based Physics", description: "Abduction detection and collision using Unity DOTS for processing 500+ simultaneous physics interactions at 60fps." },
      { name: "Room Management System", description: "Auto-scaling room system — rooms split when exceeding 60 players and merge during off-peak hours." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity 2022 LTS", "C# + DOTS/ECS"] },
      { category: "Networking", items: ["Unity Netcode for GameObjects", "Custom UDP layer"] },
      { category: "Backend", items: ["Node.js", "Redis", "WebSockets"] },
      { category: "Deployment", items: ["WebGL", "Android APK"] }
    ],
    challenges: [
      { challenge: "Handling 60+ players with smooth interpolation", solution: "Implemented dead reckoning for non-local entities — predicts position between server ticks rather than waiting for each packet." },
      { challenge: "WebGL vs Android parity", solution: "Abstract input layer with platform-specific implementations — same game logic, different control schemes and optimization profiles." }
    ],
    features: ["50+ concurrent players per room", "Real-time growth mechanics", "Power-up drops", "Global leaderboard", "Skin customization", "Cross-platform (Web + Mobile)"],
    outcome: "Server handles 200+ concurrent players across rooms with p95 server tick latency under 45ms. WebGL version peaked at 800 daily active users in launch week.",
    learnings: "DOTS was a paradigm shift — data-oriented design forces you to think about memory layout before game logic. That mental model shift improved all my subsequent Unity work."
  },
  {
    id: "road-runner",
    title: "Road Runner Game",
    tagline: "Run. Dodge. Survive.",
    shortDescription: "An endless runner with procedural obstacle generation, adaptive difficulty, and a momentum-based movement system that rewards skillful play.",
    category: "Endless Runner",
    platform: "Android",
    year: "2023",
    coverColor: "#1a0a00",
    accentColor: "#ff6b00",
    tags: ["Unity", "Procedural", "Mobile", "Firebase"],
    thumbnail: null,
    overview: "Road Runner is a high-polish endless runner featuring a custom momentum system, procedurally generated track segments, and a risk/reward lane structure that creates genuine tension.",
    problem: "Endless runners feel samey after the first few sessions. Road Runner needed a movement system that creates skill expression, not just reflex testing.",
    goal: "Design an endless runner where skilled players feel genuinely faster and more in control — where mastery is visible, not just implied by score.",
    systems: [
      { name: "Momentum System", description: "Speed is earned, not given — successful dodges build momentum, hits decay it. Creates a risk/reward feedback loop per-obstacle." },
      { name: "Procedural Track Generator", description: "Segment-based generation with biome themes — city, highway, tunnel — each with unique obstacle sets and visual language." },
      { name: "Adaptive Difficulty", description: "Difficulty adjusts in real-time based on current momentum score, not just distance — rewards consistent play with greater challenge." },
      { name: "Scoring System", description: "Multiplier system tied to lane-risk — center lane is safe, outer lanes multiply score but have denser obstacles." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity 2021", "C#"] },
      { category: "Generation", items: ["Custom Procedural System"] },
      { category: "Analytics", items: ["Firebase Analytics"] },
      { category: "Monetization", items: ["AdMob", "IAP"] }
    ],
    challenges: [
      { challenge: "Seamless infinite track with no loading stutter", solution: "Object pooling for all track segments + asynchronous preloading 3 segments ahead using coroutines — zero frame drops on mid-range Android." },
      { challenge: "Momentum system not feeling punishing", solution: "Partial momentum loss on hit (not full reset) + brief slow-motion window on near-misses — kept challenge without frustration." }
    ],
    features: ["Momentum-based movement", "3 biome themes", "Dynamic difficulty", "Risk lane scoring", "Character upgrades", "Cloud saves"],
    outcome: "Average session length of 6.2 minutes, 2.8× higher than genre average of ~2.2 minutes. Strong organic word-of-mouth growth in first 3 months.",
    learnings: "The momentum system emerged from observing playtesters — they naturally tried to 'keep their streak' when we showed speed visually. Designed systems around observed behavior, not assumptions."
  }
];

export const getProjectById = (id) => projects.find(p => p.id === id);
