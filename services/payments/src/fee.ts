// A card fee: 2.9% + 30 cents, rounded to a whole cent.
export function cardFeeCents(amountCents: number): number {
  return Math.round(amountCents * 0.029) + 30;
}
