export const templates = {
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
        <h3>Valores</h3>
        <ul>
          <li>Solidariedade</li>
          <li>Transparência</li>
          <li>Comprometimento</li>
        </ul>
      </article>
    </section>
  `,
  projetos: `
    <section>
      <h2>Projetos em Andamento</h2>
      <article>
        <p>
          O <strong>Projeto Mesa Cheia</strong> distribuí cestas básicas e refeições em comunidades em situação de vulnerabilidade.
        </p>
        <img src="imagens/projeto1.jpg" alt="Distribuição de cestas básicas em comunidade carente">
      </article>
      <article>
        <p>
          Oferecemos o curso <strong>Capacitar para Crescer</strong> em oficinas para geração de renda e inclusão no mercado de trabalho.
        </p>
        <img src="imagens/voluntarios.jpg" alt="Voluntários ensinando e ajudando em oficinas de capacitação">
      </article>
    </section>
  `,
  cadastro: `
    <section>
      <h2>Formulário de Cadastro</h2>
      <img src="imagens/cadastro.jpg" alt="Grupo de voluntários sorrindo após ação comunitária">
      <form id="formCadastro">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="exemplo@dominio.com" required>

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf"
                 pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}"
                 placeholder="000.000.000-00" required>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone"
                 pattern="[0-9]{10,11}"
                 placeholder="ex:11987654321" required>

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

      <p id="mensagem-sucesso" style="display:none; color:green; font-weight:bold; margin-top:15px;"></p>
    </section>
  `
};
