# 🤖 Gemini Playground & Prompt Guide

This file is your **Command Center**. It contains the "Magic Spells" (Prompts) to guide Gemini through the build process defined in `docs/PROJECT_PLAN.md`.

## 🏁 How to Use This Guide
1.  **Copy** the "Context Setter" below.
2.  **Paste** it at the start of every new chat session.
3.  **Select** the specific prompt for the Phase you are working on.

---

## ⚡ Quick Sync & Workflow

### 1. Start of Session (The "Quick Sync")
*Use this to instantly load the project context:*
> "Please check for any **Agent Skills** (Knowledge Items) and read all the project context files (`.gemini/CONTEXT.md`, `.gemini/PERSONA.md`, `.github/ROADMAP.md`, `.github/CONTRIBUTING.md`, `docs/PROJECT_PLAN.md`) to get in sync with the current state of the project."

### 2. Feature Development
> "Let's implement the '[Feature Name]' feature from the project plan."
> "I have an idea for a new module: '[Description]'. Please add it as a '[To Do]' item to the project plan and roadmap."

### 3. Bug Fixes & Refactoring
> "I've found a bug in the calculation logic for [Cipher Name]. [Describe bug]. Let's fix it."
> "Let's refactor the [script/style] for better performance and maintainability."

### 4. Documentation & Standards
> "Update the `CHANGELOG.md` for our current session to the `[Unreleased]` section."
> "Summarize the changes for a Git commit using Conventional Commits."
> "Review the current code against our coding conventions in `.gemini/CONTEXT.md`."

### 5. Release
> "Let's release version vX.X.X. Please update the `CHANGELOG.md` by moving the `[Unreleased]` items to a new `[vX.X.X]` section."
> "Let's release version v1.0.3. Please update the `CHANGELOG.md` by moving the `[Unreleased]` items to a new `[v1.0.3]` section. Summarize the changes for a Git commit using Conventional Commits and also create a new v1.0.3-release.md file in the docs/releases folder. "

---

## 🧠 Manual Context Setter (Fallback)
*If the Quick Sync doesn't work, paste this:*
> "You are an expert Frontend Developer and Gematria Specialist building the 'Gematria Calculator'.
> **Stack:** PHP 8.4, Vanilla JS (ES6+), CSS3 (Flex/Grid). Hosted on cPanel/Apache.
> **Objective:** Mathematical precision, high performance, and a premium research-focused UI.
> **Philosophy:** Zero-dependency, lightweight, and accessible."

---

## 📅 Phase 1: Custom Systems & Analysis

### 1. Custom Cipher Interface
> "Let's build the Custom Cipher UI. It needs:
> 1. A form to name the cipher and assign numerical values to letters A-Z.
> 2. A preview of how it affects the current input.
> 3. A 'Save' button that stores the cipher in `localStorage`."

### 2. Import/Export (JSON)
> "Create a way to export our custom cipher definitions as a JSON file and import them back in. This should handle multiple ciphers in a single file."

### 3. Side-by-Side Comparison
> "Design a 'Research Mode' or 'Comparison View'. I want to be able to enter multiple phrases and see their values across a selection of ciphers in a compact table."

---

## 💅 Phase 2: UI/UX & Shareability

### 1. Visual Polish (Premium Feel)
> "Let's improve the animations when switching between Light and Dark mode. Use smooth CSS transitions and ensure all SVGs (like the logo) adapt correctly."

### 2. Dynamic Share Links
> "Implement a 'Share Results' feature. When clicked, generate a URL with base64 encoded parameters for the current text and active ciphers so users can share specific findings."

---

## � Phase 3: PWA & Performance

### 1. Progressive Web App
> "Generate a `manifest.json` and a basic Service Worker. We need to cache the core `index.html`, `styles.css`, and `script.js` for offline use."

### 2. Performance Audit
> "Analyze the `script.js` calculation loop. Is there a way to optimize it for very long strings? Let's ensure the UI remains responsive during heavy calculations."

---

## 📝 Playground Notes
*Use this space below to paste code snippets, research notes for new ciphers, or UI ideas.*