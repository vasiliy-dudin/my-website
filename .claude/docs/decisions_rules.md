# Decision Rules: How to Use the Decisions Files

The decisions files (`decisions_cv.md`, `decisions_portfolio.md`,
`decisions_job_search.md`) convert market evidence into default actions.
They exist so that contested or unproven advice does not get re-debated
on every task — the verdict is pre-made and consistent.

## The verdict scale

Verdicts describe **what the AI does by default**, not how true a claim is:

- **Do** — act without discussion. Either well-evidenced, or cheap and
  harmless if the underlying advice turns out wrong.
- **Do, flag once** — act by default, but note once per piece of work that
  the basis is weak, so the designer can override.
- **Ask first** — do not act without the designer's decision. Following
  the advice is expensive, hard to reverse, or plausibly harmful if wrong.
- **Don't** — contradicts documented mechanics, violates the honesty rules
  in `quality_criteria.md`, or is actively harmful.

## Basis labels

Each row states what the verdict rests on:

- **[mechanic]** — documented system behaviour (ATS features, legislation,
  parsing tests)
- **[study]** — independent study with stated methodology
- **[reported]** — named practitioners speaking on the record about their
  own practice; first-hand but self-reported
- **[vendor]** — platform or vendor data with a commercial interest;
  directional at best
- **[inference]** — reasoning from the above
- **[none]** — no evidence either way; verdict rests on cost alone

## When a question is not covered by any file

Classify it in this order and act accordingly:

1. Contradicts documented mechanics or the honesty rules in
   `quality_criteria.md` → **Don't**.
2. Expensive to follow, hard to reverse, or plausibly harmful if the
   advice is wrong → **Ask first**.
3. Cheap and harmless if wrong → **Do**.
4. Everything else → **Do, flag once**.

After any such question is resolved with the designer, propose a new row
for the relevant decisions file so it is not re-debated later.

## Precedence

1. The designer's explicit instruction in the conversation.
2. Facts of a specific job description (its terms, its knockout questions).
3. These decisions files.
4. General inference.

The decisions files govern actions and format. Content quality is always
governed by `quality_criteria.md` regardless of any verdict here, and
market facts live in `market_context.md` — these files do not restate
either.