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
| Company, market position, scale | Netology. 2nd largest EdTech platform in Russia, **500k MAU**. Online IT courses, 4 months to 2 years | confirmed in session |
| Industry, B2B / B2C | EdTech, B2C and B2B | confirmed in session |
| Dates, duration, iterations | From September 2024. 4 weeks of design work in total, covering both iterations — not 4 weeks each. The second iteration followed the first release once analytics showed the share rate was too low | confirmed in session |
| Gap between the two releases | **Not recorded**, and the designer has no figure. It cannot be inferred from the measurement either: the trigger for the second iteration was visible four weeks after the first release | confirmed in session |
| Team (roles and counts) | 9-person Scrum team: me (senior product designer), 1 product manager, 1 product analyst, 2 frontend, 2 backend, 2 QA | confirmed in session |
| My role and scope | Owned design end-to-end: research, ideation, wireframes, UI, prototypes, annotations, handoff documentation, dev support | confirmed in session |
| Tools | Miro for ideation and user flows; Figma for wireframes, UI and prototypes; Google Forms for the survey | confirmed in session |
| Team's focus area | LMS: retention, motivation and goals, usability, homework completion, active days, COR, NPS, churn | confirmed in session — COR still needs spelling out for the page |

## Problem

- Business problem: paid channels dominated student acquisition; customer
  acquisition cost was high. `from draft — unconfirmed`
- How it was identified, by whom: the product manager, from marketing
  spend analysis. `from draft — unconfirmed`
- Hypothesis: if students could share course content with colleagues, the
  platform would generate qualified leads at lower cost. `from draft —
  unconfirmed`

### Two levels of goal, and the page must keep them apart

**Business goal: referral share of new paying customers**, also phrased as
the referral share of paid sign-ups. From 16% to 25%. `confirmed in
session — the designer decided to keep these figures on the page as they
stand` **No deadline goes on the page.** `confirmed in session`

The business goal was never this project's to hit alone. Three tasks were
aimed at it and designed in parallel: `confirmed in session`

1. Sharing lecture material — this case.
2. Optimising the funnel for sharing student achievements.
3. Optimising the funnel for sharing course completion certificates.

