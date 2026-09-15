=== C:\Users\prash\Desktop\Peronal Projects\UE5\BadBot\README.md ===
<div align="center">
  <img src="./ScreenShots/Game%20Logo.png" alt="BadBot Logo" width="400"/>
  
  # BadBot

  **An Action-Packed Unreal Engine 5 Experience**
</div>

---

## ðŸŽ® About The Game

**BadBot** is a dynamic, fast-paced action game developed in Unreal Engine 5. 

**Story:** Futuristic bots have taken up an ancient village, and a bad bot gone rogue is defending the village against them!

The game features multi-level progression culminating in an epic boss fight at the end. Built with a floating pawn movement system, you have complete 3D mobility to navigate the beautifully crafted Asian Village and engage in intense combat.

---

## âœ¨ Key Features

- **Multi-Level Progression:** Fight through multiple levels leading up to a final boss fight.
- **Next-Gen Graphics:** Leverages Unreal Engine 5's Lumen and Nanite systems for hyper-realistic lighting and high-fidelity geometry.
- **Unique Movement:** Full 3D mobility utilizing a floating pawn movement system.
- **Rich Environments:** Explore diverse levels, starting with a beautifully crafted ancient Asian Village map.
- **Blueprint-Driven Logic:** Highly modular and customizable game logic powered by Unreal's visual scripting.

---

## ðŸ“¸ Screenshots

Here is a look at BadBot in action!

### Splash Screen
![Splash Screen](<./ScreenShots/Splash Screen.png>)

### Gameplay & Environments
![Screenshot 1](./ScreenShots/1.png)

![Screenshot 2](./ScreenShots/3.png)

![Screenshot 3](./ScreenShots/4.png)

---

## ðŸ›  Technical Details

- **Engine Version:** Unreal Engine 5.6
- **Target Platforms:** Windows PC
- **Input Handling:** Enhanced Input Subsystem
- **Rendering:** Lumen Global Illumination & Reflections, Virtual Shadow Maps
- **Core Architecture:** Blueprint Only

---

## ðŸš€ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- **Epic Games Launcher:** Required to install the engine.
- **Unreal Engine 5.6:** Make sure this specific version (or newer) is installed.
- **Hardware:** A dedicated GPU capable of running DirectX 12 (NVIDIA RTX series or AMD equivalent) is highly recommended for Lumen.

### Installation & Launch

1. **Clone or Extract:** Clone the repository or extract the project folder to your desired location.
2. **Open the Engine:** Launch Unreal Engine 5.6 from the Epic Games Launcher.
3. **Browse to Project:** In the Unreal Project Browser, click on **Browse** and navigate to your extracted folder.
4. **Select UProject:** Open the `BadBot.uproject` file.
5. **Play In Editor (PIE):** Once all shaders have compiled and the project is fully loaded, hit the **Play** button on the top toolbar (Shortcut: `Alt + P`) to start the game.

### Packaging the Game

To build a standalone executable that you can share:
1. Open the project in the Unreal Editor.
2. Navigate to **Platforms** in the top menu bar.
3. Select **Windows** > **Package Project**.
4. Choose an output directory and wait for the engine to cook the assets and build the `.exe`.
5. Run the resulting executable in your output folder.

---

## ðŸ•¹ Controls

BadBot uses a floating pawn movement system allowing for omnidirectional movement. 

### Keyboard & Mouse
| Action | Key Binding |
| :--- | :--- |
| **Move (Forward/Left/Back/Right)** | `W`, `A`, `S`, `D` |
| **Move Up** | `Spacebar` |
| **Move Down** | `Shift` |
| **Look / Aim** | `Mouse Movement` |
| **Fire (Hold for constant)** | `Left Mouse Button` |
| **Pause Menu** | `Esc` |

---

## ðŸ“‚ Project Structure

An overview of the main directories you'll interact with:

- `Config/`: Contains `.ini` configuration files (e.g., DefaultInput.ini).
- `Content/`: The main hub for all game assets.
  - `Asian_Village/`: Assets specific to the village environment.
  - `Blueprints/`: Core game logic, character controllers, and managers.
  - `Input/`: Input Actions (IA) and Input Mapping Contexts (IMC).
  - `Maps/`: Level files (e.g., `BadBotLevel.umap`).
  - `UI/`: Widgets, HUDs, and menus.
- `ScreenShots/`: Promotional and gameplay images for documentation.

---

## ðŸ“„ License

This is an unlicensed personal project created for the purpose of learning and experimenting with Unreal Engine 5.


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\ChaosVehicles\README.md ===
<p align="center">
  <img src="ChaosVehicles.png" alt="Chaos Vehicles Logo" width="200"/>
</p>

<h1 align="center">Chaos Vehicles</h1>

<p align="center">
  <b>A fully configured 4-wheel AWD automatic vehicle built from scratch in Unreal Engine 5.6 using the Chaos Vehicles Plugin</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Unreal%20Engine-5.6-blue?style=for-the-badge&logo=unrealengine&logoColor=white" alt="UE5.6"/>
  <img src="https://img.shields.io/badge/Plugin-Chaos%20Vehicles-purple?style=for-the-badge" alt="Chaos Vehicles"/>
  <img src="https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"/>
  <img src="https://img.shields.io/badge/Input-Enhanced%20Input-green?style=for-the-badge" alt="Enhanced Input"/>
</p>

---

<p align="center">
  <img src="Content/Splash/Splash.png" alt="Chaos Vehicles Splash Screen" width="800"/>
</p>

---

## ðŸ“– About

**Chaos Vehicles** is a blueprint-only Unreal Engine 5.6 project that demonstrates how to set up a fully functional **4-wheel All-Wheel-Drive (AWD) automatic transmission vehicle** using the **Chaos Vehicles Plugin** â€” UE5's physics-based vehicle simulation system built on the Chaos physics engine.

Everything in this project has been built from the ground up:

- ðŸš— **Skeletal Mesh** â€” Generated manually from the static vehicle mesh
- ðŸ¦´ **Wheel Bones & Skinning** â€” Created and weighted by hand inside the project (no external DCC tools required for rigging)
- âš™ï¸ **Vehicle Physics** â€” Configured entirely through the Chaos Vehicle blueprint system with torque curves, suspension, and drivetrain settings
- ðŸŽ® **Input System** â€” Full player controls using UE5's Enhanced Input system

---

## âœ¨ Features

| Feature | Details |
|---|---|
| **Drivetrain** | All-Wheel Drive (AWD) with automatic transmission |
| **Wheels** | Separate front and rear wheel blueprints with independent configurations |
| **Physics** | Full Chaos Vehicle physics with custom torque curve and physics asset |
| **Skeletal Mesh** | Hand-rigged from static mesh with manually placed wheel bones and skin weights |
| **Animation** | Animation Blueprint for wheel spin, steering rotation, and suspension movement |
| **Input** | Enhanced Input system with steering, throttle, brake, reverse, free-look camera, and handbrake |
| **Rendering** | Lumen GI, ray tracing, virtual shadow maps, SM6 shaders (DX12) |
| **Game Mode** | Custom vehicle game mode with auto-possession |

---

## ðŸŽ® Controls

Both **keyboard + mouse** and **gamepad/controller** inputs are fully supported.

| Action | Keyboard | Controller | Description |
|---|---|---|---|
| **Throttle** | `W` | `Right Trigger (RT)` | Accelerate forward |
| **Brake / Reverse** | `S` | `Left Trigger (LT)` | Brake (or reverse when stopped) |
| **Steer** | `A` / `D` | `Left Stick X-Axis` | Turn wheels left / right |
| **Handbrake** | `Space` | `Left Face Special Button` | Engage handbrake / drift |
| **Free Look** | `Mouse` | `Right Stick (2D Axis)` | Look around the vehicle freely |

---

## ðŸ“ Project Structure

```
ChaosVehicles/
â”œâ”€â”€ ChaosVehicles.png                 # Project logo / icon
â”œâ”€â”€ ChaosVehicles.uproject            # UE 5.6 project file
â”‚
â”œâ”€â”€ Config/
â”‚   â”œâ”€â”€ DefaultEngine.ini             # Renderer, Lumen, ray tracing, DX12 settings
â”‚   â”œâ”€â”€ DefaultInput.ini              # Enhanced Input configuration
â”‚   â”œâ”€â”€ DefaultGame.ini               # Game settings
â”‚   â””â”€â”€ DefaultEditor.ini             # Editor preferences
â”‚
â””â”€â”€ Content/
    â”œâ”€â”€ Blueprints/
    â”‚   â”œâ”€â”€ Vehicle/
    â”‚   â”‚   â”œâ”€â”€ BP_Vehicle             # Main vehicle pawn blueprint
    â”‚   â”‚   â”œâ”€â”€ BP_FrontWheel          # Front wheel configuration (ChaosVehicleWheel)
    â”‚   â”‚   â”œâ”€â”€ BP_RearWheel           # Rear wheel configuration (ChaosVehicleWheel)
    â”‚   â”‚   â””â”€â”€ ABP_Vehicle            # Animation Blueprint for wheel/suspension
    â”‚   â””â”€â”€ Game/
    â”‚       â””â”€â”€ BP_VehicleGameMode     # Custom game mode
    â”‚
    â”œâ”€â”€ Input/
    â”‚   â”œâ”€â”€ IMC_Vehicle                # Input Mapping Context
    â”‚   â”œâ”€â”€ IA_Throttle                # Input Action â€” Throttle
    â”‚   â”œâ”€â”€ IA_Steer                   # Input Action â€” Steering
    â”‚   â”œâ”€â”€ IA_BrakeAndReverse         # Input Action â€” Brake / Reverse
    â”‚   â”œâ”€â”€ IA_HandBrake               # Input Action â€” Handbrake
    â”‚   â””â”€â”€ IA_Look                    # Input Action â€” Free Look Camera
    â”‚
    â”œâ”€â”€ Mesh/
    â”‚   â”œâ”€â”€ Vehicle/
    â”‚   â”‚   â”œâ”€â”€ SM_Vehicle             # Static mesh â€” Full vehicle body
    â”‚   â”‚   â”œâ”€â”€ SM_Chasis              # Static mesh â€” Chassis
    â”‚   â”‚   â””â”€â”€ SM_Wheel               # Static mesh â€” Wheel
    â”‚   â””â”€â”€ Geometery/
    â”‚       â””â”€â”€ Cylinder_E07F3B1E      # Helper geometry
    â”‚
    â”œâ”€â”€ Skeleton/
    â”‚   â””â”€â”€ Vehicle/
    â”‚       â”œâ”€â”€ SKM_Vehicle            # Skeletal mesh (generated from static mesh)
    â”‚       â”œâ”€â”€ SKEL_Vehicle           # Skeleton asset with wheel bones
    â”‚       â””â”€â”€ SM_Vehicle             # Static mesh reference
    â”‚
    â”œâ”€â”€ Physics/
    â”‚   â”œâ”€â”€ PHYS_Vehicle               # Physics asset for vehicle collision & simulation
    â”‚   â””â”€â”€ CF_Torque                  # Torque curve float asset for engine tuning
    â”‚
    â”œâ”€â”€ Textures/
    â”‚   â””â”€â”€ Vehicle/
    â”‚       â”œâ”€â”€ M_ScifiTruck           # Vehicle body material
    â”‚       â”œâ”€â”€ M_Wheels               # Wheel material
    â”‚       â”œâ”€â”€ T_ScifiTruck_DIF       # Diffuse / Albedo texture
    â”‚       â”œâ”€â”€ T_ScifiTruck_NRM       # Normal map
    â”‚       â”œâ”€â”€ T_ScifiTruck_ORM       # Occlusion / Roughness / Metallic packed texture
    â”‚       â””â”€â”€ T_ScifiTruck_EM        # Emissive texture
    â”‚
    â”œâ”€â”€ Splash/
    â”‚   â”œâ”€â”€ Splash.png                 # Game splash screen
    â”‚   â””â”€â”€ EdSplash.png               # Editor splash screen
    â”‚
    â””â”€â”€ Maps/
        â”œâ”€â”€ TestingMap                 # Primary test level (default map)
        â””â”€â”€ TestMap                    # Secondary test level
```

---

## ðŸ”§ Technical Highlights

### Chaos Vehicle Setup

The vehicle is configured as a **`WheeledVehiclePawn`** using the Chaos Vehicles Plugin with the following key components:

