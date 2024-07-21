---
title: Yandex Practicum
description: EdTech, School Math Product
category:
  - UX Design
  - UI Design
years: Jul 2021 - May 2022
layout: project
type: case-study
order: 3
permalink: "/projects/practicum/"
---

{% projectSection %}	
	## Introduction
	An international educational platform specialising in IT courses. Offers around 60 different programmes alongside numerous development teams.

	My role was focussed on the "School Math" product. I was a part of an agile team, collaborating closely with another product designer and a UX writer.
{% endprojectSection %}

{% projectSection%}
	## Problems
	1. There was a high volume of customer support queries on post-registration stage.
	2. The product manager identified issues faced by parents:
	    1. Confusion about next steps after registration.
	    2. Failure to realise that they accidentally open a student accounts.
	    3. Unawareness of the existence of student accounts.
	    4. Lack of understanding that children need login credentials.
	3. Challenges with visual overload and scalability of the product. Adding new features increases the complexity of the service.

	{% image "images/1.png", "project-card__img", "", 1200 %}

	### Business Impact
	1. High costs associated with customer support.
	2. We assumed that these problems had a negative impact on the number of referrals, users' attitudes towards the product and, as a resulting impact on LTV.
{% endprojectSection %}

{% projectSection %}
	## Hypotheses
	1. Implementing an onboarding process for new users will decrease “onboarding” customer support tickets from 52% to 20% within the first month.
	2. Simplifying the dashboard will elevate the Net Promoter Score (NPS) to above +55 within the first quarter following implementation.
	3. Simplifying the dashboard will increase user engagement among parents. 
	We’ll know this is true when the average number of sessions per parent increase by minimum  15% within 3 months after the dashboard redesign.

	The challenge here was to find proxy metrics that are not affected by other product changes and market volatility.
{% endprojectSection %}

{% projectSection %}
	## Design Process
	Adopted a methodology akin to the Double Diamond approach, encompassing:
	1. [Discovery](#1)
	2. [Analysis](#2)
	3. [Ideation](#3)
	4. [UI Prototyping and Detailing](#4)
	5. [Design Review](#5)
{% endprojectSection %}

{% projectSection %}
	## 1. Discovery
	1. Analysed user feedback. Found only a few messages mentioning the described problems. Without any details.
	2. Talked with customer support to grasp the specifics and frequency of user confusion.
	3. Requested data from an analyst. It confirmed that the issues were frequent and that there were a lot of related customer support requests.
	4. Collaborated with the product manager to formed hypotheses.
{% endprojectSection %}

{% projectSection %}
	## 2. Analysis
	- I analysed the issues and needs of both parents and students.
	- Made and prioritised a list of job stories.
{% endprojectSection %}

{% projectSection %}
	## 3. Ideation
	- Researched competitors and services with effective onboarding.
	- Drawed numerous wireframes, exploring potential solutions.
{% endprojectSection %}

{% projectSection %}
	## 4. UI prototyping and finalization
	- Designed a user flow for a future interactions. Including all potential states.
	- Chose a direction for the design and step-by-step detailed wireframes into the final UI.
	- Wrote UI copy in collaboration with the UX writer.
	- Synced the vision with developers, UX writer and product manager during the design process.
	- Documented a design solution.
{% endprojectSection %}

{% projectSection %}
	## 5. Design review
	Ensured the test server changes aligned with the design solution in collaboration with the QA engineer.
{% endprojectSection %}

{% projectSection %}
	## Solution
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
	## Results
	- {% highlightValue "Customer support tickets: 52% → 16%", "good" %} within the first month. 
	- {% highlightValue "NPS: +48 → +58", "good" %} within the first 3 months.
	- {% highlightValue "Average number of sessions per parent: increased by 7%", "bad" %} within 3 months. 
	The goal was too ambitious.
{% endprojectSection %}

{% projectSection %}
	## Reflection and learnings
	- We concluded that the level of parental involvement in the child’s learning process largely depends not only on the simplicity of the interface, but also on some other factors.
	- Solving many problems at once was a mistake. We must try to break tasks into smaller iterations. Because this time the problems affected most of the service, and too much time was spent on design and development.
	- Despite limited team resources, it’s still preferable to validate solutions on actual users. Even if  through unmoderated usability testing.
{% endprojectSection %}