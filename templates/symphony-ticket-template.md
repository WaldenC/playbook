# Symphony Ticket Template — will be picked up

> Inferred from `elixir/WORKFLOW.md` + `orchestrator.ex:should_dispatch_issue?`. No official example ticket exists in repo.

## When ticket runs
- State = `Todo` (not Backlog/Done) — WORKFLOW.md:7-11
- In project `symphony-0c79b11b75ea`
- Has `title` + `state`, no missing `required_labels` (here `[]` = any label ok)

## Copy-paste into Linear Description

```md
## What
One sentence: verb + area + where.
Example: Limit POST /api/login to 5 fails per 10s per IP

## Current vs Expected
- Current: what you see now + how to see it
- Expected: what you should see after fix
Example: Current: 6 fails → still 200 / Expected: 6th fail in 10s → 429

## Scope
- Do: which files/area
- Don't: what NOT to touch
Example: Do: lib/auth.ex / Don't: change UI or DB

## Validation ← copied verbatim into ## Codex Workpad, must be green before Human Review (WORKFLOW.md:88, 295-330)
- [ ] `mix test test/auth_test.exs --only rate_limit` green
- [ ] curl 6x bad pwd in 10s → last is 429 "too many tries"
```

`## Codex Workpad` = one Linear comment under the ticket — agent reuses the same comment for Plan / Acceptance Criteria / Validation / Notes.

## Quick check before dragging to Todo
1. Title has a verb?
2. Current vs Expected tells how to reproduce?
3. Validation has 2-3 runnable commands?

If yes → picks up in ~5s, finishes in one pass.

## Filled example
Title: `Fix: rate-limit POST /api/login to 5/10s`
State: `Todo`
Description: see template above filled.
