# ADR-0002: Test every service on every pull request

## Status
Accepted - 2026-10-12

## Context
We have three services and the full test run takes about two minutes.
We want one simple workflow that nobody has to maintain.

## Options considered
- Test every workspace on every PR, in one job - simplest, gets slower with
  every service we add
- Test only the workspaces a PR changes - faster, but we must keep the list
  of who-depends-on-what correct

## Decision and consequences
One job tests everything (.github/workflows/ci-simple.yml).
Cost: every PR waits for every service's tests, even a one-line change.
Revisit when a PR regularly waits more than five minutes.
