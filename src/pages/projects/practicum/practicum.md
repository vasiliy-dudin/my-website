---
title: Difficult onboarding, product scaling issues
description: "Yandex Practicum, EdTech"
category:
  - UX Design
  - UI Design
years: Feb 2022, 4 weeks
layout: project
type: case-study
order: 3
permalink: "/projects/practicum/"
---

{% projectSection %}	
	## Product
	School Math, a web platform with tutors and interactive drills. Where parents can also assess the impact on school grades.
	
	This product was part of Yandex Practicum, a large international learning platform specialised in IT education.
{% endprojectSection %}

{% projectSection %}
	## My Role
	As the Senior Product Designer, I was responsible for the entire design process, including web analytics, user feedback analysis, wireframing, prototyping, and creating the final UI. As part of a cross-functional agile team, I collaborated closely with product manager, UX writer, and developers to successfully launch a product that significantly improved user satisfaction and retention.
{% endprojectSection %}

{% projectSection %}
	## Problems to Solve
	{% callout %}
	### User Problems
	During onboarding, parents encountered significant issues.
	1. Uncertainty about next steps.
		Parents were unsure about what actions to take after registration.
	2. Confusion over student account access.
		Parents were logging into the student's account by mistake and were unaware of the need to give their children login credentials.
	{% endcallout %}

	{% callout %}
	### Business Problems
	1. 52% customer support requests from parents on onboarding stage. Leads to high customer support costs.
	2. Low Funnel Velocity at the onboarding stage. This leads to loss of potential active users, LTV and referrals.
	{% endcallout %}
	
	### Hypotheses (in simple terms)
	1. Breaking the onboarding stage into steps will reduce “onboarding” customer support tickets.
	2. Onboarding optimisation will increase Funnel Velocity.

	### Proxy metrics
	- Time to child's first session.
	- % of parents who transferred access to their children.
	- % of children who started the study.
	{# 
	2. Оптимизация процесса онбординга увеличит Funnel Velocity на 30% в течение первого месяца после внедрения изменений.
   	3. Улучшение дизайна и упрощение процесса передачи доступа от родителей детям сократит время до первого занятия ребенка на 40% в течение двух недель после запуска.
		4. Внедрение четкого указания на необходимость передачи доступа детям увеличит процент родителей, успешно передавших доступ, с текущих X% до Y% в течение первого месяца. (Замените X и Y на реальные числа, если они у вас есть)
		5. Оптимизация интерфейса и процесса онбординга повысит коэффициент активации (процент детей, начавших заниматься после получения доступа) с текущих A% до B% в течение первых двух недель после внедрения изменений. (Замените A и B на реальные числа, если они у вас есть)
		6. Упрощение процесса онбординга и улучшение пользовательского опыта приведет к увеличению retention rate на 15% в течение трех месяцев после внедрения изменений.#}
   {# НАПИСАТЬ. О том, что гипотезы были проверены через A/B тест #}
	
{% endprojectSection %}

{% projectSection %}
	## Before Changes
	{% image "images/1.png", "project-card__img", "", 1200 %}
{% endprojectSection %}

{% projectSection %}
	## Process
	Adopted a methodology akin to the Double Diamond approach.

	### 1. Discovery and Analysis
	1. Analysed user feedback, talked with customer support to grasp the specifics and frequency of user confusion.
	2. Analysed data from an analyst. It confirmed that the issues were frequent and that there were a lot of related customer support requests.
	3. Formed hypotheses in co-operation with product manager.
	4. Made and prioritised a list of job stories.

	[image]

	### 2. Ideation
	- Researched competitors and services with effective onboarding.
	- Drawed numerous wireframes, exploring potential solutions.
	[image]

	### 3. Final Design
	- Designed a user flow for a future interactions. Including all potential states.
	- Chose a direction for the design and step-by-step detailed wireframes into the final UI.
	- Wrote UI copy in collaboration with the UX writer.
	- Synced the vision with developers, UX writer and product manager during the design process.
	- Documented a design solution.

	### 4. Design Review
	Ensured the test server changes aligned with the design solution in collaboration with the QA engineer.
{% endprojectSection %}

{% projectSection %}
	## Solution
	[image]
	As a result, these are the solutions I came up with:
	- Simple and phased onboarding. Previously, all elements were located on one page.
	- Hid features that are rarely used, such as "Settings".
	- Quick switch between parents' and students' accounts without the need for credentials.
	- An indication that a user is currently in the parent's account.
	- A dedicated block for sharing student login and password.

	### Extra
	We decided to update the visual design to make the product competitive in appearance. And to make it more friendly and easier to understand.
{% endprojectSection %}

{% projectSection %}
	## Impact & Results
	{% ImpactRow %}
		{% impact name="Customer support tickets within the first month", valueOld="52%", valueNew="16%", goodOrBad="good", goal="below 20%", mainOrNot="" %}
		{% impact name="Average number of sessions per parent within 3 months", valueOld="", valueNew="+7%", goodOrBad="bad", goal="15%", mainOrNot="" %}
			{# Goal: Simplifying the dashboard will increase user engagement among parents (average number of sessions per parent increase by minimum 15% within 3 months). #}		
	{% endImpactRow %}
	The team's conclusion after reviewing web analytics: results are good, but there was a mistake in goal setting, it was too ambitious.
{% endprojectSection %}

{% projectSection %}
	## Learnings
	- We concluded that the level of parental involvement in the child’s learning process largely depends not only on the simplicity of the interface, but also on some other factors.
	- Solving many problems at once was a mistake. We must try to break tasks into smaller iterations. Because this time the problems affected most of the service, and too much time was spent on design and development.
	- Despite limited team resources, it’s still preferable to validate solutions on actual users. Even if through unmoderated usability testing.
{% endprojectSection %}