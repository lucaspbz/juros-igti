function total(taxa, periodo, capital) {
  const montante = capital * (1 + taxa) ** periodo;
  return montante.toFixed(2);
}

export default function getParcelas(taxa, periodo, capital) {
  const montanteInicial = capital;
  const parcialParcelas = [];
  for (let i = 0; i < periodo; i++) {
    const capitalAtual = total(taxa, i + 1, montanteInicial);
    const lucroTotal = capitalAtual - montanteInicial;
    const totalJuros = (capitalAtual / montanteInicial - 1) * 100;
    const element = { capitalAtual, lucroTotal, totalJuros, mes: i + 1 };
    parcialParcelas.push(element);
  }
  return parcialParcelas;
}
