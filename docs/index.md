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

  <div class="topics-section">
    <h2>Topics</h2>
    <div class="topics-grid">
      {% for topic in site.data.topics.topics %}
      {% include topic-card.html topic=topic %}
      {% endfor %}
    </div>
  </div>

  <div class="posts-section">

## Latest Posts

  </div>
</div>

<script src="/ellemmatos/assets/js/menu.js"></script>
