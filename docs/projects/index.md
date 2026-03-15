---
layout: default
title: Projects
permalink: /projects/
---

<h1>Projects</h1>

<p>
A collection of the projects I am building in public.
</p>

<div class="projects-grid">
{% for project in site.data.projects.projects %}
  {% include project-card.html project=project %}
{% endfor %}
</div>
