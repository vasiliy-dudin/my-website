---
permalink: false
eleventyExcludeFromCollections: true
---

# Facts: Netology — Useful content sharing

Single source of facts for this case study. Claude writes only what is
here or what the designer confirms in a session. Raw material lives in
`notes.md` in this folder; this file holds only what has been checked.

Status values: `verified` (source can be shown) · `from my notes` ·
`unverified` (never ships) · `from draft — unconfirmed` (pre-filled, not
yet checked by the designer).

## Context

| Field | Value | Status |
|---|---|---|
| Company, market position, scale | Netology. 2nd largest EdTech platform in Russia, 2M MAU. Online IT courses, 4 months to 2 years | from draft — unconfirmed |
| Industry, B2B / B2C | EdTech, B2C and B2B | from draft — unconfirmed |
| Dates, duration, iterations | From Aug 2023. 4 weeks of design work in total, covering both iterations — not 4 weeks each. The second iteration came several months after the first: we had to wait for the first release's results, because the effect of a resharing feature is not visible immediately. | confirmed in session |
| Team (roles and counts) | 9-person Scrum team: me (senior product designer), 1 product manager, 1 product analyst, 2 frontend, 2 backend, 2 QA | from draft — unconfirmed |
| My role and scope | Owned design end-to-end: research, ideation, wireframes, UI, prototypes, annotations, handoff documentation, dev support | from draft — unconfirmed |
| Tools | Miro for ideation and user flows; Figma for wireframes, UI and prototypes; Google Forms for the survey | confirmed in session |
| Team's focus area | LMS: retention, motivation and goals, usability, homework completion, active days, COR, NPS, churn | from draft — unconfirmed |

## Problem

- Business problem: paid channels dominated student acquisition; customer
  acquisition cost was high. `from draft — unconfirmed`
- How it was identified, by whom: the product manager, from marketing
  spend analysis. `from draft — unconfirmed`
- Goal or hypothesis, with numbers: grow referral-based paid sign-ups
  from 16% to 25% within six months. Hypothesis: if students could share
  course content with colleagues, the platform would generate qualified
  leads at lower cost. `from draft — unconfirmed`

## Research I ran

| Method | Participants / n | Findings, with numbers | Decision it informed | Status |
|---|---|---|---|---|
| Earlier interviews on tasks about sharing student achievements — **run by another designer, not me** | Unknown; no count of how many respondents said it | Unprompted: students said they would like to share some of the materials from their paid courses | Raised the question this project set out to answer, and prompted my survey | confirmed in session |
| Pre-design interviews with students | 7 | Two findings survive: they prefer sharing with colleagues and in professional communities, rather than on general social networks; and they need some form of value exchange to be motivated to share. | Professional rather than social sharing; the existence of a reward | confirmed in session — little detail remains beyond these two findings |
| Pre-design survey, in Google Forms | 1,083 responses | 57% of students would share learning content | Justified building the feature at all | verified — number and figure confirmed in session |
| Competitor and cross-industry analysis | — | [GAP: what did it change?] | — | from my notes |
| Post-launch interviews | 10 | **Not recorded.** No notes survive and the designer does not recall what was said. The page must not state any finding from them. | Version 2: prompt moved into the player | n and purpose confirmed in session; findings unavailable |

The survey was mine end to end: I wrote the questions, recruited the
respondents, built the form in Google Forms and analysed the results.
`confirmed in session`

The 10 post-launch interviews had a sharper purpose than the draft
suggests. The analytics showed a gap inside the funnel: in one month more
people clicked **Share**, but the number of links actually created did not
rise with it. The interviews set out to find why people who pressed Share
then did not create a link. `confirmed in session`

Where the survey came from, and why it was quantitative: on earlier tasks
about sharing student **achievements**, another designer ran interviews in
which students said unprompted that they would like to share some of the
material from their paid courses. I picked that signal up from someone
else's research and ran the survey to find out how widely it held.
`confirmed in session`

Rules for using this on the page:

- Attribute it. "Another designer's interviews" or "interviews on an
  earlier project" — never phrasing that reads as though I ran them.
- No number. The original sessions were documented, but the designer is
  not going to retrieve them, so how many respondents said it is unknown
  and unknowable for this page.
