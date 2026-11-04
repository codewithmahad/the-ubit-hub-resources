# Share useful course material

Readable notes, worked assignments, lab solutions, practice questions, and revision guides can help the next student. Share your own work or material you have permission to redistribute. Clearly label partial coverage.

## Where files go

Use `resources/<course>/<teacher>/<file>.pdf`. Put all material used for the same course and teacher directly in that folder. Reuse existing folders; do not add author, notes-set, or material-type subfolders, and do not create extra READMEs.

Use respectful teacher names such as `sir-hussain-saleem`, `miss-fozia-hanif`, and `sir-dr-m-sajid-khan`. Ask if the teacher is unknown. `general/` is only for an independent resource that is not tied to a particular teacher.

## File names

Use `Course_Content_Format_Author.pdf`, with underscores between words. Include a topic, assignment number, language, or year when it helps identify the contents. Avoid vague names such as `final.pdf`, and do not call partial notes complete.

Mahad’s own material always ends with `_Shaikh_Mahad_Ud_Din.pdf`. Examples:

- `SRE_Typed_Study_Notes_Shaikh_Mahad_Ud_Din.pdf`
- `DLD_Handwritten_Lecture_Notes_Shaikh_Mahad_Ud_Din.pdf`
- `DBMS_Assignment_01_Relational_Model_Shaikh_Mahad_Ud_Din.pdf`
- `DSA_Java_Trees_Lab_Solutions_Author.pdf`

The DBMS and Java examples show the naming pattern; they are not currently available files. Preserve another creator’s credit instead of adding Mahad’s name. An outline or reference sheet does not need an author suffix when authorship is unknown.

## Add your material

1. Check the [main README](./README.md) for the course and teacher.
2. Fork the repository and upload the file directly into the matching teacher folder.
3. Add a short, descriptive PDF link under that course in the main README’s dropdown. No other index or README is needed.
4. Open a pull request with the course, teacher, coverage, author or source, and sharing permission. Include the program, term, or programming language when relevant.

Before submitting, check page order, readability, and links. Remove accidental blank scans and private information. A focused topic is welcome; say what is missing.

An author may choose a name, alias, or no public credit. Confirm authorship and permission with a maintainer even when credit is private. GitHub accounts and commit history may still identify the uploader.

Do not upload book scans, extracted chapters, or another person’s notes without redistribution permission. Keep required credits and notices. The repository’s license does not grant rights to someone else’s material.

For a missing resource, correction, or study question, [open an issue](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new/choose). Include the course and teacher, and keep private information out of public threads.

Local maintainers can use the [drop-off workflow](./docs/maintaining.md). If Node.js is available, run `node docs/maintenance/check-resources.mjs` before publishing.

[Back to the notes bank](./README.md)
