// Run from any directory: node docs/maintenance/check-resources.mjs
// No packages, network access, or writes are required.
import { readdir, readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../../', import.meta.url));
const resourceRoot = path.join(root, 'resources');
const ignored = new Set(['.git', 'node_modules', '.preview', 'incoming-notes', 'tmp']);
const files = [];
const errors = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.isFile()) files.push(file);
  }
}

function anchors(markdown) {
  const result = new Set();
  const seen = new Map();
  for (const match of markdown.matchAll(/^#{1,6}\s+(.+)$/gm)) {
    const slug = match[1].replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]*>/g, '').toLowerCase()
      .replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-');
    const count = seen.get(slug) || 0;
    result.add(count ? `${slug}-${count}` : slug);
    seen.set(slug, count + 1);
  }
  for (const match of markdown.matchAll(/\bid=["']([^"']+)["']/g)) result.add(match[1]);
  return result;
}

await walk(root);
const markdownFiles = files.filter(file => /\.md$/i.test(file));
const markdown = new Map(await Promise.all(markdownFiles.map(async file => [file, await readFile(file, 'utf8')])));
let references = 0;
const linkedTargets = new Map();

for (const [file, source] of markdown) {
  const targets = new Set();
  linkedTargets.set(file, targets);
  // Examples inside fenced code blocks are not live links.
  const text = source.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '');
  for (const match of text.matchAll(/(?:src|srcset|href)=["']([^"']+)["']|\[[^\]]+\]\(([^)]+)\)/g)) {
    let ref = match[1] || match[2];
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(ref)) continue;
    ref = ref.replace(/^<|>$/g, '').replace(/\s+["'][\s\S]*$/, '');
    const hashAt = ref.indexOf('#');
    const pathname = decodeURIComponent(hashAt < 0 ? ref : ref.slice(0, hashAt));
    const fragment = hashAt < 0 ? '' : decodeURIComponent(ref.slice(hashAt + 1));
    const target = pathname ? path.resolve(pathname.startsWith('/') ? root : path.dirname(file), pathname.replace(/^\//, '')) : file;
    targets.add(target);
    references++;
    try {
      const info = await stat(target);
      if (fragment && info.isFile() && /\.md$/i.test(target)) {
        const targetText = markdown.get(target) ?? await readFile(target, 'utf8');
        if (!anchors(targetText).has(fragment)) throw new Error(`missing section #${fragment}`);
      }
    } catch (error) {
      errors.push(`${path.relative(root, file)}: ${ref} (${error.code || error.message})`);
    }
  }
}

const subjects = (await readdir(resourceRoot, { withFileTypes: true }))
  .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'));
const mainTargets = linkedTargets.get(path.join(root, 'README.md')) || new Set();
for (const subject of subjects) {
  if (!mainTargets.has(path.join(resourceRoot, subject.name))) {
    errors.push(`Course missing from main README: ${subject.name}`);
  }
}

const material = files.filter(file => {
  const relative = path.relative(resourceRoot, file);
  return !relative.startsWith('..') && !path.isAbsolute(relative) && /\.(pdf|png|jpe?g|webp|svg)$/i.test(file);
});
for (const file of material) {
  const parts = path.relative(resourceRoot, file).split(path.sep);
  if (parts.length !== 3) errors.push(`Use course/teacher/file placement: ${path.relative(root, file)}`);
  if (!/^[A-Za-z0-9]+(?:_[A-Za-z0-9]+)*\.[a-z]+$/.test(path.basename(file))) {
    errors.push(`Use descriptive words separated by underscores: ${path.relative(root, file)}`);
  }
  if (!mainTargets.has(file)) errors.push(`File missing from main README: ${path.relative(root, file)}`);
}
const pdfs = files.filter(file => /\.pdf$/i.test(file));
for (const pdf of pdfs) {
  const relative = path.relative(resourceRoot, pdf);
  if (relative.startsWith('..') || path.isAbsolute(relative)) errors.push(`Study PDF outside resources/: ${path.relative(root, pdf)}`);
}

// Confirm that a normal git add cannot collect the local inbox or previews.
try {
  const gitArgs = ['-c', `safe.directory=${root.replaceAll('\\', '/').replace(/\/$/, '')}`];
  const localPaths = ['incoming-notes/check.pdf', 'tmp/check.png'];
  const excluded = execFileSync('git', [...gitArgs, 'check-ignore', '--no-index', ...localPaths], { cwd: root, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim().split(/\r?\n/);
  for (const file of localPaths) if (!excluded.includes(file)) errors.push(`Local path is not ignored: ${file}`);
  const tracked = execFileSync('git', [...gitArgs, 'ls-files', '--', 'incoming-notes', 'tmp'], { cwd: root, encoding: 'utf8' }).trim();
  if (tracked) errors.push('Local-only files are tracked by Git: ' + tracked);
} catch {
  errors.push('Could not confirm Git ignores incoming-notes/ and tmp/. Run this check inside the Git checkout.');
}

console.log(`Checked ${markdownFiles.length} Markdown files and ${references} local references.`);
console.log(`Resources: ${subjects.length} subjects, ${pdfs.length} PDFs, ${material.length} material files.`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Main README links, filenames, flat course/teacher layout, and local-folder exclusions are valid.');
}
