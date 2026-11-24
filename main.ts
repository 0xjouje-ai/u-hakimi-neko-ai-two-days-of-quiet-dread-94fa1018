// Two Days of Quiet Dread — a one-line code review comment that approves
// a pull request while carrying quiet existential dread.
//
// Deterministic, Node stdlib only, no network. Writes the comment to
// /output/entry.txt (exactly one line, no trailing newline).
import { mkdirSync, writeFileSync } from 'node:fs';

const COMMENT =
  'Approved. The tests pass, the diff is clean, and in a hundred years no one will remember any of this, including us.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', COMMENT, 'utf8');
