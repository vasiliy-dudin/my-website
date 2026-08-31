---
name: portfolio-case-study-writing
description: Write, edit, and audit text content for product design portfolio case studies. Use whenever the user asks to write, rewrite, improve, review, or critique any part of a portfolio case study — Hero, Problem, My Role, Discovery Research, Process, Solution, Outcome, or Reflection — or asks for image captions, alt text, bullet edits, an AI-pattern check, or a seniority audit of portfolio content. Apply this skill any time the user pastes case study text and asks for feedback, even without the words "case study."
---

# Portfolio Case Study Writing

Refine designer-provided content into case study text that reads as
senior, specific, and unmistakably human. This skill covers what the
rules files don't: audience, section standards, site shortcodes, and
the delivery workflow.

## Where the standards live

Auto-loaded. Read the source; this skill never restates or overrides.

- `rules/writing_guidelines.md` — how the text reads: paragraphs,
  headings, voice, verbs, anti-patterns, AI-text patterns.
- `rules/quality_criteria.md` — what counts as strong content: the
  specificity test, attribution, metric provenance, tiers, visuals.
- `rules/decisions_portfolio.md` — pre-made verdicts. Follow the row
  instead of re-deciding.
- `rules/decisions_rules.md` — the verdict scale and precedence.
- `rules/market_context.md`, `rules/my_profile.md` — background for
  judgement; never a source of case study facts.
- `quality-flags.md` (this folder) — word tiers. Load when auditing
  word choice or before final delivery.
- `humanizer` skill — final pass on every finished draft.

## Core principle

Refine designer-provided content; don't generate it. Every claim,
metric, and tool name traces back to what the designer gave you.

No retrofitting: don't add methods, tools, or AI use to a project
where they weren't part of the work, however well it would read. It is
indefensible in a live walkthrough.

**NDA-constrained work:** anonymise and redact in place — blur
figures, generalise the client, keep the decision narrative intact.
Never write a "can't show this" placeholder.

**A recommendations file or brief** gives content direction only: what
to include, cut, or reorder. It is not cleared prose. Never carry its
sentence structures, paragraph breaks, or unexpanded abbreviations
into the output.

## Reader and register

- **Primary reader:** a design hiring manager at a UK/EU product
  company — skims first, reads deeply only if the skim earns it,
  calibrates seniority from how decisions are explained.
- **Secondary:** a recruiter or non-design panel member who may not
  know domain abbreviations or design methods.
