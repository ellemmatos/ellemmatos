# AI Adoption Playbook para Equipas de Engenharia

**Um guia prático para levar a IA à forma como equipas remotas e distribuídas planeiam, reúnem, constroem e entregam.**

Por [Ellem Matos](https://www.linkedin.com/in/ellemmatos/) · Líder de Adoção de IA e Entrega Ágil

🇬🇧 [English version](ai-adoption-playbook.md)

---

## Porque existe este playbook

A maioria das equipas já tem acesso a ferramentas de IA. Poucas *trabalham de forma diferente* por causa delas.

O problema não é a tecnologia. São hábitos, confiança, processos e segurança. Alguém tem de dar o primeiro arranque às pessoas, mostrar onde a IA ajuda no *seu* dia a dia e ficar por perto até ganharem autonomia.

Este playbook é o método que usei como Scrum Master Líder e Project Manager com equipas remotas espalhadas por várias regiões e fusos horários, na maioria a trabalhar em inglês como segunda língua. Cobre todo o ciclo de entrega: reuniões, planeamento, Jira, protótipos, código, documentação, testes e revisão.

**O que produziu na prática:**

- **~15 pessoas** (developers, Scrum Masters e Team Leads) passaram do primeiro uso para trabalhar com IA de forma autónoma
- **Reuniões dentro do tempo** e com foco, com pauta preparada por IA antes e um resumo escrito claro depois
- **Menos mal-entendidos de língua** em equipas multilingues, porque todos saíam da reunião com o mesmo resumo escrito
- **Planeamento de sprints mais rápido, previsível e escalável** entre equipas
- **5+ bases de código** existentes, em tecnologias diferentes, documentadas com apoio de IA

---

## Princípios

1. **Começar pela dor da equipa, não pela ferramenta.** Perguntar "o que te faz perder tempo todas as semanas?" antes de mostrar qualquer funcionalidade de IA.
2. **Dar o primeiro arranque e depois recuar.** A adoção acontece quando as pessoas fazem sozinhas com alguém ao lado, não numa sessão de formação.
3. **A IA faz o rascunho, as pessoas decidem.** Cada resultado da IA (resumo, tarefa, código, teste) é revisto por uma pessoa responsável.
4. **Tornar visível.** Partilhar pequenas vitórias no canal da equipa. Um exemplo real convence mais do que dez slides.
5. **Escrever as coisas.** Em equipas remotas e multilingues, um registo escrito claro vale mais do que uma reunião perfeita.
6. **Proteger os dados primeiro.** Regras claras sobre o que pode e não pode entrar numa ferramenta de IA vêm antes de escalar.

---

## O caminho da adoção: quatro etapas

| Etapa | Objetivo | O que faço | Sinal para avançar |
|---|---|---|---|
| **1. Começar** | Primeiro resultado útil | Escolher uma tarefa real por pessoa e fazê-la em conjunto com IA | A pessoa repete sozinha no dia seguinte |
| **2. Guiar** | Criar o hábito | Acompanhamentos curtos, partilhar prompts que funcionaram, corrigir o que correu mal | A IA é usada sem ser preciso lembrar |
| **3. Autonomia** | As pessoas são donas do seu uso | As pessoas aplicam IA ao seu código e à gestão das suas tarefas | As pessoas partilham as suas próprias dicas |
| **4. Escalar** | Espalhar pelas equipas | Templates padrão, biblioteca de prompts partilhada, champions por equipa | Novas equipas entram através dos champions, não através de mim |

A etapa mais importante é a primeira. A maioria das adoções falha porque ninguém se senta com a pessoa na primeira tarefa real.

---

## Onde a IA ajuda: casos de uso no ciclo de entrega

### 1. Reuniões (antes, durante, depois)

As reuniões remotas foram o primeiro sítio onde apliquei IA, porque a dor era óbvia: reuniões que passavam do tempo, perdiam o foco, e o ruído de língua fazia as pessoas saírem com entendimentos diferentes.

| Momento | O que a IA faz | Papel humano |
|---|---|---|
| **Antes** | Prepara a pauta a partir do backlog, temas em aberto e ações da última reunião | O Scrum Master ajusta prioridades e tempos |
| **Durante** | Grava e transcreve o áudio | O facilitador mantém a reunião no plano |
| **Depois** | Escreve o resumo, decisões e ações, e reescreve-o em inglês claro, humano e simples | O facilitador revê e envia à equipa |

**Porque funciona em equipas multilingues:** um resumo escrito claro no final elimina a ambiguidade do inglês falado como segunda língua. Todos agem sobre o mesmo texto.

### 2. Planeamento de sprints e Jira

- Transformar requisitos e notas de reunião em rascunhos de tarefas Jira, com descrição e critérios de aceitação
- Automatizar trabalho repetitivo no Jira (criação de tarefas, atualizações, tarefas recorrentes)
- Preparar o sprint planning: sugerir a divisão do trabalho e assinalar dependências e riscos
- Rascunhar o plano do próximo sprint a partir da velocidade, do backlog e da capacidade da equipa

A equipa continua a estimar e a comprometer-se. A IA prepara o terreno para que a reunião de planeamento seja sobre decisões, não sobre escrever.

### 3. Protótipos e implementação

Em conjunto com a equipa técnica:

- Esboçar como uma funcionalidade poderia ser implementada na *nossa* tecnologia antes de escrever código
- Construir protótipos rápidos para discutir com stakeholders
- Apoiar a própria implementação, com os developers a rever e a assumir cada linha

### 4. Documentação de código existente

Código legado sem documentação atrasa todas as equipas. Com IA:

- Passámos o código existente pela IA para explicar módulos, fluxos e dependências
- Gerámos primeiros rascunhos de documentação técnica, revistos pelos developers que conheciam o sistema
- Aplicámos isto a 5+ bases de código em tecnologias diferentes

### 5. Testes e revisão de código

- Análise de testes automatizados com apoio de IA: lacunas, casos-limite, padrões de falha
- IA como primeira revisora das alterações de código, antes da revisão humana
- Planos de teste rascunhados a partir dos requisitos e depois refinados pela equipa

---

## Acompanhar pessoas: a parte que a maioria dos playbooks esquece

As ferramentas são fáceis. As pessoas são o trabalho.

**Primeira sessão (30–45 min, uma pessoa):**
1. Perguntar: "O que te tomou mais tempo na semana passada?"
2. Escolher uma dessas tarefas e fazê-la em conjunto com IA, no trabalho real da pessoa
3. Guardar o prompt que funcionou num sítio partilhado
4. Combinar uma tarefa que a pessoa vai tentar sozinha amanhã

**Acompanhamento (10 min, alguns dias depois):**
- O que funcionou? O que correu mal? Corrigir um prompt em conjunto.

**Papéis diferentes precisam de começos diferentes:**

| Papel | Bom primeiro caso de uso |
|---|---|
| Developer | Explicar código desconhecido, rascunhar testes, primeira revisão de código |
| Scrum Master | Pauta e resumo de reuniões, preparação do sprint planning |
| Team Lead | Resumos de estado, divisão de tarefas, documentação |

**A resistência é normal.** Os motivos comuns são medo de errar, medo de ser substituído e falta de tempo. A resposta é uma pequena vitória pessoal, não argumentos.

---

## Regras de proteção

Antes de escalar, combinar regras claras e curtas:

- **Dados:** o que nunca pode entrar numa ferramenta de IA (dados de clientes, dados pessoais, credenciais, código confidencial) e quais as ferramentas aprovadas
- **Revisão:** uma pessoa identificada é responsável por cada resultado de IA que sai da equipa
- **Transparência:** dizer quando um documento ou resumo foi rascunhado por IA
- **Qualidade:** o código gerado por IA segue as mesmas regras de revisão e testes que qualquer outro código

**Contexto europeu:** com o AI Act da UE, as organizações têm de tomar medidas para garantir um nível suficiente de literacia em IA das pessoas que usam IA em seu nome (obrigação aplicável desde fevereiro de 2025). Um programa prático de adoção como este é uma das formas mais diretas de construir essa literacia no trabalho do dia a dia.

---

## Como medir a adoção

Escolher alguns indicadores e acompanhá-los desde o início. Sugestões:

| O quê | Como medir |
|---|---|
| Alcance | Número de pessoas que usam IA ativamente no trabalho semanal |
| Profundidade | Número de casos de uso por equipa (reuniões, planeamento, código, documentação, testes) |
| Saúde das reuniões | Reuniões que terminam a horas; resumos enviados no mesmo dia |
| Planeamento | Tempo gasto no sprint planning; previsibilidade dos compromissos do sprint |
| Conhecimento | Módulos ou sistemas com documentação atualizada |
| Perceção | Uma pergunta mensal curta: "A IA poupa-te tempo? Onde?" |

Medir antes de começar, mesmo de forma aproximada. Sem ponto de partida, não é possível mostrar a mudança.

---

## Plano de 30-60-90 dias

**Dias 1–30: Começar**
- [ ] Combinar as regras de proteção e as ferramentas aprovadas
- [ ] Mapear o que mais faz cada equipa perder tempo
- [ ] Introduzir IA num ritual por equipa (normalmente as reuniões)
- [ ] Sessões de arranque com 3–5 pessoas pioneiras

**Dias 31–60: Guiar**
- [ ] Alargar ao sprint planning e ao Jira
- [ ] Construir uma biblioteca de prompts partilhada com o que funcionou de verdade
- [ ] Acompanhamentos curtos com cada pessoa que usa IA
- [ ] Partilhar pequenas vitórias todas as semanas no canal da equipa

**Dias 61–90: Escalar**
- [ ] Levar a IA ao ciclo de desenvolvimento: documentação, testes, revisão de código
- [ ] Nomear um champion de IA por equipa
- [ ] Rever os indicadores e ajustar
- [ ] Integrar novas equipas através dos champions

---

## Templates

### Pauta de reunião (antes)

```
Estás a ajudar-me a preparar uma [daily / refinement / sprint review / retro] para uma equipa remota.
Contexto: [colar itens do backlog, temas em aberto, ações da última reunião]
Cria uma pauta focada, com tempos, para uma reunião de [30] minutos.
Lista as decisões que precisamos de tomar. Mantém curto e em linguagem simples.
```

### Resumo de reunião (depois)

```
Aqui está a transcrição da nossa reunião: [transcrição]
Escreve um resumo para uma equipa multilingue, em linguagem clara e simples:
1. Decisões tomadas
2. Ações (responsável + prazo)
3. Questões em aberto
Evita jargão e expressões idiomáticas. Usa frases curtas.
```

### Tarefas Jira a partir de requisitos

```
A partir do requisito abaixo, cria tarefas Jira.
Para cada tarefa: título, descrição curta, critérios de aceitação e dependências.
Assinala o que não estiver claro como pergunta, em vez de adivinhar.
Requisito: [texto]
```

### Documentar código existente

```
Explica este código para um developer que nunca o viu:
1. O que faz (em palavras simples)
2. Principais fluxos e dependências
3. Riscos ou partes pouco claras que devemos confirmar com a equipa
Código: [código]
```

---

## Erros a evitar

- **Começar pela ferramenta:** comprar licenças e enviar um link. A adoção fica perto de zero.
- **Uma grande sessão de formação:** as pessoas esquecem até ao sprint seguinte. Apoio curto, repetido e prático funciona.
- **Sem regras de proteção:** um único incidente com dados pode parar todo o programa.
- **Resultados de IA sem revisão:** a confiança cai na primeira vez que um resumo ou tarefa errada chega a um cliente.
- **Sem ponto de partida:** sem medir antes, o impacto passa a ser uma opinião.

---

## Sobre mim

Comecei na eletrónica, liderei equipas técnicas no Exército Brasileiro, fui developer .NET e SharePoint durante anos e tornei-me Scrum Master Líder e Project Manager na Capgemini, onde introduzi o Scrum de raiz e o escalei para mais de 22 equipas.

Hoje ajudo equipas de engenharia remotas e distribuídas a trabalhar com IA, do planeamento ao código.

[LinkedIn](https://www.linkedin.com/in/ellemmatos/) · [GitHub](https://github.com/ellemmatos) · Disponível para funções 100% remotas

---

<sub>Este playbook reflete a minha prática. Feedback e perguntas são bem-vindos no LinkedIn.</sub>
