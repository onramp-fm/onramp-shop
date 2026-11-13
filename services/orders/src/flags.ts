// Feature flags: one default, one owner, one removal date each.
// test/flags.test.ts fails the build when a removeBy date has passed.

export const flags = {
  checkoutV2: {
    default: false,
    owner: "@onramp-demo-moustafawehbe/orders-team",
    removeBy: "2027-01-31", // a date, not "soon"
    env: "FLAG_CHECKOUT_V2", // set it to "on" to try the new checkout
  },
  ordersCsvExport: {
    default: true,
    owner: "@onramp/orders-team",
    removeBy: "2026-10-15", // "we'll clean it up after launch"
    env: "FLAG_ORDERS_CSV_EXPORT",
  },
};

export type FlagName = keyof typeof flags;

export function isEnabled(name: FlagName): boolean {
  const value = process.env[flags[name].env];
  return value === undefined ? flags[name].default : value === "on";
}
