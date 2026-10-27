// The orders service: one HTTP endpoint, GET /checkout.
// Run it with: npm start -w services/orders   then open http://localhost:3001/checkout
// New checkout: FLAG_CHECKOUT_V2=on npm start -w services/orders
import { createServer } from "node:http";
import { renderCheckout, type Cart } from "./checkout.ts";
import { renderCheckoutV2 } from "./checkout-v2.ts";
import { isEnabled } from "./flags.ts";

const PORT = 3001;
const demoCart: Cart = {
  items: [
    { name: "Notebook", priceCents: 1200 },
    { name: "Pen", priceCents: 350 },
  ],
};

createServer((req, res) => {
  if (req.url !== "/checkout") {
    res.writeHead(404).end("Not found\n");
    return;
  }
  const body = isEnabled("checkoutV2") ? renderCheckoutV2(demoCart) : renderCheckout(demoCart);
  res.writeHead(200, { "content-type": "text/plain" }).end(body + "\n");
}).listen(PORT, () => console.log(`orders service on http://localhost:${PORT}/checkout`));
