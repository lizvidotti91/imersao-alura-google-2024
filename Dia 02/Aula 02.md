# ENGENHARIA DE PROMPT

Prompt: grande ferramenta de interação com os modelos de IA Generativa, como o Google Gemini. A qualidade e profundidade gerado pelo modelo está ligada a qualidade e profundidade do que eu peço na criação deste conteúdo.

Técnicas de construção/ design de prompt: como podemos refinar a entrada de dados para a IA Generativa, de modo a obter os melhores resultados. Essa talvez seja uma habilidade que passa por todas as áreas do conhecimento, não ficando restrita à tecnologia.

Existem muitos papers científicos sobre a engenharia de prompt.

Democratização da IA: há alguns anos, todo o conhecimento de IA dependia do engenheiro de Machine Learning. A ideia do prompt trouxe a simplificação de como podemos gerar resultados da IA.

Como eu aprimoro e refino os meus prompts.

- Tenha clareza nas instruções;
- Quanto mais específicos e claros formos no prompt, mais específicas e assertivas serão as respostas;
- Podemos seguir experimentando com os prompts até chegar ao resultado esperado;

Google AI Studio: podemos escolher o que salvar, a partir de checkpoints de qualidade de resultados.

Google Gemini: o histórico é salvo automaticamente

## Técnicas

- Dividir tarefas complexas em tarefas menores
- Pedir para o modelo dar justificativas

## Alucinação

O modelo generativo trabalha gerando uma reposta baseada nos meus dados de entrada (prompt/input). Quando não direcionamos muito bem a resposta que queremos, podemos obter uma resposta inadequada ao que queremos saber, ou o modelo de IA poderá "inventar" a resposta.

O modelo está ali para gerar informações, e não para julgar o que ele está criando. Ele aprende a semântica das palavras e idiomas, aprende estatisticamente qual a melhor sequência de palavras e nos fornece o resultado.

O modelo de IA Generativa é treinado com uma gama vasta de informações. Se eu não escrever um prompt com o melhor grau de acurácia, certeza e realidade, ele vai gerar algo, que pode estar descolado do contexto que eu espero.

## Camadas do Google Gemini
- Engenharia/design do prompt;
- Parâmetros de execução;
- Configurações de segurança;
- Redução instrínseca do modelo para informações inventadas ou alucinadas.

## Técnicas de Prompt
### Zero-shot prompting
Quando fazemos um pedido sem nenhum exemplo, referência em que o modelo possa basear.

Pedi ao Google AI Studio que resolvesse um problema de lógica:
```
Duas tartarugas estavam juntas e começaram a caminhar em linha reta em direção a um lago distante. A primeira tartaruga percorreu 30 metros por dia e demorou 16 dias para chegar ao lago. A segunda tartaruga só conseguiu percorrer 20 metros por dia e, portanto, chegou ao lago alguns dias depois da primeira. Quando a primeira tartaruga chegou ao lago, quantos dias ela teve que esperar pela segunda tartaruga?
```

E o Google AI Studio me deu a seguinte resposta:
```
Calculando a jornada das tartarugas:

1. Distância até o lago: Primeiro, precisamos descobrir a distância total até o lago. Sabemos que a primeira tartaruga levou 16 dias para chegar ao lago a uma velocidade de 30 metros por dia. Portanto, podemos calcular a distância:

Distância = Velocidade x Tempo
Distância = 30 metros/dia x 16 dias 
Distância = 480 metros

O lago está a 480 metros de distância do ponto de partida.

2. Tempo da segunda tartaruga: Agora, vamos calcular quantos dias a segunda tartaruga levou para chegar ao lago. Ela caminha 20 metros por dia, então:

Tempo = Distância / Velocidade
Tempo = 480 metros / 20 metros/dia
Tempo = 24 dias

A segunda tartaruga levou 24 dias para chegar ao lago.

3. Dias de espera: Finalmente, para descobrir quantos dias a primeira tartaruga esperou, subtraímos o tempo que a primeira tartaruga levou do tempo que a segunda tartaruga levou:

Dias de espera = Tempo da segunda tartaruga - Tempo da primeira tartaruga
Dias de espera = 24 dias - 16 dias
Dias de espera = 8 dias

Portanto, a primeira tartaruga teve que esperar 8 dias pela segunda tartaruga.
```

