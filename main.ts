// 3 AM Hotfix: writes the entry commit message to $MAKEFUN_OUTPUT_DIR/entry.txt.
// One line, no trailing newline, under 180 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "hotfix: rolled back to Friday. Friday was also broken, but it broke slower.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), line, "utf8");
console.log(line);