Results for tasks 2 and 3 arrived before this one's, so the business goal
was measured last, after this feature's numbers were in. `confirmed in
session`

**My target for this case: 50 paid course purchases attributed to shared
lecture links.** `confirmed in session`

## Research I ran

| Method | Participants / n | Findings, with numbers | Decision it informed | Status |
|---|---|---|---|---|
| Earlier interviews on tasks about sharing student achievements — **run by another designer, not me** | Unknown; no count of how many respondents said it | Unprompted: students said they would like to share some of the materials from their paid courses | Raised the question this project set out to answer, and prompted my survey | confirmed in session |
| Pre-design interviews with students | 7 | **One finding survives:** students need some form of value exchange to be motivated to share. Which form was not established here | The existence of a reward | confirmed in session — little detail remains beyond this finding |
| Pre-design survey, in Google Forms | 1,083 responses | 57% of students would share learning content | Justified building the feature at all | verified — number and figure confirmed in session |
| Competitor and cross-industry analysis | — | [GAP: what did it change?] | — | from my notes |
| Post-launch interviews | 10 | **Not recorded.** No notes survive and the designer does not recall what was said. The page must not state any finding from them | Version 2: prompt moved into the player | n and purpose confirmed in session; findings unavailable |

The survey was mine end to end: I wrote the questions, recruited the
respondents, built the form in Google Forms and analysed the results.
Putting a number on the signal from the earlier interviews was one of the
survey's purposes, not the only one. `confirmed in session`

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

**Sequencing:** the interviews and the survey ran in parallel, to get data
as fast as possible. The survey launched first; the 7 interviews followed
shortly after and finished first, since 7 interviews are quicker to run
than 1,083 responses are to collect. So the interview findings likely
arrived before the survey number did. `confirmed in session`

**The 10 post-launch interviews** set out to understand why so few
students shared after the first release. No findings survive, so the
documented basis for version 2 is the post-launch share rate, not anything
students said. `confirmed in session`

## Decisions

### D1. The share prompt sits inside the video player, appearing as the lecture ends (version 2)

- Why: after the first release few students generated a share link.
  Version 1 put the Share button under the video. `from my notes`
- **Where in the funnel it failed:** in the first part of it. Students
  clicked the Share button under the video poorly. Web analytics showed no
  problem at the later stages, which is what ruled out the share modal and
  the steps after it. `confirmed in session`
- **When it was seen: four weeks after the first release.** Results were
  read regularly, not at one fixed checkpoint, and the low click rate on
  the Share button is the first funnel step, so it showed up quickly. **No
  figure is attached to it**, so the page states the observation without
  a number. `confirmed in session`
- **The hypothesis that followed:** while watching a lecture a student's
  attention is narrow and sits on the player, so a more noticeable button
  inside the player would raise clicks. `confirmed in session`
- **What version 2 changed, precisely:** the Share button under the video
  stayed where it was. Version 2 added a second entry point, a block with
  a share button shown on top of the video, appearing at the end of the
  lecture. Version 2 therefore has two share buttons, not one moved one.
  `confirmed in session`
- Alternatives considered: other ways of lifting the share rate, weighed
  with the product manager and rejected on two grounds — some were not
  viable (the unit economics could not support more expensive rewards),
  and for others we doubted the problem lay in that part of the interface,
  because analytics showed those stages were healthy. `confirmed in
  session` [GAP, non-blocking: which specific placements or triggers were
  on the board?]
- Trade-off accepted: **none, and this is settled.** The block appears a
  few seconds before the lecture ends, by which point there is nothing
  useful left on screen, so it costs the student no content. The page
  states the timing and omits any trade-off. `confirmed in session`
- Evidence: the low click rate on the Share button, seen four weeks after
  the first release, then 6 further usability sessions in which every
  respondent noticed the in-player button. The 10 post-launch interviews
  happened but produced nothing usable. `confirmed in session`
- Who decided: me. I also chose how the in-player block behaves, the text
  shown above the player, and the moment the block appears. `confirmed in
  session`
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
  involved** — the platform already collected emails elsewhere, so the
  legal questions around it had been settled long before. The objection
  was commercial, about theft of paid video, not legal. `confirmed in
  session`
- Constraint involved: business (piracy of paid content)
- Visual: `images/solutions-2.jpg`, `images/ideation-4.png`

**Teacher royalties are a separate scope decision, not part of this one.**
The sharing feature was simply not enabled for videos whose teachers are
paid per view. `confirmed in session` [GAP, non-blocking: who made that
scope call, and roughly what share of lectures it excluded?]

### D3. Limits on shared links

- The limits, **confirmed in session and cleared to ship**: 5 share links
  per course, 7 days per link, and an expiry date on the public page.
  After expiry the public page shows an "Access to the content has
  expired" state inviting the visitor to the course.
- Why, two reasons, both `confirmed in session`:
  1. To stop whole courses being downloaded in bulk.
  2. To make the offer feel limited, for the student and for the
     colleague receiving the link.
- Alternatives considered: not recorded.
- Trade-off accepted: not recorded.
- Evidence: **none, deliberately.** The numbers were never tested, and
  the designer's position is that numbers of this kind do not need
  testing. `confirmed in session`
- Who decided: the product manager and I agreed the values between us.
  `confirmed in session`
- Constraint involved: business
- Visual: share modal in `images/ui-v1-1.png`, `images/ideation-2.png`

### D4. Rewards: a mini-course for the student, a 15% discount for the colleague

- Why a reward at all: the 7 pre-design interviews established that
  students need some form of value exchange to share — but not which one.
  The specific rewards came out of my own ideation. I generated the
  options, informed by competitors, other education platforms and products
  outside EdTech solving a similar problem, then went through them with
  the product manager, arguing each one down until the strongest were
  left. Motivation was treated as a question for the whole task, not just
  for the share modal. `confirmed in session`
- **Why the mini-course won, two reasons:** `confirmed in session`
  1. The platform already had a mechanic for gifting mini-courses — a
     catalogue of them and every function needed to receive one — so the
     reward cost almost nothing to build.
  2. The team had earlier researched what students want as a reward, and
     a course as a gift was at the top of that list. Money, full-length
     courses and merchandise also came up, and the business could not
     afford those. [GAP, non-blocking: method and n of that earlier
     reward research, and who ran it]

  Reason 1 is the easier of the two to defend: reason 2 rests on research
  whose method, sample size and owner are not recorded.
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
- **Why those options lost:** mostly not economics. Economics ruled out
  only the more expensive rewards. The rest were judged less effective or
  less promising for this particular task — getting students to publish in
  professional communities, for instance, is far harder to motivate than
  getting them to send a link. `confirmed in session`
- Trade-off accepted: [GAP]
- Evidence: the reward wording was iterated in the share modal during
  round 1, where 2 of 6 respondents misread it. That is evidence about the
  wording, not about the choice of reward. `confirmed in session`
- **The colleague's discount was 15%, in both the first and the second
  release.** `confirmed in session` Some images in the case folder show
  10% (`ui-v1-1.png` in its second modal, `ui-v1-2.jpg` throughout).
  Those are earlier design drafts, not what shipped. [GAP, non-blocking:
  worth replacing or relabelling those images so the page and the
  pictures agree.]
- Who decided: the ideas were mine, filtered with the product manager. The
  15% figure was not a design decision — the product manager worked out
  the economics, picked 15% as the optimal value and cleared it with
  marketing and at least one other party. `confirmed in session`
  [GAP: who signed off the mini-course itself?]
- Constraint involved: unit economics of the course, owned by the product
  manager.
- Visual: `images/ideation-1.png` (the "How to motivate to share?"
  cluster), `images/ideation-2.png`, `images/solutions-1.jpg`

### D5. The public lecture page is a reused page with a new top section

**This is a reuse decision, not a design-from-scratch one, and the page
must say so.** `confirmed in session`

- What was reused: the sections of an earlier public page built for a
  different task, sharing student **achievements**. Most sections came
  across unchanged.
- Why: that page had already performed well in the achievements task.
  `confirmed in session` — the designer's own assessment, no figure
  attached.
- What I changed: the first (top) section only, replacing it with the
  shared video and the student's discount. `confirmed in session`
- What the page contains: the student's discount, links to related
  courses, and conversion blocks — career guidance, social proof, how
  learning works. `from draft — unconfirmed`
- Trade-off accepted: avoiding banner blindness in the shared social
  graphics and on the page was a named difficulty. `from my notes`
- Evidence: a metric on the achievements task improved; which one is not
  recorded and the designer treats it as unimportant. The page states the
  reuse as his own assessment and attaches no figure. `confirmed in
  session`
- Who decided: the reuse and the replacement of the top section were
  mine. `confirmed in session`
- Visual: `images/solutions-2.jpg`. The expired state of the same page
  was shown in session as a screenshot but is **not** in the case folder.

## Usability testing

| Round | Sessions | What was tested | What failed | What changed | Status |
|---|---|---|---|---|---|
| 1 (before first release) | 12 total: 6 on the student sharing flow, 6 on the colleague flow, 30–40 minutes each. RITE method — a problem found in a session was fixed and the fix checked with the next respondents, until no difficulty was observed | Both flows, each a multi-step journey with many specific hypotheses per step | Share button: all 6 student-flow respondents found and clicked it unassisted. Share modal: 1 of 6 did not notice the text about the limit on available links; 2 of 6 struggled to understand the text about the reward | Reworked the modal copy and layout after each session that surfaced a problem, then checked the change with the following respondents. [GAP: the specific design changes are not recorded — designer does not recall them] | confirmed in session |
| 1 — colleague flow (part of the same 12) | 6 | The public lecture page where the video is covered by the email form block; reaction to being asked for an email instead of going straight to the content | 5 of 6 reacted calmly; several said they had expected to be asked for an email. 1 of 6 said they would close the page, not knowing whether they would get anything of value. 1 respondent did not immediately realise the video would not play | The form page itself was not changed on the strength of this — the hypothesis was considered confirmed. The unclear "video does not play" state was reworked | confirmed in session |
| 2 (after the version 2 design) | 6 | The student sharing flow only — it was the only flow that changed. The colleague flow was not retested | Nothing substantial. Every respondent noticed the share button inside the player at the end of the lecture, and none had difficulty with it. In the earliest sessions of this round, 2 respondents did not understand a piece of copy. [GAP: which copy — the button label, the reward wording, something in the modal?] | Minor adjustments only; the round otherwise confirmed the design | confirmed in session |

The 12 were two separate groups of 6, not one group of 12. Each round
carried many specific hypotheses rather than one: some were confirmed by
every respondent in a group, others failed and the design was reworked. So
results exist per step and per hypothesis, and no single "all N passed"
sentence describes a round. `confirmed in session`

**The raw results still exist.** Every session was documented in detail at
the time. The gaps above — which copy confused people in round 2, what
exactly changed in the modal after each RITE fix — are unretrieved rather
than lost, and recoverable if they turn out to be worth the time. The
post-launch interviews are the exception: those notes are gone.

Respondent quotes, colleague flow, round 1 (translated from Russian;
originals in `notes.md`). `confirmed in session`

- On being asked for an email: "Everyone expects that they won't get it
  for free."
- Another: said first that they would enter their email; hadn't read the
  page but understood they could not get to the content without an email.
  "I'm used to this."
- The one respondent who would have left: "The discount does not push me
  to leave my email. It feels like side information — as though access to
  the material is the main thing and the discount was thrown in as
  change." They added that the promise of being sent the material by
  email did not motivate them either.

**How to treat that third quote.** It is one respondent's reaction, not a
finding. The team did not conclude that the discount was secondary or
ineffective, and did not change it on the strength of the remark. The page
must not state that the discount failed as an incentive. `confirmed in
session`

**The designer's position on why that is not a problem, and the lesson it
supports.** `confirmed in session` A usability test answers two different
kinds of question, and only one of them well:

- **Comprehension and difficulty** — if a respondent stumbles or misreads
  something, that is a real finding, it gets fixed, and the fix is checked
  with the next respondents. That is what happened with the reward copy.
- **Whether a motivator actually motivates** — a test cannot settle this.
  One person disliking an incentive is normal; not every incentive suits
  everyone. Real interest only becomes knowable from quantitative data
  after release.

So the Reflection bullet must not read as "the discount failed and we
shipped it anyway". It reads as: the test told us the incentive was
understood, the release numbers told us it worked. Keep it short — the
designer's instruction is not to labour the point.

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
page, the emails, and element and page states. **Legal were not part of
these reviews** — they were consulted separately on specific points.
`confirmed in session`

Ideation, `from my notes`: sticky notes in Miro with pros and cons per
idea, worked through questions including what content should be
shareable, when to prompt sharing, and how to motivate it.

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
was added late. **How exactly the production button differs is not
recorded, and the designer does not consider it worth retrieving.** The
page says only that the button was presented another way. `confirmed in
session` Users were not affected — the changes were small. The cost
was my time: rethinking the solution and several extra alignment rounds
with the developers after the task had been closed. `confirmed in session`

Reflection this supports: technical discovery on legacy-code tasks belongs
with the developers at the start, not after design is complete.
`confirmed in session`

## Metrics

All figures below are cleared to ship.

**Measurement window: the fifth month after the second release,
cumulative.** Results were read regularly rather than at one checkpoint,
but the numbers recorded here are the month-five snapshot. Five months is
how long the whole funnel needs to run: a colleague may register for a
free course first and buy a paid one only later, or buy after a delay for
other reasons. `confirmed in session`

### Main metric

| Metric | Goal | Result | Status |
|---|---|---|---|
| Paid course purchases attributed to shared lecture links | 50 | 57 | confirmed in session |

**How purchases were attributed.** A full tracking system existed for this,
built so that a purchase counted even when the colleague did not buy
straight away. `confirmed in session`

- The student's colleagues arrive on the public lecture page through a URL
  carrying a **protected referral code**.
- When such a visitor registers, they are marked with a flag in the admin
  panel.
- The flag is what lets a later purchase be tied back to the shared link,
  months after the visit.

This is why the month-five measurement window is the honest one: the
tracking supports delayed purchases, so reading the funnel earlier would
have undercounted.

Short name for the page and the `impact` tile, chosen by the designer:
**"Paid purchases from shared lectures"**. `confirmed in session`

### Proxy metrics

**No targets were set for any of these** — results only. Do not present
them as met or missed. `confirmed in session`

| Metric | Result | Detail |
|---|---|---|
| Shares | 4,618 | A share counts when the student copied the link or used one of the social-network buttons |
| Views of the public lecture page | 7,243 | From 5,586 unique new external visitors |
| Applications for free products | 113 | Some of these users were already registered on the platform |
| Registrations | 158 | 35 paid, 106 free, 17 registered without taking a product. Part of the free 106 converted to paid later |

The 158 and the 57 are consistent: 35 paid at sign-up, and later
conversions out of the free cohort account for the rest. `confirmed in
session`

### Business goal — not reached

Referral share of new paying customers did not reach 25%, even with all
three tasks contributing. This case made a large contribution but it was
not enough. `confirmed in session` The miss is one reason the product
manager stopped investing in sharing — see Outcome and team decision.

## Outcome and team decision

Two results at two levels, and the page must not blur them. `confirmed in
session`

- **This feature succeeded.** 57 paid purchases against a target of 50,
  and it stayed in the product. The page should say plainly that this
  solution worked well enough. `confirmed in session`
- **The business goal was missed.** Referral share of new paying
  customers did not reach 25%. It was measured last, after this feature's
  results were in, and the three tasks together were not enough. This
  case contributed a lot; it still fell short. `confirmed in session`
- **Then, the product manager's decision:** no further investment. No
  more work on the funnel stages, and no new sharing experiments —
  certificates, materials, achievements. The effort went to more promising
  directions. `confirmed in session` The reasons:
  - Sharing has a low ceiling — three tasks at the goal did not close it.
  - Its effect is slow to read: the second release needed five months for
    the whole funnel to run.
  - Every change meant working around legacy code.
  - The referral funnel is long, so optimising it stage by stage was
    costly for an uncertain return.

**The stop was a response to the business goal being missed, not to this
feature failing.** `confirmed in session`

## Reflection notes

From the page draft, all `from draft — unconfirmed`:

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
`solutions-2.jpg`, `main.png`, and the Miro artefacts `ideation-1.png`,
`ideation-2.png`, `ideation-4.png`. `confirmed in session`
`main.png` is the share modal design used on the page under the rewards
decision.

Consequences for captions:

- Captions must describe the design, not what a user saw in production.
- `solutions-1.jpg` shows the designed in-player share button. What
  shipped looks somewhat different, because the player could not be
  modified. The page should not imply the image is the live product.
- The `image` shortcode has no caption parameter, so a caption under a
  single image renders as italic body text. The `carousel` shortcode does
  take captions per slide.

**Every image now in the folder is a draft.** The designer intends to
replace them, and the set may grow. Two consequences, both `confirmed in
session`:

- The 10% discount visible in `ui-v1-1.png` and `ui-v1-2.jpg` is a
  leftover from an earlier draft. 15% shipped in both releases. The
  images will be replaced rather than the page reworded.
- When images are replaced or added, captions, alt text and the design /
  production distinction all need revisiting. The same applies if
  production screenshots or a screencast arrive.

## Never write this on the page

Claims from earlier drafts that are false as written. The true version
follows each one.

- **"Interviews with non-students found…"** — no pre-design research with
  friends of students was ever run; the team decided against it. The 6
  colleague-flow respondents in usability round 1 are a different thing
  and their findings are usable.
- **"The research covered two segments, students and non-students."** —
  the pre-design research covered one: students.
- **"Students preferred sharing with colleagues and in professional
  communities, not on general social networks."** — nobody said this in the
  interviews or the survey. What the research does support: a signal that
  students felt a need to share useful content (another designer's
  interviews, and the 57%). The ideation options about professional
  communities in D4 are the designer's own ideas, not findings, and stay.
- **"All 12 completed the task without help."** — the 12 were two groups
  of 6 on different flows. No statement spans all 12.
- **"Participants missed the share button in the visual noise."** — in
  round 1 all 6 student-flow respondents found it unassisted. Separately
  and also true: in production few students clicked it, and that is what
  triggered version 2. Both hold; do not merge them into one claim.
- **"I negotiated the email gate with top management and legal."** — it
  was imposed by the CPO, the Head of Product and the teacher curators,
  over my objection. Legal had no part in it. "Pushed back on it" is
  accurate.
- **"Royalties are why the email form exists."** — royalties were handled
  by excluding those videos from the feature entirely.
- **"Students clicked Share but did not create a link."** — the drop was
  earlier, at the click on the button under the video. Problems found in
  the share modal during testing are a separate and real thing.
- **"The second release reached the referral target."** — it reached
  *this case's* target, 57 purchases against 50. The business goal of 25%
  referral share was missed. Never let the case target stand in for the
  business goal.
- **"The team stopped because the goal was met."** — the opposite. The
  stop followed the business goal being missed by all three tasks.
- **"The first release took about four months to read."** — the weak
  share rate was visible at four weeks. Five months is the second
  release's window, not the first's.
- **"+14.3% conversion", "4.51% copied the link", "1,121 visitors"** —
  invented in an earlier draft, deleted for good. See Metrics.


## Page decisions

Settled by the designer on 15 September 2026, when the Solution section
was rewritten from scratch. These choices hold until the designer changes
them.

**Solution structure: three decision cards, in this order.** Chosen over a
two-card alternative that would have dropped the rewards card.

1. `### Colleagues enter an email before the lecture plays` — D2, written
   as a choice card.
