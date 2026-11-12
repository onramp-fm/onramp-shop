import { test } from "node:test";
import assert from "node:assert/strict";
import { cleanDeliveryNote } from "../src/notes.ts";

test("trims the note and keeps at most 200 characters", () => {
  assert.equal(cleanDeliveryNote("  at the door  "), "at the door");
  assert.equal(cleanDeliveryNote("x".repeat(300)).length, 200);
});
