# 🗺️ Project Roadmap

This document outlines the future direction and planned features for the Gematria Calculator. Our mission is to build the best open-source gematria calculator—a tool that is not only powerful and comprehensive but also a valuable educational resource for the community.

The roadmap is a living document and may change based on user feedback and development priorities. As this project is hosted on GitHub Pages, features are categorized based on their feasibility within a static hosting environment. Timelines are estimates and subject to change.

## Short-Term Goals (Q1 2026)

These are features that can be implemented within the current static site architecture. We aim to track these using GitHub Issues and group them into a milestone for the next minor version release.

-   **Custom Gematria Systems:**
    -   ~~Allow users to define their own custom ciphers.~~
    -   ~~Provide an interface to map letters to specific numerical values.~~
    -   ~~Save custom ciphers to the browser's local storage.~~
    -   ~~Allow users to import/export one or more custom ciphers (e.g., as a JSON file).~~
    -   **(Completed in Phase 1.1 - January 2026)**

-   **Advanced Analysis Tools:**
    -   **Phrase Comparison:** A dedicated view to compare the gematria values of two or more phrases side-by-side.

-   **Enhanced UI/UX:**
    -   **New Logo:** Design a new, modern logo for the project to improve brand identity.
    -   **Results Filtering & Sorting:** Allow users to sort the results table by cipher name or value.
    -   **Shareable Links:** Generate a unique URL that saves the current input text and selected ciphers, allowing users to share their findings easily.

-   **Community & Documentation:**
    -   **Contact Form:** Implement a contact page using a static-site-friendly service like Formspree.io to allow for user feedback.
    -   **Privacy Policy:** ~~Create and add a clear Privacy Policy page. It should explain what data is used (e.g., `localStorage` for settings) and disclose the use of third-party services like Google AdSense for advertising and Google Analytics for traffic analysis.~~ (Done in v1.0.2)
    -   **Terms of Service:** ~~Add a basic ToS page outlining the use of the tool.~~ (Done in v1.0.2)

-   **Progressive Web App (PWA):**
    -   Enable offline access to the calculator and informational pages.
    -   Allow users to "install" the app on their mobile or desktop devices for a native-like experience.

## Mid-Term Goals (Q2-Q3 2026)

These are larger client-side features that will require more significant development and content creation effort. They will likely be part of a future major version.

-   **Educational Hub & User Manual:**
    -   Create a new "Learn" section dedicated to in-depth articles, tutorials, and a user manual.
    -   Develop content covering the history of specific ciphers, practical application techniques, and case studies.
    -   This will serve as a resource for both beginners and advanced users to deepen their understanding of gematria.

-   **Internationalization (i18n):**
    -   Support for non-English alphabets, starting with Hebrew and Greek, which are fundamental to historical gematria.
    -   Translate the UI into multiple languages.

-   **Basic Reverse Lookup:**
    -   Find words that match a specific numerical value from a pre-compiled list of common English words.
    -   *Note: A comprehensive, real-time reverse lookup would require a backend service.*

## Long-Term Vision (2027 and Beyond)

These aspirational features go beyond the capabilities of a simple static site and would require a backend server and database. Implementation would likely involve integrating a free-tier service like Firebase, Supabase, or a similar Backend-as-a-Service (BaaS) provider.

-   **User Accounts & Syncing:**
    -   Allow users to create an account to save their favorite phrases, custom cipher sets, and calculation history.
    -   Sync settings and saved data across devices.

-   **Advanced Gematria Database:**
    -   A large, searchable database of common words, names, and phrases with their gematria values.
    -   A powerful, server-side reverse lookup feature.

-   **Public API:**
    -   Provide a public API for developers to integrate gematria calculations into their own applications.

-   **Community Features:**
    -   A space for users to share and discuss interesting findings and patterns, which would require a database to store user-generated content.