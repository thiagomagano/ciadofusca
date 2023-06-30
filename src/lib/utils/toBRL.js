export default function toBRL(value) {
  const valueInBRL = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return valueInBRL;
}
