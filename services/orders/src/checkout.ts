import { formatCents } from "@onramp/shared";

// A cart is a list of items with prices in cents.
export type Cart = { items: { name: string; priceCents: number }[] };

export function renderCheckout(cart: Cart, discountCents = 0): string {
  const lines = cart.items.map((item) => `${item.name}  ${formatCents(item.priceCents)}`);
  const subtotal = cart.items.reduce((sum, item) => sum + item.priceCents, 0);
  const discount = discountCents > 0 ? [`Discount  -${formatCents(discountCents)}`] : [];
  const total = Math.max(0, subtotal - discountCents); // a discount never makes the total negative
  return [...lines, ...discount, `Total  ${formatCents(total)}`].join("\n");
}
