---
layout: default
title: AI & Claude News for Teams
topic: ai-news
permalink: /topics/ai-news/
---

{% assign topic = site.data.topics.topics | where: "id", page.topic | first %}

# {{ topic.title }}

{{ topic.description }}

<ul>
{% assign topic_posts = site.posts | where: "topic", page.topic %}
{% for post in topic_posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%b %d, %Y" }}</small>
  </li>
{% else %}
  <li>No posts yet.</li>
{% endfor %}
</ul>
