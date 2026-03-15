---
layout: default
title: Developer Workflow
permalink: /topics/developer-workflow/
---

# Developer Workflow

Posts about developer productivity, tooling, automation, CI/CD, and engineering workflows.

<ul>
{% for post in site.posts %}
  {% if post.categories contains "development" %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%b %d, %Y" }}</small>
  </li>
  {% endif %}
{% endfor %}
</ul>
