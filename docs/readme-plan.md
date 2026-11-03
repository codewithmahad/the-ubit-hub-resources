# README redesign direction

Design notes for the completed README redesign. The user expanded the scope from the opening section to the full README on 3 November 2026.

## Purpose and audience

The repository preserves useful course material for UBIT students at the University of Karachi. It is maintained by Shaikh Mahad Ud Din as part of The UBIT Hub community. Course READMEs provide the context: what each file contains, a starting resource, and how notes relate to practice and references.

The user confirmed the long-term direction: a shared resource library across UBIT batches and degree programs, growing course by course. Keep that ambition distinct from the current coverage.

## Current coverage

Verified from the repository files on 4 November 2026:

| Course | PDFs | Existing starting resource |
| :--- | ---: | :--- |
| Software Requirement Engineering | 4 | Course outline, then comprehensive notes |
| Digital Logic Design | 4 | Final Exam Target Guide |
| Linear Algebra | 1 | Complete semester notes |
| Communication & Presentation Skills | 1 | Complete notes |
| Urdu | 1 | Comprehensive notes |
| Data Structures & Algorithms | 1 | The DSA Blueprint roadmap |

There are 12 PDFs across six subject folders inside `resources/`, plus a DLD logic-gates reference image. The DSA subject currently contains a roadmap and its study guide, rather than a full set of course notes. Do not describe the library as covering the whole curriculum or imply university endorsement.

## Implemented reading order

1. **Introduction.** Identify the audience, useful material, course guides, and purpose in three short paragraphs. The user's department-building photograph is now represented by a compact transparent architectural illustration at the right. Use the two-line phone title to preserve readable lettering.
2. **Find your course.** Borderless entries with a course link, direct starting documents, and a normal-size description. Put navigation before background. Add collapsed beginner instructions and a repository tree, leaving the subject links visible.
3. **The DSA Blueprint.** Introduce the user's community roadmap, its six phases, practice links, and printable tracker. Link to the local PDF and the DSA study guide, beside a binary-search-tree visual.
4. **UBIT Results Portal.** Give the user's companion project a prominent section after the study resources. Explain results and GPA, its purpose for the university community, and that it is still in development. Link through the branded emblem-and-wordmark button.
5. **How to use the material.** A brief sequence from primary notes to practice and deeper references. Include a collapsed PDF-download tip if needed.
6. **Help improve the library.** Invite useful additions, corrections, and missing-resource reports. Link to `CONTRIBUTING.md` for the full process rather than repeating it.
7. **About The UBIT Hub.** Explain the community connection and the relationship between the WhatsApp community, resource library, and results portal. The introduction carries the longer-term vision; avoid repeating it here. Include only user-confirmed community links or figures. End with a concise invitation to star the repository, share a subject link, and follow the maintainer’s work.
8. **Credits & contact.** A quiet footer for maintenance, source attribution, and correction/contact links. Keep source permissions distinct from the repository's license.

The course index uses native text and links, with a line break before each description. This removes GitHub's forced table grid, striped rows, and small subtext, while allowing natural wrapping on phones. GitHub sanitizes inline CSS, so the custom borderless table in the design reference cannot be recreated by adding styles to a Markdown table. Course descriptions are drawn from the actual course guides and files. Community details are drawn from the user's profile; omit changing membership counts and unprovided WhatsApp invite links.

## DSA migration

The user supplied `The-DSA-Blueprint-Roadmap.pdf` at the repository root and requested consolidation of the former standalone DSA project into this library. The file was moved unchanged to `resources/data-structures-and-algorithms/roadmaps/`, with a folder README and the original 2025 MIT notice. SHA-256: `D1A99E9ED48EC080F0FF27F664DBA8A6E4B0F7563095F285D6CDE494602C2B4B`.

The old repository README claimed 29 pages; the actual supplied PDF contains 31 physical pages. Use 31 in new descriptions. Part 2 is mentioned inside the source PDF but is not included here; do not carry over an unconfirmed release promise. The new navigation and download links use this repository, so they do not depend on the old repository remaining available.

## Visual direction

- Use the Results project's actual red, `#8F141B`, with charcoal and warm ivory. Use `#C72B34` for dark-mode lettering, keeping the hue red rather than pink. The button retains the exact site red on its light surface in both themes.
- Match the profile reference's compact opening, typography, natural writing, and selective bold emphasis.
- Use a small transparent title with light/dark and compact phone variants. Place the department-building illustration in the right-hand opening space.
- Keep body copy as real Markdown. Use visuals for identity or useful context, and keep tables short enough to scan.
- Avoid large banners, decorative cards, badge rows, generic gradients, and repeated explanations.
- Preserve course notes and guides while applying the distribution cleanup below. Keep the contribution guide's index references and resource-count instructions consistent with the redesigned root README.
- Use a small original book illustration beside the workflow and a compact export of the existing university emblem beside the community section.

## Verification

Local rendering uses GitHub Markdown CSS with automatic heading anchors, at 1200, 768, 390, and 320 pixels in both light and dark themes. Check image loading, page overflow, heading selection, navigation targets, and the expanded PDF-download help panel. Also reconcile the displayed subject/PDF totals with the repository files, check local links and SVG XML, and run `git diff --check`. Verify that the migrated PDF's SHA-256 and the original license's Git blob hash are unchanged.

The results-portal URL and ongoing-development status are confirmed by the user. The web reader could not load that site during this pass. The neighboring Results project was inspected read-only to verify its red, branding, results/GPA purpose, and calculator implementation; no student data or source files in that project were changed.

## Scalable structure and final editorial review

All six subject folders are now grouped under `resources/`. The three tracked root directories are `resources/`, `assets/`, and `docs/`; adding a subject adds no root-level directory. `resources/README.md` is the directory guide. Subject footer links continue back to the root README, and contribution instructions use the new paths.

The root README keeps its course index, DSA roadmap, and Results website visible. Beginner instructions, the repository tree, and PDF-preview help use native `details` disclosures. The primary student actions remain available without expanding anything. Results and community copy have been shortened to remove repeated purpose statements. Star and follow links are a brief invitation after the community description, with no counters or claims of guaranteed engagement.

Run `node docs/maintenance/check-resources.mjs` to check all local Markdown references, inventory totals, subject-guide presence, and PDF placement. For this migration, compare every non-Markdown resource against the pre-move SHA-256 manifest. Visual QA should cover both themes, narrow screens, and expanded disclosures.

## Distribution cleanup

On 4 November 2026, the user instructed removal of books they do not have permission to redistribute. Removed 20 PDFs: two CPS textbooks, one DLD textbook and eight extracted chapters, three SRE reference books and four extracted chapters, and two Urdu book-scan collections. Updated all affected course guides, catalogs, study instructions, and counts.

Retained notes, guides, the course outline, and the original DSA roadmap unchanged. This cleanup does not establish redistribution permission for the remaining teacher, classmate, or compiled materials. New contributions must document authorship or redistribution permission; attribution alone is insufficient. The repository license does not relicense third-party content.

These deletions remove the files from the current working tree. Copies in earlier Git commits remain until a separately authorized history cleanup is performed.
