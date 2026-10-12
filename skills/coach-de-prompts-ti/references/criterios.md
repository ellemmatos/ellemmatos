# Critérios de avaliação de prompts

Seis critérios, cada um com nota de 1 a 5. As descrições mostram como é um prompt nota 1, 3 e 5; notas 2 e 4 ficam entre elas.

## 1. Objetivo
O que a pessoa quer que a IA faça, e para quê.

- **1** — Vago ou ausente ("me ajuda com a sprint").
- **3** — A tarefa está clara, mas não o propósito ("crie uma pauta de 1:1").
- **5** — Tarefa e propósito claros ("crie uma pauta de 1:1 para entender por que a entrega do Dev A caiu nas últimas duas sprints, sem que a conversa pareça uma cobrança").

## 2. Contexto
O que a IA precisa saber sobre a situação para não dar uma resposta genérica.

- **1** — Nenhum contexto.
- **3** — Algum contexto, mas faltam peças que mudariam a resposta (tamanho do time, momento do projeto, histórico).
- **5** — A IA conseguiria responder como alguém que conhece o time: tamanho, metodologia, stack quando relevante, o que já foi tentado.

## 3. Papel e público
Quem a IA deve ser e para quem a resposta é.

- **1** — Nem papel nem público.
- **3** — Um dos dois.
- **5** — Os dois, e coerentes ("atue como um Engineering Manager experiente; o texto vai para o diretor de produto, que não é técnico").

## 4. Dados e restrições
As informações concretas e os limites da resposta.

- **1** — Pede análise sem dar os dados, ou não diz nenhum limite.
- **3** — Dá parte dos dados ou cita restrições genéricas.
- **5** — Dados relevantes incluídos (ou indicados como anexo) e limites claros: prazo, tamanho, o que não fazer, tom.

## 5. Formato da resposta
Como a resposta deve vir.

- **1** — Nada sobre formato.
- **3** — Formato genérico ("em tópicos").
- **5** — Formato que serve ao uso real ("tabela com tarefa, responsável e prazo, para eu colar no Jira"; "e-mail de no máximo 150 palavras").

## 6. Critério de qualidade
Como saber se a resposta ficou boa: exemplos, pedido de perguntas, verificação.

- **1** — Nenhum.
- **3** — Pede algo como "seja detalhado".
- **5** — Dá um exemplo do resultado esperado, pede que a IA pergunte o que faltar antes de responder, ou pede que ela aponte riscos e premissas.

---

## Observações

- **Proporcionalidade:** para tarefas simples, nota 3 em vários critérios pode ser suficiente. Diga isso na avaliação em vez de empurrar a pessoa a escrever um prompt enorme sem necessidade.
- **Dados sensíveis não entram na nota**, mas geram o alerta separado descrito no SKILL.md.
