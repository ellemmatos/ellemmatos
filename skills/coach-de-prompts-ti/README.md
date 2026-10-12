# 🎯 Coach de Prompts para Gestores de TI

Uma [skill](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) para o Claude que ajuda **gestores de times de desenvolvimento** (Tech Leads, Engineering Managers, Scrum Masters, Heads de TI) a conversar melhor com IA.

Ela não só reescreve o seu prompt: ela **explica por que** a nova versão funciona melhor, para que você aprenda a escrever bons prompts sozinho.

## O que ela faz

| Modo | O que você recebe |
| --- | --- |
| 🩺 **Diagnóstico** | Nota de 1 a 5 em seis critérios (objetivo, contexto, papel e público, dados e restrições, formato, critério de qualidade) e um **alerta de dados sensíveis** quando o prompt expõe pessoas, clientes ou código |
| ✍️ **Aprimoramento** | Versão melhorada pronta para copiar, com **o que mudou e por quê** e uma dica para levar |
| 📚 **Modelos prontos** | 8 prompts para o dia a dia de gestão de TI: sprint planning, 1:1, feedback SBI, post-mortem, política de code review, estimativas, comunicação com stakeholders e métricas DORA |
| 🗂️ **Histórico** | Versionamento dos prompts do time em Markdown, para não perder o que funcionou |

## Antes e depois

**Prompt original:**

```
faz um feedback pro João que ele tá atrasando as tasks e não participa das dailies, quero que ele melhore
```

**Diagnóstico — Nota geral: 1,7 / 5**

| Critério | Nota | O que observei |
| --- | --- | --- |
| Objetivo | 3/5 | A tarefa está clara (um feedback), mas "quero que ele melhore" não diz o que seria melhorar |
| Contexto | 2/5 | Não diz há quanto tempo isso acontece nem se já houve conversa antes |
| Papel e público | 1/5 | A IA não sabe se é para escrever um texto ou preparar você para falar |
| Dados e restrições | 2/5 | Há dois comportamentos, mas sem fatos concretos (quais tasks, quanto atraso) |
| Formato da resposta | 1/5 | Nada sobre formato ou tamanho |
| Critério de qualidade | 1/5 | Nenhum pedido de revisão ou exemplo |

**⚠️ Alerta de dados sensíveis:** o nome real do liderado aparece junto com uma avaliação de desempenho. Use "Dev A" — a IA não precisa saber quem é para ajudar.

**Versão aprimorada — nota estimada 4,5 / 5:**

```
Atue como um coach de liderança. Me ajude a preparar um feedback de melhoria, usando o modelo SBI (Situação, Comportamento, Impacto), para falar pessoalmente com o Dev A, [cargo e senioridade].

Situação: nas últimas [nº] sprints, [ex.: 3 de 5 tasks dele passaram do prazo]. Ele também [ex.: ficou com a câmera desligada e sem falar em 4 das 10 últimas dailies].
Impacto: [ex.: o time só descobre os bloqueios no fim da sprint e a meta ficou em risco].
O que já foi feito: [ex.: nenhuma conversa ainda / comentei rapidamente há um mês].
O que espero: que ele sinalize atrasos e bloqueios na daily assim que acontecerem.

Entregue:
1. O feedback em até 6 frases, pronto para falar.
2. Uma pergunta aberta para entender o lado dele depois do feedback.
3. Como reagir se ele ficar na defensiva.

Aponte se alguma parte do que escrevi está como julgamento em vez de fato.
```

**O que mudou e por quê:**

1. **Papel de coach + modelo SBI** — dá à IA uma estrutura reconhecida de feedback, em vez de um texto genérico de "cobrança".
2. **Fatos no lugar de rótulos** — "atrasando as tasks" virou números. Feedback com fatos é mais difícil de contestar e mais justo.
3. **"Melhorar" virou um comportamento esperado** — a pessoa sai da conversa sabendo exatamente o que fazer diferente.
4. **Pergunta aberta e plano para a defensiva** — feedback é conversa, não discurso. Você chega preparado para os dois lados.
5. **Pedido para apontar julgamentos** — faz a IA revisar o seu viés, que é onde a maioria dos feedbacks dá errado.

💡 **Dica para levar:** antes de pedir à IA, troque cada adjetivo ("atrasado", "desengajado") por um fato que você viu. O prompt melhora, e o feedback também.

## Como usar

**No Claude.ai:** baixe o arquivo [`coach-de-prompts-ti.skill`](../coach-de-prompts-ti.skill) e envie em *Settings → Capabilities → Skills*.

**No Claude Code:** copie esta pasta para `~/.claude/skills/coach-de-prompts-ti/`.

Depois é só conversar normalmente:

- *"Avalia esse prompt que eu uso pra gerar o status report semanal: ..."*
- *"Tenho uma 1:1 difícil amanhã com um dev sênior que quer sair do time. Me dá um prompt pra preparar."*
- *"Salva essa versão do prompt de planning no histórico."*

## Estrutura

```
coach-de-prompts-ti/
├── SKILL.md                    # instruções principais e os 4 modos
├── references/
│   ├── criterios.md            # rubrica dos 6 critérios de avaliação
│   └── modelos.md              # 8 modelos de prompts para gestores de TI
└── assets/
    └── historico-modelo.md     # modelo de arquivo para versionar prompts
```

---

Criada por [Ellem Matos](https://www.linkedin.com/in/ellemmatos/), AI Adoption & Agile Delivery Lead.
