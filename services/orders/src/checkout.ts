import { formatCents } from "@onramp/shared";

export type Cart = { items: { name: string; priceCents: number }[] };

export function renderCheckout(cart: Cart): string {
  const lines = cart.items.map((item, i) => `${i + 1}. ${item.name} ........ ${formatCents(item.priceCents)}`);
  const total = cart.items.reduce((sum, item) => sum + item.priceCents, 0);
  return ["Your order", ...lines, `Total to pay ${formatCents(total)}`].join("\n");
}
// TODO: payment step
