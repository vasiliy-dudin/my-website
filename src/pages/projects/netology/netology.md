---
title: "[Draft] Useful content sharing"
description: Netology, EdTech
category:
  - Product Design
  - UX Research
years: Aug 2023, 4 weeks, 2 iterations
layout: project
type: case-study
order: 1
enabled: true
permalink: "/projects/netology/"
eleventyComputed:
  LongDescription: |
    The 2nd largest EdTech platform in Russia, 2M MAU. It offers a variety of online IT courses from 4 months to 2 years long.

    **My team's focus:** student motivation and goals, retention, usability, LMS (Learning Management System), completing homeworks, number of active days, COR, NPS, reducing churn.
---

{% projectSection %}
	{% image src="images/main.png", className="", alt="", width=922, priority="high" %}
{% endprojectSection %}

{% projectSection %}
	## My role
	Led end-to-end design process as senior product designer in Scrum team.

	**Design & research:**
	- Created wireframes, prototypes, and high-fidelity UI with Figma.
	- Ran usability testing, interviews, and 2 surveys.
	- Designed concepts and user flows diagrams with Miro.

	**Collaboration & delivery:**
	- Collaborated closely with PM, developers, analyst, and QA to balance user needs, business goals, and technical constraints.
	- Coordinated cross-team alignment and conducted design reviews.
	- Managed developer handoff with detailed documentation in Notion.
{% endprojectSection %}

{% projectSection %}
	## Problems to solve
	### Business problem
	High marketing costs to acquire new students (CAC).

	### Goal
	Increase the percentage of users coming from referrals to reduce marketing costs. 

	### Hypotheses
	If we let students share interesting course content, we can boost referral-based paid sign-ups: from 16% to 25% in six months.
{% endprojectSection %}

{% projectSection %}
	## Process
	### About the design process
	{% image "images/design-process.png", "", "", 922 %}
	My colleague and I have put together our own process based on Double Diamond. It's flexible, non-linear and iterative. I think you'll find it works really well for you too=)

	### Discovery, research and synthesis
	I conducted a survey among the students to learn more about their behaviour and to verify their interest in a solution concept.

	{% callout %}
	Important insight: 57% of respondents are willing to share useful content. 
	{% endcallout %}
	### Ideation
	- Designed several variants of user flow, examined references, made many wireframes in Figma. {% image "images/ideation-1.png", "", "", 922 %}
	- Selected and validated the most viable solutions by consulting with dev team and PM on cost efficiency.


	### User testing
	I ran 12 usability tests with current and potential users, and made design improvements after each session to get rid of any user difficulties.
	[SCREENSHOTS FROM TESTS]

	### UI detailing
	Refined wireframes into high-fidelity designs, defining visual hierarchy, spacing, interaction states, and components, then created comprehensive documentation for developer handoff.
	{% image "images/ui-v1-1.png", "", "", 922 %}
	{% image "images/ui-v1-2.jpg", "", "", 922 %}
{% endprojectSection %}

{% projectSection %}
	## Final solutions
	[Figma]
	### Student flow
	Allow students to share private lectures with colleagues. And give them a mini-course of their choice to further motivate them to share.
	- Students share helpful video lessons with colleagues and peers via click-to-share button.
	- When a lecture ends, the sharing button appears over the video player, catching viewers' attention when they're most engaged and motivated to share helpful content.

	### Colleagues flow
	- Colleagues get full video access after email registration — a compromise with top management to prevent course piracy.
	- Time-limited video access to encourage prompt viewing.
	- Public lecture page includes course links and conversion blocks (career guidance, learning process, feedback) to drive course purchases.
	- Shared videos drive the platform discovery and customer conversion.

{% endprojectSection %}


{% projectSection %}
	## Impact & results
	{% ImpactRow %}
		{% impact name="Conversion to paid courses", valueOld="", valueNew="0.0%", goodOrBad="bad", goal="", mainOrNot="main" %}
		{% impact name="Students copied the link", valueOld="", valueNew="0.51%", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Anonymous has visited the page", valueOld="", valueNew="121", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Conversion to Free Courses", valueOld="", valueNew="3.7%", goodOrBad="bad", goal="", mainOrNot="" %}
	{% endImpactRow %}

	No impact on paid course sign-ups (the main metric), low video link sharing rates among students. The second design iteration also failed to move the needle.

	### Research insights
	1. Students haven't yet found the material useful enough to share with colleagues.
	2. Students clicked the button out of curiosity rather than genuine sharing intent.

	### Consequences
	All sharing features in our LMS (Learning Management System) were deemed ineffective by the product manager. So she changed her plans and decided to focus on more promising areas.
{% endprojectSection %}

{% projectSection %}
	## Challenges
	- Design process revealed legal constraints as some teachers receive royalties based on lecture views.
	- Top management initially resisted public content sharing due to piracy concerns.
{% endprojectSection %}

{% projectSection %}
	## Reflection
	- The conversion heavily depends on video lectures value — they need to be unique and far better than free YouTube content. This is beyond our control.
	- The entire funnel requires optimisation. However, given its length and complexity, such work isn not cost-effective for the team.
	- Discovered technical pitfalls too late in the process. I had to refine the design after the task was closed. The key learning: for legacy code-related tasks, it's better to assign preliminary research to developers upfront.
{% endprojectSection %}