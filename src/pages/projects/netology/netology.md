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
	{% image src="images/ideation-1.png", className="", alt="Miro ideation board with sticky-note clusters headed 'How to motivate to share?', 'How to engage colleagues' and 'Restrictions', above three draft user flow diagrams", width=922, priority="low", lightbox=true, lightboxWidth=2400 %}
	*Ideation in Miro. The starred notes are the ideas that went into the design.*

	- Ran ideation in Miro on the three questions research left open: how to motivate sharing, how to engage colleagues, and what limits the business needed.
	- Two user flows, student sharing and colleague landing. The 3 colleague variants differ only in when registration happens.
	- Checked the shortlist with the developers and the product manager before wireframing.
	- Share modal wireframes in Figma, varying what a student sees first: the reward, the generated link, or the conditions attached to it.
	- 12 RITE sessions across both scenarios. Findings and the iterations they caused are in Solution.
{% endprojectSection %}
{# {% projectSection %}
	## Process
	- Верхнеуровневые идеи, их плюмы и минусы
	- Схемы. User flow диаграммы из Miro для обоих сценариев — рядом с подписью «Student sharing flow» / «Colleague landing flow», без разбора шагов
	- Ideation
		- Черновики, наброски, идеация
		- Несколько вариантов user flow, референсы, скетчи в Figma
		- Сверка с dev team и PM на предмет реализуемости
	- Одна строка про синхронизацию с dev-командой и PM на предмет реализуемости
	- Usability testing. Ran 12 test sessions across both scenarios [возможно, стоит написать про продолжительность и кол-во вопросов].  Использовал подход RITE - если на тесте выявлял проблему, то корректировал дизайн и снова проверял решение на других респондентах. После второй итерации дизайна провёл ещё 6 сессий.
{% endprojectSection %} #}

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
