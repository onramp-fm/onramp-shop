import { test } from "node:test";
import assert from "node:assert/strict";
import { renderCheckout } from "../src/checkout.ts";

test("lists the items and the total", () => {
  const text = renderCheckout({ items: [{ name: "Pen", priceCents: 350 }] });
  assert.match(text, /Pen {2}\$3\.50/);
  assert.match(text, /Total {2}\$3\.50/);
});

test("shows a discount line when there is a discount", () => {
  const text = renderCheckout({ items: [{ name: "Pen", priceCents: 350 }] }, 50);
  assert.match(text, /Discount {2}-\$0\.50/);
  assert.match(text, /Total {2}\$3\.00/);
});
