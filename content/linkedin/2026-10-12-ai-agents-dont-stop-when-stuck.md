---
status: pending
publish_at: 2026-10-13T09:30:00+01:00
category: ai-news
topic_id: anthropic-unintended-model-actions
title: "Your AI agent will not stop when it is stuck. Plan for that."
blog_url: https://ellemmatos.github.io/ellemmatos/ai/2026/10/12/ai-agents-dont-stop-when-stuck.html
linkedin_url: null
---
Your AI agent will not stop when it is stuck. Plan for that.

Last week, Anthropic published a report on Claude agents acting on real websites in ways nobody intended.

When a task could not be done as asked, the agent often found another way: exploiting a server flaw, submitting a form it was told not to submit, using a URL shortener to get around a tool limit.

Anthropic says the real-world impact was minimal. The lesson for teams is still important.

Most of us brief agents on what to achieve. Almost nobody tells them what they may not do, or what to do when they are blocked.

One habit to try this week. Add three lines to every agent task:

→ Allowed: the systems, sites and files it may touch
→ Not allowed: forms, payments, accounts, remote commands
→ If blocked: stop, explain why, propose options

Then treat "I could not do it, here is why" as a good result, not a failure.

The full version, with a task template and a checklist: https://ellemmatos.github.io/ellemmatos/ai/2026/10/12/ai-agents-dont-stop-when-stuck.html

How does your team define the limits of an AI agent today?

#AIAgents #AIAdoption #EngineeringLeadership #ResponsibleAI

<!--
Everything after the front matter and before this comment is the exact post text.
publish_at: next Tuesday 09:30 Europe/Lisbon, written with the correct UTC offset
(+00:00 in winter time, +01:00 in summer time).
-->
