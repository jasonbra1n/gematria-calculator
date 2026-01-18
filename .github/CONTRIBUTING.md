# Contributing to Gematria Calculator

First off, thank you for considering contributing to the Gematria Calculator! Your help is greatly appreciated. This project is open to all, and we welcome any contributions that can make it better.

This document provides guidelines for contributing to the project.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Project Management](#project-management)
- [Development Setup](#development-setup)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [Code Style](#code-style)

## Code of Conduct

This project and everyone participating in it is governed by the [Gematria Calculator Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/jasonbra1n/gematria-calculator/issues). If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample or an executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

If you have an idea for an enhancement, please open an issue to discuss it. This allows us to coordinate and ensure that the enhancement aligns with the project's goals.

### Pull Requests

We love pull requests! For any non-trivial change, please open an issue to discuss it first.

1.  Fork the repository and create your branch from `main`.
2.  Set up the development environment as described below.
3.  Make your changes. Ensure the new code follows the project's style guides.
4.  Add or update tests if your changes require them.
5.  Ensure the test suite passes.
6.  Commit your changes using a descriptive commit message that follows our commit message conventions.
7.  Push your branch to your fork and open a pull request.

## Project Management

We use GitHub to manage our development process. The project's direction is guided by the [ROADMAP.md](ROADMAP.md) file.

-   **Issues:** Each feature or bug from the roadmap is broken down into a specific [GitHub Issue](https://github.com/jasonbra1n/gematria-calculator/issues). If you want to work on something, this is the place to start. Look for issues tagged with `help wanted` or `good first issue`.
-   **Milestones:** We group issues into Milestones that correspond to the goals in our roadmap (e.g., "Q1 2026 Release"). This helps us track progress towards our next major release.

Feel free to comment on an issue to ask questions or to be assigned to it.

## Development Setup

This project is a pure static site. You don't need to install any heavy dependencies to get started.

1.  **Clone your fork:**
    ```bash
    git clone https://github.com/jasonbra1n/gematria-calculator.git
    cd gematria-calculator
    ```

2.  **No Installation Required:**
    Since we emphasize a zero-dependency architecture, there is no `npm install` or `pnpm install` step.

3.  **Run the development server:**
    To avoid CORS issues with local file access (especially when using the header/footer fetches), we recommend using a simple local web server.

    **Using VS Code:**
    Install the "Live Server" extension and click "Go Live" at the bottom right.

    **Using Python:**
    ```bash
    python -m http.server 8000
    ```

    **Using Node/npx:**
    ```bash
    npx serve
    ```

    Navigate to the local URL (e.g., `http://localhost:8000`) in your browser.

## Style Guides

### Git Commit Messages

We use Conventional Commits for our commit messages. This allows for automated changelog generation and helps keep the commit history clean and understandable.

Examples:
- `feat: Add new Sumerian cipher variant`
- `fix: Correct calculation for single-digit reduction`
- `docs: Update README with new feature details`
- `style: Reformat cipher data files with Prettier`

### Code Style

We use Prettier for automatic code formatting. It's recommended to set up your editor to format on save. A configuration file is included in the repository, so it should work out of the box.