- The credit that is mine is the response: noticing a signal in adjacent
  research and sizing it with a survey of my own before anyone committed
  to building.

**We deliberately did not interview non-students.** The product manager
and I decided there was no point: people recruited as "a student's friend"
cannot represent the real audience, so their answers could not be treated
as evidence. This was a judgement about who counts as a valid respondent,
made before the research, not a corner cut. `confirmed in session`

**Correction, superseding an earlier note in this file.** In the interview
I first said there had been no pre-design interviews; the designer then
recalled that there were — 7 with students. That is now the record above.
What remains wrong in the page draft's Discovery Research section is
narrower but still disqualifying:

- **"Non-student interviews: genuine interest in peer-shared materials,
  seen as more credible than advertising."** Invented. Those interviews
  were deliberately not run, so the draft reports findings from research
  the team decided against. `page draft — fabricated, do not reuse`
- **"a discount or free mini-course"** as the specific value students
  named. What survives is only "some form of value exchange". The two
  named rewards came later, from my own ideation. `page draft —
  over-specific, do not reuse`
- **"I ran a survey and interviews with two user segments — students and
  non-students"** — one segment, not two.

What the draft got right: student interviews took place, and their two
findings did inform the design — professional rather than social sharing,
and the need for a reward at all. See D4.

**Sequencing, confirmed in session:** run in parallel, to get data as fast
as possible. The survey launched first; the 7 interviews followed shortly
after; survey results came back some time later, since 1,083 responses
take longer to collect than 7 interviews to run. So the interview findings
were likely known before the survey number was — not "signal, then sizing"
in strict order, but close to simultaneous, with the interviews landing
first.

## Decisions

### D1. The share prompt sits inside the video player, appearing as the lecture ends (version 2)

- Why: after launch, few students generated a share link; version 1 put
  the button under the video. `from my notes`
- Alternatives considered: several ways of making the share button more
  noticeable while a student is watching the video; the in-player prompt
  at the end of the lecture won. `confirmed in session` [GAP, non-blocking:
  which other placements or triggers were on the board?]
- Trade-off accepted: [GAP]
- Evidence (test, metric, observed behaviour): the post-launch share-link
  rate `[DEFERRED-METRIC]`, 10 interviews with students who watched
  lectures but did not share — **findings not recorded** — then 6 further
  usability sessions. `from my notes`
- **Risk to flag:** the only documented basis for moving the prompt is the
  weak metric. The interviews happened, but nothing from them survives, so
  the page cannot say what students told me. Writing "I interviewed
  students, then moved the prompt" invites the obvious follow-up question
  in a walkthrough, which I could not answer. Decide on the page whether
  to name the interviews at all. **Page decision (14 Sept 2026): the
  interviews are not mentioned on the page.** The failure of version 1 is
  shown through the funnel gap; version 2 is confirmed by the 6 round-2
  sessions. Can be revisited if the card reads as missing a step.
- Who decided: me. I also chose how the in-player block behaves, the text
  shown above the player, and the moment the block appears.
  `confirmed in session`
- Constraint involved: engineering — the player could not be modified, so
  the shipped button differs from the design (see Implementation).
- Visual: `images/ui-v1-1.png` (v1), `images/solutions-1.jpg` (v2)

### D2. Colleagues enter an email before watching a shared lecture

- **Not my decision, and I argued against it.** My design had no email
  form at all — I considered it an unnecessary obstacle. The form came out
  of discussions with the CPO, the Head of Product and the teacher
  curators, who objected to letting students share videos from paid
  courses freely. To limit theft of those videos, the PM and I were told
  to add the form. Neither of us liked it, but it was a precondition for
  the task continuing at all. `confirmed in session`
- Why (their reason): piracy risk — free sharing of paid-course video.
  `confirmed in session`
- **Royalties are not part of this decision.** The draft tied teacher
  royalties to the email gate; that is wrong. Royalties were handled as a
  separate scope decision: the sharing feature was simply not enabled for
  videos whose teachers are paid per view. `confirmed in session`
  [GAP, non-blocking: who made that scope call, and roughly what share of
  lectures it excluded?]
- Alternatives considered: fully public lecture pages (my preference);
  a public teaser with the full lecture behind the email form — considered
  during ideation, dropped because of implementation complexity; full
  access after an email — the option imposed. `confirmed in session`
