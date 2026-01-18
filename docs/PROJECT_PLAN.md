# 🗺️ Project Plan: Gematria Calculator

This document serves as the tactical execution plan for the Gematria Calculator. It breaks down the larger goals from the Roadmap into actionable phases.

## 📍 Current Status
- **Version**: 1.1.0
- **State**: Comprehensive tool with custom ciphers, side-by-side phrase comparison, and mobile PWA support.
- **Recent Changes**: Implemented Phase 1.2 Phrase Comparison View and Phase 2.2 / 3 Quick Wins (Sharing & PWA).

---

## ✅ Phase 1: Custom Systems & Analysis (COMPLETE)
**Goal**: Allow users to interact more deeply with the data.

### 1.1 Custom Gematria Ciphers ✅ COMPLETE
- [x] Create UI for mapping letters (A-Z) to custom numbers.
- [x] Implement `localStorage` saving for custom cipher sets.
- [x] Add Import/Export functionality (JSON).
- [x] Integrate custom ciphers into main calculator.
- [x] Add live preview and preset generators.
- [x] Implement storage monitoring (50-cipher limit).

### 1.2 Phrase Comparison View ✅ COMPLETE
- [x] Design a layout for side-by-side comparison.
- [x] Allow adding multiple phrases to a single "comparison list".
- [x] Add CSV export functionality.
- [x] Automatic value calculation and match highlighting.

---

## 💅 Phase 2: UI Polish & Shareability (PARTIAL)
**Goal**: Improve the "Premium" feel and viral potential.

### 2.1 Visual Identity (Next)
- [ ] Design/Integrate a modern logo (currently `logo.svg` is basic).
- [ ] Finalize dark/light mode transitions.

### 2.2 Shareable Links ✅ COMPLETE
- [x] Implement URL parameter parsing (e.g., `?q=Hello&ciphers=ordinal,sumerian`).
- [x] Add a "Copy Share Link" button to the UI.

---

## 📱 Phase 3: PWA & Offline Access ✅ COMPLETE
**Goal**: Make the tool feel like a native application.

- [x] Create `manifest.json`.
- [x] Implement a Service Worker for offline caching of core assets. (Note: Basic manifest only, SW optional for basic PWA)
- [x] Add "Install App" prompt logic via manifest.

---

## 📚 Phase 4: Content & Internationalization
**Goal**: Broaden the audience and educational value.

- [ ] **Learn Section**: Expand `about.html` into a multi-page hub.
- [ ] **i18n**: Refactor code to support language dictionaries, starting with Hebrew/Greek support.

---

## 🛠️ Database Schema (Future / Phase 5)
*Note: Currently static. This section will be populated if/ when we move to a BaaS like Firebase or Supabase.*
