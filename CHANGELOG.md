# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### ✨ Added
- **Server-Side Architecture:**
  - Migrated the application from static GitHub Pages to cPanel-based web hosting.
  - Full support for PHP 8.4, enabling future server-side features.
  - Conversion of all core pages from `.html` to `.php` for backend flexibility.
- **Advanced Routing & SEO:**
  - Implemented `.htaccess` for **Clean URLs** (e.g., `/about` instead of `/about.php`).
  - Enforced site-wide HTTPS for enhanced security.
  - Optimized `sitemap.xml` and `robots.txt` for clean URL structures.
  - Synchronized Open Graph, Twitter, and Canonical meta tags across all pages.
- **Performance:**
  - Configured intelligent caching headers via `.htaccess` for images, CSS, and JS.

### 🔧 Modified
- **Project Structure:**
  - Repository transitioned to **Private** status.
  - Removed legacy `CNAME` file.
  - Updated all internal navigation links to use extension-less clean URLs.
- **Documentation:**
  - Updated `README.md`, `ROADMAP.md`, and `PROJECT_PLAN.md` to reflect the new technology stack and private repository status.
  - Re-prioritized backend features (Native Contact Form, word database) in the roadmap.

## [1.2.0] - 2026-01-19

### ✨ Added
- **Visual Identity:**
  - New modern SVG logo featuring geometric nodes and concentric circles.
  - Smooth CSS3 transitions for seamless Light/Dark mode switching.
- **Educational Hub:**
  - Complete redesign of `about.html` into a responsive grid layout.
  - Added historical context and research resources.
- **Phrase Comparison:**
  - Refactored system selection into a dedicated overlay (matching the main calculator experience).
  - Improved mobile responsiveness by removing the large static grid.

### 🐛 Fixed
- **Phrase Comparison UI:** 
  - Applied standard `.gematria-calculator` card styling for visual consistency with other pages.
  - Fixed input width overflow issue by applying proper box-sizing.
  - Corrected positioning of the "remove phrase" (X) button to ensure it stays inline with the input field.

## [1.1.0] - 2026-01-18

### ✨ Added - Phase 1.2: Phrase Comparison View
- **Phrase Comparison Tool (`compare.html`):**
  - Side-by-side analysis of unlimited words/phrases
  - Dynamic input field management (add/remove)
  - Automatic calculation upon input change
  - Intelligent match highlighting (identifies identical values across phrases)
  - CSV Export for researchers and data analysis
  - Responsive matrix table with sticky headers/columns

### ✨ Added - Phase 1.1: Custom Cipher System
- **Custom Cipher Engine (`cipher-manager.js`):**
  - Full CRUD operations for user-defined gematria ciphers
  - localStorage persistence with 50-cipher limit
  - UUID generation for unique cipher identification
  - Comprehensive validation (A-Z completeness, positive integers)
  - Import/Export functionality (JSON format)
  - Preset generators (Sequential, Reverse, Pythagorean)
  - Storage monitoring with visual usage indicators
  - Automatic duplicate name handling on import

- **Custom Cipher Builder UI (`custom-ciphers.html`):**
  - Dedicated page for managing custom ciphers
  - Card-based cipher list with Edit/Delete actions
  - Modal-based cipher builder with 26-input A-Z grid
  - Live preview showing real-time calculations
  - Quick-fill preset buttons for common patterns
  - Empty state messaging for new users
  - Import/Export interface with file validation
  - Storage usage bar (green/orange/red indicators)
  - Sample calculation display for each cipher

- **Custom Cipher Page Logic (`custom-ciphers.js`):**
  - Dynamic cipher list rendering
  - Modal workflow management
  - Preset application system
  - Live preview updates
  - File import/export operations
  - Form validation and error handling
  - XSS prevention via HTML escaping

- **Main Calculator Integration:**
  - Custom ciphers now appear in systems overlay
  - Visual separator distinguishing custom from standard ciphers
  - Dynamic loading on page initialization
  - Seamless calculation integration
  - Persistent selection in localStorage

- **Navigation Enhancement:**
  - Added "Custom Ciphers" link to header menu

- **Results Sorting:**
  - Added sort controls above results (Default Order, Sort by Name, Sort by Value)
  - Sort by Name: Alphabetical ordering of cipher names
  - Sort by Value: Descending numerical order (highest first)
  - Sort preference persists in localStorage
  - Active sort button highlighted with visual feedback

- **Shareable Links:**
  - Added "Share" button to results overlay
  - Generates URL parameters for current input, selected systems, and sort preference (e.g., `?q=HELLO&ciphers=ordinal,reduction&sort=value`)
  - Auto-populates calculator state when opening shared links
  - Visual "Copied!" feedback on click

- **PWA Support:**
  - Added `manifest.json` for "Add to Home Screen" capability
  - Configured app icons and theme colors
  - Enabled standalone display mode for native-app feel

### 🎨 Improved
- **CSS Styling (`styles.css`):**
  - Added 450+ lines of custom cipher styles
  - Responsive cipher builder grid (adapts to mobile)
  - Dark/light mode compatibility for all new elements
  - Hover effects and smooth transitions
  - Mobile-first breakpoints for optimal UX
  - Storage bar with color-coded warning states

### 🔧 Modified
- **`script.js`:**
  - Enhanced `calculateSystemValue()` to detect and process custom ciphers
  - Added `loadCustomCiphersIntoOverlay()` function
  - Added `escapeHtml()` utility function
  - Integrated CipherManager for custom cipher lookups

- **`index.html`:**
  - Added `cipher-manager.js` script reference

- **`header.html`:**
  - Added Custom Ciphers navigation link

### 📝 Documentation
- **Implementation Plan:** Created detailed technical specifications for Phase 1
- **Task Breakdown:** Granular checklist with 100+ actionable items
- **Walkthrough:** Comprehensive documentation with browser testing results

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