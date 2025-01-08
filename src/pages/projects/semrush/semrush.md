---
title: Data sample is too large, not enough sales
description: Semrush, SaaS for Internet Marketers
category:
  - UX Design
  - UX Research
years: Jan 2020
layout: project
type: case-study
order: 2
permalink: "/projects/semrush/"
eleventyComputed:
  LongDescription: |
    An international high-load SaaS for internet marketers. Сколько пользователей. 
    My role. Was part of a department of 17 UX designers and 10 UI designers, worked with 3 development teams.
    {% image "images/6.png", "", "", 650 %}
---

{% projectSection %}
	## Problems and Hypotheses
	### Problems
	- Мало продаж
	- Небольшой средний чек
	
	### Hypotheses
	во многих случаях набор данных получается слишком большим, пользователи не готовы купить такой набор. На скриншоте — список из 468 клиентов из Бостона за $1,638.

	### About a Product
	"Oppty" finds potential clients in a certain location and according to certain parameters.
	Old version:
	{% image "images/1.png", "", "", 800 %}
{% endprojectSection %}

{% projectSection %}
	## Design Process
	Used a process based on the Double Diamond model.

	1. [Research and analysis](#1)
	2. [Searching for ideas](#2)
	3. [Prototyping and Solution Verification](#3)
	4. [Transfer to next stages of development](#4)
	5. [Development Support](#5)
	6. [Validation by qualitative methods](#6)
{% endprojectSection %}

{% projectSection %}
	## 1. Discovery and analysis
	[Explain how you gathered insights and their impact on your design decisions.]

	1. Отобрал и проанализировал пользовательский фидбек про эту проблему.
	2. Анализировал поведение пользователей через Inspectlet, SQL, BigQuery.
	3. Продакт оунер провела серию интервью с европейскими агентствами. Подтвердила гипотезу, узнала как они находят себе клиентов, и как мы можем им помочь. Выяснили также, что у каждого агентства немного разный стиль поиска клиентов.
	4. Составил окончательный список требований.
	5. Составил и согласовал критерии успешности. Это те метрики, которые отслеживаем после разработки.
{% endprojectSection %}

{% projectSection %}
	## 2. Ideation
	1. Составил список возможных паттернов для решения подобных задач. Источники: другие сервисы Semrush, каталоги UX-паттернов и известные сайты.
	2. Сделал несколько набросков с возможными вариантами взаимодействия.
	3. Собрал встречу с командой разработки, чтобы обсудить детали реализации. Какие-то варианты были дорогие, от них отказались.

	{% image "images/2.png", "", "", 650 %}
{% endprojectSection %}

{% projectSection %}
	## 3. Prototyping and tests
	### Первая версия, дешёвая в разработке

	Версия без значительных изменений в существующем интерфейсе.

	Провёл несколько юзабилити-тестов на коллегах-маркетологах. У большинства респондентов были значительные затруднения при прохождении заданий.

	Вывод: изменения усложнили сервис и повысили порог вхождения, это может снизить конверсию.

	{% image "images/3.png", "", "", 650 %}

	### Вторая версия, переосмысление компоновки

	- Поменял компоновку на более простую и компактную.
	- Поговорил с командой про целесообразность и стоимость разработки
	- Получил фидбек от UX- и UI-команд, внёс изменения.
	- Провёл тестирование на других на коллегах-маркетологах, критичных проблем не выявил.
	
	[Interactive prototype v2](https://rpghqp.axshare.com/#id=nl1gal&p=overview_%D1%81_%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%BC%D0%B8&c=1)	

	Использовали упрощённую схему редизайна, без отдельной бета-версии. В сервисе мало постоянных пользователей и такие изменения не приведут к негативным последствиям.

	{% image "images/4.png", "", "", 650 %}
{% endprojectSection %}

{% projectSection %}
	## 4. Handoff and support
	- Проработал список всех возможных состояний элементов и описал, как они должны работать.
	- Поняли, что все задачи по разработке не вмещаются в спринт, поэтому договорились разбить внедрение функции на этапы: сначала сделаем самое необходимое и будем наблюдать, как пользователи это используют.
	- Добавил ивенты для Google Analytics. Это те клики на интерактивные элементы, которые потом помогут понять, как пользователи взаимодействуют с нашим сервисом и что можно улучшить.
	- В таск-трекере подробно описал задачи для UX-писателя, UI-дизайнера и разработчиков. Отдельно ввёл в курс дела и ответил на все вопросы.
	- Консультировал и пояснял непонятные моменты в гайдах.
	- После разработки проверил, всё ли реализовано так, как задумывалось, и соответствует ли это дизайн-системе, составил список правок.

	{% image "images/5.png", "", "", 650 %}
{% endprojectSection %}

{% projectSection %}
	## Results
	[ДОБАВИТЬ ЦИФРЫ]
	- Потом мы увеличили трафик в инструмент. Через какое-то время проверили метрики монетизации из критериев успешности и подтвердили, что новый дизайн работает хорошо.

	{% image "images/6.png", "", "", 650 %}
{% endprojectSection %}

{% projectSection %}
	## Reflection and Learnings
	[Conclude with your personal reflections on the project. Mention what you learned, what you might do differently, and how the project contributed to your growth as a designer.]

	- Надо было чуть раньше поговорить с разработчиками. Чтобы не прототипировать сложные варианты и пораньше придумать что-то попроще.
	- 
{% endprojectSection %}