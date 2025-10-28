export interface Artigo {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  gradient: string;
  image: string;
  content: ArtigoContent[];
}

export interface ArtigoContent {
  type:
    | "paragraph"
    | "heading"
    | "image"
    | "table"
    | "list"
    | "blockquote"
    | "code"
    | "divider"
    | "link";
  text?: string;
  level?: number;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  caption?: string;
  headers?: string[];
  rows?: string[][];
  ordered?: boolean;
  items?: string[];
  author?: string;
  code?: string;
  // Propriedades para links
  href?: string;
  target?: "_blank" | "_self";
  title?: string;
  description?: string;
}

export const ARTIGOS: Readonly<Artigo[]> = [
  {
    id: 1,
    title:
      "Desvendando o Big O e as Estruturas de Dados Essenciais: Uma Aula Rápida",
    author: "Brandon Ramos",
    date: "2025-09-04T10:00:00.000Z",
    readTime: "7 minutos de leitura",
    gradient: "from-blue-400 to-purple-500",
    image: "/5.png",
    content: [
      {
        type: "paragraph",
        text: "Olá! Se você está mergulhando no universo da programação ou apenas quer aprimorar seus conhecimentos, entender sobre Notação Big O e as estruturas de dados básicas é um passo fundamental. Pense nisso como aprender a gramática antes de escrever um romance. Vamos descomplicar esses conceitos de uma maneira técnica, mas sem perder a leveza.",
      },
      {
        type: "heading",
        level: 2,
        text: "O Que Raios é Esse Tal de Big O?",
      },
      {
        type: "paragraph",
        text: "Em termos simples, a Notação Big O é uma forma de medir a eficiência de um algoritmo. Ela nos diz como o tempo de execução ou o espaço em memória de um algoritmo cresce à medida que a quantidade de dados de entrada aumenta. Em vez de cronometrar o tempo (o que varia de máquina para máquina), o Big O foca no número de operações. O objetivo é sempre buscar a solução mais performática, especialmente quando lidamos com um grande volume de dados.",
      },
      {
        type: "paragraph",
        text: "Vamos dar uma olhada nas 'complexidades' mais comuns, do melhor para o pior cenário:",
      },
      {
        type: "table",
        headers: ["Notação", "Nome", "Descrição", "Exemplo"],
        rows: [
          [
            "O(1)",
            "Constante	",
            "O tempo de execução é o mesmo, não importa o tamanho da entrada. É o nirvana da eficiência!",
            "Acessar um elemento de um array pelo seu índice.",
          ],
          [
            "O(log n)",
            "Logarítmica",
            "O tempo de execução cresce de forma muito lenta. A cada passo, o problema é dividido.",
            "Busca binária em uma lista ordenada.",
          ],
          [
            "O(n)",
            "Linear",
            "O tempo de execução cresce na mesma proporção que a entrada. Se a entrada dobra, o tempo dobra.",
            "Percorrer todos os elementos de uma lista.",
          ],
          [
            "O(n log n)",
            "Log-Linea",
            "Um pouco mais lento que o linear, comum em algoritmos de ordenação eficientes.",
            "Algoritmos como Merge Sort e Quick Sort.",
          ],
          [
            "O(n²)",
            "Quadrática",
            "O tempo de execução cresce exponencialmente. Geralmente envolve laços aninhados. A evitar com grandes volumes de dados.",
            "Algoritmos de ordenação simples como o Bubble Sort.",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "A ideia principal com o Big O é sempre considerar o pior cenário possível. Assim, garantimos que nosso algoritmo se comportará de maneira aceitável mesmo nas condições mais desfavoráveis.",
      },
      {
        type: "heading",
        level: 2,
        text: "As Peças Fundamentais: Estruturas de Dados Básicas",
      },
      {
        type: "paragraph",
        text: "Agora que temos uma régua para medir a eficiência, vamos conhecer algumas das ferramentas essenciais que todo programador utiliza para organizar dados.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Arrays (Vetores/Listas)",
      },
      {
        type: "paragraph",
        text: "Pense em um array como uma estante com prateleiras numeradas. Cada prateleira (índice) guarda um item, e o acesso a qualquer prateleira é imediato se você souber o número dela.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Características: Elementos são armazenados em sequência na memória e acessados por um índice numérico (começando, geralmente, em 0).",
          "Pontos Fortes: Acesso a elementos é extremamente rápido.",
          "Pontos Fracos: Inserir ou remover elementos no início ou no meio pode ser lento, pois exige que todos os elementos subsequentes sejam 'deslocados'. O tamanho é geralmente fixo em linguagens de mais baixo nível.",
        ],
      },
      {
        type: "table",
        headers: ["Operação", "Big O", "Explicação"],
        rows: [
          [
            "Acesso (por índice)",
            "O(1)",
            "Rápido como um raio! Acessar array[5] leva o mesmo tempo, não importa o tamanho do array.",
          ],
          [
            "Busca (por valor)",
            "O(n)",
            "No pior caso, precisamos olhar todos os elementos para encontrar o que queremos.",
          ],
          [
            "Inserção (no final)",
            "O(1)",
            "Geralmente é rápido, a menos que o array precise ser redimensionado (amortizado).",
          ],
          [
            "Inserção (início/meio)",
            "O(n)",
            "Todos os elementos após o ponto de inserção precisam ser movidos.",
          ],
          ["Remoção (no final)", "O(1)", "Apenas remove o último elemento."],
          [
            "Remoção (início/meio)",
            "O(n)",
            "Semelhante à inserção, todos os elementos precisam ser 'puxados' para preencher o espaço.",
          ],
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "2. Linked List (Listas Ligadas/Encadeadas)",
      },
      {
        type: "paragraph",
        text: "Imagine uma caça ao tesouro. Cada pista (nó) te diz onde está o próximo item e qual o seu valor. Você só precisa saber onde a primeira pista está.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Características: Uma coleção de 'nós', onde cada nó contém um dado e um ponteiro (uma referência) para o próximo nó da sequência.",
          "Pontos Fortes: Inserção e remoção de elementos são muito eficientes, especialmente no início da lista. O tamanho é dinâmico.",
          "Pontos Fracos: O acesso e a busca por um elemento específico podem ser lentos, pois é necessário percorrer a lista desde o início.",
        ],
      },
      {
        type: "table",
        headers: ["Operação", "Big O", "Explicação"],
        rows: [
          [
            "Acesso (por índice)",
            "O(n)",
            "Para chegar ao 5º elemento, você precisa passar pelos 4 anteriores.",
          ],
          [
            "Busca (por valor)",
            "O(n)",
            "Assim como nos arrays, pode ser necessário percorrer a lista toda.",
          ],
          [
            "Inserção (no início)",
            "O(1)",
            "Basta criar um novo nó e ajustar o ponteiro do início da lista.",
          ],
          [
            "Inserção (no final)",
            "O(n)",
            "É preciso percorrer toda a lista para encontrar o último nó (*a menos que se guarde uma referência para o final).",
          ],
          [
            "Remoção (no início)",
            "O(1)",
            "Apenas ajusta o ponteiro inicial para o segundo elemento.",
          ],
          [
            "Remoção (no final)",
            "O(n)",
            "É preciso percorrer a lista para encontrar o penúltimo nó e ajustar seu ponteiro.",
          ],
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "3. Stacks (Pilhas)",
      },
      {
        type: "paragraph",
        text: "Uma pilha de pratos. Você só pode adicionar um prato no topo e remover o prato que está no topo. O último a entrar é o primeiro a sair (LIFO - Last-In, First-Out).",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Características: É uma estrutura de dados linear que segue o princípio LIFO. As operações principais são push (empilhar) e pop (desempilhar).",
          "Aplicações Comuns: Gerenciamento de chamadas de funções em programação, o botão 'voltar' de navegadores, funcionalidade de 'desfazer' (Ctrl+Z).",
        ],
      },
      {
        type: "paragraph",
        text: "As operações em uma pilha são extremamente eficientes:",
      },
      {
        type: "table",
        headers: ["Operação", "Big O", "Explicação"],
        rows: [
          [
            "Push (Inserir)",
            "O(1)",
            "Adicionar um elemento no topo é uma operação de tempo constante.",
          ],
          [
            "Pop (Remover)",
            "O(1)",
            "Remover o elemento do topo também é constante.",
          ],
          [
            "Peek (Olhar o topo)",
            "O(1)",
            "Acessar o valor do elemento do topo sem removê-lo é imediato.",
          ],
          [
            "Busca (no final)",
            "O(n)",
            "Para encontrar um elemento, pode ser necessário desempilhar tudo.",
          ],
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "4. Queues (Filas)",
      },
      {
        type: "paragraph",
        text: "Exatamente como uma fila de banco. A primeira pessoa a chegar é a primeira a ser atendida. O primeiro a entrar é o primeiro a sair (FIFO - First-In, First-Out).",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Características: Estrutura linear que segue o princípio FIFO. As operações principais são enqueue (enfileirar) e dequeue (desenfileirar).",
          "Aplicações Comuns: Gerenciamento de tarefas em sistemas operacionais, filas de impressão, processamento de requisições em servidores web.",
        ],
      },
      {
        type: "paragraph",
        text: "Assim como as pilhas, as filas são muito performáticas para suas operações principais:",
      },
      {
        type: "table",
        headers: ["Operação", "Big O", "Explicação"],
        rows: [
          [
            "Enqueue (Inserir)",
            "O(1)",
            "Adicionar um elemento ao final da fila é uma operação de tempo constante.",
          ],
          [
            "Dequeue (Remover)",
            "O(1)",
            "Remover o primeiro elemento da fila também é constante.",
          ],
          [
            "Peek (Olhar o início)",
            "O(1)",
            "Acessar o valor do primeiro elemento sem removê-lo é imediato.",
          ],
          [
            "Busca (no final)",
            "O(n)",
            "Para encontrar um elemento, pode ser necessário percorrer toda a fila.",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Entender a complexidade de cada operação nessas estruturas de dados é crucial para escrever códigos mais eficientes e escaláveis. A escolha da estrutura correta para o problema que você está resolvendo pode ser a diferença entre um programa rápido e responsivo e um que se arrasta à medida que os dados aumentam. Continue explorando e codificando!",
      },
      {
        type: "divider",
      },
    ],
  },
  {
    id: 2,
    title:
      'Além do Código que "Funciona": Um Mergulho Profundo no Artesanato do Clean Code',
    author: "Brandon Ramos",
    date: "2025-09-09T18:11:00.000Z",
    readTime: "17 minutos de leitura",
    gradient: "from-green-400 to-cyan-500",
    image: "/6.png",
    content: [
      {
        type: "heading",
        level: 2,
        text: "O Verdadeiro Custo de uma Oficina Desorganizada: Por Que o Clean Code é Importante",
      },
      {
        type: "paragraph",
        text: 'No desenvolvimento de software, existe uma tensão constante entre a velocidade e a qualidade. Prazos apertados e a pressão para entregar novas funcionalidades muitas vezes levam os desenvolvedores a um caminho perigoso: o do código "sujo" ou desorganizado. A crença de que é mais rápido "fazer funcionar agora e arrumar depois" é uma das ilusões mais custosas da nossa indústria. A realidade é que, embora um código ruim possa funcionar inicialmente, ele inevitavelmente cobra seu preço, transformando o que era um projeto ágil em um pântano de complexidade e frustração.',
      },
      {
        type: "heading",
        level: 3,
        text: 'A Ilusão da Velocidade e a Realidade da "Bagunça"',
      },
      {
        type: "paragraph",
        text: 'Robert C. Martin, em sua obra seminal Clean Code: A Handbook of Agile Software Craftsmanship, argumenta que essa busca inicial por velocidade é contraproducente. Ele afirma que "a única maneira de ir rápido é ir bem". Essa aparente contradição está no cerne da filosofia do Clean Code. Um código desorganizado, ou "a bagunça", age como um atrito constante no processo de desenvolvimento. Cada nova funcionalidade, cada correção de bug, torna-se exponencialmente mais difícil porque os desenvolvedores precisam primeiro decifrar um emaranhado de lógica confusa antes de poderem fazer qualquer progresso.',
      },
      {
        type: "paragraph",
        text: 'O impacto dessa bagunça não é meramente técnico; é profundamente econômico. Todos os anos, inúmeras horas e recursos significativos são desperdiçados devido a códigos mal escritos. Um código que não é limpo pode, literalmente, "colocar uma organização de desenvolvimento de joelhos". Projetos que começam com grande velocidade e produtividade entram em um declínio acentuado, onde cada pequena mudança leva semanas, e a equipe de desenvolvimento, antes produtiva, agora gasta a maior parte do tempo em manutenção e depuração. Em casos extremos, a dívida técnica acumulada pode levar uma empresa à falência, pois a capacidade de inovar e responder ao mercado é completamente paralisada pela complexidade do próprio sistema.',
      },
      {
        type: "heading",
        level: 3,
        text: 'Definindo "Clean Code": Uma Filosofia de Artesanato',
      },
      {
        type: "paragraph",
        text: 'Então, o que exatamente é "Clean Code"? Não se trata de um conjunto de regras rígidas e inflexíveis, mas sim de uma "filosofia de desenvolvimento" , uma abordagem que encara a programação como uma forma de "artesanato" (craftsmanship). O objetivo é instilar nos programadores os valores de um artesão de software, que se orgulha não apenas da funcionalidade de sua criação, mas também de sua elegância, clareza e durabilidade.',
      },
      {
        type: "paragraph",
        text: 'As definições, embora variadas, convergem para um núcleo comum de ideias. Código limpo é aquele que é fácil de ler, entender e manter, mesmo por outros desenvolvedores. Ele é simples, direto e "lido como uma prosa bem escrita". Em um código limpo, a intenção do desenvolvedor original jamais é obscurecida por uma estrutura confusa ou nomes enigmáticos. A distinção crucial é que mesmo um código ruim pode funcionar. A diferença está na sustentabilidade. Dado que a proporção de tempo gasto lendo código versus escrevendo-o é de aproximadamente 10 para 1, a legibilidade não é um luxo, mas uma necessidade econômica e profissional.',
      },
      {
        type: "heading",
        level: 3,
        text: 'A "Regra do Escoteiro": O Princípio Orientador',
      },
      {
        type: "paragraph",
        text: 'Para combater a entropia natural do software — a tendência de um sistema se tornar mais desordenado com o tempo —, Martin propõe um princípio orientador simples e poderoso: a "Regra do Escoteiro". A regra diz: "Sempre deixe o acampamento mais limpo do que você o encontrou".',
      },
      {
        type: "paragraph",
        text: 'Aplicada ao desenvolvimento de software, essa regra se traduz em uma responsabilidade profissional contínua. Toda vez que um desenvolvedor precisa alterar um módulo de código — seja para corrigir um bug ou adicionar uma nova funcionalidade —, ele tem a obrigação de deixar aquele pequeno pedaço do sistema um pouco melhor do que estava antes. Isso pode ser algo tão simples quanto renomear uma variável para que ela seja mais clara, dividir uma função longa em duas menores ou remover um comentário redundante. Essa prática combate diretamente a desculpa comum de "mas não é o meu código!". Em uma base de código limpa, todos são donos da qualidade coletiva.',
      },
      {
        type: "paragraph",
        text: 'Essa abordagem incremental é a chave para a sustentabilidade do software. Em vez de planejar grandes e arriscados projetos de "limpeza" que raramente são aprovados, a Regra do Escoteiro distribui o esforço de manutenção de forma contínua e em pequenas doses. É uma estratégia que transforma a manutenção de um fardo em um hábito.',
      },
      {
        type: "paragraph",
        text: "Essa filosofia transcende a prática individual de codificação e se torna um imperativo cultural e econômico. A Regra do Escoteiro só funciona se for adotada por toda a equipe, transformando a cultura de uma que valoriza a velocidade individual de curto prazo para uma que preza pela propriedade coletiva e pela melhoria contínua do ativo mais valioso da empresa: o código-fonte. Adotar o Clean Code, portanto, não é apenas uma decisão técnica; é uma decisão estratégica de negócios que prioriza o valor a longo prazo e a agilidade sustentável sobre ganhos de produtividade ilusórios e passageiros.",
      },
      {
        type: "heading",
        level: 2,
        text: "Os Pilares da Legibilidade: Nomes, Funções e Comentários",
      },
      {
        type: "paragraph",
        text: "No nível mais fundamental, o código limpo é construído sobre três pilares que determinam sua legibilidade imediata: como nomeamos as coisas, como estruturamos as funções e como (e se) usamos comentários. Dominar essas práticas é o primeiro passo para transformar um código funcional em um código compreensível e elegante",
      },
      {
        type: "heading",
        level: 4,
        text: "Subseção 2.1: Nomear como Narrar",
      },
      {
        type: "paragraph",
        text: "A escolha de nomes em um programa é talvez a atividade mais simples, porém mais impactante, que um desenvolvedor realiza. Um bom nome transforma o código de um conjunto de instruções enigmáticas para uma máquina em uma narrativa clara para um ser humano. O princípio central é que o nome de uma variável, função ou classe deve revelar sua intenção, seu propósito e como ele é usado. Um código bem nomeado torna-se autoexplicativo, eliminando a necessidade de explicações adicionais.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Use Nomes que Revelem a Intenção: A diferença entre int d; e int elapsedTimeInDays; é a diferença entre ambiguidade e clareza. O primeiro exige que o leitor investigue o contexto para entender seu propósito, enquanto o segundo declara sua intenção de forma inequívoca.",
          "Evite Desinformação: Os nomes devem ser precisos. Não chame uma estrutura de dados de accountList se ela não for tecnicamente um objeto do tipo List. Nomes imprecisos criam expectativas falsas e levam a suposições incorretas.",
          'Faça Distinções Significativas: Evite "palavras de ruído" que não adicionam informação real. Nomes como ProductInfo ou ProductData são funcionalmente indistinguíveis de Product e apenas adicionam desordem. Se nomes diferentes são usados, eles devem corresponder a conceitos semanticamente diferentes.',
          "Use Nomes Pronunciáveis e Pesquisáveis: Se você não consegue pronunciar um nome em voz alta durante uma discussão com um colega, ele é um nome ruim. genymdhms é um exemplo de um nome impronunciável, enquanto generationTimestamp facilita a comunicação. Nomes mais longos e descritivos são preferíveis a abreviações curtas, pois podem ser facilmente encontrados com ferramentas de busca em toda a base de código.",
          "Siga as Convenções: A consistência é fundamental. Classes e objetos devem ter nomes de substantivos ou frases nominais (ex: Customer, AccountPage), enquanto os métodos devem ter nomes de verbos ou frases verbais (ex: deletePage, saveChanges). Ao escolher um verbo para uma operação, como fetch, retrieve ou get, use-o de forma consistente em todo o projeto.",
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Subseção 2.2: Funções como Ferramentas Focada",
      },
      {
        type: "paragraph",
        text: "Se os nomes são as palavras de nosso código, as funções são as frases e os parágrafos. Para que a narrativa seja clara, as funções devem ser concisas e focadas.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          'A Primeira e a Segunda Regras das Funções: Robert Martin estabelece duas regras simples: "Elas devem ser pequenas" e "Elas devem ser menores do que isso". Uma função raramente deve ultrapassar 20 linhas, e um tamanho ideal gira em torno de 5 linhas ou menos. Funções pequenas são mais fáceis de nomear, entender, testar e reutilizar.',
          'Fazer Apenas Uma Coisa (Princípio da Responsabilidade Única): Este é o princípio mais importante para funções. Uma função deve ter apenas uma responsabilidade e, portanto, apenas uma razão para mudar. Um bom teste para saber se uma função está fazendo mais de uma coisa é tentar descrever o que ela faz. Se você precisa usar a palavra "e" na descrição, a função provavelmente está violando este princípio e deve ser dividida. Isso torna o código mais fácil de depurar e testar, pois cada unidade de lógica está isolada.',
          'Um Nível de Abstração por Função: Para manter a clareza, todas as declarações dentro de uma função devem estar no mesmo nível de abstração. Uma função não deve misturar conceitos de alto nível (como regras de negócio) com detalhes de baixo nível (como manipulação de strings). Funções de alto nível devem ler como uma série de parágrafos, onde cada parágrafo é uma chamada para outra função que lida com um nível de abstração inferior. Isso é conhecido como o "Princípio Stepdown", onde o código se lê como uma narrativa de cima para baixo.',
          'Evitar Efeitos Colaterais (Separação Comando-Consulta): Uma função deve ou fazer algo (mudar o estado de um objeto ou do sistema — um "Comando") ou retornar algo (responder a uma pergunta sobre o sistema — uma "Consulta"), mas nunca ambos. Funções que alteram o estado de forma inesperada, como modificar uma variável de entrada ou uma variável global, são chamadas de "efeitos colaterais" e são uma fonte comum de bugs difíceis de rastrear.',
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Subseção 2.3: A Filosofia dos Comentários",
      },
      {
        type: "paragraph",
        text: 'A visão de Martin sobre comentários é uma das mais controversas do livro. O princípio central é que os comentários não são inerentemente bons; na verdade, eles são frequentemente um sinal de "falha" em se expressar de forma clara através do próprio código. O objetivo final de um desenvolvedor deve ser escrever um código tão expressivo e autoexplicativo que não precise de comentários para ser compreendido.',
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Comentários Ruins: Incluem comentários que simplesmente repetem o que o código já diz (ex: i++; // incrementa i), comentários enganosos que não foram atualizados junto com o código, e código comentado. Código comentado deve ser simplesmente apagado; o sistema de controle de versão (como o Git) é a memória do projeto.",
          "Comentários Aceitáveis: Existem exceções. Comentários legais, como avisos de direitos autorais, são necessários. Comentários que esclarecem algoritmos complexos, explicam o porquê por trás de uma decisão de design não óbvia, ou alertam sobre as consequências de modificar um determinado trecho de código podem ser valiosos. A regra geral é que os comentários devem explicar o porquê de algo, não o o que está sendo feito.",
        ],
      },
      {
        type: "paragraph",
        text: "A controvérsia surge porque muitos desenvolvedores argumentam que essa postura anti-comentário, quando levada ao extremo, leva a uma falta de documentação adequada, especialmente para a lógica de negócios complexa que não pode ser totalmente expressa apenas pelos nomes das variáveis e funções.",
      },
      {
        type: "paragraph",
        text: 'Esses três pilares — nomes, funções e comentários — não são independentes. Eles formam um sistema simbiótico. A necessidade de um comentário muitas vezes surge de um nome ruim ou de uma função excessivamente complexa. Se uma função é chamada calculateSalesTaxForInterstateOrderWithPromotionalDiscount() e ela faz exatamente isso e nada mais, a necessidade de um comentário que diga // Calcula o imposto sobre vendas... torna-se completamente redundante. A postura rigorosa contra comentários é, portanto, uma consequência lógica da aplicação rigorosa dos princípios de nomes significativos e funções pequenas. Um comentário é visto como um "desodorante" para um código que "cheira mal" — um sintoma de um problema mais profundo na clareza e na estrutura do próprio código.',
      },
      {
        type: "heading",
        level: 2,
        text: "Integridade Arquitetural: Objetos, Erros e Limites",
      },
      {
        type: "paragraph",
        text: "Depois de estabelecer a base da legibilidade no nível micro, o Clean Code expande seu foco para princípios estruturais de nível superior. Esses princípios garantem que o software não seja apenas fácil de ler linha a linha, but também robusto, resiliente e bem organizado em sua totalidade. Trata-se de construir um sistema com integridade arquitetural, onde os componentes se encaixam de forma limpa e as fronteiras são bem definidas.",
      },
      {
        type: "heading",
        level: 4,
        text: "Subseção 3.1: A Antissimetria de Objetos e Estruturas de Dados",
      },
      {
        type: "paragraph",
        text: "Um dos conceitos mais sutis, mas importantes, abordados no livro é a distinção fundamental entre objetos e estruturas de dados. Compreender essa diferença permite que um desenvolvedor tome decisões arquiteturais mais informadas.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Objetos escondem seus dados por trás de abstrações (variáveis privadas) e expõem comportamentos (métodos públicos) que operam nesses dados. O objetivo de um objeto é ocultar a implementação e apresentar uma interface abstrata para manipulação.",
          "Estruturas de Dados expõem seus dados (variáveis públicas ou acessíveis via getters/setters) e têm poucas ou nenhuma função significativa associada a elas. Elas são essencialmente contêineres de dados passivos, projetados para serem operados por lógicas externas.",
        ],
      },
      {
        type: "paragraph",
        text: 'A "antissimetria" entre os dois reside em como eles lidam com a mudança e a extensibilidade:',
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Código Procedural (usando Estruturas de Dados): Facilita a adição de novas funções sem alterar as estruturas de dados existentes. Por exemplo, em um sistema com estruturas para Circle e Rectangle, adicionar uma nova função perimeter() à classe Geometry é fácil. No entanto, adicionar uma nova forma (uma nova estrutura de dados como Triangle) é difícil, pois exige a modificação de todas as funções existentes (area(), perimeter(), etc.) para lidar com o novo tipo.",
          "Código Orientado a Objetos: Facilita a adição de novas classes (novos tipos) sem alterar as funções existentes, graças ao polimorfismo. Adicionar uma nova classe Triangle que implementa a interface Shape não requer nenhuma mudança no código que usa objetos Shape. No entanto, adicionar uma nova função (um novo método como perimeter()) é difícil, pois exige que a interface Shape seja alterada e que todas as classes que a implementam (Circle, Rectangle, etc.) sejam modificadas.",
        ],
      },
      {
        type: "paragraph",
        text: 'A lição aqui é que um desenvolvedor maduro reconhece que "nem tudo é um objeto". A escolha entre usar uma abordagem orientada a objetos ou uma abordagem procedural com estruturas de dados depende do tipo de mudança que é mais provável de ocorrer no futuro do sistema. Se a adição de novos tipos de dados é mais provável, a abordagem OO é superior. Se a adição de novas operações sobre os dados existentes é mais provável, uma abordagem procedural pode ser mais simples e direta.',
      },
      {
        type: "heading",
        level: 4,
        text: "Subseção 3.2: Construindo Código Resiliente: Tratamento de Erros Limpo",
      },
      {
        type: "paragraph",
        text: "O tratamento de erros é uma parte inevitável e crítica de qualquer software robusto. No entanto, se não for tratado com cuidado, o código de tratamento de erros pode facilmente obscurecer a lógica principal do programa, tornando-o difícil de ler e manter.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Use Exceções em Vez de Códigos de Retorno: Uma prática antiga, comum em linguagens como C, é retornar códigos de erro de funções. Isso força o código chamador a verificar imediatamente o código de retorno, misturando a lógica de tratamento de erros com o fluxo normal do programa. Isso resulta em condicionais aninhadas e código poluído. As exceções, por outro lado, separam o processamento de erros do caminho feliz. A lógica de negócio principal pode ser escrita de forma limpa, e o tratamento de erros é gerenciado em blocos catch separados, resultando em um código muito mais legível.",
          "Escreva as Declarações try-catch-finally Primeiro: Ao escrever código que pode lançar exceções, é uma boa prática começar pela estrutura try-catch-finally. Isso força o desenvolvedor a pensar sobre o escopo da operação e a garantir que, independentemente do que aconteça dentro do bloco try, o programa será deixado em um estado consistente e válido.",
          "Forneça Contexto com as Exceções: Uma exceção que é lançada deve conter informações suficientes para que o erro possa ser diagnosticado sem a necessidade de depurar o código-fonte. Ela deve incluir uma mensagem de erro clara, a operação que falhou e o tipo da falha. Isso é crucial para a criação de logs úteis e para a rápida identificação de problemas em produção.",
          "Não Retorne null e Não Passe null: Retornar null de um método é uma prática ruim, pois cria um trabalho extra para o chamador, que agora precisa verificar se o retorno é nulo antes de usá-lo. Isso é uma fonte comum de NullPointerExceptions. Alternativas melhores incluem lançar uma exceção ou retornar um Objeto de Caso Especial (por exemplo, retornar uma lista vazia em vez de null para um método que busca uma coleção de itens). Passar null como argumento para um método é ainda pior, pois pode causar falhas em partes do sistema muito distantes do local original da chamada, tornando a depuração um pesadelo.",
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Subseção 3.3: Protegendo Suas Fronteiras: Encapsulando Limites",
      },
      {
        type: "paragraph",
        text: 'Nenhum software existe isoladamente. Quase todos os sistemas dependem de bibliotecas de terceiros, frameworks ou interagem com APIs externas. Esses pontos de integração são "limites" (boundaries) do sistema e representam uma fonte de risco, pois estão fora do nosso controle.',
      },
      {
        type: "paragraph",
        text: "A abordagem do Clean Code para gerenciar esse risco é o encapsulamento. Em vez de permitir que o código da sua aplicação se acople diretamente a uma API de terceiros, você deve esconder essa API atrás de uma interface que você controla. Essa técnica é frequentemente implementada usando os padrões de projeto Adapter ou Wrapper.",
      },
      {
        type: "paragraph",
        text: "Por exemplo, em vez de espalhar chamadas para uma biblioteca de logging de terceiros por toda a sua base de código, você criaria sua própria interface ILogger e uma classe ThirdPartyLoggerAdapter que implementa essa interface e, internamente, delega as chamadas para a biblioteca real. O resto da sua aplicação dependeria apenas da sua interface ILogger.",
      },
      {
        type: "paragraph",
        text: "Os benefícios dessa abordagem são imensos:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Minimização de Dependências: O acoplamento com a biblioteca externa fica contido em um único lugar.",
          "Facilidade de Manutenção: Se a biblioteca de terceiros for atualizada com uma API que quebra a compatibilidade, apenas a classe adaptadora precisa ser modificada. Se você decidir trocar de biblioteca, novamente, apenas o adaptador precisa ser reescrito.",
          "Melhora da Testabilidade: Durante os testes, em vez de interagir com o sistema externo real (que pode ser lento ou indisponível), você pode facilmente substituir o adaptador real por um test double (como um mock ou um stub) que simula o comportamento da fronteira. Isso torna seus testes mais rápidos, confiáveis e independentes.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "O Motor da Limpeza: Desenvolvimento Orientado a Testes e Refatoração",
      },
      {
        type: "paragraph",
        text: "A filosofia do Clean Code não é apenas um conjunto de ideais a serem aspirados; ela é sustentada por uma disciplina prática que a torna alcançável e sustentável. Essa disciplina é o Desenvolvimento Orientado a Testes (TDD - Test-Driven Development), um processo que não apenas valida a correção do código, mas também guia seu design em direção à clareza e simplicidade. O TDD fornece a rede de segurança necessária para a prática contínua da refatoração, o ato de melhorar o design do código existente.",
      },
      {
        type: "heading",
        level: 3,
        text: "As Três Leis do TDD",
      },
      {
        type: "paragraph",
        text: "O TDD é governado por um ciclo rigoroso e rápido, encapsulado nas três leis de Robert C. Martin :",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Você não pode escrever nenhum código de produção a menos que seja para fazer um teste de unidade que está falhando passar.",
          "Você não pode escrever mais de um teste de unidade do que o suficiente para falhar (e falhas de compilação contam como falhas).",
          "Você não pode escrever mais código de produção do que o suficiente para passar no único teste que está falhando.",
        ],
      },
      {
        type: "paragraph",
        text: "Essas leis forçam um ciclo de desenvolvimento muito curto, medido em segundos ou minutos, não em horas ou dias. O processo começa com a escrita de um pequeno teste para uma funcionalidade que ainda não existe. Naturalmente, esse teste falha. Em seguida, o desenvolvedor escreve a quantidade mínima de código de produção necessária para fazer aquele teste específico passar. Uma vez que o teste passa, o ciclo se repete para a próxima pequena parte da funcionalidade.",
      },
      {
        type: "heading",
        level: 3,
        text: 'O Ciclo "Vermelho-Verde-Refatorar"',
      },
      {
        type: "paragraph",
        text: 'Esse processo é mais comumente conhecido como o ciclo "Vermelho-Verde-Refatorar" :',
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Vermelho: Escreva um teste que falha. A falha é importante; ela prova que o teste é capaz de detectar a ausência da funcionalidade e que o código que você está prestes a escrever é realmente necessário.",
          'Verde: Escreva o código mais simples possível para fazer o teste passar. Neste ponto, o objetivo não é a elegância ou a eficiência. O objetivo é apenas fazer a barra de teste ficar verde. O código pode ser "sujo", redundante ou subótimo.',
          'Refatorar: Este é o passo crucial onde o Clean Code acontece. Agora que a funcionalidade está correta e protegida por um teste, o desenvolvedor tem a confiança para "limpar a bagunça". É aqui que os princípios de Clean Code são aplicados: nomes são melhorados, funções são encurtadas, a duplicação é removida e o design geral é aprimorado.',
        ],
      },
      {
        type: "paragraph",
        text: "A suíte de testes atua como uma rede de segurança. Ela permite que os desenvolvedores façam refatorações agressivas e mudanças estruturais com a confiança de que, se algo quebrar, um teste irá falhar imediatamente, apontando o local exato do problema. Sem essa rede de segurança, o medo de introduzir regressões muitas vezes paralisa os esforços de melhoria do código, levando à sua degradação gradual.",
      },
      {
        type: "paragraph",
        text: 'O TDD não é apenas uma metodologia de teste; é fundamentalmente uma metodologia de design. A necessidade de escrever um teste antes do código de produção impõe restrições que naturalmente guiam o desenvolvedor para um bom design. Para que um pedaço de código seja testável, ele deve ser desacoplado de suas dependências. Por exemplo, é difícil testar uma classe que se conecta diretamente a um banco de dados. A necessidade de testar essa classe força o desenvolvedor a extrair a lógica do banco de dados para trás de uma interface, que pode ser substituída por um  mock durante o teste. Isso leva diretamente ao princípio de "Proteger Suas Fronteiras".',
      },
      {
        type: "paragraph",
        text: "Da mesma forma, uma função que faz muitas coisas é extremamente difícil de testar, pois requer a configuração de múltiplas condições e a verificação de múltiplos resultados. A dificuldade em escrever um teste para uma função complexa é um sinal claro de que ela está violando o Princípio da Responsabilidade Única. O TDD, portanto, pressiona o desenvolvedor a dividir a lógica em funções menores e mais focadas, simplesmente para tornar o ato de escrever o teste mais fácil.",
      },
      {
        type: "paragraph",
        text: 'Nesse sentido, o TDD não é uma prática que meramente permite o código limpo; é uma disciplina que o força. O passo de refatoração não é uma reflexão tardia opcional; é uma parte integrante e obrigatória do ciclo de desenvolvimento. Ele incorpora a "Regra do Escoteiro" diretamente no fluxo de trabalho diário. O processo em si atua como uma função de força, compelindo o desenvolvedor a criar um design limpo, modular e sustentável como um pré-requisito para fazer os testes passarem. Os testes são o meio, e o fim é um sistema bem projetado e de alta qualidade.',
      },
      {
        type: "heading",
        level: 2,
        text: "Uma Lente Crítica: Clean Code no Cenário de Desenvolvimento Moderno",
      },
      {
        type: "paragraph",
        text: 'Nenhuma metodologia é uma panaceia, e o Clean Code de Robert C. Martin não é exceção. Embora seus princípios tenham influenciado profundamente uma geração de desenvolvedores, é crucial abordá-lo com uma perspectiva crítica e pragmática. A aplicação cega de suas regras, sem considerar o contexto e as nuances, pode levar a resultados contraproducentes. Um desenvolvedor experiente entende o livro não como um manual de instruções rígido, mas como uma coleção de heurísticas para desenvolver um "sentido" de qualidade de código.',
      },
      {
        type: "heading",
        level: 3,
        text: "O Perigo do Dogma",
      },
      {
        type: "paragraph",
        text: 'Uma das críticas mais comuns ao livro é sua apresentação dogmática, que pode ser uma "faca de dois gumes". O texto é frequentemente descrito como excessivamente "geral, vago e impreciso", o que pode levar a interpretações extremas. O maior risco reside em desenvolvedores, especialmente os menos experientes, aplicarem as regras de forma literal e universal, sem compreender os custos e os benefícios de cada decisão em um cenário específico. A busca pela "limpeza" a todo custo pode se transformar em um purismo que prejudica a produtividade e a clareza.',
      },
      {
        type: "heading",
        level: 3,
        text: "Más Aplicações Comuns e Suas Consequências",
      },
      {
        type: "paragraph",
        text: "Quando os princípios do Clean Code são aplicados sem discernimento, eles podem criar novos problemas em vez de resolver os antigos.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          'Granularidade Excessiva de Funções: A regra "funções devem ser menores que isso" é um exemplo clássico. Quando levada ao extremo, pode resultar em uma proliferação de classes e métodos minúsculos e excessivamente abstraídos. Isso pode prejudicar a legibilidade em vez de melhorá-la, forçando um desenvolvedor a navegar por dezenas de arquivos e funções pequenas para entender um fluxo de trabalho simples. O código se torna fragmentado, uma condição às vezes chamada de "código ravióli", onde é impossível obter uma visão geral da lógica.',
          'Uso Indevido do DRY ("Dont Repeat Yourself"): O princípio de não se repetir é poderoso, mas sua aplicação cega pode levar a abstrações prematuras ou incorretas. Às vezes, dois trechos de código parecem idênticos, mas representam conceitos de negócio diferentes que apenas coincidem em sua implementação atual. Abstraí-los em uma única função acopla esses conceitos, tornando o código mais frágil. Se um dos conceitos de negócio mudar, a abstração compartilhada terá que ser modificada, potencialmente quebrando o outro.',
          'A Falácia do "Código Autoexplicativo": A forte postura contra comentários pode ser mal interpretada como uma desculpa para não escrever nenhuma documentação. Embora o código deva ser o mais claro possível, certas lógicas de negócio complexas, decisões arquiteturais importantes ou o "porquê" por trás de uma solução não óbvia não podem ser totalmente expressos apenas pelo código. Nesses casos, a ausência de documentação adequada é uma falha, não uma virtude.',
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Encontrando o Equilíbrio Pragmático",
      },
      {
        type: "paragraph",
        text: "A chave para aplicar o Clean Code de forma eficaz é o pragmatismo. As regras do livro devem ser vistas como heurísticas e ferramentas de pensamento, não como leis imutáveis. O objetivo final é reduzir a complexidade e aumentar a clareza. Se a aplicação de um princípio está, na verdade, aumentando a complexidade por meio de engenharia excessiva, então ele está sendo mal utilizado.",
      },
      {
        type: "paragraph",
        text: "É vital lembrar que as práticas de codificação táticas, como o tamanho da função, não devem se sobrepor a princípios de design de nível superior, como baixo acoplamento e alta coesão. Às vezes, uma função um pouco mais longa que mantém uma lógica coesa em um só lugar é preferível a cinco funções minúsculas espalhadas por vários arquivos. O contexto é rei.",
      },
      {
        type: "paragraph",
        text: 'Para auxiliar no diagnóstico e na aplicação prática desses princípios, a tabela a seguir mapeia "cheiros de código" (code smells) comuns para suas soluções de refatoração baseadas no Clean Code.',
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusão: De Codificador a Artesão",
      },
      {
        type: "paragraph",
        text: "A jornada através dos princípios do Clean Code é, em sua essência, uma transição de ser meramente um codificador — alguém que escreve instruções para uma máquina — para se tornar um artesão de software — alguém que constrói sistemas duradouros, elegantes e compreensíveis para seres humanos. A mensagem central do livro é que a qualidade do código não é um luxo secundário, mas a base sobre a qual a agilidade, a produtividade e a sustentabilidade de um projeto são construídas.",
      },
      {
        type: "paragraph",
        text: 'Foi demonstrado que o custo de um código desorganizado é real e debilitante, retardando o desenvolvimento e sufocando a inovação. A filosofia do Clean Code, guiada pela "Regra do Escoteiro", oferece um caminho para gerenciar essa complexidade de forma incremental e contínua. Os pilares da legibilidade — nomes significativos, funções pequenas e focadas, e um uso criterioso de comentários — formam a base da prática diária. Em um nível mais alto, a integridade arquitetural é mantida através de um tratamento de erros robusto, uma compreensão clara das fronteiras do sistema e uma escolha deliberada entre objetos e estruturas de dados.',
      },
      {
        type: "paragraph",
        text: "A disciplina do Desenvolvimento Orientado a Testes (TDD) não foi apresentada apenas como uma técnica de teste, mas como o motor que impulsiona o design limpo, fornecendo a confiança necessária para refatorar o código de forma contínua e destemida. No entanto, também foi ressaltado que esses princípios não são dogmas a serem seguidos cegamente. O verdadeiro artesanato reside na capacidade de aplicar essas heurísticas com sabedoria, equilibrando a pureza teórica com as necessidades pragmáticas de cada projeto.",
      },
      {
        type: "paragraph",
        text: "O caminho para se tornar um desenvolvedor de código limpo é uma jornada contínua de aprendizado e aprimoramento, não um destino final. A profusão de regras e princípios pode parecer avassaladora no início. Portanto, o chamado à ação não é tentar dominar tudo de uma vez. Em vez disso, comece pequeno. Na sua próxima sessão de codificação, escolha um único princípio para focar. Renomeie uma variável para que ela revele melhor sua intenção. Divida uma função de vinte linhas em duas de dez. Remova um comentário que apenas repete o que o código já diz.",
      },
      {
        type: "paragraph",
        text: "É através desses pequenos e consistentes atos de cuidado e profissionalismo que o hábito do artesanato é construído. O objetivo final não é apenas escrever código que funciona, mas criar código que seja elegante, sustentável e um prazer para os outros — e para o seu futuro eu — lerem e manterem.",
      },
      {
        type: "divider",
      },
    ],
  },
  {
    id: 3,
    title:
      "A Resiliência do Fluxo: O que Taoísmo, Estoicismo e Nietzsche nos Ensinam sobre Viver no Caos.",
    author: "Brandon Ramos",
    date: "2025-10-27T18:11:00.000Z",
    readTime: "10 minutos de leitura",
    gradient: "from-green-400 to-cyan-500",
    image: "/artigo3ResilienciaTaoista.png",
    content: [
      {
        type: "heading",
        level: 2,
        text: "A Introdução: A Ilusão do Controle",
      },
      {
        type: "paragraph",
        text: "Vivemos tempos obcecados pela otimização. Nossos calendários são perfeitamente sincronizados, nossas dietas são calculadas em macros, e nossos planos de carreira são desenhados em diagramas de Gantt com cinco anos de antecedência. Exige-se de nós um controle absoluto sobre um mundo que, ironicamente, nunca pareceu tão caótico.",
      },
      {
        type: "paragraph",
        text: 'Essa pressão constante para gerenciar o incontrolável gera a ansiedade que define nossos dias. Quando as coisas inevitavelmente saem do roteiro — uma crise global, um projeto que falha, um relacionamento que termina — nossa primeira reação é tentar "consertar" o mundo, forçá-lo a voltar para os nossos eixos.',
      },
      {
        type: "paragraph",
        text: "É aqui que a noção popular de resiliência nos trai.",
      },
      {
        type: "paragraph",
        text: 'Fomos ensinados que ser resiliente é ser como um carvalho: rígido, forte, inabalável. É sobre "aguentar firme", "cerrar os punhos" e "não se deixar abater". É a mentalidade do hustle, que vê o sono como fraqueza e a vulnerabilidade como um bug a ser corrigido.',
      },
      {
        type: "paragraph",
        text: "O problema é que o carvalho, embora majestoso, é inflexível. Diante de uma tempestade forte o suficiente, ele não enverga. Ele racha.",
      },
      {
        type: "paragraph",
        text: 'Em dias difíceis, a rigidez não é força; é fragilidade. Tentar controlar o incontrolável não é resiliência; é uma receita para o burnout. Se a nossa estratégia para lidar com o caos é simplesmente "ser mais forte" que ele, estamos fadados a quebrar.',
      },
      {
        type: "paragraph",
        text: "Mas e se existisse outra forma? E se a verdadeira força não estivesse na rigidez, mas na fluidez? E se a resiliência não fosse sobre enfrentar a tempestade, mas sobre aprender a dançar com o vento?\nFilosofias milenares como o Taoísmo, e pensadores disruptivos como os Estoicos e Nietzsche, já exploravam essa ideia há séculos. Eles nos oferecem um framework diferente: a resiliência não como uma rocha que resiste à água, mas como a própria água, que contorna a rocha, se adapta e, no fim, sempre encontra seu caminho.",
      },
      {
        type: "heading",
        level: 2,
        text: "A Sabedoria do Tao: A Resiliência como Fluidez",
      },
      {
        type: "paragraph",
        text: "Se a resiliência ocidental é o carvalho, a resiliência oriental é o bambu. O bambu parece frágil, mas sobrevive à tempestade precisamente porque ele se curva. Ele cede ao vento, toca o chão se necessário, e quando a tempestade passa, ele simplesmente volta ao seu lugar. Ele não resiste ao vento; ele dança com o vento. Essa é a primeira grande lição do Taoísmo para um mundo caótico. No coração dessa filosofia está um dos conceitos mais mal compreendidos do Oriente: Wu Wei (無為).",
      },
      {
        type: "paragraph",
        text: 'A tradução literal, "não-ação", é péssima. Ela sugere passividade, apatia, uma espécie de desistência preguiçosa. Mas o Wu Wei é o oposto disso. Ele não é "não fazer nada"; é a "ação sem esforço" ou, melhor ainda, a "não-resistência". Wu Wei é a arte de saber quando agir e quando parar de forçar. É parar de remar desesperadamente contra uma correnteza que não podemos vencer. Em vez disso, o Wu Wei nos convida a entender a direção da correnteza e usar sua própria força a nosso favor. Pense na última vez que você tentou forçar a solução de um problema — seja uma discussão acalorada ou um bug num código. Quanto mais você "forçava", mais o problema resistia. A solução, muitas vezes, só aparecia quando você "desistia", ia tomar um café ou dormir. Ao relaxar a sua resistência, você permitiu que o caminho se apresentasse. Isso é Wu Wei.',
      },
      {
        type: "paragraph",
        text: "Lao Tsé, o lendário autor do Tao Te Ching, usava uma metáfora ainda mais poderosa: a água.",
      },
      {
        type: "blockquote",
        text: "Nada no mundo é mais suave e flexível que a água. No entanto, para atacar o que é duro e forte, nada a supera.",
      },
      {
        type: "paragraph",
        text: 'A água é o exemplo perfeito de resiliência taoísta. Ela é suave, não tem forma própria — ela assume a forma do recipiente. Mas essa suavidade é sua maior força. Ela contorna obstáculos sem esforço. Com o tempo, a persistência suave da água é capaz de erodir a rocha mais dura. Para o Taoísmo, ser resiliente não é ser a rocha (o problema); é ser a água. Quando encontramos um problema "incontrolável" (uma rocha no nosso caminho), a nossa tendência é bater de frente, tentar explodir a rocha. A água nos ensina um caminho diferente: contorne-a. Adapte-se a ela. Siga o fluxo.',
      },
      {
        type: "heading",
        level: 2,
        text: "O Diálogo dos Sábios: Ferramenta e Atitude",
      },
      {
        type: "paragraph",
        text: 'A sabedoria do Tao de "fluir" com o incontrolável não surgiu no vácuo. Curiosamente, no Ocidente, outras mentes brilhantes chegaram a conclusões radicalmente semelhantes sobre como lidar com a ansiedade do caos.',
      },
      {
        type: "paragraph",
        text: "O primeiro paralelo é quase óbvio: o Estoicismo.",
      },
      {
        type: "paragraph",
        text: 'Enquanto o Taoísmo nos deu a fluidez (a água), o Estoicismo nos deu a ferramenta (o filtro). Para filósofos como Epicteto, a fonte de todo sofrimento humano era simples: confundir o que podemos controlar com o que não podemos. A solução deles? A "Dicotomia do Controle". Uma regra brutalmente simples: concentre 100% da sua energia nas suas próprias ações, julgamentos e reações. Todo o resto — o que os outros pensam, a economia, o clima, o passado — está fora do seu controle. Aceite isso serenamente. É a contraparte romana direta do Wu Wei: pare de resistir ao que não é seu para mudar.',
      },
      {
        type: "paragraph",
        text: 'Se o Estoico aceita o destino e o Taoísta flui com ele, Nietzsche nos convida a amá-lo. Ele nos deu o conceito de Amor Fati — o "Amor ao Destino". Para Nietzsche, as imperfeições, os problemas e o caos não são coisas a serem toleradas ou contornadas; são as próprias condições que nos forjam. Abraçar o destino não é resignação, é paixão. É olhar para a sua vida, com todas as suas dificuldades incontroláveis, e dizer: "Eu não queria que fosse de outra forma. Eu amo isso." É a resiliência não como aceitação, mas como afirmação.',
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusão: De Vítima a Artista do Caos",
      },
      {
        type: "paragraph",
        text: 'A resiliência que nos foi vendida — a do carvalho, da rigidez, do "aguente firme" — é uma armadilha. Ela nos torna frágeis precisamente porque nos ensina a resistir ao inevitável. Ela nos posiciona como vítimas passivas de um mundo caótico que insiste em não seguir nossos planos.',
      },
      {
        type: "paragraph",
        text: "Mas, como vimos, as grandes filosofias de sabedoria nos oferecem uma alternativa radical.",
      },
      {
        type: "paragraph",
        text: "O Taoísmo nos deu o Caminho (Tao). Ele nos ensinou a trocar a força bruta pela flexibilidade da água e a resistência fútil pela ação sem esforço (Wu Wei). Ele nos convidou a sermos como o bambu: envergar, adaptar-se e jamais quebrar.",
      },
      {
        type: "paragraph",
        text: "O Estoicismo nos deu a Ferramenta. Com a Dicotomia do Controle, ele nos entregou o filtro mental para parar de desperdiçar energia com o incontrolável e focar 100% naquilo que é nosso: nossas reações.",
      },
      {
        type: "paragraph",
        text: "E Nietzsche nos deu a Atitude. Com o Amor Fati, ele nos desafiou a ir além da mera aceitação. Ele nos convidou a amar as imperfeições e as dificuldades, a abraçar o caos não como um inimigo, mas como o combustível que nos forja.",
      },
      {
        type: "paragraph",
        text: "Juntas, essas três correntes de pensamento redefinem a resiliência. Ela deixa de ser uma batalha de força bruta contra o mundo e se torna uma arte.",
      },
      {
        type: "paragraph",
        text: "A verdadeira resiliência é a habilidade de dançar com o incontrolável. Não podemos escolher a música que a vida toca, nem controlar a tempestade que se forma no horizonte. Mas podemos, a cada momento, escolher como vamos mover nossos pés.",
      },
      {
        type: "paragraph",
        text: "Talvez a força, afinal, não esteja em ser a rocha inflexível, mas em ser a água que a contorna, a desgasta e, por fim, sempre encontra o seu caminho para o mar.",
      },
      {
        type: "divider",
      },
    ],
  },
] as const;

export const obterArtigoPorId = (id: number): Artigo | null => {
  const artigo = ARTIGOS.find((a) => a.id === id);
  return artigo ?? null;
};
