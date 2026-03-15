---
layout: default
title: AI Scrum Manager
project: ai-scrum-manager
permalink: /projects/ai-scrum-manager/
---

{% assign project_data = site.data.projects.projects | where: "id", page.project | first %}

# {{ project_data.name | default: page.title }}

{{ project_data.description }}

{% if project_data.github %}
[GitHub Repository]({{ project_data.github }})
{% endif %}

## Related Posts

{% include project-post-list.html %}
