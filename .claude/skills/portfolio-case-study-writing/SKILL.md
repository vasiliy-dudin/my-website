---
name: portfolio-case-study-writing
description: Write, edit, and audit text content for product design portfolio case studies. Use this skill whenever the user asks to write, rewrite, improve, review, or critique any section of a portfolio case study — including Hero, Problem, My Role, Research, Solution, Outcome, and Reflection sections. Also use when editing bullet points for a case study, checking whether writing sounds AI-generated, auditing a case study draft against quality standards, or assessing seniority signals in portfolio content. Apply this skill any time the user pastes case study text and asks for feedback, even if they don't explicitly call it a "case study."
---

# Portfolio Case Study Writing

Write, edit, and audit text for product design portfolio case studies. This skill applies a consistent quality standard across all seven case study sections, based on how hiring managers actually read portfolios in 2025–2026.

## Supplementary reference files

Load these when needed — do not load all at once:

- `quality-flags.md` — anti-patterns, AI-generated text patterns, word quality flag/keep table. Load when auditing a draft.
- `context.md` — seniority signals, market context. Load when assessing seniority positioning or strategic fit.

---

## Core principle

AI should refine existing content, not generate it from scratch. Every claim, metric, and tool name must trace back to what the designer has actually provided. If required detail is missing, ask — do not fill gaps with plausible-sounding assumptions.

If context is ambiguous, a decision has more than one valid path, or key details (metrics, team size, timeline, outcomes) are missing — ask rather than invent. If a structural or editorial decision is genuinely hard to make without more context, name the options and ask which the author prefers.

**When working from a recommendations file, brief, or restructuring guide:** that document provides content direction only — what information to include, what to cut, what order to follow. It does not provide writing-quality-cleared copy. Treat it as a source of intent, not a source of prose. Apply all writing standards to the final output independently: paragraph weight, conciseness, abbreviation expansion, I/we accuracy. Do not carry the source document's sentence structures, paragraph breaks, or unexpanded abbreviations into the output. If the source document says "merge these three sections into one," merge the information — not the formatting. The result should still consist of short, focused units.

---

## How case studies are actually read

- Hiring managers scan first: headings, subheadings, the first sentence of each paragraph. Full reading only happens if scanning caught their interest.
- The decision to keep reading is made in the first 30–60 seconds — based on whether the product, problem, and role are immediately clear.
- A portfolio with 2–3 deeply explained case studies outperforms one with 8 shallow ones.
- "Dribbble-style" portfolios — polished screenshots with no context — read as junior signals, not senior ones.

---

## Paragraph weight and structural tools

**One paragraph, one idea.** A paragraph's readability depends on its total weight, not just sentence count. Three sentences with multiple subordinate clauses can be harder to scan than five short ones. Do not use a fixed sentence count as a pass/fail test — instead, ask: does this paragraph create a wall of text on screen? Would a scanning reader skip it?

If a paragraph is too heavy, apply these options in order:

1. **Shorten and simplify individual sentences.** Cut subordinate clauses. Break compound sentences in two. Replace multi-word phrases with single words where meaning is preserved. Try this first — it often resolves the problem without restructuring.
2. **Remove sentences that don't add new information.** If a sentence restates the previous one, explains something the reader can infer, or adds hedging without substance, cut it.
3. **Split using a descriptive H3 subheading.** Use this when the paragraph genuinely covers more than one idea and shortening alone isn't enough. A descriptive H3 followed by one short focused paragraph is always more scannable than a merged long one. This is especially important inside sections that cover multiple sub-points (Problem, Solution, Reflection).

**Front-load key information.** The most important content goes first in each paragraph. Readers who skim read the first sentence and skip the rest.

**Keep consecutive paragraphs in check.** More than 2–3 paragraphs in a row without a break creates a wall of prose. If this happens: shorten paragraphs, add a H3 subheading, or move content to its own section.

**Bullet lists** are for genuinely enumerable items only. If points are logically connected, one tight sentence beats three weak bullets. Maximum 5–6 items per list.

**H2 section headings** are short and standard — "Research", "Solution", "Outcome". They appear in page navigation; readers use them to jump to a section. Do not make H2 headings long or descriptive.

**H3 and H4 subheadings** can and should be descriptive. Their primary job inside a dense section is to let each sub-point be its own short focused paragraph, rather than forcing everything into one long block. When a section covers multiple distinct ideas, H3 subheadings are the correct solution to paragraph weight — not longer sentences with more conjunctions.

- Stronger H3: *Why we gated access behind email registration*
- Weaker H3: *Decision*

H2 headings read top to bottom should tell the structure of the case study. H3/H4 headings read top to bottom should tell the story inside their section.

---

## Writing standards

### Voice and person
- First person, active voice: "I ran", "We decided" — not "analysis was conducted."
- "I" for individual decisions. "We" for team decisions. Never mix them within the same claim.
- Hiding behind passive voice makes the designer's contribution invisible.

### Verbs and specificity of action
- Use verbs that describe a concrete action: "ran 8 user interviews", "proposed an alternative flow to the PM", "negotiated scope reduction with engineering."
- Avoid: "participated in", "worked with", "was involved in", "collaborated on."
- Specific numbers are more convincing than vague quantities: "3 prototype iterations" beats "several iterations."
- Where metrics don't exist, describe observable behaviour or qualitative shifts — do not replace absent data with "improved the experience."

### Abbreviations and domain terminology
- Spell out any abbreviation on first use: "Learning Management System (LMS)", "Net Promoter Score (NPS)".
- Not all portfolio readers share the same domain background. A hiring manager at a fintech may not know what LMS means; a recruiter at an edtech company may not know what MRR is.
- If a technical term is central to the case study, define it in context — one clause is enough.
- **Team role abbreviations are not universal.** PM, FE, BE, QA and similar are not understood by all hiring managers and recruiters. Spell them out on first use ("product manager", "frontend engineer", "backend engineer", "QA engineer"), or omit the enumeration entirely if the team composition is already shown visually on the page.

### Tone
- Confident but not self-congratulatory. State what happened — do not editorialise about how significant it was.
- Describe difficulties and trade-offs honestly. A case study with no tension is not credible.
- Not promotional. A case study is an account of thinking under real constraints, not a product pitch.
- Do not over-explain decisions defensively. State context, choice, reason — move on.

### Human voice
The writing should sound like a product designer talking to a peer — direct, informed, occasionally dry. Not a press release, not a stakeholder update, not a manager's quarterly review.

- Vary sentence length deliberately. A short sentence hits harder after a longer one.
- Write as though the reader is smart and time-poor: give them what they need to understand, not what makes the work sound impressive.
- Avoid corporate register: "leveraged", "delivered value", "drove impact", "stakeholder-aligned" signal performance review language, not honest reflection.
- Use "I" and "we" naturally — not "the team" or "the project". Real people write about their work in first person.

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
- [ ] Does any paragraph feel heavy or dense on screen — regardless of sentence count? If yes: first try shortening or simplifying sentences; if still too heavy, split with a descriptive H3 subheading.
- [ ] Does the output carry over sentence structures, paragraph formatting, or unexpanded abbreviations from a source document (recommendations file, brief, restructuring notes) without applying writing quality checks to them?