### Few-shot prompting
Quando fazemos um pedido com alguns exemplos, referência para que o modelo saiba a área de atuação.

Aqui, coloquei um primeiro problema com sua respectiva resposta. Para o segundo problema, que quero que o modelo responda, deixei o termo 'Reposta:' para que o Google AI Studio possa me responder de forma simples e objetiva.

```
Pergunta: Um diretor de cinema dirigiu 16 filmes com o ator Nicholas Cage. Metade desses filmes foram de ação, e na metade dos filmes de ação, Nicholas usava bigode. Em quantos filmes Nicholas Cage estava de bigode?

Resposta: 4 filmes.

Pergunta: Duas tartarugas estavam juntas e começaram a caminhar em linha reta em direção a um lago distante. A primeira tartaruga percorreu 30 metros por dia e demorou 16 dias para chegar ao lago. A segunda tartaruga só conseguiu percorrer 20 metros por dia e, portanto, chegou ao lago alguns dias depois da primeira. Quando a primeira tartaruga chegou ao lago, quantos dias ela teve que esperar pela segunda tartaruga?

Resposta:
```

E o modelo do Google AI Studio respondeu de forma objetiva. Apesar de ainda me dar uma explicação breve. Porém, menor do que o primeiro cenário:

```
Resposta: 8 dias.
Explicação:
A primeira tartaruga percorreu 30 metros por dia durante 16 dias, então a distância até o lago é de 30 metros/dia * 16 dias = 480 metros.
A segunda tartaruga percorre 20 metros por dia, então ela levará 480 metros / 20 metros/dia = 24 dias para chegar ao lago.
Portanto, a primeira tartaruga teve que esperar 24 dias - 16 dias = 8 dias pela segunda tartaruga.
```
### Chain-of-thought
Tentar fazer o modelo replicar a forma que nós mesmos resolvemos o problema. Tentar refinar uma pergunta maior ou mais complexas em partes menores.

Prompt de entrada:
```
Como se fosse um professor de inglês, sugira cinco exercícios a partir de palavras-chave. Eu vou te passar uma lista de palavras-chave e modelos de exercicio como exemplo, e logo em seguida, passarei uma segunda lista de palavras-chave, para que você me sugira os novos exercícios.

Keywords/Palavras-chave
legal - cool
vermelho - red

Exercícios/Exercises
She's a very ___ girl. (Ela é uma garota legal)
He's wearing a ___ t-shirt. (Ele está vestindo uma camiseta vermelha)

Keywords/Palavras-chave
Resumir - to sum up
Ver - to see
```

Resultado:
```
Exercícios com "Resumir" e "Ver":

1. Completar a frase:

To ___ it ___, the movie was fantastic! (Para resumir, o filme foi fantástico!)

I didn't ___ you at the party last night. (Eu não te vi na festa ontem à noite.)

2. Pergunta e resposta:
How would you ___ the book in one sentence? (Como você resumiria o livro em uma frase?)

What did you ___ on your way to school? (O que você viu no seu caminho para a escola?)

3. Transformar a frase para negativo:

We saw a beautiful rainbow. (Nós vimos um lindo arco-íris.)

We ___ ___ a beautiful rainbow. (Nós não vimos um lindo arco-íris.)

He summarized the article for us. (Ele resumiu o artigo para nós.)

He ___ ___ the article for us. (Ele não resumiu o artigo para nós.)

4. Escrever um pequeno parágrafo usando as duas palavras-chave:

Descreva uma situação onde você precisou resumir algo que viu para outra pessoa.

5. Criar sinônimos:
Quais são outras palavras que você pode usar no lugar de "resumir" e "ver"?

Exemplos:
Resumir: sintetizar, recapitular, condensar

Ver: observar, notar, enxergar
```
### Least-to-most-prompting
Mandar um prompt grande de um problema grande e pede para o modelo de IA dividir em problemas menores antes de dar a resposta.

Ele vai do problema menos complexo para o mais complexo. Direcionar o modelo para dividir em sub-problemas.
### Self-consistency
Dados que necessitam de precisão maior.

Baseia em fazer vários prompts, que gerarão respostas diferentes. Então, podemos pedir ao modelo que analise os resultados dados por ele mesmo e que ele veja o resultado mais frequente. Dados que não sejam frequentes serão os menos consistentes.