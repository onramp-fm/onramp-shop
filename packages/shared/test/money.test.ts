import { test } from "node:test";
import assert from "node:assert/strict";
import { addTax, formatCents } from "../src/money.ts";

test("formats cents as dollars", () => {
  assert.equal(formatCents(2900), "$29.00");
});

test("adds tax and rounds to a whole cent", () => {
  assert.equal(addTax(999, 11), 1109);
});

test("adds a thousands separator", () => {
  assert.equal(formatCents(123456), "$1,234.56");
});
