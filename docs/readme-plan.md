# README and notes-bank direction

The collection is maintained by Shaikh Mahad Ud Din as part of The UBIT Hub. This direction reflects the purpose clarified by Mahad on 4 November 2026.

## Purpose

Mahad and friends from different sections make notes while studying and share them through the WhatsApp community. Files get buried, people ask for them again, and the author may be offline. This repository gives those notes a place students can return to without waiting for a reply.

The longer-term purpose is to preserve that work for juniors studying the same courses, often with the same teachers. Students can prepare during semester breaks, share their own explanations later, and maintain the bank after the founding contributors graduate.

Keep the voice personal, concrete, and welcoming. Good notes matter more than class rank. Do not turn this into a showcase limited to toppers or claim coverage of the whole curriculum.

## Reader path

1. **Opening:** explain the real WhatsApp-to-notes-bank story. Keep the building illustration and compact title.
2. **Find your course:** show current counts and a closed course dropdown. Course links open guides grouped by teacher; adjacent links offer one available PDF.
3. **How to use:** choose by teacher and context, then read or download. Compare the current outline. Keep failed-preview help in a disclosure.
4. **The DSA Blueprint:** preserve its separate general-study role, compact facts, tree illustration, and direct PDF link.
5. **UBIT Results Portal:** one natural paragraph and the branded button. Do not expand this into feature documentation.
6. **Help improve the library:** invite student-made notes, explain pull requests briefly, and offer request/correction links. Keep the folder explanation in a disclosure.
7. **From our batch to yours:** connect saved notebooks with future juniors, ongoing student contribution, and trusted maintenance after graduation. Offer study conversations and the existing follow/contact buttons.
8. **Credits & permissions:** keep source terms and contact information visible without crowding the introduction.

## Organization

Use `resources/<course>/<teacher>/<notes-set>/`, with a guide at each level. The course guide links directly to the available PDFs and to each set's context. Different authors' notes stay separate. Program, term, language, coverage, and credit belong with the set.

Use `general/` for independent resources and `teacher-not-recorded/` for missing context. Never treat unknown context as evidence of general applicability. A teacher is not necessarily the note author. Include Sir or Miss as appropriate in teacher headings and folder names, retaining Dr where applicable. Use the known form of address; do not guess it.

Known teachers are Sir Hussain Saleem for SRE, Sir Fazal Ur Rehman for CPS, and Sir Dr M Sajid Khan for Urdu, confirmed by Mahad. Existing guides identify Miss Fozia Hanif for Linear Algebra and Sir Bari for the DLD revision guide. Other DLD teaching context remains unrecorded.

The core folders remain under `resources/`. Adding a teacher or author does not add a repository-root directory. `.github/` holds issue and pull request templates, `assets/` holds README artwork, and `docs/` holds contribution support and maintenance instructions.

## Current inventory

| Course | PDFs | Current context |
| :--- | ---: | :--- |
| Communication & Presentation Skills | 1 | Sir Fazal Ur Rehman |
| Data Structures & Algorithms | 1 | General roadmap |
| Digital Logic Design | 4 | Sir Bari's guide; other sets await teacher details |
| Linear Algebra | 1 | Miss Fozia Hanif |
| Software Requirement Engineering | 4 | Sir Hussain Saleem, SE453 |
| Urdu | 1 | Sir Dr M Sajid Khan |

Six subjects, 12 PDFs, and one DLD logic-gates reference image. Student authors, credit preferences, program/term details, and permission records still need confirmation for some existing sets. Do not invent them.

## Contribution and continuity

The root links to `CONTRIBUTING.md` for scanning, placement, credit, source permission, and the pull request process. A copyable set-guide template is in `docs/templates/notes-set.md`. Review and handover guidance is in `docs/maintaining.md`.

Issues were verified enabled and Discussions disabled on 4 November 2026. The repository has forms for requesting notes, reporting a problem, and asking a study question. Do not link to Discussions as an active feature until it is enabled; switch the conversation links and form together when that happens.

Anyone can propose a contribution. Trusted maintainers may be invited to review and manage the collection, but do not invent contributors, invite unnamed accounts, or grant access simply for attribution. Public credit is optional; provenance and sharing permission are still required.

## Visual and writing direction

- Use the portal's red, `#8F141B`, and `#C72B34` for dark-mode title lettering, with charcoal and warm ivory.
- Keep the transparent building, compact theme-aware title, book illustration, DSA tree, emblem, and local SVG buttons.
- Keep body copy as Markdown. Avoid banners, decorative cards, repeated explanations, and badges.
- Write as a student helping another student. Do not use Unicode dash punctuation in repository prose. Preserve supplied PDFs and third-party license notices unchanged.
- Preserve the Results paragraph and button as a compact companion-project section.
- Avoid implying university endorsement, guaranteed grades, universal course coverage, or guaranteed responses to requests.

## Verification

Run `node docs/maintenance/check-resources.mjs` for local links, anchors, counts, course indexes, teacher/set guides, resource placement, and set metadata. Compare hashes before and after moving any supplied file.

Preview both themes at 1200, 768, 390, and 320 pixels, including expanded disclosures. Check image loading, navigation, horizontal overflow, and the course-to-PDF route. Local preview is not proof of live GitHub rendering. New issue forms take effect when these files reach the default branch.

## Preserved source material

The DSA roadmap remains the original 31-page Part 1 PDF, SHA-256 `D1A99E9ED48EC080F0FF27F664DBA8A6E4B0F7563095F285D6CDE494602C2B4B`. Its original 2025 license remains in the DSA course folder. The Part 2 notes referenced inside it are not present.

The Results Portal's purpose and ongoing development were confirmed by Mahad. Its earlier feature descriptions were checked against the neighboring project's source. The web reader could not verify the live site; no student data or project source was changed.

On 4 November 2026, 20 unlicensed publisher book PDFs, scans, and extracted chapters were removed at Mahad's request. Remaining notes and guides were preserved. This does not establish redistribution permission for every remaining set, and copies of removed files remain in earlier Git commits until a separately authorized history cleanup occurs.