2. `### A Share button inside the player, added after launch` — D1,
   written as a rejected-iteration card. Three earlier headings were
   rejected by the designer: "Why version 2 added a prompt inside the
   player" read as a justification, "A second share prompt, inside the
   player" was unclear, and any heading using "share prompt" was too
   vague for a non-designer.

**The page says "Share button", never "share prompt".** "Prompt" now
reads as an instruction to an AI model for most non-designers, and the
page is read by hiring managers who are not all designers. The plain
noun is used in the intro, the card heading, the carousel label, the
captions and the alt text. The ideation bullet in Process says "when to
ask for a share" rather than "when to prompt sharing" for the same
reason.

**The page says "first release" and "second release", never "version 1"
and "version 2".** Version numbering read as design variants rather than
as two things that shipped months apart. This applies to body text,
carousel labels, captions and alt text.
3. `### A mini-course for the student, 15% off for the colleague` — D4,
   written as a choice card.

Around the cards:

- A descriptive intro of 3 bullets before the cards, one per step of the
  journey. It carries the link limits (5 per course, 7 days each).
- The reuse of the public lecture page (D5) as two sentences after the
  intro, not as a card.
- Implementation reality as two sentences at the end of the section:
  archived lecture pages, and the player the developers could not modify.

**Not cards, by the ranking in the section model:** the link limits (D3),
which have a why but no alternatives, trade-off or evidence; and the
public lecture page (D5), which is a reuse decision.

