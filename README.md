# ONG Solidária - Experiência Prática IV

Aplicação front-end acadêmica para divulgação de projetos sociais e cadastro de voluntários. A solução evolui o projeto anterior da ONG Solidária para uma SPA acessível, modular, versionável e preparada para produção.

## Tecnologias

- HTML5 semântico
- CSS3 responsivo com Grid de 12 colunas
- JavaScript ES Modules
- DOM, eventos e templates dinâmicos
- localStorage
- Vite 8
- Git e GitHub
- GitHub Actions (CI)
- Vercel (deploy)

## Funcionalidades

- Navegação SPA sem recarregar o documento.
- Templates JavaScript para início, projetos e cadastro.
- Validação de formulário com feedback visual e acessível.
- Máscaras de CPF, telefone e CEP.
- Persistência dos cadastros no localStorage.
- Modo escuro e modo de alto contraste.
- Navegação por teclado, foco visível e atributos WAI-ARIA.
- Cinco faixas de responsividade: até 480px, 481-767px, 768-1023px, 1024-1439px e 1440px ou mais.
- Testes unitários básicos com `node:test`.
- Build otimizada com Vite.

## Estrutura

```text
ong-solidaria-ep4/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/ci.yml
│   └── pull_request_template.md
├── css/style.css
├── docs/
│   ├── ACESSIBILIDADE.md
│   └── GITFLOW.md
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── imagens/
├── js/
│   ├── accessibility.js
│   ├── app.js
│   ├── router.js
│   ├── storage.js
│   ├── templates.js
│   ├── theme.js
│   ├── validation.js
│   └── validation.test.js
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

> O `index.html` da raiz é o ponto de entrada do Vite. Os arquivos em `/html` funcionam como atalhos/fallbacks para as rotas da SPA e preservam a separação de diretórios solicitada na atividade.

## Instalação local

Pré-requisitos: Node.js 22+ e Git.

```bash
git clone URL_DO_REPOSITORIO
cd ong-solidaria-ep4
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite no terminal, normalmente `http://localhost:5173`.

## Testes

```bash
npm test
```

## Build de produção

```bash
npm run build
npm run preview
```

A build final é criada na pasta `dist`.

## Versionamento

O projeto adota GitFlow simplificado:

- `main`: versão estável.
- `develop`: integração de desenvolvimento.
- `feature/*`: funcionalidades.
- `hotfix/*`: correções urgentes.
- `release/*`: preparação de versões, quando necessário.

Commits seguem o padrão Conventional Commits, por exemplo:

```text
feat: implementa navegacao SPA
feat: adiciona validacao e localStorage
style: adiciona modo escuro e alto contraste
fix: corrige eventos apos renderizacao dinamica
docs: adiciona instrucoes de deploy
```

## Release inicial

Tag sugerida: `v1.0.0`.

## Acessibilidade

A interface foi construída visando WCAG 2.1 Nível AA, com foco em semântica, teclado, contraste, foco, feedback de formulário e suporte a leitores de tela. Consulte `docs/ACESSIBILIDADE.md`.

## CI/CD

O workflow `.github/workflows/ci.yml` executa automaticamente testes e build em pushes e Pull Requests para `main` e `develop`.

Para entrega contínua, importe o repositório na Vercel. A plataforma detecta o Vite, executa `npm run build` e publica `dist`. Novos pushes em `main` geram novo deploy de produção.

## Deploy na Vercel

1. Envie o projeto ao GitHub.
2. Entre na Vercel e selecione **Add New > Project**.
3. Importe o repositório da ONG Solidária.
4. Confirme **Framework Preset: Vite**.
5. Confirme **Build Command: `npm run build`**.
6. Confirme **Output Directory: `dist`**.
7. Clique em **Deploy**.

## Privacidade dos dados

Os cadastros de exemplo permanecem apenas no navegador do utilizador via localStorage. Não há envio para servidor ou API externa.
