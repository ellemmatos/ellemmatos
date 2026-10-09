# AI Adoption Playbook for Engineering Teams

**A practical guide to bringing AI into how remote, distributed teams plan, meet, build and deliver.**

By [Ellem Matos](https://www.linkedin.com/in/ellemmatos/) · AI Adoption & Agile Delivery Lead

🇵🇹 [Versão em português](ai-adoption-playbook-pt.md)

---

## Why this playbook exists

Most teams already have access to AI tools. Few teams actually *work differently* because of them.

The gap is not the technology. It is habits, confidence, process and trust. Someone has to give people their first start, show where AI helps in *their* daily work, and stay close until they are autonomous.

This playbook is the method I used as Lead Scrum Master and Project Manager with remote teams spread across several regions and time zones, most of them working in English as a second language. It covers the whole delivery cycle: meetings, planning, Jira, prototyping, code, documentation, testing and review.

**What it produced in practice:**

- **~15 people** (developers, Scrum Masters and Team Leads) went from first use to working autonomously with AI
- **Meetings kept to time** and stayed focused, with an AI-drafted agenda before and a clear written summary after
- **Fewer language misunderstandings** in multilingual teams, because everyone left the meeting with the same written summary
- **Faster, more predictable and scalable sprint planning** across teams
- **5+ existing codebases** in different technologies documented with AI support

---

## Principles

1. **Start from the team's pain, not from the tool.** Ask "what wastes your time every week?" before showing any AI feature.
2. **Give the first start, then step back.** Adoption happens when people do it themselves with someone beside them, not in a training session.
3. **AI drafts, humans decide.** Every AI output (summary, task, code, test) is reviewed by a person who owns it.
4. **Make it visible.** Share small wins in the team channel. One real example convinces more than ten slides.
5. **Write things down.** In remote, multilingual teams, a clear written record is worth more than a perfect meeting.
6. **Protect data first.** Clear rules on what can and cannot go into an AI tool come before scaling.

---

## The adoption path: four stages

| Stage | Goal | What I do | Signal to move on |
|---|---|---|---|
| **1. Start** | First useful result | Pick one real task per person and do it together with AI | The person repeats it alone the next day |
| **2. Guide** | Build the habit | Short check-ins, share prompts that worked, fix what went wrong | AI is used without being reminded |
| **3. Autonomy** | People own their use | People apply AI to their own code and to managing their own work | People share their own tips with others |
| **4. Scale** | Spread across teams | Standard templates, a shared prompt library, team champions | New teams onboard through champions, not through me |

The most important stage is the first one. Most adoption fails because nobody sits with the person for the first real task.

---

## Where AI helps: use cases across the delivery cycle

### 1. Meetings (before, during, after)

Remote meetings were the first place I applied AI, because the pain was obvious: meetings ran over time, lost focus, and language noise meant people left with different understandings.

| Moment | What AI does | Human role |
|---|---|---|
| **Before** | Drafts the agenda from the backlog, open issues and last meeting's actions | Scrum Master adjusts priorities and timeboxes |
| **During** | Records and transcribes the audio | Facilitator keeps the meeting on the plan |
| **After** | Writes a summary, decisions and action items, then rewrites it in clear, human, simple English | Facilitator reviews and sends it to the team |

**Why it works for multilingual teams:** a clear written summary at the end removes the ambiguity of spoken second-language English. Everyone acts on the same text.

### 2. Sprint planning and Jira

- Turn requirements and meeting notes into draft Jira tasks with descriptions and acceptance criteria
- Automate repetitive Jira work (task creation, updates, recurring tasks)
- Prepare sprint planning: suggest how to break down work and flag dependencies and risks
- Draft the plan for the next sprint from velocity, backlog and team capacity

The team still estimates and commits. AI prepares the ground so the planning meeting is about decisions, not typing.

### 3. Prototyping and implementation

Together with the technical team:

- Sketch how a feature could be implemented in *our* stack before writing code
- Build quick prototypes to discuss with stakeholders
- Support the implementation itself, with developers reviewing and owning every line

### 4. Documentation of existing code

Legacy code without documentation slows every team down. With AI we:

- Ran the existing code through AI to explain modules, flows and dependencies
- Generated first drafts of technical documentation, reviewed by the developers who knew the system
- Applied it to 5+ codebases in different technologies

### 5. Testing and code review

- AI-assisted analysis of automated tests: gaps, edge cases, failing patterns
- AI as a first reviewer on code changes, before the human review
- Test plans drafted from requirements, then refined by the team

---

## Coaching people: the part most playbooks skip

Tools are easy. People are the work.

**First session (30–45 min, one person):**
1. Ask: "What took you the most time last week?"
2. Pick one of those tasks and do it together with AI, on their real work
3. Save the prompt that worked in a shared place
4. Agree on one task they will try alone tomorrow

**Follow-up (10 min, a few days later):**
- What worked? What went wrong? Fix one prompt together.

**Different roles need different starts:**

| Role | Good first use case |
|---|---|
| Developer | Explain unfamiliar code, draft tests, first-pass code review |
| Scrum Master | Meeting agenda and summary, sprint planning preparation |
| Team Lead | Status summaries, task breakdown, documentation |

**Resistance is normal.** The common reasons are fear of doing it wrong, fear of being replaced, and lack of time. Answer them with a small personal win, not with arguments.

---

## Guardrails

Before scaling, agree on clear and short rules:

- **Data:** what may never go into an AI tool (client data, personal data, credentials, confidential code), and which tools are approved
- **Review:** a named human owns every AI output that leaves the team
- **Transparency:** say when a document or summary was AI-drafted
- **Quality:** AI-generated code follows the same review and testing rules as any other code

**EU context:** under the EU AI Act, organisations must take measures to ensure a sufficient level of AI literacy among the people who use AI on their behalf (obligation applicable since February 2025). A practical adoption programme like this one is one of the most direct ways to build that literacy in day-to-day work.

---

## How to measure adoption

Pick a few indicators and track them from the start. Suggested measures:

| What | How to measure |
|---|---|
| Reach | Number of people actively using AI in their weekly work |
| Depth | Number of use cases per team (meetings, planning, code, docs, tests) |
| Meeting health | Meetings that end on time; summaries sent within the same day |
| Planning | Time spent in sprint planning; predictability of sprint commitments |
| Knowledge | Modules or systems with up-to-date documentation |
| Sentiment | A short monthly question: "Does AI save you time? Where?" |

Measure before you start, even roughly. Without a baseline, you cannot show the change.

---

## A 30-60-90 day rollout

**Days 1–30: Start**
- [ ] Agree on guardrails and approved tools
- [ ] Map each team's biggest time-wasters
- [ ] Introduce AI in one ritual per team (usually meetings)
- [ ] First-start sessions with 3–5 early adopters

**Days 31–60: Guide**
- [ ] Extend to sprint planning and Jira
- [ ] Build a shared prompt library from what actually worked
- [ ] Short follow-ups with every person using AI
- [ ] Share small wins weekly in the team channel

**Days 61–90: Scale**
- [ ] Bring AI into the development cycle: documentation, tests, code review
- [ ] Name one AI champion per team
- [ ] Review the indicators and adjust
- [ ] Onboard new teams through the champions

---

## Templates

### Meeting agenda (before)

```
You are helping me prepare a [daily / refinement / sprint review / retro] for a remote team.
Context: [paste backlog items, open issues, last meeting's action items]
Create a focused agenda with timeboxes for a [30]-minute meeting.
List the decisions we need to make. Keep it short and in simple English.
```

### Meeting summary (after)

```
Here is the transcript of our meeting: [transcript]
Write a summary for a multilingual team, in clear and simple English:
1. Decisions made
2. Action items (owner + deadline)
3. Open questions
Avoid jargon and idioms. Keep sentences short.
```

### Jira tasks from requirements

```
From the requirement below, create Jira tasks.
For each task: title, short description, acceptance criteria, and dependencies.
Flag anything unclear as a question instead of guessing.
Requirement: [text]
```

### Documenting existing code

```
Explain this code for a developer who has never seen it:
1. What it does (in plain words)
2. Main flows and dependencies
3. Risks or unclear parts we should check with the team
Code: [code]
```

---

## Anti-patterns to avoid

- **Tool-first rollouts:** buying licences and sending a link. Adoption stays near zero.
- **One big training session:** people forget it by the next sprint. Short, repeated, hands-on support works.
- **No guardrails:** one data incident can stop the whole programme.
- **Unreviewed AI output:** trust drops the first time a wrong summary or task reaches a client.
- **No baseline:** without measuring before, the impact becomes an opinion.

---

## About me

I started in electronics, led technical teams in the Brazilian Army, spent years as a .NET and SharePoint developer, and became Lead Scrum Master & Project Manager at Capgemini, where I introduced Scrum from scratch and scaled it to 22+ teams.

Today I help remote, distributed engineering teams work AI-first, from planning to code.

[LinkedIn](https://www.linkedin.com/in/ellemmatos/) · [GitHub](https://github.com/ellemmatos) · Open to 100% remote roles

---

<sub>This playbook reflects my own practice. Feedback and questions are welcome on LinkedIn.</sub>
