# Adding new material locally

1. Drop the PDFs into `incoming-notes/` in your local repository. Tell the assistant the course, teacher, and who made the files.
2. Have the assistant inspect the contents, choose descriptive filenames, copy the approved files into `resources/<course>/<teacher>/`, and update the main README’s course list.
3. Review the prepared files and diff, then stage those specific PDFs and the README, commit, and push.

`incoming-notes/` is ignored by Git. Keep the original drop-off files there until you choose to remove them. The folder is for local intake, not a published part of the notes bank. Never force-add it. Local previews in `tmp/` are ignored too.

## Keep the structure simple

All material used for one course and teacher belongs directly in that teacher’s folder: notes, assignments, lab work, outlines, and revision material. Use respectful teacher titles in folder names. Do not create author or material-type subfolders or nested READMEs.

Use `general/` for genuinely independent resources such as the DSA roadmap. Do not put material there just because its author is someone else. The folder records the teaching context; the filename records the material and its creator.

Mahad’s own PDFs use the suffix `_Shaikh_Mahad.pdf`. Preserve other creators’ names and notices. Confirm uncertain authorship or teaching context before assigning it. The [contribution guide](../CONTRIBUTING.md#file-names) defines the naming pattern.

For files outside your own work, verify sharing permission before adding them. Keep private permission evidence out of public commits.

## Check before publishing

Run `node docs/maintenance/check-resources.mjs`. It checks the flat layout, names, main README links, and whether the local intake folder is excluded from Git.

Review `git status --short` and the exact files being staged. For an ordinary upload, stage only the new PDFs and the updated main README. A course folder appears automatically when its first file is committed; no placeholder README is needed.

Issue forms handle requests, corrections, and study questions. Do not advertise Discussions as active until it has been enabled and checked.

[Main README](../README.md)
