# README artwork

The opening uses a compact, transparent title rather than a banner. Its lettering is outlined Inter, matching the typography of the profile reference without requiring a font download.

| Asset | Use |
| :--- | :--- |
| `intro-title-light.svg` / `intro-title-dark.svg` | Compact title with the project's university-red identity, with a brighter red for dark-mode legibility |
| `intro-title-compact-light.svg` / `intro-title-compact-dark.svg` | Two-line phone title, keeping the lettering readable beside the building |
| `department-building.webp` | Transparent architectural illustration of the department building from the user's photograph |
| `ubit-results-button.svg` | Results website link button with the existing university emblem, outlined lettering, and the site's actual red |
| `dsa-tree-light.svg` / `dsa-tree-dark.svg` | Original binary-search-tree diagram beside The DSA Blueprint, highlighting a valid search path from 8 to 4 to 6 |
| `study-notes.svg` | Original book-and-pencil illustration beside the study workflow |
| `ubit-emblem.webp` | Small display export of the user-provided university emblem in the community section |

The building uses the same responsive float as the profile's opening artwork. It preserves the department's cream facade, dome, columns, stairs, and two wings, with a transparent background. The display export is 768 pixels wide; the original generated output remains unchanged in the image-generation output directory. Its generation prompts and provenance are in [source/department-building.prompt.json](./source/department-building.prompt.json).

Palette: university red `#8F141B`, dark-theme red `#C72B34`, charcoal `#242021`, and warm ivory `#F6F0E8`. The base red is taken directly from the Results project's source (`src/components/nav.tsx` and other UI components). The dark variant increases brightness while retaining the red hue, replacing the previous dusty rose. The Results button uses the exact `#8F141B` on a light surface in both themes.

Inter is by The Inter Project Authors, licensed under the SIL Open Font License 1.1; see [Inter-OFL.txt](./Inter-OFL.txt). The title files contain paths, with an accessible title and description, and no external resources.

The emblem is reused from the [profile's existing emblem asset](https://github.com/codewithmahad/codewithmahad/blob/main/assets/profile/ubit-emblem.png). The display export preserves transparency and uses a 256-pixel width for a sharp, lightweight image at the README's small display size. The book illustration is native SVG with no fonts, scripts, filters, or external dependencies.

The DSA tree is native SVG, with theme-specific node and edge colors, accessible text, and no external dependencies. The course index remains native text and links. GitHub's table borders and row striping cannot be removed with README inline CSS, so the index uses borderless paragraphs instead of a table.

`hero.svg`, `archive-card.svg`, `closing-mark.svg`, and `intro-space.svg` belong to previous iterations and are no longer referenced by the root README.
