function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

const projects = [
  {
    icon: '🥫',
    title: 'Campanha de Alimentos',
    category: 'Segurança alimentar',
    description: 'Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.',
    action: 'Participar da campanha'
  },
  {
    icon: '📚',
    title: 'Educação que Aproxima',
    category: 'Educação',
    description: 'Atividades de reforço escolar, leitura e inclusão digital para crianças e adolescentes.',
    action: 'Ser voluntário'
  },
  {
    icon: '🤝',
    title: 'Rede de Apoio Comunitário',
    category: 'Apoio social',
    description: 'Mobilização de voluntários para eventos, triagem de doações e apoio a ações comunitárias.',
    action: 'Conhecer a rede'
  }
];

export function homeTemplate() {
  return `
    <section class="hero section" aria-labelledby="hero-title">
      <div class="container hero-grid grid-12">
        <div class="hero-copy col-7">
          <span class="eyebrow">Solidariedade em movimento</span>
          <h1 id="hero-title">Pequenas ações podem transformar comunidades inteiras.</h1>
          <p>Conectamos pessoas dispostas a ajudar com iniciativas de educação, alimentação e apoio comunitário.</p>
          <div class="button-row">
            <a class="button button-primary" href="#/cadastro">Quero ser voluntário</a>
            <a class="button button-secondary" href="#/projetos">Conhecer projetos</a>
          </div>
          <ul class="hero-stats" aria-label="Indicadores demonstrativos do projeto">
            <li><strong>3</strong><span>frentes de atuação</span></li>
            <li><strong>100%</strong><span>foco comunitário</span></li>
            <li><strong>AA</strong><span>acessibilidade priorizada</span></li>
          </ul>
        </div>
        <div class="hero-media col-5">
          <picture>
            <source srcset="/imagens/hero-solidariedade.webp" type="image/webp">
            <img src="/imagens/hero-solidariedade.jpg" width="960" height="720" alt="Voluntários organizando doações em uma ação comunitária" loading="eager">
          </picture>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="about-title">
      <div class="container split-card grid-12">
        <div class="col-5">
          <span class="eyebrow">Quem somos</span>
          <h2 id="about-title">Uma rede simples, humana e acessível.</h2>
        </div>
        <div class="col-7 rich-text">
          <p>A ONG Solidária é uma proposta acadêmica de plataforma para divulgar iniciativas sociais e facilitar o cadastro de pessoas interessadas em colaborar.</p>
          <p>A interface foi criada com HTML semântico, CSS responsivo e JavaScript modular, utilizando navegação SPA e armazenamento local no navegador.</p>
        </div>
      </div>
    </section>

    <section class="section section-soft" aria-labelledby="how-title">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Como ajudar</span>
          <h2 id="how-title">Escolha uma forma de participar</h2>
        </div>
        <div class="feature-grid">
          <article class="feature-card"><span aria-hidden="true">🙋</span><h3>Voluntariado</h3><p>Cadastre seus dados e indique a área em que deseja colaborar.</p></article>
          <article class="feature-card"><span aria-hidden="true">📦</span><h3>Doações</h3><p>Ajude campanhas de arrecadação de alimentos, materiais e outros recursos.</p></article>
          <article class="feature-card"><span aria-hidden="true">📣</span><h3>Divulgação</h3><p>Compartilhe as iniciativas e contribua para ampliar o alcance das ações.</p></article>
        </div>
      </div>
    </section>`;
}

export function projectsTemplate() {
  const cards = projects.map((project) => `
    <article class="project-card">
      <div class="project-icon" aria-hidden="true">${project.icon}</div>
      <span class="project-category">${project.category}</span>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a class="text-link" href="#/cadastro">${project.action} <span aria-hidden="true">→</span></a>
    </article>`).join('');

  return `
    <section class="page-hero section section-soft" aria-labelledby="projects-title">
      <div class="container grid-12 page-hero-grid">
        <div class="col-7">
          <span class="eyebrow">Projetos sociais</span>
          <h1 id="projects-title">Encontre uma iniciativa para apoiar.</h1>
          <p>Os componentes desta página são gerados dinamicamente a partir de dados JavaScript, evitando repetição manual de marcação.</p>
        </div>
        <div class="col-5 compact-media">
          <picture>
            <source srcset="/imagens/projetos-comunidade.webp" type="image/webp">
            <img src="/imagens/projetos-comunidade.jpg" width="960" height="640" alt="Caixas de doação e pessoas colaborando em ação social" loading="lazy">
          </picture>
        </div>
      </div>
    </section>
    <section class="section" aria-label="Lista de projetos">
      <div class="container project-grid">${cards}</div>
    </section>`;
}

