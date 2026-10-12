// Stands in for a test that talks to a real database.
// In CI the workflows set SIMULATED_DB_SECONDS=40, so this test waits 40 seconds
// and the time difference between ci-simple and ci-matrix is easy to see.
// On your laptop it is 0, so the tests run instantly.
import { test } from "node:test";

test("saves and reads a record (simulated database test)", async () => {
  const seconds = Number(process.env.SIMULATED_DB_SECONDS ?? 0);
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
});
