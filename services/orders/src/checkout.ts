import { formatCents } from "@onramp/shared";

export type Cart = { items: { name: string; priceCents: number }[] };

export function renderCheckout(cart: Cart, discountCents = 0): string {
  const lines = cart.items.map((item) => `${item.name}  ${formatCents(item.priceCents)}`);
  const subtotal = cart.items.reduce((sum, item) => sum + item.priceCents, 0);
  const discount = discountCents > 0 ? [`Discount  -${formatCents(discountCents)}`] : [];
  return [...lines, ...discount, `Total  ${formatCents(subtotal - discountCents)}`].join("\n");
}
