const validRoutes = new Set(['inicio', 'projetos', 'cadastro']);

export function getCurrentRoute() {
  const raw = window.location.hash.replace(/^#\/?/, '').split('?')[0].trim();
  return validRoutes.has(raw) ? raw : 'inicio';
}

export function navigate(route) {
  const safeRoute = validRoutes.has(route) ? route : 'inicio';
  const targetHash = `#/${safeRoute}`;
  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
  }
}

export function startRouter(onRouteChange) {
  const handle = () => onRouteChange(getCurrentRoute());
  window.addEventListener('hashchange', handle);
  if (!window.location.hash) {
    window.location.replace('#/inicio');
  } else {
    handle();
  }
}
