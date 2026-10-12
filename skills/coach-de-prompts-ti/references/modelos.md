# Modelos de prompts para gestores de desenvolvimento

Cada modelo traz: quando usar, o prompt com campos `[entre colchetes]` e uma dica de uso. Preencha os campos com o que a pessoa já informou e deixe em colchetes apenas o que falta.

## Sumário
1. Sprint planning
2. Reunião 1:1
3. Feedback (modelo SBI)
4. Post-mortem de incidente
5. Política de code review
6. Estimativas e refinamento
7. Comunicação com stakeholders
8. Análise de métricas DORA

---

## 1. Sprint planning

**Quando usar:** antes da planning, para chegar com uma proposta de meta e de escopo.

```
Atue como um Scrum Master experiente ajudando a preparar a sprint planning.

Contexto do time:
- Time de [nº] desenvolvedores, sprint de [duração], stack [tecnologias].
- Capacidade desta sprint: [dias disponíveis / ausências conhecidas].
- Velocidade média das últimas 3 sprints: [pontos ou nº de itens].
- Objetivo do produto neste trimestre: [objetivo].

Backlog priorizado (do mais para o menos importante):
[lista de itens com estimativa]

O que preciso:
1. Uma proposta de meta da sprint em uma frase, ligada ao objetivo do trimestre.
2. Os itens que cabem na capacidade, com uma margem de [10–20]% para imprevistos.
3. Dependências e riscos que podem travar a sprint.
4. Perguntas que devo levar para o Product Owner antes da planning.

Formato: tabela com item, estimativa, motivo de entrar ou ficar de fora; depois os riscos e as perguntas em tópicos.
Se faltar alguma informação essencial, pergunte antes de responder.
```

**Dica:** a IA propõe, o time decide. Leve como ponto de partida, não como plano fechado.

---

## 2. Reunião 1:1

**Quando usar:** para preparar uma 1:1, principalmente as que têm um tema delicado.

```
Atue como um Engineering Manager experiente em desenvolvimento de pessoas.

Vou fazer uma 1:1 de [duração] com [Dev A — cargo e senioridade], que está no time há [tempo].
Contexto: [o que tem acontecido — ex.: entregas atrasando nas últimas sprints, menos participação nas dailies].
O que já sei: [fatos observados, sem interpretação].
O que não sei: [ex.: se há algo pessoal ou de motivação].
Meu objetivo com a conversa: [ex.: entender a causa e combinar um próximo passo, sem soar como cobrança].

Crie:
1. Uma pauta com tempos para cada parte.
2. 5 perguntas abertas, da mais leve para a mais direta.
3. Frases que devo evitar e por quê.
4. Como encerrar com um combinado claro.

Tom: acolhedor e direto.
```

**Dica:** use "Dev A" em vez do nome real. A IA não precisa saber quem é para ajudar.

---

## 3. Feedback (modelo SBI)

**Quando usar:** para estruturar um feedback, positivo ou de melhoria.

```
Atue como um coach de liderança. Me ajude a estruturar um feedback usando o modelo SBI (Situação, Comportamento, Impacto).

Para: [Dev A — cargo]
Tipo: [reconhecimento / melhoria]
Situação: [quando e onde aconteceu]
Comportamento observado: [o que a pessoa fez ou disse, de forma factual]
Impacto: [efeito no time, no produto ou no cliente]
O que espero daqui para frente: [comportamento desejado]

Entregue:
1. O feedback em até 6 frases, pronto para falar.
2. Uma pergunta para abrir o diálogo depois do feedback.
3. Como reagir se a pessoa discordar ou ficar na defensiva.

Aponte se alguma parte do que escrevi está como julgamento em vez de fato.
```

**Dica:** o último pedido ("aponte julgamentos") é o que mais melhora o feedback.

---

## 4. Post-mortem de incidente

**Quando usar:** depois de um incidente em produção, para conduzir uma análise sem culpados.

```
Atue como um engenheiro de confiabilidade (SRE) facilitando um post-mortem sem culpados (blameless).

Incidente: [o que aconteceu, em 2–3 frases]
Linha do tempo: [horário — evento, do alerta à resolução]
Impacto: [usuários afetados, duração, perdas]
Causa aparente: [o que se sabe até agora]
O que funcionou bem na resposta: [ex.: alerta disparou rápido]

Produza um documento de post-mortem com:
1. Resumo executivo (3 frases, para a liderança).
2. Linha do tempo organizada.
3. Análise de causa raiz usando os 5 porquês.
4. Fatores que contribuíram (processo, ferramenta, comunicação) — sem atribuir culpa a pessoas.
5. Ações corretivas em tabela: ação, tipo (prevenir / detectar / mitigar), responsável [a definir], prazo sugerido.

Se a linha do tempo tiver lacunas, liste as perguntas que o time precisa responder.
```

