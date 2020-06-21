import React, { useState } from 'react';

import Header from './components/Header';
import ContentContainer from './components/ContentContainer';
import { useEffect } from 'react';

import getParcelas from './helpers/juros';
export default function App() {
  const [montanteInicial, setMontanteInicial] = useState(1000);
  const [taxa, setTaxa] = useState(0.005);
  const [periodo, setPeriodo] = useState(1);
  const [parcelas, setParcelas] = useState([]);

  useEffect(() => {
    const parcialParcelas = getParcelas(taxa, periodo, montanteInicial);

    setParcelas(parcialParcelas);
  }, [montanteInicial, taxa, periodo]);

  const handleMontanteChange = (e) => {
    setMontanteInicial(e.target.value);
  };

  const handleTaxaChange = (e) => {
    setTaxa(e.target.value / 100);
  };

  const handlePeriodoChange = (e) => {
    setPeriodo(e.target.value);
  };

  return (
    <div className="container">
      <Header>React - Juros Compostos</Header>

      <div className="row">
        <div className="col s6 m4 input-field">
          <input
            type="number"
            id="montante-inicial"
            defaultValue="1000"
            max="100000"
            onChange={handleMontanteChange}
          />
          <label htmlFor="montante-inicial" className="active">
            Montante inicial:
          </label>
        </div>

        <div className="col s6 m4 input-field">
          <input
            type="number"
            id="taxa-de-juros"
            min="-12"
            max="12"
            step="0.5"
            defaultValue="0.5"
            onChange={handleTaxaChange}
          />
          <label htmlFor="taxa-de-juros" className="active">
            Taxa de juros mensal:
          </label>
        </div>

        <div className="col s6 m4 input-field">
          <input
            type="number"
            id="periodo"
            defaultValue="1"
            min="1"
            max="36"
            onChange={handlePeriodoChange}
          />
          <label htmlFor="periodo" className="active">
            Período (meses):
          </label>
        </div>
      </div>

      <ContentContainer parcelas={parcelas} />
    </div>
  );
}
