// ---------------------------
// Menu Hambúrguer
// ---------------------------
const hamburger = document.querySelector('.hamb');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// ---------------------------
// SPA - Single Page Application
// ---------------------------
const app = document.getElementById('app');
const links = document.querySelectorAll('nav a');

// Templates JS
const templates = {
  home: `
 <section>
      <h2>Quem Somos</h2>
      <img src="imagens/comunidade.jpg" alt="Voluntários entregando alimentos em comunidade carente">
      <p>
        A <strong>Esperança Viva</strong> é uma organização sem fins lucrativos que atua no combate à fome e na promoção da inclusão social em comunidades carentes.
      </p>
    </section>

    <section>
      <h2>Missão, Visão e Valores</h2>
      <article>
        <h3>Missão</h3>
        <p>Promover dignidade e esperança por meio da alimentação, educação e solidariedade.</p>
      </article>
      <article>
        <h3>Visão</h3>
        <p>Ser referência nacional no combate à fome e transformação social.</p>
      </article>
      <article>
        <h3>Objetivo</h3>
        <p>Manifestar amor e compaixão entre colaboradores e pessoas em vunerabilidade na sociedade</p>
      </article>
      <article>
        <h3>Valores</h3>
        <ul>
          <li>Solidariedade</li>
          <li>Transparência</li>
          <li>Comprometimento</li>
        </ul>
      </article>
    </section>

    <section>
      <h2>Entre em Contato</h2>
      <address>
        <p>Email: contato@esperancaviva.org.br</p>
        <p>Telefone: (11) 99999-9999</p>
        <p>Endereço: Rua da União, 123 - São Paulo/SP</p>
      </address>
    </section>
  </main>
  `,
  projetos: `
   <section>
      <h2>Projetos em Andamento</h2>
      <article>
         <p>
          O <strong>Projeto Mesa Cheia</strong> distribuí cestas básicas e refeições em comunidades em situação de vulnerabilidade.</p>
        <img src="imagens/projeto1.jpg" alt="Distribuição de cestas básicas em comunidade carente">
      </article>

      <article>
        <p>
          Oferecemos o curso <strong>Capacitar para Crescer</strong> em oficinas para geração de renda e inclusão no mercado de trabalho.</p>
        <img src="imagens/voluntarios.jpg" alt="Voluntários ensinando e ajudando em oficinas de capacitação">
      </article>
    </section>

    <section>
      <h2>Como Ajudar</h2>
      <p>Você pode fazer a diferença sendo voluntário ou realizando uma doação.</p>
      <ul>
        <li><a href="cadastro.html">Cadastre-se como voluntário</a></li>
        <li><a href="cadastro.html">Faça uma doação</a></li>
      </ul>
    </section>
  </main>
  `,
  cadastro: `
    <section>
      <h2>Formulário de Cadastro</h2>
      <img src="imagens/cadastro.jpg" alt="Grupo de voluntários sorrindo">

      <form id="formCadastro">
        <fieldset>
          <legend>Dados Pessoais</legend>

          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="exemplo@dominio.com" required>

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" pattern="[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}-?[0-9]{2}" placeholder="000.000.000-00" required>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" pattern="[0-9]{10,11}" placeholder="ex:11987654321" required>

          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" placeholder="Rua, número e complemento" required>

          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" pattern="[0-9]{5}-?[0-9]{3}" placeholder="00000-000" required>

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" placeholder="São Paulo" required>

          <label for="estado">Estado:</label>
          <input type="text" id="estado" name="estado" maxlength="2" placeholder="SP" required>
        </fieldset>

        <fieldset>
          <legend>Tipo de Participação</legend>
          <label><input type="radio" name="tipo" value="voluntario" required> Voluntário</label>
          <label><input type="radio" name="tipo" value="doador" required> Doador</label>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
      </form>

      <p id="mensagem-sucesso" style="display:none; color:green; font-weight:bold; margin-top:15px;">
        ✅ Enviado com sucesso! Obrigado por doar ou se cadastrar, em breve nossa equipe irá entrar em contato.
      </p>
    </section>
  `
};

// Função para carregar página
function loadPage(page) {
  app.innerHTML = templates[page];

  // Form validation & submit
  const form = document.getElementById('formCadastro');
  if (form) {
    const mensagem = document.getElementById('mensagem-sucesso');
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validação simples
      const inputs = form.querySelectorAll('input[required]');
      let valid = true;
      inputs.forEach(input => {
        if (!input.checkValidity()) {
          input.style.border = '2px solid red';
          valid = false;
        } else {
          input.style.border = '1px solid var(--color-neutral-400)';
        }
      });

      if (!valid) return;

      // Salva no LocalStorage
      const data = Object.fromEntries(new FormData(form).entries());
      const registros = JSON.parse(localStorage.getItem('cadastros')) || [];
      registros.push(data);
      localStorage.setItem('cadastros', JSON.stringify(registros));

      form.reset();
      mensagem.style.display = 'block';
    });
  }
}

// Inicializa com Home
loadPage('home');

// Navegação SPA
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('ativo'));
    link.classList.add('ativo');
    const page = link.getAttribute('data-page');
    loadPage(page);

    // fecha menu mobile
    navMenu.classList.remove('open');
  });
});
