// The notifications service builds the emails we send after an order.

export function receiptSubject(orderId: string): string {
  return `Your receipt for order ${orderId}`;
}
