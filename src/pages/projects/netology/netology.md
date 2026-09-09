---
title: "[Draft] High student acquisition costs"
feature: "Useful content sharing"
description: Netology (EdTech, B2C, B2B)
category:
  - Product Design
  - UX Research
years: Aug 2023, 4 weeks, 2 iterations
layout: project
type: case-study
order: 1
enabled: true
permalink: "/projects/netology/"
headerInfo:
  - title: "About company"
    text: "The 2nd largest EdTech platform in Russia, 2M MAU. It offers a variety of online IT courses from 4 months to 2 years long."
  - title: "My team's focus"
    text: "Learning Management System (LMS): retention, motivation and goals, usability, completing homeworks, number of active days, COR, NPS, reducing churn."
  - title: "Tools"
    text: "Miro, Figma"
---

{% projectSection %}
	{% image src="images/all.jpg", className="", alt="", width=922, priority="high" %}
	
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

	- Owned design end-to-end over 4 weeks and 2 iterations on a 9-person Scrum team.
	- Ran 12 usability testing sessions across 2 scenarios using the RITE method, 1:1 interviews with students and non-students, and a 1,083-response validation survey.
	- Mapped user flows in Miro and produced wireframe variants for 2 scenarios: the student sharing flow and the colleague landing flow.
	- Designed wireframes, interactive prototypes, and high-fidelity UI in Figma, including the in-video share trigger and the public lecture landing page.
	- Negotiated the email-gated sharing model with top management and legal — balancing piracy concerns, royalty constraints, and the referral funnel.

	{% endmyRole %}
{% endprojectSection %}

{% projectSection %}
	## Problem

	Paid channels dominated student acquisition, and customer acquisition cost (CAC) was high. The product manager identified this from marketing spend analysis.

	We set a concrete target: grow referral-based paid sign-ups from 16% to 25% within six months. The hypothesis: if students could share course content with colleagues, the platform could generate qualified leads at lower cost.
{% endprojectSection %}

{% projectSection %}
	## Discovery Research

	I ran a survey and interviews with two user segments — students and non-students — to validate direction before moving to design.

	- **Survey (1,083 responses):** 57% of students would share learning content — enough to justify building.
	- **Student interviews:** they'd only share in exchange for something of value (a discount or free mini-course), and preferred professional communities over general social networks.
	- **Non-student interviews:** genuine interest in peer-shared materials, seen as more credible than advertising.

	This informed two design decisions: a mini-course as a sharing incentive, and a focus on professional rather than social sharing.
{% endprojectSection %}

{% projectSection %}
	## Process
	- Started with discovery research to check whether students would share paid course content at all.
	- Collected ideas on a Miro board, with pros and cons for each. Worked through questions like what would motivate students to share, and when to prompt sharing.
	- Looked at how competitors handle sharing, and at products well outside EdTech.
	- Mapped two user flows: the student sharing a lecture, and the colleague who opens the link and might sign up for a course.
	- Three rounds of wireframes in Figma: the video player, the share modal, the public video page, the emails and the page states.
	- Reviewed each round to the developers, the product manager, the design team, course instructors, CPO and legal.
	- Ran 12 usability tests of 30–40 minutes across both flows, and wrote up each one. Then 6 more after the second version.
	- Annotated the final designs and wrote the handoff documentation, then stayed with the developers through the build.

	{% carousel id="process", width=922, height=460, lightboxWidth=2400, chipsLabel="Process artefacts", slides=[
			{src: "images/ideation-1.png", label: "Ideas", alt: "Miro ideation board with sticky-note clusters headed 'How to motivate to share?', 'How to engage colleagues' and 'Restrictions', above three draft user flow diagrams", caption: "The starred notes are the ones that made it into the design."},
			{src: "images/ideation-4.png", label: "User flows", alt: "Two user flow diagrams: a student sharing a video lecture, and a friend opening the shared link, with a highlighted group of three variant paths to reach the content", caption: "Three variant paths for the colleague flow. Gating access before the video is the one that survived the legal and royalty constraints."},
			{src: "images/ideation-2.png", label: "Share modal", alt: "Six wireframe variants of the share modal, differing in how the reward is worded and how the link limits are shown", caption: "Variants of the share modal. The reward wording came out of the student interviews; the link limits came from the piracy and royalty constraints."}
		] %}
{% endprojectSection %}

{% projectSection %}
	## Solution

	[Figma](https://www.figma.com/design/PRRKLkvSCGa70cACuEOPGR/Netology--Useful-content-sharing?node-id=658-16327&p=f&t=xtCRNw9KjjQXQNwJ-11)

	### Student sharing flow

	Students can share individual video lectures with colleagues and peers via a share button that appears at the end of each video — when engagement is highest. As a sharing incentive, they receive a mini-course of their choice.

	{% image src="images/solutions-1.jpg", className="", alt="Share button appearing after a video lecture ends, with mini-course incentive overlay", width=922, priority="low" %}

	### Usability testing

	In the first iteration, participants struggled with unclear headings and missed the share button because of visual noise. I rewrote the copy and simplified the layout to improve hierarchy. In follow-up sessions, all 12 participants completed the sharing task without assistance.

	{% image src="images/ideation-1.png", className="", alt="Wireframe variants for the student sharing flow", width=300, priority="low", lightbox=true, lightboxWidth=1200 %}

	### Why we gated access behind email registration

	Top management resisted public sharing over piracy risk. A separate constraint: some teachers receive royalties based on lecture view counts, so unrestricted sharing would have cut into their income.

	We considered three options: fully public lecture pages, public teasers with paywalled content, and email-gated full access.

	We chose email-gated full access — the only option legal and management would accept. It preserved the referral funnel and gave the business attribution data on shared-link arrivals.

	The trade-off: registration friction that would likely reduce conversion. We accepted it — the alternative was no feature at all.

	### Colleague landing flow

	Colleagues who receive a shared link get full video access after email registration. Access is time-limited to encourage prompt viewing. The landing page includes course links and conversion blocks (career guidance, social proof, learning process) to drive purchases from first-time visitors.

	{% image src="images/solutions-2.jpg", className="", alt="Colleague landing page showing time-limited video access and course conversion blocks", width=922, priority="low" %}

{% endprojectSection %}

{% projectSection %}
	## Outcome

	{% ImpactRow %}
		{% impact name="Conversion to paid courses", valueOld="", valueNew="+14.3%", goodOrBad="good", goal="", mainOrNot="main" %}
		{% impact name="Students who copied the link", valueOld="", valueNew="4.51%", goodOrBad="good", goal="", mainOrNot="" %}
		{% impact name="Anonymous visitors to shared page", valueOld="", valueNew="1121", goodOrBad="good", goal="", mainOrNot="" %}
	{% endImpactRow %}
{% endprojectSection %}

{% projectSection %}
	## Reflection

	- Assign technical discovery to developers at the start of legacy-code tasks, not after design is complete. In this project, discovering constraints mid-implementation forced redesign after the task was formally closed.
	- Conversion depended heavily on the lecture content being more valuable than freely available material. This was outside the design team's control — and not something we could validate before building.
	- The full referral funnel required optimisation at every step. Given its length and complexity, the team's decision to redirect effort rather than continue iterating was the right call.
{% endprojectSection %}
