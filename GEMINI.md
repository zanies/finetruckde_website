# Project: FineTruck DE Landing Page

## Overview
This project is a static landing page for **FineTruck DE**, a mobile application designed to help drivers calculate fines in Germany (Bußgeldkatalog 2026). The site is built with a focus on modern aesthetics, performance, and user experience.

## Tech Stack
*   **HTML5:** Semantic markup.
*   **CSS Framework:** Tailwind CSS (via CDN) for rapid UI development.
*   **Custom CSS:** bespoke animations (3D float, fade-ins) and specific styling overrides.
*   **JavaScript:** Vanilla JS for handling client-side language switching (Polish/German).

## Project Structure
```text
.
├── web/
│   ├── index.html        # Main application file (HTML + CSS + JS)
│   └── assets/
│       └── flutter_01-portrait.webp  # App mockup image
├── unnamed.jpg           # Reference image (unused in build)
└── GEMINI.md             # Project documentation
```

## Key Features
1.  **Visuals:**
    *   **3D Hero Animation:** The app mockup features an isometric floating animation with dynamic shadows.
    *   **Modern UI:** Clean, grey/white palette with blue accents and gradients.
2.  **Multilingual Support:**
    *   Built-in **PL/DE** switcher.
    *   Instant translation without page reload using `data-i18n` attributes.
3.  **Responsive Design:**
    *   Mobile-first approach.
    *   Desktop-specific features like a QR code for easy app download.
4.  **Sections:**
    *   **Hero:** Main call-to-action and app showcase.
    *   **Features:** Grid layout highlighting key app capabilities.
    *   **About:** "Why FineTruck DE?" section with benefits.
    *   **Roadmap:** "Coming Soon" section for the Driver Working Time Calculator.

## How to Run
Since this is a static site, no build process is required.

1.  **Local:** Simply open `web/index.html` in your web browser.
2.  **Development:** It is recommended to use a local server (like VS Code "Live Server" or `python3 -m http.server` inside `web/`) to ensure assets load correctly.

## Development Guidelines
*   **Editing Content:** All text is stored in the `translations` object within the `<script>` tag at the bottom of `index.html`.
*   **Styling:** Use Tailwind utility classes for layout and spacing. Use the `<style>` block in `head` for custom animations (`@keyframes`) and complex effects.
*   **Adding Languages:** To add a new language, update the `translations` object and add a new toggle logic in the JavaScript section.