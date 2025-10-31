import { templates } from './templates.js';
import { initForm } from './form.js';

export function loadPage(page) {
  const main = document.getElementById('main-content');
  main.innerHTML = templates[page] || '<h2>Página não encontrada</h2>';

  if(page === 'cadastro') initForm(); // Inicializa validação do formulário
}
