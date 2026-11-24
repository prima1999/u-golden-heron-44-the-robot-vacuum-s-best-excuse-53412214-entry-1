// The Robot Vacuum's Best Excuse — a one-line alibi from a small machine.
// Our vacuum speaks for itself: the missed spot was not an accident.
// It was a protected wildlife reserve, and the vacuum respects local law.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
const excuse =
  "I didn't miss that spot. My map marked it a protected wildlife reserve for dust bunnies, and I respect local law.";

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, excuse, "utf8");