- **`BP_Vehicle`** â€” The main vehicle pawn containing the skeletal mesh component, spring arm camera, and the Chaos Vehicle Movement Component
- **`BP_FrontWheel`** / **`BP_RearWheel`** â€” Derived from `ChaosVehicleWheel`, these define per-axle properties such as:
  - Wheel radius & width
  - Suspension stiffness & damping
  - Friction force multiplier
  - Steering angle (front wheels only)
- **`PHYS_Vehicle`** â€” Physics Asset defining collision bodies for the chassis and each wheel bone
- **`CF_Torque`** â€” Float Curve asset defining the engine's torque output across the RPM range

### Skeletal Mesh Pipeline (Done In-Editor)

1. Started with the static mesh `SM_Vehicle`
2. Created a Skeleton (`SKEL_Vehicle`) with a root bone and four wheel bones positioned at each wheel location
3. Generated the Skeletal Mesh (`SKM_Vehicle`) from the static mesh
4. Manually painted skin weights to bind the wheel geometry to their respective bones
5. Created `ABP_Vehicle` (Animation Blueprint) to drive wheel rotation, steering, and suspension offsets at runtime

### Rendering Configuration

| Setting | Value |
|---|---|
| Global Illumination | Lumen (Dynamic GI) |
| Reflections | Lumen Reflections |
| Shadows | Virtual Shadow Maps |
| Ray Tracing | Enabled |
| Shader Model | SM6 (DX12) |
| Static Lighting | Disabled (fully dynamic) |

---

## ðŸš€ Getting Started

### Prerequisites

- **Unreal Engine 5.6** (installed via the Epic Games Launcher)
- **Windows** with a DX12-capable GPU (ray tracing-capable GPU recommended)
- **Chaos Vehicles Plugin** enabled (included by default in UE5, explicitly enabled in this project)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ChaosVehicles.git
   ```

2. **Open the project**
   - Double-click `ChaosVehicles.uproject`, or
   - Open it via the Unreal Engine launcher

3. **Play**
   - The project opens to `TestingMap` by default
   - Hit **Play** (Alt+P) â€” the vehicle pawn is auto-possessed
   - Use **WASD** + **Mouse** to drive around

---

## ðŸ”Œ Plugins Used

| Plugin | Purpose |
|---|---|
| **ChaosVehiclesPlugin** | Core vehicle physics simulation (Chaos-based wheeled vehicle system) |
| **ModelingToolsEditorMode** | Used during development for mesh editing and geometry operations |

---

## ðŸ“œ License

This project is provided for **educational and reference purposes**. Feel free to use it as a starting point for your own Chaos Vehicle implementations in UE5.

---

<p align="center">
  <img src="ChaosVehicles.png" alt="Chaos Vehicles" width="80"/>
  <br/>
  <sub>Built with â¤ï¸ in Unreal Engine 5.6</sub>
</p>


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\CrystalCavern\README.md ===
# CrystalCavern

A challenging vehicle controller and navigation game built in Unreal Engine 5.

## ðŸ“ Game Description
CrystalCavern is a physics-driven vehicle control and navigation experience where you must maneuver through intricate environments. Master your vehicle's handling to explore the cavernous terrain, overcome difficult obstacles, and reach your destination safely.

## ðŸ“¸ Screenshots

<img src="ScreenShots/Screenshot%202026-06-25%20195707.png" width="800">
<img src="ScreenShots/Screenshot%202026-06-25%20195748.png" width="800">

## ðŸŽ® Controls
- **W, A, S, D** / **Arrow Keys**: Accelerate, Brake, and Steer
- **Spacebar**: Handbrake
- **C**: Toggle Camera View
- **Escape / P**: Pause Game

*(Note: Adjust these controls based on your specific final input mappings in Unreal Engine)*

## ðŸ› ï¸ How It Was Made (Development Details)
CrystalCavern is a **Blueprint** project developed in **Unreal Engine 5**, demonstrating the power and flexibility of UE5's visual scripting and physics systems. It focuses on robust vehicle mechanics and environmental navigation.

### Key Systems & Technologies Used:
- **Core Engine Features**:
  - Built entirely using **Unreal Engine 5's Blueprint Visual Scripting**, handling the vehicle setup, physics interactions, and navigation logic.
  - Utilizes the **Enhanced Input System** (standard in modern UE5) for responsive and configurable player controls, allowing for precise vehicle handling.
- **Player Mechanics**:
  - The player pawn is built around Unreal's vehicle simulation (such as the Chaos Vehicle system), leveraging realistic suspension, friction, and tire modeling.
  - Custom camera logic provides dynamic follow cams that adjust to the vehicle's speed and orientation to give a strong sense of scale and momentum.
- **Environment & Navigation**:
  - Complex cavern environments built with high-fidelity meshes and collision boundaries designed to test driving skill and spatial awareness.
  - Navigation elements guide the player through the labyrinthine paths, requiring careful maneuvering.
- **Assets & Rendering**:
  - Leverages UE5's advanced rendering pipeline, including **Lumen**, for stunning dynamic lighting and reflections that bring the crystalline environments to life.

## âš™ï¸ How It Works (Gameplay Loop)
- **Game Loop**: The game tasks the player with navigating from a starting point to specific objectives across various terrain challenges. As you progress, the terrain becomes more treacherous, demanding finer vehicle control.
- **Scoring/Progression**: Completing routes efficiently, avoiding major crashes, and mastering the vehicle's handling to overcome the cavern's natural obstacles.

---
*Developed with Unreal Engine 5.*


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\HorrorGameMenu\README.md ===
<p align="center">
  <img src="HorrorGameMenu.png" alt="Horror Game Menu â€” Banner" width="400"/>
</p>

<h1 align="center">ðŸ©¸ Buried Beneath â€” Main Menu</h1>

<p align="center">
  <b>A cinematic, AAA-quality interactive main menu built entirely in Unreal Engine 5.6</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Engine-Unreal%20Engine%205.6-0E1128?style=for-the-badge&logo=unrealengine&logoColor=white" alt="UE5.6"/>
  <img src="https://img.shields.io/badge/Blueprints-100%25-blue?style=for-the-badge" alt="Blueprints"/>
  <img src="https://img.shields.io/badge/Type-Menu%20System-critical?style=for-the-badge" alt="Menu System"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</p>

---

> **âš ï¸ Note:** This is **not** a full game â€” it is a standalone, polished **main menu system** designed to demonstrate a production-ready, triple-A title screen experience with full audio-visual polish.

---

## ðŸŽ¬ Overview

**Horror Game Menu** is a fully interactive, cinematic main menu screen built in **Unreal Engine 5.6** using **100% Blueprints**. It features a looping video background, dynamic fade-in animations, multi-layered audio feedback (hover, click, press), a credits screen, and a quit confirmation dialog â€” all wrapped in a dark, atmospheric horror aesthetic.

The project is designed as a reusable menu template that can be dropped into any horror (or dark-themed) game project.

---

## ðŸŽ¨ Splash Screen

<p align="center">
  <img src="Content/Splash/Splash.png" alt="Splash Screen" width="800"/>
  <br/><em>Custom Splash Screen â€” Abandoned asylum atmosphere sets the tone before the menu even loads</em>
</p>


---

## âœ¨ Features

### ðŸ–¥ï¸ Main Menu Screen
- **Looping Video Background** â€” A cinematic, dark-atmosphere video plays seamlessly behind the menu, giving the screen a living, breathing feel worthy of a AAA title.
- **Dynamic Fade-In Animation** â€” All UI elements animate in with smooth fade/slide transitions when the menu loads, creating a polished first impression.
- **Custom Horror Font** â€” Uses the *Kingthings Trypewriter* typeface for an eerie, vintage horror aesthetic.
- **Custom Menu Background Material** â€” Dedicated material (`MP_BG` / `MP_BG_Video`) drives the video background within the widget system.

### ðŸŽ® Interactive Buttons
- **Color Change on Hover** â€” Buttons shift color when the cursor hovers over them, providing clear visual feedback.
- **Color Change on Click** â€” A distinct pressed color state gives satisfying tactile feedback.
- **Reusable Button Widget** (`WBP_Button`) â€” A single, self-contained button blueprint that handles all visual states (Normal â†’ Hovered â†’ Pressed), making it trivial to add new menu options.

### ðŸ”Š Audio & Sound Design
- **Hover Sound Effects** â€” Subtle audio cue plays when a button is hovered (multiple variants: `MSS_Click1`, `MSS_Click2`, `MSS_Click3`).
- **Click / Press Sound Effects** â€” Satisfying click sounds fire on button press (variants: `VR_click1`, `VR_click2`, `VR_click3`).
- **Looping Background Music** â€” An ambient horror soundtrack (`Sound.uasset`) loops continuously while the menu is active, building atmosphere from the moment the game launches.

### ðŸ“œ Credits Screen
- **Dedicated Credits Widget** (`WBP_Credits`) â€” A full credits screen accessible from the main menu.
- **Smooth Transition** â€” Animated transition between the main menu and credits screen.
- **Back Navigation** â€” Easy return to the main menu.

### ðŸšª Exit / Quit Confirmation
- **Quit Confirmation Dialog** (`WBP_QuitConfirm`) â€” Instead of immediately closing, the game presents a confirmation prompt ("Are you sure you want to quit?") to prevent accidental exits.
- **Styled to Match** â€” The dialog uses the same horror aesthetic as the rest of the menu.

### ðŸŽ¨ Custom Splash Screen
- **Branded Splash** â€” Custom editor and game splash screens (`Splash.png` / `EdSplash.png`) for a professional touch even before the menu loads.

---

## ðŸ“ Project Structure

```
HorrorGameMenu/
â”œâ”€â”€ Content/
â”‚   â”œâ”€â”€ Fonts/                          # Custom horror typeface
â”‚   â”‚   â”œâ”€â”€ Kingthings_Trypewriter_2.uasset
â”‚   â”‚   â””â”€â”€ Kingthings_Trypewriter_2_Font.uasset
â”‚   â”œâ”€â”€ Levels/
â”‚   â”‚   â””â”€â”€ LV_MainMenu.umap           # The main menu level
â”‚   â”œâ”€â”€ Sounds/                         # All audio assets
â”‚   â”‚   â”œâ”€â”€ MSS_Click1/2/3.uasset      # Hover sound variants
â”‚   â”‚   â”œâ”€â”€ VR_click1/2/3.uasset       # Click/press sound variants
â”‚   â”‚   â””â”€â”€ Sound.uasset               # Looping background music
â”‚   â”œâ”€â”€ Splash/                         # Custom splash screens
â”‚   â”‚   â”œâ”€â”€ EdSplash.png
â”‚   â”‚   â””â”€â”€ Splash.png
â”‚   â”œâ”€â”€ Textures/
â”‚   â”‚   â””â”€â”€ MenuBG.uasset              # Menu background texture
â”‚   â”œâ”€â”€ Videos/                         # Looping background videos
â”‚   â”‚   â”œâ”€â”€ BGVid.uasset
â”‚   â”‚   â”œâ”€â”€ BGVidLoop__1_.uasset
â”‚   â”‚   â”œâ”€â”€ BG_Loop_One.uasset
â”‚   â”‚   â”œâ”€â”€ Loop_BG.uasset
â”‚   â”‚   â”œâ”€â”€ MenuBGVid.uasset
â”‚   â”‚   â””â”€â”€ Video_Project_7.uasset
â”‚   â””â”€â”€ Widgets/
â”‚       â””â”€â”€ MainMenu/                   # All menu UI blueprints
â”‚           â”œâ”€â”€ BP_MainMenu.uasset      # Main menu game mode / controller
â”‚           â”œâ”€â”€ BP_MainMenuPawn.uasset  # Menu pawn (input handling)
â”‚           â”œâ”€â”€ MP_BG.uasset            # Background material
â”‚           â”œâ”€â”€ MP_BG_Video.uasset      # Video background material
â”‚           â”œâ”€â”€ WBP_Button.uasset       # Reusable button widget
â”‚           â”œâ”€â”€ WBP_Credits.uasset      # Credits screen widget
â”‚           â”œâ”€â”€ WBP_Menu.uasset         # Main menu widget
â”‚           â””â”€â”€ WBP_QuitConfirm.uasset  # Quit confirmation dialog
â”œâ”€â”€ Config/                             # Engine & input config
â”œâ”€â”€ HorrorGameMenu.uproject             # UE5.6 project file
â””â”€â”€ HorrorGameMenu.png                  # Project thumbnail
```

---

## ðŸš€ Getting Started

### Prerequisites

| Requirement | Version |
|---|---|
| **Unreal Engine** | 5.6+ |
| **Platform** | Windows (developed & tested) |

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/HorrorGameMenu.git
   ```

