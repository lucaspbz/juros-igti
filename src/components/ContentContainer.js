import React from 'react';
import ContentItem from './ContentItem';

import formatReal from '../helpers/formatter';

export default function ContentContainer({ parcelas }) {
  return (
    <div className="row ">
      {parcelas.map(({ capitalAtual, lucroTotal, totalJuros, mes }) => {
        return (
          <div className="col s8 m4 l3 " key={mes}>
            <ContentItem
              mes={mes}
              capitalAtual={formatReal(capitalAtual)}
              lucroTotal={formatReal(lucroTotal)}
              totalJuros={totalJuros.toFixed(2)}
            />
          </div>
        );
      })}
    </div>
  );
}
