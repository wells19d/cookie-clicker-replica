# 🍪 Cookie Clicker Replica — Project Context

## Purpose

This project is a **purely educational replica** of the original _Cookie Clicker_ concept.  
It was created for the purpose of teaching foundational **JavaScript** and **p5.js** concepts — including frame timing, delta-based updates, resource scaling, and visual UI management — in a fun, interactive way suitable for beginner learners.

## Disclaimer

- This project is **not for commercial use** and **does not claim ownership or originality** over the _Cookie Clicker_ idea or gameplay concept.
- It is intended solely for **learning, experimentation, and code education**, particularly for teaching children or new programmers the fundamentals of game loops and incremental systems.
- No part of this codebase or its assets (images, fonts, sounds) should be redistributed or monetized.

## Teaching Goals

- Understanding frame-based timing (`millis()`, `deltaSec`)
- Building an incremental economy system (cookies per second, upgrade scaling)
- Visual structure and layout planning with p5.js
- Using readable variable names and progressive logic for clarity
- Reinforcing cause/effect programming through interactivity (clicks, upgrades, sounds)
- Introducing basic persistent data handling (saving, resetting, deleting progress)

## Current Phase

The current version establishes:

- The **core game loop** with frame-based updates.
- **Manual save / load / reset / delete logic** using the browser’s `localStorage`.
- **Base UI and cookie interaction system**, with timing display and simple animations.
- **Persistent session management** — players can close the browser and resume progress automatically.

Future phases will introduce:

- Upgrade buttons and scaling cost formulas.
- A structured upgrade shop system.
- Persistent save/load logic via external JSON or server-based file updates.
- Visual tiered upgrades (Bronze → Silver → Gold → Platinum).
- Sound, animation, and upgrade feedback.
- Optional backend integration (Node.js or Firebase) for true JSON-based save files.

## Game Session Logic (Saving System)

| Key           | Action           | Behavior                                                                                                                                                              |
| ------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **S**         | Save Session     | Manually saves all current game data (`count`, upgrades, etc.) to browser `localStorage`.                                                                             |
| **R**         | Reset Game       | Resets game progress to values defined in `cookie_init.json`, and overwrites the saved data.                                                                          |
| **D**         | Delete Save      | Deletes all locally saved data from `localStorage`. The next time the game loads, it starts fresh using `cookie_init.json`.                                           |
| _(Automatic)_ | Resume on Launch | When the game starts, it automatically checks for an existing save in `localStorage`. If found, it loads progress; otherwise, it initializes from `cookie_init.json`. |

**Note:**  
`localStorage` saves persist across browser refreshes and restarts as long as the project is served from a web server (e.g., VS Code Live Server).  
If the game is opened as a `file://` URL, persistence may not work consistently.

## Project Files Overview

| File                                                                               | Description                                                                                                                                 |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `sketch.js`                                                                        | Main p5.js script containing setup, draw loop, and cookie logic. Handles rendering, click detection, frame timing, and base upgrade system. |
| `ccbg.jpg`                                                                         | Background image for the main game canvas.                                                                                                  |
| `cookie.png`                                                                       | Primary clickable cookie sprite.                                                                                                            |
| `click.mp3`                                                                        | Sound effect for cookie clicks.                                                                                                             |
| `OpenSans-Medium.ttf`                                                              | Main font used for text rendering.                                                                                                          |
| `OpenSans-MediumItalic.ttf`                                                        | Italic font used for secondary info text.                                                                                                   |
| `bronzePointer.png`, `silverPointer.png`, `goldPointer.png`, `platinumPointer.png` | Upgrade cursor icons representing tier progression.                                                                                         |
| `cookie_init.json`                                                                 | Base initialization file for the game’s default values (used for resets and first-time loads).                                              |

## Author’s Note

This is a **personal learning and teaching project** shared between a developer and their child, with emphasis on clarity, structure, and educational value — **not optimization or commercial polish**.

The project intentionally prioritizes readability and simplicity over optimization to demonstrate core concepts such as timing, game loops, and persistent state management.
