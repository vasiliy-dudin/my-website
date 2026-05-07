---
name: portfolio-case-study-writing
description: Write, edit, and audit text content for product design portfolio case studies. Use this skill whenever the user asks to write, rewrite, improve, review, or critique any section of a portfolio case study — including Hero, Problem, My Role, Research, Solution, Outcome, and Reflection sections. Also use when editing bullet points for a case study, checking whether writing sounds AI-generated, auditing a case study draft against quality standards, or assessing seniority signals in portfolio content. Apply this skill any time the user pastes case study text and asks for feedback, even if they don't explicitly call it a "case study."
---

# Portfolio Case Study Writing

Write, edit, and audit text for product design portfolio case studies. This skill applies a consistent quality standard across all seven case study sections, based on how hiring managers actually read portfolios in 2025–2026.

## Supplementary reference files

Load these when needed — do not load all at once:

- `writing-standards.md` — voice, verbs, abbreviations, paragraph structure, headings, tone, human voice. Load when drafting or editing content.
- `quality-flags.md` — anti-patterns, AI-generated text patterns, word quality flag/keep table. Load when auditing a draft.
- `context.md` — seniority signals, market context. Load when assessing seniority positioning or strategic fit.

---

## Core principle

AI should refine existing content, not generate it from scratch. Every claim, metric, and tool name must trace back to what the designer has actually provided. If required detail is missing, ask — do not fill gaps with plausible-sounding assumptions.

If context is ambiguous, a decision has more than one valid path, or key details (metrics, team size, timeline, outcomes) are missing — ask rather than invent. If a structural or editorial decision is genuinely hard to make without more context, name the options and ask which the author prefers.

---

## How case studies are actually read

- Hiring managers scan first: headings, subheadings, the first sentence of each paragraph. Full reading only happens if scanning caught their interest.
- The decision to keep reading is made in the first 30–60 seconds — based on whether the product, problem, and role are immediately clear.
- A portfolio with 2–3 deeply explained case studies outperforms one with 8 shallow ones.
- "Dribbble-style" portfolios — polished screenshots with no context — read as junior signals, not senior ones.

---

## Case study section standards

### Hero
- Names the product, company, industry, and scale (MAU, B2B/B2C).
- States the designer's role in one line.
- Includes year and duration.
- Does **not** contain the problem, metrics, or outcome summary — those belong in their own sections.

### Problem
- States the business problem and why it mattered — before any solution appears.
- Includes one or two sentences on how the problem was identified (analytics, PM, support data).
- States a concrete goal or hypothesis with numbers if they existed.

### My Role
- Names the team composition and size in one line.
- Separates the designer's specific contribution from what the team did collectively.
- Uses "I" for individual decisions, "we" for team decisions — consistently, not interchangeably.
- Every bullet passes the specificity test (see below).

### Research
- Include only if the designer personally conducted research.
- States method, participant count, and the key insights that changed direction.
- Ends with one sentence connecting the finding to the design decision it informed.

### Solution
- Covers 2–3 key decisions with reasoning — not just a description of what was built.
- Explains alternatives that were considered and why one was chosen.
- States trade-offs honestly: what was accepted and why.
- Usability testing belongs here, tied to the specific iteration it produced.
- Constraints (legal, technical, organisational) are woven into the decision narrative — not listed separately.

### Outcome
- Reports all metrics honestly — including negative or flat results.
- If results were negative: explains the likely cause and what the team decided next.
- If metrics are unavailable: describes what changed in observable terms (user behaviour, team direction, product decision).
- Does not end on "stakeholders were happy" — something concrete must have changed.

### Reflection
- States what would be done differently and why — specifically, not generically.
- 3–4 points maximum. Concise is better than comprehensive here.
- A concrete process insight ("we should have involved engineering earlier in X decision because Y happened") outperforms a vague learning ("I'd communicate better").

---

## The specificity test

Before finalising any achievement statement or bullet, check it contains at least **two** of:

1. A number or metric
2. A named tool, method, or framework
3. A named context — product, team, user segment, or constraint

**Fails:** *Improved team efficiency*
**Passes:** *Reduced component creation time from 3 days to 4 hours across 8 product teams by establishing a tokenised design system in Figma*

Only the designer can supply these details. Do not invent them.

---

## Output format defaults

Unless the user asks otherwise:
- **For edits:** produce a Before / After table with a concise "Reason" column.
- **For new draft content:** produce a version close to final, not an outline.
- **Lead with the output.** Add notes only when a decision genuinely needs explaining.
- **If information is missing:** ask one focused question before proceeding. Do not fill gaps with assumptions.

---

## Pre-output checklist (apply silently before every response)

- [ ] Does every claim trace back to content the designer provided?
- [ ] Does every bullet pass the specificity test (two of three elements)?
- [ ] Is "I" vs "we" used consistently and accurately?
- [ ] Do any words flag as "always remove" (passionate, results-driven, visionary, synergy, etc.)?
- [ ] Do any context-dependent words (data-driven, strong, dynamic, etc.) appear without the specific content that would justify them?
- [ ] Would the designer say this out loud in an interview, in their own words?
- [ ] Is any gap flagged as a gap rather than covered with vague language?
- [ ] Does the Outcome section report something that actually changed — not just that the project shipped?
- [ ] Does the text pass the AI-pattern check — no em dash overuse, significance inflation, forced triads, or filler transitions?
- [ ] Does the writing sound like a product designer talking to a peer, not a corporate document?
