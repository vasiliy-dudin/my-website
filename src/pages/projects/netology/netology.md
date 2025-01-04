---
title: Useful content sharing
description: Netology, EdTech
category:
  - UX Design
  - UI Design
  - UX Research
years: Aug 2023
layout: project
type: case-study
order: 1
permalink: "/projects/netology/"
---

{% projectSection %}
	## Company and Team
	Netology is the second largest EdTech platform in Russia, 3M MAU. It offers a variety of online IT courses from 4 months to 2 years long.

	I was part of "Motivation and educational environment" team.   

	### Team focus areas and metrics
	Student goals, retention, usability, LMS (Learning Management System), completing homeworks, number of active days, COR, NPS, reducing churn.
{% endprojectSection %}

{% projectSection %}
	## My role
	As a senior product designer, I led whole design process:
	- Ran user research, usability testing, interviews and surveys.
	- Designed a concept and user flow diagrams with Miro.
	- Generated lots of ideas and potential solutions.
	- Made wireframes, interactive prototypes and high-fidelity UI with Figma.
	- Handled developer handoff as detailed documentation in Notion.
	- Coordinated with the dev team and other teams.
	- Did a design review at the release candidate stage.

	I was part of an Agile team, so I worked closely with the product manager, developers, product analyst and QA engineers to make optimal decisions. This helped to create the best solution in terms of team resources, business and user needs.
{% endprojectSection %}

{% projectSection %}
	## Problems to Solve
	### Business Problem
	High marketing costs to acquire new students (CAC).

	### Goal
	Increase the percentage of users coming from referrals to reduce marketing costs. 

	### Hypotheses
	If we let students share interesting course content, we can boost referral-based paid sign-ups: from 16% to 25% in six months.
{% endprojectSection %}

{% projectSection %}
	## Process: v1
	### Briefly about the design process
	{% image "images/design-process-v2.png", "", "", 922 %}
	My colleague and I have put together our own process based on Double Diamond. It's flexible, non-linear and iterative. I think you'll find it works really well for you too!
	- Discovery and research.
	- Conceptual design.
	- Search for solutions.
	- Prototyping.
	- Usability testing.
	- UI detailing.
	- Documentation.
	- Demo with the team.
	- Design review and development support.

	### Discovery and research
	Провёл опрос, он выявил желание 57% студентов делиться полезным контентом.

	### Ideation и выбор решения
	Создал несколько вариантов user flow в Figma
	Провел встречу с командой для выбора оптимального решения
	[Скрины вариантов]

	### Testing
	Разработал интерактивный прототип в Figma
	Провел 6 сессий юзабилити-тестирования (3 студента Нетологии и 3 потенциальных пользователя)
	[Скрины c теста]

	### Детализация UI
	- Описание решений и причины таких решений.
	[Скрины]

	### Challenges
	- It was difficult to convince top managers that it was okay to share paid content publicly. They were worried that people would pirate the videos and sell them.
	- During the design process, I learned that there are legal issues with sharing these videos. For example, we pay some teachers for views, and I had to consider that.
	{% callout %}
	### Findings
	Our product analyst took a look at the stats and came to a few conclusions:
	- Only a small number of students copy the link (47 people, or 0.42% of the total)
	- Nobody has converted to a paid course.

	We thought it would be a good idea to look into why this is happening and come up with some new ideas in the second iteration.
	{% endcallout %}
{% endprojectSection %}

{% projectSection %}
	## Process: v2
	Вкратце о том, что было во 2 итерации. Тут использовался такой же дизайн-процесс, как в v1.
	
	### Discovery
	Провел интервью с пользователями, которые нажимали кнопку шеринга. Инсайты:
	1. Люди, которые нажали на кнопку, в основном не собирались делиться видео и нажали кнопку из интереса.
	2. Студенты готовы делиться полезными материалами.
	3. Пока не находили достаточно полезный материал, чтобы поделиться им с коллегами и знакомыми. 

	### Поиск идей
	Выдвинул гипотезу о том, что если мы будем более навязчиво и заметно предлагать пошерить видео, то больше людей будет шерить видео.
	[скрины черновиков]

	### Дизайн-решение
	В конце видео добавлять кнопку шеринг

	
	
	- Протестировал на новых респондентах.
	- Расширили эксперимент ещё и на бесплатные курсы. Чтобы понять, как это влияет на конверсию в покупку платных курсов.
	- Добавил кнопку "Поделиться" в конце видео

	Образ решения во 2 итерации (УБРАТЬ)
	- Раскатим на бесплатников.
	- Для бесплатных курсов убираем ограничение по количеству ссылоки по времени работы этих ссылок.
{% endprojectSection %}

{% projectSection %}
	## Solution
	- Студенты нажимают кнопку под видео и в конце интересных видео, чтобы поделиться с коллегами и знакомыми.
	- Коллеги студента получают доступ к видео с закрытого (приватного) курса студента. Таким образом, начинают проявлять интерес к платформе и....покупают курс?
		- При этом коллегам нужно сначала оставить почту чтобы  
	[Скрины]
	[Видео?]
{% endprojectSection %}


{% projectSection %}
	## Impact & Results
	### v1
	Изменения в дизайне повлияли незначительно: никто не записался на платный курс и мало студентов скопировало ссылку на видео.
	{% ImpactRow %}
		{% impact name="Конверсия в платные курсы", valueOld="", valueNew="0.0%", goodOrBad="bad", goal="", mainOrNot="main" %}
		{% impact name="Студентов скопировало ссылку", valueOld="", valueNew="0.42%", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Анонимов посетили страницу", valueOld="", valueNew="33", goodOrBad="bad", goal="", mainOrNot="" %}
	{% endImpactRow %}	

	### v2
	Изменения совсем не помогли: никто не записался на платный курс и другие показатели увеличились незначительно.
	{% ImpactRow %}
		{% impact name="Конверсия в платные курсы", valueOld="", valueNew="0.0%", goodOrBad="bad", goal="", mainOrNot="main" %}
		{% impact name="Конверсия в бесплатные курсы", valueOld="", valueNew="3.7%", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Студентов скопировало ссылку", valueOld="0.42%", valueNew="0.5%", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Анонимов посетили страницу", valueOld="33", valueNew="121", goodOrBad="bad", goal="", mainOrNot="" %}
	{% endImpactRow %}

	### Последствия
	Менеджер продукта принял решение, что все варианты шеринга через LMS неперспективные и не приносят результатов. В пользу более перспективных направлений развития.
{% endprojectSection %}


{% projectSection %}
	## Reflection
	- Важность контекста: Размещение кнопки "Поделиться" в конце видео оказалось более эффективным, так как пользователи были более мотивированы делиться после просмотра полезного контента.
	- Баланс между безопасностью и удобством: Изначальные ограничения на количество шерингов негативно влияли на пользовательский опыт. Их отмена для бесплатных курсов увеличила активность пользователей.
	- Длинная воронка конверсии: Несмотря на увеличение шерингов, конверсия в платные курсы осталась низкой. Это подчеркивает необходимость оптимизации всей воронки, а не только ее начала.
{% endprojectSection %}