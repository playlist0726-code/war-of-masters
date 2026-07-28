---
version: alpha
name: War of Masters
description: A dark competitive study arena where mock-exam performance becomes rank, character progression, and social rivalry.
colors:
  ink: "#E9EDF2"
  muted: "#8994A3"
  gold: "#D9AD59"
  gold-highlight: "#F0D694"
  navy: "#07111B"
  panel: "#0C1824"
  line: "#243443"
  teal: "#52C9C2"
omitted:
  - section: typography
    reason: The repository does not define named shared typography tokens.
  - section: rounded
    reason: The interface uses component-local geometry rather than a named radius scale.
  - section: spacing
    reason: The repository does not define a named shared spacing scale.
  - section: components
    reason: Shared component tokens are not defined independently from their current implementations.
---

## Overview

War of Masters presents mock-exam competition as a premium midnight esports arena. Interfaces combine disciplined academic data with cinematic character progression, keeping scores and decisions legible while gold and teal signal achievement, energy, and forward motion.

## Colors

Use `navy` for the primary canvas and `panel` for contained records, mission surfaces, and equipment. Use `line` to separate dense information without lifting every item into a card. Set primary text in `ink` and secondary explanation in `muted`.

Reserve `gold` and `gold-highlight` for rank, primary actions, rare rewards, dates, and decisive outcomes. Use `teal` for positive change, progress, synchronization, and active study energy. Do not assign both accents equal visual weight within one component.

## Typography

Use the sans-serif stack for navigation, labels, explanations, controls, and dense game data. Use the serif stack for hero statements, rank values, major section headings, dates, and high-impact numbers. Keep numeric data tabular wherever values align in rows or update over time.

Uppercase English labels act as compact game-system eyebrows. Keep them secondary to Korean product copy and pair them with a single visible state, statistic, or section purpose.

## Layout

Build major sections around a centered content measure near the existing 1180px record and ranking surfaces. Alternate cinematic split sections with dense full-width data bands so visual spectacle and useful study information remain distinct.

On narrow screens, collapse multi-column data and character sections into one reading order. Keep the primary action, current rank, next battle time, and daily mission visible without horizontal scrolling.

## Elevation & Depth

Create depth through nested navy surfaces, thin borders, foreground occlusion, character art, and restrained directional light. Use hard offset shadows only for exceptional event cards. Do not use generic soft shadows to separate every panel.

Motion may animate transform and opacity for character ambience, reward feedback, and rare state changes. Keep repeated navigation and data inspection immediate, and disable nonessential movement when reduced motion is requested.

## Shapes

Use clipped shield, crest, and angular frame geometry for rank and character equipment. Keep ordinary data containers rectangular and border-led so special silhouettes retain meaning. Circular forms belong to progress, synchronization, lenses, clocks, and energy systems.

## Components

Primary actions use a gold field with dark text and immediate press feedback. Secondary actions remain transparent with a gold or muted border. Ranking and record surfaces rely on aligned rows, restrained dividers, and strong numeric hierarchy rather than decorative cards.

Character and equipment surfaces must connect every visual reward to a measurable study condition. Locked rewards show the exact academic requirement, while earned rewards show grade, name, and effect without obscuring the study outcome.

## Do's and Don'ts

Do keep academic evidence—score, percentile, accuracy, time, growth, and completion condition—attached to every game reward.

Do use cinematic art as a focal layer with HTML text and controls kept separate and readable.

Don't imitate existing game characters, rank emblems, logos, or interface layouts.

Don't let ambient effects, particles, or continuous motion compete with exam information or primary actions.
