# Gematria Calculator Design System

## Core Purpose
To maintain a high-precision, premium research tool aesthetic across all pages and components.

## Key Constraints
- **Zero Dependencies**: Pure HTML, CSS, and Vanilla JS.
- **High Contrast**: Always ensure accessibility (WCAG AA). 
    - *Constraint*: Buttons must explicitly set `color: white !important` to ensure text is visible on colored backgrounds regardless of parent container link styles.
- **Glassmorphism**: Use semi-transparent backgrounds with blurs for overlays and results (`rgba(...)` + `backdrop-filter` where appropriate).

## Tokens
- `--primary-color: #4CAF50` (Green - Success/Calculate)
- `--systems-color: #2196F3` (Blue - Systems/Navigation)
- `--overlay-action-color: #FF9800` (Orange - Primary Overlay Action)
- `--base-systems-color: #9C27B0` (Purple - Selection Shortcuts)
- `--error-color: #ff4444` (Red)

## Component Rules
### 1. Buttons
Standardized button components use a shared base configuration to ensure consistent aesthetics across `<a>` and `<button>` elements.
- **Classes**: `.btn-calculate`, `.btn-reset`, `.btn-systems`, `.btn-submit`, `.btn-save`, `.btn-select-base`, `.btn-select-all`, `.btn-clear`.
- **Aesthetics**:
    - **Padding**: `10px 20px` (standard) or `12px` (large/full-width).
    - **Corners**: `border-radius: 8px` for a modern, less "square" feel.
    - **Font**: `font-weight: 500`.
- **Interactions**:
    - **Hover**: Subtle lift using `transform: translateY(-1px)` and an enhanced `box-shadow`.
    - **Active**: Return to neutral position with reduced shadow.
    - **Transitions**: `0.3s cubic-bezier(0.4, 0, 0.2, 1)` for smooth responses.

### 2. Cards
- Use `.content-card` for all content sections. Use `.primary-card` for highlighted informational blocks.

### 3. Forms
- Use `.form-group` for layout. Standardize input padding and border-radius to match buttons (`8px`).

### 4. Layout
- **Sticky Elements**: Headers and Footers use sticky positioning and hide on down-scroll (`.header-hidden`, `.footer-hidden`).
- **Footer**: Always pushed to the bottom of the viewport on short pages using `margin-top: auto` in the flex body container.

## Change Log
- **2026-04-14**: Standardized all button components with shared classes, increased border-radius to 8px, and implemented premium hover interactions.
- **2026-04-13**: Fixed button contrast issues in content cards. Migrated form styles to global `styles.css`.
