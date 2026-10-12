# 🎯 Prompt Advisor for Engineering Managers

A [Claude skill](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) that helps **managers of software teams** (Tech Leads, Engineering Managers, Scrum Masters, Heads of Engineering) get better results from AI.

It doesn't just rewrite your prompt: it **explains why** the new version works better, so you learn to write good prompts on your own.

## What it does

| Mode | What you get |
| --- | --- |
| 🩺 **Review** | A 1–5 score on six criteria (goal, context, role and audience, data and constraints, output format, quality bar) plus a **sensitive data alert** when the prompt exposes people, customers or code |
| ✍️ **Rewrite** | An improved version ready to copy, with **what changed and why** and a takeaway you can reuse |
| 📚 **Templates** | 8 prompts for everyday engineering management: sprint planning, 1-on-1s, SBI feedback, post-mortems, code review policy, estimates, stakeholder updates and DORA metrics |
| 🗂️ **History** | Markdown version history for the team's prompts, so what worked never gets lost |

## Before and after

**Original prompt:**

```
write feedback for John, he's late on his tasks and doesn't participate in the stand-ups, I want him to improve
```

**Review — Overall score: 1.7 / 5**

| Criterion | Score | What I noticed |
| --- | --- | --- |
| Goal | 3/5 | The task is clear (feedback), but "I want him to improve" doesn't say what improving looks like |
| Context | 2/5 | No sense of how long this has been happening or whether there was a previous conversation |
| Role and audience | 1/5 | The AI doesn't know whether to write a text or prepare you to say it |
| Data and constraints | 2/5 | Two behaviors, but no concrete facts (which tasks, how late) |
| Output format | 1/5 | Nothing about format or length |
| Quality bar | 1/5 | No request for a check or an example |

**⚠️ Sensitive data alert:** the team member's real name appears next to a performance assessment. Use "Dev A" — the AI doesn't need to know who it is to help.

**Improved version — estimated score 4.5 / 5:**

```
Act as a leadership advisor. Help me prepare improvement feedback, using the SBI model (Situation, Behavior, Impact), to give in person to Dev A, [role and seniority].

Situation: over the last [number] sprints, [e.g. 3 of his 5 tasks missed their due date]. He also [e.g. had his camera off and didn't speak in 4 of the last 10 stand-ups].
Impact: [e.g. the team only finds out about blockers at the end of the sprint, and the sprint goal was at risk].
What has been done so far: [e.g. no conversation yet / I mentioned it briefly a month ago].
What I expect: that he raises delays and blockers in the stand-up as soon as they happen.

Deliver:
1. The feedback in up to 6 sentences, ready to say out loud.
2. An open question to understand his side after the feedback.
3. How to respond if he gets defensive.

Point out any part of what I wrote that is a judgment rather than a fact.
```

**What changed and why:**

1. **Advisor role + SBI model** — gives the AI a recognized feedback structure instead of a generic "reprimand" text.
2. **Facts instead of labels** — "late on his tasks" became numbers. Fact-based feedback is harder to dispute and fairer.
3. **"Improve" became an expected behavior** — the person leaves the conversation knowing exactly what to do differently.
4. **Open question and a plan for defensiveness** — feedback is a conversation, not a speech. You arrive prepared for both sides.
5. **Asking it to flag judgments** — makes the AI check your bias, which is where most feedback goes wrong.

💡 **Takeaway:** before asking the AI, swap every adjective ("late", "disengaged") for a fact you observed. The prompt gets better — and so does the feedback.

## How to use it

**On Claude.ai:** download [`prompt-advisor.skill`](../prompt-advisor.skill) and upload it under *Settings → Capabilities → Skills*.

**On Claude Code:** copy this folder to `~/.claude/skills/prompt-advisor/`.

Then just talk to Claude as usual:

- *"Review this prompt I use for the weekly status report: ..."*
- *"I have a tough 1-on-1 tomorrow with a senior dev who wants to leave the team. Give me a prompt to prepare."*
- *"Save this version of the planning prompt to the history."*

## Structure

```
prompt-advisor/
├── SKILL.md                    # main instructions and the 4 modes
├── references/
│   ├── criteria.md             # the six review criteria
│   └── templates.md            # 8 prompt templates for engineering managers
└── assets/
    └── history-template.md     # file template for prompt versioning
```

---

Created by [Ellem Matos](https://www.linkedin.com/in/ellemmatos/), AI Adoption & Agile Delivery Lead.
