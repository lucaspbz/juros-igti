const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function formatReal(value) {
  return formatter.format(value);
}
