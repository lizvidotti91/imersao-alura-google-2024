# Aula 03

## Machine Learning
O Machine Learning (ou aprendizado de máquina) é um tipo de Inteligência Artificial que cria programas capazes de fazer previsões, identificar padrões, executar tarefas ou tomar decisões diantes de dados inéditos.

Esse tipo de programa é treinado com uma vasta quantidade de dados, onde o algoritmo é treinado para melhorar seu desempenho e realizar seu objetivo. Esses modelos são capazes de encontrar padrões nos dados de treinamento, que são usados para fazer previsões ou identificar pessoas, objetos, etc.

### Tipos de Machine Learning
- Classificação: identificar a categoria a que determinada amostra pertence;
- Regressão: prever um valor numérico com base nas características da amostra;
- Agrupamento: agrupar amostras semelhantes.

Podemos encontrar exemplos de machine learning em diversas áreas, como vendas, área financeira, medicina, etc.

## Redes Neurais e Deep Learning
As Redes Neurais são uma estrutura computacional que se organizam em camadas. Muitas delas contam com apenas duas camadas, as entradas

## Google AI Studio

### New prompt
- *Chat prompt:* AI Studio guardando o contexto e o histórico das conversas;
- *Freeform prompt:* como embutir um prompt maior dentro de uma solução e não tem a necessidade do chat, a exemplo do Chat Prompt. Nela, você agrega todos os seus prompts em uma única requisição;
- *Structured prompt:* podemos montar uma tabela e utilizar a técnica do few-shot-prompt. Ao invés de estruturar em texto livre, podemos estruturar na forma de banco de dados ou tabela, tornando a leitura dos nossos prompts mais fáceis, para nós, de entendermos o que está sendo pedido, e uma forma simples para o modelo entender.

### System instruction
Como o modelo deve agir, não importa qual o prompt que eu utilize naquela conversa.

Útil para quando utilizo dentro de uma solução maior, mais robusta. Ele fixa o comportamento, o perfil (personas que o modelo deve agir como/ incorporar).

### Modelos
- Gemini 1.5 Pro;
Mais robusto, com mais capacidade de contexto na gestão de informação. Mas ao utilizar o Google AI Studio, não conseguimos utilizar da customização de parâmetros.
- Gemini 1.0 Pro
Possibilidade de opções adicionais de customização de geração de prompt (customização de parâmetros).

### Temperatura
Temperaturas mais próximas do zero, o modelo escolherá a palavra mais provável. Escolha mais específica na forma de controle. Isso torna as respostas iguais ou com poucas variações, quando fazemos a mesma pergunta.

Temperatura mais próxima a um, o modelo poderá escolher em uma gama maior de palavras mais prováveis. Esse tipo é mais utilizado em modelos de IA que precisam de mais criatividade nas respostas. Isso torna as respostas diferentes, ou com maiores variações, quando fazemos a mesma pergunta.

### Stop sequence
Caracteres/ sequência, para o modelo marcar o final da criação. Pensando no contexto de postagens para newsletters e blogs.

### Safety settings
A ideia dos filtros é a forma encontrada para uso em geral, de ter uma proteção embutida para que não venham respostas preconceituosas, com violência, etc.

### Advanced settings
- Top K: calibrar quantas das possíveis palavras prováveis eu quero usar na resposta do modelo. Nesse momento, o modelo ainda não escolheu a palavra que ele usará na resposta final. Aqui estamos falando em números, quantidade de palavras. Se eu tenho que a próxima palavra da sentença pode ser mas - contudo - porém - todavia - entretanto (5 palavras), posso pedir para que o modelo utilize umas das cinco, ou apenas uma palavra para utilizar na sua resposta final;
- Top P: seleção de palavras baseado em probabilidade. 10%, 90% de chance. Qual a probabilidade agregada que eu quero usar.

### Multimodal
Podemos utilizar texto, imagem, vídeo, áudio para os nossos inputs.

*Token:* o programa de computador trabalho com números, que é como o computador consegue processar a informação. Dessa forma, a transformação do nosso texto (linguagem natural) é entendendida pelo modelo de IA em forma númerica. Essa transformação também deixa a informação do input mais curta e leve, e o modelo utilizará de menos capacidade de memória pra processar a informação.

## Visão Computacional
### Detecção de Objeto
## API