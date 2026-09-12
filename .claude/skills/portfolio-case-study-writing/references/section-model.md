# Section model

Slots and limits for every section of a case study page. Limits are
defaults, based on a skimming reader and a 10-minute spoken walkthrough;
they are working estimates, not measured figures. The designer can
override them per case — record overrides in `facts.md` under Page
decisions.

Target for the whole page: roughly 800–1,000 words of body text,
excluding captions and alt text.

## Page-level rules

- **H2 = short standard names** used in the site navigation: My role,
  Problem, Discovery research, Process, Solution, Outcome, Reflection.
- **First sentence carries the point.** A reader who sees only H2s, H3s
  and first sentences should get the whole story.
- **Each fact lives in one section.** Another section may refer to it in
  a clause; it doesn't explain it again. Reasoning for a decision lives
  in Solution, even when an artefact in Process relates to it.
- **Paragraphs: three sentences at most.**
- **Anything one section promises, another keeps.** If Research says a
  finding shaped a decision, that decision appears in Solution.

## Hero (front matter and first section)

- `title`: the main problem in eight words or fewer.
- `headerInfo`: company with market position and scale (the reader
  doesn't know the company), team focus, tools.
- Main visual.
- No metrics, no outcome.

## My role

- Team via the `myRole` shortcode; never list the team in prose.
- 3–5 bullets, one line each. Each is one contribution the designer made
  personally, passes the specificity test, and uses a verb from the
  attribution table in `quality_criteria.md`.

## Problem

- Five sentences at most, in one or two paragraphs.
- Slots: business problem and why it mattered → how it was identified
  and by whom (one sentence) → goal or hypothesis with numbers.

## Discovery research

Only if the designer ran it personally.

- One sentence: methods, segments, sample sizes.
- 3–4 bullets, one finding each, with its number where one exists.
  Findings, not process.
- One sentence naming the decisions the findings informed.

## Process

- 3–6 one-line bullets: what was done, in order, with methods and
  numbers. No reasoning.
- Artefacts in the carousel. Caption: what to look at, 20 words at most.
  If Solution explains the reasoning, the caption points to it rather
  than repeating it.
- Usability testing may be mentioned here in one line; results and the
  changes they caused belong in Solution.

## Solution

- One-sentence intro naming the scope (flows, surfaces).
- 2–3 decision cards, ordered by the ranking below.
- Implementation reality appears somewhere: inside a card, or one short
  paragraph (three sentences at most) at the end. It gets its own card
  only if it changed a decision.

### Decision card

A card takes one of two shapes. Both run roughly 100–200 words — the
per-decision length observed across strong external cases (see
`examples.md`); the eight-sentence limit below encodes it.

**Shape A — choice.** Options existed; one was chosen.

| Slot | Limit | When |
|---|---|---|
| H3 | 10 words or fewer; states the decision or its reason | Always |
| The decision | 1 sentence, directly under the H3 | Always |
| Constraint or context | 1–2 sentences | When it shaped the decision |
| Options considered | 1 sentence, or up to 3 one-line bullets | Always on the first card; on others when they existed |
| Why this option | 1–2 sentences | Always |
| Trade-off | 1 sentence: what was given up, why that was acceptable | When one existed |
| Evidence | 1–2 sentences: test result, metric, observed behaviour | When it exists; otherwise `[GAP]` or omit |
| Visual and caption | Caption of 20 words at most | Always |

A card is eight sentences at most, not counting the caption.

**Shape B — rejected iteration.** Something was built or designed, then
replaced. Slots: what iteration 1 was (1 sentence) → the specific way it
failed, with evidence (1–2) → what replaced it and why (1–2) → what the
fix cost, if anything (1) → visual pair labelled with versions. Same
eight-sentence ceiling. When the evidence of failure is post-launch
data, name the measurement period.

When a decision was made by a stated method — a threshold, a filter, a
selection rule — name the method in one sentence; it convinces more
than the result.

### Ranking decisions

Rank candidates by how many of these they meet:

1. Real alternatives were considered and a trade-off was accepted.
2. A constraint or disagreement outside design shaped it (legal,
   management, engineering, business).
3. There is evidence: a test result, a metric, observed behaviour.
4. The designer owned or drove it.

Chronology doesn't decide order. A post-launch iteration is a card like
any other and opens the section only if it ranks highest. A decision
that meets none of the criteria isn't a card: mention it in a clause or
cut it.

## Outcome

- Metrics via the `ImpactRow` shortcode. When Problem stated a target,
  fill `goal` and `valueOld` so the reader can see whether it was met.
- Where a credible external benchmark with a named source exists, state
  the metric against it — the comparison argues better than the number.
- When Problem declared success criteria, Outcome grades each one with
  a status: measured, anecdotal, not yet measurable, or projected.
  Declining to invent a number, and saying so, is itself a senior
  signal. This is the default structure for flat or negative results.
- Five sentences at most directly after the metrics: measurement period,
  what happened, and — for flat or negative results — why the hypothesis
  didn't hold and what the team decided. The four required elements are
  in `quality_criteria.md`; the fourth lives in Reflection.
- An effect that can't be measured is stated as unmeasured, in words —
  never given a figure without baseline, period and source.
- Never present volume-of-work counts (tests run, iterations shipped,
  components built) as impact.
- Every metric has a status in `facts.md`. Unverified figures don't
  ship.

## Reflection

- 2–4 bullets, two sentences at most each: what I would do differently,
  at which stage, and why.

## Captions and alt text

Criteria in `quality_criteria.md`. In a featured case, an image that
only shows that work happened is cut, not captioned.

For a dense UI screenshot, prefer 3–5 numbered annotations — each
naming an element and why it is that way — over paragraphs describing
the interface. Annotations replace prose; never both. Label paired
images with their versions ("first iteration" / "shipped") so the pair
carries the story.

## Anti-patterns (page level)

Named failures from the external sample; the full list with sources is
in `examples.md`:

- Feature tour: screenshot + benefit caption per feature, no decisions.
- Framework tutorial: explaining Double Diamond, agile cadence, or a
  canvas instead of showing decisions.
- Volume-of-work numbers presented as impact.
- Bold in every sentence — bold at most one claim per paragraph.
- "I" in the title, "we" everywhere in the body: attribution per
  `quality_criteria.md`, checked by the fact-checker.
