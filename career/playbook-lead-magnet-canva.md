# Playbook → lead magnet (Canva AI)

Objetivo: transformar o AI Adoption Playbook num **PDF bonito de ~12 páginas** para oferecer no LinkedIn ("comenta PLAYBOOK e eu envio").

## Como usar

1. Abre o Canva → **Canva AI** (ou "Magic Design" → "Document/Presentation").
2. Cola o **Prompt 1** completo de uma vez. Ele contém todo o texto, página a página.
3. Se o Canva cortar o texto (limite de caracteres), cola o Prompt 1 só até "PAGE 6" e, depois de gerado, cola o resto com a frase "Continue the same document with these pages:".
4. No fim, cola o **Prompt 2** (banner do LinkedIn) e o **Prompt 3** (imagem do post).
5. Exporta como **PDF Standard**, com o nome `AI-Adoption-Playbook-Ellem-Matos.pdf`.

---

## Prompt 1: o PDF (colar tudo)

```
Create a 12-page A4 portrait ebook / lead magnet called "AI Adoption Playbook for Engineering Teams" by Ellem Matos.

DESIGN
- Style: modern, clean, professional, friendly. Lots of white space. Easy to read on a phone.
- Colours: deep navy #0B1B34 (titles), indigo #4F46E5 (accents, icons, highlights), light grey #F9FAFB (boxes), white background.
- Fonts: a bold geometric sans-serif for titles (e.g. Montserrat or Poppins), a clean sans-serif for body text (e.g. Inter or Open Sans), body 11–12 pt.
- Use simple line icons, numbered steps, tables with rounded corners and highlighted "Tip" boxes. No stock photos of robots. Abstract shapes or illustrations of people collaborating remotely are fine.
- Footer on every page except the cover: "Ellem Matos · linkedin.com/in/ellemmatos" and the page number.
- Keep ALL the text below exactly as written. Do not invent numbers, quotes or claims.

PAGE 1 — COVER
Title: AI Adoption Playbook for Engineering Teams
Subtitle: A practical guide to bringing AI into how remote teams plan, meet, build and deliver.
Author: Ellem Matos — Project Manager for AI-enabled engineering teams
Small line at the bottom: Free guide · 2026

PAGE 2 — WHY THIS PLAYBOOK EXISTS
Most teams already have access to AI tools. Few teams actually work differently because of them.
The gap is not the technology. It is habits, confidence, process and trust.
Highlight box "What it produced in practice":
• ~15 people went from first use to working autonomously with AI
• Meetings kept to time, with an AI-drafted agenda before and a clear written summary after
• Fewer language misunderstandings in multilingual teams
• Faster, more predictable sprint planning
• 5+ existing codebases documented with AI support

PAGE 3 — 6 PRINCIPLES (6 icon cards in a 2x3 grid)
1. Start from the team's pain, not from the tool.
2. Give the first start, then step back.
3. AI drafts, humans decide.
4. Make it visible: one real example convinces more than ten slides.
5. Write things down: in remote teams, a clear written record beats a perfect meeting.
6. Protect data first.

PAGE 4 — THE ADOPTION PATH: 4 STAGES (horizontal timeline or staircase)
1. Start — first useful result. Do one real task per person together with AI. Move on when: the person repeats it alone the next day.
2. Guide — build the habit. Short check-ins, share prompts that worked. Move on when: AI is used without reminders.
3. Autonomy — people own their use. Move on when: people share their own tips.
4. Scale — spread across teams with templates, a shared prompt library and team champions.
Tip box: Most adoption fails because nobody sits with the person for the first real task.

PAGE 5 — USE CASE 1: MEETINGS (3-column table: Before / During / After)
Before: AI drafts the agenda from the backlog, open issues and last actions. The facilitator adjusts priorities.
During: AI records and transcribes. The facilitator keeps the meeting on plan.
After: AI writes the summary, decisions and action items in clear, simple English. The facilitator reviews and sends it.
Tip box: In multilingual teams, everyone acts on the same written summary.

PAGE 6 — USE CASES 2 AND 3: PLANNING, JIRA AND BUILDING
Planning and Jira: turn notes into draft tasks with acceptance criteria · automate repetitive Jira work · flag dependencies and risks · draft the next plan from capacity and backlog. The team still estimates and commits.
Building: sketch how a feature fits your stack · quick prototypes for stakeholders · implementation support, with developers owning every line.

PAGE 7 — USE CASES 4 AND 5: DOCUMENTATION, TESTING AND REVIEW
Documentation: AI explains modules, flows and dependencies of legacy code; developers review the drafts. Applied to 5+ codebases.
Testing and review: find test gaps and edge cases · AI as first reviewer before the human review · test plans drafted from requirements.

PAGE 8 — COACHING PEOPLE: THE PART MOST PLAYBOOKS SKIP
First session (30–45 min, one person):
1. Ask: "What took you the most time last week?"
2. Do one of those tasks together with AI, on real work.
3. Save the prompt that worked.
4. Agree on one task to try alone tomorrow.
Follow-up (10 min, a few days later): what worked, what went wrong, fix one prompt together.
Small table "Good first use case": Developer — explain unfamiliar code, draft tests · Project lead — meeting agenda and summary, planning prep · Team Lead — status summaries, task breakdown.
Tip box: Resistance is normal. Answer it with a small personal win, not with arguments.

PAGE 9 — GUARDRAILS (checklist style)
• Data: what may never go into an AI tool, and which tools are approved
• Review: a named human owns every AI output that leaves the team
• Transparency: say when a document was AI-drafted
• Quality: AI-generated code follows the same review and testing rules
EU box: Under the EU AI Act, organisations must ensure a sufficient level of AI literacy among people who use AI on their behalf (applicable since February 2025).

PAGE 10 — HOW TO MEASURE ADOPTION (table)
Reach — people actively using AI weekly · Depth — use cases per team · Meeting health — meetings ending on time · Planning — time in planning, predictability · Knowledge — systems with up-to-date documentation · Sentiment — monthly question "Does AI save you time? Where?"
Tip box: Measure before you start. Without a baseline, you cannot show the change.

PAGE 11 — A 30-60-90 DAY ROLLOUT (3 columns with checkboxes)
Days 1–30 Start: agree on guardrails · map each team's time-wasters · AI in one ritual per team · first-start sessions with 3–5 early adopters.
Days 31–60 Guide: extend to planning and Jira · shared prompt library · follow-ups with everyone · share small wins weekly.
Days 61–90 Scale: documentation, tests and code review · one AI champion per team · review the indicators · onboard new teams through champions.

PAGE 12 — ABOUT THE AUTHOR + CALL TO ACTION
Ellem Matos — Project Manager for AI-enabled engineering teams, based in Portugal.
From electronics and a technical team in the Brazilian Army, to .NET and SharePoint development, to leading project delivery for remote, multilingual teams. Coached ~15 people from first AI use to autonomy and scaled a delivery model to 22+ teams.
Call to action box: Follow me on LinkedIn for one practical article a week on AI in project delivery, leadership and careers → linkedin.com/in/ellemmatos
Blog: ellemmatos.github.io/ellemmatos
```

