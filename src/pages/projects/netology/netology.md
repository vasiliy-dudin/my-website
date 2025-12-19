---
title: "[Draft] Useful content sharing"
description: Netology, EdTech (B2C, B2B)
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
    The 2nd largest EdTech platform in Russia, 2M MAU.

    **My team's focus:** student motivation and goals, retention, usability, LMS (Learning Management System), completing homeworks, number of active days, COR, NPS, reducing churn.
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

	- Led end-to-end design process in a Scrum team. Collaborated closely with the team to balance user needs, business goals, and technical constraints.
	- Ran usability testing, interviews, and 2 surveys.
	- Designed concepts and user flows diagrams with Miro.
	- Created wireframes, prototypes, and high-fidelity UI with Figma.
	- Coordinated cross-team alignment and conducted design reviews.
	- Managed developer handoff with detailed documentation in Notion

	{% endmyRole %}
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
	{% designProcess steps=[
		{title: "Research and synthesis", substeps: ["User interviews (2 scenarios)", "Survey"]},
		{title: "Ideation", substeps: ["User flow mapping", "Wireframe sketching", "Alignment with devs"]},
		{title: "Usability testing", substeps: ["12 test sessions, 2 scenarios, RITE Iterations", "Findings analysis"]},
		{title: "Handoff", substeps: ["UI detailing", "Design documentation", "Design review"]},
		{title: "Next steps", substeps: ["Track metrics with product analyst", "Go to 2nd iteration"]}
	] %} 

	{% image src="images/ideation-1.png", className="", alt="Wireframes and user flow variants", width=300, priority="low", lightbox=true, lightboxWidth=1200 %}

	### Key points

	{% callout %}
	#### Discovery research insights
	I carried out a survey and interviews that had a big impact on my design decisions and main hypothesis.

	- 1,083-response survey validated the direction: 57% would be happy to share learning content.
	- Student interviews revealed they:
		- prefer sharing with colleagues and professional communities,
		- would only share if offered something of value in return (e.g. a discount).
	- Non-student interviews confirmed genuine interest in educational materials sourced from peers.
	{% endcallout %}

	{% callout %}
	#### Usability testing
	Participants struggled with unclear headings and missed important elements because of visual noise.

	I rewrote confusing copy, simplified the design, and enhanced visual hierarchy. Follow-up tests showed that everyone could complete the tasks easily.
	{% endcallout %}
{% endprojectSection %}

{% projectSection %}
	## Final solutions
	[Figma](https://www.figma.com/design/PRRKLkvSCGa70cACuEOPGR/Netology--Useful-content-sharing?node-id=658-16327&p=f&t=xtCRNw9KjjQXQNwJ-11)
	### Student flow
	Allow students to share private lectures with colleagues. And give them a mini-course of their choice to further motivate them to share.
	- Students share helpful video lessons with colleagues and peers via click-to-share button.
	- When a lecture ends, the sharing button appears over the video player, catching viewers' attention when they're most engaged and motivated to share helpful content.

	{% image src="images/solutions-1.jpg", className="", alt="", width=922, priority="low" %}

	### Colleagues flow
	- Colleagues get full video access after email registration — a compromise with top management to prevent course piracy.
	- Time-limited video access to encourage prompt viewing.
	- Public lecture page includes course links and conversion blocks (career guidance, learning process, feedback) to drive course purchases.
	- Shared videos drive the platform discovery and customer conversion.

	{% image src="images/solutions-2.jpg", className="", alt="", width=922, priority="low" %}

	

{% endprojectSection %}


{% projectSection %}
	## Impact & results
	{% ImpactRow %}
		{% impact name="Conversion to paid courses", valueOld="", valueNew="0.0%", goodOrBad="bad", goal="", mainOrNot="main" %}
		{% impact name="Students copied the link", valueOld="", valueNew="0.51%", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Anonymous has visited the page", valueOld="", valueNew="121", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Conversion to free courses", valueOld="", valueNew="3.7%", goodOrBad="bad", goal="", mainOrNot="" %}
	{% endImpactRow %}

	No impact on paid course sign-ups (the main metric), low video link sharing rates among students. The second design iteration also failed to move the needle.

	### Post-launch investigation
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