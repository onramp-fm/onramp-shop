// The new checkout. Merged to main while unfinished, hidden behind the checkoutV2 flag.
import { addTax, formatCents } from "@onramp/shared";
import type { Cart } from "./checkout.ts";

export function renderCheckoutV2(cart: Cart): string {
  const subtotal = cart.items.reduce((sum, item) => sum + item.priceCents, 0);
  return [
    "Your order",
    ...cart.items.map((item) => `  ${item.name} ........ ${formatCents(item.priceCents)}`),
    `Subtotal ${formatCents(subtotal)}`,
    `Total with 11% tax ${formatCents(addTax(subtotal, 11))}`,
  ].join("\n");
}
