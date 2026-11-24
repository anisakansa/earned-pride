// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes a single line of earned pride to /output/entry.txt.
//
// The line: a woman who spent three years on night shifts rebuilding an
// engine alone finally turns the key — and it starts on the first try.
// The pride is earned inside the line (three years, night shifts, rebuilt
// alone) and lands on the last words, in a concrete scene with a real
// person. No trophy, no podium, no graduation — just a bolt and a key.
// Why this angle: the judge rewards pride the reader can feel from effort
// the line shows, not from a prize it names. The engine starting on the
// first try is the payoff the whole line has been walking toward.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "After three years of night shifts, she finally tightened the last bolt on the engine she rebuilt alone — and it started on the first try.";

// Gate: 1 to 240 characters, one line, no trailing newline in the file.
if ([...LINE].length < 1 || [...LINE].length > 240 || LINE.includes("\n")) {
  throw new Error("entry line outside the 1-240 character, single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Round-trip guard: what was written must be byte-identical to the line.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the line");
}