**Carousel order in card 2:** the shipped version 2 design is slide 1 and
version 1 is slide 2, against chronological order, because the visuals
rules forbid putting the shipped solution behind another slide. The chips
are labelled "Version 2" and "Version 1".

**Page length is over budget and the designer accepts it for now.** With
the Solution section in place the page runs about 1,060 words of body
text against the 700–900 target in the section model; Solution itself is
about 460. The next content task on this page should cut Discovery
research or Process, not Solution.

**Outcome structure, settled 20 September 2026.** Four `impact` tiles: the
main metric with its goal, then shares, new visitors and registrations, so
the reader sees the funnel that makes 57 credible. Chosen over a one-tile
alternative that put the whole funnel in bullets, which buried the scale.

- **The three proxy tiles use `goodOrBad="neutral"`, not `"good"`.** Green
  is the site's "target met" state, used that way on the Practicum page,
  and these metrics have no target. A `.impact.--neutral` variant was
  added to `src/styles/pages/project_content.sass` for this.
- **Views (7,243) stay off the page.** The skim reviewer had to reconcile
  four denominators in three sentences. The page carries shares →
  applications → registrations → purchases; views live here only.
- **The prose names the missing 22 conversions outright** rather than
  leaving 57 − 35 for the reader to compute.

**Problem carries both levels of goal.** The business goal names the three
parallel tasks in one clause; this case's own target of 50 purchases sits
under it. Without that split, Outcome reads as a contradiction.

