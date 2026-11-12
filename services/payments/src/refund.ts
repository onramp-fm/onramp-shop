export type Refund = { chargeId: string; amountCents: number; reason: string };

// Every refund now needs a reason, for the finance team's reports.
export function buildRefund(chargeId: string, chargedCents: number, reason: string, amountCents?: number): Refund {
  return { chargeId, amountCents: amountCents ?? chargedCents, reason };
}
