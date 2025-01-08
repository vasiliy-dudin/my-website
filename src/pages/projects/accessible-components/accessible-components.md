---
title: Accessible Components
description: Components for developers  (open source)
category:
- UX Design
- UI Design
years: 2019
layout: project
type: pet
order: 3
permalink: "/projects/accessible-components/"
eleventyComputed:
  LongDescription: |
    Каталог протестированных UI-компонентов для разработчиков и дизайнеров. Качество компонентов могут протестировать не только люди с ограниченными возможностями, но специалисты, которые заинтересованы в удобных интерфейсах.

    Тут кратко описываю процесс проектирования MVP. Для первой версии выбраны решения, которые дешёвы в разработке.

    [Прототип Axure RP](https://k90cvf.axshare.com)
    [Figma](https://www.figma.com/file/DiYCUz0N01asW8Y05rbozhJL/Accessible-Components?node-id=0%3A1)
---


{% projectSection %}
	## Решаемые проблемы
	1. Фронтендеры и дизайнеры хотят разработать интерфейс для людей с ограниченными возможностями. Такие интерфейсы должны быть удобными и соответствовать стандартам. Примеры из интернета сложны, а готовые библиотеки компонентов часто недоступны.
	2. Люди с ограниченными возможностями испытывают проблемы на сайтах и сервисах. Некоторыми ресурсами и вовсе не получается воспользоваться.
{% endprojectSection %}

{% projectSection %}
	## 1. Погружение и разработка требований
	Составил job stories, технические ограничения со списком внешних интеграций, use case diagram и изучил рефы.
{% endprojectSection %}

{% projectSection %}
	## 2. Моделирование процессов
	За основу взял диаграмму use cases и показал как 3 группы пользователей будут решать свои задачи, взаимодействуя с интерфейсом.

	{% image "images/1.png", "project-card__img", "", 650 %}
{% endprojectSection %}

{% projectSection %}
	## 3. Прототипирование
	[Интерактивный прототип Axure RP](https://k90cvf.axshare.com)

	{% image "images/2.png", "project-card__img", "", 650 %}

	На первой вкладке пользователи скринридеров будут тестировать компоненты.

	А на следующей пошагово объясняем, как сверстать компонент, как он должен работать и какие ARIA-атрибуты необходимы. Отсюда же разработчик может забрать React-компонент, если не хочет разрабатывать его самостоятельно.

	{% image "images/3.png", "project-card__img", "", 650 %}
{% endprojectSection %}

{% projectSection %}
	## 4. Дизайн-макет
	[Figma](https://www.figma.com/file/DiYCUz0N01asW8Y05rbozhJL/Accessible-Components?node-id=0%3A1)

	{% image "images/4.png", "project-card__img", "", 920 %}
	{% image "images/5.png", "project-card__img", "", 920 %}
{% endprojectSection %}