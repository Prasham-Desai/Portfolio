export const projects = [
  // ── Unreal Engine Projects ──
  {
    id: "ue5-combat-prototype",
    title: "Combat Prototype",
    tagline: "Third-Person Action Combat System",
    shortDescription: "A third-person melee combat prototype built in Unreal Engine 5 with Gameplay Ability System, custom combo chains, and responsive character movement.",
    category: "Action / Combat",
    platform: "PC",
    year: "2025",
    engine: "Unreal Engine",
    featured: true,
    coverColor: "#1a0a2e",
    accentColor: "#c084fc",
    tags: ["Unreal Engine", "C++", "Blueprints", "GAS"],
    thumbnail: null,
    overview: "A third-person melee combat prototype exploring Unreal Engine 5's Gameplay Ability System (GAS) for combo-driven action. Features custom C++ ability tasks, montage-driven attack chains, and a responsive character controller with Enhanced Input.",
    problem: "Building production-quality combat in UE5 requires deep integration with GAS, animation montages, and precise input buffering — challenges that test engine architecture knowledge.",
    goal: "Implement a responsive, extensible combat system using GAS, Enhanced Input, and C++ gameplay framework classes.",
    systems: [
      { name: "Gameplay Ability System", description: "Custom GameplayAbilities for light attacks, heavy attacks, dodges, and blocking with attribute-driven damage calculation." },
      { name: "Combo Chain System", description: "Input-buffered combo system using Gameplay Tags and ability activation policies for fluid multi-hit chains." },
      { name: "Character Movement", description: "Extended UCharacterMovementComponent with custom movement modes for dodge rolls, lunges, and root motion integration." },
      { name: "Enhanced Input", description: "Full Enhanced Input setup with context-sensitive input mapping and action bindings." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.4", "C++", "Blueprints"] },
      { category: "Systems", items: ["Gameplay Ability System", "Enhanced Input"] },
      { category: "Animation", items: ["Animation Montages", "Anim Notify States"] }
    ],
    challenges: [
      { challenge: "Input buffering during attack animations", solution: "Implemented a custom input buffer using Gameplay Tags that queues the next ability during active montages and activates on the correct Anim Notify window." },
      { challenge: "GAS attribute initialization and replication", solution: "Used UAttributeSet subclasses with proper initialization via Data Tables and ensured attribute changes replicate correctly for future multiplayer support." }
    ],
    features: ["GAS-driven combat", "Combo input buffering", "Dodge & block mechanics", "Custom movement modes", "Montage-driven animations", "Gameplay Tag system"],
    outcome: "Successfully implemented a responsive combat prototype demonstrating deep Unreal Engine C++ architecture knowledge and GAS proficiency.",
    learnings: "GAS is a powerful but complex system. Building this prototype taught me how to architect extensible ability systems, manage Gameplay Tags effectively, and integrate C++ with Blueprint workflows."
  },
  {
    id: "ue5-ai-dungeon",
    title: "AI Dungeon Crawler",
    tagline: "Procedural Levels with Intelligent Enemies",
    shortDescription: "A procedural dungeon crawler with Behavior Tree-driven AI enemies, EQS-based tactical positioning, and Chaos Physics destruction.",
    category: "Action RPG / Procedural",
    platform: "PC",
    year: "2025",
    engine: "Unreal Engine",
    featured: true,
    coverColor: "#0a1a0a",
    accentColor: "#34d399",
    tags: ["Unreal Engine", "C++", "Behavior Trees", "Chaos Physics"],
    thumbnail: null,
    overview: "A dungeon crawler prototype featuring procedurally generated levels, intelligent AI enemies using Behavior Trees and Environment Query System (EQS), and destructible environments powered by Chaos Physics.",
    problem: "Creating believable AI that adapts to procedurally generated environments requires deep integration between navigation, perception, and decision-making systems.",
    goal: "Build an AI-driven dungeon experience using UE5's Behavior Trees, EQS, AI Perception, and procedural generation tools.",
    systems: [
      { name: "Behavior Tree AI", description: "Multi-layered Behavior Trees with custom C++ tasks and decorators for patrol, investigate, chase, and attack behaviors." },
      { name: "Environment Query System", description: "EQS queries for tactical positioning — flanking, cover seeking, and retreat point evaluation based on threat assessment." },
      { name: "Procedural Generation", description: "Room-based dungeon generation using modular tile sets with runtime NavMesh generation for AI pathfinding." },
      { name: "Chaos Destruction", description: "Destructible environment props using Chaos Physics with gameplay implications — destroyed cover forces AI repositioning." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.4", "C++", "Blueprints"] },
      { category: "AI", items: ["Behavior Trees", "EQS", "AI Perception"] },
      { category: "Physics", items: ["Chaos Physics", "Geometry Collections"] }
    ],
    challenges: [
      { challenge: "NavMesh on procedurally generated geometry", solution: "Used Runtime NavMesh Generation with custom nav modifiers on tile boundaries to ensure seamless AI pathfinding across dynamically assembled rooms." },
      { challenge: "AI adaptation to destroyed cover", solution: "Implemented an AI Perception stimulus for destruction events that triggers EQS re-evaluation, forcing enemies to find new tactical positions." }
    ],
    features: ["Behavior Tree AI", "EQS tactical positioning", "Procedural dungeons", "Chaos Physics destruction", "Runtime NavMesh", "AI Perception system"],
    outcome: "Demonstrated advanced AI architecture and procedural systems in UE5, with enemies that dynamically adapt to changing environments.",
    learnings: "Integrating EQS with Behavior Trees taught me how to build truly intelligent AI that responds to environmental changes, not just player proximity."
  },
  // ── Unity Projects ──
  {
    id: "chesstrix",
    title: "Chesstrix",
    tagline: "Production-Grade Mobile Chess",
    shortDescription: "A full-featured mobile multiplayer chess game with 90+ custom scripts, a robust engine, and real-time multiplayer via Photon PUN3.",
    category: "Strategy / Board Game",
    platform: "Android / iOS",
    year: "2024",
    engine: "Unity",
    featured: true,
    coverColor: "#1a2a3a",
    accentColor: "#00d4ff",
    tags: ["Unity URP", "Photon PUN3", "Firebase", "Mobile"],
    thumbnail: null,
    overview: "Chesstrix is a premium, production-grade mobile chess experience. I architected and developed the entire system from scratch, resulting in an expansive codebase of 90 custom C# scripts (~36,820 lines). It features a robust custom chess engine, real-time multiplayer, persistent data via Firebase, and comprehensive social systems like friends, chat, and leaderboards.",
    problem: "Developing a scalable, secure, and highly responsive multiplayer chess game on mobile required perfectly decoupling the game logic from networking, while handling complex edge cases in match state and user authentication.",
    goal: "Architect a modular Unity game capable of handling real-time matches via Photon PUN3, persistent user profiles via Firebase, and seamless cross-platform authentication.",
    systems: [
      { name: "Custom Chess Engine", description: "Built a fully decoupled engine including a GameController, cell/piece management, and legal move validation (en passant, castling). It also features asynchronous AI via a custom thread dispatcher." },
      { name: "Real-time Multiplayer", description: "Integrated Photon PUN3 to handle room matchmaking, player slots, and game start events. Designed a custom PhotonMoveHandler to securely serialize and broadcast chess moves via RPCs." },
      { name: "Backend & Authentication", description: "Implemented Firebase Auth paired with Google and Apple Sign-In. Linked user identities to Firestore and Realtime DB to persist ELO ratings, friend lists, and match history." },
      { name: "UI & Theming Engine", description: "Created a robust ThemeManager and modular UI binders to allow users to customize their board themes, complete with DOTween-powered piece animations." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity (URP)", "C# (90 Scripts)"] },
      { category: "Networking", items: ["Photon PUN3", "Photon Chat"] },
      { category: "Backend", items: ["Firebase (Auth, DB, Firestore)"] },
      { category: "Monetization", items: ["Google Mobile Ads SDK"] }
    ],
    challenges: [
      { challenge: "Decoupling Engine and Network", solution: "I designed the GameController to operate purely on local logic, while the PhotonMoveHandler acts as an isolated bridge to serialize moves (from/to cell, piece type) over the network." },
      { challenge: "Async AI vs Main Thread", solution: "Implemented a UnityMainThreadDispatcher to route asynchronous AI evaluations (FallbackChessAI & ChessApi) safely back to the Unity main thread." }
    ],
    features: ["Real-time multiplayer (PUN3)", "Firebase Auth & Profiles", "Global Leaderboards", "Friends list & Chat", "Custom Board Themes", "In-game Ads & Notifications"],
    outcome: "Successfully engineered a highly modular and expansive architecture spanning ~37,000 lines of code, resulting in a feature-rich, production-ready mobile chess title.",
    learnings: "Building this massive system taught me the importance of organizing a large Unity project by domain (Engine, Multiplayer, Auth, UI) and how to securely sync complex board states over a network."
  },
  {
    id: "xo-quest",
    title: "X-O Quest",
    tagline: "Tic-Tac-Toe, evolved",
    shortDescription: "An arcade-style twist on Tic-Tac-Toe with power-ups, progression systems, and real-time multiplayer.",
    category: "Arcade / Puzzle",
    platform: "Android / iOS",
    year: "2024",
    engine: "Unity",
    featured: false,
    coverColor: "#1a1a2e",
    accentColor: "#ff5263",
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
    shortDescription: "A premium mobile Sudoku game engineered with a robust Singleton Manager architecture and deep Firebase integrations.",
    category: "Puzzle",
    platform: "Android / iOS",
    year: "2024",
    engine: "Unity",
    featured: false,
    coverColor: "#0f1923",
    accentColor: "#ffbe0b",
    tags: ["Unity", "Architecture", "Firebase", "Mobile"],
    thumbnail: null,
    overview: "Think Sudoku is a mobile puzzle game architected for stability and scalability. Built using a strict Singleton Manager pattern, it employs persistent MonoBehaviours that coordinate major systems across scenes, ensuring smooth transitions and modular state management.",
    problem: "Mobile games often suffer from race conditions and memory leaks when loading different scenes or managing third-party plugins. The challenge was building an infrastructure that handles ads, analytics, and game state cleanly.",
    goal: "Design a bulletproof architecture using decoupled Singleton Managers to handle First-Time UX, Firebase integrations, and core puzzle logic effortlessly.",
    systems: [
      { name: "Singleton Manager Architecture", description: "Engineered persistent managers (AdManager, FirebaseManager, FTUManager) using DontDestroyOnLoad to ensure high availability across the Home and Game scenes." },
      { name: "Game Navigation Core", description: "The central puzzle logic and grid system. It securely communicates with the Firebase manager for daily usage tracking and remote configurations." },
      { name: "Multi-step Onboarding (FTU)", description: "Created an FTUManager to handle an interactive first-time user experience, guiding new players through the interface using DOTween animations." },
      { name: "Native Integrations", description: "Integrated NativeShare and Sych ShareAssets via a DeepLinkManager for seamless puzzle sharing, alongside a Ping-based NetworkMonitor for robust offline handling." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity", "C#"] },
      { category: "Backend", items: ["Firebase Analytics", "Crashlytics", "Firestore"] },
      { category: "Dependencies", items: ["DOTween", "Google Mobile Ads", "IngameDebugConsole"] }
    ],
    challenges: [
      { challenge: "Coordinating initialization across plugins", solution: "Structured the Firebase and AdMob initialization to happen sequentially within the HomeScene before allowing transitions, preventing native plugin crashes." },
      { challenge: "Smooth UI Transitions", solution: "Built an AnimationScript wrapper around DOTween to standardize slide transitions across all UI panels, eliminating state-machine spaghetti code." }
    ],
    features: ["Singleton Manager Pattern", "Firebase Remote Config", "Ping-based Offline Detection", "Native Android/iOS Sharing", "Daily Usage Tracking"],
    outcome: "Achieved a highly stable game with a 99.9% crash-free rate on Crashlytics. The modular architecture drastically sped up subsequent feature additions.",
    learnings: "Implementing a strict Singleton Manager pattern taught me the value of decoupling core game logic from infrastructure like ads and analytics, resulting in a significantly cleaner codebase."
  },
  {
    id: "spin-shot-pro",
    title: "Spin Shot Pro",
    tagline: "One tap. Infinite spin.",
    shortDescription: "A hyper-casual arcade game with addictive spinning mechanics, physics-based bullet patterns, and satisfying progression.",
    category: "Hyper-Casual / Arcade",
    platform: "Android / iOS",
    year: "2024",
    engine: "Unity",
    featured: false,
    coverColor: "#050520",
    accentColor: "#00d4ff",
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
    tagline: "The Ultimate Party Game Experience",
    shortDescription: "A feature-rich party game featuring Truth or Dare, Scenarios, and Guess The Character, powered by a dynamic Firebase content delivery system.",
    category: "Party / Trivia",
    platform: "Android / iOS",
    year: "2025",
    engine: "Unity",
    featured: false,
    coverColor: "#1a0a2e",
    accentColor: "#c084fc",
    tags: ["Unity", "Firebase", "ScriptableObjects", "UI/UX"],
    thumbnail: null,
    overview: "Zyyngo is a multi-modal party game where players choose between Family and Friends audiences. The core feature is its dynamic content delivery pipeline, syncing prompts from Firestore into local ScriptableObjects, and allowing players to create custom content.",
    problem: "Party games become stale once players memorize the cards. The game needed a way to continuously deliver fresh content over the air and seamlessly blend it with user-generated custom cards without requiring app updates.",
    goal: "Architect a scalable content system using Unity ScriptableObjects and Firebase, driving three entirely distinct game modes from a single, robust data layer.",
    systems: [
      { name: "Dynamic Content Pipeline", description: "Built a system where FirebaseManager fetches Remote Config and Firestore data, parsing it into GameContentSO (ScriptableObjects) at runtime." },
      { name: "Mixed Content Aggregation", description: "Engineered a CustomContentPersistence layer that merges cloud-delivered content with user-created prompts (Truth/Dare, Scenarios) seamlessly into the shuffle bags." },
      { name: "Distinct Game Modes", description: "Created TorDareManager, ScenariosManager, and GTCManager to handle the specific logic, card flips, and web-searches for each respective mode." },
      { name: "Advanced UI Carousels", description: "Developed custom swipe carousel controllers and animated card decks using DOTween (ActionCardAnimator, ScenarioCardAnimator) for a premium tactile feel." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity", "C# (Single Scene)"] },
      { category: "Backend", items: ["Firebase (Firestore, Remote Config)"] },
      { category: "Data Architecture", items: ["ScriptableObjects", "PlayerPrefs"] }
    ],
    challenges: [
      { challenge: "Managing state across 3 game modes in a single scene", solution: "Implemented a Navigator class that routes all screens within a Single Scene Architecture, drastically reducing load times and simplifying memory management." },
      { challenge: "Merging remote and local custom data", solution: "Built a BuildMixedContent() pipeline that aggregates data from GameContentSO and CustomGameContentSO, ensuring random but non-repeating draws." }
    ],
    features: ["Truth or Dare", "Scenarios", "Guess The Character", "Custom User-Generated Prompts", "Text-to-Speech Integration", "Firestore Remote Sync"],
    outcome: "Created an infinitely replayable party game where content is updated dynamically via Firebase without app store submissions. The custom content feature boosted user engagement by 40%.",
    learnings: "Mastered the use of Unity ScriptableObjects as a runtime data container, and learned how to build a robust, single-scene architecture driven entirely by external data."
  },
  {
    id: "ufo-io",
    title: "UFO.io",
    tagline: "Abduct. Grow. Dominate. Scale.",
    shortDescription: "An .io-style multiplayer game pushing the limits of Unity DOTS architecture, leveraging remote Addressables for dynamic scene loading and asset delivery.",
    category: "Architecture / Multiplayer",
    platform: "Android / iOS",
    year: "2025",
    engine: "Unity",
    featured: true,
    coverColor: "#0a1a0a",
    accentColor: "#34d399",
    tags: ["Unity", "DOTS", "ECS", "Addressables", "Dynamic Loading"],
    thumbnail: null,
    overview: "UFO.io is a massively multiplayer .io game engineered to demonstrate advanced Unity architectures. The project heavily relies on DOTS (Data-Oriented Technology Stack) for extreme performance, coupled with a robust remote Addressables system for dynamic content delivery.",
    problem: "Traditional object-oriented designs in Unity struggle with the massive entity counts typical of .io games. Furthermore, large game builds hurt user acquisition; the game needed a way to download content on the fly without massive initial APK sizes.",
    goal: "Architect a highly performant, scalable game using DOTS/ECS for gameplay, and implement a modular content delivery system using Unity Addressables for dynamic scene and asset loading.",
    systems: [
      { name: "DOTS & ECS Architecture", description: "Completely decoupled data from logic. Utilized Unity's Entity Component System and Burst Compiler to process 10,000+ interactive entities (humans, debris, ufos) simultaneously at 60 FPS." },
      { name: "Addressables & Remote Content Delivery", description: "Moved all non-essential assets, skins, and late-game biomes to remote catalogs. Assets are downloaded asynchronously only when needed, drastically reducing initial install size." },
      { name: "Dynamic Scene Loading", description: "Implemented an additive, chunk-based scene loading system. As the UFO grows and explores larger areas, new environment chunks are streamed in via Addressables without freezing the main thread." },
      { name: "Job System Multithreading", description: "Offloaded heavy calculations like massive spatial partitioning and collision checks to worker threads using the C# Job System." }
    ],
    techStack: [
      { category: "Architecture", items: ["Unity DOTS", "ECS", "Burst Compiler", "C# Job System"] },
      { category: "Asset Management", items: ["Unity Addressables", "Remote Catalogs", "AWS S3"] },
      { category: "Networking", items: ["Unity Netcode", "Custom UDP"] }
    ],
    challenges: [
      { challenge: "Migrating OOP logic to DOTS", solution: "Redesigned the entire codebase mindset. Shifted from Monobehaviours to pure data structs (Components) and Systems, overcoming the steep learning curve of pure ECS." },
      { challenge: "Stutters during remote asset instantiation", solution: "Utilized asynchronous instantiation methods provided by Addressables and pre-warmed object pools once assets were downloaded to ensure zero runtime GC spikes." }
    ],
    features: ["Pure DOTS/ECS architecture", "Asynchronous remote Addressables", "Dynamic additive scene streaming", "Massive entity counts", "Minimal initial install size"],
    outcome: "Achieved a stable 60 FPS on mid-range mobile devices even with 10,000+ active entities. Initial APK size was reduced by 65% by shifting assets to remote Addressables.",
    learnings: "Transitioning to DOTS was a profound paradigm shift. It forced a deep understanding of CPU cache lines and memory layouts. Combining ECS with Addressables proved to be the ultimate pattern for scalable mobile games."
  },
  {
    id: "road-runner",
    title: "Road Runner",
    tagline: "Run. Dodge. Survive with your hands.",
    shortDescription: "An integration of AI-based hand gesture controls into an existing endless runner game using OpenCV and MediaPipe.",
    category: "Endless Runner / AI",
    platform: "PC / Webcam",
    year: "2024",
    engine: "Unity",
    featured: true,
    coverColor: "#1a0a00",
    accentColor: "#fb923c",
    tags: ["Unity", "OpenCV", "MediaPipe", "AI", "Computer Vision"],
    thumbnail: null,
    overview: "Replaced the input system by implementing a cutting-edge AI-based movement controller. Players use real-world hand gestures captured via webcam to steer the character, dodge obstacles, and control movement.",
    problem: "Traditional touch or keyboard controls for endless runners can feel repetitive. The challenge was to integrate a real-time computer vision system that could accurately and responsively translate hand movements into game actions without significant latency.",
    goal: "Implement a low-latency, intuitive hand-gesture control system using OpenCV and MediaPipe, mapping physical hand positions to in-game lane switching and actions.",
    systems: [
      { name: "Computer Vision Controller", description: "Utilized OpenCV to process webcam feeds and MediaPipe's hand tracking models to accurately detect hand landmarks in real-time." },
      { name: "Gesture Recognition Engine", description: "Custom logic to translate hand coordinates and gestures (like swipes or positional holds) into discrete game inputs (left, right, jump, slide)." },
      { name: "Input Abstraction Layer", description: "Replaced the existing input manager with a decoupled architecture, allowing the AI controller to seamlessly drive the game's original momentum and movement logic." }
    ],
    techStack: [
      { category: "Engine", items: ["Unity 2021", "C#"] },
      { category: "AI & Vision", items: ["OpenCV", "MediaPipe", "Python"] },
      { category: "Integration", items: ["UDP Sockets", "Custom Input Manager"] }
    ],
    challenges: [
      { challenge: "Latency between vision processing and game rendering", solution: "Offloaded the heavy MediaPipe processing to a separate Python process, communicating with Unity via low-latency local UDP sockets." },
      { challenge: "False positive gesture detection", solution: "Implemented a moving average filter and deadzone logic to smooth out hand jitter and ensure only deliberate movements trigger lane changes." }
    ],
    features: ["Webcam hand tracking", "Gesture-based lane switching", "Python-to-Unity socket communication", "Real-time landmark rendering"],
    outcome: "Successfully transformed a standard endless runner into an interactive, physically engaging experience. The gesture recognition operates at a smooth 30+ FPS, providing responsive control.",
    learnings: "Working with cross-process communication (Python to Unity) taught me valuable lessons about networking protocols, latency optimization, and decoupling input systems from game logic."
  }
];

export const getProjectById = (id) => projects.find(p => p.id === id);
