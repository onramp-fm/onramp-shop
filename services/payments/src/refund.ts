export type Refund = { chargeId: string; amountCents: number };

// A full refund unless an amount is given.
export function buildRefund(chargeId: string, chargedCents: number, amountCents?: number): Refund {
  return { chargeId, amountCents: amountCents || 0 };
}
