# onramp-shop

A small monorepo for a class demo: three services and one shared package.

    services/orders          GET /checkout     npm start -w services/orders
    services/payments        charges and refunds
    services/notifications   receipt emails
    packages/shared          money helpers used by orders and payments

Run everything locally (needs Node 24):

    npm ci
    npm run typecheck
    npm test

Which workspaces would a branch's CI test?

    npm run changed -- main HEAD
