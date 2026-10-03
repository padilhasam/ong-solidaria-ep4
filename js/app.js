import { startRouter } from './router.js';
import { homeTemplate, projectsTemplate, registrationTemplate, registrationListTemplate } from './templates.js';
import { getRegistrations, saveRegistration, removeRegistration } from './storage.js';
import { maskCpf, maskPhone, maskCep, validateRegistration } from './validation.js';
import { initTheme, toggleDarkTheme, toggleContrastTheme } from './theme.js';
import { announce, focusMain, setCurrentNav, toggleMobileMenu, closeMobileMenu, initKeyboardAccessibility } from './accessibility.js';

const app = document.querySelector('#app');

const titles = {
  inicio: 'Início',
  projetos: 'Projetos',
  cadastro: 'Voluntariado'
};

function render(route) {
  if (!app) return;
  if (route === 'projetos') app.innerHTML = projectsTemplate();
  else if (route === 'cadastro') app.innerHTML = registrationTemplate(getRegistrations());
  else app.innerHTML = homeTemplate();

  setCurrentNav(route);
  closeMobileMenu();
  focusMain(titles[route] ?? 'Início');
  announce(`Página ${titles[route] ?? 'Início'} carregada.`);
}

function formDataToObject(form) {
  const data = new FormData(form);
  return {
    nome: String(data.get('nome') ?? '').trim(),
    email: String(data.get('email') ?? '').trim(),
    nascimento: String(data.get('nascimento') ?? ''),
    cpf: String(data.get('cpf') ?? ''),
    telefone: String(data.get('telefone') ?? ''),
    cep: String(data.get('cep') ?? ''),
    endereco: String(data.get('endereco') ?? '').trim(),
    cidade: String(data.get('cidade') ?? '').trim(),
    estado: String(data.get('estado') ?? ''),
    interesse: String(data.get('interesse') ?? ''),
    disponibilidade: String(data.get('disponibilidade') ?? '').trim(),
    consentimento: data.get('consentimento') === 'on'
  };
}

function clearErrors(form) {
  form.querySelectorAll('[aria-invalid="true"]').forEach((field) => field.removeAttribute('aria-invalid'));
  form.querySelectorAll('.field-error').forEach((node) => { node.textContent = ''; });
}

function showErrors(form, errors) {
  clearErrors(form);
  for (const [name, message] of Object.entries(errors)) {
    const field = form.elements.namedItem(name);
    if (field instanceof HTMLElement) field.setAttribute('aria-invalid', 'true');
    const error = form.querySelector(`#${name}-error`);
    if (error) error.textContent = message;
  }
  const firstName = Object.keys(errors)[0];
  const firstField = form.elements.namedItem(firstName);
  if (firstField instanceof HTMLElement) firstField.focus();
}

function updateRegistrationList(items) {
  const list = document.querySelector('#registration-list');
  if (list) list.innerHTML = registrationListTemplate(items);
  const badge = document.querySelector('.records-card .badge');
  if (badge) badge.textContent = String(items.length);
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  if (target.closest('#menu-toggle')) {
    toggleMobileMenu();
    return;
  }
  if (target.closest('#theme-dark')) {
    toggleDarkTheme();
    announce('Preferência de tema atualizada.');
    return;
  }
  if (target.closest('#theme-contrast')) {
    toggleContrastTheme();
    announce('Preferência de alto contraste atualizada.');
    return;
  }

  const navLink = target.closest('[data-route]');
  if (navLink) closeMobileMenu();

  const removeButton = target.closest('[data-remove-registration]');
  if (removeButton) {
    const id = removeButton.getAttribute('data-remove-registration');
    updateRegistrationList(removeRegistration(id));
    announce('Cadastro removido do armazenamento local.');
  }
});

document.addEventListener('input', (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;

  if (input.name === 'cpf') input.value = maskCpf(input.value);
  if (input.name === 'telefone') input.value = maskPhone(input.value);
  if (input.name === 'cep') input.value = maskCep(input.value);

  if (input.getAttribute('aria-invalid') === 'true') {
    input.removeAttribute('aria-invalid');
    const error = document.querySelector(`#${input.name}-error`);
    if (error) error.textContent = '';
  }
});

document.addEventListener('change', (event) => {
  const field = event.target;
  if (!(field instanceof HTMLSelectElement || field instanceof HTMLInputElement)) return;
  if (field.getAttribute('aria-invalid') === 'true') {
    field.removeAttribute('aria-invalid');
    const error = document.querySelector(`#${field.name}-error`);
    if (error) error.textContent = '';
  }
});

document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || form.id !== 'volunteer-form') return;
  event.preventDefault();

  const data = formDataToObject(form);
  const errors = validateRegistration(data);
  if (Object.keys(errors).length) {
    showErrors(form, errors);
    announce('Existem campos que precisam ser corrigidos.');
    return;
  }

  clearErrors(form);
  const items = saveRegistration(data);
  updateRegistrationList(items);
  form.reset();
  announce('Cadastro salvo com sucesso neste navegador.');
});

initTheme();
initKeyboardAccessibility();
startRouter(render);
