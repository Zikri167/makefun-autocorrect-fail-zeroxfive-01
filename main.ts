const fs = require("node:fs");
const path = require("node:path");

const ENTRY = "Don't forget, Emma has porno lessons on Tuesdays at 4.";

if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error("entry must be 1-199 characters, got " + ENTRY.length);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
