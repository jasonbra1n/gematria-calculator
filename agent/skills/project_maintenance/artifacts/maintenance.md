# Gematria Calculator: Project Maintenance Skill

## Purpose
To ensure consistent, high-quality repository management, semantic versioning, and documentation synchronization during the development and release lifecycle.

## 🔄 Git Synchronization Procedure
Use this procedure whenever a significant chunk of work is completed or at the end of a session.

1.  **Stage Changes**: `git add .`
2.  **Commit**: Use Conventional Commits.
    - `feat: ...` for new features.
    - `fix: ...` for bug fixes.
    - `docs: ...` for documentation.
    - `style: ...` for UI/CSS changes.
    - `chore: ...` for maintenance.
3.  **Push**: `git push origin [branch-name]`

## 🚀 Version Release Procedure
Only perform a release when explicitly instructed by the user to "cut a version" or "release".

1.  **Preparation**:
    - Ensure all changes are verified and documented in the `[Unreleased]` section of `CHANGELOG.md`.
    - Identify the target version (e.g., `v1.2.1`).
2.  **Changelog & Config Update**:
    - Relocate all items from `## [Unreleased]` to a new header: `## [X.X.X] - YYYY-MM-DD`.
    - Update `APP_VERSION` and `LAST_UPDATED` in `config.php` to match the release.
3.  **Release Artifacts**:
    - Create a technical summary in `docs/releases/vX.X.X-release.md`.
    - Create a blog-formatted update in `docs/blog/vX.X.X Post.html`.
4.  **Final Commit & Tag**:
    - Commit with message: `release: vX.X.X`.
    - Create a git tag: `git tag vX.X.X`.
5.  **Synchronization**:
    - Push changes and tags: `git push origin [branch-name] --tags`.

## 📌 Maintenance Rules
- **Rule #1**: Never increment the version number unless performing the formal "Version Release Procedure."
- **Rule #2**: Always keep `CHANGELOG.md` as the source of truth for project history.
- **Rule #3**: Maintain consistent file headers and metadata in all release artifacts.
- **Rule #4**: All generated images and assets must be saved to the project's `assets/` directory (e.g., `assets/blog/`) to ensure the repository remains self-contained.
