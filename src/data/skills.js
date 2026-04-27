export const skillGroups = [
  {
    id: "core",
    label: "Core Engine",
    icon: "⬡",
    color: "#00d4ff",
    skills: [
      { name: "Unity 3D / 2D", level: 95, years: "3+" },
      { name: "C#", level: 92, years: "3+" },
      { name: "Game Architecture", level: 88, years: "2+" },
      { name: "DOTS / ECS", level: 75, years: "1+" }
    ]
  },
  {
    id: "networking",
    label: "Networking",
    icon: "◈",
    color: "#ff6b6b",
    skills: [
      { name: "Multiplayer (Photon / NGO)", level: 85, years: "2+" },
      { name: "Firebase RTDB", level: 88, years: "2+" },
      { name: "REST APIs", level: 82, years: "2+" },
      { name: "WebSockets", level: 78, years: "1+" }
    ]
  },
  {
    id: "mobile",
    label: "Mobile & Deploy",
    icon: "◉",
    color: "#ffd700",
    skills: [
      { name: "Android Deployment", level: 90, years: "2+" },
      { name: "iOS Deployment", level: 75, years: "1+" },
      { name: "AdMob / Mediation", level: 85, years: "2+" },
      { name: "Performance Optimization", level: 90, years: "2+" }
    ]
  },
  {
    id: "backend",
    label: "Backend & Tools",
    icon: "⬟",
    color: "#00ff88",
    skills: [
      { name: "Firebase Suite", level: 85, years: "2+" },
      { name: "Node.js / Express", level: 72, years: "1+" },
      { name: "MongoDB", level: 70, years: "1+" },
      { name: "Git / GitHub / GitLab", level: 88, years: "3+" }
    ]
  },
  {
    id: "emerging",
    label: "Emerging Tech",
    icon: "◇",
    color: "#b44fff",
    skills: [
      { name: "AR / VR / MR", level: 78, years: "1+" },
      { name: "Analytics Integration", level: 82, years: "2+" },
      { name: "Procedural level generation", level: 65, years: "1+" },
      { name: "Smart NPCs using LLM-like systems", level: 68, years: "1+" }
    ]
  }
];

export const techLogos = [
  { name: "Unity", category: "Engine" },
  { name: "C#", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "Photon", category: "Networking" },
  { name: "Android", category: "Platform" },
  { name: "iOS", category: "Platform" },
  { name: "AdMob", category: "Monetization" },
  { name: "Git", category: "Tools" },
  { name: "Node.js", category: "Backend" },
  { name: "DOTS", category: "Engine" },
  { name: "WebGL", category: "Platform" },
  { name: "AR/VR", category: "Emerging" },
];