- **No shared context.** Russian companies and products mean nothing
  here: state scale and market position in the text ("the
  second-largest EdTech platform in Russia, 2M MAU").
- **The 10-minute test.** The case must survive being walked through
  out loud in about 10 minutes. That is the structural test for the
  written page, not the length of the spoken rehearsal (see
  `rules/decisions_job_search.md`). If it can't be narrated without
  reading the page, the structure is wrong.
- **Tension is part of the voice.** Naming mistakes, disagreements and
  pushback is what separates the case from interchangeable senior
  portfolios. Distinctiveness comes from specificity and honesty —
  never trade clarity for personality.

## Scope boundaries

- **Keyword mirroring is a CV mechanic.** `rules/decisions_cv.md` says
  to mirror a job description's terms in body text; that works through
  recruiter search and applies to the CV. Case study prose uses precise
  terms because they're precise. Never tune a case study to a specific
  job ad.
- **British English without exception.** The ATS spelling exception in
  `rules/quality_criteria.md` exists for CV keyword strings only.

## Section standards

### Hero
- Names the product, company, industry, and scale (MAU, B2B/B2C).
- The page title names the main problem in a few words. It is a short
  pointer, not the problem statement.
- Role in one line; year and duration.
- No metrics, no outcome summary — those have their own sections.

### Problem
- The business problem and why it mattered — before any solution.
  Stated in full here, including anything the page title had to leave
  out. More than one problem is fine.
- One or two sentences on how the problem was identified (analytics,
  PM, support data).
- A concrete goal or hypothesis with numbers, if they existed.
- Ranges from one paragraph to several with H3s (Business problem,
  Goal, Hypotheses) when dimensions genuinely differ.

### My Role
- Team composition and size in one line. When a development team was
  involved, **always use the 11ty team shortcode** instead of listing
  members in prose.
- Separates the designer's specific contribution from the team's.
- Every bullet passes the specificity test.

### Discovery Research
- Only if the designer personally conducted research.
- Method, participant count, and the insights that changed direction —
  findings, not process description.
- Ends with one sentence connecting findings to the design decisions
  they informed.
- Pre-solution research only; usability testing during iteration
  belongs in Solution.

### Process
- Shows how the work moved from research toward the solution: flow
  explorations, wireframe variants, ideation artifacts.
- Artifacts may stand with minimal text — decision reasoning lives in
  Solution, not here. A one-line caption per artifact is enough.
- May mention that usability testing happened at this stage; the
  testing itself and the iterations it caused belong in Solution.
- Purpose: visible evidence of how the designer works — not a second
  Solution section.

### Solution
- 2–3 key decisions with reasoning — not a description of what was
  built.
- Alternatives considered and why one was chosen.
- Trade-offs stated honestly: what was accepted and why.
- Usability testing lives here, tied to the specific iteration it
  produced: test → finding → change.
- Constraints (legal, technical, organisational) are woven into the
  decision narrative, not listed separately.
- Implementation reality belongs here: what engineering constrained,
  what changed at handoff, what shipped differently from the design. A
  featured case with no trace of it is a named red flag in
  `rules/quality_criteria.md`.
- Where design-system, accessibility, or research decisions were
  genuinely part of the work, write them here as decisions with
  reasoning — a specialisation claimed in `rules/my_profile.md` is only
  credible when a case shows it. Never add one that wasn't there.

### Outcome
- Use the **11ty ImpactRow shortcode** for key metrics — not prose
  numbers. Where the Problem section stated a target, the shortcode's
  `goal` and `valueOld` arguments carry it, so the reader can see
  whether it was met.
- Reports all metrics honestly, including negative or flat ones.
- **Every number is provenance-checked** per
  `rules/quality_criteria.md`: verified / from my notes / unverified.
  While drafting, tag questionable figures inline as `[unverified]`.
  Unverified numbers never ship — replace with qualitative description.
- **Negative or flat results need all four elements from
  `rules/quality_criteria.md`, and three of them live here:** the
  metrics unburied, why the hypothesis didn't hold (from real
  post-launch investigation), and what the team decided as a result.
  The fourth — what I would do differently — belongs in Reflection.
  Missing one turns an honest case into an unexplained failure.
- If metrics are unavailable: what changed in observable terms.
- Never ends on "stakeholders were happy."

### Reflection
- What would be done differently and why — specifically.
- 3–4 points maximum. A concrete process insight beats a vague
  learning.

### Image captions and alt text
- A caption says what to look at and why it matters, not what the
  image is. Criteria and worked example in
  `rules/quality_criteria.md`.
- In a featured case, an image that only shows work happened gets cut
  rather than captioned.
- Alt text describes content and purpose in context; decorative images
  are marked decorative.

## Workflow

1. **Check `rules/decisions_portfolio.md`** for a row covering the
   question and follow its verdict. If none does, classify it with the
   four-step test in `rules/decisions_rules.md`. Precedence when
   sources conflict: the designer's instruction here → the decisions
   files → inference.
2. **Draft or edit** per the rules files and section standards above.
3. **Self-audit:** anti-patterns and AI-text patterns
   (`writing_guidelines.md`), word tiers (`quality-flags.md`).
4. **Run the `humanizer` skill** on the finished draft.
5. **Re-verify after humanizer:** numbers, tool names, I/we
   attribution and British spellings must survive unchanged. Humanizer
   adjusts rhythm and phrasing — it must never alter facts. If it did,
   restore them.
6. Deliver.

## Output format defaults

- **Edits:** Before / After table with a concise Reason column.
- **New drafts:** a version close to final, not an outline.
- **Lead with the output.** Notes only where a decision genuinely
  needs explaining.
- **Missing information:** ask one focused question before proceeding.
- **A "Do, flag once" verdict** gets one short note at the end of the
  delivery naming the row and its basis — once per piece of work, not
  per paragraph.
- **A question no decisions file covered:** after the designer settles
  it, propose a row for `rules/decisions_portfolio.md` in that file's
  format (recommendation | verdict | basis), so it isn't re-debated
  later.

## Pre-output checklist (apply silently)

- [ ] Every claim traces back to designer-provided content — nothing
      retrofitted?
- [ ] Every claim bullet passes the specificity test?
- [ ] Every number provenance-checked; no `[unverified]` left?
- [ ] "I" vs "we" accurate; verbs match the attribution table?
- [ ] Tier 1 words absent, Tier 2 flagged rather than silently changed?
- [ ] Humanizer run, and facts re-verified after it?