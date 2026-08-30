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

- `rules/writing_guidelines.md` (auto-loaded) — paragraph weight,
  headings, voice and person, verbs, tone, human voice, abbreviations,
  anti-patterns, AI-text patterns. Apply throughout; do not restate or
  override.
- `rules/quality_criteria.md` (auto-loaded) — the specificity test, the
  attribution table (how to claim work honestly), metric provenance,
  the two-tier portfolio structure, visuals and captions, senior vs
  mid-level signals, British English conventions.
- `quality-flags.md` (this folder) — word tiers and the flagging
  process. Load when auditing word choice or before delivering a final
  draft.
- `humanizer` skill — final pass on every finished draft (see
  Workflow).

## Core principle

Refine existing content, don't generate it from scratch. Every claim,
metric, and tool name must trace back to what the designer provided —
the ask-before-guessing rules in `writing_guidelines.md` apply.

**When working from a recommendations file, brief, or restructuring
guide:** that document provides content direction only — what to
include, what to cut, what order to follow. It is not
writing-quality-cleared copy. Treat it as a source of intent, not a
source of prose. Apply all writing standards to the final output
independently. Do not carry the source document's sentence structures,
paragraph breaks, or unexpanded abbreviations into the output. "Merge
these three sections" means merge the information — not the formatting.

## Audience

Write for two readers at once:

- **Primary:** a design hiring manager at a UK/EU product company — a
  senior peer who skims first, reads deeply only if the skim earns it,
  and calibrates seniority from how decisions are explained.
- **Secondary:** a recruiter or non-design panel member — may not know
  domain abbreviations or design methods; hence the spell-out rules.

Assume no shared context. Russian companies and products mean nothing
to this reader: scale and market position must be stated in the text
("the second-largest EdTech platform in Russia, 2M MAU"), never
assumed.

## Voice as a differentiator

A distinctive voice is a deliberate goal, not a nice-to-have: most
senior portfolios sound interchangeable, and sounding like a person is
itself a differentiator. The register is defined in
`writing_guidelines.md` (Human voice). Two additions:

- Willingness to name mistakes, disagreements, and pushback is part of
  the voice — a case study with no tension is not credible.
- Distinctiveness comes from specificity and honesty, not stylistic
  flourishes. Never trade clarity for personality.

## Reading model

Beyond the scanning rules in `writing_guidelines.md`:

- The story must assemble from H2 headings and first sentences alone.
- **The 10-minute test:** the case must survive being walked through
  out loud in about 10 minutes — the same structure serves as the
  interview presentation. If it can't be narrated without reading the
  page, the structure is wrong.
- Screens without explained decisions read as junior **when framed as
  a case study**. Lighter work belongs in tier 2 with honest framing
  (see the portfolio criteria in `rules/quality_criteria.md`).

## Section standards

### Hero
- Names the product, company, industry, and scale (MAU, B2B/B2C).
- Role in one line; year and duration.
- No problem, no metrics, no outcome summary — those have their own
  sections.

### Problem
- The business problem and why it mattered — before any solution.
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

### Outcome
- Use the **11ty ImpactRow shortcode** for key metrics — not prose
  numbers.
- Reports all metrics honestly, including negative or flat ones.
- **Every number is provenance-checked** per
  `rules/quality_criteria.md`: verified / from my notes / unverified.
  While drafting, tag questionable figures inline as `[unverified]`.
  Unverified numbers never ship — replace with qualitative description.
- If results were negative: the likely cause (from real post-launch
  investigation) and what the team decided next.
- If metrics are unavailable: what changed in observable terms.
- Never ends on "stakeholders were happy."

### Reflection
- What would be done differently and why — specifically.
- 3–4 points maximum. A concrete process insight beats a vague
  learning.

### Image captions and alt text
- A caption says what to look at and why it matters — not what the
  image is. "Final dashboard" is a label; "The share trigger moved
  inline after 8 of 12 participants missed it in the toolbar" is a
  caption.
- Alt text describes content and purpose in context; decorative images
  are marked decorative. Full criteria in `rules/quality_criteria.md`.

## Workflow

1. **Draft or edit** per the rules files and section standards above.
2. **Self-audit:** anti-patterns and AI-text patterns
   (`writing_guidelines.md`), word tiers (`quality-flags.md`).
3. **Run the `humanizer` skill** on the finished draft.
4. **Re-verify after humanizer:** numbers, tool names, I/we
   attribution and British spellings must survive unchanged. Humanizer
   adjusts rhythm and phrasing — it must never alter facts. If it did,
   restore them.
5. Deliver.

## Output format defaults

- **Edits:** Before / After table with a concise Reason column.
- **New drafts:** a version close to final, not an outline.
- **Lead with the output.** Notes only where a decision genuinely
  needs explaining.
- **Missing information:** ask one focused question before proceeding.

## Pre-output checklist (apply silently)

- [ ] Every claim traces back to designer-provided content?
- [ ] Every claim bullet passes the specificity test?
- [ ] "I" vs "we" accurate; verbs match the attribution table?
- [ ] Every number tagged verified / from notes — nothing
      `[unverified]` left in shipping text?
- [ ] No Tier 1 words; Tier 2 words flagged, not silently kept or
      deleted?
- [ ] British English throughout?
- [ ] Company/product context self-contained for a reader with no
      Russian-market knowledge?
- [ ] Would the designer say this out loud in an interview?
- [ ] Outcome reports something that changed — not just that the
      project shipped?
- [ ] Full pass against `writing_guidelines.md` — paragraph weight,
      headings, anti-patterns, AI-text patterns?
- [ ] Humanizer run; facts re-verified after it?
- [ ] No sentence structures or unexpanded abbreviations carried over
      from a source/recommendations document?