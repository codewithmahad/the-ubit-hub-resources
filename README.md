<h1 id="top">
  <img src="assets/readme/department-building.webp" align="right" width="36%" alt="Illustration of the UBIT department building, with its dome, columned entrance, and cream facade.">
  <picture>
    <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="assets/readme/intro-title-compact-dark.svg">
    <source media="(max-width: 600px)" srcset="assets/readme/intro-title-compact-light.svg">
    <source media="(prefers-color-scheme: dark)" srcset="assets/readme/intro-title-dark.svg">
    <img src="assets/readme/intro-title-light.svg" width="56%" height="42" align="texttop" alt="The UBIT Hub Resources">
  </picture>
</h1>

**A notes bank by UBIT students, for this batch and the next.**

When I study a difficult course, I make notes and share them in **The UBIT Hub**, the WhatsApp community I run for students at the University of Karachi. My friends share theirs too. But PDFs get lost in chats, and someone has to ask for the same file again. Here, you can find those notes even when we’re offline.

Keep up with a course, revise before an exam, or start learning during the semester break. Students from **any UBIT batch or program** are welcome to use the notes and share their own.

<p>
  <a href="#find-your-course">Courses</a>&nbsp;·
  <a href="#how-to-use-this-repo">How&nbsp;to&nbsp;use</a>&nbsp;·
  <a href="#the-dsa-blueprint">DSA&nbsp;Blueprint</a>&nbsp;·
  <a href="#ubit-results-portal">Results&nbsp;&amp;&nbsp;GPA</a>&nbsp;·
  <a href="#help-improve-the-library">Contribute</a>&nbsp;·
  <a href="#the-ubit-hub">Community</a>
</p>

## Find your course

**6 subjects · 12 PDFs · 1 logic-gates reference sheet.** Choose a course, then look for your teacher and a set that matches your outline. You can also [browse all subjects](./resources/).

<details>
<summary><strong>Browse courses and notes</strong></summary>

- **[Communication & Presentation Skills](./resources/communication-and-presentation-skills/)**: [Complete course notes](./resources/communication-and-presentation-skills/sir-fazal-ur-rehman/course-notes/CPS_Complete_Notes.pdf).
- **[Data Structures & Algorithms](./resources/data-structures-and-algorithms/)**: [The DSA Blueprint](./resources/data-structures-and-algorithms/general/the-dsa-blueprint/The-DSA-Blueprint-Roadmap.pdf).
- **[Digital Logic Design](./resources/digital-logic-design/)**: [Final Exam Target Guide](./resources/digital-logic-design/sir-bari/exam-guide/DLD_Final_Exam_Target_Guide.pdf).
- **[Linear Algebra](./resources/linear-algebra/)**: [Notes from Miss Fozia Hanif’s course](./resources/linear-algebra/miss-fozia-hanif/semester-notes/linear-algebra-complete-notes-Miss-Fozia-Hanif.pdf).
- **[Software Requirement Engineering](./resources/software-requirement-engineering/)**: [Course outline](./resources/software-requirement-engineering/sir-hussain-saleem/course-outline/SE453_SRE_Course_Outline.pdf), then [comprehensive notes](./resources/software-requirement-engineering/sir-hussain-saleem/shaikh-mahad-notes/SE453_SRE_Comprehensive_Notes_ShaikhMahad.pdf).
- **[Urdu](./resources/urdu/)**: [Comprehensive notes](./resources/urdu/sir-dr-m-sajid-khan/shaikh-mahad-notes/Urdu_Comprehensive_Notes_ShaikhMahad.pdf).

The **course name** opens the notes grouped by teacher. The link beside it opens one available PDF. Each set records its author or chosen credit, coverage, and any known program, term, or programming language. If the notes you need are missing, [request them](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new?template=notes-request.yml).

</details>

## How to use this repo

<img src="assets/readme/study-notes.svg" align="right" width="16%" alt="">

1. **Find a matching set.** Open your course guide and check the teacher, topics, and language where relevant. CS and SE notes may cover the same course differently; missing details are marked.
2. **Read or download.** Read the PDF on GitHub, or use the file viewer’s download button to save it. You don’t need to clone the repo or install anything.

Compare the notes with your current outline, even if the teacher is the same. A course can change between batches.

<details>
<summary>PDF not opening?</summary>

Try the download button in the file viewer and open the saved file. If it still fails, [report the filename](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new?template=resource-problem.yml) so we can check it.

</details>

