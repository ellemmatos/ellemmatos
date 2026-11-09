---
layout: post
title: "Project planning should not be a typing session"
date: 2026-11-09 09:00:00
topic: ai-delivery
summary: Use AI to prepare tasks, acceptance criteria, dependencies and risks before planning, so the meeting is spent on decisions, not typing.
image: /assets/images/avatar.png
tags:
  - ai-adoption
  - project-planning
  - jira
  - project-management
categories:
  - ai
---

Watch a typical planning meeting. One person shares their screen. Everyone else watches them type task titles, copy text from a requirement and argue about wording.

An hour later, the board is full. But the team spent most of that hour on writing, not on deciding. The real questions came at the end, when people were tired: what is risky, what depends on what, and what fits in the time we have.

AI is good at the typing part. People are needed for the deciding part. The trick is to separate the two.

## What most teams get wrong

Teams usually make one of two mistakes.

The first is doing all the preparation live. The requirement arrives, and the team breaks it down together, word by word. It feels collaborative, but it is slow, and the quiet people rarely get a say.

The second mistake is the opposite. Someone asks an AI tool to "create the tasks", pastes the result into Jira and calls it a plan. Nobody has checked it. The AI guessed where the requirement was unclear, and the guesses look exactly like facts.

Both mistakes have the same cause: preparation and decisions are mixed up. AI should prepare. The team should decide.

## What to do instead

Split planning into two steps: preparation before the meeting, and decisions during it.

### Step 1. Prepare draft tasks from the requirement

A day or two before planning, the project manager or a lead turns each requirement into draft tasks. Give the AI the requirement, any meeting notes and the definition of done your team uses.

```text
From the requirement below, create Jira tasks.
For each task: title, short description, acceptance criteria, and dependencies.
Flag anything unclear as a question instead of guessing.
Requirement: <paste>
```

The last instruction is the most important one. Without it, the AI fills gaps with plausible answers. With it, you get a list of open questions, and those are often more useful than the tasks.

### Step 2. Ask for dependencies and risks

Once you have draft tasks, ask a second question in the same conversation.

```text
Look at these tasks as a set.
- Which tasks depend on others, and in what order should they be done?
- Which tasks touch shared systems or other teams?
- What could block this work? List risks with a one-line reason each.
Do not invent systems or people that are not mentioned.
```

This gives the team a starting map. It is not complete, and it will be wrong in places. That is fine. It is much easier to correct a map than to draw one from zero in a meeting.

### Step 3. Review before the meeting, not during it

Send the drafts and the questions to the people who know the work best. Ask them to correct what is wrong and answer what they can. Keep this light: fifteen minutes each, in their own time.

Now the requirement gaps are visible before the meeting. Some will already have answers. Others become agenda items.

### Step 4. Use the meeting for decisions

With the preparation done, the planning meeting has a different agenda:

1. Open questions that still need an answer
2. Risks and dependencies the team does not agree with
3. Estimates, from the people who will do the work
4. What the team commits to, given its capacity

Notice what is missing: writing task descriptions. That already happened.

The team still estimates and commits. AI does not know how tired people are, which system is fragile this month, or who is on holiday. Those are the facts that decide a plan.

### Step 5. Automate the repetitive Jira work

After planning, there is often more typing: recurring tasks, status updates, labels, links between tickets. Many teams use Jira's own automation rules for this, and AI can help write and check those rules. Start with one repeated task that annoys everyone, and automate only that.

## A template you can copy

Use this as a checklist for your next planning cycle.

| When | Who | What |
| --- | --- | --- |
| 2 days before | Project manager or lead | Draft tasks and acceptance criteria with AI, from the requirement |
| 2 days before | Project manager or lead | Ask AI for dependencies, risks and open questions |
| 1 day before | People who know the work | Correct drafts, answer questions (15 minutes each) |
| Meeting | Whole team | Open questions, disputed risks, estimates, commitment |
| After | One owner | Move approved tasks to the board, set up one automation |

And three rules that keep it safe:

- **Follow your company's rules** on which AI tools are allowed and which data may go in. Requirements can contain client details.
- **Questions over guesses.** Every prompt asks the AI to flag what is unclear.
- **Drafts are not decisions.** Nothing goes on the board until a person who knows the work has read it.

## What changes for the team

When I introduced this in my teams, the biggest change was not speed. It was the meeting itself. People came in with the gaps already visible, so the discussion started where it matters: what is risky and what we can really deliver.

Planning also became easier to repeat. The same prompts, the same checklist, every cycle. That makes planning more predictable, and it makes it easier to bring the same method to a new team.

## The takeaway

Let AI do the typing before the meeting. Keep the meeting for the decisions only people can make: what is unclear, what is risky and what the team commits to.

Want to bring this to your team step by step? My free [AI Adoption Playbook for Engineering Teams](https://github.com/ellemmatos/ellemmatos/blob/main/playbook/ai-adoption-playbook.md) has the full planning section and more prompts.

<!--
Rules: editorial/content-guidelines.md. Permalink after publishing:
https://ellemmatos.github.io/ellemmatos/ai/2026/11/09/project-planning-not-a-typing-session.html
-->
