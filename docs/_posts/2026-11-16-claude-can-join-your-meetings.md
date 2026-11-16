---
layout: post
title: "Claude can now join your meetings. Decide what it may do."
date: 2026-11-16 09:00:00
topic: ai-news
summary: Claude Meetings, now in beta, lets Claude join calls and start work live. A short team agreement to set up before you turn it on.
image: /assets/images/avatar.png
tags:
  - claude
  - meetings
  - ai-adoption
  - project-management
categories:
  - ai
---

Until now, AI in meetings mostly meant a note taker. It listened, and after the call it gave you a summary.

On 12 November, Anthropic announced Claude Meetings, now in beta. Claude can join a video call as a visible participant, answer questions and start work while the meeting is still running: a document, a whiteboard, a lookup in a connected tool.

That is a different kind of tool. A note taker records what people decided. A participant can act on it. Before your team turns it on, it is worth agreeing on what it may do.

## What was announced

Based on Anthropic's announcement:

- **Where:** Google Meet only for now. Other platforms are planned.
- **Who:** rolling out in beta to Team and Enterprise plans. It is not available to organisations with zero data retention, HIPAA-ready configurations or customer-managed encryption keys.
- **How it joins:** someone adds Claude to a meeting, or turns on auto-join. Claude appears as a participant and posts a notice in the call chat.
- **During the call:** people can ask questions out loud or in the chat. By default, Claude answers in writing. It can start docs and whiteboards that people on the invite can edit, and it writes notes and action items.
- **Connected tools:** Claude uses a person's connected tools only with that person's permission. It asks the first time, and a yes applies from then on.
- **Spoken requests:** Claude asks each time to confirm who is speaking.
- **Outside guests:** by default, Claude stays out of calls with people from outside the organisation, and leaves if one joins later. An admin can change this.
- **What it keeps:** a transcript, a summary and descriptions of the screen, but not audio. Each meeting gets a page in claude.ai with the notes and everything Claude built.

Anthropic's own advice is direct: before you add Claude or turn on auto-join, make sure everyone on your calls is OK with being transcribed.

## What changes for project teams

Three things change when the AI in the room can act.

**Work starts earlier.** In Anthropic's example, someone says "Claude, start a doc for this plan" during the meeting. Later, when the budget comes up, Claude asks for approval to look up last year's cost and compares it with the current plan. The draft exists before the call ends.

**Permissions matter more.** A lookup in a connected tool is a real action on real data. And because "a yes applies going forward", the first approval is also a decision for every meeting after it.

**People speak differently when they know they are transcribed.** Some will say less. Some will ask to speak off the record. This is normal, and the team should talk about it openly.

## Agree on five things before you turn it on

You do not need a policy document. A short team agreement is enough, written once and reviewed after two weeks.

### 1. Consent

Who has to agree before Claude joins? The simple rule: everyone on the call. Be careful with auto-join. It is convenient, but it means nobody makes the decision for that specific meeting.

### 2. Which meetings

Not every meeting needs an AI participant. Planning sessions, technical design reviews and project status calls are good candidates. One-to-ones, performance conversations and sensitive topics usually are not.

Keep the default for outside guests unless you have a clear reason and your client has agreed.

### 3. What it may do during the call

Make a short list:

- Notes and action items: yes
- Starting a draft doc or whiteboard: yes
- Looking up data in connected tools: only these tools, and only for these questions

Remember that the first yes for a tool is not a one-off. Decide which tools are in scope before someone approves one under time pressure.

### 4. Who owns the output

AI notes are only useful if a person owns them. Name one person per meeting who checks the action items, corrects what is wrong and sends the final version. The same applies to any doc Claude starts: it is a first draft until a person who knows the work has read it.

### 5. When you review the agreement

Try it for two weeks in a few meetings. Then ask the team: did it save time? Did anyone feel less free to speak? Keep what works and change the rest.

## A template you can copy

```text
Our team agreement for an AI in meetings

Consent: we ask everyone on the call before Claude joins.
Auto-join: off / on only for <meeting types>.
Meetings: yes for <planning, design reviews, status>; no for <1:1s, HR, sensitive topics>.
Outside guests: Claude stays out unless <condition>.
During the call, Claude may: take notes, list action items, start drafts.
Connected tools allowed: <tool list>, only for <purpose>.
Owner of notes and drafts: the meeting organiser checks and sends them within 24 hours.
Review date: <two weeks from today>.
```

## The takeaway

An AI that can act during a meeting can save real time: the draft, the numbers and the action items are ready before the call ends. But it changes who records, who decides and what data is touched. Agree on that first, in one short page, and the tool becomes a help instead of a surprise.

My free [AI Adoption Playbook for Engineering Teams](https://github.com/ellemmatos/ellemmatos/blob/main/playbook/ai-adoption-playbook.md) has more on AI in meetings and the guardrails that keep adoption safe.

## Sources

- Anthropic, "Introducing Claude Meetings" (12 November 2026): https://claude.com/resources/articles/claude-meetings

<!--
Rules: editorial/content-guidelines.md. Permalink after publishing:
https://ellemmatos.github.io/ellemmatos/ai/2026/11/16/claude-can-join-your-meetings.html
-->
