// Delivery notes a customer can add to an order, like "leave it at the door".
export function cleanDeliveryNote(note: string): string {
  return note.trim().slice(0, 200);
}
