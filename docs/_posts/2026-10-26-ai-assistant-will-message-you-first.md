---
layout: post
title: "Your next AI assistant will message you first. Set the rules now."
date: 2026-10-26 09:00:00
topic: ai-engineering
summary: Claude Duet is an AI agent that watches your apps and contacts you first. How to delegate to a proactive agent like a manager, not a chatbot user.
image: /assets/images/avatar.png
tags:
  - claude
  - ai-agents
  - delegation
  - project-management
categories:
  - ai
---

Until now, most AI assistants waited for you. You opened a chat, asked a question and got an answer. If you did not ask, nothing happened.

That is starting to change. On 21 October 2026, Anthropic opened a research preview of [Claude Duet](https://claude.com/resources/articles/claude-duet), "a new app where Claude works as a proactive agent". It watches the apps you connect, sends you a morning brief, and messages you when something needs your attention.

For project managers, this is a familiar shift. It is the difference between a tool you use and an assistant you **delegate** to. And delegation is a skill.

## What Claude Duet does

Here is what Anthropic describes, based on the announcement and the [help article](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet):

- **Morning brief:** each day it summarises the most important items across your connected apps, such as email and calendar.
- **Monitoring:** it checks your connected accounts every few hours and messages you only when something needs attention.
- **Background work:** it runs on its own cloud computer with a browser, so tasks continue when your laptop is closed.
- **Connected apps:** it uses the connectors you set up in Claude, for example Gmail, Google Calendar, Slack and HubSpot.
- **Approvals:** it is "designed to ask before it sends a message, makes a payment, signs a document, or deletes anything."

Anthropic's own examples include preparing briefs before client calls, flagging scheduling conflicts and catching a calendar entry on the wrong day.

## What most people will get wrong

The natural reaction to a proactive agent is one of two extremes. Some people connect every app on day one. Others try it once, get a slightly wrong alert, and give up.

Both treat the agent like a chatbot: something you either trust completely or not at all. A better model is the one you already use with people. **A new assistant gets a clear brief, a small scope and regular feedback.**

There is also a quieter risk. Anthropic says approval requests "can cause fatigue" and that it is still tuning how often they appear. If you approve everything without reading, the approval step stops protecting you.

## How to delegate to a proactive agent

### 1. Start with one read-only routine

Begin with something the agent can only read and summarise, such as the morning brief. Run it for a week. Check what it flags, what it misses and what it ranks wrongly.

You will learn more from that week than from any feature list.

### 2. Write a delegation brief

Give the agent the same brief you would give a new team member. Keep it short and specific:

```text
Watch: my calendar and project inbox.

Urgent means: a client or sponsor asks for a decision,
a meeting moves within 48 hours, or a deadline is at risk.
Not urgent: newsletters, automatic notifications, FYI threads.

You may: draft replies, prepare a one-page brief before
stakeholder calls, flag calendar conflicts.

Always ask me before: sending anything outside the team,
accepting or moving meetings.

Every Friday: send me a list of what you flagged and why.
```

The definition of "urgent" matters most. Anthropic notes that the agent "may misjudge what's urgent", so tell it what urgent means for you.

### 3. Keep approvals meaningful

Approvals only help if you read them. Two habits make that easier:

- Ask for **fewer, larger approvals**: one batch of drafts at the end of the morning, not ten pings.
- Read the recipient line first. Anthropic says each request shows the action, the destination and every recipient.

### 4. Connect only what the task needs

Every connected app widens what the agent can see. Start with the two or three apps your routine needs.

One detail is worth knowing: disconnecting an app stops new access, but information it already learned stays in memory until you reset it.

### 5. Review the agent like a team member

Once a week, spend ten minutes on three questions:

- What did it flag that was not important?
- What did it miss?
- Which approvals did I give without reading?

Then update the brief. A delegation brief is a living document, not a one-time setup.

## A realistic project use case

Imagine a project lead with a busy week of stakeholder meetings:

1. Every morning, the agent lists the day's meetings and the open threads linked to each one.
2. Before each sponsor call, it prepares a one-page brief from recent emails and the project channel.
3. If two meetings collide, it flags the conflict and drafts a reschedule message, but waits for approval.
4. On Friday, it drafts a weekly team recap that uses only information already shared with the team, one of Anthropic's own example tasks.

None of this replaces the project lead's judgement. It moves preparation work out of the way, so the meetings are about decisions.

## The limits, today

This is a research preview, and the limits are real:

- **Access:** waitlist only, for Pro and Max subscribers with a US account. It is not available on Team or Enterprise plans yet.
- **Model:** you cannot choose the model; it runs on Claude Opus 5.5.
- **Visibility:** you cannot watch or take over its browser.
- **Timing:** it checks accounts at set intervals, "so something urgent can arrive between checks."
- **Usage:** background work counts against your plan's usage limits.

So for most teams, this is something to understand and prepare for, not something to roll out this month.

## A checklist you can copy

Before you delegate to any proactive AI agent:

- [ ] I start with one read-only routine for a week
- [ ] I have a written brief: what to watch, what counts as urgent, what it may draft
- [ ] I listed the actions that always need my approval
- [ ] I connected only the apps this routine needs
- [ ] I batch approvals and read the recipients before I approve
- [ ] I review what it flagged and missed every week, and update the brief

## The takeaway

Proactive agents turn AI from a tool you use into an assistant you manage. The people who get value from them will be the ones who already know how to delegate: a clear brief, a small scope, and regular feedback.

If you lead a team that is adopting AI, my free [AI Adoption Playbook for Engineering Teams](https://github.com/ellemmatos/ellemmatos/blob/main/playbook/ai-adoption-playbook.md) covers the guardrails and coaching habits that make this work.

## Sources

- [Anthropic: Introducing Claude Duet (21 October 2026)](https://claude.com/resources/articles/claude-duet)
- [Claude Help Center: Get started with Claude Duet](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)
- [Anthropic: Claude Duet safety, privacy, and security](https://claude.com/resources/articles/claude-duet-safety-privacy-and-security)

<!--
Rules: editorial/content-guidelines.md. Permalink after publishing:
https://ellemmatos.github.io/ellemmatos/ai/2026/10/26/ai-assistant-will-message-you-first.html
-->
