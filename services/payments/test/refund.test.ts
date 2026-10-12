import { test } from "node:test";
import assert from "node:assert/strict";
import { buildRefund } from "../src/refund.ts";

test("refunds the full amount by default", () => {
  assert.equal(buildRefund("ch_1", 1110).amountCents, 1110);
});

test("refunds part of the amount when asked", () => {
  assert.equal(buildRefund("ch_1", 1110, 500).amountCents, 500);
});
