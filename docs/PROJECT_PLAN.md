# 🗺️ Project Plan: Gematria Calculator

This document serves as the tactical execution plan for the Gematria Calculator. It breaks down the larger goals from the Roadmap into actionable phases.

## 📍 Current Status
- **Version**: 1.0.4 (Unreleased)
- **State**: Functional static site with 28+ standard systems + unlimited custom ciphers.
- **Recent Changes**: Implemented Phase 1.1 Custom Cipher System with full CRUD, import/export, and calculator integration.

---

## 🚀 Phase 1: Custom Systems & Analysis (In Progress)
**Goal**: Allow users to interact more deeply with the data.

### 1.1 Custom Gematria Ciphers ✅ COMPLETE
- [x] Create UI for mapping letters (A-Z) to custom numbers.
- [x] Implement `localStorage` saving for custom cipher sets.
- [x] Add Import/Export functionality (JSON).
- [x] Integrate custom ciphers into main calculator.
- [x] Add live preview and preset generators.
- [x] Implement storage monitoring (50-cipher limit).

### 1.2 Phrase Comparison View (Next)
- [ ] Design a layout for side-by-side comparison.
- [ ] Allow adding multiple phrases to a single "comparison list".
- [ ] Add CSV export functionality.

---

## 💅 Phase 2: UI Polish & Shareability
**Goal**: Improve the "Premium" feel and viral potential.

### 2.1 Visual Identity
- [ ] Design/Integrate a modern logo (currently `logo.svg` is basic).
- [ ] Finalize dark/light mode transitions.

### 2.2 Shareable Links
- [ ] Implement URL parameter parsing (e.g., `?q=Hello&ciphers=ordinal,sumerian`).
- [ ] Add a "Copy Share Link" button to the UI.

---

## 📱 Phase 3: PWA & Offline Access
**Goal**: Make the tool feel like a native application.

- [ ] Create `manifest.json`.
- [ ] Implement a Service Worker for offline caching of core assets.
- [ ] Add "Install App" prompt logic.

---

## 📚 Phase 4: Content & Internationalization
**Goal**: Broaden the audience and educational value.

- [ ] **Learn Section**: Expand `about.html` into a multi-page hub.
- [ ] **i18n**: Refactor code to support language dictionaries, starting with Hebrew/Greek support.

---

## 🛠️ Database Schema (Future / Phase 5)
*Note: Currently static. This section will be populated if/ when we move to a BaaS like Firebase or Supabase.*
