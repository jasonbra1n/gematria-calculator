<PERSONA_FILE>
.gemini/PERSONA.md
</PERSONA_FILE>

<PROJECT_INFO>
**Name**: Gematria Calculator
**URL**: [gematria-calculator.jasonbrain.com](https://gematria-calculator.jasonbrain.com/)
**Description**: A comprehensive, high-performance web application for calculating gematria values across 28+ systems. It serves as a research tool for numerical analysis of text.
**Goal**: Maintain and expand the advanced research platform features, including custom ciphers and side-by-side phrase comparison.
</PROJECT_INFO>

<TECH_STACK>
Refer to `docs/PROJECT_PLAN.md` for architecture details.
- **Frontend**: Vanilla HTML5, CSS3 (Modern features like Flex/Grid), and Vanilla JavaScript (ES6+).
- **Backend**: PHP 8.4 (for utilities like contact forms and database lookups).
- **Hosting**: cPanel-managed web hosting (Apache).
- **Security**: Private repository; SSL enforced via .htaccess.
- **State Management**: Browser `localStorage` for user preferences and custom data.
</TECH_STACK>

<CODING_CONVENTIONS>
- **Philosophy**: Lightweight, zero-dependency where possible. Fast load times and smooth real-time calculations.
- **Directory Structure**:
    - `.github/`: Project management (ROADMAP, CONTRIBUTING).
    - `docs/`: Long-form documentation, releases, and legal (PRIVACY, TOS).
    - `root`: Main application files (`index.php`, `script.js`, `styles.css`) and modular logic (`cipher-manager.js`, `compare.js`).
- **JS Style**: Functional programming where appropriate, clean modular functions, and descriptive variable names.
- **CSS Style**: Premium aesthetics, dark/light mode support, and responsive design.
- **Documentation**: Keep the `CHANGELOG.md` updated with every significant change. **IMPORTANT**: Always place new entries under the `## [Unreleased]` section. Assistants may only perform version increments when executing a formal Release Procedure as defined in the **Project Maintenance Skill**.
</CODING_CONVENTIONS>

<ROADMAP>
Refer to `.github/ROADMAP.md` for the long-term vision and `docs/PROJECT_PLAN.md` for active development phases.
</ROADMAP>




