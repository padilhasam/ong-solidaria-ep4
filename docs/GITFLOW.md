# GitFlow sugerido

- `main`: versão estável publicada.
- `develop`: integração contínua do desenvolvimento.
- `feature/*`: novas funcionalidades.
- `hotfix/*`: correções urgentes derivadas de `main`.
- `release/*`: preparação opcional de uma versão.

## Conventional Commits

- `feat:` nova funcionalidade.
- `fix:` correção.
- `docs:` documentação.
- `style:` alterações visuais sem mudança de lógica.
- `refactor:` reorganização de código.
- `test:` testes.
- `chore:` tarefas técnicas.

## Exemplo de sequência

1. `git checkout -b develop`
2. `git checkout -b feature/spa-acessivel`
3. Implementar, testar e commitar.
4. Abrir Pull Request `feature/spa-acessivel -> develop`.
5. Após validação, abrir Pull Request `develop -> main`.
6. Criar tag `v1.0.0` na versão estável.
