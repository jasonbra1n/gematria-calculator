# Gematria Calculator: Documentation Sentinel Skill

## Purpose
To protect the integrity of project history and ensure that documentation remains a reliable source of truth by preventing accidental data loss during updates.

## 🛡️ The Sentinel Protocol
Use this procedure whenever modifying `CHANGELOG.md`, `ROADMAP.md`, `PROJECT_PLAN.md`, or any long-form technical log.

1.  **Audit Before Edit**:
    - Carefully examine the `TargetContent` you intend to replace.
    - Ask: *Are there any items in this block that are NOT present in my `ReplacementContent`?*
    - If yes, you must merge the existing items into the new content to ensure zero data loss.
2.  **Strictly Additive Updates**:
    - Prefer appending to the end of lists over replacing the entire list.
    - Use specific anchor text (like a header or a specific list item) to inject new information without touching existing history.
3.  **Log Preservation**:
    - Never delete or "summarize away" specific technical accomplishments from history files.
    - If a section is becoming too long, propose an archive structure rather than performing a destructive overwrite.
4.  **Verification**:
    - After making a documentation edit, perform a `grep_search` or `view_file` to confirm that the older, critical entries are still present in the file.

## 📌 Sentinel Rules
- **Rule #1**: Cumulative logs (`CHANGELOG.md`, `ROADMAP.md`) are append-only by default.
- **Rule #2**: Respect the "memory" of the project. Do not overwrite past decisions or milestones without explicit user authorization.
- **Rule #3**: A successful documentation update is one where the previous state is preserved and the new state is clearly added.
