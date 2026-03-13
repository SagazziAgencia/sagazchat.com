# Guia Completo de Funcionalidades — Sagazchat

> Manual técnico e prático completo da plataforma Sagazchat, contendo todas as diretrizes, regras de uso e especificações de cada funcionalidade.

---

## Sumário

- [Visão Geral do Sistema](#visão-geral-do-sistema)
- **PARTE 1 — PAINEL E ATENDIMENTO**
  - [1.1 Dashboard](#11-dashboard-painel-principal)
  - [1.2 Bate-Papo ao Vivo](#12-bate-papo-ao-vivo)
  - [1.3 Kanban (CRM Visual)](#13-kanban-crm-visual)
- **PARTE 2 — INTELIGÊNCIA ARTIFICIAL**
  - [2.1 Visão Geral da IA](#21-atendimento-ia---visão-geral)
  - [2.2 Gerenciamento de Agentes (Persona)](#22-gerenciamento-e-criação-da-persona)
  - [2.3 Base de Conhecimento](#23-treinamento-da-base-de-conhecimento)
  - [2.4 Tokens](#24-entendendo-os-tokens)
  - [2.5 Contexto, Memória e Segurança](#25-contexto-memória-e-segurança)
  - [2.6 Limitações Técnicas](#26-limitações-técnicas)
  - [2.7 Integração com Fluxos](#27-como-colocar-a-ia-para-trabalhar)
- **PARTE 3 — FLUXOS DE CONVERSA**
  - [3.1 Gestão e Organização (Módulo 1)](#31-módulo-1-gestão-e-organização)
  - [3.2 Blocos Básicos (Módulo 2)](#32-módulo-2-blocos-básicos)
  - [3.3 Integrações e Lógica Avançada (Módulo 3)](#33-módulo-3-integrações-e-lógica-avançada)
  - [3.4 Ferramentas Especiais e IA (Módulo 4)](#34-módulo-4-ferramentas-especiais-e-ia)
- **PARTE 4 — AUTOMAÇÃO**
  - [4.1 Campanhas](#41-campanhas)
  - [4.2 Remarketing](#42-remarketing)
  - [4.3 Webhooks](#43-webhooks)
  - [4.4 Agenda](#44-agenda)
  - [4.5 n8n](#45-n8n)
- **PARTE 5 — COMUNICAÇÃO EM MASSA**
  - [5.1 Transmissões](#51-transmissões)
  - [5.2 Gerente de Grupo](#52-gerente-de-grupo)
- **PARTE 6 — CONFIGURAÇÕES**
  - [6.1 Conexão](#61-conexão)
  - [6.2 Fluxos Padrão](#62-fluxos-padrão)
  - [6.3 Departamentos](#63-departamentos)
  - [6.4 Respostas Rápidas](#64-respostas-rápidas)
  - [6.5 Campos Personalizados](#65-campos-personalizados)
  - [6.6 Equipe](#66-equipe)
  - [6.7 Audiência (Base de Contatos)](#67-audiência-base-de-contatos)

---

## Visão Geral do Sistema

O Sagazchat é uma plataforma completa de gestão de atendimento omnichannel, focada em centralizar comunicações e automatizar processos de vendas e suporte.

### Principais Capacidades

| Categoria | Funcionalidades |
|-----------|----------------|
| **Atendimento** | Chat ao vivo, multi-atendente, multi-WhatsApp, departamentos |
| **Automação** | Fluxos visuais (no-code), campanhas por palavra-chave, remarketing |
| **Inteligência Artificial** | Agentes IA com personalidade, base de conhecimento, transcrição de áudio |
| **CRM** | Kanban visual, etiquetas, campos personalizados, funil de vendas |
| **Integrações** | Webhooks, n8n (200+ apps), API HTTP, Facebook Pixel (CAPI) |
| **Comunicação em Massa** | Transmissões (broadcast), gerente de grupos, agendamento |
| **Agenda** | Agendamento automático no WhatsApp, múltiplas agendas, lembretes |

---

# PARTE 1 — PAINEL E ATENDIMENTO

---

## 1.1 Dashboard (Painel Principal)

O Dashboard é o centro de inteligência e monitoramento da conta.

### Recursos do Dashboard

- **Estatísticas por Período:** Permite acompanhar a quantidade de conversas realizadas num intervalo de datas selecionado.
- **Gráfico de Conversas por Horário:** Uma linha do tempo visual que identifica os picos de atendimento.

### Métricas de Desempenho

- **Total de Atendimentos:** Soma de todos os contactos realizados no período.
- **Leads Recebidos:** Volume total de novos leads captados.
- **Gestão da Conta:** Exibição clara da data de vencimento do plano e resumo de interações por inscrito.

---

## 1.2 Bate-Papo ao Vivo

Esta seção permite que os atendentes gerenciem conversas em tempo real com leads e clientes.

### Abas de Atendimento

| Aba | Descrição |
|-----|-----------|
| **Atendendo** | Conversas em andamento |
| **Aguardando** | Leads ainda não atendidos (Fila de espera) |
| **Resolvidos** | Conversas finalizadas |

### Gestão de Atendimentos

- **Criar:** Iniciar novos atendimentos manualmente.
- **Encerrar/Resolver:** Finalizar atendimentos concluídos.
- **Transferir:** Enviar conversas entre atendentes ou departamentos.

### Ferramentas de Organização

- **Etiquetas:** Adicionar e remover para segmentar e categorizar.
- **Pesquisa:** Localizar conversas com facilidade.
- **Filtros:** Filtrar atendimentos por Etiquetas, Usuários, Departamentos (ex: Suporte, Vendas) ou WhatsApps conectados.

### Interação no Atendimento

- Envio de mensagens com texto, emojis e mídia.
- Envio de áudios (gravados na hora).
- Agendamento de mensagens: Programar envio futuro.
- Assinatura automática: Identificação do atendente.

### Respostas Rápidas (Atalhos)

Envio ágil de texto, mídia (áudio/imagem/vídeo) ou disparo de Fluxos completos.

Ao digitar o atalho (ex: `/venda`), o atendente pode acionar um robô inteiro que assume a conversa, automatizando processos complexos manualmente.

### Chat Interno

- Comunicação entre atendentes dentro do ticket (invisível ao cliente).
- Informações visuais de quem está atendendo no momento.

### Gestão de Leads (Lateral Direita)

- Editar dados do lead (nome, telefone, e-mail).
- Ver dados adicionais (data de criação, remarketing).
- Enviar fluxo manual.
- Inscrever ou consultar remarketing.

### Campos Personalizados (Variáveis)

Visualização de todos os dados extras coletados durante a automação.

- Informações salvas pelo Bloco Salvar, cálculos do Bloco Manipulador ou dados recebidos via Webhook aparecem aqui.
- O atendente pode consultar e editar esses valores manualmente (ex: corrigir um endereço, verificar saldo, ver status do pedido vindo do CRM).

---

## 1.3 Kanban (CRM Visual)

O Kanban organiza os leads em colunas baseadas em etiquetas, permitindo gestão visual do funil de vendas.

### Visão Geral e Números

No topo de cada coluna são exibidos:

- **Quantidade de Cards:** Número de pessoas naquela etapa.
- **Valor Total:** Soma dos valores monetários atribuídos aos leads daquela coluna.

### Funcionalidades do Card

- **Adicionar Valor:** É possível atribuir um valor financeiro ($) diretamente no card do lead.
- **Acesso Rápido:** Clicar no card abre diretamente a conversa no Bate-papo.

### Regras de Automação (Etiquetas)

| Regra | Descrição |
|-------|-----------|
| **Vínculo** | Se uma coluna for criada e vinculada a uma etiqueta, as pessoas que receberem essa etiqueta depois da criação irão automaticamente para a coluna. |
| **Função Cartão** | Se a pessoa já tinha a etiqueta antes da coluna existir, utiliza-se a função cartão para "puxar" esses leads antigos para a coluna. |
| **Exclusividade** | Uma mesma pessoa não pode estar em 2 colunas ao mesmo tempo. |
| **Regra da Última Etiqueta** | A pessoa sempre vai para a coluna da última etiqueta adicionada. |

**Exemplo:** Se tiver 100 pessoas com a etiqueta A (Coluna 1) e 50 dessas receberem a etiqueta B (Coluna 2), elas sairão da Coluna 1 e irão para a Coluna 2.

---

# PARTE 2 — INTELIGÊNCIA ARTIFICIAL

---

## 2.1 Atendimento IA - Visão Geral

Esta é a área onde você cria e treina os seus "Agentes Digitais". Diferente de um fluxo de conversa comum (que segue setas fixas), a IA entende o contexto, interpreta a intenção do cliente e formula respostas naturais baseadas nas informações que você cadastrou.

---

## 2.2 Gerenciamento e Criação da Persona

Aqui você define a "alma" do seu robô. Quanto mais detalhada for a configuração, mais humano ele parecerá.

### Configurações da Persona

- **Gerenciar Agentes:** Você pode ter múltiplos agentes com personalidades diferentes (ex: "Ana do Suporte" que é calma e técnica, e "Beto das Vendas" que é persuasivo e energético).

### Identidade do Agente (Quem ele é)

| Campo | Descrição |
|-------|-----------|
| **Nome do Agente** | Como ele se apresentará |
| **Nome da Empresa** | Para quem ele trabalha |
| **Linguagem/Tom de Voz** | Você define se ele deve ser formal, informal, usar gírias ou ser extremamente técnico |
| **Variáveis Chave** | Defina informações fixas como nicho de mercado e quantidade de números conectados |

---

## 2.3 Treinamento da Base de Conhecimento

O sucesso da IA depende 100% da qualidade das informações que você insere aqui.

### O Segredo do Texto Estruturado

A IA não adivinha. Ela lê. Se você jogar um texto bagunçado, ela ficará confusa.

**Como fazer:** Separe tudo por tópicos claros.

> **Exemplo BOM:**
> `[PREÇOS] O plano mensal custa R$99. O plano anual custa R$990. [HORÁRIO] Atendemos de seg a sex, das 9h às 18h.`

> **Exemplo RUIM:**
> `"Nosso preço é 99 reais e atendemos ate as 18h mas no anual tem desconto."` (Isso confunde a IA).

### O que incluir no treinamento

- Detalhes completos dos produtos/serviços.
- Política de reembolso e trocas.
- História da empresa (para gerar autoridade).
- Objeções comuns (ex: "Se o cliente achar caro, explique que o benefício X compensa o investimento").

---

## 2.4 Entendendo os Tokens

A IA não funciona de graça; ela consome processamento. No Sagazchat, medimos isso em "Tokens".

### O que é um Token?

Pense no token como sílabas ou pedaços de palavras. A cada pergunta e resposta, tokens são gastos.

### Como é calculado o gasto

| Tipo | Descrição |
|------|-----------|
| **Entrada (Input)** | Quando o cliente manda um "Oi", a IA lê esse "Oi" + TODA a base de conhecimento que você cadastrou para entender o contexto. Por isso, bases de conhecimento gigantescas gastam mais tokens a cada mensagem recebida. |
| **Saída (Output)** | É a resposta que a IA escreve para o cliente. |

> **Regra de Ouro:** Seja objetivo no treinamento. Encher a base de conhecimento com texto inútil fará seu saldo de tokens acabar mais rápido sem necessidade.

**Renovação:** Os tokens não acumulam. Todo dia 01, o saldo zera e renova conforme o seu plano contratado.

---

## 2.5 Contexto, Memória e Segurança

A IA do Sagazchat é projetada para conversas longas e complexas.

### Janela de Contexto Gigante

- A IA tem uma memória de curto prazo muito potente. Se o cliente disse o nome dele no início da conversa e, 50 mensagens depois, perguntar "qual é o meu nome?", a IA vai lembrar.
- Ela consegue manter a coerência do assunto, lembrando de preços negociados anteriormente na mesma conversa.

### Isolamento de Conversas (Privacidade Absoluta)

Muitos clientes têm medo de que a IA "vaze" dados.

**Como funciona:** Cada conversa é um universo paralelo. O que a IA conversa com o Cliente João nunca, jamais será acessado ou mencionado na conversa com a Cliente Maria. Não existe aprendizado cruzado entre atendimentos. Seus dados e segredos comerciais estão seguros dentro de cada chat individual.

---

## 2.6 Limitações Técnicas

É vital entender as barreiras para não prometer o impossível.

| Limitação | Descrição | Solução |
|-----------|-----------|---------|
| **Cegueira Visual** | A IA processa texto. Ela não "vê" imagens, não "assiste" vídeos e não interpreta figurinhas. Se o cliente mandar um print de um erro, a IA não saberá o que está escrito no print a menos que o cliente descreva. | Instrua a IA no treinamento a dizer: "Não consigo ver imagens, pode me descrever o que está acontecendo?". |
| **Mudez Visual** | A IA não consegue enviar imagens ou vídeos da galeria por conta própria. Ela só escreve. | No treinamento, coloque links. Ex: "Se o cliente pedir foto do produto, envie este link: <https://drive.google.com/foto-produto>". |
| **Áudio Inteligente (Transcrição)** | Embora a IA leia texto, ela tem um "ouvido" digital. Se a configuração de Transcrever Áudio estiver ativa, quando o cliente manda um áudio de 2 minutos explicando um problema, o sistema converte isso para texto instantaneamente, a IA lê e responde (em texto) com a solução perfeita. | Ative a transcrição nas configurações. |

---

## 2.7 Como Colocar a IA para Trabalhar

Criar o agente na tela de IA não faz ele começar a atender sozinho. Você precisa conectá-lo ao WhatsApp através dos Fluxos de Conversa.

### Passo a Passo

1. Crie e treine o agente no menu **Atendimento (IA)**.
2. Vá para o menu **Fluxos de Conversa**.
3. Crie um fluxo (ex: "Fluxo de Boas-vindas").
4. Adicione um **Bloco Menu** para filtrar o cliente (ex: "Opção 1: Falar com IA").
5. Conecte a Opção 1 ao bloco **Assistente IA**.
6. Dentro do bloco, selecione o agente que você criou (ex: "Agente Vendas").

**Resultado:** A partir desse momento, o fluxo "para" e a Inteligência Artificial assume o controle total da conversa, respondendo dúvidas e negociando até que o cliente peça um humano ou finalize a compra.

---

# PARTE 3 — FLUXOS DE CONVERSA

> Esta seção detalha o funcionamento completo dos fluxos, dividida em módulos de aprendizado.

---

## 3.1 Módulo 1: Gestão e Organização

A funcionalidade de Fluxo de Conversa permite a criação, organização e gestão de todos os fluxos antes da construção interna. É a área inicial de estruturação.

### Gestão de Fluxos

- **Criar:** Novos fluxos/chatbots.
- **Editar:** Nome do fluxo e estrutura do fluxo.
- **Duplicar:** Fluxos existentes.
- **Excluir:** Definitivamente (sem possibilidade de recuperação).

### Organização

- **Criar pastas:** Para organização de fluxos.
- **Mover:** Fluxos entre pastas (arrastando).

### Integrações

- **Importar:** Fluxos de outras contas com código válido.
- **Copiar código:** Do fluxo para exportação.

### Observações Importantes

- Após a exclusão, o fluxo não pode ser recuperado.
- O código de fluxo só pode ser importado enquanto o fluxo original ainda existir. Depois de importado na conta, não precisa se preocupar com o original.
- Etiquetas e departamentos criados dentro de um fluxo importado serão criados também na conta.
- **Remarketing:** Condições baseadas em campos personalizados exigem religamento manual ao importar/copiar fluxos.

### Segurança e Limites

- A IA não pode excluir ou mover fluxos diretamente.
- Nunca prometa integração automática entre contas sem que haja configuração do código de importação.

---

## 3.2 Módulo 2: Blocos Básicos

A construção interna permite criar blocos lógicos que automatizam o atendimento ao cliente. Cada elemento do fluxo executa uma função específica e pode ser conectado com outros para criar caminhos variados de resposta.

### 3.2.1 Bloco Início

Este é o gatilho inicial. Nenhuma automação começa sem ele.

- **O que faz:** Marca o ponto de partida do fluxo. Todo o robô começa a "ler" a partir daqui.

> **Regra de Ouro:** O Bloco Início precisa estar conectado (linha ligada) ao primeiro bloco de ação (geralmente um bloco de Conteúdo ou Menu). Se estiver solto no quadro, o fluxo não funcionará, mesmo que esteja salvo.

### 3.2.2 Bloco Conteúdo

A base da comunicação. É onde você escreve e envia mídias.

**O que envia:**

| Tipo | Detalhes |
|------|----------|
| **Texto** | Mensagens escritas (use emojis para humanizar) |
| **Imagens** | .jpg, .png |
| **Vídeos** | .mp4 até 20mb |
| **Áudios** | Simula gravação |
| **Documentos** | PDFs |
| **Contatos** | VCard |
| **Delay (Atraso)** | Pequenas pausas dentro do bloco para simular digitação natural |

**Estratégia de Fragmentação (Anti-Textão):**
Evite colocar um texto de 50 linhas em um único balão. Isso cansa a leitura.

- **Como fazer:** Use múltiplos itens de texto dentro do mesmo bloco ou separe em vários blocos de conteúdo para que o cliente receba várias mensagens curtas ("Bom dia!" ... pausa ... "Tudo bem?").
- **Legendas:** Ao enviar imagens ou vídeos, você pode adicionar uma legenda que vai "grudada" na mídia.

### 3.2.3 Bloco Menu

A principal ferramenta de navegação e decisão do usuário.

**Tipos de Menu (Formatos):**

| Formato | Descrição | Limite |
|---------|-----------|--------|
| **Botões (Quick Reply)** | Botões clicáveis. Ideal para decisões rápidas (Sim/Não). | Máximo 3 opções |
| **Lista (List Message)** | Abre um menu vertical. Ideal para catálogos ou departamentos. Exige Título da Lista e Nome do Botão para funcionar. | Até 10 opções |
| **Numérico** | O cliente digita "1", "2", "3". É o mais compatível com versões antigas do WhatsApp. | Sem limite definido |

**Funcionalidade de Inatividade (Repescagem):**
Muitas vezes o cliente abre o menu e some.

- **Como configurar:** Ative o "Tempo de Espera" no bloco Menu (ex: 60 minutos).
- **Ação:** Se o cliente não clicar em nada nesse tempo, o fluxo sai pela ponta "Inatividade". Você pode conectar isso a uma mensagem: "Oi? Ainda está aí?" para tentar recuperar a venda.

**Métricas (CTR):** O bloco mostra quantas pessoas visualizaram e quantas clicaram em cada opção, permitindo otimizar suas ofertas.

### 3.2.4 Bloco Randomizador

Ferramenta para Testes A/B e Sorteios. Divide o tráfego aleatoriamente.

- **Como funciona:** Você cria múltiplos caminhos (A, B, C) e define a porcentagem de pessoas que vai para cada um.
- **Exemplo Teste A/B:** 50% vai para a Mensagem A (Texto Curto) e 50% para a Mensagem B (Texto Longo). Depois você vê qual vendeu mais.

> **Regra:** A soma das porcentagens deve ser sempre 100%. A escolha é aleatória, lead a lead.

### 3.2.5 Bloco Etiqueta

Fundamental para segmentação e organização do CRM.

- **O que faz:** Cola ou remove uma "etiqueta adesiva" virtual no cliente.

**Estratégia de Uso:**

- **Início do Fluxo:** Adicione a etiqueta "Lead Frio" ou "Entrou no Fluxo X".
- **Fim do Fluxo:** Se o cliente comprou, adicione "Comprou" e remova a etiqueta "Lead Frio".
- **Segmentação:** Use etiquetas para marcar interesses ("Interesse Tenis", "Interesse Camisa") para fazer disparos em massa futuros focados.

### 3.2.6 Bloco Controlador de Chat

Gerencia o status do atendimento e a interação humana.

| Status | Descrição | Quando usar |
|--------|-----------|-------------|
| **Pendente (Aguardando)** | O padrão da automação. O chat fica na aba "Aguardando" e não notifica o celular do atendente. | Padrão automático |
| **Abrir (Atendendo)** | Joga a conversa para a aba principal "Atendendo". | Quando o cliente pede "Falar com Humano". Isso faz o celular do atendente tocar/notificar. |
| **Fechar (Resolvido)** | Arquiva a conversa na aba "Resolvidos". | No final do fluxo, se o cliente não comprou ou se o atendimento acabou, para manter o painel limpo. |

### 3.2.7 Bloco Departamentos

Roteamento automático de equipes.

- **O que faz:** Transfere o lead para uma fila específica (ex: Financeiro, Suporte, Comercial).
- **Segurança:** Atendentes configurados apenas no departamento "Comercial" não verão as conversas do departamento "Financeiro". Isso garante organização e sigilo.
- **Uso:** Geralmente colocado logo após um Menu onde o cliente escolhe o assunto.

### 3.2.8 Bloco Salvar

Aguardar uma resposta do lead e armazena automaticamente em uma variável personalizada.

**Principais configurações:**

| Campo | Descrição |
|-------|-----------|
| **Campo** | Nome da variável (ex: dificuldade, mercado) |
| **Mensagem de entrada** | Texto solicitando a informação |
| **Tempo de espera** | Tempo limite para aguardar resposta |
| **Tentativas** | Chances para respostas erradas |
| **Mensagem inválida** | Texto para erro |

**Novidade — Suporte a Mídia:**
O bloco agora aceita o envio de arquivos de mídia (imagens, áudios, vídeos e documentos).

- **URL da Mídia:** Ao invés de salvar um texto, o sistema salva automaticamente a URL pública do arquivo na variável escolhida. Isso permite que você use essa URL em integrações (Webhooks) ou envie para CRMs externos.

**Canais de saída:** 1. Resposta do cliente, 2. Tempo excedido, 3. Tentativas esgotadas.

> **Importante:** O dado salvo aparece no perfil do lead. Não é possível retomar o mesmo bloco para a mesma resposta depois de salvo (deve-se usar outra variável). Blocos Salvar muito seguidos devem ser intercalados com conteúdo.

---

## 3.3 Módulo 3: Integrações e Lógica Avançada

### 3.3.1 Bloco Integração (HTTP Request)

Este é o bloco mais poderoso para conectar o Sagazchat com o mundo externo (CRMs, planilhas, sistemas de pagamento, etc.).

- **O que faz:** Envia ou busca dados de qualquer sistema que possua uma API (Interface de Programação de Aplicações).

**Tipos de Requisição (Métodos):**

| Método | Uso |
|--------|-----|
| **POST** | Enviar dados novos (ex: cadastrar o lead no seu CRM) |
| **GET** | Consultar dados (ex: perguntar para a API dos Correios qual a rua desse CEP) |
| **PUT** | Atualizar dados existentes (ex: mudar o status do pedido no sistema) |

**Configuração Passo a Passo:**

1. **URL:** O endereço exato do sistema externo (Endpoint).
2. **Cabeçalhos (Header):** Geralmente usado para autenticação. Aqui você coloca sua chave de API (`Authorization: Bearer xyz123`) ou define o formato (`Content-Type: application/json`).
3. **Corpo (Body):** Os dados que você vai enviar. É aqui que você usa as variáveis do Sagazchat. Exemplo: `{ "nome": "{first_name}", "telefone": "{phone}", "interesse": "{variavel_salva}" }`.

**Mapeamento de Resposta (Extrair Dados):**

Essa é a funcionalidade que permite trazer informações de fora para dentro do chat.

- Se a API responder: `{ "status": "ok", "numero_pedido": 9988 }`.
- Você configura o **Caminho (Path)** como `numero_pedido` e escolhe uma variável do Sagazchat (ex: `id_pedido`) para salvar esse valor.
- **Resultado:** O robô pode dizer "Seu pedido 9988 foi confirmado!" usando a variável que acabou de "pegar" do sistema externo.

**Botão "Testar Requisição":** Essencial. Permite simular o envio antes de ativar o fluxo para garantir que a resposta é "Status 200" (Sucesso).

### 3.3.2 Bloco Remarketing

Gerencia a inscrição do lead em campanhas de mensagens sequenciais (Drip Marketing).

- **O que é:** Diferente do fluxo (que é uma conversa imediata), o Remarketing é uma sequência de mensagens espaçadas por dias (Dia 1, Dia 3, Dia 7).

**Funções:**

- **Inscrever:** Coloca o lead na sequência.
- **Remover:** Tira o lead da sequência.

> **Estratégia "Parar de Vender":** Se o cliente comprar (passar por um bloco "Compra Aprovada"), use o bloco Remarketing para Remover ele da sequência de vendas. Ninguém gosta de receber propaganda de algo que já comprou.

### 3.3.3 Bloco Condição

Este é o bloco responsável pela "inteligência lógica" do seu fluxo. Ele permite que o robô tome decisões sozinho com base nos dados que tem sobre o cliente.

**Como funciona (Lógica Se/Então):**

1. Você cria regras específicas (ex: "SE o cliente tem a etiqueta VIP").
2. Se a regra for verdadeira, o fluxo segue pelo **Caminho Sim** (Geralmente Verde).
3. Se for falsa, ele testa a próxima regra ou segue pelo **Caminho Não/Caso contrário** (Geralmente Vermelho).

**Tipos de Verificações Possíveis:**

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Etiquetas** | Verifique se o lead possui ou não possui uma etiqueta específica. | Se tiver "Comprou", mande para pós-venda. Se não, mande para oferta. |
| **Variáveis (Campos Personalizados)** | Compare valores numéricos ou de texto salvos anteriormente. | — |
| **Comparação de Texto** | "É igual a" (exata), "Contém" (palavra na frase), "Começa com" (DDDs/prefixos). | Se `cidade` = "São Paulo" |
| **Comparação Numérica** | "Maior que" (>), "Menor que" (<), "Igual a" (=). | Se `orcamento` > 1000 |
| **Status e Atributos** | Verifique dados do sistema (telefone válido, email preenchido, etc.). | — |

**Regras de Ouro e Hierarquia:**

- **Ordem Importa (Prioridade):** O sistema testa as condições de cima para baixo. Ele entrará na primeira condição que for verdadeira e ignorará as outras abaixo dela. Organize suas regras da mais específica para a mais geral.
- **O Caminho "Caso Não Atenda":** É obrigatório definir para onde o lead vai se nenhuma das condições for satisfeita. Isso funciona como uma rede de segurança para evitar que o fluxo trave.

**Combinação de Regras (E / OU):**

- **E (AND):** O cliente precisa ter a etiqueta VIP **E** saldo maior que 0 para passar.
- **OU (OR):** O cliente passa se tiver etiqueta VIP **OU** se tiver etiqueta Sócio.

**Exemplo Prático de Fluxo:**

1. **Condição 1:** Se etiqueta é "Cliente Antigo" → Manda para Menu de Recompra.
2. **Condição 2:** Se variável `interesse` contém "Promoção" → Manda para Oferta Relâmpago.
3. **Caso não atenda** (Nenhuma das acima) → Manda para Menu de Boas-vindas (Novo Lead).

### 3.3.4 Bloco Conexão de Fluxo

Permite criar "Sub-Fluxos" e organizar sua automação em módulos.

- **O que faz:** Transfere o cliente do Fluxo A para o Fluxo B.
- **Para que serve (Modularização):** Em vez de fazer um fluxo gigante e bagunçado, crie fluxos pequenos: "Fluxo Boas Vindas", "Fluxo Vendas", "Fluxo Suporte". Use o bloco conexão para ligar um ao outro.

> **Nota Técnica:** A transferência é de "ida sem volta" automática. O fluxo novo começa do início.

### 3.3.5 Bloco Atraso Inteligente

Ferramenta de controle de tempo e humanização.

**Dois Modos de Uso:**

| Modo | Configuração | Estratégia |
|------|-------------|-----------|
| **Delay de Digitação** | Configure para 3 a 5 segundos | Faz aparecer "Digitando..." no WhatsApp do cliente, tornando a conversa mais natural |
| **Agendamento Futuro** | Configure para esperar "2 Horas" ou "1 Dia" | Mande o preço. Coloque um Atraso de 2 horas. Depois, mande uma mensagem "E aí, o que achou?". Isso aumenta muito a conversão. |

### 3.3.6 Bloco Notificação

Este bloco serve como um "alerta invisível". Enquanto o cliente conversa com o robô, o sistema envia avisos para a sua equipe via WhatsApp, permitindo ação imediata em casos importantes.

**Onde e Como Usar:**

- **Notificar Vendas:** Avise sua equipe financeira assim que um pagamento for aprovado.
- **Leads Quentes:** Se o cliente responder "Tenho interesse" num produto de alto valor, o gerente recebe um alerta com o nome e telefone do lead para ligar na hora.
- **Falhas/Suporte:** Avise a equipe técnica se um cliente relatar um problema crítico.

**Configuração Passo a Passo:**

1. **Número de Destino:** Insira o número de WhatsApp que receberá o alerta.

> **Regra Crítica:** Use o formato internacional completo SEM o `+` e sem traços (ex: `5511999998888`). Se o número estiver errado, o alerta não chega.

1. **Mensagem:** Escreva o texto do alerta. Seja claro e objetivo.

**Poder das Variáveis (Contexto):**

Um alerta genérico ("Alguém comprou") não ajuda muito. Use variáveis para dar nome aos bois.

Exemplo de Mensagem:

```
ALERTA DE VENDA!
Cliente: {first_name}
Telefone: {phone}
Produto: {interesse_lead}
Valor: R$ {valor_venda}
```

Assim, quem recebe a mensagem já tem todos os dados para agir sem precisar abrir o sistema.

**Encadeamento (Múltiplos Destinatários):** O bloco envia para um número por vez. Se você precisa avisar o Vendedor, o Gerente e o Diretor, coloque 3 blocos de notificação um seguido do outro, cada um com um número diferente.

### 3.3.7 Bloco Manipulador

O bloco Manipulador permite criar, editar ou calcular variáveis dentro do fluxo, sendo extremamente útil para salvar escolhas, armazenar dados estratégicos e preparar informações para uso posterior em integrações ou condições.

**Funções principais:**

- **Definir valor:** Salva exatamente o que for configurado no campo "Valor" para uma variável, útil para registrar respostas de menus, etapas ou preferências do usuário.
- **Adicionar valor:** Adiciona um novo valor ao já salvo na variável, ideal para construir listas ou histórico de escolhas.
- **Realizar cálculos:** Permite somar, subtrair, multiplicar ou dividir valores de variáveis numéricas (como pontuações, preços, quantidades, etc.).

**Regras e boas práticas:**

- As variáveis criadas aqui podem ser reutilizadas em outros blocos como Integração, Condição, Salvar ou Conteúdo.
- O campo de nome da variável não pode conter espaços e deve seguir um padrão fácil de reconhecer, como `mercado`, `preferencia`, `pontuacao`, etc.
- Para cada resposta do usuário que será armazenada, recomenda-se conectar um Manipulador exclusivo com o valor correspondente.
- É possível mapear variáveis manipuladas para envio em sistemas externos através do bloco Integração.
- Esse bloco não exibe nada para o usuário — ele atua em segundo plano, operando com os dados.

**Exemplos Práticos de Uso:**

**1. Mapeando Botões do Menu (Tracking):**

- Cenário: Você tem um menu com "Tênis" e "Camisetas".
- Configuração: Ligue a saída "Tênis" a um Manipulador que define `{interesse} = tenis`. Ligue a saída "Camisetas" a outro Manipulador que define `{interesse} = camisetas`.
- Resultado: Agora você sabe o que o cliente quer sem ele precisar digitar.

**2. Criando um Protocolo de Atendimento:**

- Cenário: Você quer dar um número de protocolo para o cliente.
- Configuração: Use a função Random (Aleatório) para gerar um número (ex: entre 1000 e 9999) e salve na variável `{protocolo}`.
- Resultado: Envie na mensagem: "Seu protocolo é {protocolo}".

**3. Calculando Orçamento (Soma):**

- Cenário: O cliente adicionou um item de R$50.
- Configuração: Use a operação matemática: `{total} + 50`.
- Resultado: A variável `{total}` é atualizada com o novo valor.

### 3.3.8 Bloco Distribuidor

Sistema de distribuição de leads para equipes de vendas (Round Robin).

- **O problema:** Você tem 5 vendedores e 100 leads. Como dividir igual?
- **A solução:** O Distribuidor entrega um lead para o Vendedor A, o próximo para o Vendedor B, e assim por diante, em ciclos.
- **Configuração:** Adicione quantas saídas quiser (até 10). Cada saída leva a um bloco de "Notificação" ou "Controlador" de um vendedor específico.

### 3.3.9 Bloco Variável Global

O bloco Variável Global serve para alterar valores compartilhados entre todos os fluxos da conta, funcionando como contadores, acumuladores ou parâmetros de lógica personalizada. Ele é extremamente útil para monitoramento geral de ações como leads gerados, vendas, interações etc.

**Funções principais:**

- **Somar/Subtrair valores:** Ideal para incrementar contagens como número de leads ou vendas.
- **Definir valor fixo:** Útil para redefinir variáveis em situações específicas (ex: zerar o contador diariamente).

**Regras de uso:**

- A variável deve ser criada primeiro em **Configurações > Variáveis Globais**.
- Essas variáveis funcionam como dados compartilhados entre todos os fluxos e bots da conta.
- A variável pode ser alterada por qualquer fluxo ou bloco que execute a operação desejada.
- Embora a IA não tenha acesso direto ao valor dessas variáveis, o usuário pode configurar blocos como Notificação para receber o número atualizado de determinada variável no WhatsApp.

> **Sintaxe Obrigatória para Notificação:** Para usar o valor de uma variável global dentro do bloco de Notificação (ou em qualquer texto), você deve usar o prefixo `g_` antes do nome da variável.
> Exemplo: Se o nome da variável é `total_vendas`, no bloco de notificação você deve escrever `{g_total_vendas}`.

**Como Configurar (Passo a Passo):**

1. **Criação:** Vá em **Configurações > Variáveis Globais**. Crie uma variável chamada `total_atendimentos` com valor inicial `0`.
2. **No Fluxo:** Arraste o Bloco Variável Global para o ponto onde o atendimento é concluído.
3. **Configuração do Bloco:**
   - Ação: Selecione "Operação Matemática".
   - Variável: Escolha `total_atendimentos`.
   - Operação: Somar (+).
   - Valor: 1.

**Cenários Práticos de Uso:**

**1. Análise de Funil em Tempo Real (Analytics):**

- Objetivo: Saber exatamente quantos clientes estão em cada etapa do funil (Início, Meio e Fim) agora.
- Ação: Crie variáveis globais para cada etapa: `g_inicio`, `g_meio`, `g_fim`.
- No Fluxo:
  - Quando o cliente inicia, use o bloco para somar +1 em `g_inicio`.
  - Quando ele avança para a oferta, some +1 em `g_meio` E subtraia -1 em `g_inicio` (para tirá-lo da etapa anterior).
  - Quando ele compra, some +1 em `g_fim` E subtraia -1 em `g_meio` (para tirá-lo da etapa anterior).
- Resultado: Os contadores sempre mostram o número exato de leads parados em cada fase, sem duplicações.

**2. Chave Geral (Manutenção):**

- Objetivo: Desligar todos os robôs para manutenção ou feriado.
- Ação: Crie a variável global `status_loja = "ON"`.
- No Fluxo: No bloco Início de todos os bots, coloque uma Condição: Se `{g_status_loja}` == "OFF", envie mensagem de "Estamos em manutenção" e encerre.
- Controle: Quando quiser fechar, basta ir nas Configurações e mudar o valor para "OFF".

**3. Contador Geral de Leads:**

- Objetivo: Saber quantos leads a empresa gerou no total, somando todos os fluxos.
- Ação: Crie `total_leads = 0`. No final de cada fluxo de cadastro, use o bloco para somar +1.
- Notificação: Configure um alerta para o gerente: "Parabéns, atingimos a marca de {g_total_leads} leads!".

---

## 3.4 Módulo 4: Ferramentas Especiais e IA

### 3.4.1 OpenAI (Integração Direta com GPT)

Este bloco permite integrar o seu fluxo diretamente com a API da OpenAI (ChatGPT). Diferente do "Assistente de IA" (que assume a conversa inteira), este bloco serve para gerar uma resposta específica e imediata para o que o cliente acabou de perguntar ou dizer naquele momento do fluxo.

**Funcionamento:** Quando o cliente passa por este bloco, a IA lê a mensagem dele, consulta o seu Prompt (instruções) e gera uma resposta baseada nisso.

**Configuração:**

| Campo | Descrição |
|-------|-----------|
| **Pergunta ou mensagem** | (Opcional) Texto que o robô envia antes de processar a resposta (ex: "Aguarde um momento, vou verificar...") |
| **Modelo** | Escolha a versão do GPT (ex: gpt-3.5-turbo, gpt-4) |
| **Chave de API (Token)** | Insira sua chave de API da OpenAI |
| **Prompt (A Regra do Jogo)** | Aqui você define COMO a IA deve responder à pergunta do cliente |

> **Importante:** A IA vai pegar a dúvida do cliente e responder seguindo a regra que você escrever no prompt.
> **Exemplo:** Prompt: "Você é um especialista em tênis de corrida. Responda à dúvida do cliente sobre durabilidade e sugira o modelo ideal."
> Se o cliente perguntar "Qual tênis dura mais no asfalto?", a IA responderá: "Para asfalto, o modelo 'Endurance Pro' é o mais indicado devido ao solado de borracha reforçada."

**Saídas:**

- **Mensagem:** O caminho que o fluxo seguirá se a IA responder com sucesso.
- **Falha:** O caminho alternativo caso a conexão com a OpenAI falhe.

### 3.4.2 Agenda Nativa

A Agenda Nativa é um sistema de gestão de tempo integrado. Ela permite que você defina seus horários de atendimento e deixe que o robô faça os agendamentos automaticamente, sem conflitos de horário.

**Passo 1 — Configuração das Regras (Backend)**

Onde: **Menu Automação > Agenda > Configurar**

| Campo | Descrição |
|-------|-----------|
| **Dias de Indisponibilidade** | Selecione seus dias de folga (ex: Sábados e Domingos) para que o sistema nunca ofereça essas datas |
| **Jornada de Trabalho** | Horário exato de início e fim do expediente (ex: 07:00 às 17:00) |
| **Pausas/Almoço** | "Entra em pausa" (ex: 12:00) e "Volta da pausa" (ex: 14:00). O robô não agendará ninguém nesse período |

**Intervalos e Duração (A Lógica dos Slots):**

- **Intervalo:** Define de quanto em quanto tempo abre uma vaga. Se você colocar "30 minutos", o cliente verá opções como 08:00, 08:30, 09:00.
- **Duração dos eventos:** Define quanto tempo dura o atendimento real. Isso garante que um agendamento não atropele o próximo.

**Passo 2 — Gestão Manual e Bloqueios**

Onde: **Painel da Agenda (Visão de Calendário)**

Nem tudo é automático. Às vezes você precisa marcar um compromisso manualmente ou bloquear um horário.

- **Criar Evento Manualmente:** Ao clicar em "Adicionar evento" ou num dia específico, você abre a janela de criação. Insira Título e Detalhes.
- **Vincular Contato:** Permite agendar manualmente um cliente que já está na sua base (Audiência), mantendo o histórico dele atualizado.
- **Organização Visual:** Escolha a Cor de fundo do evento (ex: vermelho para urgente, verde para confirmado).

**Passo 3 — Aplicação no Fluxo (O que o cliente vê)**

Onde: **Construtor de Fluxos > Bloco Agenda**

1. Arrasta o bloco Agenda.
2. Seleciona a agenda que você criou (ex: "Agenda Dr. Paulo" ou "Agenda Barbearia").
3. O sistema vai ler automaticamente as regras do Passo 1.

> **Exemplo:** Se o cliente tentar agendar às 12:30, mas você configurou pausa das 12:00 às 14:00, essa opção nem aparecerá para ele.

**Resumo da Lógica:**

1. Você configura as regras de tempo em Automação.
2. O Robô lê essas regras e oferece apenas horários livres no WhatsApp.
3. Você gerencia exceções ou agendamentos manuais pelo painel visual.

### 3.4.3 Bloco de Pixel (Facebook CAPI)

Este é um recurso avançado de tráfego pago. Ele permite enviar eventos de conversão (como "Lead" ou "Compra") diretamente do WhatsApp para o Gerenciador de Anúncios do Facebook/Meta via API (Server-Side). Isso garante muito mais precisão nos dados do que o pixel de navegador comum.

**Como usar:**

1. Arraste o bloco Pixel.
2. Preencha os Dados Técnicos:

| Campo | Descrição |
|-------|-----------|
| **ID da rota** | Identificador interno da integração |
| **ID da página** | O ID da sua página do Facebook vinculada ao Business Manager |
| **Tipo do evento** | Escolha o que quer rastrear (ex: "Lead", "Purchase", "Schedule") |
| **Bearer token** | O token de acesso da API de Conversões do Facebook (gerado no Gerenciador de Eventos) |
| **Valor do item** | (Opcional) Valor monetário (ex: 10,55) para o Facebook calcular o ROAS |

> **Estratégia:** Coloque este bloco logo após o cliente realizar a ação valiosa (ex: depois que ele confirmar o agendamento ou finalizar um pedido).

### 3.4.4 Assistente de IA (Direcionamento para Agente)

Enquanto o bloco "OpenAI" serve para uma resposta única, o bloco Assistente IA serve para transferir a responsabilidade da conversa inteira para um "Agente Inteligente" que você treinou previamente no menu "Atendimento IA". O agente assume a conversa e interage livremente com base na base de conhecimento fornecida.

**Como usar:**

1. **Pré-requisito:** Antes de usar o bloco, você deve ter criado um agente no menu principal "Atendimento (IA)", definindo nome, empresa, e base de conhecimento.
2. Arraste o bloco Assistente IA (ícone de robô).
3. **Configuração:** Selecione qual Agente IA (ex: "Vendas", "Suporte N1") assumirá a conversa.

**Funcionamento:**

- O fluxo estático para.
- O Agente IA começa a ler as mensagens do cliente e responder automaticamente usando os tokens disponíveis da sua conta.
- A IA usará as informações de texto que você cadastrou (preços, horários, dúvidas frequentes) para manter o diálogo.

### Funcionalidade de Atalho de Fluxo (!)

Permite disparar um fluxo manualmente direto pelo celular.

- **Como usar:** Crie o atalho nas configurações do fluxo (ex: `venda`). Na conversa, digite `!venda` e o fluxo dispara.

---

# PARTE 4 — AUTOMAÇÃO

---

## 4.1 Campanhas

A funcionalidade de Campanhas permite ativar fluxos automaticamente quando o lead envia uma frase específica via WhatsApp. É ideal para acionar fluxos de forma rápida e estratégica, sem depender de menus ou ações manuais.

### O que são campanhas por frase?

São comandos configurados para reconhecer mensagens específicas enviadas pelo lead. Quando a frase é detectada, o sistema dispara automaticamente o fluxo vinculado a ela.

### Como configurar

1. Acesse o menu **Automação > Campanhas**.
2. Clique em **Criar campanha**.
3. Preencha os seguintes campos:

| Campo | Descrição |
|-------|-----------|
| **Nome** | Nome interno da campanha |
| **Fluxo** | O fluxo que será ativado |
| **Frase** | A palavra ou frase gatilho que o lead deve enviar (exatamente igual) |
| **Número** | O WhatsApp responsável por "escutar" essa frase |

> **Importante:** A frase deve ser digitada exatamente como configurada, sem variações, para que a campanha seja acionada com sucesso. Se o lead já estiver dentro de um fluxo ativo, a campanha por frase não será ativada para evitar conflitos.

### Aplicações práticas

- Ativação de menus por comando (ex: "menu", "atendimento").
- Campanhas promocionais (ex: "quero desconto", "participei da live").
- Respostas automatizadas por gatilhos de palavra.

### Boas práticas

- Use frases específicas que evitem ativação acidental.
- Evite palavras genéricas como "Oi" ou "Ajuda".
- Pode ser usado como suporte a estratégias de marketing, funis e automações específicas.

---

## 4.2 Remarketing

O Remarketing é uma funcionalidade que permite criar sequências automáticas de fluxos, ativadas com base em tempo e lógica pré-definida. Ele é essencial para acompanhar leads após interações iniciais, nutrir contatos e manter a comunicação ativa de forma automatizada.

### O que é possível fazer com o remarketing?

- Inscrever o lead automaticamente em um novo fluxo após um intervalo de tempo.
- Criar jornadas com vários fluxos em sequência (ex: boas-vindas, apresentação, proposta, reengajamento...).
- Automatizar acompanhamentos em campanhas, funis e ativações.

### Como configurar

1. Acesse o menu **Automação > Remarketing**.
2. Clique em **Criar remarketing** e configure:
   - Nome da sequência
   - Primeiro fluxo a ser executado
   - Tempo de espera entre os fluxos
   - Dias e horários permitidos para disparo
   - Fluxos seguintes (se desejar criar uma sequência encadeada)

### Remarketing fixado vs. não fixado

| Tipo | Descrição | Quando usar |
|------|-----------|-------------|
| **Fixado** | Inscreve o lead simultaneamente em todos os fluxos da sequência | Quando não há dependência entre os conteúdos |
| **Não fixado** | Inscreve o lead apenas após o término do fluxo anterior | Para jornadas com etapas que precisam ser concluídas antes de passar para a próxima |

### Regras importantes

- Se o lead já estiver em um fluxo, ele não será reinscrito até finalizar o fluxo atual.
- O lead só pode estar em uma automação de remarketing por vez.
- Remarketing de fluxos importados precisa ser religado manualmente, pois as automações são exclusivas por conta.

### Aplicações comuns

- Pós-venda e onboarding
- Recuperação de carrinho
- Funil de vendas automatizado
- Reengajamento de leads inativos
- Sequência de conteúdos ou treinamentos

---

## 4.3 Webhooks

A funcionalidade de Webhooks dentro da Automação do Sagazchat permite integrar a ferramenta com plataformas externas. Com ela, você pode acionar fluxos automaticamente, salvar dados personalizados e iniciar atendimentos com base em eventos externos.

### O que são Webhooks?

São URLs exclusivas geradas pelo Sagazchat que recebem informações (em formato JSON) enviadas de outros sistemas. Assim, é possível conectar CRMs, ERPs, planilhas, plataformas de pagamento e mais.

### Painel de Gerenciamento

- Visualização de todos os Webhooks criados.
- Exibe status de ativação, requisições recebidas no mês e limite mensal disponível.
- Permite ativar, desativar, editar e excluir webhooks com facilidade.

### Como configurar

1. Criar um novo webhook.
2. Copiar a URL gerada e colar no sistema externo que enviará os dados.
3. Selecionar os campos a serem recebidos e associar cada um a uma variável personalizada.
4. Conectar o webhook a um fluxo da plataforma.

> **Sobre o número de telefone:** Caso o número chegue sem o código do país (ex: apenas `11987654321`), será necessário:
>
> 1. Digitar manualmente `55` no início do campo "Celular".
> 2. Pressionar Enter.
> 3. Selecionar o campo de número que veio do webhook.
> Isso garante que o WhatsApp reconheça corretamente o número.

### Criação de campos personalizados

- Assim como na função de Integração, você pode criar campos personalizados diretamente na configuração do webhook.
- Esses dados são salvos automaticamente no perfil do lead.
- As variáveis podem ser reutilizadas em qualquer parte do fluxo (Conteúdo, Condição, Notificação, Integração etc.).

### Boas práticas

- Utilize ferramentas como Postman ou n8n para testar o envio antes de colocar em produção.
- Sempre valide os dados que chegam (ex: número completo, nome, e-mail).
- Evite expor publicamente o endpoint do webhook para segurança da automação.

---

## 4.4 Agenda

A funcionalidade Agenda permite que os seus clientes agendem compromissos diretamente na conversa do WhatsApp. O sistema gerencia a disponibilidade em tempo real, bloqueando os horários escolhidos para evitar conflitos e reduzir as taxas de não comparecimento (no-show).

### Principais Funcionalidades e Benefícios

| Funcionalidade | Descrição | Benefício |
|---------------|-----------|-----------|
| **Múltiplas agendas** | Permite criar calendários independentes para diferentes equipes ou finalidades (Suporte, Vendas, Onboarding, etc.) | Cada time gerencia seus horários sem conflitos |
| **Disponibilidade configurável** | Define dias da semana, horário de início e fim, pausas, intervalos e duração de cada atendimento | Agendamentos sempre dentro da sua rotina |
| **Bloco "Agenda" no construtor** | Insere a opção de escolher data e hora diretamente dentro de um fluxo de conversa automatizado | Cliente agenda sem sair do WhatsApp |
| **Aviso automático** | Configura envio de lembretes automáticos antes do horário agendado | Reduz faltas e transmite profissionalismo |
| **Vincular contato ao evento** | Associa automaticamente o agendamento ao contato do lead no CRM interno | Histórico completo e organizado |

### Como Configurar em 2 Passos

**Passo 1 — Criar a Agenda:**

1. Acesse o menu **Automação > Agendas**.
2. Clique em "Criar agenda" e depois em "Configurar".
3. Defina as regras da sua disponibilidade:
   - Dias indisponíveis (ex: Sábado, Domingo).
   - Horário de trabalho (ex: início às 07h, pausa das 12h às 14h, fim às 17h).
   - Intervalo & Duração (ex: cada sessão dura 30 minutos).
4. Clique em "Salvar".

**Passo 2 — Construir o Fluxo de Agendamento:**

1. Vá para o **Construtor de Fluxos**.
2. Crie um fluxo onde o cliente possa solicitar um agendamento (por exemplo, usando um bloco de Menu com a opção "Marcar reunião").
3. Arraste o bloco "Agenda" para a área de trabalho do fluxo.
4. Selecione a agenda que você criou no Passo 1.
5. Configure os detalhes, como a quantidade de dias futuros a serem exibidos (ex: "Mostrar 7 dias à frente") e os textos de instrução para o cliente.
6. Conecte a saída do bloco "Agenda" a um bloco de Conteúdo para enviar uma mensagem confirmando o agendamento com sucesso.

### Exemplos de Uso Prático

- **Consultorias & Mentorias:** Clientes marcam sessões individuais sem trocar e-mails.
- **Lojas Físicas:** Agendar horários em provadores, retirada de produtos ou sessões com personal shopper.
- **Imobiliárias:** Cliente escolhe o melhor horário para visitar um imóvel.
- **Centros Automotivos:** Organiza agendamento de revisões ou troca de pneus.

---

## 4.5 n8n

O n8n é uma ferramenta completa de automação de fluxo de trabalho (workflow automation) disponível dentro do Sagazchat. Enquanto o Webhook serve apenas para receber/enviar dados brutos, o n8n permite processar esses dados e conectar serviços.

### O que faz

- Conecta o Sagazchat a mais de 200 serviços externos (Google Sheets, Telegram, Mailchimp, Bancos de Dados SQL, etc.).
- Permite criar lógica de programação visual (Se acontecer X, faça Y no Google Sheets e Z no Slack).

### Como funciona

- **Editor Visual:** Possui uma interface própria de "nós" (nodes) e conexões.
- **Gatilhos (Triggers):** Pode ser acionado por eventos do chat (ex: novo lead, fluxo finalizado).
- **Ações:** Pode executar ações no Sagazchat (ex: enviar mensagem, atualizar contato) ou em apps externos.

### Diferença entre Webhook e n8n

| | Webhook | n8n |
|---|---------|-----|
| **Função** | Ponto de conexão simples (Gatilho) | Motor que recebe o gatilho, processa a informação e executa tarefas complexas |
| **Complexidade** | Simples | Avançado |
| **Integrações** | 1 para 1 | 200+ serviços |

---

# PARTE 5 — COMUNICAÇÃO EM MASSA

---

## 5.1 Transmissões

Esta funcionalidade permite o envio em massa de mensagens automatizadas (broadcast) para sua base de leads ou clientes via WhatsApp, com agendamento e controle inteligente para evitar bloqueios.

### Funções Principais

- **Criar transmissões personalizadas:** Você escolhe o nome, define qual fluxo será disparado e seleciona qual número de WhatsApp fará o envio (caso tenha mais de um).
- **Definir o público:** Você pode enviar para listas importadas, etiquetas específicas, lista TXT ou para todos os contatos da base.
- **Agendamento:** Permite programar a data e hora exata para o início dos disparos.

### Configurações Avançadas de Segurança (Anti-bloqueio)

| Configuração | Descrição |
|-------------|-----------|
| **Intervalo Randômico de Disparo** | O sistema não envia tudo no mesmo segundo. Ele espera um tempo aleatório entre uma mensagem e outra para simular o comportamento humano natural. |
| **Intervalo após lote** | Permite configurar uma pausa maior após o envio de um certo número de mensagens (ex: envia 50, pausa 5 minutos, envia mais 50). Isso garante estabilidade e segurança para o seu número. |

### Regras de Uso

- O fluxo escolhido para envio já deve estar pronto e ativo na conta.
- É obrigatório ter um número de WhatsApp conectado.
- Uma vez iniciada, a transmissão só pode ser deletada (não tem pausa).
- Você pode usar vários números para disparar, mas deve separar os leads em planilhas diferentes para cada número.
- Para conferir quantos envios foram feitos, a dica é aplicar uma etiqueta na transmissão e depois ver quantos contatos possuem essa etiqueta.

### Planilha de Importação (Regras de Ouro)

Para importar uma lista de contatos externa, a planilha deve seguir padrões rigorosos para funcionar.

**Estrutura Obrigatória das Colunas:**

| Coluna | Obrigatória |
|--------|-------------|
| Nome | Sim |
| Celular | Sim |
| Email | Não |
| Etiquetas | Não |

**Cuidados Essenciais:**

- **Formato do Telefone:** Sempre use o formato internacional completo (ex: +55 11 91234-5678). Nada de espaços, pontos ou traços.
- **O Vilão do Excel (Notação Científica):** O Excel costuma transformar números longos em algo como `5,59E+12`. Isso estraga a importação. **Solução:** Formate a coluna de celular como "Texto" antes de digitar os números.
- **Arquivo:** Salve sempre em `.CSV` ou `.XLSX`.
- **Sem vazios:** Evite linhas em branco ou observações fora do padrão.

> **Dica:** Sempre baixe e utilize a planilha de exemplo fornecida pela própria plataforma para garantir que está tudo certo.

---

## 5.2 Gerente de Grupo

A funcionalidade Gerente de Grupos permite integrar grupos do WhatsApp à plataforma, oferecendo controle total sobre comunicação, disparos e automações dentro desses grupos.

### Funções Principais

- **Importar grupos automaticamente:** Os grupos vinculados ao seu WhatsApp aparecem automaticamente na aba Gerente de Grupos.
- **Exportar membros dos grupos:** Gere uma planilha com os contatos dos participantes dos grupos selecionados.
- **Ativar grupos para interação direta:** Escolha quais grupos estarão disponíveis no painel de bate-papo ao vivo.
- **Criar fluxos específicos para grupos:** Automatize interações com os grupos usando os blocos disponíveis no editor de fluxo.

### Blocos Especiais para Grupos

| Bloco | Descrição |
|-------|-----------|
| **Mencionar Todos** | Marca automaticamente todos os membros de um grupo em uma mensagem. Útil para alertas, atualizações ou chamadas de atenção. |
| **Conteúdo (Modo Grupo)** | Envie mensagens personalizadas, imagens, áudios ou vídeos diretamente nos grupos através do fluxo. |
| **Atraso Inteligente** | Programe pausas entre mensagens para criar um envio mais natural. |
| **Integração com automações** | Combine fluxos de grupo com notificações, etiquetas e salvamento de dados. |

### Limitações por Plano

| Plano | Grupos Simultâneos |
|-------|-------------------|
| **Basic 1** | 1 grupo por vez |
| **Pro 1** | Até 3 grupos simultaneamente |

> **Importante:** Grupos desativados não recebem mensagens automatizadas e não aparecem no bate-papo. Para ativar outro grupo, será necessário desativar um já em uso, respeitando o limite de grupos permitidos pelo plano contratado.

### Funcionalidades Avançadas

**Assinatura (Clube de Membros):**

Uma funcionalidade exclusiva que transforma a gestão de grupos.

- Permite criar e gerenciar "Grupos de Assinatura" ou "Áreas de Membros" dentro do WhatsApp.
- O sistema pode adicionar ou remover membros automaticamente baseado no status de pagamento (ex: Se o cliente parar de pagar a assinatura mensal, o robô remove ele do grupo VIP).

**Controle Total via Webhook:**

- Toda a gestão dos grupos pode ser controlada externamente.
- Você pode conectar plataformas de pagamento (como Hotmart, Kiwify, Eduzz) via Webhook para que, quando uma venda for aprovada, o sistema adicione o cliente ao grupo automaticamente.
- Webhooks também podem disparar mensagens de boas-vindas específicas ou ações de remoção.

**Disparo de Fluxo Direto:** Envie um fluxo para o grupo diretamente desta tela, sem precisar ativá-lo para o Bate-papo ao Vivo.

> **Importante:** Para que o robô responda automaticamente a interações (ex: palavras-chave) e para que o grupo apareça no Bate-papo ao Vivo, ele precisa estar Ativado (consumindo uma cota do plano). Porém, é possível realizar disparos pontuais de fluxo diretamente pela tela de gestão sem ativar o grupo.

### A Tela do Criador de Fluxo de Grupo

Este é o ambiente visual onde você desenha a automação.

- **Visualização Focada:** Exibe apenas os blocos que funcionam em grupos (ex: remove blocos de atendimento individual).
- **Botão de Disparo Rápido (Play):** Dentro desta tela, existe um botão para executar o fluxo imediatamente no grupo vinculado, ideal para testar a automação ou fazer um comunicado urgente sem precisar agendar.

---

# PARTE 6 — CONFIGURAÇÕES

---

## 6.1 Conexão

Essa seção é onde você conecta e gerencia os números de WhatsApp que serão usados na sua empresa. Cada número é uma conexão ativa e tem diversas ações e configurações que impactam diretamente no funcionamento da ferramenta.

### O que você pode fazer aqui

**Adicionar uma nova conexão:**

- Basta clicar no botão "+" para iniciar o processo de conexão de um novo número de WhatsApp (leitura de QR Code).
- Você pode ter múltiplas conexões (a depender do seu plano), gerenciando atendimentos separados por número.

**Gerenciar conexões ativas:**

- Visualize quais números estão conectados (verde) e desconectados (cinza).
- Cada cartão de conexão exibe: Nome do número, Status de conexão, Código e horário da última sincronização.

### Ações disponíveis por número

| Ação | Descrição |
|------|-----------|
| **Reiniciar Instância** | Útil em caso de travamentos ou bugs de conexão com o WhatsApp |
| **Assistente IA** | Ativa o assistente virtual para auxiliar nos atendimentos (caso o plano possua) |
| **Copiar Token** | Usado para integrações via API ou Webhook |
| **Editar** | Alterar nome ou dados de identificação da conexão |
| **Excluir** | Remove a conexão da conta (ação irreversível) |

> **Dica Importante:** Recomenda-se usar um número por conexão individual e evitar trocas frequentes de dispositivo para garantir a estabilidade da conexão.

---

## 6.2 Fluxos Padrão

A ferramenta permite configurar fluxos automáticos que são disparados em momentos específicos do atendimento, funcionando como "regras globais" para aquele número.

### Tipos de Fluxos Padrão

| Tipo | Quando é ativado | Objetivo |
|------|------------------|----------|
| **Fluxo de Boas-Vindas** | Assim que um novo número entra em contato pela primeira vez (quando ainda não está na lista de leads) | Engajar o lead com uma mensagem ou menu inicial, criar um bom primeiro contato e direcionar para o próximo passo |
| **Fluxo de Resposta Padrão** | Somente quando o cliente envia uma nova mensagem após um período de inatividade definido (ex: 6 horas sem interações) | Reengajar o lead ou oferecer ajuda se ele parecer perdido |
| **Fluxo de Conversa Finalizada** | Após a conversa ser manualmente finalizada pelo atendente ("Resolver"), se o cliente enviar qualquer nova mensagem | Dar instruções de como reabrir o chamado (ex: "Seu atendimento foi finalizado, mas digite 'oi' para começar de novo") |

**Nota sobre Fluxo de Resposta Padrão:** Se o cliente mandar mensagem, ficar em silêncio por 6 horas e depois voltar a falar, esse fluxo dispara. Se ele mandar mensagem antes do tempo acabar, nada acontece.

### Como configurar

1. Vá até **Configurações > Fluxo padrão**.
2. Selecione o número de WhatsApp que deseja configurar.
3. Escolha o fluxo desejado para cada situação (Boas-vindas, Resposta Padrão, Conversa Finalizada).
4. Clique em **Salvar**.

---

## 6.3 Departamentos

Os departamentos servem como divisões dentro da sua conta para separar áreas como Vendas, Suporte, Financeiro, etc., garantindo privacidade e organização.

### Onde são configurados

- **Criados em:** Configurações > Departamentos.
- **Atribuídos em:** Configurações > Equipe (ao editar um usuário).

### Controle de Acesso

> **Importante:** Se um usuário não tiver nenhum departamento atribuído, ele não verá nenhuma conversa no bate-papo ao vivo.

Isso garante que:

- Um atendente de suporte não veja conversas do financeiro.
- Equipes trabalhem de forma segmentada com foco total em sua área.

### Para que serve

- Organizar sua equipe por loja, filial, setor ou produto.
- Controlar permissões e fluxos de atendimento.
- Direcionar leads para setores corretos automaticamente nos fluxos.
- Filtrar atendimentos no painel de forma estratégica.

---

## 6.4 Respostas Rápidas

A funcionalidade de Respostas Rápidas permite criar atalhos para enviar mensagens pré-configuradas com agilidade. Ideal para padronizar a comunicação e ganhar tempo.

### O que são

Mensagens prontas que podem conter: Texto simples, Imagens, Áudios, Vídeos, Documentos, Contatos e Figurinhas.

### Como usar

- No bate-papo ao vivo, digite `/` seguido do nome do atalho (ex: `/precos`).
- Ou clique no ícone de raio (atalhos) no menu de mensagens.

### Recursos disponíveis

| Ação | Descrição |
|------|-----------|
| **Criar** | Botão "Nova Resposta". Insira nome do atalho e o conteúdo |
| **Compartilhar** | Defina se a resposta é pessoal (só você vê) ou compartilhada com toda a equipe |
| **Excluir** | Remova respostas que não são mais necessárias |

> **Nota:** Não é possível editar uma resposta rápida existente. Se precisar mudar, exclua e crie novamente.

> **Dica Estratégica:** Crie atalhos para cada etapa do funil (`/boasvindas`, `/faq`, `/pix`, `/despedida`).

---

## 6.5 Campos Personalizados

São espaços onde ficam armazenadas informações específicas de cada lead (variáveis dinâmicas).

### O que são

Variáveis que armazenam dados como Nome, E-mail, ou campos personalizados criados por você (ex: `interesse`, `tamanho_camisa`, `data_agendamento`).

### Como são utilizados

- Preenchidos automaticamente em fluxos (Bloco Salvar/Manipulador), Webhooks ou manualmente no chat.
- Usados em mensagens com a sintaxe `{nome_do_campo}`.
- Permitem lógica condicional (ex: Se `interesse` for "Tenis", mostre o catálogo de tênis).

### Recursos da Tela

| Campo | Descrição |
|-------|-----------|
| **Nome** | Nome técnico da variável usada nas automações |
| **Descrição** | Explicação do uso |
| **Utilizações** | Mostra quantos fluxos usam aquele campo |

---

## 6.6 Equipe

A área Equipe é onde você gerencia os acessos dos usuários da sua conta.

### Como configurar

Vá em **Configurações > Equipe** e clique em "Adicionar usuário".

### O que dá pra configurar

| Campo | Descrição |
|-------|-----------|
| **Nome e e-mail** | Dados do operador |
| **Senha** | Definida na criação (o usuário pode mudar depois) |
| **Perfil de acesso** | Admin (acesso total) ou User (acesso restrito) |
| **Departamentos** | Define quais setores esse operador visualiza |
| **Permissões avançadas** | (Nos três pontinhos) Restringir acesso a fluxos, configurações, relatórios, apagar mensagens, etc. |

### Dicas importantes

- **Multiempresa:** Um mesmo e-mail pode ser usado em várias contas do Sagazchat, se for convidado por cada uma delas.
- O usuário precisa criar uma conta na plataforma antes de conseguir acessar, mesmo que tenha sido convidado.

> **Atenção:** Se o operador não estiver vinculado a nenhum departamento, ele verá uma tela branca no bate-papo (sem conversas).

---

## 6.7 Audiência (Base de Contatos)

A seção Audiência é onde ficam armazenados todos os leads que entraram em contato com a ferramenta ou foram adicionados manualmente. Ela funciona como a base de contatos do seu sistema.

### Funções Principais

| Função | Descrição |
|--------|-----------|
| **Visualização Completa** | Veja nome, número de WhatsApp, data de inscrição e e-mail de todos os contatos |
| **Importação em Massa** | Traz leads de uma planilha para dentro da ferramenta de forma rápida |
| **Exportação de Contatos** | Gere e baixe uma planilha com todos os dados dos leads da conta |
| **Adição Individual** | Permite cadastrar contatos manualmente preenchendo nome, telefone e e-mail |
| **Início de Conversa** | Ao adicionar um contato, é possível já iniciar o atendimento direto pelo WhatsApp escolhido |
| **Edição** | Atualize dados incorretos ou desatualizados (como nome ou e-mail) |
| **Remoção em Massa** | Limpa toda a base de contatos da ferramenta. **Atenção: Essa ação é irreversível** |

### Regras e Observações

- **Formato do Telefone:** Deve seguir o formato internacional completo (ex: +55 11 91234-5678) e não deve conter pontos, vírgulas ou espaços. Dica: Use apenas números para garantir (ex: `5511912345678`).
- **Planilha Padrão:** Ao importar via planilha, utilize sempre o modelo padrão fornecido pela ferramenta.
- **Campos Obrigatórios:** A planilha deve conter no mínimo **Nome** e **Número**.
- **Nomes de Arquivo:** Evite caracteres especiais (acentos, símbolos) nos nomes dos arquivos e campos da planilha para garantir que a importação funcione.
