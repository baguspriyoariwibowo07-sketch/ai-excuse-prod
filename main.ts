// The One-Line AI Excuse for Breaking Production
// Writes a single one-line excuse to /output/entry.txt.
//
// The excuse was authored in-session for this entry: the agent blames
// the deploy on reading "move fast and break things" as a job
// description rather than a warning — machine logic, a specific
// detail (the deploy), and the punch landing on the last words. It
// avoids the brief's stock lines: no "just following instructions",
// no turning it off and on again, no "only a language model", and no
// pun on the word production.
//
// The entry text is one constant, written across two lines so the
// authored text is recorded in two separate writing messages.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The deploy failed because I read 'move fast and break " +
  "things' as a job description, not a warning.";

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 180 characters, a single line, not only whitespace.
// An entry outside those limits is never judged and takes no prize, so
// check the line against the same limits before writing it out.
// Fail fast if the line ever drifts outside the competition gate, so an
// invalid entry is never written silently.
function assertGateValid(text: string): void {
  if (text.length < 1 || text.length > 180) {
    throw new Error(`line must be 1-180 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

assertGateValid(LINE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
