O DesbraVapp

O Desbravapp é uma plataforma web educativa e interativa que promove o turismo consciente em Batalha-PI, incentivando visitantes e moradores a conhecer, valorizar e cuidar dos pontos naturais da região por meio de jogos, gamificação e engajamento coletivo.
A plataforma também é um estimulo ao desenvolvimento do turismo local como forma de desenvolvimento economico da região.

Acesso:
desbra-vapp-vercel.vercel.app


Visão geral:
Início: Apresenta inicialmente só 5 pontos turísticos de Batalha com fotos e descrições;
Jogos Lúdicos: Hub com acesso ao Quiz e ao jogo Termo;
Pontos Atuais: Exibe o score global e o Selo Turista Consciente;
Fale Conosco: Canal de contato com a equipe para suporte, dúvidas e sugestões sobre os locais e jogos.


Funcionalidades:
Pontos Turísticos: Apresenta cinco atrações naturais de Batalha com foto e descrição detalhada, usando um componente accordion interativo. São eles: Cachoeira do Urubu, Pedra Branca, Cachoeira do Xixá, Cachoeira do Canta Galo e Cachoeira dos Almeidas;

Quiz Desbravador: Quiz com 10 perguntas sobre a cultura e natureza de Batalha/PI. Cada acerto soma pontos ao placar global compartilhado entre todos os jogadores. Pontuação varia entre 10 e 20 pontos por pergunta;

Jogo Termo: Jogo inspirado no Wordle/Termo: adivinhe a palavra de 5 letras relacionada à natureza e cultura piauiense em até 6 tentativas. Acertar a palavra vale 100 pontos no placar global;

Selo Turista Consciente: O usuário pode carregar uma foto pessoal e adicionar o Selo Turista Consciente sobre ela, escolhendo o posicionamento. A imagem final pode ser baixada diretamente. Funciona 100% no navegador, sem upload para servidor;

Score da Campanha: Placar coletivo em tempo real. A prefeitura se comprometeu a plantar uma árvore ou enviar um mutirão de limpeza nos pontos turísticos a cada 100.000 pontos acumulados pelos jogadores;

Dark Mode: Alternância entre modo claro e escuro com persistência via localStorage — a preferência é mantida mesmo após fechar o navegador.


Tecnologias Utilizadas: 
 Front-end:
  HTML5: Estrutura semântica das páginas (<main>, <aside>, <nav>, <canvas>);
  CSS3: Estilização, variáveis CSS, dark mode, transições e layout flexbox;
  JavaScript ES6+: Lógica dos jogos, manipulação do DOM, eventos, async/await;
  Canvas API: Renderização e composição de imagem no editor de selo;
  Fetch API: Comunicação com o back-end via REST;
  localStorage: Persistência da preferência de tema do usuário.

 Back-end:
  Supabase: Banco de dados PostgreSQL na nuvem (BaaS);
  REST API: Comunicação entre front-end e banco de dados;
  RPC (increment): Função no Supabase que soma pontos de forma atômica ao contador global.


  Estrutura do Projeto:
  
  SITE/
│
├── index.html              # Página inicial — pontos turísticos
├── Jogos_Lúdicos.html      # Hub de jogos
├── quiz.html               # Jogo Quiz
├── Termo.html              # Jogo Termo (Wordle)
├── Selo.html               # Página de pontos e selo
├── edit_Selo.html          # Editor de foto com selo
├── score.html              # Placar global
├── contato.html            # Fale conosco
│
├── quiz.js                 # Lógica do quiz + integração Supabase
├── Termo.js                # Lógica do Termo + integração Supabase
├── ediSelo.js              # Lógica do editor de selo (Canvas API)
├── score.js                # Busca o score global no Supabase
├── tema.js                 # Dark mode com localStorage
│
├── Styles/
│   ├── base.css            # Estilos globais, variáveis de cor, dark mode
│   ├── sidebar.css         # Menu lateral e botões de navegação
│   ├── accordion.css       # Componente accordion da página inicial
│   ├── quiz.css            # Estilos do quiz
│   ├── termo.css           # Estilos do jogo Termo
│   ├── selo.css            # Estilos da página de pontos e selo
│   └── score.css           # Estilos do placar
│
└── img/
    ├── SELO.png            # Imagem do Selo Turista Consciente
    ├── urubu.jpg           # Cachoeira do Urubu
    ├── Branca.webp         # Pedra Branca
    ├── Xixá.jpeg           # Cachoeira do Xixá
    ├── Galo.jpg            # Cachoeira do Canta Galo
    ├── Almeida.jpeg        # Cachoeira dos Almeidas
    └── Pedra.jpeg          # Imagem adicional


Autores: Sháylla Rafaela Ribeiro Castro, Luiz Felipe Nazário Carvalho, Pedro Lucas da Silva Carvalho, Guilherme Paulo Carvalho e Francisco Cleber Machado de Castro.










