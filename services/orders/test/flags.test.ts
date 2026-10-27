import { test } from "node:test";
import assert from "node:assert/strict";
import { flags, isEnabled } from "../src/flags.ts";

test("no flag is past its removeBy date", () => {
  const today = new Date().toISOString().slice(0, 10);
  for (const [name, flag] of Object.entries(flags)) {
    assert.ok(flag.removeBy >= today, `Flag "${name}" expired on ${flag.removeBy}. Owner: ${flag.owner}. Remove it, or move the date in a reviewed PR.`);
  }
});

test("checkoutV2 is off unless FLAG_CHECKOUT_V2=on", () => {
  delete process.env.FLAG_CHECKOUT_V2;
  assert.equal(isEnabled("checkoutV2"), false);
  process.env.FLAG_CHECKOUT_V2 = "on";
  assert.equal(isEnabled("checkoutV2"), true);
  delete process.env.FLAG_CHECKOUT_V2;
});
