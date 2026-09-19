# Handoff: manage-the-slope career dashboard

Read this before touching `manage-the-slope.html` so you don't redo or undo decisions.

## What this is

Single-page HTML thinking tool for reasoning about SWE career growth from SDE1 → SDE2 →
Tenured SDE2 → next level. Core thesis: **title progression is not scope progression.**

It is explicitly **not** a recommendation engine. It never outputs "stay" or "leave".

## The two constraints that shape everything

1. **Diagram-driven, under 300 words of prose.** Currently 297 rendered words, ~111 hover
   tooltips carrying the actual depth. When adding anything, check both the word count and
   that the tooltip does not overflow the viewport.
2. **No input.** The user does not type, tick, or fill anything in. There is exactly one
   input type on the page — the 12 range sliders in the Lab — and they are pre-loaded with
   illustrative archetypes so the page explains itself before anyone touches them.

An earlier revision had a 12-question editable checklist with notes, plus tickable evidence
checkboxes. The user removed it: *"I do not need a checklist, I will not input anything here."*
Do not reintroduce it.

## Structure

| § | Section | Form |
|---|---|---|
| 01 | Slope (hero) | Trajectory rail + flat-vs-steep comparison matrix over 4 curves |
| 02 | **Decision framework** | 4 stages: Diagnose → Classify → Evaluate → Reassess |
| 03 | Post-promotion plateau | Before/after timeline; 7 glossary chips, tooltips only |
| 04 | Second-tier work | 3 cards, each with a path caption (`work → skill` etc.) |
| 05 | Options | Stay/Transfer/Move trade matrix, deliberately unranked |
| 06 | Career capital | Equation + the "relabelled" trap |
| 07 | Lab | 12 sliders → 6-axis radar + delta bars, icon-labelled |
| 08 | Mindset | 10 principle tiles + closing statement |

The framework is §02 by explicit request — *"most important part is actually Decision
framework."* Keep it directly under the hero.

## Decisions already made (don't reopen without user input)

- **Framework stages are A/B/C/D, not a tree.** Stage B (temporary recalibration vs
  structural ceiling) is the heart of the page — it is the only thing that separates
  "wait" from "move". The six signal rows in that matrix are the actual content.
- **Stage C owns the three gate questions.** The Options matrix (§05) shows tradeoffs only
  and points back to Stage C. Do not duplicate the questions in both places.
- **Sliders default to archetypes**, not to 3s: current `1,1,1,2,2,2` vs potential
  `5,4,4,4,3,4`. Resetting restores those, not a neutral midpoint.
- **No composite score in the Lab.** Deliberately no total, no winner, uniform accent
  colour on all deltas so nothing reads as good or bad.
- **Plateau vocabulary is descriptive, not official.** The 7 chips carry a tooltip saying
  these are useful terms, not universally accepted industry jargon.
- **Hand-written inline CSS, not the repo's Tailwind + DaisyUI CDN pattern.** Chosen so the
  file is fully self-contained and opens offline. This is the one place this artifact
  diverges from `learning/ai-infra-layers.html`.

## Load-bearing details

- Tooltips are `display:none` when idle. This is not an optimisation — 111 absolutely
  positioned tooltips in the box tree added ~430px of scrollable width.
- `[data-tip]::after` uses `white-space:normal` (inherited `nowrap` from `.chain .node`
  made long tips overflow their own box) and `margin-left:var(--tip-shift)`.
- `placeTip()` clamps each tooltip into the viewport on `pointerover`/`focusin`. It uses
  `margin-left` rather than `transform` because `@keyframes tipIn` owns the transform.
- `localStorage` key `manage-the-slope-v3` stores only slider values and collapsed state.
- The `<script>` is one IIFE at the end of `<body>`. JS syntax check:
  extract the last `<script>` block and run `node --check`.

## Verified behaviours

Slider → bars + radar + diff summary; collapse/expand; sticky-nav active state; reset-all;
persistence across reload. No console errors. No horizontal overflow at 1440/1024/834/768/
600/480/390/360/320, including with every one of the 111 tooltips hovered at each width.

## Test assets

`/tmp/pwtest/` (Playwright 1.56.0, launched with `{ channel: 'chrome' }`):
`words.js` (per-section word budget), `final.js` (interaction + responsive sweep),
`hover.js` (all tooltips × 5 widths), `fwaudit.js`, `mob.js`.
