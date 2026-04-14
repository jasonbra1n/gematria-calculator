# Gematria Calculator Style Guide

This document defines the visual and technical standards for the Gematria Calculator project.

## 🎨 Color Palette

| Variable | HEX | Usage |
| :--- | :--- | :--- |
| `--primary-color` | `#4CAF50` | Calculate buttons, Success states |
| `--systems-color` | `#2196F3` | Navigation, System links, Secondary actions |
| `--overlay-action-color` | `#FF9800` | High-priority overlay buttons (Save) |
| `--base-systems-color` | `#9C27B0` | Quick selection shortcuts |
| `--error-color` | `#ff4444` | Form errors, Delete actions |

## 🧱 Components

### Buttons
All buttons and full-width links must use concentrated classes rather than inline styles.
- **Base Class**: Applied to all `.btn-*` classes.
- **Radius**: `8px` (Modern/Premium).
- **Interactions**:
    - **Hover**: Lift (`-1px`) + Shadow (`0 4px 8px`).
    - **Active**: Press effect with reduced shadow.
- **Rules**:
    - Always use `!important` on the `color` property to override global link styles.
    - Always define a `:hover` state using the `--hover-` equivalent of the background color.

### Cards & Layout
- **Content Cards**: Use `.content-card`. On dark themes, cards use a semi-transparent `#1e1e1e` background.
- **Sticky Footer**: The footer must stick to the bottom of the viewport on all pages. Use `margin-top: auto` in the `flex` body.

## 📐 Spacing
- **Container Margin**: `20px` standard for mobile and desktop.
- **Internal Padding**: `20px` for cards, `10px 20px` for buttons.

## 📱 Responsiveness
- **Breakpoints**: 
    - `< 480px`: Hide logo text, stack overlays.
    - `< 768px`: Show hamburger menu, hide desktop nav.
- **Typography**: Scale fonts slightly down on mobile using relative units (`em`, `rem`).
