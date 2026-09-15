# Section model

Slots and limits for every section of a case study page. Limits are
defaults, based on a skimming reader and a 10-minute spoken walkthrough;
they are working estimates, not measured figures. The designer can
override them per case — record overrides in `facts.md` under Page
decisions.

Target for the whole page: 700–900 words of body text, excluding
captions and alt text. Treat it as a ceiling, not a quota to fill.

## Page-level rules

- **H2 = short standard names** used in the site navigation: My role,
  Problem, Discovery research, Process, Solution, Outcome, Reflection.
- **First sentence carries the point.** A reader who sees only H2s, H3s
  and first sentences should get the whole story.
- **Each fact lives in one section.** Another section may refer to it in
  a clause; it doesn't explain it again. Reasoning for a decision lives
  in Solution, even when an artefact in Process relates to it.
- **Paragraphs: three sentences at most.**
- **Sentences: 25 words at most.** A sentence carrying two or three
  facts joined by semicolons or dashes is over budget even when it is
  grammatical. Split it, or drop a fact.
- **A list is a list.** Three or more parallel items become bullets, one
  line each — never a semicolon chain inside a sentence. Bullets are
  what makes a decision scannable.
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

- Intro: what shipped, in user-journey order, purely descriptive — no
  reasons, no benefits language. Form: one sentence (25 words at most)
  when the flow is simple; otherwise 2–3 bullets, one line each, one
  step of the journey per bullet. Never a paragraph. Its job is to
  answer "what is this feature" so the cards can spend their words on
  "why". A skimmer who reads only the intro and the H3s should be able
  to retell how the feature works.
- 2–3 decision cards, ordered by the ranking below.
- Implementation reality: two sentences at the end of the section, or
  its own card if — and only if — it changed a decision. Never appended
  to a card about something else.

### Decision card

A card takes one of two shapes. Hard ceiling for either: **120 words,
three short paragraphs (or two plus a bullet list), seven sentences**,
excluding the caption. The external sample runs 100–200 words per
decision, but the long end of that range comes from long-form articles;
a portfolio page read by a skimming reviewer sits at the short end.

A card carries **one piece of evidence and at most one quote**. When
`facts.md` offers several, pick the strongest and leave the rest
unused — a card is a selection from the facts, not a summary of them.

**Shape A — choice.** Options existed; one was chosen.

| Slot | Limit | When |
|---|---|---|
| H3 | 10 words or fewer; states the decision or its reason | Always |
| The decision | 1 sentence, directly under the H3 | Always |
| Constraint or context | 1–2 sentences | When it shaped the decision |
| Options considered | Up to 3 bullets, one line each, each with its verdict | Always on the first card; on others when they existed |
| Why this option | 1 sentence | Always |
| Trade-off | 1 sentence: what was given up, why that was acceptable | When one existed |
| Evidence | 1–2 sentences: test result, metric, observed behaviour | When it exists; otherwise `[GAP]` or omit |
| Visual and caption | Caption of 20 words at most | Always |

If everything true about the decision won't fit, that is the normal
case, not a signal to stretch the card.

**Shape B — rejected iteration.** Something was built or designed, then
replaced. Slots: what iteration 1 was (1 sentence) → the specific way it
failed, with evidence (1–2) → what replaced it and why (1–2) → what the
fix cost, if anything (1) → visual pair labelled with versions. Same ceiling. When the evidence of failure is post-launch data, name
the measurement period. A shape B card never also carries
implementation reality — that has its own place below.

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
any other and opens the section only if it ranks highest. When two
cards rank equally, order them by the user journey, so the H3s read as
the feature's story. A decision that meets none of the criteria isn't a
card: mention it in a clause or cut it.

**Coverage check, after ranking.** List the shipped feature's
load-bearing surfaces — the parts a reviewer would expect to see
explained. Every one of them must appear somewhere: the intro, a card,
or an annotated image. Card selection weighs coverage, not only how
well a decision argues:

- A funnel-critical surface with a real "why" behind it competes for
  the last card slot even when its alternatives, trade-off or evidence
  slots are empty — importance to the product can outweigh a fuller but
  narrower decision.
- A surface with no decision behind it at all never becomes a card
  (that is the feature tour); it gets an annotated image — 3–5 numbered
  callouts, each naming an element and why it is that way — or a line
  in the intro.
- A surface that reuses an existing pattern, page or component is a
  decision, but a one-sentence one. Say what was reused and why, name
  what the designer changed within it, and leave it at that — reuse
  never inflates into a card. Silence here reads as claiming someone
  else's work; `quality_criteria.md` treats that as disqualifying.
- Before treating a surface as having no decision, ask the designer
  whether one was made.

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

## Visuals

Rules for images, carousels and callouts are in `visuals.md`. Every
decision card has one visual; the rest of the page earns its images.

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