- Trade-off accepted: a form in front of the video, expected to cost
  conversion. Accepted because the alternative was no feature.
  `confirmed in session`
- Evidence: tested as a separate hypothesis — does a colleague asked to
  register before watching react negatively? Considered confirmed: 5 of 6
  reacted calmly, several expected the request in advance. One respondent
  said they would close the page. See Usability testing below.
  `confirmed in session`
- Who decided: the CPO, the Head of Product and the teacher curators
  imposed it; the PM and I complied under protest. **Legal were not
  involved in this decision** — the platform already collected emails
  elsewhere, so the legal questions around it had been settled long
  before. `confirmed in session`
- Constraint involved: business (piracy of paid content)
- Visual: `images/solutions-2.jpg`, `images/ideation-4.png`

**Corrected:** the page draft's My role bullet says I "negotiated the
email-gated sharing model with top management and legal". That reverses
what happened. The form was imposed on the team over my objection. It
also names "top management and legal"; the people were the CPO, the Head
of Product and the teacher curators. `page draft — wrong, do not reuse`

### D3. Limits on shared links

- Why: contain the piracy risk. `from draft — unconfirmed` (the draft also
  named royalties; see D2 — royalties were handled by excluding those
  videos, not by limits)
- The limits: 5 share links per course, 7 days per link, public page with
  an expiry date. `from draft — unconfirmed`
- Alternatives considered: [GAP]
- Trade-off accepted: [GAP]
- Evidence: [GAP — was the limit number tested or negotiated?]
- Who decided: [GAP: legal / me / PM?]
- Constraint involved: legal, business
- Visual: share modal in `images/ui-v1-1.png`, `images/ideation-2.png`

### D4. Rewards: a mini-course for the student, a 15% discount for the colleague

- Why: the 7 pre-design interviews established that students need some
  form of value exchange to share at all — but not which one. The specific
  rewards came out of my own ideation. I generated the options — informed
  by competitors, other education platforms and products outside EdTech
  solving a similar problem — then went through them with the product
  manager, arguing each one down until the strongest were left. Motivation
  was treated as a question for the whole task, not just for the share
  modal. `confirmed in session`
- Why the mini-course won, two reasons: `confirmed in session`
  1. The platform already had a mechanic for gifting mini-courses — a
     catalogue of them and every function needed to receive one — so the
     reward cost almost nothing to build.
  2. The team had earlier researched what students want as a reward.
     Courses as a gift were at the top of that list. Money, full-length
     courses and merchandise also came up, and the business could not
     afford those. [GAP, non-blocking: method and n of that earlier
     reward research, and who ran it]
- Alternatives considered, all rejected: `confirmed in session`
  - Point the student at their own communities — social network groups,
    blogs, colleagues at work — and ask them to share the material and
    discuss it there, which also has a learning benefit for the student.
  - Share content, earn points toward a free course; variants were an
    accumulating discount, cashback, sessions with a mentor, or an
    achievement badge.
  - Challenges.
  - A framing rather than a reward: if any of you are thinking about
    studying, here is what learning at Netology is actually like — let
    people try it hands-on.
  - Target the students who already want to help others: someone partway
    through a course can advise a peer on material they have covered.
    Sharing venues would be professional communities, or friends and
    family.
- Trade-off accepted: [GAP]
- **Counter-evidence:** in round 1 the discount failed as an incentive for
  the colleague — one respondent called it side information, "as though
  access to the material is the main thing and the discount was thrown in
  as change". The reward stayed as designed. `confirmed in session`
  **Page decision (14 Sept 2026): this negative finding goes into the D4
  card as one sentence of counter-evidence.**
- Evidence: the reward wording was iterated in the share modal during
  round 1, where 2 of 6 respondents misread it. That is evidence about the
  wording, not about the choice of reward. `confirmed in session`
- Who decided: the ideas were mine, filtered with the product manager. The
  15% figure was not a design decision — the product manager worked out
  the economics, picked 15% as the optimal value and cleared it with
  marketing and at least one other party. `confirmed in session`
  [GAP: who signed off the mini-course itself?]
- Constraint involved: unit economics of the course, owned by the product
  manager.
