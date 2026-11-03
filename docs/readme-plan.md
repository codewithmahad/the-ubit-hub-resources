# README redesign direction

Design notes for the completed README redesign. The user expanded the scope from the opening section to the full README on 3 November 2026.

## Purpose and audience

The repository preserves useful course material for UBIT students at the University of Karachi. It is maintained by Shaikh Mahad Ud Din as part of The UBIT Hub community. Course READMEs provide the context: what each file contains, a starting resource, and how notes relate to practice and references.

The user confirmed the long-term direction: a shared resource library across UBIT batches and degree programs, growing course by course. Keep that ambition distinct from the current coverage.

## Current coverage

Verified from tracked files on 3 November 2026:

| Course | PDFs | Existing starting resource |
| :--- | ---: | :--- |
| Software Requirement Engineering | 11 | Course outline, then comprehensive notes |
| Digital Logic Design | 13 | Final Exam Target Guide |
| Linear Algebra | 1 | Complete semester notes |
| Communication & Presentation Skills | 3 | Complete notes |
| Urdu | 3 | Comprehensive notes |

There is also a DLD logic-gates reference image. Do not describe the library as covering the whole curriculum or imply university endorsement.

## Implemented reading order

1. **Introduction.** Identify the audience, useful material, course guides, and purpose in three short paragraphs. The user's department-building photograph is now represented by a compact transparent architectural illustration at the right. Use the two-line phone title to preserve readable lettering.
2. **Find your course.** A compact course table: course link, recommended starting resource, and a short description of available material. Put navigation before background.
3. **UBIT Results Portal.** Give the user's companion project its own prominent section directly after the course index. Explain results and GPA, its purpose for the university community, and that it is still in development. Link through the branded emblem-and-wordmark button.
4. **How to use the material.** A brief sequence from primary notes to practice and deeper references. Include a collapsed PDF-download tip if needed.
5. **Help improve the library.** Invite useful additions, corrections, and missing-resource reports. Link to `CONTRIBUTING.md` for the full process rather than repeating it.
6. **About The UBIT Hub.** Explain the community connection and the relationship between the WhatsApp community, resource library, and results portal. The introduction carries the longer-term vision; avoid repeating it here. Include only user-confirmed community links or figures.
7. **Credits & contact.** A quiet footer for maintenance, source attribution, and correction/contact links. Keep source permissions distinct from the repository's license.

The course index has two columns to keep the starting document close to its course on narrow screens. Its resource descriptions are drawn from the actual course guides and tracked files. Community details are drawn from the user's profile; omit changing membership counts and unprovided WhatsApp invite links.

## Visual direction

- Use the Results project's actual red, `#8F141B`, with charcoal and warm ivory. Use `#C72B34` for dark-mode lettering, keeping the hue red rather than pink. The button retains the exact site red on its light surface in both themes.
- Match the profile reference's compact opening, typography, natural writing, and selective bold emphasis.
- Use a small transparent title with light/dark and compact phone variants. Place the department-building illustration in the right-hand opening space.
- Keep body copy as real Markdown. Use visuals for identity or useful context, and keep tables short enough to scan.
- Avoid large banners, decorative cards, badge rows, generic gradients, and repeated explanations.
- Preserve course files, course READMEs, and the contribution guide during the redesign.
- Use a small original book illustration beside the workflow and a compact export of the existing university emblem beside the community section.

## Verification

Local rendering uses GitHub Markdown CSS with automatic heading anchors, at 1200, 768, 390, and 320 pixels in both light and dark themes. Check image loading, page overflow, heading selection, navigation targets, and the expanded PDF-download help panel. Also reconcile the displayed course/PDF totals with the tracked files, check local links and SVG XML, and run `git diff --check`.

The results-portal URL and ongoing-development status are confirmed by the user. The web reader could not load that site during this pass. The neighboring Results project was inspected read-only to verify its red, branding, results/GPA purpose, and calculator implementation; no student data or source files in that project were changed.
