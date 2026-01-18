# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2026-01-18

### 📁 Refactor
- **Repository Restructuring:**
  - Organized project management files (`CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `ROADMAP.md`) into the `.github/` folder.
  - Moved legal and general documentation (`PRIVACY.md`, `TOS.md`) into the `docs/` folder.
  - Relocated release notes to `docs/releases/`.

### 📝 Documentation
- **README Updates:** Updated all internal documentation links to point to their new locations in `.github/` and `docs/`.
- **Project Planning:** Created `docs/PROJECT_PLAN.md` to outline a phased approach for future features.

### 🤖 AI Context & Workflow
- **Persona Alignment:** Updated `.gemini/PERSONA.md` and `.gemini/CONTEXT.md` to be specifically tailored for Gematria R&D, replacing legacy CMS context.
- **Workflow Optimization:** Refreshed `.gemini/GEMINI.md` with custom "Magic Spell" prompts for different development phases (Custom Systems, UI Polish, PWA).

## [1.0.2] - 2025-12-10

### 📝 Documentation
- **Added Project Governance Files:**
  - **`CONTRIBUTING.md`**: Guidelines for new contributors, including development setup and style guides.
  - **`ROADMAP.md`**: A detailed plan for future development, structured into short-term, mid-term, and long-term goals.
  - **`CODE_OF_CONDUCT.md`**: Community standards based on the Contributor Covenant to foster a welcoming environment.
  - **`PRIVACY.md`**: A policy explaining data usage, including `localStorage` and third-party services like Google Analytics and AdSense.
  - **`TOS.md`**: A Terms of Service page outlining the use of the tool.
- **Updated README:**
  - Added badges for license, contributions, and website status.
  - Added a "Project Information" section with links to the new documentation files (`CONTRIBUTING.md`, `ROADMAP.md`, `PRIVACY.md`, `TOS.md`).
  - Added a dedicated "License" section.
- **Updated CONTRIBUTING.md:**
  - Linked to the `CODE_OF_CONDUCT.md` and added a new section on Project Management.

## [1.0.1] - 2025-11-18

### ✨ Added
- **Scroll to Top Button:** A floating button now appears on all pages, allowing users to quickly return to the top with a smooth scroll.

### 🎨 Improved
- **Responsive Form Design:** The main calculator form has been optimized for desktop screens, preventing input fields and buttons from becoming excessively wide.
- **Mobile Navigation:** A responsive hamburger menu has been implemented for a better user experience on smaller devices.
- **UI Animations:** The hamburger menu icon now animates into an "X" when the menu is open, providing clear visual feedback.
- **Input Field Responsiveness:** The main text input now resizes correctly on mobile screens, preventing layout issues.

## [1.0.0] - 2025-11-17

### ✨ Added

- **Comprehensive Gematria Engine:** Instantly calculate the value of any word or phrase across a wide array of systems.
- **Extensive System Support:** The calculator launches with support for **28 different gematria systems**, including Ordinal, Reduction, Standard, Sumerian, Primes, and Alphanumeric Qabbala (AQ).
- **Customizable Experience:**
  - A user-friendly overlay allows you to select exactly which systems you want to use.
  - Convenience buttons to quickly "Select Base" systems, "Select All," or "Clear" choices.
  - An option to display single-digit "Reduced Values" alongside the primary calculation.
- **Informational Resources:**
  - **About Page:** A detailed article explaining the history, meaning, and cultural significance of gematria.
  - **Ciphers Page:** A complete reference guide with value tables for every supported gematria system.
- **Modern & Responsive UI:**
  - A clean, intuitive design that works seamlessly on desktop and mobile devices.
  - **Light & Dark Mode:** Automatically detects your system preference and includes a manual toggle.
  - An immersive, distraction-free experience with a header and footer that intelligently hide as you scroll.
- **SEO & Social Ready:** The site is fully optimized with meta tags for high visibility on search engines and rich, descriptive link previews when shared on social media.

This release establishes a robust and feature-rich foundation for the Gematria Calculator.