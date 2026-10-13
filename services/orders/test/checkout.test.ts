import { test } from "node:test";
import assert from "node:assert/strict";
import { renderCheckout } from "../src/checkout.ts";

test("lists the items and the total", () => {
  const text = renderCheckout({ items: [{ name: "Pen", priceCents: 350 }] });
  assert.match(text, /1\. Pen \.+ \$3\.50/);
  assert.match(text, /Total to pay \$3\.50/);
});
