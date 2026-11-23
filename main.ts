// 3 AM Hotfix entry (make.fun program/v1): writes ONE commit message line to
// $MAKEFUN_OUTPUT_DIR/entry.txt — under 180 chars, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "hotfix: rolled back to Friday. Friday was also broken, but it broke slower.";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), line, "utf8");
console.log(line);
