---
title: Useful content sharing
description: Netology, EdTech
category:
  - Product Design
  - UX Research
years: Aug 2023
layout: project
type: case-study
order: 1
enabled: true
permalink: "/projects/netology/"
eleventyComputed:
  LongDescription: |
    The 2nd largest EdTech platform in Russia, 3M MAU. It offers a variety of online IT courses from 4 months to 2 years long.

    **My team's focus:** student motivation and goals, retention, usability, LMS (Learning Management System), completing homeworks, number of active days, COR, NPS, reducing churn.
---

{% projectSection %}
	## My role
	As a senior product designer, I led whole design process:
	- Ran usability testing, interviews and surveys.
	- Designed a concept and user flow diagrams with Miro.
	- Generated lots of ideas and potential solutions.
	- Made wireframes, interactive prototypes and high-fidelity UI with Figma.
	- Handled developer handoff as detailed documentation in Notion.
	- Coordinated with the dev team and other teams.
	- Did a design review at the release candidate stage.

	I was part of an Agile team, so I worked closely with the product manager, developers, product analyst and QA engineers to make optimal decisions. This helped to create the best solution in terms of team resources, business and user needs.
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
	## Process: v1
	### About the design process
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
	I conducted a survey among students: 57% of respondents are willing to share useful content.

	### Ideation and solution selection
	Designed several variants of user flow, examined references, made many sketches in Figma.
	Held a meeting with the dev team to select the best solution for development.
	[SCREENSHOTS]

	### User testing
	Created an interactive prototype in Figma.
	Conducted 12 moderated usability tests (6 of our students and 6 potential users), and after each test I corrected the design flaws. 
	By doing this I made sure that the solution has good usability and users won't have difficulties.
	[SCREENSHOTS FROM TESTS]

	### UI Design Finalisation
	- [Описание решений и причины таких решений]
	[SCREENSHOTS]

	### Challenges
	- It was difficult to convince top managers that it was okay to share paid content publicly. They were worried that people would pirate the videos and sell them.
	- During the design process, I learned that there are legal issues with sharing these videos. For example, we pay some teachers for views, and I had to consider that.
	{% callout %}
	### Findings
	Our product analyst took a look at the stats and came to a few conclusions:
	- Only a small number of students copy the link (47 people, or 0.42% of the total).
	- Nobody has converted to a paid course.

	We thought it would be a good idea to look into why this is happening and come up with some new ideas in the second iteration.
	{% endcallout %}
{% endprojectSection %}

{% projectSection %}
	## Process: v2
	The same design process was used here as in v1.
	
	### Discovery
	Conducted interviews with users who clicked the shearing button. Insights:
	1. The students who clicked the button were mostly not going to share the video and clicked the button out of interest.
	2. Students are willing to share useful materials.
	3. They haven't yet found the material useful enough to share with colleagues and acquaintances. 

	### Ideation
	I hypothesised that if we make the feature more visible and relevant, more people will share a video. So at this stage I was looking for options to do that.
	[screenshots of ideas]

	### Design solutions
	- Add the sharing button at the end of the video over a player, similar to YouTube. So the feature will be noticeable to people who are focused on a video and don't notice anything around it. And this feature will become visible at the most opportune moment, when the user has finished the lecture and wants to share the video.
	- Extend the experiment to free courses as well. To understand how it affects conversion to purchase of paid courses.
	- For free courses, remove the limitation on the number of sharing links.
	
	### User testing
	Conducted moderated usability testing with 7 new respondents, made appropriate design fixes.

{% endprojectSection %}

{% projectSection %}
	## Final solutions
	[SCREENSHOTS]
	[VIDEO?]
	- Students click the button below a helpful video lesson to share with colleagues and acquaintances.
	- Also students see a button at the end of the video over the player.  In this way a user can notice the feature at the most opportune moment and to make it noticeable to those people who are strongly focused on the video player.
	- The student's colleagues or acquaintances watch a video from a private course. As a result, some of them become aware of the platform and buy a course.
{% endprojectSection %}


{% projectSection %}
	## Impact & results
	The design changes showed no impact on metrics: we saw zero paid course sign-ups and low video link sharing rates among students. The second design iteration also failed to move the needle.

	### v1
	{% ImpactRow %}
		{% impact name="Conversion to paid courses", valueOld="", valueNew="0.0%", goodOrBad="bad", goal="", mainOrNot="main" %}
		{% impact name="Students copied the link", valueOld="", valueNew="0.42%", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Anonymous has visited the page", valueOld="", valueNew="33", goodOrBad="bad", goal="", mainOrNot="" %}
	{% endImpactRow %}	

	### v2
	{% ImpactRow %}
		{% impact name="Conversion to paid courses", valueOld="", valueNew="0.0%", goodOrBad="bad", goal="", mainOrNot="main" %}
		{% impact name="Conversion to Free Courses", valueOld="", valueNew="3.7%", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Students copied the link", valueOld="0.42%", valueNew="0.5%", goodOrBad="bad", goal="", mainOrNot="" %}
		{% impact name="Anonymous has visited the page", valueOld="33", valueNew="121", goodOrBad="bad", goal="", mainOrNot="" %}
	{% endImpactRow %}

	### Consequences
	All sharing features in our LMS (Learning Management System) were deemed ineffective by the product manager. So she changed her plans and decided to focus on more promising areas.
{% endprojectSection %}


{% projectSection %}
	## Reflection
	- The conversion heavily depends on video lectures value — they need to be unique and far better than free YouTube content. This is beyond our control.
	- The entire funnel requires optimisation. However, given its length and complexity, such work isn not cost-effective for the team.
	- Discovered technical pitfalls too late in the process. I had to refine the design after the task was closed. The key learning: for legacy code-related tasks, it's better to assign preliminary research to developers upfront.
{% endprojectSection %}