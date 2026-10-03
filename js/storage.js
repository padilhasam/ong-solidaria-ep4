const KEYS = {
  registrations: 'ongSolidaria.cadastros',
  theme: 'ongSolidaria.tema'
};

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function getRegistrations() {
  const data = readJson(KEYS.registrations, []);
  return Array.isArray(data) ? data : [];
}

export function saveRegistration(registration) {
  const items = getRegistrations();
  items.unshift({
    ...registration,
    id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
    createdAt: new Date().toISOString()
  });
  localStorage.setItem(KEYS.registrations, JSON.stringify(items));
  return items;
}

export function removeRegistration(id) {
  const items = getRegistrations().filter((item) => item.id !== id);
  localStorage.setItem(KEYS.registrations, JSON.stringify(items));
  return items;
}

export function getSavedTheme() {
  const value = localStorage.getItem(KEYS.theme);
  return ['light', 'dark', 'contrast'].includes(value) ? value : 'light';
}

export function saveTheme(theme) {
  localStorage.setItem(KEYS.theme, theme);
}
