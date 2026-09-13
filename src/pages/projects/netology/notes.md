---
permalink: false
eleventyExcludeFromCollections: true
---
# Дополнительный контекст задачи для этого кейс стади

## Process 

### Порядок работ
Не линейный и примерный
- Провёл предварительное пользовательское исследование чтобы понять, готовы ли пользователи делиться частью своего платного курса с коллегами и друзьями.
- Поиск идей
- Wireframing и обсуждение вариантов с продакт менеджером
- Юзабилити-тестирование и внесение изменений в дизайн по результатам тестов.
- Финализация дизайн-макетов в Figma
- Аннотации к дизайн-макету, написание документации, передача в разработку
- Консультирование разработки
- Интервью с пользователями после выкатки первой версии на прод и получения не очень хороших результатов (мало студентов генерировали ссылку для шеринга видео).
- Проектирование второй версии дизайна (добавил кнопку шеринга в видео плеер, она появляется в конце видео)
- Повторный юзабилити-тест с 6 респондентами
- Финализация дизайн-макетов в Figma
- Аннотации к дизайн-макету, написание документации, передача в разработку


### Поиск идей
- В Miro накидат карточки с возможными идеями, плюсами и минусами каждой. Пример решённых вопросов:
    - Какой будет образ решения?
    - какой контент давать шерить?
    - В какой момент лучше предлагать шарить?
    - Как мотивировать людей делиться контентом?
    - В каких ситуациях студент захочет шарить?
- Анализ похожих решений (у конкурентов и не только)

#### How the incentives were chosen (clarified in session)

The designer generated the ideas, then took them to the product manager
and the two of them criticised each option in turn to pick the strongest.
Input came from studying competitors, other education platforms, and
platforms outside EdTech solving a similar problem. Motivation was treated
as a question for the whole task, not just for the share modal.

Options considered for motivating students to share, all rejected:

- Send the student into their own communities — social network groups,
  blogs, people at work — asking them to share the material and discuss
  it there. Side benefit: discussing it helps the student learn.
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
calculated the unit economics, chose 15% as optimal and agreed it with
marketing and at least one other party.

### Флоу
 - (Для студентов) Студент делится интересным материалом со своего платного курса
 - (Публичная часть) Коллеги и подписчики студента находят пост в соцсетях, изучает материал (видео) и потом записывается на платный курс (не все запишутся)



### Вайрфреймы и визуал
Обоих флоу. Они также включают:
- Доработка страницы видео и видеоплеера чтобы подтолкнуть (мотивировать) студента к шерингу
- Модалка шеринга. Там студент генерирует ссылку и может получить вознаграждение, если кто-то из его знакомых купит курс.
- Графика и текст для шеринга в соцсетях (сложность было в том, чтобы избежать баннерной слепоты)
- Публичная страница видео (для друзей студента). Там друг пользователя должен ввести свою почту и тогда он получит доступ к платформу видео из курса.
- Email-письма
- Состояния элементов и страниц

Всего было 3 итерации wireframing с регулярными встречами с разработкой, продакт менеджером, командой дизайна и другими заинтересованными лицами вроде кураторов преподавателей, CPO и юристами.

Clarified in session: the wireframes themselves were made in Figma (Miro
held the ideation and the user flows). Legal were **not** participants in
these reviews — they were consulted separately, point by point, on
specific questions.

### Timeline (clarified in session)

From August 2023. The 4 weeks of design work cover both iterations
together, not each. The second iteration came several months after the
first, because the team had to wait for the first release's results — the
effect of a resharing feature is not visible straight away.

### How the project ended (clarified in session)

The feature delivered some benefit (figures to be added later). The team
then decided to stop experimenting with sharing variations — certificates,
materials, achievements — and redirect effort to more promising areas.
Stated reasoning:

- The effect is not always fast, not always visible, and limited in size.
- Development was too expensive to keep running experiments against,
  partly because of the legacy code.
