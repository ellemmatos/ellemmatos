---
layout: default
title: Architecture
permalink: /topics/architecture/
---

# Architecture

Posts about system design, technical decisions, and software architecture.

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
