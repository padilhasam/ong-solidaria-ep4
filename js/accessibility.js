export function announce(message) {
  const status = document.querySelector('#status');
  if (!status) return;
  status.textContent = '';
  window.setTimeout(() => { status.textContent = message; }, 40);
}

export function focusMain(title) {
  const app = document.querySelector('#app');
  if (!app) return;
  app.focus({ preventScroll: true });
  document.title = `${title} | ONG Solidária`;
}

export function setCurrentNav(route) {
  document.querySelectorAll('[data-route]').forEach((link) => {
    if (link.dataset.route === route) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

export function closeMobileMenu() {
  const button = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!button || !nav) return;
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Abrir menu principal');
  nav.classList.remove('is-open');
}

export function toggleMobileMenu() {
  const button = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!button || !nav) return;
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  button.setAttribute('aria-label', open ? 'Abrir menu principal' : 'Fechar menu principal');
  nav.classList.toggle('is-open', !open);
}

export function initKeyboardAccessibility() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
  });
}