- The referral funnel is long. Continuing to optimise each stage would
  have meant a lot of effort for a still-unknown result.



### Юзабилити-тестирование
Провёл 12 тестовых сессий по обоим при подготовке первой версии дизайна. Использовал подход RITE - если на тесте выявлял проблему, то корректировал дизайн и снова проверял решение на других респондентах. Тщательно документировал каждый тест и после проведения всех тестов анализировал результаты.
После второй итерации дизайна провёл ещё 6 сессий.


#### Round 1 — structure (clarified in session, 2026-09-13)

12 sessions total, split into two separate groups of 6:
- 6 respondents on the student sharing flow
- 6 respondents on the colleague ("friend of the student") flow

They were not one group of 12, so no "all 12 completed the task"
statement is possible. Each group carried many specific hypotheses, one
or more per step of the flow. Some hypotheses were confirmed by every
respondent in the group; others failed and the design was reworked.
Results are therefore per step and per hypothesis.

RITE in practice: after any session that surfaced a problem, the design
or the copy was changed, then the change was checked with the following
respondents — repeated until no difficulty with the interface was
observed.

#### Round 1 — student flow, findings per step

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
    are not recorded and the designer does not recall them.

#### Round 1 — colleague flow, findings (6 respondents)

Where the form came from: the design originally had **no** email form.
The designer considered it an unnecessary obstacle. It was proposed as a
compromise in discussions with the CPO, the Head of Product and the
teacher curators, who objected to students being able to share videos
from paid courses freely. To limit theft of those videos, the designer
and the PM were told to add the form. Neither of them liked the decision,
but it was a mandatory condition for the task to continue.

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

#### Round 2 — after the version 2 design (6 respondents)

- Scope: the student sharing flow only, because it was the only flow that
  changed. The colleague flow was not retested.
- The in-player share button at the end of the lecture: every respondent
  noticed it, and nobody had difficulty with it.
- Only minor changes came out of this round. In its earliest sessions,
  2 respondents did not understand a piece of copy (which copy is not
  recorded here — needs confirming).
- So the round largely confirmed version 2 rather than redirecting it.

#### Post-launch interviews (10 respondents)

- Purpose: find out why people who had pressed **Share** then did not
  create a link. Analytics had shown the gap — in one month more people
  clicked Share, but the number of links created did not rise with it.
- **No findings survive.** The designer has no notes from these sessions
  and does not recall what was said. Nothing from them can go on the page.
- The documented trigger for version 2 is therefore the funnel gap in the
  metrics, not an interview insight.

#### Research inventory — what was and was not run

Clarified in session. There were **no pre-design interviews**.

- Before this project, on tasks about sharing student **achievements**:
  interviews in which students said, unprompted, that they would like to
  share some of the materials from their paid courses. This is where the
  idea came from. Run by **another designer**, not by Vasiliy. The number
  of respondents who said it is unknown. The sessions were documented, but
  the records will not be retrieved — too much effort for too little
  value. So: attribute to another designer, cite no number.
- Pre-design, for this project: one survey, 1,083 responses, 57% of
  students said they would share learning content. Run entirely by the
  designer — wrote the questions, recruited respondents, built the Google
  Form, analysed the results. Its purpose was to put a number on the
  signal the earlier interviews had produced.
- During design: interviews as part of the usability sessions — 12 in
  iteration 1, 6 in iteration 2.
- After the first release: 10 interviews (see above).

The old page draft invented a Discovery Research section built on student
and non-student interviews that never took place, including findings about
sharing in exchange for value and preferring professional communities.
Do not reuse any of it.

### Implementation — legacy-code constraints (clarified in session)

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

Гипотезы вкратце:
- Респонденты (студенты и друзья студента) понимают функцию без затруднений достигают цели (очень обобщённая гипотеза, там было много точечных гипотез)
- Респонденты (друзья студента) не испытывают негативные эмоции, когда им предлагают заполнять форму вместо чтения контента - 