- Visual: `images/ideation-1.png` (the "How to motivate to share?"
  cluster), `images/ideation-2.png`, `images/solutions-1.jpg`

### D5. The public lecture page pushes toward a purchase

- Why: [GAP]
- What it contains: the student's discount, links to related courses, and
  conversion blocks — career guidance, social proof, how learning works.
  `from draft — unconfirmed`
- Alternatives considered: [GAP]
- Trade-off accepted: avoiding banner blindness in the shared social
  graphics and on the page was a named difficulty. `from my notes`
- Evidence: [GAP]
- Who decided: [GAP]
- Visual: `images/solutions-2.jpg`

## Usability testing

| Round | Sessions | What was tested | What failed | What changed | Status |
|---|---|---|---|---|---|
| 1 (before first release) | 12 total: 6 on the student sharing flow, 6 on the colleague flow. RITE method — a problem found in a session was fixed and the fix checked with the next respondents, until no difficulty was observed. [GAP: 30–40 min each?] | Both flows, each a multi-step journey with many specific hypotheses per step | Share button: all 6 student-flow respondents found and clicked it unassisted. Share modal: 1 of 6 did not notice the text about the limit on available links; 2 of 6 struggled to understand the text about the reward. | Reworked the modal copy and layout after each session that surfaced a problem, then checked the change with the following respondents. [GAP: the specific design changes are not recorded — designer does not recall them] | confirmed in session |
| 1 — colleague flow (part of the same 12) | 6 | The public lecture page where the video is covered by the email form block; reaction to being asked for an email instead of going straight to the content | 5 of 6 reacted calmly; several said they had expected to be asked for an email. 1 of 6 said they would close the page, not knowing whether they would get anything of value. 1 respondent did not immediately realise the video would not play. | The form page itself was not changed on the strength of this — the hypothesis was considered confirmed. The unclear "video does not play" state was reworked. | confirmed in session |
| 2 (after the version 2 design) | 6 | The student sharing flow only — it was the only flow that changed. The colleague flow was not retested. | Nothing substantial. Every respondent noticed the share button inside the player at the end of the lecture, and none had difficulty with it. In the earliest sessions of this round, 2 respondents did not understand a piece of copy. [GAP: which copy — the button label, the reward wording, something in the modal?] | Minor adjustments only; the round otherwise confirmed the design. | confirmed in session |

Structure of round 1, confirmed in session: each round carried many
specific hypotheses, not one. Some were confirmed by every respondent in
the group; others failed and the design was reworked. So results are per
step and per hypothesis, and no single "all N passed" sentence describes
the round.

**Corrected:** the page draft says participants "missed the share button
in the visual noise" and that "all 12 completed the task without help".
Neither is supported. All 6 student-flow respondents found the button.
The 12 were two separate groups of 6, so "all 12 completed" was never a
measurement. `page draft — wrong, do not reuse`

Respondent quotes, colleague flow, round 1 (translated from Russian;
originals in `notes.md`). `confirmed in session`

- The one respondent who would have left: "The discount does not push me
  to leave my email. It feels like side information — as though access to
  the material is the main thing and the discount was thrown in as
  change." They added that the promise of being sent the material by
  email did not motivate them either.
- On being asked for an email: "Everyone expects that they won't get it
  for free."
- Another: said first that they would enter their email; hadn't read the
  page but understood they could not get to the content without an email.
  "I'm used to this."

**Negative finding worth keeping on the page:** the student's discount
did not work as an incentive for the colleague to hand over an email. It
read as secondary to the content itself. This bears on D5, where the
discount is placed first after registration.

Hypotheses tested (from `notes.md`, summarised by the designer):

- Respondents (students and their colleagues) understand the feature and
  reach their goal without difficulty — one umbrella hypothesis over many
  specific ones. `from my notes`
- Colleagues do not react negatively when asked to fill in a form instead
  of going straight to the content. Considered confirmed — see the
  colleague flow row above. `confirmed in session`

Wireframing: three rounds, built in Figma, reviewed with the developers,
the product manager, the design team, the teacher curators and the CPO.
Scope of the wireframes, `from my notes`: the video page and player, the
share modal, graphics and copy for social media posts, the public video
page, the emails, and element and page states.

