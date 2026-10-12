# Prompt review criteria

Six criteria, each scored from 1 to 5. The descriptions show what a 1, 3 and 5 prompt looks like; 2 and 4 sit in between.

## 1. Goal
What the person wants the AI to do, and why.

- **1** — Vague or missing ("help me with the sprint").
- **3** — The task is clear, but not the purpose ("create a 1-on-1 agenda").
- **5** — Task and purpose are clear ("create a 1-on-1 agenda to understand why Dev A's delivery dropped over the last two sprints, without the conversation feeling like a reprimand").

## 2. Context
What the AI needs to know about the situation to avoid a generic answer.

- **1** — No context.
- **3** — Some context, but missing pieces that would change the answer (team size, project phase, history).
- **5** — The AI could answer like someone who knows the team: size, way of working, stack when relevant, what has already been tried.

## 3. Role and audience
Who the AI should be, and who the answer is for.

- **1** — Neither role nor audience.
- **3** — One of the two.
- **5** — Both, and consistent ("act as an experienced Engineering Manager; the text goes to the product director, who is not technical").

## 4. Data and constraints
The concrete information and the limits of the answer.

- **1** — Asks for analysis without giving the data, or sets no limits.
- **3** — Gives part of the data or generic constraints.
- **5** — Relevant data included (or referenced as an attachment) and clear limits: deadline, length, what not to do, tone.

## 5. Output format
How the answer should come back.

- **1** — Nothing about format.
- **3** — Generic format ("in bullet points").
- **5** — A format that fits the real use ("a table with task, owner and due date so I can paste it into Jira"; "an email of 150 words max").

## 6. Quality bar
How to tell whether the answer is good: examples, asking questions, self-checks.

- **1** — None.
- **3** — Asks for something like "be detailed".
- **5** — Gives an example of the expected result, asks the AI to ask about anything missing before answering, or asks it to flag risks and assumptions.

---

## Notes

- **Proportionality:** for simple tasks, a 3 on several criteria may be enough. Say so in the review instead of pushing the person to write a huge prompt for no reason.
- **Sensitive data does not affect the score**, but triggers the separate alert described in SKILL.md.
