---
title: Semrush
description: SaaS for Internet Marketers
category:
  - UX Design
  - UX Research
years: Jun 2018 - Jan 2020
layout: project.njk
type: case-study
order: 3
permalink: "/projects/semrush/"
---

{% projectSection "About the company" %}
	An international company, developing a high-load SaaS for internet marketers.

	[Погразить в контекст. Например, написать, сколько было пользователей.
Начните с обзора миссии компании, конкретных проблем, с которыми она сталкивается, и причин, по которым был инициирован проект. Это подготовит почву для вашего тематического исследования и поможет читателю понять актуальность вашей работы для более широких целей компании.]
{% endprojectSection %}

{% projectSection "My role and the team" %}
	Was part of a department of 17 UX designers and 10 UI designers, worked with 3 development teams.

	{% image "images/_projects.png", "project-card__img", "", 920 %}

	[Уточните свою роль в проекте и то, как вы сотрудничали с командой. Если вы подчеркнете свой вклад наряду с усилиями команды, это продемонстрирует вашу способность работать в среде сотрудничества.]
{% endprojectSection %}

{% projectSection "About case stydy" %}
	I'll show you how I found solutions to problems with a small example from a marketing tool called Oppty. It finds potential clients in a certain location and according to certain parameters.

	{% highlight %}
		Результаты
	{% endhighlight %}

	### Problem
	Мало продаж, небольшой средний чек.
	Гипотеза: во многих случаях набор данных получается слишком большим, пользователи не готовы купить такой набор. На скриншоте — список из 468 клиентов из Бостона за $1,638.

	{% image "images/1.png", "project-card__img", "", 800 %}

{% endprojectSection %}

{% projectSection "Процесс нахождения решения" %}
	Used a process based on the Double Diamond model.

	1. [Research and analysis](#1)
	2. [Searching for ideas](#2)
	3. [Prototyping and Solution Verification](#3)
	4. [Transfer to next stages of development](#4)
	5. [Development Support](#5)
	6. [Validation by qualitative methods](#6)
{% endprojectSection %}

{% projectSection "1. Research and analysis", 1 %}
	[Explain how you gathered insights and their impact on your design decisions.]

	1. Отобрал и проанализировал пользовательский фидбек про эту проблему.
	2. Продакт оунер провела серию интервью с европейскими агентствами. Подтвердила гипотезу, узнала как они находят себе клиентов, и как мы можем им помочь. Выяснили также, что у каждого агентства немного разный стиль поиска клиентов.
	3. Составил окончательный список требований.
	4. Составил и согласовал критерии успешности. Это те метрики, которые отслеживаем после разработки.
{% endprojectSection %}

{% projectSection "2. Ideation", 2 %}
	1. Составил список возможных паттернов для решения подобных задач. Источники: другие сервисы Semrush, каталоги UX-паттернов и известные сайты.
	2. Сделал несколько набросков с возможными вариантами взаимодействия.
	3. Собрал встречу с командой разработки, чтобы обсудить детали реализации. Какие-то варианты были дорогие, от них отказались.

	{% image "images/2.png", "project-card__img", "", 650 %}
{% endprojectSection %}

{% projectSection "3. Prototyping and tests", 3 %}
	### Первая версия, дешёвая в разработке

	Версия без значительных изменений в существующем интерфейсе.

	Провёл несколько юзабилити-тестов на коллегах-маркетологах. У большинства респондентов были значительные затруднения при прохождении заданий.

	Вывод: изменения усложнили сервис и повысили порог вхождения, это может снизить конверсию.

	{% image "images/3.png", "project-card__img", "", 650 %}

	### Вторая версия, переосмысление компоновки

	- Поменял компоновку на более простую и компактную.
	- Поговорил с командой про целесообразность и стоимость разработки
	- Получил фидбек от UX- и UI-команд, внёс изменения.
	- Провёл тестирование на других на коллегах-маркетологах, критичных проблем не выявил.
	
	[Interactive prototype v2](https://rpghqp.axshare.com/#id=nl1gal&p=overview_%D1%81_%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%BC%D0%B8&c=1)	

	Использовали упрощённую схему редизайна, без отдельной бета-версии. В сервисе мало постоянных пользователей и такие изменения не приведут к негативным последствиям.

	{% image "images/4.png", "project-card__img", "", 650 %}
{% endprojectSection %}

{% projectSection "4. Передача на следующие этапы разработки", 4 %}
	- Проработал список всех возможных состояний элементов и описал, как они должны работать.
	- На груминге с командой разработки презентовал окончательную версию решения.
	- Поняли, что все задачи по разработке не вмещаются в спринт, поэтому договорились разбить внедрение функции на этапы: сначала сделаем самое необходимое и будем наблюдать, как пользователи это используют.
	- Добавил ивенты для Google Analytics. Это те клики на интерактивные элементы, которые потом помогут понять, как пользователи взаимодействуют с нашим сервисом и что можно улучшить.
	- В таск-трекере подробно описал задачи для UX-писателя, UI-дизайнера и разработчиков. Отдельно ввёл в курс дела и ответил на все вопросы.

	{% image "images/5.png", "project-card__img", "", 650 %}
{% endprojectSection %}

{% projectSection "5. Сопровождение разработки", 5 %}
	- Консультировал и пояснял непонятные моменты в гайдах.
	- После разработки проверил, всё ли реализовано так, как задумывалось, и соответствует ли это дизайн-системе, составил список правок.
{% endprojectSection %}

{% projectSection "6. Validation by qualitative methods", 6 %}
	[Include metrics, user feedback, or other indicators of success to demonstrate the effectiveness of your design in addressing the initial challenge.]
	- После разработки следил за тем, как реальные пользователи используют обновлённый интерфейс. Чтобы отследить использование ключевых интерактивных элементов, использовал Inspectlet и SQL c BigQuery.
	- Потом мы увеличили трафик в инструмент. Через какое-то время проверили метрики монетизации из критериев успешности и подтвердили, что новый дизайн работает хорошо.

	{% image "images/6.png", "project-card__img", "", 650 %}
{% endprojectSection %}

{% projectSection "Reflection and Learnings" %}
	[Conclude with your personal reflections on the project. Mention what you learned, what you might do differently, and how the project contributed to your growth as a designer.]

	- Надо было чуть раньше поговорить с разработчиками. Чтобы не прототипировать сложные варианты и пораньше придумать что-то попроще.
	- 
{% endprojectSection %}