export function registrationTemplate(registrations = []) {
  return `
    <section class="page-hero section section-soft" aria-labelledby="register-title">
      <div class="container narrow">
        <span class="eyebrow">Faça parte</span>
        <h1 id="register-title">Cadastro de voluntariado</h1>
        <p>Preencha os dados abaixo. As informações são armazenadas apenas neste navegador por meio do <code>localStorage</code>, para fins acadêmicos.</p>
      </div>
    </section>

    <section class="section">
      <div class="container form-layout grid-12">
        <form id="volunteer-form" class="form-card col-7" novalidate>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div class="field-grid two-cols">
              ${field('nome', 'Nome completo', 'text', 'Ex.: Ana Souza', 'name')}
              ${field('email', 'E-mail', 'email', 'ana@email.com', 'email')}
              ${field('nascimento', 'Data de nascimento', 'date', '', 'bday')}
              ${field('cpf', 'CPF', 'text', '000.000.000-00', 'off', 'inputmode="numeric" maxlength="14"')}
              ${field('telefone', 'Telefone', 'tel', '(41) 99999-9999', 'tel', 'inputmode="tel" maxlength="15"')}
            </div>
          </fieldset>

          <fieldset>
            <legend>Endereço</legend>
            <div class="field-grid two-cols">
              ${field('cep', 'CEP', 'text', '00000-000', 'postal-code', 'inputmode="numeric" maxlength="9"')}
              ${field('endereco', 'Endereço', 'text', 'Rua, número e complemento', 'street-address')}
              ${field('cidade', 'Cidade', 'text', 'Sua cidade', 'address-level2')}
              <div class="field">
                <label for="estado">Estado</label>
                <select id="estado" name="estado" autocomplete="address-level1" aria-describedby="estado-error" required>
                  <option value="">Selecione</option><option>PR</option><option>SC</option><option>SP</option><option>RJ</option><option>RS</option><option>MG</option>
                </select>
                <small id="estado-error" class="field-error" aria-live="polite"></small>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Participação</legend>
            <div class="field-grid">
              <div class="field">
                <label for="interesse">Área de interesse</label>
                <select id="interesse" name="interesse" aria-describedby="interesse-error" required>
                  <option value="">Selecione</option>
                  <option>Educação</option><option>Doações</option><option>Eventos</option><option>Comunicação</option>
                </select>
                <small id="interesse-error" class="field-error" aria-live="polite"></small>
              </div>
              <div class="field">
                <label for="disponibilidade">Disponibilidade</label>
                <textarea id="disponibilidade" name="disponibilidade" rows="4" placeholder="Conte brevemente quando você pode participar."></textarea>
              </div>
              <div class="check-field">
                <input id="consentimento" name="consentimento" type="checkbox" aria-describedby="consentimento-error" required>
                <label for="consentimento">Autorizo o contato da ONG sobre oportunidades de voluntariado.</label>
              </div>
              <small id="consentimento-error" class="field-error" aria-live="polite"></small>
            </div>
          </fieldset>

          <div class="form-actions">
            <button class="button button-primary" type="submit">Salvar cadastro</button>
            <button class="button button-ghost" type="reset">Limpar formulário</button>
          </div>
        </form>

        <aside class="records-card col-5" aria-labelledby="records-title">
          <div class="records-header"><div><span class="eyebrow">localStorage</span><h2 id="records-title">Cadastros salvos</h2></div><span class="badge">${registrations.length}</span></div>
          <div id="registration-list">${registrationListTemplate(registrations)}</div>
        </aside>
      </div>
    </section>`;
}

function field(id, label, type, placeholder, autocomplete, extra = '') {
  return `<div class="field">
    <label for="${id}">${label}</label>
    <input id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" autocomplete="${autocomplete}" aria-describedby="${id}-error" ${extra} required>
    <small id="${id}-error" class="field-error" aria-live="polite"></small>
  </div>`;
}

export function registrationListTemplate(registrations = []) {
  if (!registrations.length) {
    return '<p class="empty-state">Nenhum cadastro salvo neste navegador.</p>';
  }
  return `<ul class="registration-list">${registrations.map((item) => `
    <li>
      <div><strong>${escapeHtml(item.nome)}</strong><span>${escapeHtml(item.interesse)} · ${escapeHtml(item.cidade)}/${escapeHtml(item.estado)}</span></div>
      <button type="button" class="icon-button danger" data-remove-registration="${escapeHtml(item.id)}" aria-label="Remover cadastro de ${escapeHtml(item.nome)}">×</button>
    </li>`).join('')}</ul>`;
}
