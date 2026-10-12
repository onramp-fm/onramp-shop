# ADR-0001: One repository for all our services

## Status
Accepted - 2026-10-12

## Context
We run three small services (orders, payments, notifications) and one
shared package. One team of six works on all of them. Changes to the shared
money helpers often need changes in two services at the same time.

## Options considered
- One repository per service - clear boundaries, but a shared change
  becomes three PRs that must be merged and released in the right order
- One repository for everything (a monorepo) - one PR for a change that
  crosses services, one CI setup, one place to search

## Decision and consequences
One repository, with npm workspaces: one folder per service.
Cost: CI must learn to test only what changed, or every PR gets slower
as we add services. Ownership must be written down per folder (CODEOWNERS),
because "the team owns the repo" no longer says who reviews what.
