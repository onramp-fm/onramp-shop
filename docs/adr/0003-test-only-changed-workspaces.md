# ADR-0003: Test only the workspaces a pull request changes

## Status
Accepted - 2026-11-05 - supersedes ADR-0002

## Context
Every PR waits about 2.5 minutes for every service's tests, even a
one-line change to payments. We plan two more services this quarter.

## Options considered
- Keep testing everything (ADR-0002) - simple, but slower with each service
- Buy bigger CI machines - same wait per service, higher bill
- Test only changed workspaces, in parallel - about 1 minute, but
  scripts/changed-services.ts must know who uses packages/shared

## Decision and consequences
ci-matrix.yml: a changes job, then one test job per changed workspace,
and one required check, ci-ok.
Cost: if changed-services.ts is wrong, a broken service can merge green.
Any change to package.json, the lockfile or the workflow tests everything.
