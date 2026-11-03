# Contributing to The UBIT Hub Resources

Thank you for considering a contribution. This repository exists to make academic preparation better for UBIT students — every well-documented addition makes a real difference.

---

## What We Accept

| ✅ Accepted | ❌ Not Accepted |
|------------|----------------|
| Handwritten notes (clean, complete, readable) | Incomplete or unclear notes |
| Typed/compiled study guides | Academically restricted material (solved exam papers, etc.) |
| Textbook chapter extracts | Unverified or inaccurate content |
| MCQ banks and practice material | Files with no clear label or context |
| Course outlines and syllabi | Duplicate files that already exist |

---

## File Naming Convention

All files must follow this naming format before submission:

```
CourseName_ResourceType_AuthorOrSource.pdf
```

**Examples:**
- `DLD_Handwritten_Notes_YourName.pdf`
- `SRE_MCQ_Bank_Compiled.pdf`
- `LinearAlgebra_Complete_Notes_MissFoziaHanif.pdf`

No spaces. No special characters. No vague names like `notes.pdf` or `final.pdf`.

---

## How to Contribute

1. **Fork** this repository.
2. **Create a branch** named after what you're adding: `add/dld-assignment-solutions`.
3. **Place your files** in the correct subject directory under `resources/`. If the subject doesn't exist yet, use a lowercase, hyphen-separated name such as `resources/object-oriented-programming/`.
4. **Update the course `README.md`** to include your new file with a clear description. Refresh the main README's resource totals if the file count changes.
5. **Open a Pull Request** with a title like: `feat: add DLD assignment solutions`.

---

## Adding a New Course

If you are adding resources for a course that doesn't have a folder yet:

1. Create a folder inside `resources/` with a lowercase, hyphen-separated name, such as `resources/object-oriented-programming/`. Keep new subjects out of the repository root.
2. Inside, create sub-folders as needed: `handwritten-notes/`, `reference-books/`, `reference-books/extracted-chapters/`
3. Create a `README.md` for the course following the same format as the existing course READMEs (SRE or DLD are good references).
4. Add the subject to the main `README.md` course index and `resources/README.md`, including a recommended starting document. Refresh the root README's subject and PDF counts.

---

## Check Your Changes

Before submitting, open your links to confirm they reach the intended files. Keep author credits and source notices with the material.

If you are working locally with Node.js, you can also run:

```sh
node docs/maintenance/check-resources.mjs
```

This checks local Markdown links, subject and PDF counts, and that study PDFs stay under `resources/`. You can contribute through GitHub without installing Node.js.

---

## Questions

If you're unsure about anything before submitting, open an Issue and describe what you want to add. Happy to guide from there.

— [Shaikh Mahad](https://github.com/codewithmahad)
