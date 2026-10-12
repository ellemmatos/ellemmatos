# Prompt templates for engineering managers

Each template has: when to use it, the prompt with `[bracketed]` fields, and a usage tip. Fill in the fields with what the person already said and leave brackets only for what is missing.

## Contents
1. Sprint planning
2. 1-on-1 meeting
3. Feedback (SBI model)
4. Incident post-mortem
5. Code review policy
6. Estimates and refinement
7. Stakeholder communication
8. DORA metrics analysis

---

## 1. Sprint planning

**When to use:** before sprint planning, to arrive with a proposed goal and scope.

```
Act as an experienced Scrum Master helping me prepare for sprint planning.

Team context:
- Team of [number] developers, [length] sprints, stack [technologies].
- Capacity this sprint: [available days / known absences].
- Average velocity over the last 3 sprints: [points or number of items].
- Product goal for this quarter: [goal].

Prioritized backlog (most to least important):
[list of items with estimates]

What I need:
1. A proposed sprint goal in one sentence, linked to the quarterly goal.
2. The items that fit the capacity, with a [10–20]% buffer for the unexpected.
3. Dependencies and risks that could block the sprint.
4. Questions I should take to the Product Owner before planning.

Format: a table with item, estimate and the reason it is in or out; then risks and questions as bullet points.
If any essential information is missing, ask before answering.
```

**Tip:** the AI proposes, the team decides. Treat it as a starting point, not a final plan.

---

## 2. 1-on-1 meeting

**When to use:** to prepare a 1-on-1, especially one with a sensitive topic.

```
Act as an Engineering Manager experienced in growing people.

I have a [length] 1-on-1 with [Dev A — role and seniority], who has been on the team for [time].
Context: [what has been happening — e.g. deliveries slipping over the last sprints, less participation in stand-ups].
What I know: [observed facts, without interpretation].
What I don't know: [e.g. whether there is something personal or a motivation issue].
My goal for the conversation: [e.g. understand the cause and agree on a next step, without it feeling like a reprimand].

Create:
1. An agenda with timings for each part.
2. 5 open questions, from the lightest to the most direct.
3. Phrases I should avoid, and why.
4. How to close with a clear agreement.

Tone: supportive and direct.
```

**Tip:** use "Dev A" instead of the real name. The AI does not need to know who it is to help.

---

## 3. Feedback (SBI model)

**When to use:** to structure feedback, whether recognition or improvement.

```
Act as a leadership advisor. Help me structure feedback using the SBI model (Situation, Behavior, Impact).

For: [Dev A — role]
Type: [recognition / improvement]
Situation: [when and where it happened]
Observed behavior: [what the person did or said, factually]
Impact: [effect on the team, the product or the customer]
What I expect going forward: [desired behavior]

Deliver:
1. The feedback in up to 6 sentences, ready to say out loud.
2. A question to open the dialogue after the feedback.
3. How to respond if the person disagrees or gets defensive.

Point out any part of what I wrote that is a judgment rather than a fact.
```

**Tip:** the last request ("point out judgments") is what improves the feedback the most.

---

## 4. Incident post-mortem

**When to use:** after a production incident, to run a blameless analysis.

```
Act as a Site Reliability Engineer (SRE) facilitating a blameless post-mortem.

Incident: [what happened, in 2–3 sentences]
Timeline: [time — event, from alert to resolution]
Impact: [affected users, duration, losses]
Apparent cause: [what is known so far]
What went well in the response: [e.g. the alert fired quickly]

Produce a post-mortem document with:
1. Executive summary (3 sentences, for leadership).
2. Organized timeline.
3. Root cause analysis using the 5 Whys.
4. Contributing factors (process, tooling, communication) — without blaming people.
5. Corrective actions in a table: action, type (prevent / detect / mitigate), owner [to be defined], suggested due date.

If the timeline has gaps, list the questions the team needs to answer.
```

**Tip:** remove customer names, IPs and vulnerability details before pasting.

---

## 5. Code review policy

**When to use:** to create or revisit the team's code review agreement.

```
Act as a Tech Lead experienced in code quality and remote teams.

Context: team of [number] devs, [time zone(s)], stack [technologies], tool [GitHub / GitLab / Azure DevOps].
Current problems: [e.g. PRs wait 2 days for review, unclear comments, PRs too large].
AI in reviews: [e.g. we use / want to use AI-assisted automated review].

Write a code review policy of at most 1 page covering:
1. Ideal PR size and what to do when that isn't possible.
2. Expected time to first review.
3. What reviewers should check and what to leave to automated tools (including AI).
4. How to write comments (e.g. prefixes like "nit:", "blocking:").
5. When a PR can be approved with 1 reviewer and when it needs 2.

Tone: a team agreement, not an imposed rule. End with 3 metrics to track whether the policy is working.
```

**Tip:** present the result to the team as a draft and adjust it together. Imposed policies don't stick.

---

## 6. Estimates and refinement

**When to use:** to prepare a story for refinement or challenge an estimate.

```
Act as both a senior developer and a Product Owner, reviewing a story before refinement.

Story: [story text]
Acceptance criteria: [list, if any]
Technical context: [affected systems, integrations, legacy]
Current team estimate: [points or days, if one exists]

Do the following:
1. List the questions the team will raise in refinement.
2. Point out technical risks and hidden dependencies.
3. Suggest how to split the story into smaller parts that each deliver value on their own.
4. Say whether the current estimate looks optimistic, realistic or pessimistic, and why.

Do not create a new estimate: the estimate belongs to the team. Your role is to make the conversation faster and better.
```

**Tip:** the last sentence stops the AI from "replacing" the team — and keeps the estimate a commitment from the people doing the work.

---

## 7. Stakeholder communication

**When to use:** to share status, a delay or a risk with a non-technical audience.

```
Act as a project manager experienced in communicating with executives.

I need to communicate: [e.g. a 2-week delay in delivering the payments module].
To: [audience role — e.g. sales director, non-technical].
Cause: [technical explanation, as I would give it to the team].
What we are already doing: [actions].
What I need from them: [e.g. a decision between cutting scope or accepting the new date].
Channel: [email / Teams message / slide].

Write the message:
- In up to [150] words.
- Starting with what changes for them, not with the technical cause.
- Translating the technical cause into business impact.
- Making the options and the decision needed very clear, with a deadline for the reply.

Then list 3 questions they will likely ask, with short answers for each.
```

**Tip:** asking for the likely questions prepares you for the meeting that follows the email.

---

## 8. DORA metrics analysis

**When to use:** to interpret the team's delivery metrics and decide where to act.

```
Act as a software engineering consultant specialized in DORA metrics.

Team metrics for the last [period]:
- Deployment frequency: [value]
- Lead time for changes: [value]
- Change failure rate: [value]
- Time to restore service: [value]
Previous period, for comparison: [values, if available]
Context: [e.g. we migrated to microservices last quarter; the team grew from 5 to 8].

Analyze:
1. Which performance tier the team is in for each metric (low, medium, high, elite) and what that means in practice.
2. What improved or got worse, and the most likely hypotheses given the context.
3. The metric that would bring the most benefit right now if improved — and why.
4. 3 concrete actions for the next 30 days, with how to measure their effect.

Separate conclusions drawn from the data from hypotheses. Do not compare the team with other teams or use the metrics to evaluate individuals.
```

**Tip:** DORA metrics measure the delivery system, not people. The last sentence of the prompt protects that.
