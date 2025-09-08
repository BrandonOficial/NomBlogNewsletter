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
    title: "5 tips to learn programming — as a beginner.",
    author: "soufianealc",
    date: "2025-09-04T12:00:00.000Z",
    readTime: "2 minutes read",
    gradient: "from-green-400 to-cyan-500",
    image: "/2.png",
    content: [
      {
        type: "paragraph",
        text: "Starting your programming journey can be overwhelming with so many languages, frameworks, and concepts to learn. Here are 5 practical tips that will set you up for success.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Start with the Fundamentals",
      },
      {
        type: "paragraph",
        text: "Don't jump straight into frameworks. Master the basics first:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Variables and data types",
          "Control structures (if/else, loops)",
          "Functions and scope",
          "Basic algorithms and problem-solving",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "2. Practice Coding Every Day",
      },
      {
        type: "paragraph",
        text: "Consistency beats intensity. Even 30 minutes of daily practice is better than 5 hours once a week.",
      },
      {
        type: "blockquote",
        text: "The only way to learn programming is by writing programs.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. Build Projects, Not Just Tutorials",
      },
      {
        type: "paragraph",
        text: "Tutorials are great for learning concepts, but projects teach you problem-solving. Start small:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Calculator app",
          "To-do list",
          "Weather app using an API",
          "Personal portfolio website",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "4. Learn to Debug",
      },
      {
        type: "paragraph",
        text: "Debugging is 50% of programming. Learn to use developer tools, read error messages carefully, and develop systematic approaches to finding bugs.",
      },
      {
        type: "heading",
        level: 2,
        text: "5. Join the Community",
      },
      {
        type: "paragraph",
        text: "Programming is collaborative. Join communities, ask questions, help others, and learn from experienced developers. Great places to start include Stack Overflow, Reddit programming communities, and Discord servers.",
      },
    ],
  },
  {
    id: 3,
    title: "Understanding async/await in JavaScript",
    author: "soufianealc",
    date: "2023-04-15T09:30:00.000Z",
    readTime: "5 minutes read",
    gradient: "from-yellow-400 to-orange-500",
    image: "/3.png",
    content: [
      {
        type: "paragraph",
        text: "Asynchronous programming in JavaScript can be tricky to understand. async/await syntax makes it much more readable and easier to work with than traditional promises and callbacks.",
      },
      {
        type: "heading",
        level: 2,
        text: "What is async/await?",
      },
      {
        type: "paragraph",
        text: "async/await is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves more like synchronous code.",
      },
      {
        type: "code",
        code: `// Traditional Promise syntax
function fetchUserData() {
  return fetch('/api/user')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// async/await syntax
async function fetchUserData() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`,
      },
      {
        type: "heading",
        level: 2,
        text: "Key Rules to Remember",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "await can only be used inside async functions",
          "async functions always return a Promise",
          "Use try/catch for error handling",
          "You can await any Promise, not just fetch calls",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Common Patterns",
      },
      {
        type: "paragraph",
        text: "Here are some common patterns you'll use with async/await:",
      },
      {
        type: "code",
        code: `// Sequential execution
async function sequentialCalls() {
  const user = await fetchUser();
  const posts = await fetchUserPosts(user.id);
  const comments = await fetchPostComments(posts[0].id);
  return { user, posts, comments };
}

// Parallel execution
async function parallelCalls() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchUserPosts(),
    fetchComments()
  ]);
  return { user, posts, comments };
}

// Handling multiple async operations
async function processUsers(userIds) {
  const users = [];
  for (const id of userIds) {
    try {
      const user = await fetchUser(id);
      users.push(user);
    } catch (error) {
      console.error(\`Failed to fetch user \${id}:\`, error);
    }
  }
  return users;
}`,
      },
      {
        type: "heading",
        level: 2,
        text: "Performance Comparison",
      },
      {
        type: "table",
        headers: ["Approach", "Readability", "Error Handling", "Performance"],
        rows: [
          ["Callbacks", "Poor", "Complex", "Good"],
          ["Promises", "Good", "Good", "Good"],
          ["async/await", "Excellent", "Excellent", "Good"],
        ],
      },
      {
        type: "blockquote",
        text: "async/await doesn't make your code faster, but it makes it more readable and maintainable.",
      },
    ],
  },
  {
    id: 4,
    title: "Mastering CSS Grid Layout",
    author: "cssmaster",
    date: "2025-09-04T15:46:00.000Z",
    readTime: "6 minutes read",
    gradient: "from-pink-400 to-red-500",
    image: "/4.png",
    content: [
      {
        type: "paragraph",
        text: "CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. Let's dive into the essential concepts and practical examples.",
      },
      {
        type: "heading",
        level: 2,
        text: "Grid Container Basics",
      },
      {
        type: "paragraph",
        text: "Start by creating a grid container and defining your grid structure:",
      },
      {
        type: "code",
        code: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  height: 100vh;
}

.header { grid-area: 1 / 1 / 2 / 4; }
.sidebar { grid-area: 2 / 1 / 3 / 2; }
.main { grid-area: 2 / 2 / 3 / 3; }
.aside { grid-area: 2 / 3 / 3 / 4; }
.footer { grid-area: 3 / 1 / 4 / 4; }`,
      },
      {
        type: "heading",
        level: 2,
        text: "Grid Units and Functions",
      },
      {
        type: "table",
        headers: ["Unit/Function", "Description", "Example"],
        rows: [
          ["fr", "Fraction of available space", "1fr 2fr (1:2 ratio)"],
          ["repeat()", "Repeat pattern", "repeat(3, 1fr)"],
          ["minmax()", "Min and max size", "minmax(200px, 1fr)"],
          [
            "auto-fit",
            "Fit items to container",
            "repeat(auto-fit, minmax(250px, 1fr))",
          ],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Responsive Grid Example",
      },
      {
        type: "code",
        code: `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 8px;
  color: white;
}

/* Advanced: Named Grid Lines */
.advanced-grid {
  display: grid;
  grid-template-columns: 
    [full-start] 1fr 
    [content-start] repeat(12, [col-start] 1fr [col-end]) 
    [content-end] 1fr [full-end];
  gap: 20px;
}`,
      },
      {
        type: "heading",
        level: 2,
        text: "Grid vs Flexbox",
      },
      {
        type: "paragraph",
        text: "Choose the right tool for the job:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Use Grid for 2D layouts (rows and columns)",
          "Use Flexbox for 1D layouts (single row or column)",
          "Grid is better for overall page layout",
          "Flexbox excels at component-level alignment",
        ],
      },
      {
        type: "blockquote",
        text: "CSS Grid and Flexbox work perfectly together. Grid for layout, Flexbox for components.",
        author: "CSS Layout Expert",
      },
      {
        type: "paragraph",
        text: "With CSS Grid, you can create layouts that were previously impossible or required complex hacks. Practice with these examples and experiment with different grid properties to master this powerful layout system.",
      },
    ],
  },
  {
    id: 5,
    title: "Mastering CSS Grid Layout",
    author: "cssmaster",
    date: "2025-08-28T15:46:00.000Z",
    readTime: "6 minutes read",
    gradient: "from-pink-400 to-red-500",
    image: "/4.png",
    content: [
      {
        type: "paragraph",
        text: "This is an updated version of our CSS Grid guide with the latest techniques and best practices for 2025.",
      },
      {
        type: "heading",
        level: 2,
        text: "New CSS Grid Features in 2025",
      },
      {
        type: "paragraph",
        text: "Recent browser updates have brought exciting new capabilities to CSS Grid:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Subgrid support across all major browsers",
          "Container queries integration",
          "Enhanced grid-template-areas syntax",
          "Better performance optimizations",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Subgrid Example",
      },
      {
        type: "code",
        code: `.parent-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.child-grid {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  gap: inherit;
}`,
      },
      {
        type: "image",
        src: "/grid-example.png",
        alt: "CSS Grid Layout Example",
        width: 800,
        height: 400,
        caption: "Modern CSS Grid layout with subgrid support",
      },
      {
        type: "divider",
      },
      {
        type: "paragraph",
        text: "Stay tuned for more advanced CSS Grid techniques and real-world examples in our upcoming articles!",
      },
      {
        type: "link",
        text: "React DevTools Profiler Documentation",
        href: "https://www.twitch.tv/baiano",
        target: "_blank",
        title: "Learn more about React DevTools Profiler",
        description:
          "Official React documentation for the Profiler component and DevTools integration.",
      },
    ],
  },
] as const;

export const obterArtigoPorId = (id: number): Artigo | null => {
  const artigo = ARTIGOS.find((a) => a.id === id);
  return artigo ?? null;
};
