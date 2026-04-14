# Project Maintenance & Development Standards

This document outlines the internal development setup and standards for the Gematria Calculator project. As this is a private research tool, these guidelines are intended for the project owner and any authorized collaborators.

## Table of Contents
- [Development Setup](#development-setup)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [Changelog Management](#changelog-management)
  - [Code Style](#code-style)
- [Deployment](#deployment)

## Development Setup

The project is built with Vanilla JavaScript, CSS, and PHP 8.4. It is designed to be lightweight with zero external dependencies.

1.  **Direct Repo Access:**
    Ensure you have authenticated access to the private repository:
    ```bash
    git clone https://github.com/jasonbra1n/gematria-calculator.git
    cd gematria-calculator
    ```

2.  **Run a Local Development Server:**
    To ensure proper handling of PHP files and internal fetches, use a local server:

    **Using VS Code:**
    Use the "Live Server" or a PHP-specific extension.

    **Using PHP Built-in Server:**
    ```bash
    php -S localhost:8000
    ```

    Navigate to `http://localhost:8000` in your browser.

## Style Guides

### Git Commit Messages

We use Conventional Commits to maintain a clean history.
Examples:
- `feat: Add new Sumerian cipher variant`
- `fix: Correct calculation for single-digit reduction`
- `docs: Update README with new feature details`
- `style: Reformat CSS using STYLE_GUIDE.md`

### Changelog Management

All notable changes must be documented in `CHANGELOG.md`.
- **Items Go to [Unreleased]:** Always place new changes under the `## [Unreleased]` section.
- **No Version Increments:** Assistants should never increment the version number.

### Code Style

- **CSS:** Adhere to the `docs/STYLE_GUIDE.md` and the "Design System" Knowledge Item.
- **PHP:** Use modern PHP 8.4 features where applicable. Ensure strict typing and sanitization for form handling.

## Deployment

Deployment is handled via FTP/cPanel. 
1. Ensure all changes are verified locally.
2. Upload modified files to the appropriate cPanel directory.
3. Verify site functionality at `https://gematria-calculator.jasonbrain.com/`.