2. **Open in Unreal Engine**
   - Launch Unreal Engine 5.6
   - Open `HorrorGameMenu.uproject`

3. **Play**
   - Open `Content/Levels/LV_MainMenu` in the editor
   - Hit **Play** (or **Standalone Game**) to experience the full menu

> **ðŸ’¡ Tip:** For the best experience, run in **Standalone Game** mode so the video background and audio loop correctly.

---

## ðŸ› ï¸ Customization

This menu system is designed to be easily customizable:

| What | Where | How |
|---|---|---|
| **Button text / count** | `WBP_Menu` | Add/remove `WBP_Button` instances in the widget designer |
| **Button colors** | `WBP_Button` | Edit the Normal, Hovered, and Pressed color properties |
| **Background video** | `Videos/` | Replace the video asset and update `MP_BG_Video` |
| **Background music** | `Sounds/Sound` | Swap the audio asset |
| **Hover / Click SFX** | `Sounds/MSS_*` / `VR_*` | Replace with your own sound cues |
| **Font** | `Fonts/` | Import a new font and update the font asset reference |
| **Credits content** | `WBP_Credits` | Edit the text block in the widget designer |
| **Splash screen** | `Splash/` | Replace `Splash.png` and `EdSplash.png` |

## ðŸ“¸ Screenshots

<table>
  <tr>
    <td align="center"><img src="Screenshots/SS1.png" alt="Main Menu" width="100%"/><br/><em>Main Menu â€” Title screen with looping video background</em></td>
    <td align="center"><img src="Screenshots/SS2.png" alt="Button Hover State" width="100%"/><br/><em>Hover State â€” "Play" button turns red on hover</em></td>
  </tr>
  <tr>
    <td align="center"><img src="Screenshots/SS3.png" alt="Credits Screen" width="100%"/><br/><em>Credits â€” "Created by Prasham Desai" with Return button</em></td>
    <td align="center"><img src="Screenshots/SS4.png" alt="Quit Confirmation" width="100%"/><br/><em>Quit Confirmation â€” Yes / No dialog in typewriter style</em></td>
  </tr>
</table>

---

## ðŸ”§ Tech Stack

- **Engine:** Unreal Engine 5.6
- **Language:** 100% Blueprints (no C++)
- **UI System:** UMG (Unreal Motion Graphics)
- **Plugins Used:**
  - `ModelingToolsEditorMode`
  - `GameplayStateTree`

---

## ðŸ“„ License

This project is open source and available under the [MIT License](LICENSE).

---

## ðŸ¤ Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

<p align="center">
  <sub>Built with ðŸ©¸ and Unreal Engine 5.6</sub>
</p>


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\JetpackJourney\Build\Windows\Engine\Binaries\ThirdParty\MaterialX\libraries\README.md ===
# MaterialX Data Libraries

This folder contains the standard data libraries for MaterialX, providing declarations and graph definitions for the MaterialX nodes, and source code for all supported shader generators.

