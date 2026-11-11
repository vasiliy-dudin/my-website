---
title: "[Draft] High student acquisition costs"
feature: "Useful content sharing"
description: Netology (EdTech, B2C, B2B)
company: Netology
labels: [EdTech, B2C, B2B]
result: "57 purchases from shared lectures, 5,586 visitors"
headerSeed: 2
headerHues: [163, 256]
category:
  - Product Design
  - UX Research
years: From Sep 2024, 4 weeks of design work, 2 iterations
layout: project
type: case-study
order: 1
enabled: true
permalink: "/projects/netology/"
headerInfo:
  - title: "About company"
    text: "The 2nd largest EdTech platform in Russia, 500k MAU."
  - title: "Team's focus"
    text: "LMS, student motivation and goals, retention, usability, homework completion, active days, COR, NPS, churn."
  - title: "Tools"
    text: "Figma, Miro, Google Forms"
---

{% projectSection %}
	## My role
	{% myRole team=[
			{role: "Senior product designer", icon: "me"},
			{role: "Product manager", icon: "product-manager", count: 1},
			{role: "Product analyst", icon: "product-analyst", count: 1},
			{role: "Frontend devs", icon: "dev", count: 2},
			{role: "Backend devs", icon: "dev", count: 2},
			{role: "QAs", icon: "qa", count: 2}
		] %}

	- Owned design end to end across 2 iterations on a 9-person Scrum team: user research, wireframes, UI, prototypes and handoff.
	- Ran a survey (1,083 responses) and 7 student interviews to test demand before design started.
	- Ran 18 usability sessions over two releases, covering both sides: the student who shares and the friend who opens the link.
	{% endmyRole %}
{% endprojectSection %}

{% projectSection %}
	## Problem

	Most new students came through paid marketing, and each one cost too much to acquire.

	**Business goal:** raise the referral share of new paying customers from 16% to 25%. It was split into three parallel tasks: sharing lecture material, and improving how students share achievements and certificates.

	**Hypothesis:** if students can share lectures with friends and colleagues, some of them will buy a course, and new students will come from referrals instead of paid marketing.
	The target: 50 paid purchases from shared lectures.
{% endprojectSection %}

{% projectSection %}
	## Discovery research

	==I ran a Google Forms survey (1,083 responses)== and ==7 student interviews== to find out how many students would share material from their courses, and what would make them do it. The question came from interviews on an earlier task, where some students raised it unprompted.

	- !!57% of students said they would share learning content.!! Enough to justify building it.
	- Students wanted something in return for sharing, which is why the final design includes a reward.
	- We deliberately did not interview non-students: someone recruited as "a student's friend" cannot stand in for the real audience.
{% endprojectSection %}

{% projectSection %}
	## Process

	- ==Ideation in Miro:== what to make shareable, when to ask for a share and how to motivate it, each idea with its pros and cons.
	- ==Mapped two user flows:== a student sharing a lecture, and a friend opening the link.
	- ==Three rounds of wireframes== in Figma: the player, the share modal, the public lecture page, emails and page states. Reviewed with the developers, the product manager, the design team, the teacher curators and the CPO.
	- ==12 usability sessions== of 30–40 minutes before the first release, 6 per flow, using RITE: I fixed problems between sessions and checked the fixes with the next respondents. 6 more before the second release.
	- Annotated the designs, wrote the handoff documentation and stayed with the developers through both builds.

	{% carousel id="process", width=922, height=524, lightboxWidth=2400, chipsLabel="Process artefacts", slides=[
			{src: "images/user-flows.png", label: "User flows", alt: "Two activity diagrams with swimlanes. Student and system: the routes to Share, a check for links left, then copying the link or picking a network. Friend and system: opening the link, checks for an expired link or an archived lecture, and the email form with its error messages", caption: "Two flows: the student shares, the friend opens the link. Most error cases sit on the friend's side."},
			{src: "images/wireframes-share-placement.png", label: "Placement wireframes", alt: "First wireframes of the Share entry point, in four groups: a button by the lecture title, a block above the video, a block below the video, and four layouts beside the lesson navigation. Yellow sticky notes hold my comments on the options", caption: "First wireframes of the Share entry point: by the title, beside the lesson navigation, above or below the video."},
			{src: "images/miro-ideas.png", label: "Ideas", alt: "Sticky-note board grouped under pink headings: 'What can be shared?', 'How to motivate to share?', 'How to interest friends', 'Restrictions', 'When do we ask to share?', 'What does the friend see?', 'Questions', 'References' and 'Vision', with reference screenshots alongside", caption: "Ideas clustered by question. The motivation cluster fed the reward decision in Solution."},
			{src: "images/wireframes-email-form.png", label: "Email form wireframes", alt: "First wireframes of the email form for the friend: a form in place of the video, a modal over a blurred page, a modal with a casual headline, and a modal naming the student who shared", caption: "First wireframes of the friend's email form: in place of the video, or in a modal over the page."}
		] %}
{% endprojectSection %}