## The DSA Blueprint

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/dsa-tree-dark.svg">
  <img src="assets/readme/dsa-tree-light.svg" align="right" width="18%" alt="A binary search tree with the path from 8 to 4 to 6 highlighted.">
</picture>

I wrote **The DSA Blueprint** for students who know programming basics but aren’t sure what to learn next. It gives you an order to follow and practice problems to try along the way.

**31 pages · 6 phases · practice links · 16-week printable tracker**

**[Read the roadmap →](./resources/data-structures-and-algorithms/general/the-dsa-blueprint/The-DSA-Blueprint-Roadmap.pdf)** &nbsp;·&nbsp; [See the study guide](./resources/data-structures-and-algorithms/)

## UBIT Results Portal

I built **UBIT Results** with the same idea behind this library: students should not have to search through scattered posts and spreadsheets for something important. It brings your results, GPA, class standing, and transcript together in one place, so you can understand your progress without doing the calculations yourself. I am still improving it for our students, so if something is missing or looks wrong, [let me know](mailto:codewithmahad@gmail.com) and I will check it.

<p>
  <a href="https://ubit-results.vercel.app/"><img src="assets/readme/ubit-results-button.svg" width="210" height="44" alt="UBIT Results: open the results and GPA website"></a>
</p>

## Help improve the library

If you made notes that helped you understand a course, someone else could use them too. Scan the pages while you still know which notebook they’re in. A clear set on one difficult topic is welcome; say what it covers and what’s missing.

- **Share your notes:** [follow the contribution guide](./CONTRIBUTING.md) and open a pull request, a proposed addition we review before it joins the collection. You can choose a name, alias, or no public author credit.
- **Ask for notes or a correction:** [request a set](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new?template=notes-request.yml) or [report a problem](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new?template=resource-problem.yml). Include the course and teacher so others can help.

<details>
<summary><strong>How the notes are organized</strong></summary>

```text
resources/
└── course/
    ├── README.md
    ├── teacher/
    │   ├── README.md
    │   ├── one-notes-set/
    │   │   ├── README.md
    │   │   └── notes.pdf
    │   └── another-notes-set/
    └── general/
        └── shared-study-guide/
```

Each student’s set stays separate, even when the course and teacher match. Program, term, language, and coverage help you choose between them. Shared guides go in `general/`; material whose teacher is not yet known goes in `teacher-not-recorded/`.

See the [folder and naming guide](./CONTRIBUTING.md#where-your-notes-go) before adding a set.

</details>

<h2 id="the-ubit-hub"><img src="assets/readme/ubit-emblem.webp" align="right" width="12%" alt="Department of Computer Science, UBIT, University of Karachi emblem.">From our batch to yours</h2>

I’m **Shaikh Mahad Ud Din**. I don’t want the work we put into these courses to disappear with our old notebooks. A junior studying with the same teacher could use it next semester, and later leave their own notes for someone else. I want this to keep going after I graduate, with students adding material and trusted maintainers looking after it.

Have a study question or want to compare how a course is taught? [Start a conversation](https://github.com/codewithmahad/the-ubit-hub-resources/issues/new?template=study-question.yml). Include the course and what you’ve tried, and help another student when you can.

If these notes helped, **[star the repo](https://github.com/codewithmahad/the-ubit-hub-resources)** so you can find it again, and pass the course link on. Follow me for more notes and projects I’m building for students.

<p>
  <a href="https://github.com/codewithmahad"><img src="assets/readme/follow-github.svg" width="184" height="40" alt="Follow Shaikh Mahad on GitHub"></a>
  <a href="https://shaikhmahad.vercel.app/"><img src="assets/readme/portfolio-button.svg" width="146" height="40" alt="mahad.dev: visit my portfolio"></a>
  <a href="mailto:codewithmahad@gmail.com"><img src="assets/readme/email-button.svg" width="96" height="40" alt="Email Shaikh Mahad"></a>
</p>

## Credits & permissions

Keep the author’s credit and check the terms before reusing a file. This repo’s [MIT license](./LICENSE) doesn’t give permission to redistribute someone else’s work. For a missing credit or a removal request, [email me](mailto:codewithmahad@gmail.com).

<p><sub>Maintained by <a href="https://github.com/codewithmahad">Shaikh Mahad Ud Din</a> &nbsp;·&nbsp; <a href="./LICENSE">Repository license</a> &nbsp;·&nbsp; <a href="#top">Back to top ↑</a></sub></p>
