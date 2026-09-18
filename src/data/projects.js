export const projects = [
  // ── Unreal Engine Projects ──
  {
    id: "red-hood",
    title: "Red Hood",
    tagline: "A 2D Pixel Art Platformer Dungeon Crawler",
    shortDescription: "A 2D action platformer and dungeon crawler developed in Unreal Engine 5 featuring combo attacks and Behavior Tree AI.",
    category: "2D Platformer / Dungeon Crawler",
    platform: "PC",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: true,
    coverColor: "#1a0a00",
    accentColor: "#dc143c",
    tags: ["Unreal Engine", "Blueprints", "Paper2D", "Behavior Trees", "NavMesh"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/RedHood",
    overview: "Red Hood is a 2D action platformer and dungeon crawler developed in Unreal Engine 5. Step into perilous underground dungeons filled with traps, treasures, and undead foes. Guide your hooded adventurer through the darkness, torch in hand, as you fight skeleton warriors and discover hidden vaults.",
    problem: "Developing a 2D platformer inside a 3D engine like Unreal Engine 5 requires careful handling of Paper2D components and single-plane movement.",
    goal: "Create a true side-scrolling experience built inside the Unreal Engine 3D viewport with fluid 2D flipbook animations.",
    systems: [
      { name: "Combo Attack System", description: "3-hit combo chain where each successive strike deals escalating damage, rewarding aggressive play and precise timing." },
      { name: "Enemy AI", description: "Built using Unreal's AI Controller, Behavior Tree, and Blackboard system for structured, state-driven enemy logic (Patrol, Chase, Attack)." },
      { name: "Tileset-Based Map Design", description: "Dungeon levels are built using tileset maps in Paper2D, enabling modular and expandable level design." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.6", "Blueprints"] },
      { category: "2D Framework", items: ["Paper2D", "Flipbooks"] },
      { category: "AI", items: ["Behavior Trees", "Blackboards", "NavMesh"] }
    ],
    challenges: [
      { challenge: "2D Pathfinding", solution: "All enemy pathfinding is driven by Unreal's Navigation Mesh, ensuring smooth and obstacle-aware movement within the 2D plane." }
    ],
    features: ["Combo attack system", "State-driven Enemy AI", "Tileset maps", "Pixel art flipbook animations", "Single-plane 2D gameplay"],
    outcome: "Successfully built a classic dungeon-crawler look and feel using handcrafted pixel art sprites within modern UE5 systems.",
    learnings: "Working with Paper2D and Behavior Trees taught me how to adapt 3D AI and navigation concepts to a strict 2D gameplay plane."
  },
  {
    id: "jetpack-journey",
    title: "Jetpack Journey",
    tagline: "A 3D Platformer with dynamic jetpack movement",
    shortDescription: "A 3D platformer featuring fuel-based flight mechanics, and a fully drivable Chaos Vehicle with on-foot to vehicle transitions.",
    category: "3D Platformer",
    platform: "Windows",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: true,
    coverColor: "#05101a", 
    accentColor: "#c084fc",
    tags: ["Unreal Engine", "Blueprints", "Chaos Physics", "Enhanced Input"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/JetpackJourney",
    overview: "Jetpack Journey is a 3D platformer where the player navigates through complex levels using a mix of traditional walking and a dynamic jetpack thruster system. The game focuses on precise platforming, strategic fuel management, and interacting with dynamic level elements.",
    problem: "Managing the transition between character movement and vehicle simulation without breaking the player experience or causing physics glitches.",
    goal: "Implement a smooth, dynamic character controller with fuel-based jetpack flight and seamless transition to a fully functional Chaos Vehicle.",
    systems: [
      { name: "Character Movement", description: "Versatile component blending walking mode (velocity-aligned rotation) and flying mode (camera-aligned rotation for aiming mid-air)." },
      { name: "Fuel System", description: "Flight resource management where holding thruster drains fuel, requiring players to collect pickups across the level." },
      { name: "Chaos Vehicle System", description: "Fully configured 4-wheel AWD automatic vehicle built from scratch using the Chaos Vehicles Plugin." },
      { name: "Possession & Camera Blending", description: "Seamless control handoff between player pawn and vehicle pawn with smooth camera interpolation." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.6", "Blueprints"] },
      { category: "Physics", items: ["Chaos Vehicles Plugin"] },
      { category: "Input", items: ["Enhanced Input", "RawInput"] }
    ],
    challenges: [
      { challenge: "Seamless Vehicle Boarding", solution: "Managed collision disabling, character hiding, and Enhanced Input mapping context swaps on possession handoffs." },
      { challenge: "Skeletal Mesh Setup", solution: "Created the vehicle's skeletal mesh entirely within the Unreal Editor, painting skin weights and setting up bones manually." }
    ],
    features: ["Dynamic jetpack movement", "Resource management", "Interactive platforming elements", "Drivable Chaos Vehicle", "Seamless possession transitions"],
    outcome: "Delivered a fluid platforming experience combined with robust vehicle mechanics in a single level design.",
    learnings: "Mastered UE5's possession system, input mapping context switching, and the Chaos Vehicle physics setup entirely through Blueprints."
  },
  {
    id: "shooter-game-ui",
    title: "ShooterGameUI",
    tagline: "A Polished Main Menu & Settings System",
    shortDescription: "A standalone project showcasing a production-ready main menu and settings system with 3D sci-fi environments and UMG widgets.",
    category: "UI / Menu System",
    platform: "Windows",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: true,
    coverColor: "#0a121e",
    accentColor: "#ff5263",
    tags: ["Unreal Engine", "UMG", "Blueprints", "UI/UX"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/ShooterGameUI",
    overview: "ShooterGameUI is a standalone Unreal Engine 5.6 project focused on delivering a high-quality, production-ready main menu and settings system. It showcases UI/UX design, environment art direction, and polished front-end systems.",
    problem: "Creating an engaging first impression before a game starts requires blending 3D environments, character animations, and responsive 2D UI elements seamlessly.",
    goal: "Build a cinematic menu experience with interactive UMG widgets, audio feedback, sliding transitions, and functional graphics settings.",
    systems: [
      { name: "UMG Main Menu", description: "Animated menu transitions, hover/click audio feedback, and custom typography using the Coalition v2 and Michroma fonts." },
      { name: "Graphics Settings", description: "Fully functional quality settings (Low to Ultra) applying real Scalability Group changes at runtime, plus gamma adjustment." },
      { name: "3D Environment Backdrop", description: "A living background assembled from modular sci-fi structures with an animated Paragon Twinblast character." },
      { name: "Blueprint Interface System", description: "Clean BPI_UI interface for decoupled communication between UI widgets and game logic." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.6", "Blueprints"] },
      { category: "UI/UX", items: ["UMG", "Enhanced Input"] },
      { category: "Rendering", items: ["Lumen GI", "Virtual Shadow Maps", "DirectX 12"] }
    ],
    challenges: [
      { challenge: "Scalability Integration", solution: "Hooked up UI dropdowns and sliders directly to UE5's internal scalability settings and console variables." }
    ],
    features: ["Cinematic 3D backdrop", "Animated UI transitions", "Functional graphics presets", "Blueprint Interface decoupling", "Touch & Desktop input"],
    outcome: "Created a triple-A quality menu that serves as a highly reusable template for future shooter projects.",
    learnings: "Gained deep understanding of UMG widget animations, scalability settings application, and blending 2D UI with a rendering-heavy 3D background."
  },
  {
    id: "badbot",
    title: "BadBot",
    tagline: "An Action-Packed Unreal Engine 5 Experience",
    shortDescription: "A dynamic, fast-paced action game featuring multi-level progression, a floating pawn movement system, and a final boss fight.",
    category: "Action",
    platform: "PC",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: false,
    coverColor: "#120505",
    accentColor: "#00d4ff",
    tags: ["Unreal Engine", "Blueprints", "Action", "Enhanced Input"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/BadBot",
    overview: "BadBot is a dynamic, fast-paced action game developed in Unreal Engine 5. Futuristic bots have taken up an ancient village, and a bad bot gone rogue is defending the village against them. It features multi-level progression culminating in an epic boss fight.",
    problem: "Providing the player with complete 3D mobility while maintaining tight combat controls in a complex environment.",
    goal: "Leverage Unreal Engine 5's Lumen and Nanite systems to create rich environments combined with a unique floating pawn movement system.",
    systems: [
      { name: "Floating Pawn Movement", description: "Allows for omnidirectional movement giving the player full 3D mobility." },
      { name: "Combat & Progression", description: "Multi-level progression logic leading to a tailored final boss encounter." },
      { name: "Environment Rendering", description: "Utilizes Lumen Global Illumination & Reflections alongside Virtual Shadow Maps for hyper-realistic lighting." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.6", "Blueprints"] },
      { category: "Input", items: ["Enhanced Input Subsystem"] }
    ],
    challenges: [
      { challenge: "Omnidirectional Controls", solution: "Implemented a custom controller logic using Enhanced Input to map 3D movement and aiming seamlessly to mouse and keyboard." }
    ],
    features: ["Multi-Level Progression", "Next-Gen Graphics with Lumen", "Unique Floating Movement", "Blueprint-Driven Logic"],
    outcome: "Successfully crafted an engaging action game showcasing high-fidelity environments and responsive custom movement.",
    learnings: "Learned to effectively use floating pawn components and design multi-stage levels within the UE5 framework."
  },
  {
    id: "chaos-vehicles",
    title: "Chaos Vehicles",
    tagline: "A fully configured 4-wheel AWD vehicle",
    shortDescription: "A fully configured 4-wheel AWD automatic vehicle built from scratch in Unreal Engine 5.6 using the Chaos Vehicles Plugin.",
    category: "Simulation",
    platform: "Windows",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: false,
    coverColor: "#1a1525",
    accentColor: "#c084fc",
    tags: ["Unreal Engine", "Blueprints", "Chaos Physics"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/ChaosVehicles",
    overview: "Chaos Vehicles is a blueprint-only project demonstrating how to set up a fully functional 4-wheel All-Wheel-Drive (AWD) automatic transmission vehicle using the Chaos Vehicles Plugin, built completely from the ground up.",
    problem: "Properly rigging and configuring a vehicle in Unreal Engine 5 from a static mesh without relying on external DCC tools.",
    goal: "Manually generate a skeletal mesh, weight wheel bones, and tune physics using the Chaos Vehicle system entirely inside the editor.",
    systems: [
      { name: "Skeletal Mesh Pipeline", description: "Generated from a static mesh, hand-painted skin weights, and created custom bone hierarchies for wheels." },
      { name: "Chaos Vehicle Setup", description: "Main vehicle pawn with custom Front/Rear Wheel blueprints for suspension stiffness, friction, and steering." },
      { name: "Physics & Torque", description: "Custom physics asset for collision bodies and a float curve asset defining engine torque across the RPM range." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.6", "Blueprints"] },
      { category: "Plugins", items: ["Chaos Vehicles Plugin", "ModelingToolsEditorMode"] }
    ],
    challenges: [
      { challenge: "In-Editor Rigging", solution: "Used the ModelingToolsEditorMode to manually rig the static vehicle mesh, assign wheel bones, and configure skin weights successfully." }
    ],
    features: ["AWD Drivetrain", "Custom Torque Curves", "In-Editor Skeletal Rigging", "Enhanced Input integration"],
    outcome: "Produced a production-ready vehicle template that can be dropped into any UE5 project.",
    learnings: "Gained significant expertise in the UE5 modeling mode, skeletal mesh generation, and Chaos vehicle tuning parameters."
  },
  {
    id: "crystal-cavern",
    title: "CrystalCavern",
    tagline: "A challenging vehicle controller game",
    shortDescription: "A physics-driven vehicle control and navigation experience through intricate cavernous environments.",
    category: "Racing / Physics",
    platform: "Windows",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: false,
    coverColor: "#051515",
    accentColor: "#c084fc",
    tags: ["Unreal Engine", "Blueprints", "Chaos Physics"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/CrystalCavern",
    overview: "CrystalCavern is a physics-driven vehicle control and navigation experience where you must maneuver through intricate environments. Master your vehicle's handling to explore the cavernous terrain, overcome difficult obstacles, and reach your destination safely.",
    problem: "Creating challenging, tight terrain navigation using physics-based vehicles.",
    goal: "Design intricate cavern levels that test driving skill and spatial awareness using UE5's vehicle systems and Lumen rendering.",
    systems: [
      { name: "Vehicle Simulation", description: "Leveraging realistic suspension, friction, and tire modeling via Chaos Vehicles." },
      { name: "Dynamic Follow Cam", description: "Custom camera logic that adjusts to the vehicle's speed and orientation to give a strong sense of scale and momentum." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5", "Blueprints"] },
      { category: "Rendering", items: ["Lumen"] }
    ],
    challenges: [
      { challenge: "Camera Clipping in Tight Caverns", solution: "Tuned the spring arm's collision probes and camera blending to maintain visibility inside narrow tunnels." }
    ],
    features: ["High-fidelity cavern meshes", "Physics-driven navigation", "Lumen dynamic lighting", "Enhanced input vehicle controls"],
    outcome: "A fun and challenging prototype showcasing environmental interaction with physics vehicles.",
    learnings: "Improved skills in level design for vehicle navigation and camera tuning in enclosed spaces."
  },
  {
    id: "horror-game-menu",
    title: "HorrorGameMenu",
    tagline: "Cinematic, AAA-quality interactive menu",
    shortDescription: "A fully interactive, cinematic main menu screen with looping video backgrounds and multi-layered audio feedback.",
    category: "UI / Menu System",
    platform: "Windows",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: false,
    coverColor: "#150505",
    accentColor: "#34d399",
    tags: ["Unreal Engine", "UMG", "Blueprints", "UI/UX"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/HorrorGameMenu",
    overview: "Horror Game Menu (Buried Beneath) is a fully interactive, cinematic main menu screen built in Unreal Engine 5.6. It features a looping video background, dynamic fade-in animations, multi-layered audio feedback, and a quit confirmation dialog wrapped in a dark, atmospheric horror aesthetic.",
    problem: "Setting a compelling, eerie atmosphere before the player even starts the game.",
    goal: "Create a reusable, highly polished horror menu template with flawless UI/UX state management.",
    systems: [
      { name: "Video Background Widget", description: "Dedicated material (MP_BG_Video) driving a cinematic, dark-atmosphere video seamlessly behind the menu." },
      { name: "Reusable Button Blueprint", description: "A self-contained button widget (WBP_Button) handling all visual states (Normal, Hovered, Pressed) and audio cues." },
      { name: "Exit Confirmation Flow", description: "Structured UI navigation handling prompt overlays to prevent accidental game exits." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.6", "Blueprints"] },
      { category: "UI", items: ["UMG (Unreal Motion Graphics)"] }
    ],
    challenges: [
      { challenge: "Media Player UI Integration", solution: "Properly routing the Media Texture to a UI material and ensuring smooth playback loops without hitching on load." }
    ],
    features: ["Looping video background", "Dynamic fade-in animations", "Custom horror font", "Hover & Click SFX", "Credits screen", "Quit confirmation"],
    outcome: "Developed a standalone, drop-in ready AAA menu system for dark-themed projects.",
    learnings: "Refined techniques for UI animation timelines, audio mixing in UMG, and media framework usage in UI materials."
  },
  {
    id: "marble-run",
    title: "Marble Run",
    tagline: "Physics-driven 3D maze navigation",
    shortDescription: "A physics-driven 3D maze navigation game where players control a marble through intricate levels.",
    category: "Puzzle / Physics",
    platform: "Windows",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: false,
    coverColor: "#101010",
    accentColor: "#00d4ff",
    tags: ["Unreal Engine", "Blueprints", "Physics"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/MarbleRun",
    overview: "Marble Run is an engaging and physics-driven 3D maze navigation game built in Unreal Engine. Players take control of a marble and must carefully navigate through intricate levels filled with challenging obstacles, narrow pathways, and dynamic environmental hazards.",
    problem: "Tuning rigid body physics for precise, predictable player control.",
    goal: "Build a satisfying blend of reflex-based challenges and momentum-driven movement.",
    systems: [
      { name: "Physics Movement Control", description: "Applying torque and force to a rigid body sphere based on player input while respecting physical constraints." },
      { name: "Environmental Hazards", description: "Dynamic traps and narrow ledges that react physically to the marble's presence." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5.6", "Blueprints"] }
    ],
    challenges: [
      { challenge: "Momentum Balancing", solution: "Carefully tweaked angular damping, friction, and input force multipliers to make the marble feel heavy yet responsive." }
    ],
    features: ["Momentum-based gameplay", "Intricate maze levels", "Lumen rendering", "Physics-based movement"],
    outcome: "A tight, responsive physics puzzle game prototype.",
    learnings: "Deepened knowledge of Unreal's rigid body dynamics and collision physical materials."
  },
  {
    id: "mars-marine",
    title: "MarsMarine",
    tagline: "Top-down infinite shooter",
    shortDescription: "An action-packed, top-down infinite shooter with endless waves of enemies and NavMesh-driven AI.",
    category: "Action / Shooter",
    platform: "Windows",
    year: "2026",
    engine: "Unreal Engine",
    associatedWith: {
      type: "self",
      name: "Independent Transition",
      description: "An independent personal project built to master Unreal Engine 5 production workflows.",
      badge: "Independent",
      color: "#c084fc"
    },
    featured: false,
    coverColor: "#2a1010",
    accentColor: "#d97706",
    tags: ["Unreal Engine", "Blueprints", "AI", "NavMesh"],
    thumbnail: null,
    github: "https://github.com/Prasham-Desai/MarsMarine",
    overview: "MarsMarine is an action-packed, top-down infinite shooter where you must survive against endless waves of enemies on the Martian surface. Stay alive for as long as possible while navigating the environment and managing your resources.",
    problem: "Managing infinite enemy spawns and AI navigation performance over long play sessions.",
    goal: "Create a robust top-down shooter loop with scaling difficulty and responsive cursor-driven aiming.",
    systems: [
      { name: "Cursor Aiming Controller", description: "Custom math logic to convert screen-space mouse coordinates to world-space, allowing the character to dynamically rotate and face the cursor." },
      { name: "Endless Spawning System", description: "Custom spawner blueprints manage the game's endless loop, dynamically instantiating enemy classes outside player view." },
      { name: "NavMesh AI", description: "Enemies utilize AI Controllers and MoveToActor nodes to aggressively track the player across the Martian surface." }
    ],
    techStack: [
      { category: "Engine", items: ["Unreal Engine 5", "Blueprints"] },
      { category: "AI", items: ["NavMeshBoundsVolume", "AI Controller"] }
    ],
    challenges: [
      { challenge: "Cursor to World Space", solution: "Used PlayerController's DeprojectScreenToWorld mapped against a mathematical plane to accurately find the aiming intersection point." }
    ],
    features: ["Top-down locomotion", "Cursor-based aiming", "Infinite wave spawning", "NavMesh pathfinding"],
    outcome: "Built a solid foundation for an arcade shooter with scalable AI systems.",
    learnings: "Mastered top-down camera setups, screen-to-world projection, and managing large numbers of basic AI actors."
  },
  // ── Unity Projects ──
  {
    id: "chesstrix",
    title: "Chesstrix",
    tagline: "Production-Grade Mobile Chess",
    shortDescription: "A full-featured mobile multiplayer chess game with 90+ custom scripts, a robust engine, and real-time multiplayer via Photon PUN3.",
    category: "Strategy / Board Game",
    platform: "Android / iOS",
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2026",
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
    year: "2025",
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
