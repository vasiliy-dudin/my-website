---
permalink: false
eleventyExcludeFromCollections: true
---

# Additional context for this case study

Raw material for the Netology "Useful content sharing" case, gathered from
the designer's original notes and clarified across a facts interview on
2026-09-13. Reorganised into one order on 2026-09-13; no content removed
in the reorganisation, only reordered and translated to English.

## Timeline

From August 2023. The 4 weeks of design work cover both iterations
together, not each. The second iteration came several months after the
first, because the team had to wait for the first release's results — the
effect of a resharing feature is not visible straight away.

## Overall order of work

Not linear, and approximate:

- Ran preliminary user research to find out whether users were willing to
  share part of their paid course with colleagues and friends.
- Searched for ideas.
- Wireframed and discussed variants with the product manager.
- Ran usability testing and changed the design based on the results.
- Finalised the design in Figma.
- Annotated the designs, wrote documentation, handed off to development.
- Advised development during the build.
- Interviewed users after the first version shipped to production and the
  results were not great (few students were generating a share link for
  the video).
- Designed the second version (added a share button inside the video
  player, appearing at the end of the video).
- Ran a second usability test with 6 respondents.
- Finalised the design in Figma.
- Annotated the designs, wrote documentation, handed off to development.

## Discovery research

Clarified in session, then corrected later in the same session: the
designer first said there had been no pre-design interviews, then recalled
that there were.

### Where the idea came from

Before this project, on earlier tasks about sharing student
**achievements**: interviews in which students said, unprompted, that they
would like to share some of the materials from their paid courses. This is
where the idea for this project came from. Those interviews were run by
**another designer**, not by Vasiliy. The number of respondents who said
it is unknown. The sessions were documented at the time, but the records
will not be retrieved for this case — too much effort for too little
value. Rule for the page: attribute this to another designer, and cite no
number.

### Pre-design interviews with students (7)

Very little detail survives beyond two findings:

- They prefer sharing with colleagues and in professional communities,
  rather than on general social networks.
- They need some form of value exchange to be motivated to share. Which
  specific form was not established by these interviews — the mini-course
  and the 15% discount came later, out of the designer's own ideation (see
  Ideation below).

### The decision not to interview non-students

Friends of students were **deliberately not interviewed**. The designer
and the product manager decided together that it made no sense: people
recruited to play "a student's friend" cannot represent the real audience,
so their answers could not be treated as truth. This was a decision about
respondent validity taken before the research, not an omission.

### Pre-design survey (1,083 responses)

Run entirely by the designer: wrote the questions, recruited respondents,
built the form in Google Forms, analysed the results. Result: 57% of
students said they would share learning content.

Putting a number on the signal from the earlier interviews was **one of**
the survey's purposes, not the only one — the questionnaire covered other
ground as well, which is not recorded here.

### Sequencing of the interviews and the survey

Run in parallel, to get data as fast as possible. The survey launched
first; the 7 interviews followed shortly after and finished first, since
7 interviews are quicker to run than 1,083 survey responses are to
collect. So the interview findings likely arrived before the survey number
did, even though the survey started first.

### Full research inventory, for reference

- Before this project: interviews on a different task, run by another
  designer (see above) — the origin of the idea.
- Pre-design, this project: 7 student interviews plus the 1,083-response
  survey, run in parallel.
- Non-students: deliberately not interviewed.
- During design: interviews as part of the usability sessions — 12 in
  iteration 1, 6 in iteration 2 (see Usability testing below).
- After the first release: 10 interviews (see Post-launch interviews
  below).

### What the old page draft got wrong

- It reports findings from **non-student interviews** that were
  deliberately never run. Invented.
- It says students named "a discount or free mini-course" as the value
  they wanted. Only "some form of value exchange" survives from the actual
  interviews; the two specific rewards were designed later by the
  designer.
- It says the research covered "two user segments". It was one segment
  (students).

The student interviews themselves, and their two findings, are real, and
they did inform two decisions: professional rather than social sharing,
and the inclusion of a reward at all (see Ideation).

## Ideation

In Miro, sticky notes with possible ideas and their pros and cons. Example
questions worked through:

- What should the solution look like?
- What content should be shareable?
- At what moment is it best to prompt sharing?
- How do we motivate people to share content?
- In what situations would a student want to share?

Also: analysis of similar solutions, both from competitors and outside the
category.

### How the incentives were chosen

