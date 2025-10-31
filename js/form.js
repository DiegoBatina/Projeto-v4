import { saveUser } from './storage.js';

export function initForm() {
  const form = document.getElementById('formCadastro');
  const mensagem = document.getElementById('mensagem-sucesso');
  if(!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    // Validações simples
    if(!data.nome || !data.email || !data.cpf || !data.telefone){
      alert('Preencha todos os campos corretamente.');
      return;
    }

    saveUser(data); // Salva no LocalStorage
    form.reset();
    mensagem.textContent = '✅ Enviado com sucesso! Obrigado por doar ou se cadastrar.';
    mensagem.style.display = 'block';
  });
}
