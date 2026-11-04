# Keeping the notes bank useful

The collection should remain useful when a contributor changes sections, finishes a semester, or graduates. Keep the information a future maintainer needs in the repository and its review threads.

## Review a new set

1. **Check the source.** Confirm authorship or redistribution permission, requested public credit, and any reuse terms. An author may choose an alias or no public credit; that does not remove the need to verify the source.
2. **Read the uploaded PDF.** Check readability, page order, missing sections, personal information, and whether the description matches the material. Do not promise complete coverage or error-free notes.
3. **Check the context.** Course, teacher, author, program, term, language, and coverage should be recorded or explicitly marked as missing. The teacher and note author are separate roles. Use the teacher’s respectful title in both headings and folder names, following the contribution guide.
4. **Compare existing sets.** Keep a distinct student's set separate. Avoid duplicate uploads, duplicate teacher spellings, or copies of the same PDF for different programs. Ask before replacing or renaming another contributor's work.
5. **Check the route to the file.** Every set needs a guide, a teacher/group index entry, and links from its course guide. Every course belongs in both main indexes. Update totals and run `node docs/maintenance/check-resources.mjs`.
6. **Merge after review.** Explain requested changes plainly. Record the source and agreed credit with the set, keeping private permission evidence out of public issues.

A useful partial set is welcome if its boundaries are clear. A newer set does not automatically make an older one obsolete; students may still need its teacher, language, or outline.

## Requests and corrections

Search for duplicates before opening a new request. Ask for the course, teacher, topic, and program where relevant. Keep a request open while material is missing; do not imply that a maintainer can supply every set.

For a correction, record the affected filename and page or topic. When updating a PDF, describe the change in the pull request and check the replacement before removing the old working copy. Contact the author when the correction changes their explanation or credit.

## Conversations

Issues currently provide forms for notes requests, resource problems, and study questions. GitHub Discussions was confirmed disabled on 4 November 2026. The README therefore uses a working issue form for study conversations.

When maintainers enable Discussions, use Q&A for study help and General for course or university conversations. Update the README, contribution guide, and issue chooser together, and retire the temporary study-question issue form. Do not advertise Discussions as active before checking it.

The official [GitHub Discussions setup guide](https://docs.github.com/en/discussions/quickstart) covers enabling the feature and categories. Keep discussions respectful, focused on learning, and free of private student information or restricted assessment material.

## Growing the maintainer team

Anyone can contribute through a pull request. Credit accepted work using the author's chosen name or label. Trusted contributors may later be invited to help review or maintain the repository; do not grant write access merely to display someone as a contributor.

Maintainers should use pull requests for content changes too, and seek another maintainer's review when one is available. Before handing over a course or graduating, leave the current coverage, open requests, correction needs, and permission status in its guides or issues. Agree who will look after the queue, rather than relying on a private chat that future maintainers cannot see.

## Existing material and missing details

The reorganization preserves the existing PDFs and reference image unchanged. It does not certify their contents or grant new permissions. Where a separate permission record is missing, the set guide says so. Confirm these records with the authors; do not invent approval or silently assign a new license.

Confirmed teacher names: Sir Hussain Saleem for SRE, Sir Fazal Ur Rehman for CPS, and Sir Dr M Sajid Khan for Urdu, supplied by Mahad. The earlier guides identify Miss Fozia Hanif for Linear Algebra and Sir Bari for the DLD revision guide. The teacher for the separate DLD handwritten sets and MCQ bank remains unrecorded.

Some student authors, terms, programs, and credit preferences are still missing. Record them as they are confirmed. Do not treat a teacher's name in a filename as proof that the teacher wrote the notes.

## Repository presentation

Keep the root focused on finding notes and contributing. Put detailed procedures in the linked guides. A suitable GitHub About description is:

> Student-made course notes and study guides for UBIT, organized by course, teacher, and notes set. Part of The UBIT Hub.

Use topics that describe the actual collection. Check external links and the README in both themes when changing navigation or artwork.

[Contribution guide](../CONTRIBUTING.md) · [Back to the notes bank](../README.md)
