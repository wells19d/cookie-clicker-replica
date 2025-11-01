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

## Current Phase

The current version establishes the **base game loop**, **timing system**, **cookie interactions**, and **UI layout scaffolding**.

Future phases will introduce:

- Upgrade buttons and scaling cost formulas
- Persistent save/load logic
- Visual tiered upgrades (Bronze → Silver → Gold → Platinum)
- Sound and animation feedback

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

## Author’s Note

This is a **personal learning and teaching project** shared between a developer and their child, with emphasis on clarity, structure, and educational value — **not optimization or commercial polish**.
