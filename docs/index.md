---
layout: home
title: I Have a Dream AI
---

<div class="container">
  <div class="site-menu">
    <button id="menu-button">&#9776;</button>
    <div id="menu-panel" class="menu-panel">
      <a href="/ellemmatos/">Home</a>
      <a href="https://github.com/ellemmatos" target="_blank" rel="noopener">GitHub</a>
      <a href="https://github.com/ellemmatos/ellemmatos/blob/main/README.md" target="_blank" rel="noopener">README</a>
      <a href="https://www.linkedin.com/in/ellemmatos/" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
  <div class="hero">
    <div class="avatar-circle">EM</div>
    <div class="hero-title">
      Ellem Matos
    </div>
    <div class="hero-subtitle">
      Project management for teams that work with AI
    </div>
  </div>

  <section class="about-blog">
    <h2>About This Blog</h2>

    <p>
      I lead remote, distributed engineering teams that work AI-first, from planning to code.
    </p>

    <p>
      Here I write about what actually works when project teams adopt AI, the AI news that matters for leaders,
      and leadership, careers and the place of women in tech. One new article every week.
    </p>
  </section>

  <section class="projects-home">
    <h2>Projects</h2>
    <div class="projects-grid">
      {% for project in site.data.projects.projects %}
      {% include project-card.html project=project %}
      {% endfor %}
    </div>
  </section>

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
