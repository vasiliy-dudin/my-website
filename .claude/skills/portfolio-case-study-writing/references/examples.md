# Patterns and anti-patterns, by section

Distilled from 13 external portfolio cases analysed with the designer in
September 2026 (sample: 2 strong senior in-house cases, 4 lead-level
enterprise cases, 1 strong founder side-project, 6 junior/student/agency
cases used mainly as anti-patterns). These are shapes to reuse, described
in our own words. Never copy wording, numbers or content from any
external case. Facts still come only from the case's `facts.md`.

Sample-derived anchor: in the strong cases, one design decision —
whatever its domain — takes roughly 100–200 words. Page totals vary
widely by domain (design-system cases run long); per-decision length
does not. This is the basis for the decision-card limit in
`section-model.md`.

## Hero / entry

- **Benchmark metrics with a named source.** One strong case leads with
  three conversion metrics, each compared to a market median from a
  named industry report. Works because the comparison does the arguing.
  Use only where the designer's decisions files allow outcome in the
  opening, and only with provenance.
- **Anti-pattern: attitudinal outcome in the intro.** "X% of testers
  said they would use it" plus "the CEO is very happy" is the
  stakeholders-were-happy failure from `quality_criteria.md`.

## Problem

- **Quantify the problem from evidence, not adjectives.** A strong case
  states the problem as observed segments with numbers ("7 of 10 users
  lost profit because they missed errors; 2 of 10 earned nothing"),
  which later gives Outcome something exact to answer.
- **Success criteria declared upfront.** One case defines, in the
  problem section, the 2–3 things that would count as "solved". Outcome
  then grades each one. This is the strongest honest-outcome device in
  the sample and the model for cases without positive metrics.
- **A business number attributed to its source.** "The current process
  costs us $NN annually — business analyst" puts provenance inside the
  sentence.

## My role

- **Name the gap you covered.** "The startup had no analysts, so I took
  that role during discovery" reads senior because it's a specific
  claim about scope, not a verb upgrade.
- **Anti-pattern: "How I led" in the title, "we" throughout the body.**
  The mismatch is visible and undermines both.

## Research

- **Findings as one-line callouts.** Pull-quote-style single sentences
  ("Interviewees' biggest worry: what's covered and what isn't") make
  research scannable. Findings, not method narration.
- **Method numbers gathered in one visual block** (survey n, interviews,
  competitive analyses) rather than scattered through prose.
- **User quotes carry a role label.** A quote attributed to "district
  manager" or "analyst" is cheap credibility; an unattributed quote is
  decoration.
- **Anti-pattern: publishing the interview guide.** Full question lists
  and raw session photos without captions show effort, not findings.

## Process

- **Anti-pattern: framework tutorial.** Several cases spend paragraphs
  teaching Double Diamond stages, agile cadences, or canvas exercises.
  Frameworks are demonstrated through decision quality, never named and
  explained (also a standing rule in this project).
- **Anti-pattern: Discover / Define / Ideate / Design / Test as page
  structure.** Reads as a course assignment at senior level.

## Solution — decisions

- **Rejected iteration, named and costed.** The strongest recurring
  shape in the sample, found independently in three cases: iteration 1
  described → the specific way it failed (API bloat, user confusion,
  compatibility conflicts) → iteration 2 → what the fix cost. This is
  the second card type in `section-model.md`.
- **Show how the decision was made when a method existed.** One case
  names its selection rules: a reuse threshold for keeping elements, an
  accessibility filter, a similarity threshold with its cutoff value.
  The method is more convincing than the result.
- **Alternatives at strategy level.** One case opens by comparing the
  three existing systems that could have been adopted and why each
  failed the constraints — alternatives aren't only for UI choices.
- **Principle → design → evidence in one card.** A strong case states a
  behavioural principle in one line, the design that embodies it, and
  the measured result of the change. Nothing else.
- **Domain numbers beat research numbers.** "185 columns down to 56",
  "5 links per course, 7 days each" convince more than session counts.
- **A before/after pair judged by the author.** Two versions of one
  artefact side by side, with one line on why the shipped one won and —
  if true — that the other was reverted after seeing it. Evidence of
  judgement, not process.
- **Anti-pattern: feature tour.** Screenshot + benefit caption
  ("Never miss a task") repeated per feature. The most common failure
  in the sample: describes the product, contains no decisions.

## Outcome

- **Grade the upfront criteria, with status labels.** Each success
  criterion from Problem gets a verdict and an honesty label: measured,
  anecdotal, not yet measurable, projected. One case does this while
  explicitly declining to invent a retention number — and reads more
  senior for it.
- **Benchmarked metrics with named source** (see Hero) — the strongest
  positive-outcome form in the sample.
- **An unmeasurable effect stated as such** beats a big number with no
  baseline, period, or source. One case pairs a hard number with a
  second effect flagged "hard to quantify"; another shows four large
  percentages with no provenance and reads as marketing.
- **Anti-pattern: volume-of-work metrics as impact.** Hypotheses tested,
  goals completed, components built, personas created — effort counts,
  not outcomes. Same for lists of 30 component names.
- **Anti-pattern: testimonial screenshot as the only result.**

## Reflection

- **A learning is specific or it is filler.** "Test with users who
  haven't seen the product before, not returning interviewees" survives;
  "innovation should be introduced gradually" does not.
- **One specific claim about what was genuinely hard** ("the hard part
  wasn't the components, it was agreeing what each team owned") is the
  senior register for reflection.

## Visuals and captions

- **Numbered annotations on a screenshot** instead of paragraphs about
  the UI: 3–5 callouts, each naming an element and the reason it is that
  way. Replaces prose; doesn't duplicate it.
- **Version labels on images** ("first iteration" / "shipped") let a
  pair of images carry an iteration story with almost no text.
- **One diagram carrying the argument.** A single journey/curve figure
  that links findings to intervention points can replace several
  paragraphs — but only if the caption says what to conclude.

## Page-level style

- **Anti-pattern: bold in every sentence.** When everything is salient,
  nothing is. Bold at most one phrase per paragraph, and only claims.
- **Anti-pattern: flat portfolio with every project at equal weight** —
  the tier rules in `quality_criteria.md` exist for this reason.
- **NDA note done right:** one closing line stating that names and
  visuals were altered while process and results are accurate.

## Bad example, kept for contrast

The first AI draft of the Netology Solution section:

```markdown
### Why the share prompt moved into the video player after launch

The share prompt now appears inside the player when a lecture ends. The
first release put it under the video instead.

That first version had been through 12 RITE sessions. Early participants
struggled with unclear headings and missed the button in the visual
noise. I rewrote the copy and simplified the layout; in the follow-up
sessions all 12 completed the task without help.

After launch, only [X]% of students generated a share link. Testing had
only checked whether people could share when a facilitator asked them to.

I interviewed students who had watched lectures but not shared. [One or
two sentences: what they said]

The second version puts the prompt in the player at the moment a lecture
ends and states both rewards on the button: a mini-course for the
student, a 15% discount for the colleague. Six further sessions
[confirmed the flow / led to: ...].
```

What went wrong:

- It opens Solution because it had the most complete before-and-after
  story, not because it ranked highest. Chronology chose the order.
- The H3 narrates a change over time instead of stating a decision.
- Five paragraphs and three placeholders: the facts were missing and the
  draft was written anyway instead of stopping to ask.
- "Early participants struggled" and "all 12 completed" can't both be
  true if 12 was the total. Nobody checked.
- It repeats "12 RITE sessions" from Process instead of referring to it.
- No alternatives, no trade-off. Note: written as a rejected-iteration
  card with the facts filled in, this same material could be strong —
  the shape was wrong, not the story.
