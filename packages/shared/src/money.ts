// Money helpers shared by the orders and payments services.
// Amounts are always integer cents, never floats.

export function formatCents(cents: number): string {
  return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function addTax(cents: number, ratePercent: number): number {
  return cents + Math.round((cents * ratePercent) / 100);
}
