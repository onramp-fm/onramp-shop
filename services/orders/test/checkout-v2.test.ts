import { test } from "node:test";
import assert from "node:assert/strict";
import { renderCheckoutV2 } from "../src/checkout-v2.ts";

test("shows the total with tax", () => {
  const text = renderCheckoutV2({ items: [{ name: "Pen", priceCents: 1000 }] });
  assert.match(text, /Total with 11% tax \$11\.10/);
});

test("tells you how much more you need for free delivery", () => {
  const text = renderCheckoutV2({ items: [{ name: "Pen", priceCents: 1000 }] });
  assert.match(text, /Add \$40\.00 for free delivery/);
});
