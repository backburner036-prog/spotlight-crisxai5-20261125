import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry point: copy POST.json from the repository root into the output
// directory, so the grader can read the submitted X post URL from /output.
// The copy is verbatim and the program prints nothing on success.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