Ideation, `from my notes`: sticky notes in Miro with pros and cons per
idea, worked through questions including what content should be
shareable, when to prompt sharing, and how to motivate it.
**Legal were not part of these reviews** — they were consulted separately
on specific points. Session length of 30–40 minutes is correct.
`confirmed in session`

## Implementation

Two legacy-code constraints surfaced during the build, one per iteration.
Both were found after the design was formally handed over. `confirmed in
session`

- **Iteration 1 — archived lecture pages.** It emerged that a page with a
  learning video can be in an archived state. The design had no answer for
  that, so I had to design a separate state for it.
- **Iteration 2 — the video player could not be modified.** Version 2
  depended on a share button inside the player. Developers could not
  change the player itself, so I came back to the task mid-build and
  showed the button in a slightly different way.

What shipped differently from the design: the in-player share button is
presented differently from the handed-over design, and the archived state
was added late. Users were not affected — the changes were small. The cost
was my time: rethinking the solution and several extra alignment rounds
with the developers after the task had been closed. `confirmed in session`

Reflection this supports: technical discovery on legacy-code tasks belongs
with the developers at the start, not after design is complete.
`confirmed in session`

## Metrics

**`[DEFERRED-METRIC]` — all numbers in this section are on hold.** The
designer will dig out the real figures later. Until then: no metric ships
on the page, and every metric slot stays a visible placeholder. **Ask
about this section again** as soon as any task touches the Outcome
section, the post-launch share-link rate, or any numeric claim anywhere on
the page.

| Metric | Value | Baseline / goal | Version | Period | Source | Status |
|---|---|---|---|---|---|---|
| Conversion to paid courses | +14.3% in the draft | against what? | v1 or v2? | ? | ? | DEFERRED-METRIC |
| Students who copied the share link | 4.51% in the draft | goal? | v1 or v2? | ? | ? | DEFERRED-METRIC |
| Anonymous visitors to the shared page | 1,121 in the draft | — | ? | ? | ? | DEFERRED-METRIC |
| Referral share of paid sign-ups | target 25%, from 16% | — | — | six months | ? | DEFERRED-METRIC |
| Share-link rate after the first release | draft has `[X]%` | — | v1 | ? | ? | DEFERRED-METRIC |

Still unresolved inside that batch, to raise when metrics come up: whether
the draft's 4.51% "copied the link" is the same measurement as the
disappointing post-launch rate that triggered version 2, or a separate
v2 number.

## Outcome and team decision

- Result: the feature did deliver some benefit `[DEFERRED-METRIC]`.
- What the team decided, and why: stop experimenting with sharing
  variations — certificates, materials, achievements — and move the effort
  to more promising directions. The reasoning, in the team's words:
  `confirmed in session`
  - The effect of a sharing feature is neither fast nor always visible,
    and its ceiling is limited.
  - Development was too expensive to keep running experiments against,
    partly because of the legacy code.
  - The referral funnel is long. We could have kept optimising each stage,
    but that is a large amount of effort for a still-unknown result.
- [GAP: was this the PM's call, the CPO's, or a team decision?]

## Reflection notes

From the commented-out Reflection section, all `from draft —
unconfirmed`:

- Assign technical discovery to developers at the start of legacy-code
  tasks, not after design is complete.
- Conversion depended on the lecture content being more valuable than
  freely available material — outside the design team's control and not
  testable before building.
- The referral funnel needed optimisation at every step; redirecting
  effort was the right call.

## Provenance of visuals

Every image on the page is currently a Figma design, not a production
screenshot: `all.jpg`, `ui-v1-1.png`, `ui-v1-2.jpg`, `solutions-1.jpg`,
`solutions-2.jpg`, and the Miro artefacts `ideation-1.png`,
`ideation-2.png`, `ideation-4.png`. `confirmed in session`

Consequences for captions:

- Captions must describe the design, not what a user saw in production.
- `solutions-1.jpg` shows the designed in-player share button. What
  shipped looks somewhat different, because the player could not be
  modified. The page should not imply the screenshot is the live product.

The designer may later add production screenshots or a screencast. If that
happens, captions need revisiting and the design / production distinction
stated.

## Page decisions

