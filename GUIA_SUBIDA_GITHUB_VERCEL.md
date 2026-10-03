# Guia de subida - GitHub + Vercel

## 1. Preparar o projeto localmente

1. Extraia o ZIP em uma pasta, por exemplo `ong-solidaria-ep4`.
2. Abra a pasta no Visual Studio Code.
3. Abra o terminal integrado.
4. Execute:

```bash
npm install
npm test
npm run build
npm run dev
```

O `npm install` também criará o `package-lock.json`. Mantenha esse arquivo no repositório.

## 2. Criar o repositório no GitHub

No GitHub, crie um repositório chamado `ong-solidaria-ep4`.

Importante: crie-o vazio, sem README, `.gitignore` ou licença, pois esses arquivos já existem no projeto.

## 3. Criar um histórico Git coerente

No terminal da pasta do projeto:

```bash
git init
git branch -M main
```

Faça um primeiro commit com a estrutura visual:

```bash
git add .gitignore package.json package-lock.json vite.config.js vercel.json index.html html css imagens
git commit -m "feat: cria estrutura visual responsiva da ONG"
```

Crie a branch de desenvolvimento:

```bash
git checkout -b develop
```

Adicione a lógica da SPA:

```bash
git add js/router.js js/templates.js js/app.js
git commit -m "feat: implementa navegacao SPA e templates dinamicos"
```

Adicione validação, armazenamento e acessibilidade:

```bash
git add js/storage.js js/validation.js js/theme.js js/accessibility.js js/validation.test.js
git commit -m "feat: adiciona validacao localStorage e acessibilidade"
```

Adicione documentação e automação:

```bash
git add .github docs README.md CHANGELOG.md scripts
git commit -m "docs: documenta GitFlow acessibilidade e CI CD"
```

## 4. Ligar ao GitHub

Copie a URL HTTPS do repositório criado e execute:

```bash
git remote add origin https://github.com/SEU_USUARIO/ong-solidaria-ep4.git
git remote -v
git push -u origin main
git push -u origin develop
```

## 5. Criar Issue e Milestone

No GitHub:

1. Abra **Issues > New issue**.
2. Título sugerido: `Validar acessibilidade e release v1.0.0`.
3. Descreva os testes de teclado, contraste e formulário.
4. Crie o milestone `v1.0.0 - Entrega EP IV` e associe a issue.

## 6. Criar uma feature branch e Pull Request

No terminal:

```bash
git checkout develop
git checkout -b feature/revisao-acessibilidade
```

Faça uma pequena revisão real em `docs/ACESSIBILIDADE.md`, salve e execute:

```bash
git add docs/ACESSIBILIDADE.md
git commit -m "docs: registra revisao final de acessibilidade"
git push -u origin feature/revisao-acessibilidade
```

No GitHub, abra um Pull Request de `feature/revisao-acessibilidade` para `develop`. Na descrição, use `Closes #1` se a issue criada for a número 1. Faça o merge após conferir o workflow de CI.

## 7. Publicar a versão estável

Depois que a feature estiver integrada em `develop`:

```bash
git checkout develop
git pull
git checkout main
git merge --no-ff develop -m "release: publica versao 1.0.0"
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin main
git push origin v1.0.0
```

No GitHub, também é possível abrir um Pull Request `develop -> main` antes do merge para deixar o processo melhor documentado.

## 8. Criar a Release no GitHub

1. Abra **Releases** no repositório.
2. Clique em **Draft a new release**.
3. Selecione a tag `v1.0.0`.
4. Título: `v1.0.0 - Entrega Experiência Prática IV`.
5. Resuma SPA, acessibilidade, localStorage, testes e preparação para produção.
6. Publique a release.

## 9. Fazer deploy na Vercel

1. Entre na Vercel com sua conta GitHub.
2. Selecione **Add New > Project**.
3. Importe `ong-solidaria-ep4`.
4. Confira:
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy**.
6. Ao terminar, teste as três rotas, formulário, temas e navegação por teclado.

Depois disso, cada novo push na `main` acionará uma nova build/deploy na Vercel.

## 10. O que entregar na atividade

- URL do repositório GitHub.
- URL pública da Vercel.
- Evidências de branches `main`, `develop` e `feature/*`.
- Evidência de Issue e Milestone.
- Evidência dos Pull Requests.
- Release `v1.0.0`.
- README.md preenchido.
- Evidência do GitHub Actions com testes/build aprovados.
