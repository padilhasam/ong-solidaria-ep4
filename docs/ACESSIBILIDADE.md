# Acessibilidade - checklist WCAG 2.1 AA

O projeto foi estruturado para demonstrar boas práticas de acessibilidade, sem declarar certificação formal.

- HTML semântico com `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`.
- Link de salto para o conteúdo principal.
- Navegação por teclado e foco visível com `:focus-visible`.
- `aria-current` para a rota atual.
- `aria-expanded` no menu móvel.
- `aria-pressed` nos controlos de tema.
- `aria-invalid` e `aria-describedby` na validação do formulário.
- Região `role="status"` com `aria-live="polite"` para feedback.
- Alternativas de tema escuro e alto contraste.
- `prefers-reduced-motion` respeitado.
- Imagens com `alt` descritivo quando informativas e `alt=""` quando decorativas.
- Campos associados a `label` e agrupados em `fieldset`/`legend`.

## Contraste de referência

- Texto `#111827` sobre `#FFFFFF`: alto contraste para texto normal.
- Texto branco sobre botão `#1D4ED8`: adequado para uso em componentes principais.
- Modo alto contraste: branco sobre preto e amarelo sobre preto.

Para validação manual, usar WebAIM Contrast Checker e auditoria de acessibilidade do navegador/Lighthouse.
