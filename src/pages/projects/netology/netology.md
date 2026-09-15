---
title: "[Draft] High student acquisition costs"
feature: "Useful content sharing"
description: Netology (EdTech, B2C, B2B)
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
    text: "The 2nd largest EdTech platform in Russia, 2M MAU. It offers a variety of online IT courses from 4 months to 2 years long."
  - title: "My team's focus"
    text: "Learning Management System (LMS): retention, motivation and goals, usability, homework completion, active days, COR [GAP: spell out], NPS, churn."
  - title: "Tools"
    text: "Miro, Figma, Google Forms"
---

{% projectSection %}
	{% image src="images/all.jpg", className="", alt="Overview of the Figma file: the video page with the share flow, the social media post, and the public video page, zoomed in on the email form in front of the video", width=922, priority="high" %}
	
	[Final design in Figma](https://www.figma.com/design/PRRKLkvSCGa70cACuEOPGR/Netology--Useful-content-sharing?node-id=658-16327&p=f&t=xtCRNw9KjjQXQNwJ-11)
{% endprojectSection %}

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

	- Owned design end to end across 2 iterations on a 9-person Scrum team: research, wireframes, UI, prototypes and handoff.
	- Sized a signal from another designer's interviews with a 1,083-response survey and 7 student interviews before anything was built.
	- Ran 18 usability sessions across the student and colleague flows, over two rounds.
	- Pushed back on the email form in front of shared lectures, then designed and tested it once the business made it a condition.

	{% endmyRole %}
{% endprojectSection %}

{% projectSection %}
	## Problem

	Paid channels brought in most new students, and each acquisition cost too much. The product manager found this in the marketing spend analysis.

	The target was to raise the share of paid sign-ups that come through referrals [DEFERRED-METRIC: from X% to Y% within six months]. The hypothesis: if students could share course content with colleagues, the platform would get qualified leads at a lower cost.
{% endprojectSection %}

{% projectSection %}
	## Discovery research

	Another designer's interviews on an earlier task had turned up students saying, unprompted, that they would like to share their course material, so I sized that signal with a 1,083-response survey in Google Forms and 7 interviews with students, run in parallel.

	- **57% of students said they would share learning content.** Enough to justify building.
	- Students preferred sharing with colleagues and in professional communities, not on general social networks.
	- They needed something in return to share at all.
	- We deliberately did not interview non-students: someone recruited as "a student's friend" cannot stand in for the real audience.

	The reward in the design exists because of the third finding. [GAP: what in the design, if anything, came from the professional-circles finding?]
{% endprojectSection %}

{% projectSection %}
	## Process

	- Ideation in Miro: what to make shareable, when to ask for a share and how to motivate it, each idea with its pros and cons.
	- Mapped two user flows: the student sharing a lecture, and the colleague opening the link.
	- Three rounds of wireframes in Figma covering the player, the share modal, the public lecture page, the emails and the page states, reviewed with the developers, the product manager, the design team, the teacher curators and the CPO.
	- 12 usability sessions of 30–40 minutes before the first release, 6 per flow, using RITE: fix a problem after the session that surfaced it, retest with the next respondents. 6 more before the second.
	- Annotated the designs, wrote the handoff documentation and stayed with the developers through both builds.

	{% carousel id="process", width=922, height=460, lightboxWidth=2400, chipsLabel="Process artefacts", slides=[
			{src: "images/ideation-1.png", label: "Ideas", alt: "Miro ideation board with sticky-note clusters headed 'How to motivate to share?', 'How to engage colleagues' and 'Restrictions', above three draft user flow diagrams", caption: "Ideas clustered by question. The motivation cluster fed the reward decision in Solution."},
			{src: "images/ideation-4.png", label: "User flows", alt: "Two user flow diagrams: a student sharing a video lecture, and a friend opening the shared link, with a highlighted group of three variant paths to reach the content", caption: "Three ways for the colleague to reach the video. The email-form path shipped; why is in Solution."}
		] %}
{% endprojectSection %}

{% projectSection %}
	## Solution

	- A student watching a lecture sees a Share button in the player, and creates a link: 5 per course, 7 days each.
	- They send the link to a colleague or post it on social media.
	- The colleague opens the public lecture page, leaves an email and watches the lecture.
	The public lecture page reuses the sections of an earlier page for sharing student achievements, which had performed well there. I replaced the top section, with the video and the discount.

	### Colleagues enter an email before the lecture plays

	My design had no form. The CPO, the Head of Product and the teacher curators refused to let paid-course video be shared freely.

	- A fully public lecture page. My preference, and refused.
	- A teaser with the lecture behind the form. Dropped, too complex to build.
	- Full access after an email. Imposed, and shipped.

	I pushed back, lost, and designed the form: without it there was no feature. It was expected to cost conversion, so I tested the reaction on its own. 5 of the 6 respondents on that flow reacted calmly. One would have closed the page.

	{% image src="images/solutions-2.jpg", className="", alt="Three designs: a social media post carrying the lecture, the public lecture page with an email form covering the video, and the same page after access, showing a 15% discount from the student and a course catalogue", width=922, lightbox=true, lightboxWidth=2400 %}

	*Designs, not production. The form covers the video; the colleague's discount sits below it.*

	### A Share button inside the player, added after launch

	The first release put a Share button under the video.

	After launch, few students clicked it [DEFERRED-METRIC: share-link rate, release and period]. Analytics showed the steps after the click were healthy, which ruled out the modal and everything after it.

	My hypothesis: during a lecture a student's attention sits on the player. So the second release added a share button on top of the video for the last few seconds, where nothing useful is left on screen.

	In 6 sessions on the new flow every respondent noticed the button. The rethink cost a second design round, and about four months of waiting for the first release's numbers.

	{% carousel id="share-prompt", width=922, lightboxWidth=2400, chipsLabel="Share button, both releases", slides=[
			{src: "images/solutions-1.jpg", label: "Second release", alt: "Design for the second release: a Share the video button on top of the player, with both rewards named beside it, the original Share button still under the video, and the share modal", caption: "Second release: the share button on top of the video, with both rewards beside it. The button underneath stayed."},
			{src: "images/ui-v1-1.png", label: "First release", alt: "Design for the first release: the player with a Share button underneath it, and the share modal with a Create a link button and the link limit", caption: "First release: the Share button sat under the player, away from where attention is during a lecture."}
		] %}

	### A mini-course for the student, 15% off for the colleague

	The student gets a free mini-course, the colleague 15% off their first purchase. I generated the options from competitors and products outside EdTech, then filtered them with the product manager.

	- Points, cashback, mentor sessions, badges. The pricier ones failed the unit economics.
	- Students posting and discussing in professional communities. Far harder to motivate than sending a link.
	- A framing instead of a reward, showing what studying here is actually like. Judged weaker.

	The platform could already gift mini-courses, so this reward cost almost nothing to build. Round 1 tested the wording rather than the choice: 2 of 6 students struggled with the reward text, so I reworked the modal copy. The 15% itself was the product manager's number.

	{% image src="images/main.png", className="", alt="The share modal design: For you, mini-course as a gift. For a friend, 15% discount on your first purchase. Below them the generated link and buttons for social networks", width=922, lightbox=true, lightboxWidth=2400 %}

	*Both rewards named in the modal: a mini-course for the student, 15% off for the colleague.*

	Two legacy-code constraints surfaced after handoff: archived lecture pages, and a player the developers could not modify. I designed the missing state and presented the in-player button another way.
{% endprojectSection %}

{% projectSection %}
	## Outcome

	{# [DEFERRED-METRIC] The ImpactRow is on hold until the designer retrieves the figures: conversion to paid courses, share-link rate, visitors to the shared page, the referral target from Problem, with baseline, version and period for each.
	{% ImpactRow %}
		{% impact name="Conversion to paid courses", valueOld="", valueNew="", goodOrBad="", goal="", mainOrNot="main" %}
		{% impact name="Students who copied the link", valueOld="", valueNew="", goodOrBad="", goal="", mainOrNot="" %}
		{% impact name="Anonymous visitors to shared page", valueOld="", valueNew="", goodOrBad="", goal="", mainOrNot="" %}
	{% endImpactRow %} #}

	[DEFERRED-METRIC: conversion to paid courses, share-link rate, visitors to the shared page, and whether the referral target was met, each with baseline and period.]

	The feature delivered some benefit [DEFERRED-METRIC], and the team then stopped experimenting with sharing altogether, certificates, materials and achievements included. Three reasons: the effect of sharing is slow, not always visible and limited in size; development against the legacy code was too expensive to keep experimenting; and the referral funnel is long, so optimising each stage would have cost a lot for a still unknown result. [GAP: whose call was it to stop: the product manager's, the CPO's or the team's?]
{% endprojectSection %}

{% projectSection %}
	## Reflection

	- Start legacy-code tasks with technical discovery by the developers, before design is finished. Both constraints here surfaced after handoff, and each cost a rethink on a closed task.
	- Test each incentive on its own before it goes into the design. Round 1 showed the colleague's discount reading as an afterthought, and it shipped unchanged. [GAP: confirm this is your view]
	- Redirecting effort away from sharing was the right call: the funnel is long and the effect slow. [GAP: confirm this is your view]
{% endprojectSection %}
