# Share your notes with the next batch

If your notes helped you get through a course, they could help someone taking it next semester. You do not need to be a topper, know Git, or have notes for the whole syllabus. A clear explanation of one difficult topic is useful too.

[Choose a folder](#where-your-notes-go) · [Prepare your PDF](#prepare-your-pdf) · [Send your contribution](#send-your-contribution) · [Choose your credit](#credit-and-permission)

## Before you upload

Check the [subject directory](./resources/) for the course and teacher. Read the existing set descriptions so you can explain what yours adds: different examples, another teaching approach, a programming language, more recent coverage, or a topic that is missing.

We welcome your handwritten notes, typed explanations, worked practice, revision sheets, and study guides. A focused or unfinished set is welcome when its coverage and gaps are stated clearly. Do not upload someone else’s work without permission, restricted assessment material, unreadable scans, or another copy of an existing file.

## Where your notes go

Use **course → teacher → notes set**:

```text
resources/
└── data-structures-and-algorithms/
    ├── README.md
    ├── sir-teacher-name/
    │   ├── README.md
    │   ├── se-2026-cpp-mahad/
    │   │   ├── README.md
    │   │   └── DSA_Trees_Handwritten.pdf
    │   └── cs-2026-java-set-02/
    │       ├── README.md
    │       └── DSA_Trees_Typed.pdf
    └── general/
        └── the-dsa-blueprint/
```

The two teacher-specific sets above are naming examples, not a claim that those notes are already available.

- **Course:** reuse the existing folder. Add a new one under `resources/` only when the subject is missing. Use lowercase names separated by hyphens.
- **Teacher:** reuse the teacher’s folder. Include the teacher’s respectful title in both the folder name and the guide: `sir-hussain-saleem`, `miss-fozia-hanif`, or `sir-dr-m-sajid-khan`. Use Sir or Miss as appropriate to the teacher’s known form of address, and retain professional titles such as Dr. If unsure, ask rather than guessing. Check existing spellings before making another folder.
- **Notes set:** keep each student’s work separate. Include a term, program, language, topic, or chosen author credit in its name when that helps distinguish it. Use a neutral identifier such as `se-2026-cpp-set-02` if the author wants no public credit.
- **Shared material:** use `general/` for a roadmap or guide that was made independently of a particular teacher.
- **Unknown teacher:** use `teacher-not-recorded/` until the teacher is confirmed. This means the context is missing; it does not mean the notes suit every teacher.

Keep programming language and program as details of the set. Do not duplicate a PDF into separate CS, SE, or batch folders. A student from another program can judge whether the topics match. Give genuinely different course codes or outlines their own clearly described entries rather than assuming similar names mean identical courses.

An updated scan of the same notes belongs in the same set. A different author's work or a substantially different course offering gets a separate set. Describe the change in your pull request.

## Give the next student enough context

Copy the [notes-set template](./docs/templates/notes-set.md) into a `README.md` beside your PDFs. Record:

- Course title and code, if known.
- Teacher, separately from the student who wrote the notes.
- Program, section, semester or term, and year when known.
- Programming language when relevant, such as C++ or Java for DSA.
- Topics covered, whether the set is complete or partial, and any missing pages.
- A short description and link for each file.
- The author’s chosen credit and a clear source/permission statement.

Write **Not recorded** for missing facts. Use **Not applicable** when a field does not apply. Do not guess a teacher, author, date, language, or program from a filename.

Add the set to its teacher’s `README.md` and the course guide, with direct PDF links in the course guide. Readers should be able to compare sets before downloading. For a new teacher folder, create a short guide listing its sets. For a new course, also update the root course dropdown and [subject directory](./resources/) in alphabetical order.

## Prepare your PDF

Scan your own pages in order. Crop out the desk, rotate sideways pages, and check that handwriting, diagrams, and page numbers can be read on a phone. Remove blank scans, repeat pages, and personal information such as roll numbers or phone numbers.

Use clear filenames such as `DSA_Trees_Handwritten.pdf` or `SRE_Requirements_Typed.pdf`. Avoid spaces and labels such as `final-final.pdf`. An author’s name in the filename is optional. Combine a continuous set of notes into one PDF; split it by meaningful topics only when that makes it easier to use.

Compress large scans without making the writing blurry. Keep your original scan until the contribution is accepted, and open the uploaded copy to check it.

## Credit and permission

You may use your name, GitHub handle, an alias, or **Shared without public author credit** in the notes guide. A neutral label is a credit choice, not permission to upload unidentified work. Tell a maintainer who created it and confirm that it can be shared.

GitHub accounts, commits, and pull requests can still reveal who uploaded a file. If you want a maintainer to handle the upload, [email Mahad](mailto:codewithmahad@gmail.com) first and explain your preferred credit. Do not post someone’s private permission messages publicly.

For **your own work**, confirm that you created it, that any included third-party content can be shared, and that you permit the repository to host and distribute it. State the reuse terms you want recorded; ask if you are unsure. For **someone else’s work**, include the source and permission or license that allows redistribution. A maintainer can verify a private permission record without publishing personal details.

Keep existing author credits and source notices. Do not upload book PDFs, scans, or extracted chapters without redistribution permission. Link to an official publisher or library page when appropriate. Educational use or a free download does not by itself establish permission, and this repository’s MIT license does not relicense someone else’s notes.

## Send your contribution

1. **Fork the repository** to make your own copy. Create a branch for the notes you want to add.
2. **Upload the PDF and its guide** into the course, teacher, and set folders. You can use GitHub’s upload and edit pages in your browser.
3. **Update the indexes.** Link the set from its teacher and course guides. Update the root PDF total, and the subject total if you added a course.
4. **Open a pull request** back to this repository. Explain what you are sharing, its coverage, credit preference, and permission. The provided checklist will guide you.
5. **Respond to the review.** A maintainer checks the scan, context, links, and sharing permission before merging it.

If the upload steps are unfamiliar, [open an issue](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new) with the course and what you want to share. We can help you place it. Never share passwords or account access.

If you are working locally, run:

```sh
node docs/maintenance/check-resources.mjs
```

This checks paths, guides, indexes, and resource counts. You can contribute through GitHub without installing Node.js.

## Requests and study conversations

[Request missing notes](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new?template=notes-request.yml), [report a problem](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new?template=resource-problem.yml), or [ask a study question](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new?template=study-question.yml). Search existing issues first and add context to a matching thread. A request helps others know what is needed; it is not a promise that someone has the notes.

Include the course, teacher if known, and the topic you are working on. Keep conversations respectful and useful to students. Explain your attempt when asking for help. Do not share private student information, restricted assessment answers, or personal attacks on teachers or classmates.

Anyone can propose notes through a pull request. Trusted maintainers help review and organize the collection; being credited as a contributor does not require repository write access. The [maintainer guide](./docs/maintaining.md) explains how to keep the collection useful across batches.

[Back to the notes bank](./README.md)
