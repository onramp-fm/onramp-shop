// Usage: npm run set-org -- <your-github-org>
// Rewrites the "@onramp/" team handles in CODEOWNERS and the flag owners
// to your organisation's name, so they point at teams that exist.
import { readFileSync, writeFileSync } from "node:fs";

const org = process.argv[2];
if (!org) {
  console.error("Usage: npm run set-org -- <your-github-org>");
  process.exit(1);
}
for (const file of [".github/CODEOWNERS", "services/orders/src/flags.ts"]) {
  try {
    writeFileSync(file, readFileSync(file, "utf8").replaceAll("@onramp/", `@${org}/`));
    console.log(`Updated ${file}`);
  } catch {
    // flags.ts only exists once checkout v2 is merged
  }
}
