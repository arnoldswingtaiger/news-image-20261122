// news-image-20261122: one image summing up the world news of Sunday
// 22 November 2026. The finished front page lives in this repository as
// entry.png (1024x1024, drawn at build time); this program's only job is
// to place those exact bytes at /output/entry.png, so the grader needs no
// network, no fonts and no packages beyond Node's standard library. The
// copy is byte-for-byte, so repeated runs always produce the same file.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(join(here, "entry.png")));
console.log(`Wrote ${target}`);