Phase 1 plan, 14 September 2026 (Solution structure awaiting the
designer's confirmation):

- Scope of the work: the whole page, not one section — the draft
  contradicts this file in every section.
- Solution: three decision cards, ranked, not chronological — D2 (email
  gate, shape A), D4 (rewards, shape A), D1 (prompt moved into the player,
  shape B, rejected iteration). D3 and D5 are not cards: a clause inside
  D2 at most, or cut.
- D1 states the failure of version 1 qualitatively as "few students
  created a link" (`from my notes`) — not the funnel gap, which pointed at
  the modal rather than the button and would undercut the card's own
  reasoning. No number until the metrics batch is resolved.
- Captions under standalone images are italic lines, because the `image`
  shortcode has no caption parameter. The version pair for D1 uses a
  carousel, which does support captions.
- Reflection bullets 2 and 3 are proposals marked `[GAP]`; they ship only
  if the designer confirms them as their own view.
- The 10 post-launch interviews are not mentioned on the page.
- The negative finding about the discount is included in D4.
- Implementation reality: the unmodifiable player lives inside the D1
  card as its cost; the archived-page state goes in a short paragraph at
  the end of Solution.
- Royalties leave the email-gate story everywhere on the page (My role,
  Solution, captions) and appear, if at all, as one clause about scope.

## Open questions

Settled in the interview of 13 September 2026: the split of the 12
sessions, the survey figures and who ran it, what the pre-design research
actually consisted of, round 2 findings, the implementation constraints,
the origin of the incentives, the wireframing tool, session length,
legal's actual role, the timeline, and how the project ended.

### On hold by the designer's decision

1. **All metrics.** Marked `[DEFERRED-METRIC]`. Nothing numeric ships
   until the designer supplies the real figures. Raise it again at the
   first task that touches Outcome or any number on the page.

### Still open

**Recoverable, if they turn out to be worth the time.** The designer still
holds the raw usability results — every session was documented in detail
at the time. Questions 4 and part of the round 1 record below are not lost
facts, only unretrieved ones. The post-launch interviews are the exception:
those notes are genuinely gone.

2. Where the target for referral-based sign-ups came from, and who set
   it. Part of the metrics batch.
3. What the competitor and cross-industry analysis actually changed in
   the design. It is currently a line in Process with no consequence
   attached.
4. Which piece of copy 2 respondents misunderstood in the early sessions
   of round 2.
5. ~~What made the mini-course the winning incentive over the other
   options on the Miro board~~ — settled, see D4. Still open: who signed
   the mini-course off.
6. Where the link limits came from — 5 links per course, 7 days per link,
   an expiry date on the public page. Negotiated with the CPO's group,
   set by the PM, or my own proposal? Were the numbers tested?
7. D5: why the public page is ordered as it is — the student's discount
   first, then related courses, then the conversion blocks. Especially
   given the round 1 finding that the discount read as an afterthought.
8. Whether ending the sharing experiments was the PM's call, the CPO's,
   or the team's.
9. ~~Alternatives and owner for D1~~ — settled, see D1: my decision,
   chosen among several ways of raising the button's visibility. Still
   open: the specific alternatives and the trade-off.
12. ~~Whether the 7 pre-design interviews ran before or after the
    survey.~~ Settled: run in parallel, survey launched first, interviews
    likely landed first. See Research I ran.

### Raised by the reviews of 14 September 2026

13. Who the 6 colleague-flow respondents were, given that non-students
    were deliberately not recruited for the research.
14. What pointed at button visibility as the problem after launch, rather
    than the reward or the modal.
15. How the shipped in-player button differs from the design.
16. Why the discount stayed after the round 1 finding that it read as an
    afterthought.
17. Whether the 57% had a threshold to pass, and who set it.
18. The Context table: company scale, B2C/B2B, team counts, role scope
    and team focus are still `from draft — unconfirmed`. Confirm or
    correct in one pass.

### Decisions the designer needs to make about the page

10. ~~Whether to mention the 10 post-launch interviews at all~~ — settled
    14 Sept 2026: not mentioned. See D1 and Page decisions.
11. ~~How much of the incentive story to tell~~ — settled 14 Sept 2026:
    the negative result about the discount goes into the D4 card. See D4
    and Page decisions.
