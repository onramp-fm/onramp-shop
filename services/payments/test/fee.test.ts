import { test } from "node:test";
import assert from "node:assert/strict";
import { cardFeeCents } from "../src/fee.ts";

test("charges 2.9% + 30 cents", () => {
  assert.equal(cardFeeCents(1000), 59);
});
