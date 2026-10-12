import { test } from "node:test";
import assert from "node:assert/strict";
import { buildCharge } from "../src/charge.ts";

test("adds 11% tax to the subtotal", () => {
  assert.deepEqual(buildCharge("acme", 1000), { orgId: "acme", amountCents: 1110 });
});