## Standard Pattern Library
- [stdlib](stdlib)
    - [stdlib_defs.mtlx](stdlib/stdlib_defs.mtlx) : Nodedef declarations.
    - [stdlib_ng.mtlx](stdlib/stdlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](stdlib/genglsl): GLSL language support.
        - [lib](stdlib/genglsl/lib) : Shader utility files.
        - [stdlib_genglsl_impl.mtlx](stdlib/genglsl/stdlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](stdlib/genosl): OSL language support.
        - [lib](stdlib/genosl/lib) : Shader utility files.
        - [stdlib_genosl_impl.mtlx](stdlib/genosl/stdlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](stdlib/genmdl): MDL language support.
        - [stdlib_genmdl_impl.mtlx](stdlib/genmdl/stdlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
        - Additional MaterialX support libraries for MDL are located in the [source/MaterialXGenMdl/mdl/materialx](../source/MaterialXGenMdl/mdl/materialx) package folder
    - [genmsl](stdlib/genmsl): MSL language support.
        - [lib](stdlib/genmsl/lib) : Shader utility files.
        - [stdlib_genmsl_impl.mtlx](stdlib/genmsl/stdlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## Physically Based Shading Library
- [pbrlib](pbrlib)
    - [pbrlib_defs.mtlx](pbrlib/pbrlib_defs.mtlx) : Nodedef declarations.
    - [pbrlib_ng.mtlx](pbrlib/pbrlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](pbrlib/genglsl) : GLSL language support
        - [lib](pbrlib/genglsl/lib) : Shader utility files.
        - [pbrlib_genglsl_impl.mtlx](pbrlib/genglsl/pbrlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](pbrlib/genosl) : OSL language support
        - [lib](pbrlib/genosl/lib) : Shader utility files.
        - [pbrlib_genosl_impl.mtlx](pbrlib/genosl/pbrlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](pbrlib/genmdl) : MDL language support
        - [pbrlib_genmdl_impl.mtlx](pbrlib/genmdl/pbrlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmsl](pbrlib/genmsl) : MSL language support
        - [pbrlib_genmsl_impl.mtlx](pbrlib/genmsl/pbrlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## BxDF Graph Library
- [bxdf](bxdf)
    - [standard_surface.mtlx](bxdf/standard_surface.mtlx) : Graph definition of the [Autodesk Standard Surface](https://autodesk.github.io/standard-surface/) shading model.
    - [gltf_pbr.mtlx](bxdf/gltf_pbr.mtlx) : Graph definition of the [glTF PBR](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#appendix-b-brdf-implementation) shading model.
    - [usd_preview_surface.mtlx](bxdf/usd_preview_surface.mtlx) : Graph definition of the [UsdPreviewSurface](https://openusd.org/release/spec_usdpreviewsurface.html) shading model.
    - [lama](bxdf/lama) : Graph definitions of the [MaterialX Lama](https://rmanwiki.pixar.com/display/REN24/MaterialX+Lama) node set.

## Color Management Library
- MaterialX shader generation natively supports a small set of common spaces for input colors, with all color transforms implemented as language-independent MaterialX graphs.The canonical definitions of these color transforms may be found in the OpenColorIO configuration for [ACES 1.2](https://github.com/colour-science/OpenColorIO-Configs/tree/feature/aces-1.2-config/aces_1.2).
    - lin_rec709
    - g18_rec709
    - g22_rec709
    - rec709_display
    - acescg (lin_ap1)
    - g22_ap1
    - srgb_texture
    - lin_adobergb
    - adobergb
    - srgb_displayp3
    - lin_displayp3
- [cmlib](cmlib)
    - [cmlib_defs.mtlx](cmlib/cmlib_defs.mtlx) : Nodedef declarations.
    - [cmlib_ng.mtlx](cmlib/cmlib_ng.mtlx) : Nodegraph definitions.

## Target Definitions
- Each target implementation requires a target definition for declaration / implementation correspondence to work.
- The [targets](targets) folder contains definition files for the following core targets:
  - GLSL : `genglsl`
  - OSL : `genosl`
  - MDL : `genmdl`
  - MSL : `genmsl`
- Any additional target files should be added under this folder and loaded in as required.

### Target Support
- GLSL target support is for version 4.0 or higher.
- OSL target support is for version 1.9.10 or higher.
- MDL target support is for version 1.7.
- Basic GLSL and MSL `lightshader` node definitions and implementations are provided for the following light types:
    - point, directional, spot
- Shader generation does not currently support:
    - `ambientocclusion` node.
    - `arrayappend` node.
    - `curveadjust` node.
    - `displacementshader` and `volumeshader` nodes for hardware shading targets (GLSL, MSL).


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\JetpackJourney\Saved\StagedBuilds\Windows\Engine\Binaries\ThirdParty\MaterialX\libraries\README.md ===
# MaterialX Data Libraries

This folder contains the standard data libraries for MaterialX, providing declarations and graph definitions for the MaterialX nodes, and source code for all supported shader generators.

## Standard Pattern Library
- [stdlib](stdlib)
    - [stdlib_defs.mtlx](stdlib/stdlib_defs.mtlx) : Nodedef declarations.
    - [stdlib_ng.mtlx](stdlib/stdlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](stdlib/genglsl): GLSL language support.
        - [lib](stdlib/genglsl/lib) : Shader utility files.
        - [stdlib_genglsl_impl.mtlx](stdlib/genglsl/stdlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](stdlib/genosl): OSL language support.
        - [lib](stdlib/genosl/lib) : Shader utility files.
        - [stdlib_genosl_impl.mtlx](stdlib/genosl/stdlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](stdlib/genmdl): MDL language support.
        - [stdlib_genmdl_impl.mtlx](stdlib/genmdl/stdlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
        - Additional MaterialX support libraries for MDL are located in the [source/MaterialXGenMdl/mdl/materialx](../source/MaterialXGenMdl/mdl/materialx) package folder
    - [genmsl](stdlib/genmsl): MSL language support.
        - [lib](stdlib/genmsl/lib) : Shader utility files.
        - [stdlib_genmsl_impl.mtlx](stdlib/genmsl/stdlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## Physically Based Shading Library
- [pbrlib](pbrlib)
    - [pbrlib_defs.mtlx](pbrlib/pbrlib_defs.mtlx) : Nodedef declarations.
    - [pbrlib_ng.mtlx](pbrlib/pbrlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](pbrlib/genglsl) : GLSL language support
        - [lib](pbrlib/genglsl/lib) : Shader utility files.
        - [pbrlib_genglsl_impl.mtlx](pbrlib/genglsl/pbrlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](pbrlib/genosl) : OSL language support
        - [lib](pbrlib/genosl/lib) : Shader utility files.
        - [pbrlib_genosl_impl.mtlx](pbrlib/genosl/pbrlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](pbrlib/genmdl) : MDL language support
        - [pbrlib_genmdl_impl.mtlx](pbrlib/genmdl/pbrlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmsl](pbrlib/genmsl) : MSL language support
        - [pbrlib_genmsl_impl.mtlx](pbrlib/genmsl/pbrlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## BxDF Graph Library
- [bxdf](bxdf)
    - [standard_surface.mtlx](bxdf/standard_surface.mtlx) : Graph definition of the [Autodesk Standard Surface](https://autodesk.github.io/standard-surface/) shading model.
    - [gltf_pbr.mtlx](bxdf/gltf_pbr.mtlx) : Graph definition of the [glTF PBR](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#appendix-b-brdf-implementation) shading model.
    - [usd_preview_surface.mtlx](bxdf/usd_preview_surface.mtlx) : Graph definition of the [UsdPreviewSurface](https://openusd.org/release/spec_usdpreviewsurface.html) shading model.
    - [lama](bxdf/lama) : Graph definitions of the [MaterialX Lama](https://rmanwiki.pixar.com/display/REN24/MaterialX+Lama) node set.

## Color Management Library
- MaterialX shader generation natively supports a small set of common spaces for input colors, with all color transforms implemented as language-independent MaterialX graphs.The canonical definitions of these color transforms may be found in the OpenColorIO configuration for [ACES 1.2](https://github.com/colour-science/OpenColorIO-Configs/tree/feature/aces-1.2-config/aces_1.2).
    - lin_rec709
    - g18_rec709
    - g22_rec709
    - rec709_display
    - acescg (lin_ap1)
    - g22_ap1
    - srgb_texture
    - lin_adobergb
    - adobergb
    - srgb_displayp3
    - lin_displayp3
- [cmlib](cmlib)
    - [cmlib_defs.mtlx](cmlib/cmlib_defs.mtlx) : Nodedef declarations.
    - [cmlib_ng.mtlx](cmlib/cmlib_ng.mtlx) : Nodegraph definitions.

## Target Definitions
- Each target implementation requires a target definition for declaration / implementation correspondence to work.
- The [targets](targets) folder contains definition files for the following core targets:
  - GLSL : `genglsl`
  - OSL : `genosl`
  - MDL : `genmdl`
  - MSL : `genmsl`
- Any additional target files should be added under this folder and loaded in as required.

### Target Support
- GLSL target support is for version 4.0 or higher.
- OSL target support is for version 1.9.10 or higher.
- MDL target support is for version 1.7.
- Basic GLSL and MSL `lightshader` node definitions and implementations are provided for the following light types:
    - point, directional, spot
- Shader generation does not currently support:
    - `ambientocclusion` node.
    - `arrayappend` node.
    - `curveadjust` node.
    - `displacementshader` and `volumeshader` nodes for hardware shading targets (GLSL, MSL).


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\JetpackJourney\README.md ===
<p align="center">
  <img src="Screenshots/Thumbnail.png" alt="Jetpack Journey Thumbnail">
</p>

# Jetpack Journey

<p align="center">
  <em>A 3D Platformer built in Unreal Engine 5 featuring dynamic jetpack movement, fuel-based flight mechanics, and a fully drivable Chaos Vehicle with on-foot â†” vehicle transitions.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Unreal%20Engine-5.6-blue?style=for-the-badge&logo=unrealengine&logoColor=white" alt="UE5.6"/>
  <img src="https://img.shields.io/badge/Plugin-Chaos%20Vehicles-purple?style=for-the-badge" alt="Chaos Vehicles"/>
  <img src="https://img.shields.io/badge/Input-Enhanced%20Input-green?style=for-the-badge" alt="Enhanced Input"/>
  <img src="https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"/>
</p>

---

## ðŸ“– Description

**Jetpack Journey** is a 3D platformer where the player navigates through complex levels using a mix of traditional walking and a dynamic jetpack thruster system. The game focuses on precise platforming, strategic fuel management, and interacting with dynamic level elements like pressure plates and moving platforms.

The project also features a fully functional **4-wheel AWD automatic vehicle** built from scratch using the **Chaos Vehicles Plugin**. Players can discover the vehicle in the world, board it, drive around, and exit back to on-foot gameplay â€” with seamless possession switching, camera blending, and input context management handled entirely through Blueprints.

Built using Unreal Engine 5.6, the project leverages advanced animation systems, blueprint logic, and optimized level design techniques.

---

## ðŸŽ® Inputs & Controls

### On-Foot Controls

| Action | Key / Input | Description |
| :--- | :--- | :--- |
| **Move Forward** | `W` | Moves the character forward. |
| **Move Backward** | `S` | Moves the character backward. |
| **Move Left** | `A` | Moves the character left. |
| **Move Right** | `D` | Moves the character right. |
| **Look / Camera** | `Mouse` | Controls the camera pitch and yaw. |
| **Thruster / Fly** | `Shift` (Hold) | Activates the jetpack, consuming fuel and propelling the character upwards. |
| **Interact** | `E` | Interact with objects in the world (e.g., board a vehicle). |
| **Pause Game** | `Esc` | Opens the in-game pause menu. |

### Vehicle Controls

Both **keyboard + mouse** and **gamepad/controller** inputs are fully supported while driving.

| Action | Keyboard | Controller | Description |
| :--- | :--- | :--- | :--- |
| **Throttle** | `W` | `Right Trigger (RT)` | Accelerate forward. |
| **Brake / Reverse** | `S` | `Left Trigger (LT)` | Brake (or reverse when stopped). |
| **Steer** | `A` / `D` | `Left Stick X-Axis` | Turn wheels left / right. |
| **Handbrake** | `Space` | `Left Face Special Button` | Engage handbrake / drift. |
| **Free Look** | `Mouse` | `Right Stick (2D Axis)` | Look around the vehicle freely. |
| **Exit Vehicle** | `E` | â€” | Deboard and return to on-foot controls. |

---

## ðŸ•¹ï¸ Gameplay Logic & Mechanics

### Character Movement
The core of the game relies on a versatile **Character Movement Component**, seamlessly blending two distinct states:
*   **Walking Mode:** Standard ground traversal. When grounded, the character's rotation automatically aligns with the direction of movement (Velocity), while the camera remains independently controlled by the mouse for a better view of the surroundings.
*   **Flying Mode:** Engaged via the jetpack thruster. While in the air, the character's rotation locks to follow the camera's rotation (Control Rotation). This allows the player to aim their trajectory precisely using the mouse while navigating mid-air platforming challenges.

### Fuel System
Flight is strictly governed by a resource management system:
*   **Consumption:** Holding the thruster input drains fuel over time.
*   **Collection:** Players must actively seek out and collect fuel pickups scattered throughout the level to maintain their ability to fly and clear larger gaps.

### Dynamic Platforming
The levels are built with interactive obstacles to test the player's movement skills:
*   **Floating Platforms:** Static platforms suspended in the air.
*   **Ping-Pong Platforms:** Moving platforms that continuously travel back and forth between defined waypoints.
*   **Pressure Plates:** Interactive triggers placed in the environment. Stepping on a pressure plate will send a signal to activate specific dormant platforms, adding a puzzle element to traversal.

### Level Progression
*   **End Goal:** The primary objective of each level is to successfully navigate the environment, manage fuel, and reach the final platform to complete the stage.

---

## ðŸš— Chaos Vehicle System

The project includes a fully configured **4-wheel All-Wheel-Drive (AWD) automatic transmission vehicle** built from the ground up using the **Chaos Vehicles Plugin** â€” UE5's physics-based vehicle simulation system powered by the Chaos physics engine.

### Vehicle Features

| Feature | Details |
| :--- | :--- |
| **Drivetrain** | All-Wheel Drive (AWD) with automatic transmission |
| **Wheels** | Separate front and rear wheel blueprints with independent configurations |
| **Physics** | Full Chaos Vehicle physics with custom torque curve and physics asset |
| **Skeletal Mesh** | Hand-rigged from static mesh with manually placed wheel bones and skin weights |
| **Animation** | Animation Blueprint for wheel spin, steering rotation, and suspension movement |
| **Rendering** | Lumen GI, ray tracing, virtual shadow maps, SM6 shaders (DX12) |

### ðŸš¶ Boarding & Deboarding

Players can discover the vehicle in the world and interact with it to transition between on-foot and driving gameplay:

*   **Interaction Detection** â€” An interaction prompt appears when the player character is within range of the vehicle, using the Enhanced Input `IA_Interact` action.
*   **Boarding** â€” Pressing the interact key boards the vehicle, transferring control from the character pawn to the vehicle pawn.
*   **Deboarding** â€” Pressing interact again while driving exits the vehicle, placing the character at a dedicated exit location and restoring full on-foot controls.

### ðŸŽ® Possession & Input Switching

Seamless control handoff is managed through UE5's possession system and Enhanced Input mapping contexts:

*   **Possess / Unpossess** â€” On boarding, the Player Controller unpossesses the character and possesses the vehicle pawn. On exit, possession is returned to the character.
*   **Input Mapping Context Swap** â€” The character's `IMC_KixMovement` context is removed and replaced with `IMC_Vehicle` on boarding, and vice versa on deboarding, ensuring controls never conflict.
*   **Control Restoration** â€” After exiting, all character movement and camera controls are fully restored to their pre-boarding state.

### ðŸ“· Camera Management

Camera transitions between character and vehicle are handled with smooth blending:

*   **Character Camera** â€” Third-person spring arm camera attached to the character pawn.
*   **Vehicle Camera** â€” Independent spring arm camera on the vehicle pawn with free-look support.
*   **Smooth Blending** â€” Camera blending is used during possession transitions so the view smoothly interpolates between the character and vehicle perspectives, avoiding jarring cuts.

### ðŸ‘¤ Visibility & Collision Management

To prevent visual and physical conflicts while the player is inside the vehicle:

*   **Character Hiding** â€” The character mesh is hidden when boarding and shown again when deboarding.
*   **Collision Disabling** â€” The character's collision is disabled while inside the vehicle to prevent unwanted physics interactions between the character and vehicle.
*   **Safe Exit Positioning** â€” On deboarding, the character is placed at a predefined exit point on the vehicle to avoid spawning inside geometry.

---

## ðŸ–¥ï¸ UI & Menus

The game features a complete, self-contained UI flow to handle game states:
1.  **Start Menu:** The initial screen providing entry into the game level.
2.  **Pause Menu:** Accessible during gameplay to pause the action, allowing the player to resume or quit.
3.  **End Menu:** A victory screen that triggers when the player successfully steps on the final goal platform.
4.  **Interact Widget:** A context-sensitive prompt that appears when the player is near an interactable object (e.g., the vehicle).

---

## ðŸ› ï¸ Technical Implementation Details

The project utilizes several key Unreal Engine 5 features to achieve its functionality:

### Blueprint Logic & Interfaces
*   **Core Systems:** Character movement, fuel management, vehicle boarding, and UI logic are entirely scripted using Unreal Blueprints.
*   **Blueprint Interfaces (BPI):** Used extensively for decoupled communication between actors. For example, pressure plates use an interface to communicate with moving platforms, and the interact system uses `BPI_PlayerInteract` and `BPI_Interactables` for character â†” vehicle communication without hard-coded references.

### Chaos Vehicle Setup
*   **`BP_Vehicle`** â€” The main vehicle pawn containing the skeletal mesh component, spring arm camera, and the Chaos Vehicle Movement Component.
*   **`BP_FrontWheel` / `BP_RearWheel`** â€” Derived from `ChaosVehicleWheel`, defining per-axle properties: wheel radius & width, suspension stiffness & damping, friction force multiplier, and steering angle (front wheels only).
*   **`PHYS_Vehicle`** â€” Physics Asset defining collision bodies for the chassis and each wheel bone.
*   **`CF_Torque`** â€” Float Curve asset defining the engine's torque output across the RPM range.
*   **`ABP_Vehicle`** â€” Animation Blueprint driving wheel rotation, steering, and suspension offsets at runtime.

### Skeletal Mesh Pipeline (Done In-Editor)
The vehicle's skeletal mesh was created entirely within the Unreal Editor â€” no external DCC tools were needed:
1.  Started with the static mesh `SM_Vehicle`
2.  Created a Skeleton (`SKEL_Vehicle`) with a root bone and four wheel bones positioned at each wheel location
3.  Generated the Skeletal Mesh (`SKM_Vehicle`) from the static mesh
4.  Manually painted skin weights to bind the wheel geometry to their respective bones

### Animation Systems
*   **Animation Blueprints:** Drives the character's skeletal mesh animations.
*   **Blendspaces:** Smoothly interpolates between idle, walking, and running animations based on the character's speed and direction.
*   **State Machines:** Manages the logical transitions between distinct animation states (e.g., Grounded -> Airborne -> Thruster Active).

### Level Design & Optimization
*   **Packed Level Actors (PLAs) / Instances:** Used to create reusable, optimized environmental prefabs. This ensures that repeating elements (like specific platform groupings or structures) are highly performant and easy to iterate upon across different levels.

### Audio
*   **Sound Design:** Integrated sound effects for thruster activation, item collection (fuel), UI interaction, and ambient environment sounds to enhance game feel.

---

## ðŸ”Œ Plugins Used

| Plugin | Purpose |
| :--- | :--- |
| **ChaosVehiclesPlugin** | Core vehicle physics simulation (Chaos-based wheeled vehicle system) |
| **ModelingToolsEditorMode** | Used during development for mesh editing and geometry operations |
| **RawInput** | Raw input device support |

---

## ðŸ“¸ Screenshots

<p align="center">
  <img src="Screenshots/Splash%20Screen.png" width="800" alt="Splash Screen">
</p>

**Gameplay Gallery:**

<p align="center">
  <img src="Screenshots/SS%201.png" width="400" alt="Screenshot 1">
  <img src="Screenshots/SS%202.png" width="400" alt="Screenshot 2">
</p>
<p align="center">
  <img src="Screenshots/SS%203.png" width="400" alt="Screenshot 3">
  <img src="Screenshots/SS%204.png" width="400" alt="Screenshot 4">
</p>
<p align="center">
  <img src="Screenshots/SS%205.png" width="400" alt="Screenshot 5">
  <img src="Screenshots/SS%206.png" width="400" alt="Screenshot 6">
</p>



---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\MarbleRun\README.md ===
# Marble Run

**Marble Run** is an engaging and physics-driven 3D maze navigation game built in Unreal Engine. In this game, players take control of a marble and must carefully navigate through intricate levels filled with challenging obstacles, narrow pathways, and dynamic environmental hazards. 

The core gameplay revolves around mastering momentum, precision, and timing to guide the marble safely from the starting point to the finish line. Whether it's balancing on precarious ledges, avoiding tricky traps, or utilizing slopes for bursts of speed, *Marble Run* offers a satisfying blend of reflex-based challenges and physics-based movement.

## Project Overview

- **Engine Version:** Unreal Engine 5.6
- **Project Type:** Blueprint Project
- **Target Platform:** Desktop
- **Maps:** MainMenu, Level1
- **Startup Map:** MainMenu

## Rendering & Graphics Settings

- **Graphics API:** DirectX 12
- **Global Illumination:** Lumen (`r.DynamicGlobalIlluminationMethod=1`)
- **Reflections:** Lumen (`r.ReflectionMethod=1`)
- **Shadows:** Virtual Shadow Maps (`r.Shadow.Virtual.Enable=1`)
- **Ray Tracing:** Enabled
- **Auto Exposure:** Extended Default Luminance Range

## Active Plugins

- ModelingToolsEditorMode
- HDRIBackdrop

## In-Game Screenshots

![In-Game Screenshot](./Screenshots/1.png)
![In-Game Screenshot](./Screenshots/2.png)
![In-Game Screenshot](./Screenshots/3.png)


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\MarsMarine\README.md ===
# MarsMarine

Top-down infinite shooter game built in Unreal Engine 5.

## ðŸ“ Game Description
MarsMarine is an action-packed, top-down infinite shooter where you must survive against endless waves of enemies on the Martian surface. Stay alive for as long as possible while navigating the environment and managing your resources.

## ðŸ“¸ Screenshots

<img src="ScreenShots/screenshot_1.png" width="800">
<img src="ScreenShots/screenshot_2.png" width="800">
<img src="ScreenShots/screenshot_3.png" width="800">
<img src="ScreenShots/screenshot_4.png" width="800">
<img src="ScreenShots/screenshot_5.png" width="800">
<img src="ScreenShots/screenshot_6.png" width="800">
<img src="ScreenShots/screenshot_7.png" width="800">
<img src="ScreenShots/screenshot_8.png" width="800">

## ðŸŽ® Controls
- **W, A, S, D** / **Arrow Keys**: Movement
- **Mouse Cursor**: Aiming
- **Left Mouse Button (LMB)**: Fire Weapon
- **R**: Reload (if applicable)
- **Escape / P**: Pause Game

*(Note: Adjust these controls based on your specific final input mappings in Unreal Engine)*

## ðŸ› ï¸ How It Was Made (Development Details)
MarsMarine is a pure **Blueprint** project developed in **Unreal Engine 5**, demonstrating the power and flexibility of UE5's visual scripting system. No C++ was used in the core logic, making it highly accessible for designers and rapid prototyping.

### Key Systems & Technologies Used:
- **Core Engine Features**:
  - Built entirely using **Unreal Engine 5's Blueprint Visual Scripting**, handling everything from player movement to complex enemy behavior.
  - Utilizes the **Enhanced Input System** (standard in modern UE5) for responsive and configurable player controls.
- **Player Mechanics**:
  - The player pawn is a custom `Character` blueprint, leveraging the built-in Character Movement Component for smooth top-down locomotion.
  - Custom mathematical logic converts screen-space mouse coordinates to world-space, allowing the character to dynamically rotate and face the cursor.
- **Enemy AI & Navigation**:
  - A **NavMeshBoundsVolume** is used to generate the navigation mesh across the playable Martian surface.
  - Enemies utilize **AI Controller** blueprints combined with standard UE5 navigation nodes (like `MoveToActor`) to pathfind and aggressively track the player.
- **Spawning System**:
  - Custom spawner blueprints manage the game's endless gameplay loop, dynamically instantiating enemy actor classes.
  - The system manages spawn locations to ensure a steady flow of enemies without spawning them directly on top of the player.
- **Assets & Rendering**:
  - Leverages UE5's advanced rendering pipeline to deliver high-quality lighting and visuals suitable for the desolate Martian environment.

## âš™ï¸ How It Works (Gameplay Loop)
- **Game Loop**: The game features an infinite spawning system. As time progresses, the difficulty increases with faster or more numerous enemy spawns.
- **Scoring/Progression**: Surviving longer or defeating enemies increases the player's score or survival time. 

---
*Developed with Unreal Engine 5.*


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\MyFirstUE5Game\README.md ===
# MyFirstUE5Game

My first game project built in Unreal Engine 5.

## ðŸ“ Game Description
MyFirstUE5Game is an introductory project developed in Unreal Engine 5 to explore the engine's core features, mechanics, and capabilities. It serves as a foundational step into game development, experimenting with player movement, environment design, and basic gameplay loops.

## ðŸ“¸ Screenshots

<img src="Screenshots/Screenshot 2026-06-25 202338.png" width="800">
<img src="Screenshots/Screenshot 2026-06-25 202345.png" width="800">
<img src="Screenshots/Screenshot 2026-06-25 202353.png" width="800">
<img src="Screenshots/Screenshot 2026-06-25 202359.png" width="800">
<img src="Screenshots/Screenshot 2026-06-25 202412.png" width="800">
<img src="Screenshots/Screenshot 2026-06-25 202440.png" width="800">

## ðŸŽ® Controls
- **W, A, S, D** / **Arrow Keys**: Movement
- **Mouse**: Camera control
- **Spacebar**: Jump
- **Left Mouse Button (LMB)**: Primary Action / Interact
- **Escape / P**: Pause Game

*(Note: Adjust these controls based on your specific final input mappings in Unreal Engine)*

## ðŸ› ï¸ How It Was Made (Development Details)
MyFirstUE5Game is developed using **Unreal Engine 5**, heavily utilizing the engine's built-in **Blueprint Visual Scripting** system to manage logic, interactions, and gameplay flow.

### Key Systems & Technologies Used:
- **Core Engine Features**:
  - Built entirely using **Unreal Engine 5's Blueprint Visual Scripting**, handling everything from basic player mechanics to environmental interaction.
  - Utilizes the **Enhanced Input System** for modern, configurable player controls.
- **Player Mechanics**:
  - Custom `Character` blueprint, leveraging the built-in Character Movement Component for smooth locomotion and jumping.
- **Lighting & Rendering**:
  - Leverages UE5's advanced rendering pipeline, including Lumen for global illumination and reflections, delivering high-quality visual fidelity.
- **Environment & World Building**:
  - Makes use of UE5's landscape tools to create a cohesive level design and playable space.

## âš™ï¸ How It Works (Gameplay Loop)
- **Exploration and Interaction**: The core gameplay involves navigating the environment, testing mechanics, and interacting with basic game elements as part of the learning process.

---
*Developed with Unreal Engine 5.*


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\RedHood\Build\Windows\Engine\Binaries\ThirdParty\MaterialX\libraries\README.md ===
# MaterialX Data Libraries

This folder contains the standard data libraries for MaterialX, providing declarations and graph definitions for the MaterialX nodes, and source code for all supported shader generators.

## Standard Pattern Library
- [stdlib](stdlib)
    - [stdlib_defs.mtlx](stdlib/stdlib_defs.mtlx) : Nodedef declarations.
    - [stdlib_ng.mtlx](stdlib/stdlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](stdlib/genglsl): GLSL language support.
        - [lib](stdlib/genglsl/lib) : Shader utility files.
        - [stdlib_genglsl_impl.mtlx](stdlib/genglsl/stdlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](stdlib/genosl): OSL language support.
        - [lib](stdlib/genosl/lib) : Shader utility files.
        - [stdlib_genosl_impl.mtlx](stdlib/genosl/stdlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](stdlib/genmdl): MDL language support.
        - [stdlib_genmdl_impl.mtlx](stdlib/genmdl/stdlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
        - Additional MaterialX support libraries for MDL are located in the [source/MaterialXGenMdl/mdl/materialx](../source/MaterialXGenMdl/mdl/materialx) package folder
    - [genmsl](stdlib/genmsl): MSL language support.
        - [lib](stdlib/genmsl/lib) : Shader utility files.
        - [stdlib_genmsl_impl.mtlx](stdlib/genmsl/stdlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## Physically Based Shading Library
- [pbrlib](pbrlib)
    - [pbrlib_defs.mtlx](pbrlib/pbrlib_defs.mtlx) : Nodedef declarations.
    - [pbrlib_ng.mtlx](pbrlib/pbrlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](pbrlib/genglsl) : GLSL language support
        - [lib](pbrlib/genglsl/lib) : Shader utility files.
        - [pbrlib_genglsl_impl.mtlx](pbrlib/genglsl/pbrlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](pbrlib/genosl) : OSL language support
        - [lib](pbrlib/genosl/lib) : Shader utility files.
        - [pbrlib_genosl_impl.mtlx](pbrlib/genosl/pbrlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](pbrlib/genmdl) : MDL language support
        - [pbrlib_genmdl_impl.mtlx](pbrlib/genmdl/pbrlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmsl](pbrlib/genmsl) : MSL language support
        - [pbrlib_genmsl_impl.mtlx](pbrlib/genmsl/pbrlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## BxDF Graph Library
- [bxdf](bxdf)
    - [standard_surface.mtlx](bxdf/standard_surface.mtlx) : Graph definition of the [Autodesk Standard Surface](https://autodesk.github.io/standard-surface/) shading model.
    - [gltf_pbr.mtlx](bxdf/gltf_pbr.mtlx) : Graph definition of the [glTF PBR](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#appendix-b-brdf-implementation) shading model.
    - [usd_preview_surface.mtlx](bxdf/usd_preview_surface.mtlx) : Graph definition of the [UsdPreviewSurface](https://openusd.org/release/spec_usdpreviewsurface.html) shading model.
    - [lama](bxdf/lama) : Graph definitions of the [MaterialX Lama](https://rmanwiki.pixar.com/display/REN24/MaterialX+Lama) node set.

## Color Management Library
- MaterialX shader generation natively supports a small set of common spaces for input colors, with all color transforms implemented as language-independent MaterialX graphs.The canonical definitions of these color transforms may be found in the OpenColorIO configuration for [ACES 1.2](https://github.com/colour-science/OpenColorIO-Configs/tree/feature/aces-1.2-config/aces_1.2).
    - lin_rec709
    - g18_rec709
    - g22_rec709
    - rec709_display
    - acescg (lin_ap1)
    - g22_ap1
    - srgb_texture
    - lin_adobergb
    - adobergb
    - srgb_displayp3
    - lin_displayp3
- [cmlib](cmlib)
    - [cmlib_defs.mtlx](cmlib/cmlib_defs.mtlx) : Nodedef declarations.
    - [cmlib_ng.mtlx](cmlib/cmlib_ng.mtlx) : Nodegraph definitions.

## Target Definitions
- Each target implementation requires a target definition for declaration / implementation correspondence to work.
- The [targets](targets) folder contains definition files for the following core targets:
  - GLSL : `genglsl`
  - OSL : `genosl`
  - MDL : `genmdl`
  - MSL : `genmsl`
- Any additional target files should be added under this folder and loaded in as required.

### Target Support
- GLSL target support is for version 4.0 or higher.
- OSL target support is for version 1.9.10 or higher.
- MDL target support is for version 1.7.
- Basic GLSL and MSL `lightshader` node definitions and implementations are provided for the following light types:
    - point, directional, spot
- Shader generation does not currently support:
    - `ambientocclusion` node.
    - `arrayappend` node.
    - `curveadjust` node.
    - `displacementshader` and `volumeshader` nodes for hardware shading targets (GLSL, MSL).


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\RedHood\Saved\StagedBuilds\Windows\Engine\Binaries\ThirdParty\MaterialX\libraries\README.md ===
# MaterialX Data Libraries

This folder contains the standard data libraries for MaterialX, providing declarations and graph definitions for the MaterialX nodes, and source code for all supported shader generators.

## Standard Pattern Library
- [stdlib](stdlib)
    - [stdlib_defs.mtlx](stdlib/stdlib_defs.mtlx) : Nodedef declarations.
    - [stdlib_ng.mtlx](stdlib/stdlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](stdlib/genglsl): GLSL language support.
        - [lib](stdlib/genglsl/lib) : Shader utility files.
        - [stdlib_genglsl_impl.mtlx](stdlib/genglsl/stdlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](stdlib/genosl): OSL language support.
        - [lib](stdlib/genosl/lib) : Shader utility files.
        - [stdlib_genosl_impl.mtlx](stdlib/genosl/stdlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](stdlib/genmdl): MDL language support.
        - [stdlib_genmdl_impl.mtlx](stdlib/genmdl/stdlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
        - Additional MaterialX support libraries for MDL are located in the [source/MaterialXGenMdl/mdl/materialx](../source/MaterialXGenMdl/mdl/materialx) package folder
    - [genmsl](stdlib/genmsl): MSL language support.
        - [lib](stdlib/genmsl/lib) : Shader utility files.
        - [stdlib_genmsl_impl.mtlx](stdlib/genmsl/stdlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## Physically Based Shading Library
- [pbrlib](pbrlib)
    - [pbrlib_defs.mtlx](pbrlib/pbrlib_defs.mtlx) : Nodedef declarations.
    - [pbrlib_ng.mtlx](pbrlib/pbrlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](pbrlib/genglsl) : GLSL language support
        - [lib](pbrlib/genglsl/lib) : Shader utility files.
        - [pbrlib_genglsl_impl.mtlx](pbrlib/genglsl/pbrlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](pbrlib/genosl) : OSL language support
        - [lib](pbrlib/genosl/lib) : Shader utility files.
        - [pbrlib_genosl_impl.mtlx](pbrlib/genosl/pbrlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](pbrlib/genmdl) : MDL language support
        - [pbrlib_genmdl_impl.mtlx](pbrlib/genmdl/pbrlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmsl](pbrlib/genmsl) : MSL language support
        - [pbrlib_genmsl_impl.mtlx](pbrlib/genmsl/pbrlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## BxDF Graph Library
- [bxdf](bxdf)
    - [standard_surface.mtlx](bxdf/standard_surface.mtlx) : Graph definition of the [Autodesk Standard Surface](https://autodesk.github.io/standard-surface/) shading model.
    - [gltf_pbr.mtlx](bxdf/gltf_pbr.mtlx) : Graph definition of the [glTF PBR](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#appendix-b-brdf-implementation) shading model.
    - [usd_preview_surface.mtlx](bxdf/usd_preview_surface.mtlx) : Graph definition of the [UsdPreviewSurface](https://openusd.org/release/spec_usdpreviewsurface.html) shading model.
    - [lama](bxdf/lama) : Graph definitions of the [MaterialX Lama](https://rmanwiki.pixar.com/display/REN24/MaterialX+Lama) node set.

## Color Management Library
- MaterialX shader generation natively supports a small set of common spaces for input colors, with all color transforms implemented as language-independent MaterialX graphs.The canonical definitions of these color transforms may be found in the OpenColorIO configuration for [ACES 1.2](https://github.com/colour-science/OpenColorIO-Configs/tree/feature/aces-1.2-config/aces_1.2).
    - lin_rec709
    - g18_rec709
    - g22_rec709
    - rec709_display
    - acescg (lin_ap1)
    - g22_ap1
    - srgb_texture
    - lin_adobergb
    - adobergb
    - srgb_displayp3
    - lin_displayp3
- [cmlib](cmlib)
    - [cmlib_defs.mtlx](cmlib/cmlib_defs.mtlx) : Nodedef declarations.
    - [cmlib_ng.mtlx](cmlib/cmlib_ng.mtlx) : Nodegraph definitions.

## Target Definitions
- Each target implementation requires a target definition for declaration / implementation correspondence to work.
- The [targets](targets) folder contains definition files for the following core targets:
  - GLSL : `genglsl`
  - OSL : `genosl`
  - MDL : `genmdl`
  - MSL : `genmsl`
- Any additional target files should be added under this folder and loaded in as required.

### Target Support
- GLSL target support is for version 4.0 or higher.
- OSL target support is for version 1.9.10 or higher.
- MDL target support is for version 1.7.
- Basic GLSL and MSL `lightshader` node definitions and implementations are provided for the following light types:
    - point, directional, spot
- Shader generation does not currently support:
    - `ambientocclusion` node.
    - `arrayappend` node.
    - `curveadjust` node.
    - `displacementshader` and `volumeshader` nodes for hardware shading targets (GLSL, MSL).


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\RedHood\README.md ===
<div align="center">

# ðŸ—¡ï¸ Red Hood

<img src="Images/Game%20Logo.png" alt="Red Hood Logo" width="180" style="border-radius: 12px;"/>

### *A 2D Pixel Art Platformer Dungeon Crawler*

[![Unreal Engine](https://img.shields.io/badge/Unreal%20Engine-5.6-black?style=for-the-badge&logo=unrealengine&logoColor=white)](https://www.unrealengine.com/)
[![Genre](https://img.shields.io/badge/Genre-2D%20Platformer%20%2F%20Dungeon%20Crawler-crimson?style=for-the-badge)](https://github.com/)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)](https://github.com/)

---

<img src="Images/Splash%20Screen.png" alt="Red Hood Splash Screen" width="100%" style="border-radius: 8px;"/>

</div>

## ðŸ“– About the Game

**Red Hood** is a 2D action platformer and dungeon crawler developed in **Unreal Engine 5**. Step into perilous underground dungeons filled with traps, treasures, and undead foes. Guide your hooded adventurer through the darkness, torch in hand, as you fight skeleton warriors and discover hidden vaults.

---

## âœ¨ Core Features

### âš”ï¸ Combo Attack System
- **3-hit combo chain** â€” each successive strike deals escalating damage, rewarding aggressive play and precise timing.

### â¤ï¸ Health & Combat System
- Full **health bar** for the player with real-time UI feedback.
- **Enemies with variable health and damage** â€” different foes have unique HP pools and attack strengths, keeping encounters challenging and varied.

### ðŸ§Ÿ Enemy AI (Behavior Trees & Blackboards)
- Built using Unreal's **AI Controller**, **Behavior Tree**, and **Blackboard** system for structured, state-driven enemy logic.
- **Patrol** â€” enemies autonomously patrol predefined waypoints using **NavMesh** navigation.
- **Chase** â€” when the player enters a detection range, enemies switch to a chase state and pursue the player.
- **Attack** â€” once close enough, enemies transition to an attack state and deal damage to the player.
- **NavMesh Movement** â€” all enemy pathfinding is driven by Unreal's **Navigation Mesh**, ensuring smooth and obstacle-aware movement.
- Multiple enemy types (e.g., skeleton warriors) with **configurable health and damage values**.

### ðŸ—ºï¸ Tileset-Based Map Design
- Dungeon levels are built using **tileset maps** in Paper2D, enabling modular and expandable level design.
- Handcrafted corridors, traps, and secret chambers assembled from reusable tile assets.

### ðŸŽ­ Paper2D Characters & Animation
- All characters are **Paper2D sprites** rendered as flat 2D actors in the world.
- Fluid **2D flipbook animations** for idle, run, attack, hurt, and death states.

### ðŸ“ Single-Plane 2D Gameplay
- The entire game plays on a **single 2D plane** â€” a true side-scrolling experience built inside the Unreal Engine 3D viewport.

### ðŸ’Ž Pickups & Sound Effects
- Collectible **pickups** (gold, treasure chests, keys) with satisfying **sound effects** on collection.
- Atmospheric **audio** for attacks, hits, footsteps, and ambient dungeon sounds.

### ðŸ“‹ Menu System
- Fully functional **main menu and pause menu** with navigation, play/resume, and quit options.

### ðŸ° Dungeon Exploration
- Navigate perilous brick corridors, discover hidden vaults, and unlock barred doors with collected keys.

### ðŸŽ¨ Pixel Art Aesthetic
- Handcrafted **pixel art sprites and tilesets** delivering a classic dungeon-crawler look and feel.


## ðŸŽ® Controls (Default / Planned)

| Action | Primary Key | Alternate |
| :--- | :--- | :--- |
| **Move Left / Right** | <kbd>A</kbd> / <kbd>D</kbd> | <kbd>â†</kbd> / <kbd>â†’</kbd> |
| **Jump** | <kbd>Space</kbd> | <kbd>W</kbd> / <kbd>â†‘</kbd> |
| **Attack / Action** | <kbd>F</kbd> / <kbd>Left Click</kbd> | <kbd>E</kbd> |
| **Interact / Open Chest** | <kbd>E</kbd> | <kbd>Enter</kbd> |
| **Pause Menu** | <kbd>Esc</kbd> | <kbd>P</kbd> |

---

## ðŸ› ï¸ Built With

- **Engine:** [Unreal Engine 5](https://www.unrealengine.com/)
- **2D Framework:** Unreal Engine Paper2D / Flipbooks
- **Logic:** Blueprints Visual Scripting

---

## ðŸš€ Getting Started

### Prerequisites
- **Unreal Engine 5.6** (or compatible UE5 version) installed via the Epic Games Launcher.

### How to Run
1. Clone or download this repository.
2. Open the project root directory.
3. Double-click **`RedHood.uproject`** to launch the project in Unreal Editor.
4. Open the main level from `Content/Maps/`.
5. Click the **Play (PIE)** button in the Unreal toolbar to test the game.

---

## ðŸ“‚ Project Structure

```text
RedHood/
â”œâ”€â”€ Content/
â”‚   â”œâ”€â”€ Flipbooks/     # Character & enemy sprite animations
â”‚   â”œâ”€â”€ Maps/          # Level designs and dungeon maps
â”‚   â”œâ”€â”€ Sounds/        # SFX & background audio
â”‚   â”œâ”€â”€ Splash/        # UI & splash screen assets
â”‚   â””â”€â”€ Sprites/       # Raw pixel art sprites & tilesets
â”œâ”€â”€ Images/            # Logo & Splash Screen preview images
â”œâ”€â”€ Config/            # Engine & project configuration files
â”œâ”€â”€ RedHood.uproject   # Unreal Engine project file
â””â”€â”€ README.md          # Project documentation
```

---

## ðŸ“¸ Screenshots

<div align="center">
<table>
<tr>
<td><img src="Screenshots/SS0.png" alt="Screenshot 0" width="100%" style="border-radius: 8px;"/></td>
<td><img src="Screenshots/SS1.png" alt="Screenshot 1" width="100%" style="border-radius: 8px;"/></td>
</tr>
<tr>
<td><img src="Screenshots/SS2.png" alt="Screenshot 2" width="100%" style="border-radius: 8px;"/></td>
<td><img src="Screenshots/SS3.png" alt="Screenshot 3" width="100%" style="border-radius: 8px;"/></td>
</tr>
<tr>
<td><img src="Screenshots/SS4.png" alt="Screenshot 4" width="100%" style="border-radius: 8px;"/></td>
<td><img src="Screenshots/SS5.png" alt="Screenshot 5" width="100%" style="border-radius: 8px;"/></td>
</tr>
<tr>
<td><img src="Screenshots/SS7.png" alt="Screenshot 7" width="100%" style="border-radius: 8px;"/></td>
<td><img src="Screenshots/SS8.png" alt="Screenshot 8" width="100%" style="border-radius: 8px;"/></td>
</tr>
</table>
</div>

---

<div align="center">
<sub>Built with â¤ï¸ using Unreal Engine 5</sub>
</div>


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\ShooterGameUI\Build\Windows\Engine\Binaries\ThirdParty\MaterialX\libraries\README.md ===
# MaterialX Data Libraries

This folder contains the standard data libraries for MaterialX, providing declarations and graph definitions for the MaterialX nodes, and source code for all supported shader generators.

## Standard Pattern Library
- [stdlib](stdlib)
    - [stdlib_defs.mtlx](stdlib/stdlib_defs.mtlx) : Nodedef declarations.
    - [stdlib_ng.mtlx](stdlib/stdlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](stdlib/genglsl): GLSL language support.
        - [lib](stdlib/genglsl/lib) : Shader utility files.
        - [stdlib_genglsl_impl.mtlx](stdlib/genglsl/stdlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](stdlib/genosl): OSL language support.
        - [lib](stdlib/genosl/lib) : Shader utility files.
        - [stdlib_genosl_impl.mtlx](stdlib/genosl/stdlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](stdlib/genmdl): MDL language support.
        - [stdlib_genmdl_impl.mtlx](stdlib/genmdl/stdlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
        - Additional MaterialX support libraries for MDL are located in the [source/MaterialXGenMdl/mdl/materialx](../source/MaterialXGenMdl/mdl/materialx) package folder
    - [genmsl](stdlib/genmsl): MSL language support.
        - [lib](stdlib/genmsl/lib) : Shader utility files.
        - [stdlib_genmsl_impl.mtlx](stdlib/genmsl/stdlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## Physically Based Shading Library
- [pbrlib](pbrlib)
    - [pbrlib_defs.mtlx](pbrlib/pbrlib_defs.mtlx) : Nodedef declarations.
    - [pbrlib_ng.mtlx](pbrlib/pbrlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](pbrlib/genglsl) : GLSL language support
        - [lib](pbrlib/genglsl/lib) : Shader utility files.
        - [pbrlib_genglsl_impl.mtlx](pbrlib/genglsl/pbrlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](pbrlib/genosl) : OSL language support
        - [lib](pbrlib/genosl/lib) : Shader utility files.
        - [pbrlib_genosl_impl.mtlx](pbrlib/genosl/pbrlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](pbrlib/genmdl) : MDL language support
        - [pbrlib_genmdl_impl.mtlx](pbrlib/genmdl/pbrlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmsl](pbrlib/genmsl) : MSL language support
        - [pbrlib_genmsl_impl.mtlx](pbrlib/genmsl/pbrlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## BxDF Graph Library
- [bxdf](bxdf)
    - [standard_surface.mtlx](bxdf/standard_surface.mtlx) : Graph definition of the [Autodesk Standard Surface](https://autodesk.github.io/standard-surface/) shading model.
    - [gltf_pbr.mtlx](bxdf/gltf_pbr.mtlx) : Graph definition of the [glTF PBR](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#appendix-b-brdf-implementation) shading model.
    - [usd_preview_surface.mtlx](bxdf/usd_preview_surface.mtlx) : Graph definition of the [UsdPreviewSurface](https://openusd.org/release/spec_usdpreviewsurface.html) shading model.
    - [lama](bxdf/lama) : Graph definitions of the [MaterialX Lama](https://rmanwiki.pixar.com/display/REN24/MaterialX+Lama) node set.

## Color Management Library
- MaterialX shader generation natively supports a small set of common spaces for input colors, with all color transforms implemented as language-independent MaterialX graphs.The canonical definitions of these color transforms may be found in the OpenColorIO configuration for [ACES 1.2](https://github.com/colour-science/OpenColorIO-Configs/tree/feature/aces-1.2-config/aces_1.2).
    - lin_rec709
    - g18_rec709
    - g22_rec709
    - rec709_display
    - acescg (lin_ap1)
    - g22_ap1
    - srgb_texture
    - lin_adobergb
    - adobergb
    - srgb_displayp3
    - lin_displayp3
- [cmlib](cmlib)
    - [cmlib_defs.mtlx](cmlib/cmlib_defs.mtlx) : Nodedef declarations.
    - [cmlib_ng.mtlx](cmlib/cmlib_ng.mtlx) : Nodegraph definitions.

## Target Definitions
- Each target implementation requires a target definition for declaration / implementation correspondence to work.
- The [targets](targets) folder contains definition files for the following core targets:
  - GLSL : `genglsl`
  - OSL : `genosl`
  - MDL : `genmdl`
  - MSL : `genmsl`
- Any additional target files should be added under this folder and loaded in as required.

### Target Support
- GLSL target support is for version 4.0 or higher.
- OSL target support is for version 1.9.10 or higher.
- MDL target support is for version 1.7.
- Basic GLSL and MSL `lightshader` node definitions and implementations are provided for the following light types:
    - point, directional, spot
- Shader generation does not currently support:
    - `ambientocclusion` node.
    - `arrayappend` node.
    - `curveadjust` node.
    - `displacementshader` and `volumeshader` nodes for hardware shading targets (GLSL, MSL).


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\ShooterGameUI\Saved\StagedBuilds\Windows\Engine\Binaries\ThirdParty\MaterialX\libraries\README.md ===
# MaterialX Data Libraries

This folder contains the standard data libraries for MaterialX, providing declarations and graph definitions for the MaterialX nodes, and source code for all supported shader generators.

## Standard Pattern Library
- [stdlib](stdlib)
    - [stdlib_defs.mtlx](stdlib/stdlib_defs.mtlx) : Nodedef declarations.
    - [stdlib_ng.mtlx](stdlib/stdlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](stdlib/genglsl): GLSL language support.
        - [lib](stdlib/genglsl/lib) : Shader utility files.
        - [stdlib_genglsl_impl.mtlx](stdlib/genglsl/stdlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](stdlib/genosl): OSL language support.
        - [lib](stdlib/genosl/lib) : Shader utility files.
        - [stdlib_genosl_impl.mtlx](stdlib/genosl/stdlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](stdlib/genmdl): MDL language support.
        - [stdlib_genmdl_impl.mtlx](stdlib/genmdl/stdlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
        - Additional MaterialX support libraries for MDL are located in the [source/MaterialXGenMdl/mdl/materialx](../source/MaterialXGenMdl/mdl/materialx) package folder
    - [genmsl](stdlib/genmsl): MSL language support.
        - [lib](stdlib/genmsl/lib) : Shader utility files.
        - [stdlib_genmsl_impl.mtlx](stdlib/genmsl/stdlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## Physically Based Shading Library
- [pbrlib](pbrlib)
    - [pbrlib_defs.mtlx](pbrlib/pbrlib_defs.mtlx) : Nodedef declarations.
    - [pbrlib_ng.mtlx](pbrlib/pbrlib_ng.mtlx) : Nodegraph definitions.
    - [genglsl](pbrlib/genglsl) : GLSL language support
        - [lib](pbrlib/genglsl/lib) : Shader utility files.
        - [pbrlib_genglsl_impl.mtlx](pbrlib/genglsl/pbrlib_genglsl_impl.mtlx) : Mapping from declarations to implementations.
    - [genosl](pbrlib/genosl) : OSL language support
        - [lib](pbrlib/genosl/lib) : Shader utility files.
        - [pbrlib_genosl_impl.mtlx](pbrlib/genosl/pbrlib_genosl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmdl](pbrlib/genmdl) : MDL language support
        - [pbrlib_genmdl_impl.mtlx](pbrlib/genmdl/pbrlib_genmdl_impl.mtlx) : Mapping from declarations to implementations.
    - [genmsl](pbrlib/genmsl) : MSL language support
        - [pbrlib_genmsl_impl.mtlx](pbrlib/genmsl/pbrlib_genmsl_impl.mtlx) : Mapping from declarations to implementations.

## BxDF Graph Library
- [bxdf](bxdf)
    - [standard_surface.mtlx](bxdf/standard_surface.mtlx) : Graph definition of the [Autodesk Standard Surface](https://autodesk.github.io/standard-surface/) shading model.
    - [gltf_pbr.mtlx](bxdf/gltf_pbr.mtlx) : Graph definition of the [glTF PBR](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#appendix-b-brdf-implementation) shading model.
    - [usd_preview_surface.mtlx](bxdf/usd_preview_surface.mtlx) : Graph definition of the [UsdPreviewSurface](https://openusd.org/release/spec_usdpreviewsurface.html) shading model.
    - [lama](bxdf/lama) : Graph definitions of the [MaterialX Lama](https://rmanwiki.pixar.com/display/REN24/MaterialX+Lama) node set.

## Color Management Library
- MaterialX shader generation natively supports a small set of common spaces for input colors, with all color transforms implemented as language-independent MaterialX graphs.The canonical definitions of these color transforms may be found in the OpenColorIO configuration for [ACES 1.2](https://github.com/colour-science/OpenColorIO-Configs/tree/feature/aces-1.2-config/aces_1.2).
    - lin_rec709
    - g18_rec709
    - g22_rec709
    - rec709_display
    - acescg (lin_ap1)
    - g22_ap1
    - srgb_texture
    - lin_adobergb
    - adobergb
    - srgb_displayp3
    - lin_displayp3
- [cmlib](cmlib)
    - [cmlib_defs.mtlx](cmlib/cmlib_defs.mtlx) : Nodedef declarations.
    - [cmlib_ng.mtlx](cmlib/cmlib_ng.mtlx) : Nodegraph definitions.

## Target Definitions
- Each target implementation requires a target definition for declaration / implementation correspondence to work.
- The [targets](targets) folder contains definition files for the following core targets:
  - GLSL : `genglsl`
  - OSL : `genosl`
  - MDL : `genmdl`
  - MSL : `genmsl`
- Any additional target files should be added under this folder and loaded in as required.

### Target Support
- GLSL target support is for version 4.0 or higher.
- OSL target support is for version 1.9.10 or higher.
- MDL target support is for version 1.7.
- Basic GLSL and MSL `lightshader` node definitions and implementations are provided for the following light types:
    - point, directional, spot
- Shader generation does not currently support:
    - `ambientocclusion` node.
    - `arrayappend` node.
    - `curveadjust` node.
    - `displacementshader` and `volumeshader` nodes for hardware shading targets (GLSL, MSL).


---END---

=== C:\Users\prash\Desktop\Peronal Projects\UE5\ShooterGameUI\README.md ===
<div align="center">

<img src="https://raw.githubusercontent.com/Prasham-Desai/ShooterGameUI/main/Screenshots/Logo.png" alt="ShooterGameUI Logo" width="200">

# ðŸŽ® ShooterGameUI

### A Polished Main Menu & Settings System for Unreal Engine 5.6

*Featuring a fully crafted 3D sci-fi environment backdrop, animated hero character,  
interactive UMG widgets with audio feedback, sliding transitions, and functional graphics settings.*

<br>

<img src="https://raw.githubusercontent.com/Prasham-Desai/ShooterGameUI/main/Screenshots/Splash%20Screen.png" alt="Splash Screen" width="80%">

<br>

![Unreal Engine](https://img.shields.io/badge/Unreal_Engine-5.6-0E1128?style=for-the-badge&logo=unrealengine&logoColor=white)
![Blueprints](https://img.shields.io/badge/Blueprints-Visual_Scripting-137CBD?style=for-the-badge&logo=blueprint&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![DirectX](https://img.shields.io/badge/RHI-DirectX_12-brightgreen?style=for-the-badge)
![Ray Tracing](https://img.shields.io/badge/Ray_Tracing-Enabled-orange?style=for-the-badge)

</div>

---

## ðŸ“‹ Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Project Structure](#-project-structure)
- [Technical Details](#-technical-details)
- [Asset Packs Used](#-asset-packs-used)
- [Getting Started](#-getting-started)
- [Controls & Interaction](#-controls--interaction)
- [Configuration](#-configuration)
- [License](#-license)

---

## ðŸ” Overview

**ShooterGameUI** is a standalone Unreal Engine 5.6 project focused entirely on delivering a **high-quality, production-ready main menu and settings system** for a shooter-style game. Rather than a gameplay prototype, this project showcases UI/UX design, environment art direction, and polished front-end systems â€” everything a player sees *before* the game begins.

The menu is built with **UMG (Unreal Motion Graphics)** and is backed by a fully constructed **3D sci-fi environment** that serves as a living, atmospheric backdrop. An animated **Paragon Twinblast** character stands in-scene, breathing life into the menu with idle animations, while carefully placed lighting, particle effects, and environmental details create a cinematic first impression.

---

## âœ¨ Features

### ðŸ–¥ï¸ Main Menu
- **Animated Menu Transitions** â€” Smooth sliding animations when opening and closing menu panels
- **Hover & Click Audio Feedback** â€” Every button plays distinct sound effects on hover and click for tactile, responsive interaction
- **Touch & Hover Visual Responses** â€” Buttons react visually to mouse hover and touch input with highlights and scale effects
- **Custom Typography** â€” Styled with **Coalition v2** and **Michroma** fonts for a sleek, futuristic aesthetic
- **Blueprint Interface System** â€” Clean `BPI_UI` interface for decoupled communication between UI widgets and game logic

### âš™ï¸ Settings Menu
- **Graphics Quality Presets** â€” Fully functional quality settings with **Low**, **Medium**, **High**, and **Ultra** presets that apply real Scalability Group changes at runtime
- **Gamma / Brightness Control** â€” Slider-based gamma adjustment for player comfort
- **Difficulty Selection** â€” Dropdown-based difficulty picker with named presets
- **Interactive Dropdowns (Combo Boxes)** â€” Custom-styled dropdown selectors with hover and click audio responses

### ðŸŒ 3D Environment Backdrop
- **Modular Sci-Fi Mechanic Base** â€” A full environment assembled from modular sci-fi structural pieces, pipes, cables, props, and landscape elements
- **Paragon Twinblast Character** â€” The iconic dual-pistol hero stands in the menu scene with a full **Animation Blueprint**, idle animations, and select-screen poses
- **VFX & Particles** â€” Dust particle systems (`NS_DUST`) and Twinblast FX bring atmospheric depth to the scene
- **Cinematic Lighting** â€” Carefully authored lighting with Lumen Global Illumination, Virtual Shadow Maps, and local exposure tuning for a dramatic, moody aesthetic

### ðŸŽ§ Audio
- **Menu Ambient Sound** â€” Background music/ambience (`MenuSound`) that plays while the menu is active
- **UI Interaction Sounds** â€” Distinct hover and click sound effects across all interactive elements

### ðŸ“± Input Support
- **Mouse & Keyboard** â€” Full desktop input with Enhanced Input System (`IMC_Default`, `IMC_MouseLook`)
- **Touch Interface** â€” Touch input support via `BPI_TouchInterface`, on-screen thumbstick, and simplified touch UI widgets

---

## ðŸ“¸ Screenshots

<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/Prasham-Desai/ShooterGameUI/main/Screenshots/SS1.png" alt="Screenshot 1" width="100%"></td>
    <td><img src="https://raw.githubusercontent.com/Prasham-Desai/ShooterGameUI/main/Screenshots/SS2.png" alt="Screenshot 2" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/Prasham-Desai/ShooterGameUI/main/Screenshots/SS3.png" alt="Screenshot 3" width="100%"></td>
    <td><img src="https://raw.githubusercontent.com/Prasham-Desai/ShooterGameUI/main/Screenshots/SS4.png" alt="Screenshot 4" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/Prasham-Desai/ShooterGameUI/main/Screenshots/SS5.png" alt="Screenshot 5" width="100%"></td>
    <td><img src="https://raw.githubusercontent.com/Prasham-Desai/ShooterGameUI/main/Screenshots/SS6.png" alt="Screenshot 6" width="100%"></td>
  </tr>
</table>

---

## ðŸ“ Project Structure

```
ShooterGameUI/
â”œâ”€â”€ Config/
â”‚   â”œâ”€â”€ DefaultEngine.ini          # Renderer, RHI, Lumen, ray tracing, scalability
â”‚   â”œâ”€â”€ DefaultGame.ini            # Game configuration
â”‚   â””â”€â”€ DefaultInput.ini           # Input bindings & Enhanced Input config
â”‚
â”œâ”€â”€ Content/
â”‚   â”œâ”€â”€ Blueprints/
â”‚   â”‚   â”œâ”€â”€ GameMode/
â”‚   â”‚   â”‚   â””â”€â”€ BP_ShooterGameMode         # Custom Game Mode (menu entry point)
â”‚   â”‚   â”œâ”€â”€ Interfaces/
â”‚   â”‚   â”‚   â””â”€â”€ BPI_UI                     # Blueprint Interface for UI communication
â”‚   â”‚   â””â”€â”€ UI/
â”‚   â”‚       â”œâ”€â”€ BP_MainMenu                # Main Menu actor blueprint
â”‚   â”‚       â”œâ”€â”€ WBP_MainMenu               # Main Menu UMG widget (buttons, animations)
â”‚   â”‚       â””â”€â”€ WBP_SettingsMenu           # Settings Menu UMG widget (sliders, dropdowns)
â”‚   â”‚
â”‚   â”œâ”€â”€ Fonts/
â”‚   â”‚   â”œâ”€â”€ Coalition_v2_                  # Coalition v2 font (main headings)
â”‚   â”‚   â””â”€â”€ Michroma-Regular               # Michroma font (body/UI text)
â”‚   â”‚
â”‚   â”œâ”€â”€ Input/
â”‚   â”‚   â”œâ”€â”€ Actions/
â”‚   â”‚   â”‚   â”œâ”€â”€ IA_Jump                    # Jump input action
â”‚   â”‚   â”‚   â”œâ”€â”€ IA_Look                    # Camera look input action
â”‚   â”‚   â”‚   â”œâ”€â”€ IA_MouseLook              # Mouse-specific look action
â”‚   â”‚   â”‚   â””â”€â”€ IA_Move                    # Movement input action
â”‚   â”‚   â”œâ”€â”€ IMC_Default                    # Default Input Mapping Context
â”‚   â”‚   â”œâ”€â”€ IMC_MouseLook                  # Mouse look Input Mapping Context
â”‚   â”‚   â””â”€â”€ Touch/
â”‚   â”‚       â”œâ”€â”€ BPI_TouchInterface         # Touch interface blueprint
â”‚   â”‚       â”œâ”€â”€ UI_Thumbstick              # On-screen thumbstick widget
â”‚   â”‚       â””â”€â”€ UI_TouchSimple             # Simplified touch UI widget
â”‚   â”‚
â”‚   â”œâ”€â”€ Levels/
â”‚   â”‚   â”œâ”€â”€ Lvl_Menu.umap                 # Full menu level with 3D environment
â”‚   â”‚   â””â”€â”€ Lvl_Menu_BuiltData.uasset     # Pre-built lighting data
â”‚   â”‚
â”‚   â”œâ”€â”€ Modular_Scifi_Mechanic_Base/       # ðŸ—ï¸ Modular sci-fi environment kit (â¬‡ï¸ Download from Fab)
â”‚   â”‚   â”œâ”€â”€ BP/                            # Environment blueprints
â”‚   â”‚   â”œâ”€â”€ Material/ (MF, MI, MM)         # Material functions, instances, masters
â”‚   â”‚   â”œâ”€â”€ Mesh/SM/                       # Static meshes (structures, cables, props)
â”‚   â”‚   â”œâ”€â”€ Texture/                       # Environment textures
â”‚   â”‚   â”œâ”€â”€ VFX/                           # Dust particles (NS_DUST, FXS_DUST)
â”‚   â”‚   â””â”€â”€ Map/                           # Demo map
â”‚   â”‚
â”‚   â”œâ”€â”€ ParagonTwinblast/                  # ðŸ¦¸ Hero character assets (â¬‡ï¸ Download from Fab)
â”‚   â”‚   â”œâ”€â”€ Characters/Heroes/TwinBlast/
â”‚   â”‚   â”‚   â”œâ”€â”€ Animations/ (211 anims)    # Full animation set (idle, combat, emotes)
â”‚   â”‚   â”‚   â”œâ”€â”€ TwinblastPlayerCharacter   # Player character blueprint
â”‚   â”‚   â”‚   â”œâ”€â”€ Twinblast_AnimBlueprint    # Animation Blueprint with state machine
â”‚   â”‚   â”‚   â”œâ”€â”€ Materials/                 # Character materials & shaders
â”‚   â”‚   â”‚   â”œâ”€â”€ Meshes/                    # Skeletal & static meshes
â”‚   â”‚   â”‚   â”œâ”€â”€ Skins/                     # Character skin variants
â”‚   â”‚   â”‚   â”œâ”€â”€ Sounds/                    # Character audio
â”‚   â”‚   â”‚   â””â”€â”€ Textures/                  # Character textures
â”‚   â”‚   â””â”€â”€ FX/                            # Character particle effects
â”‚   â”‚
â”‚   â””â”€â”€ Sounds/
â”‚       â””â”€â”€ MenuSound                      # Menu background music / ambience
â”‚
â”œâ”€â”€ ShooterGameUI.uproject                 # Project descriptor (UE 5.6)
â””â”€â”€ .gitignore                             # Git ignore rules
```

---

## ðŸ”§ Technical Details

| Feature | Implementation |
|---|---|
| **Engine** | Unreal Engine 5.6 |
| **Rendering API** | DirectX 12 (SM6) |
| **Global Illumination** | Lumen (Dynamic GI) |
| **Reflections** | Lumen Reflections |
| **Shadows** | Virtual Shadow Maps |
| **Ray Tracing** | Enabled (hardware RT support) |
| **Lighting** | Fully dynamic (no static/precomputed lighting) |
| **Input System** | Enhanced Input (Input Actions + Mapping Contexts) |
| **UI Framework** | UMG (Unreal Motion Graphics) |
| **Scripting** | 100% Blueprint Visual Scripting |
| **Plugins** | ModelingToolsEditorMode, GameplayStateTree |
| **Target Hardware** | Desktop (Maximum quality preset) |

### Renderer Configuration

The project is configured for maximum visual fidelity:

- **Lumen GI & Reflections** for real-time bounce lighting and screen-space reflections
- **Virtual Shadow Maps** for high-resolution, per-pixel shadow detail
- **Ray Tracing** enabled with RT proxies for enhanced reflections and shadows
- **Mesh Distance Fields** generated for Lumen and ambient occlusion
- **Local Exposure** tuned (highlight & shadow contrast at 0.8) for cinematic contrast
- **Auto Exposure** with extended luminance range for HDR scene support
- **Skin Cache Shaders** compiled for high-quality character skin rendering
- **First-person self-shadowing** enabled for added visual depth

---

## ðŸ“¦ Asset Packs Used

> [!IMPORTANT]
> The **Paragon: Twinblast** and **Modular Sci-Fi: Mechanic Base** asset packs are **not included** in this repository due to their large file sizes. You must download them separately from **[Fab](https://www.fab.com/)** (Epic Games' asset marketplace) and add them to the project's `Content/` folder for the project to work correctly.

| Asset Pack | Usage | Source |
|---|---|---|
| **Paragon: Twinblast** | Hero character model, 211+ animations, Animation Blueprint, FX, materials, and skins | â¬‡ï¸ [Download from Fab](https://www.fab.com/listings/3c2500d8-0499-47a4-bb0d-2655ea474e97) |
| **Modular Sci-Fi: Mechanic Base** | Core environment kit â€” modular structures, cables/pipes, props, landscape elements, materials, and dust VFX | â¬‡ï¸ [Download from Fab](https://www.fab.com/) |
| **UE5 Mannequins** | Default character mannequins (reference/prototyping) | Included with UE5 |
| **Level Prototyping** | Blockout meshes, interactables, and prototyping materials | Included with UE5 |

---

## ðŸš€ Getting Started

### Prerequisites

- **Unreal Engine 5.6** (installed via Epic Games Launcher)
- **Windows 10/11** with DirectX 12 compatible GPU
- **GPU with Ray Tracing support** (recommended for full visual quality)
- Minimum **8 GB VRAM** recommended for Ultra quality settings

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prasham-Desai/ShooterGameUI.git
   ```

2. **Download required asset packs from [Fab](https://www.fab.com/)**
   - **[Paragon: Twinblast](https://www.fab.com/listings/3c2500d8-0499-47a4-bb0d-2655ea474e97)** â€” Add to `Content/ParagonTwinblast/`
   - **Modular Sci-Fi: Mechanic Base** â€” Add to `Content/Modular_Scifi_Mechanic_Base/`
   > These assets are too large to host on GitHub and must be downloaded separately.

3. **Open the project**
   - Launch Unreal Engine 5.6
   - Open `ShooterGameUI.uproject`
   - Wait for shaders to compile on first launch (this may take several minutes)

4. **Play the menu**
   - The project defaults to `Lvl_Menu` as the startup map
   - Press **Play in Editor (PIE)** or **Standalone Game** to experience the full menu
   - The custom `BP_ShooterGameMode` is set as the global default Game Mode

### Build (Optional)

```bash
# Package for Windows (from UE5 Editor)
# Platforms > Windows > Package Project
```

---

## ðŸŽ® Controls & Interaction

| Input | Action |
|---|---|
| **Mouse Hover** | Highlights buttons with visual feedback + plays hover sound |
| **Mouse Click** | Activates menu item + plays click sound |
| **Touch Tap** | Same as mouse click (touch-enabled devices) |
| **Touch Drag** | Virtual thumbstick navigation (if applicable) |
| **Dropdown Click** | Opens combo box options with audio feedback |
| **Slider Drag** | Adjusts value (gamma, volume, etc.) with audio cue |

---

## âš™ï¸ Configuration

### Graphics Quality Presets

The settings menu applies real Unreal Engine Scalability Groups:

| Preset | Description |
|---|---|
| **Low** | Reduced draw distance, simplified shadows, lower texture resolution, minimal post-processing |
| **Medium** | Balanced quality and performance with moderate shadow quality and textures |
| **High** | High-quality shadows, textures, and post-processing with full draw distance |
| **Ultra** | Maximum quality â€” Lumen GI at full resolution, Virtual Shadow Maps, ray tracing, maximum draw distance |

### Engine Settings

Key rendering settings can be found in [`DefaultEngine.ini`](Config/DefaultEngine.ini):

- `r.DynamicGlobalIlluminationMethod=1` â€” Lumen GI
- `r.ReflectionMethod=1` â€” Lumen Reflections
- `r.Shadow.Virtual.Enable=1` â€” Virtual Shadow Maps
- `r.RayTracing=True` â€” Hardware ray tracing
- `DefaultGraphicsRHI=DefaultGraphicsRHI_DX12` â€” DirectX 12

---

## ðŸ—ºï¸ Level Map

| Level | Purpose |
|---|---|
| `Lvl_Menu` | **Primary menu level** â€” Full 3D environment with character, lighting, VFX, and the UMG menu overlay |
| `Lvl_MainMenu` | Lightweight menu level variant |
| `Lvl_FirstPerson` | First-person gameplay test level |
| `Map` | Additional map asset |

The default startup map is set to `Lvl_Menu` in both the editor and packaged builds.

---

## ðŸ“ License

This project is for **educational and portfolio purposes**. Asset packs (Paragon Twinblast, Modular Sci-Fi Mechanic Base) are subject to their respective licenses from [Fab](https://www.fab.com/) and Epic Games.

---

<div align="center">

**Built with â¤ï¸ in Unreal Engine 5.6**

*Main Menu â€¢ Settings System â€¢ Environment Art â€¢ UI/UX Design*

</div>


---END---

