🕊️ Esperança Viva — Plataforma Web para ONGs v3
📘 Descrição

A Esperança Viva é uma plataforma web fictícia desenvolvida como parte da Experiência Prática III da disciplina de Desenvolvimento Front-End.
O projeto tem como objetivo aplicar os conceitos de HTML5 semântico, responsividade e formulários interativos, criando uma base sólida para o desenvolvimento completo de um sistema web voltado a Organizações Não Governamentais (ONGs).

A ONG “Esperança Viva” atua no combate à fome e inclusão social, promovendo solidariedade, dignidade e transformação por meio de ações comunitárias.

🎯 Objetivo do Projeto

Desenvolver a estrutura base de um site completo para ONGs, permitindo que elas:

Divulguem informações institucionais;

Apresentem seus projetos sociais;

Captem voluntários e doadores;

Tenham presença digital acessível e profissional.
🧩 Estrutura do Projeto v3
/esperanca-viva
│
├── css/
│   └── style.css           # Arquivo principal de estilos (Design System, layout, responsividade)
│
├── imagens/
│   ├── cadastro.jpg        # Imagem usada na página de cadastro
│   ├── comunidade.jpg      # Imagem ilustrativa da comunidade
│   ├── logo.png            # Logotipo da ONG
│   ├── projeto1.jpg        # Imagem do projeto (ex: Mesa Cheia)
│   └── voluntarios.jpg     # Imagem de voluntários
│
├── js/
│   ├── app.js              # Script principal (inicialização SPA, manipulação geral do DOM)
│   ├── form.js             # Validação e manipulação dos formulários
│   ├── router.js           # Gerenciamento de rotas e navegação SPA
│   ├── storage.js          # Funções para armazenar e recuperar dados do localStorage
│   └── templates.js        # Templates JavaScript para renderizar o conteúdo dinamicamente
│
├── cadastro.html           # Página do formulário de cadastro
├── index.html              # Página principal da SPA
├── projetos.html           # Página com os projetos sociais
├── readme.md               # Documentação do projeto (este arquivo)

🖥️ Páginas Desenvolvidas

Descrição das Páginas Desenvolvidas
1. index.html (Página Inicial)

Página principal da ONG Esperança Viva, que apresenta informações institucionais como quem somos, missão, visão e valores. Contém também um espaço para contato com dados essenciais (email, telefone e endereço). A navegação é responsiva, incluindo um menu hamburger para dispositivos móveis.

2. projetos.html (Página de Projetos)

Página dedicada a apresentar os projetos sociais em andamento da ONG. Cada projeto possui descrição e imagem ilustrativa. Também oferece informações sobre como o visitante pode ajudar, com links para cadastro como voluntário ou doador.

3. cadastro.html (Página de Cadastro)

Página com formulário para cadastro de voluntários e doadores, contendo campos para dados pessoais, endereço e tipo de participação (voluntário ou doador). O formulário possui validação avançada com feedback para preenchimento correto dos dados, além de uma mensagem de confirmação após o envio.

🧠 Tecnologias Utilizadas

css/style.css: Contém os estilos CSS do projeto, incluindo o design system, cores, tipografia, responsividade e menu hamburger para dispositivos móveis.

imagens/: Todas as imagens usadas no site para dar suporte visual e identidade, organizadas em arquivos nomeados de forma clara.

js/app.js: Ponto de entrada para o JavaScript. Gerencia a inicialização da SPA, eventos globais e integração entre módulos.

js/form.js: Responsável por validar formulários, aplicar regras de consistência e fornecer feedback ao usuário em caso de dados incorretos.

js/router.js: Controla a navegação no estilo SPA, carregando dinamicamente o conteúdo baseado na rota solicitada, evitando recarregamentos da página.

js/storage.js: Módulo para manipulação do armazenamento local (localStorage), para salvar dados do usuário e manter estado da aplicação.

js/templates.js: Define templates JavaScript para montar dinamicamente o conteúdo das páginas, facilitando a renderização e atualização sem recarregar a página.

index.html, projetos.html, cadastro.html: Como exemplo acima, páginas que compõem a aplicação e integradas via SPA para carregamento dinâmico de conteúdo.

🧱 Recursos Técnicos e Boas Práticas

✅ Responsividade (mobile, tablet e desktop);
✅ Acessibilidade (uso de alt em imagens, contrastes adequados, navegação intuitiva);
✅ Código limpo e padronizado.

🚀 Como Visualizar o Projeto

Baixe ou clone o repositório:

git clone https://github.com/DiegoBatina/Projeto-v3


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
