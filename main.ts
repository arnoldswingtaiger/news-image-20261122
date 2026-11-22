// Entry for news-image-20261122.
//
// What this does: the newspaper front page for Sunday 22 November 2026
// was drawn when the entry was built and saved next to this file as
// entry.png. At grading time this script just moves those bytes to the
// place the grader looks, /output/entry.png (or $MAKEFUN_OUTPUT_DIR when
// that is set, for running it by hand). Nothing is fetched, nothing is
// drawn at run time, and there are no dependencies beyond the Node
// standard library, so running it twice writes the same bytes twice.
// The image is 1024x1024 and under 1 MiB, inside the competition's limits.
//
// Try it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (!existsSync(destinationDir)) {
  mkdirSync(destinationDir, { recursive: true });
}

const destination = join(destinationDir, "entry.png");
copyFileSync(source, destination);

const written = statSync(destination).size;
console.log(`entry.png (${written} bytes) -> ${destination}`);
