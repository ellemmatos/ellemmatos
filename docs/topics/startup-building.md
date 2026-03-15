---
layout: default
title: Startup Building
permalink: /topics/startup-building/
---

# Startup Building

Posts about building products, startups, and launching AI-driven projects in public.

<ul>
{% for post in site.posts %}
  {% if post.categories contains "startup" %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%b %d, %Y" }}</small>
  </li>
  {% endif %}
{% endfor %}
</ul>
