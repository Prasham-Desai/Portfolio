export const skillGroups = [
  {
    id: "unreal",
    label: "Unreal Engine",
    icon: "⬡",
    color: "#c084fc",
    skills: [
      { name: "Unreal C++ & Core Architecture", level: 85, years: "1+" },
      { name: "Blueprints Visual Scripting", level: 95, years: "1.5+" },
      { name: "Gameplay Ability System (GAS)", level: 80, years: "1+" },
      { name: "Network Replication", level: 75, years: "1+" },
      { name: "UMG & Animation Blueprints", level: 85, years: "1+" },
    ]
  },
  {
    id: "core",
    label: "Unity Engine",
    icon: "◆",
    color: "#00d4ff",
    skills: [
      { name: "C# Game Architecture", level: 90, years: "2.5+" },
      { name: "DOTS / Entity Component System", level: 75, years: "1.5+" },
      { name: "Addressables & Asset Management", level: 80, years: "2+" },
      { name: "Performance Optimization", level: 85, years: "2+" },
      { name: "Unity UI Toolkit & uGUI", level: 85, years: "2.5+" },
    ]
  },
  {
    id: "gameplay",
    label: "Gameplay & AI",
    icon: "◈",
    color: "#34d399",
    skills: [
      { name: "Behavior Trees & Blackboards", level: 85, years: "2+" },
      { name: "Character Locomotion & FSM", level: 90, years: "2+" },
      { name: "Combat & Inventory Systems", level: 80, years: "1.5+" },
      { name: "NavMesh Pathfinding", level: 85, years: "2+" },
      { name: "Input & Camera Systems", level: 85, years: "2+" },
    ]
  },
  {
    id: "networking",
    label: "Networking",
    icon: "◉",
    color: "#ff5263",
    skills: [
      { name: "Client-Server Architecture", level: 85, years: "2+" },
      { name: "Photon (PUN/Quantum) & NGO", level: 80, years: "2+" },
      { name: "State Sync & Lag Compensation", level: 70, years: "1.5+" },
      { name: "Backend API Integration (REST)", level: 80, years: "2+" },
      { name: "Matchmaking & Lobbies", level: 75, years: "1.5+" },
    ]
  },
  {
    id: "backend",
    label: "Backend & Tools",
    icon: "⬟",
    color: "#ffbe0b",
    skills: [
      { name: "Git & Perforce (VCS)", level: 90, years: "3+" },
      { name: "CI/CD & Build Pipelines", level: 75, years: "1.5+" },
      { name: "Firebase & Cloud Services", level: 85, years: "2+" },
      { name: "Performance Profiling Tools", level: 80, years: "2+" },
      { name: "Agile / Jira Workflow", level: 85, years: "2+" },
    ]
  },
];

export const techLogos = [
  { name: "Unreal Engine", category: "Engine" },
  { name: "Unity", category: "Engine" },
  { name: "C++", category: "Language" },
  { name: "C#", category: "Language" },
  { name: "Blueprints", category: "Engine" },
  { name: "Firebase", category: "Backend" },
  { name: "Photon", category: "Networking" },
  { name: "Android", category: "Platform" },
  { name: "iOS", category: "Platform" },
  { name: "Git", category: "Tools" },
  { name: "Visual Studio", category: "Tools" },
  { name: "DOTS", category: "Engine" },
  { name: "Chaos Vehicles", category: "Engine" },
  { name: "UMG", category: "Engine" },
];
