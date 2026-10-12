import { test } from "node:test";
import assert from "node:assert/strict";
import { receiptSubject } from "../src/email.ts";

test("puts the order id in the subject", () => {
  assert.equal(receiptSubject("o_42"), "Your receipt for order o_42");
});