**The `callout` paired shortcode does exist** on the site, styled in
`src/styles/components/callout.sass` and used on the Practicum page,
contrary to the note in `references/visuals.md`. Nothing on this page
uses it yet.

## Open questions

### Still open

2. Where the 16% baseline and the 25% target for referral share came from,
   and who set them. Both are still `from draft — unconfirmed`; the
   designer chose to keep them on the page as they stand.
3. What the competitor and cross-industry analysis actually changed in the
   design. It is currently a line in Process with no consequence attached.
4. Which piece of copy 2 respondents misunderstood in the early sessions
   of round 2.
5. Who signed off the mini-course as the student's reward.
6. D1: which specific placements or triggers were on the board besides the
   in-player prompt.
7. D4: what was given up by choosing the mini-course.
9. Who the 6 colleague-flow respondents were, given that non-students
   were deliberately not recruited for the research.
10. Whether the 57% had a threshold to pass, and who set it.
11. Who made the royalties scope call, and roughly what share of lectures
    it excluded.
12. What COR stands for. It shows on the page as `COR [GAP: spell out]`.

### Closed, do not ask again

- The link limits (5 per course, 7 days, expiry on the public page):
  confirmed, agreed with the product manager, never tested and not to be
  tested. See D3.
- D1's trade-off: there is none. See D1.
- How the shipped in-player button differs from the design: not recorded,
  and not worth retrieving. See Implementation.
- What the achievements page's "performed well" rests on: an unrecorded
  metric the designer treats as unimportant. See D5.
- The 10% on the current images: a draft leftover, to be fixed by
  replacing the images. See Provenance of visuals.
- Who ended the sharing experiments: the product manager, after the
  business goal was missed despite all three tasks. See Outcome and team
  decision.
- The gap between the two releases: not recorded. See Context.
- How purchases were attributed to shared links: a protected referral
  code and a registration flag. See Metrics.
