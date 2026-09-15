# Visuals: images, carousels, callouts

Reviewers come to a portfolio to see the work, so this file is not an
argument for fewer images. It decides which images do a job, and stops
the page turning into a gallery the reader scrolls past.

**Only use shortcodes the site already has.** Available: `projectSection`,
`image`, `carousel`, `myRole`, `ImpactRow` / `impact`. Never invent one —
an unknown shortcode breaks the build. If a rule below needs a component
that doesn't exist yet, say so and use the nearest available option.

## Image budget per page

- Hero: one.
- Each decision card in Solution: one visual, always.
- Elsewhere: at most one supporting set, normally the Process artefacts.
- Anything beyond that is cut.

Every image needs a reason to exist, a caption saying what to look at,
and alt text. Criteria in `quality_criteria.md`.

## Which form to use

| Situation | Form |
|---|---|
| One image carries a decision or a finding | Single `image` with a caption |
| Two versions of one artefact, compared | `carousel`, slides labelled with the versions |
| 3–4 artefacts of one kind, supporting rather than deciding | `carousel` |
| A dense UI screenshot that needs explaining | Single image with 3–5 numbered annotations baked into it |
| The image only shows that work happened | Cut it |

Annotations replace prose about the interface; never write both. Keep
each to a short phrase naming an element and why it is that way.

Note on the `image` shortcode: it has no caption parameter, so a caption
under a single image renders as italic body text. Where the caption is
essential to the argument, a one-slide carousel is the more reliable
option until the component gains a caption parameter.

## Carousels

Readers engage far less with anything past the first slide of a
carousel, and often don't advance at all. A labelled chip selector — the
`carousel` shortcode's `label` and `chipsLabel` — reduces that problem,
because the labels say what else is there, but it doesn't remove it.

Use a carousel when:

- The slides are a set the reader is meant to compare (versions of one
  screen, variants of one component, steps of one flow), **or**
- Several artefacts of the same kind support one point and putting them
  inline would add a screen of scrolling for the reader.

Rules:

- **Nothing essential past slide 1.** If a reviewer would miss the
  argument by never advancing, the content belongs inline. The shipped
  solution is never behind another slide.
- Slide 1 is the most important one, not the earliest in time — except
  in a version comparison, where chronological order is the point.
- 2–4 slides. More means the set is doing several jobs; split or cut.
- Every slide has a `label` (2–4 words, says what the slide is) and a
  caption saying what to look at.
- Alt text on every slide.
- At most two carousels per page.
- Never a carousel for a single image, except where a caption is
  essential (see the note above).

Do not use a carousel to keep material that failed the image budget. A
carousel hides length; it doesn't remove it.

## Callouts

A callout is a short block set apart from the body. There is no callout
shortcode on the site yet, so until one exists, propose the content and
flag that the component is missing rather than inventing markup.

A callout earns its place only when both are true:

1. A reader who skims the page and reads nothing else must still get
   this, and
2. It would lose force inside a paragraph — because it is someone
   else's words, or a constraint that explains more than one decision,
   or an admission about what is not known.

Permitted types, and nothing else:

| Type | What it holds |
|---|---|
| Evidence quote | A verbatim user or stakeholder line, with the speaker's role |
| External constraint | A limit imposed from outside design that shapes several decisions, stated once and referred to later |
| Honesty statement | What could not be measured, or was not validated, and why |

Never a callout for: the decision itself (that is the H3), the
trade-off (that is a sentence in the card), a metric (that is the
`ImpactRow`), a summary of the section, or anything already emphasised
in bold.

Budget: at most one per section and three per page, never two in a row.
Two callouts near each other cancel out — the reason bold in every
sentence fails.

**Callout text counts against the card and page word budgets.** Moving a
sentence into a callout does not buy space; if a card is over 120 words,
a callout inside it keeps it over.
