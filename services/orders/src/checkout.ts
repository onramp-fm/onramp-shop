import { formatCents } from "@onramp/shared";

export type Cart = { items: { name: string; priceCents: number }[] };

export function renderCheckout(cart: Cart): string {
  const lines = cart.items.map((item) => `${item.name}  ${formatCents(item.priceCents)}`);
  const total = cart.items.reduce((sum, item) => sum + item.priceCents, 0);
  return [...lines, `Total  ${formatCents(total)}`].join("\n");
}
