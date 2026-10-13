---
layout: default
title: Career & Work-Life
topic: career
permalink: /topics/career/
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
