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
enabled: true
permalink: "/projects/accessible-components/"
eleventyComputed:
  LongDescription: |
    A catalogue of tested UI components for developers and designers. The quality of components can be tested not only by people with disabilities but also by specialists who are interested in user-friendly interfaces.

    Here I briefly describe the MVP design process. For the first version, solutions were chosen that are cost-effective to develop.

    [Axure RP Prototype](https://k90cvf.axshare.com)
    [Figma](https://www.figma.com/file/DiYCUz0N01asW8Y05rbozhJL/Accessible-Components?node-id=0%3A1)
---


{% projectSection %}
	## Problems to solve
	1. Frontend developers and designers want to develop interfaces for people with disabilities. Such interfaces should be user-friendly and comply with standards. Examples from the internet are complex, and ready-made component libraries are often unavailable.
	2. People with disabilities experience problems on websites and services. Some resources cannot be used at all.
{% endprojectSection %}

{% projectSection %}
	## 1. Research and requirements development
	I created job stories, technical constraints with a list of external integrations, a use case diagram and studied references.
{% endprojectSection %}

{% projectSection %}
	## 2. Process modelling
	I used the use case diagram as a basis and showed how 3 user groups would solve their tasks by interacting with the interface.

	{% image src="images/1.png", className="project-card__img", alt="Use case diagram for accessible components", width=650, priority="low" %}
{% endprojectSection %}

{% projectSection %}
	## 3. Prototyping
	[Interactive Axure RP prototype](https://k90cvf.axshare.com)

	{% image src="images/2.png", className="project-card__img", alt="Interactive prototype screen", width=650, priority="low" %}

	On the first tab, screen reader users will test components.

	On the next tab, we step-by-step explain how to code the component, how it should work and which ARIA attributes are necessary. From here, a developer can also take a React component if they don't want to develop it themselves.

	{% image src="images/3.png", className="project-card__img", alt="Component documentation example", width=650, priority="low" %}
{% endprojectSection %}

{% projectSection %}
	## 4. Design mockup
	[Figma](https://www.figma.com/file/DiYCUz0N01asW8Y05rbozhJL/Accessible-Components?node-id=0%3A1)

	{% image src="images/4.png", className="project-card__img", alt="Figma design mockup 1", width=920, priority="low" %}
	{% image src="images/5.png", className="project-card__img", alt="Figma design mockup 2", width=920, priority="low" %}
{% endprojectSection %}