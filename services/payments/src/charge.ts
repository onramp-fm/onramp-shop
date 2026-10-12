import { addTax } from "@onramp/shared";

export type Charge = { orgId: string; amountCents: number };

// Builds the charge we send to the card provider. Tax is 11% for the demo.
export function buildCharge(orgId: string, subtotalCents: number): Charge {
  return { orgId, amountCents: addTax(subtotalCents, 11) };
}
