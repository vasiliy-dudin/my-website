---
name: portfolio-case-study-writing
description: Plans, drafts, edits and reviews text for the designer's portfolio case studies on the Eleventy site — Hero, Problem, My role, Discovery research, Process, Solution, Outcome, Reflection, captions and alt text — and builds each case's facts.md. Use it whenever a task touches a case study page or its facts file: writing, rewriting, shortening or reordering a section, auditing a draft, checking seniority signals or AI-sounding prose, even if the words "case study" are not used.
---

# Portfolio case study writing

Turns facts the designer provides into short, scannable case study pages.

Earlier drafts failed in two ways: text was written before anyone decided
which design decisions mattered, and nothing limited length. So the order
here is fixed: facts first, then a plan the designer approves, then text
written into fixed slots, then review by readers who don't share the
writer's context.

## Sources

| File | What it is | Read when |
|---|---|---|
| `facts.md` next to the case page | The only source of facts the page may use | Always, first |
| `notes.md` next to the case page | The designer's raw material, any language, any structure | Facts mode; and to resolve a `[GAP]`, never as a direct source for text |
| `references/section-model.md` | Slots, limits and ordering rules per section | Before planning or drafting |
| `references/examples.md` | Per-section patterns and anti-patterns from strong external cases, plus one annotated bad example | Before drafting any section |
| `.claude/docs/writing_guidelines.md` | Voice, paragraphs, headings, AI patterns | Before drafting |
| `.claude/docs/quality_criteria.md` | Specificity test, attribution, provenance, negative results, captions | Before drafting; when judging a claim |
| `references/quality-flags.md` | Word tiers and how to flag | When reviewing word choice |
| `.claude/docs/decisions_portfolio.md`, `decisions_rules.md` | Pre-made verdicts, verdict scale | When a "should we…" question comes up |
| `.claude/docs/my_profile.md`, `market_context.md` | Background | Only if positioning is in question; never a source of case facts |

## Ground rules

- **Facts come from `facts.md` and the designer's answers in this
  session.** A figure that appears only in the page draft or in
  `notes.md` counts as unconfirmed: earlier AI rewrites have changed
  numbers before. `notes.md` is where facts are found; `facts.md` is
  where they become usable, with a status.
- **A missing fact becomes `[GAP: question]`.** Keep writing around it.
  A plausible guess is worse than a visible gap, because it survives
  into a live walkthrough the designer can't defend.
- **Examples show form and length only.** Never carry their content,
  numbers or wording into another case.
- **Briefs, guides and old recommendation files give direction only.**
  Don't reuse their sentences or template phrases.
- **No retrofitting.** Don't add methods, tools or AI use that weren't
  part of the project.
- **NDA work:** anonymise and redact in place; never a "can't show this"
  placeholder.
- **British English throughout.** The ATS spelling exception is for CV
  keywords only; keyword mirroring is a CV mechanic, not a case study one.

## Choose the mode

- **Small edit** — one sentence, a caption, alt text, word choice. Edit
  directly and return a Before / After table with a Reason column. Skip
  the phases.
- **Facts mode** — `facts.md` is missing, or the designer wants to add
  or correct information. Run the facts interview.
- **Section mode** — write, rewrite, shorten or reorder one or more
  sections, or audit a page. Run phases 1–4.

If `facts.md` is missing or has open questions that block the requested
section, run the facts interview first and say why.

## Facts interview

1. If `facts.md` doesn't exist, copy `assets/facts-template.md` next to
   the case page as `facts.md`. If `notes.md` doesn't exist either,
   copy `assets/notes-template.md` there too and ask the designer to
   drop whatever they have into it before the interview.
2. Pre-fill `facts.md` from `notes.md` and the page draft. Mark every
   pre-filled line `from draft — unconfirmed`. Write `facts.md` in
   English even when the answers come in Russian, so its wording can
   flow into the page.
3. Put conflicts between sources (two versions of one metric, two team
   sizes) at the top of Open questions.
4. Ask one question at a time, most important first: conflicts, then
   each decision's why, alternatives and trade-off, then evidence. Use
   the AskUserQuestion tool when the answer is one of a few options.
   "Don't know / not recorded" is a valid answer: record it and move on.
5. Write each answer into `facts.md` straight away, so nothing lives only
   in the chat.

Designers usually feel they have already said everything. What is
normally missing is why a decision was made, what else was considered,
and what proved it. Ask about those, not for more description of what
was built.

## Phase 1 — Plan, then stop

Read `facts.md`, the whole page (every section, not only the target) and
the section model. Reply with:

1. **Story map.** One line per H2: what a skimming reader takes from it
   now.
2. **Decision inventory** (for Solution work). Table: decision | why |
   alternatives | trade-off | evidence | owner, each cell ✓ / partial / ✗
   according to `facts.md`. Ranked by the criteria in the section model.
3. **Two structure options** for the target section, each with the
   strongest argument against it, and a recommendation. Self-critique
   belongs here, on plans, where it is cheap — not as a section in the
   final reply.
4. **Page issues.** Contradictions, numbers that differ between sections
   or from `facts.md`, content duplicated across sections, promises one
   section makes that another doesn't keep.
5. **Blocking questions.** Only gaps that block the recommended option;
   five at most.

Then stop and wait. The designer's choice of decisions and their order is
the input for phase 2, so drafting in the same turn wastes the draft.
Record the answers and choices in `facts.md` under Page decisions.

## Phase 2 — Draft

- Write into the slots from the section model and stay inside the
  limits. Limits are counted in sentences and bullets, not words, so they
  can be checked by eye.
- If the material doesn't fit, drop whole points, least important first.
  Don't squeeze everything into denser sentences. Record what you drop in
  the cut log.
- Mark missing facts `[GAP: …]`. Before asking the designer, search
  `notes.md` for the answer; if found, propose it and record it in
  `facts.md` once confirmed.
- Run one pass of the `humanizer` skill. Keep its rhythm changes, but
  facts, I/we attribution, British spellings and slot limits must
  survive. If it adds sentences, keep the shorter version.

## Phase 3 — Review

Run both subagents in parallel on the drafted page:

- `fact-checker` — give it the page path and the `facts.md` path.
- `skim-reviewer` — give it the page path only, with no other context.
  Its value is that it knows only what the page says.

Then make one revision round:

- Fix every fact-checker finding, or turn it into a `[GAP]` question.
- Apply a reader finding when it concerns clarity, missing context or
  repetition. Reject it when it conflicts with `facts.md` or breaks the
  limits, and note why.
- The revision must not make the page longer. If a fix needs space, cut
  something else.

One round only. Repeating the same reviewers mostly produces churn, not
quality.

## Phase 4 — Deliver

Write the changes to the page file; the VS Code diff is the Before /
After. In the chat, give only:

- **GAPs** — questions for the designer, one line each.
- **Review log** — finding → accepted / rejected, with a one-line reason.
- **Cut log** — what was removed and from where, so it can be restored.
- **Flag** — one note if a "Do, flag once" verdict applied.

No summary of the text itself.

## Questions no file covers

Classify them with the four-step test in `decisions_rules.md`. Once the
designer settles one, propose a row for `decisions_portfolio.md` in its
format (recommendation | verdict | basis).