{% projectSection %}
	## Solution

	[Final design in Figma](https://www.figma.com/design/PRRKLkvSCGa70cACuEOPGR/Netology--Useful-content-sharing?node-id=658-16327&p=f&t=xtCRNw9KjjQXQNwJ-11)

	- A student clicks Share under the video, or on the block that appears over the video as the lecture ends, and creates a link: 5 per course, 7 days each.
	- They send the link to a friend or post it on social media.
	- The friend opens the public lecture page, leaves an email and watches the lecture.
	This page reuses the sections of an earlier page for sharing student achievements, which had performed well there. I replaced the top section, with the video and the discount.

	{% image src="images/video-page-before-after.png", className="", alt="The lecture page before the task and after both releases. After, both outlined: a Share button with a bonus label next to the lecture title, from the first release, and a Share the video button in the corner of the video, from the second", width=922, lightbox=true, lightboxWidth=2400, caption="Before the task and after both releases: the Share button by the title (first) and over the video (second)." %}

	{% image src="images/friend-page-new-vs-reused.png", className="", alt="The friend's public lecture page. Left, the new top section: lecture title, a note that it comes from the Product Manager course, the video, and a block with the student's 15% gift and promo code. Right, the sections below it, reused from the achievements page: course catalogue, graduate stories, a callback form, how studying works, and questions and answers", width=922, lightbox=true, lightboxWidth=2400, caption="The friend's page: a new top section with the lecture and the discount, above reused sections." %}

	### A mini-course for the student, 15% off for the friend

	The student gets a free mini-course, the friend 15% off their first purchase.

	The platform could already gift mini-courses, so this reward cost almost nothing to build. The 15% was the product manager's number.

	I found reward options from competitors and products outside EdTech, then filtered them with the product manager. Pricier rewards failed the unit economics, and asking students to post in professional communities was far harder than asking them to send a link.

	{% carousel id="rewards", width=922, height=380, lightboxWidth=2400, chipsLabel="Rewards", slides=[
			{src: "images/hero-share-modal.png", label: "Share modal", alt: "Share modal over a lecture page: Share interesting lecture, a free mini-course for you, 15% off the first purchase for your friend, a lecture preview, a Copy Link button with social network buttons, and the note 5 links left, each works 7 days", caption: "The share modal leads with both rewards: a mini-course for the student, 15% off for the friend."},
			{src: "images/miro-motivation.png", label: "Reward ideas", alt: "Sticky notes under the heading 'How to motivate to share?': points towards a free course, a discount, cashback or mentor sessions; a gift for the student with a discount for the friend; expert status; challenges; a leaderboard; a count of people who shared; and asking to discuss in communities", caption: "Reward ideas from ideation: points, cashback, mentor sessions, challenges, posts in communities."}
		] %}

	### An email form, required to protect paid video

	My design had no form. The Head of Product and the CPO worried that open links would let paid-course video be pirated, so they made an email form their condition for the task going ahead.

	I saw the form as an extra step that could cost conversion, so I tested how friends reacted to it. 5 of 6 respondents took it calmly, and several had expected to be asked for an email. One said they would close the page.

	{% image src="images/email-form-locked.png", className="", alt="The public lecture page before the friend leaves an email: the video is dimmed and covered by a card reading Usually for enrolled students, Watch the lecture for free, You'll also get 15% off your first purchase, with an email field and a Watch lecture button", width=922, lightbox=true, lightboxWidth=2400, caption="The form covers the video and names what the friend gets: the lecture, and 15% off." %}

	### A second Share button, over the video as it ends

	In the first release the Share button sat under the video. Four weeks in, analytics showed few students clicking it, while every step after the click was healthy.

	My hypothesis was that during a lecture attention sits on the player. So the second release added a block over the video in its last few seconds, with a Share button and both rewards. In 6 usability sessions every respondent noticed it.

	{% image src="images/share-block-closeup.png", className="", alt="Design spec for the sharing block in the player. 5 seconds before the end, a Share the video button appears in the top-right corner and opens on hover: For you – mini-course, For a friend – 15% discount. After the video ends, the block stays open over the Next video screen. Below, the block component, default and opened", width=922, lightbox=true, lightboxWidth=2400, caption="Second release: near the end, a Share the video button appears over the player and shows both rewards on hover." %}

	Legacy code brought issues nobody on the team had foreseen, among them archived lecture pages and a player the developers could not modify. I designed the missing state and presented the in-player button another way.
{% endprojectSection %}

{% projectSection %}
	## Outcome

	{% ImpactRow %}
		{% impact name="Paid purchases via shared lectures", valueOld="", valueNew="57", goodOrBad="good", goal="50", mainOrNot="main" %}
		{% impact name="Free and paid enrolments", valueOld="", valueNew="141", goodOrBad="neutral", goal="", mainOrNot="" %}
		{% impact name="Shares by students", valueOld="", valueNew="4,618", goodOrBad="neutral", goal="", mainOrNot="" %}
		{% impact name="New visitors to the shared page", valueOld="", valueNew="5,586", goodOrBad="neutral", goal="", mainOrNot="" %}
	{% endImpactRow %}

	- !!35 friends paid as they enrolled!!, and 22 more bought later, after starting with a free course.
	- Measured five months after the second release, the time the whole funnel needed to run.
	- Each shared link carried a referral code, so a friend who bought months later still counted.

	### The feature beat its target, sharing as a whole fell short
	- The feature stayed in the product, but all three sharing tasks together still left referral share below 25%.
	- So the product manager stopped investing in sharing: results took months to read, and every change meant working around legacy code.
{% endprojectSection %}

{% projectSection %}
	## Reflection

	- ==I'd try to bring usability test scenarios even closer to real usage==, though no test can fully match it. All 6 respondents found the Share button, yet in real use few students clicked it.
	- ==I'd ask the product manager and dev lead for technical research before design is finished== when a task spans many pages and features built on legacy code. Not every edge case can be foreseen, but here several needed extra work from me, the developers and other teams.
	- ==I'd discuss the risks with the product manager earlier and in more detail== when a hypothesis is high-risk or has a long funnel. Here a purchase could take five months to show up, and an earlier talk might have shortened the test.
{% endprojectSection %}