---

## Prompt 2: banner do LinkedIn

```
Create a LinkedIn profile banner, 1584 x 396 px, matching the "AI Adoption Playbook" ebook style: white background, deep navy #0B1B34 text, indigo #4F46E5 accents, abstract shapes, no photos.
Text on the right two-thirds (the left third is covered by the profile photo, keep it empty):
Big: "Project management for teams that work with AI"
Small: "AI adoption · Remote leadership · Delivery"
```

## Prompt 3: imagem do post "comenta PLAYBOOK"

```
Create a LinkedIn post image, 1200 x 1500 px (portrait), same style as the "AI Adoption Playbook" ebook.
Show a 3D mock-up of the ebook cover tilted slightly to the right.
Headline above: "Free: my AI Adoption Playbook for engineering teams"
Below: "12 pages · 4 stages · 5 use cases · a 30-60-90 day plan"
Bottom badge in indigo: "Comment PLAYBOOK and I will send it to you"
```

---

## Texto do post (para publicar quando o PDF estiver pronto)

```
Most teams already have AI tools. Few work differently because of them.

I put everything I learned coaching ~15 people, from first prompt to autonomy, into a free 12-page playbook:

→ The 4-stage adoption path
→ 5 use cases across delivery: meetings, planning, building, docs, testing
→ How to run the first 30-minute coaching session
→ Guardrails, metrics and a 30-60-90 day plan

Comment PLAYBOOK and I will send you the PDF.

What is the hardest part of AI adoption in your team right now?

#AIAdoption #ProjectManagement #RemoteTeams #Leadership
```

Nota: a resposta a cada comentário (mensagem com o PDF) é manual. Se o post correr bem, podemos depois automatizar o envio.