The designer generated the ideas, then took them to the product manager,
and the two of them criticised each option in turn to pick the strongest.
Input came from studying competitors, other education platforms, and
platforms outside EdTech solving a similar problem. Motivation was treated
as a question for the whole task, not just for the share modal.

Options considered for motivating students to share, all rejected:

- Send the student into their own communities — social network groups,
  blogs, people at work — asking them to share the material and discuss it
  there. Side benefit: discussing it helps the student learn.
- "Share content, earn points toward a free course." Variants: an
  accumulating discount, cashback, sessions with a mentor, an achievement
  badge.
- Challenges.
- A framing rather than a reward: if any of you are thinking of studying,
  here is what learning at Netology actually looks like — let them try it
  hands-on.
- Target students who already want to help others: a student partway
  through a course can advise a peer on material they have covered.
  Sharing venues: professional communities, or friends and family.

What shipped: a mini-course for the student, a 15% discount for the
colleague. The 15% was not a design decision — the product manager
calculated the unit economics, chose 15% as optimal, and agreed it with
marketing and at least one other party.

## Flows

- **Student flow:** a student shares an interesting piece of material from
  their paid course.
- **Public / colleague flow:** the student's colleagues and followers find
  the post on social media, look at the material (video), and then some —
  not all — sign up for the paid course.

## Wireframes and visuals

Covering both flows. This also included:

- Reworking the video page and video player to nudge (motivate) the
  student to share.
- The share modal, where the student generates a link and can get a
  reward if someone from their network buys the course.
- Graphics and copy for sharing on social media (the difficulty here was
  avoiding banner blindness).
