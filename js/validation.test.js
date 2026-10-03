import test from 'node:test';
import assert from 'node:assert/strict';
import { maskCpf, maskPhone, maskCep, isValidCpf, isValidEmail, validateRegistration } from './validation.js';

test('aplica máscaras principais', () => {
  assert.equal(maskCpf('52998224725'), '529.982.247-25');
  assert.equal(maskPhone('41999998888'), '(41) 99999-8888');
  assert.equal(maskCep('80000000'), '80000-000');
});

test('valida CPF e e-mail', () => {
  assert.equal(isValidCpf('529.982.247-25'), true);
  assert.equal(isValidCpf('111.111.111-11'), false);
  assert.equal(isValidEmail('pessoa@exemplo.com'), true);
  assert.equal(isValidEmail('email-invalido'), false);
});

test('retorna erros para cadastro incompleto', () => {
  const errors = validateRegistration({
    nome: '', email: '', nascimento: '', cpf: '', telefone: '', cep: '', endereco: '', cidade: '', estado: '', interesse: '', consentimento: false
  });
  assert.ok(Object.keys(errors).length >= 10);
});
