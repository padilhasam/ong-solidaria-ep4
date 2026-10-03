#!/bin/sh
set -eu

git init
git add .
git commit -m "chore: estrutura inicial do projeto"
git branch -M main
git checkout -b develop
git checkout -b feature/spa-acessivel

printf '%s\n' "GitFlow inicial criado: main -> develop -> feature/spa-acessivel"
