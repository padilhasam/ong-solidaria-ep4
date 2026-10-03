import { getSavedTheme, saveTheme } from './storage.js';

let currentTheme = 'light';

function updateButtons() {
  const dark = document.querySelector('#theme-dark');
  const contrast = document.querySelector('#theme-contrast');
  dark?.setAttribute('aria-pressed', String(currentTheme === 'dark'));
  contrast?.setAttribute('aria-pressed', String(currentTheme === 'contrast'));
}

export function applyTheme(theme) {
  currentTheme = ['light', 'dark', 'contrast'].includes(theme) ? theme : 'light';
  document.body.dataset.theme = currentTheme;
  saveTheme(currentTheme);
  updateButtons();
}

export function initTheme() {
  applyTheme(getSavedTheme());
}

export function toggleDarkTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

export function toggleContrastTheme() {
  applyTheme(currentTheme === 'contrast' ? 'light' : 'contrast');
}
