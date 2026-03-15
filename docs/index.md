---
layout: home
title: Ellem Matos
---

<div class="container">
  <div class="site-menu">
    <button id="menu-button">&#9776;</button>
    <div id="menu-panel" class="menu-panel">
      <a href="/ellemmatos/">Home</a>
      <a href="https://github.com/ellemmatos" target="_blank" rel="noopener">GitHub</a>
      <a href="https://github.com/ellemmatos/ellemmatos/blob/main/README.md" target="_blank" rel="noopener">README</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
  <div class="hero">
    <div class="avatar-circle">EM</div>
    <div class="hero-title">
      Ellem Matos
    </div>
    <div class="hero-subtitle">
      Building AI Systems in Public
    </div>
  </div>

  <section class="about-blog">
    <h2>About This Blog</h2>

    <p>
      This blog documents the process of building AI-powered developer tools and software systems in public.
    </p>

    <p>
      It focuses on engineering decisions, architecture, and the lessons learned while creating real projects such as the AI Scrum Manager and other automation platforms.
    </p>
  </section>

  {% include now-building.html %}

  {% include featured-project.html %}

  <section class="topics">
    <h2>Topics</h2>
    <div class="topics-grid">
      {% for topic in site.data.topics.topics %}
      {% include topic-card.html topic=topic %}
      {% endfor %}
    </div>
  </section>

  <section class="latest-posts">
    <h2>Latest Posts</h2>

    <ul class="latest-posts-list">
      {% for post in site.posts limit:5 %}
      <li class="latest-post-item">
        <h3 class="latest-post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>

        <p class="latest-post-summary">
          {% if post.summary %}
            {{ post.summary }}
          {% else %}
            {{ post.excerpt | strip_html | truncate: 160 }}
          {% endif %}
        </p>

        <p class="latest-post-meta">
          {{ post.date | date: "%B %d, %Y" }}
        </p>
      </li>
      {% endfor %}
    </ul>
  </section>
</div>

<script src="/ellemmatos/assets/js/menu.js"></script>