**Dica:** retire nomes de clientes, IPs e detalhes de vulnerabilidade antes de colar.

---

## 5. Política de code review

**Quando usar:** para criar ou revisar o acordo de code review do time.

```
Atue como um Tech Lead experiente em qualidade de código e times remotos.

Contexto: time de [nº] devs, [fuso(s) horário(s)], stack [tecnologias], ferramenta [GitHub / GitLab / Azure DevOps].
Problemas atuais: [ex.: PRs esperam 2 dias por revisão, comentários pouco claros, PRs muito grandes].
Uso de IA no review: [ex.: usamos / queremos usar revisão automática com IA].

Escreva uma política de code review de no máximo 1 página com:
1. Tamanho ideal de PR e o que fazer quando não der.
2. Prazo esperado para a primeira revisão.
3. O que o revisor deve olhar e o que deixar para ferramentas automáticas (incluindo IA).
4. Como escrever comentários (ex.: prefixos como "nit:", "bloqueante:").
5. Quando um PR pode ser aprovado com 1 revisor e quando precisa de 2.

Tom: acordo do time, não regra imposta. Termine com 3 métricas para acompanhar se a política está funcionando.
```

**Dica:** apresente o resultado ao time como rascunho e ajuste junto. Política imposta não pega.

---

## 6. Estimativas e refinamento

**Quando usar:** para preparar o refinamento de uma história ou questionar uma estimativa.

```
Atue como um desenvolvedor sênior e um Product Owner ao mesmo tempo, revisando uma história antes do refinamento.

História: [texto da história]
Critérios de aceite: [lista, se houver]
Contexto técnico: [sistemas afetados, integrações, legado]
Estimativa atual do time: [pontos ou dias, se já existir]

Faça:
1. Liste as dúvidas que o time vai levantar no refinamento.
2. Aponte riscos técnicos e dependências escondidas.
3. Sugira como quebrar a história em partes menores que entreguem valor sozinhas.
4. Diga se a estimativa atual parece otimista, realista ou pessimista, e por quê.

Não crie uma estimativa nova: a estimativa é do time. Seu papel é deixar a conversa mais rápida e melhor.
```

**Dica:** a última frase evita que a IA "substitua" o time — e mantém a estimativa como compromisso de quem vai fazer.

---

## 7. Comunicação com stakeholders

**Quando usar:** para dar uma notícia de status, atraso ou risco para quem não é técnico.

```
Atue como um gerente de projetos experiente em comunicação com executivos.

Preciso comunicar: [ex.: atraso de 2 semanas na entrega do módulo de pagamentos].
Para: [cargo do público — ex.: diretora comercial, não técnica].
Causa: [explicação técnica, como eu daria para o time].
O que já estamos fazendo: [ações].
O que preciso dela: [ex.: decisão entre reduzir escopo ou aceitar a nova data].
Canal: [e-mail / mensagem no Teams / slide].

Escreva a mensagem:
- Em até [150] palavras.
- Começando pelo que muda para ela, não pela causa técnica.
- Traduzindo a causa técnica para impacto de negócio.
- Com as opções e a decisão necessária bem claras, com prazo para resposta.

Depois, liste 3 perguntas que ela provavelmente vai fazer e respostas curtas para cada uma.
```

**Dica:** pedir as perguntas prováveis prepara você para a reunião que vem depois do e-mail.

---

## 8. Análise de métricas DORA

**Quando usar:** para interpretar as métricas de entrega do time e decidir onde agir.

```
Atue como um consultor de engenharia de software especializado em métricas DORA.

Métricas do time nos últimos [período]:
- Frequência de deploy: [valor]
- Lead time para mudanças: [valor]
- Taxa de falha em mudanças: [valor]
- Tempo para restaurar o serviço: [valor]
Período anterior, para comparação: [valores, se tiver]
Contexto: [ex.: migramos para microsserviços no último trimestre; time cresceu de 5 para 8].

Analise:
1. Em que faixa de desempenho o time está em cada métrica (baixa, média, alta, elite) e o que isso significa na prática.
2. O que melhorou ou piorou e as hipóteses mais prováveis, considerando o contexto.
3. A métrica que, se melhorada, traria mais benefício agora — e por quê.
4. 3 ações concretas para os próximos 30 dias, com como medir o efeito.

Diferencie o que é conclusão dos dados do que é hipótese. Não compare o time com outros times nem use as métricas para avaliar pessoas.
```

**Dica:** métricas DORA medem o sistema de entrega, não as pessoas. A última frase do prompt protege isso.
