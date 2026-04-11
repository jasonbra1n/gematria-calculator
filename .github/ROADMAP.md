# 🗺️ Project Roadmap

This document outlines the future direction and planned features for the Gematria Calculator. Our mission is to build the best open-source gematria calculator—a tool that is not only powerful and comprehensive but also a valuable educational resource for the community.

The roadmap is a living document and may change based on user feedback and development priorities. As this project is now hosted on cPanel with PHP 8.4 support, we are re-prioritizing backend features like native contact forms and word databases. Timelines are estimates and subject to change.

## Completed Milestones (v1.2.0 - January 2026)
-   **Visual Polish:**
    -   **Modern Logo:** New geometric-inspired logo for better brand identity.
    -   **Smooth Transitions:** Refined CSS transitions for dark/light mode switching.
-   **Educational Hub:**
    -   Redesigned `about.html` into a structured research hub.
-   **UX Improvements:**
    -   **Comparison Overlay:** Refactored system selection in the comparison tool for better usability.

## Completed Milestones (v1.1.0 - January 2026)

-   **Custom Gematria Systems:**
    -   Allow users to define their own custom ciphers.
    -   Interface to map letters to numerical values.
    -   `localStorage` persistence.
    -   Import/Export (JSON).
-   **Advanced Analysis Tools:**
    -   **Phrase Comparison:** Side-by-side analysis matrix for multiple phrases.
    -   **Match Highlighting:** Visual identification of matching values.
-   **UX Suite:**
    -   **Results Sorting:** Sort by name or value.
    -   **Shareable Links:** State-preserving URLs for sharing findings.
-   **Progressive Web App (PWA):**
    -   `manifest.json` for "Add to Home Screen" support.
    -   Standalone display mode and theme integration.

## Short-Term Goals (Q1 2026)

These remaining features are prioritized for the next minor version (v1.2.0):

-   **Community & Feedback:**
    -   **Contact Form:** Implement a contact page for user feedback using a static-site-friendly service.

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
    -   *Update:* Now feasible with PHP 8.4 backend. 
-   **Native Contact Form:**
    -   Implement a contact page using PHP `mail()` or a dedicated mail library instead of third-party static services.

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