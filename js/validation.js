export function onlyDigits(value = '') {
  return String(value).replace(/\D/g, '');
}

export function maskCpf(value = '') {
  return onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function maskPhone(value = '') {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }
  return digits
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
}

export function maskCep(value = '') {
  return onlyDigits(value).slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2');
}

export function isValidEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidCpf(value = '') {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const calcDigit = (base, factor) => {
    let total = 0;
    for (const digit of base) total += Number(digit) * factor--;
    const remainder = (total * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  const first = calcDigit(cpf.slice(0, 9), 10);
  const second = calcDigit(cpf.slice(0, 10), 11);
  return first === Number(cpf[9]) && second === Number(cpf[10]);
}

export function validateRegistration(data) {
  const errors = {};
  if (!data.nome || data.nome.trim().length < 3) errors.nome = 'Informe o nome completo.';
  if (!isValidEmail(data.email)) errors.email = 'Informe um e-mail válido.';
  if (!data.nascimento) errors.nascimento = 'Informe a data de nascimento.';
  if (!isValidCpf(data.cpf)) errors.cpf = 'Informe um CPF válido.';
  if (![10, 11].includes(onlyDigits(data.telefone).length)) errors.telefone = 'Informe um telefone com DDD.';
  if (onlyDigits(data.cep).length !== 8) errors.cep = 'Informe um CEP com 8 dígitos.';
  if (!data.endereco || data.endereco.trim().length < 5) errors.endereco = 'Informe o endereço.';
  if (!data.cidade || data.cidade.trim().length < 2) errors.cidade = 'Informe a cidade.';
  if (!data.estado) errors.estado = 'Selecione o estado.';
  if (!data.interesse) errors.interesse = 'Selecione uma área de interesse.';
  if (!data.consentimento) errors.consentimento = 'É necessário autorizar o contato.';
  return errors;
}