- The public video page (for the student's friends). The friend has to
  enter their email, and then gets access to the course's video platform.
- Emails.
- Element and page states.

Three iterations of wireframing in total, with regular meetings involving
development, the product manager, the design team, and other stakeholders
such as the teacher curators, the CPO and lawyers.

Clarified in session: the wireframes themselves were made in Figma (Miro
held the ideation and the user flows).

Legal were **not** participants in these wireframe reviews — they were
consulted separately, point by point, on specific questions. They had no
part in the email-gating decision either, and did not need one: the
platform already collected email addresses in other places, so those
legal questions had been settled long before this project. The objection
to free sharing was a business one, about theft of paid video, not a
legal one.

## Usability testing

Ran 12 test sessions across both flows while preparing the first design
version. Used the RITE approach — if a session surfaced a problem, the
design was corrected and then checked again with other respondents.
Documented every test carefully, and analysed the results once all tests
were complete. After the second design iteration, ran 6 more sessions.

### Round 1 — structure

12 sessions total, split into two separate groups of 6:

- 6 respondents on the student sharing flow.
- 6 respondents on the colleague ("friend of the student") flow.

They were not one group of 12, so no "all 12 completed the task"
statement is possible.

Why no single summary of the round exists, in the designer's own framing:
each round carried many hypotheses, not one. Some were confirmed by every
respondent in the group; others were not, and the design had to be
reworked. Each user flow ran through several stages, with several
different actions and elements at which a respondent could get stuck. So
results exist per stage, per element and per hypothesis — not as one
verdict on the round.

Session length: 30–40 minutes each. Every session was documented in
detail at the time, and the results were analysed once all the sessions
were done.

**The raw results still exist.** The designer has them, but they are too
multi-layered to summarise from memory. Anything still marked as a gap in
the usability findings — which piece of copy confused people in round 2,
what exactly was changed in the modal after each RITE fix — is
recoverable from that raw material if it turns out to be worth the time.

RITE in practice: after any session that surfaced a problem, the design or
the copy was changed, then the change was checked with the following
respondents — repeated until no difficulty with the interface was
observed.

### Round 1 — student flow, findings per step

- **Share button under the video:** all 6 respondents found it and
  clicked it unassisted. (This contradicts the old page draft, which
  claimed participants missed the button in the visual noise. That claim
  is wrong.)
- **Share modal:** more than one problem here.
  - 1 of 6 did not notice the text about the limit on the number of
    available share links.
  - 2 of 6 had difficulty understanding the text about the reward.
  - Response: changed the design and the copy after each such session,
    then retested with the next respondents. The specific design changes
    are not recorded, and the designer does not recall them.

### Round 1 — colleague flow, findings (6 respondents)

Where the form came from: the design originally had **no** email form.
The designer considered it an unnecessary obstacle. It was proposed as a
compromise in discussions with the CPO, the Head of Product and the
teacher curators, who objected to students being able to share videos from
paid courses freely. To limit theft of those videos, the designer and the
PM were told to add the form. Neither of them liked the decision, but it
was a mandatory condition for the task to continue.

The page tested: the course video page, with the video covered by a block
containing the email form.

Hypothesis — "colleagues do not react negatively when asked to fill in a
form instead of reading the content" — was **considered confirmed**.

- 5 of 6 reacted calmly. Several had expected in advance that they would
  be asked for an email.
  - "Все ожидают, что бесплатно не дадут." — Everyone expects that they
    won't get it for free.
  - "Сначала сказала, что ввела бы почту. Не читала, но поняла, что не
    может без почты прочитать контент. Привыкла к такому." — Said first
    that they would enter their email. Hadn't read the page, but
    understood they could not get to the content without an email. Used
    to this.
- 1 of 6 said they would close the page, because they could not tell
  whether they would get anything useful. On the incentives:
  - "Скидка не подталкивает оставить почту. Ощущается как побочная
    информация. «Как будто доступ к материалу это основное, а скидку на
    сдачу докинули». Обещание прислать материал на почту тоже не
    подталкивает." — The discount does not push me to leave my email. It
    feels like side information: as though access to the material is the
    main thing and the discount was thrown in as change. The promise of
    being sent the material by email is no incentive either.
- Changes made: the form page was **not** changed on the strength of
  this, since the hypothesis was considered confirmed. One respondent did
  not immediately understand that the video would not play — that state
  was reworked.

Negative finding worth carrying onto the page: the discount failed as an
incentive for the colleague. It read as secondary to the content.

### Hypotheses tested, in brief (designer's summary)

- Respondents (students and their colleagues) understand the function
  without difficulty and reach their goal — a very generalised hypothesis;
  in practice there were many specific, pointed hypotheses beneath it.
- Respondents (friends of students) do not experience negative emotions
  when asked to fill in a form instead of reading the content straight
  away. Considered confirmed — see the colleague flow findings above.

### Round 2 — after the version 2 design (6 respondents)

- Scope: the student sharing flow only, because it was the only flow that
  changed. The colleague flow was not retested.
- The in-player share button at the end of the lecture: every respondent
  noticed it, and nobody had difficulty with it.
- Only minor changes came out of this round. In its earliest sessions,
  2 respondents did not understand a piece of copy (which copy is not
  recorded here — needs confirming).
- So the round largely confirmed version 2 rather than redirecting it.

### Post-launch interviews (10 respondents)

- Purpose: find out why people who had pressed **Share** then did not
  create a link. Analytics had shown the gap — in one month more people
  clicked Share, but the number of links created did not rise with it.
- **No findings survive.** The designer has no notes from these sessions
  and does not recall what was said. Nothing from them can go on the page.
- The documented trigger for version 2 is therefore the funnel gap in the
  metrics, not an interview insight.

## Implementation — legacy-code constraints

Both were discovered mid-build, after the design had been handed over.

- **Iteration 1:** it turned out that pages holding a learning video can
  be in an archived state. That state had not been designed, so a separate
  state had to be made for it.
- **Iteration 2:** the video player itself could not be modified. Version
  2 relied on a share button inside the player, so the designer had to
  return to the task during development and present the button in a
  slightly different way.

Effect on users: none noticeable — the changes were small. The real cost
was the designer's time: rethinking the solution and several separate
alignment rounds with the developers, on a task that had formally been
closed.

## How the project ended

The feature delivered some benefit (figures to be added later). The team
then decided to stop experimenting with sharing variations — certificates,
materials, achievements — and redirect effort to more promising areas.
Stated reasoning:

- The effect is not always fast, not always visible, and limited in size.
- Development was too expensive to keep running experiments against,
  partly because of the legacy code.
- The referral funnel is long. Continuing to optimise each stage would
  have meant a lot of effort for a still-unknown result.

## Visuals — what we have

Everything currently in the case folder is a **Figma design**, not a
production screenshot: `all.jpg`, `ui-v1-1.png`, `ui-v1-2.jpg`,
`solutions-1.jpg`, `solutions-2.jpg`, plus the Miro artefacts
`ideation-1.png`, `ideation-2.png`, `ideation-4.png`.

The designer may later add material from production, possibly including a
screencast. Until then, captions describe designs. This matters most for
the in-player share button: the shipped version looks somewhat different
from `solutions-1.jpg`, because the player could not be modified.
