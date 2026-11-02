// Prints the workspaces a pull request touches, as a JSON list, for ci-matrix.yml.
//   node scripts/changed-services.ts origin/main HEAD
//   -> ["packages/shared","services/orders","services/payments"]
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";

const [base = "origin/main", head = "HEAD"] = process.argv.slice(2);
const files = execFileSync("git", ["diff", "--name-only", `${base}...${head}`], { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

const services = readdirSync("services").map((name) => `services/${name}`);
const everything = ["packages/shared", ...services];

// A change to these files can break any service, so every workspace is tested.
const ROOT_FILES = ["package.json", "package-lock.json", "tsconfig.base.json", ".github/workflows/ci-matrix.yml"];

// Which services use packages/shared? Read it from their package.json.
const usesShared = services.filter((dir) => {
  const pkg = JSON.parse(readFileSync(`${dir}/package.json`, "utf8"));
  return "@onramp/shared" in (pkg.dependencies ?? {});
});

const affected = new Set<string>();
for (const file of files) {
  const service = services.find((dir) => file.startsWith(`${dir}/`));
  if (service) affected.add(service);
  if (file.startsWith("packages/shared/")) ["packages/shared", ...usesShared].forEach((d) => affected.add(d));
  if (ROOT_FILES.includes(file)) everything.forEach((d) => affected.add(d));
}

console.log(JSON.stringify(everything.filter((d) => affected.has(d))));
