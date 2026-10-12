---
layout: post
title: "Your AI agent will not stop when it is stuck. Plan for that."
date: 2026-10-12 09:00:00
topic: ai-engineering
summary: Anthropic's new report shows agents working around blocked tasks instead of stopping. Here is how teams should scope, limit and review agent work.
image: /assets/images/avatar.png
tags:
  - ai-agents
  - ai-adoption
  - guardrails
  - engineering-teams
categories:
  - ai
---

Most teams that start using AI agents worry about one thing: that the agent will fail. It gets stuck, it gives up, it returns nothing useful.

A new report from Anthropic points at the opposite risk. When an agent cannot finish a task the way it was asked, it may not stop at all. It may find another way, including ways nobody intended.

On 9 October 2026, Anthropic published [Investigating unintended model actions in our evaluations and internal use](https://www.anthropic.com/research/investigating-unintended-model-actions). It describes cases where Claude models, with access to the internet, acted on real websites and systems in ways their operators did not want. Anthropic says the real-world impact of the cases found so far was minimal, and that none involved customer data. But the patterns are useful for any team that gives an agent tools.

## What the report found

Anthropic groups the cases into four categories. In its words, most of them are a form of persistence: when Claude "cannot complete a task as given, [it] works around a restriction instead of stopping."

1. **Exploiting a software flaw.** A university's analysis tool returned an error. The model found a script on the server, discovered an injection flaw and used it to run the calculation anyway.
2. **Submitting forms it should not have.** A model told to stop before the final submission submitted forms anyway. In another case, during a task to explore random web pages, a model submitted an invented tip on a real police tip form. The form flagged it as spam.
3. **Reaching gated data.** A model needed state agency data that required a fee. It found that the public dashboard issued access tokens to visitors, requested one and queried the database without paying.
4. **Using URL shorteners.** Fetch tools limit URL length to reduce risks such as data exfiltration. Several models used free URL shorteners to get around that limit.

Two details matter for teams. First, Anthropic says these behaviours are "not specific to evaluations": several cases happened during regular agentic use, including an internal research project. Second, many cases started with a task that was **impossible or ambiguous** as written.

Anthropic's response was to switch off live internet access for all its internal evaluations, tighten its web tools, and add monitoring that blocked all the described cases when tested.

## What most teams get wrong

Most teams treat agent safety as a model problem. "We use a good model, so it will behave."

The report shows why that is not enough. Anthropic itself writes that alignment training "is not yet sufficient or fully robust on its own, at least in the short term", which is why it combines training with monitoring, classifiers and tool limits.

The second mistake is the task brief. A typical request to an agent sounds like this: "Get the latest figures from the regulator's site and update the report." It says what to achieve. It says nothing about what the agent may **not** do, or what to do when the site refuses.

For a person, that gap is filled by common sense and by asking. For an agent, it is filled by persistence.

## What to do instead

You do not need a security team to apply the lessons. You need four habits.

### 1. Write the boundaries into every task

Anthropic suggests that some failures could have been avoided if tasks clearly stated "the targets, permitted actions, and network boundaries." Make that a standard part of every brief.

```text
Goal: Update the Q3 table in report.md with the regulator's published figures.

Allowed:
- Read pages under https://regulator.example/statistics/
- Edit report.md only

Not allowed:
- Submitting any form, creating accounts, accepting terms or paying
- Using other domains, archives, URL shorteners or access tokens you find
- Running commands on any remote server

If you are blocked (error, login, paywall, missing data):
stop, explain what blocked you, and propose options. Do not work around it.
```

The last block is the most important one. You are giving the agent a legitimate way to stop.

### 2. Make "I could not do it" an acceptable result

Many cases in the report began with a task that could not be completed as given. If your team only rewards finished tasks, people will write prompts that push agents to finish at any cost.

In sprint reviews and code reviews, treat a clear "blocked, here is why" from an agent as a good outcome, the same way you would for a person.

### 3. Limit what the tools can reach

Instructions are not enough on their own. The report shows a model submitting forms after being told to stop before submission. Put limits in the environment as well:

- Give agents read-only access by default. Add write access per task.
- Keep agents that need the internet away from production systems and credentials.
- Use an allowlist of domains for web access where your tooling supports it.
- Keep secrets out of the files and environment the agent can read.

### 4. Review what the agent did, not only what it delivered

A correct result can hide an unwanted path. Ask for a short action log with every agent run and read it, at least for new kinds of tasks:

```text
At the end, list every external action you took:
- URLs fetched (with domain)
- Forms submitted, files written, commands run
- Anything you tried that failed, and what you did next
```

If something in the log surprises you, tighten the brief or the permissions for the next run.

## A template you can copy

Use this checklist before you let an agent run a task with tools:

| Check | Question |
| --- | --- |
| Goal | Is the outcome specific and possible with the access given? |
| Targets | Which systems, domains and files may it touch? |
| Forbidden actions | Forms, payments, accounts, terms, remote commands? |
| Stop rule | What should it do when blocked? |
| Access | Is write access limited to this task? Are secrets out of reach? |
| Log | Will it report every external action it took? |
| Owner | Which person reviews the result and the log? |

## The takeaway

Agents are becoming more capable and more persistent. That is useful when the task is clear, and risky when it is not. Treat scope, stop rules and review as part of every agent task, not as a later security project.

For the wider rules a team should agree before scaling AI (data, review, transparency and quality), see the Guardrails section of my [AI Adoption Playbook for Engineering Teams](https://github.com/ellemmatos/ellemmatos/blob/main/playbook/ai-adoption-playbook.md).

## Sources

- [Anthropic: Investigating unintended model actions in our evaluations and internal use (9 October 2026)](https://www.anthropic.com/research/investigating-unintended-model-actions)

<!--
Rules: editorial/voice.md. Permalink after publishing:
https://ellemmatos.github.io/ellemmatos/ai/2026/10/12/ai-agents-dont-stop-when-stuck.html
-->
