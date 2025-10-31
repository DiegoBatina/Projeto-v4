🕊️ Esperança Viva — Plataforma Web para ONGs v4
📘 Descrição

A Esperança Viva é uma plataforma web fictícia desenvolvida como parte da Experiência Prática IV da disciplina de Desenvolvimento Front-End.
O projeto tem como objetivo aplicar os conceitos de HTML5 semântico, responsividade e formulários interativos, criando uma base sólida para o desenvolvimento completo de um sistema web voltado a Organizações Não Governamentais (ONGs).

A ONG “Esperança Viva” atua no combate à fome e inclusão social, promovendo solidariedade, dignidade e transformação por meio de ações comunitárias.

🎯 Objetivo do Projeto

Desenvolver a estrutura base de um site completo para ONGs, permitindo que elas:

Divulguem informações institucionais;

Apresentem seus projetos sociais;

Captem voluntários e doadores;

Tenham presença digital acessível e profissional.
🧩 Estrutura do Projeto v4
/esperanca-viva
│
├── /css                # Pasta para os arquivos de estilo CSS
│   └── style.css       # Arquivo de estilo principal do projeto
│
├── /dist               # Pasta para arquivos de distribuição, como a versão minificada
│   └── app.min.js      # Arquivo JavaScript minificado para produção
│
├── /imagens            # Pasta para armazenar imagens utilizadas no site
│   ├── cadastro.jpg    # Imagem usada na página de cadastro
│   ├── comunidade.jpg  # Imagem usada na seção "Quem Somos"
│   ├── logo.png        # Logotipo da ONG
│   ├── projeto1.jpg    # Imagem do projeto
│   └── voluntarios.jpg # Imagem de voluntários
│
├── /js                 # Pasta para os arquivos JavaScript do projeto
│   ├── app.js          # Lógica principal de funcionamento do site (Menu Hamburguer, SPA)
│   ├── form.js         # Script de validação e envio do formulário de cadastro
│   ├── router.js       # Lógica para roteamento e troca de páginas na SPA
│   ├── storage.js      # Gerenciamento do armazenamento local (LocalStorage)
│   └── templates.js    # Templates de HTML usados para renderizar as páginas
│
├── /node_modules       # Pasta com dependências do Node.js (caso você use pacotes npm)
│
├── cadastro.html       # Página HTML de cadastro
├── index.html          # Página inicial (home) do projeto
├── package-lock.json   # Arquivo de bloqueio de versões de pacotes (usado com npm)
├── package.json        # Arquivo de configuração do npm, com dependências do projeto
├── projetos.html       # Página HTML que detalha os projetos da ONG
└── README.md           # Arquivo de documentação do projeto, contendo informações sobre o projeto e como utilizá-lo


🖥️ Páginas Desenvolvidas

Descrição das Páginas Desenvolvidas
1. index.html (Página Inicial)

Página principal da ONG Esperança Viva, que apresenta informações institucionais como quem somos, missão, visão e valores. Contém também um espaço para contato com dados essenciais (email, telefone e endereço). A navegação é responsiva, incluindo um menu hamburger para dispositivos móveis.

2. projetos.html (Página de Projetos)

Página dedicada a apresentar os projetos sociais em andamento da ONG. Cada projeto possui descrição e imagem ilustrativa. Também oferece informações sobre como o visitante pode ajudar, com links para cadastro como voluntário ou doador.

3. cadastro.html (Página de Cadastro)

Página com formulário para cadastro de voluntários e doadores, contendo campos para dados pessoais, endereço e tipo de participação (voluntário ou doador). O formulário possui validação avançada com feedback para preenchimento correto dos dados, além de uma mensagem de confirmação após o envio.

🧠 Tecnologias Utilizadas

HTML5: Estrutura do conteúdo da web.

CSS3: Estilização e layout responsivo.

JavaScript: Funcionalidade interativa e SPA (Single Page Application).

Git/GitHub: Controle de versão e colaboração no código.

GitFlow: Estratégia de branching para facilitar o gerenciamento de branches de funcionalidades, releases e hotfixes.

🖥️ Descrição dos principais diretórios e arquivos:

/css/style.css: Este arquivo contém os estilos do projeto. Ele é responsável pela aparência do site, incluindo layout, cores, fontes e outros aspectos visuais.

/dist/app.min.js: Arquivo JavaScript minificado utilizado em produção, otimizando o desempenho. Contém a versão compactada do código JavaScript do projeto.

/imagens/: Contém todas as imagens utilizadas no projeto, como logotipo da ONG, fotos de voluntários e outras imagens relacionadas aos projetos da ONG.

/js/: Contém todos os scripts JavaScript do projeto:

app.js: Lógica principal que controla a interação do site, como o menu hamburguer e a funcionalidade de Single Page Application (SPA).

form.js: Lógica de validação e envio do formulário de cadastro.

router.js: Lida com o roteamento das páginas na aplicação SPA, carregando o conteúdo dinamicamente.

storage.js: Gerencia a utilização do LocalStorage para salvar os cadastros e dados de forma persistente no navegador.

templates.js: Contém os templates HTML para renderizar as diferentes seções do site, como home, projetos, e cadastro.

cadastro.html, index.html, projetos.html: São as páginas HTML do projeto. Cada uma dessas páginas representa uma seção diferente do site (exemplo: cadastro de voluntários, página inicial, projetos da ONG).

README.md: Arquivo de documentação que descreve o projeto, como configurá-lo, tecnologias utilizadas, como contribuir e outros detalhes importantes sobre o desenvolvimento e uso do projeto.

package.json e package-lock.json: Arquivos de configuração do npm. O package.json contém as dependências e informações sobre o projeto, enquanto o package-lock.json garante que as dependências sejam instaladas na mesma versão para todos os desenvolvedores.

🧱 Recursos Técnicos e Boas Práticas

✅ Responsividade (mobile, tablet e desktop);
✅ Acessibilidade (uso de alt em imagens, contrastes adequados, navegação intuitiva);
✅ Código limpo e padronizado.

🚀 Como Visualizar o Projeto

Baixe ou clone o repositório:

git clone https://github.com/DiegoBatina/Projeto-v4


Abra o arquivo principal:

Localize o arquivo index.html

Clique duas vezes ou abra no navegador de sua preferência

Navegue pelas páginas:

Início

Projetos

Cadastro

📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais, sem fins comerciais.
Você pode reutilizar e adaptar o código livremente, citando a fonte.

👩‍💻 Autoria

Desenvolvido por Diego Corrêa Batina
Disciplina: Desenvolvimento Front-End
Instituição: Cruzeiro do Sul Virtual
Ano: 2025
