import React from 'react';

import css from './contentItem.module.css';

export default function ContentItem({
  mes,
  capitalAtual,
  lucroTotal,
  totalJuros,
}) {
  let color1 = '';
  let color2 = '';

  totalJuros > 0 ? (color1 = '#43a047') : (color1 = '#f44336 ');
  totalJuros > 0 ? (color2 = '#039be5 ') : (color2 = '#ef6c00 ');
  if (totalJuros > 0) {
    lucroTotal = '+' + lucroTotal;
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className={css.container}>
          <div>
            <strong>{mes}</strong>
          </div>
          <div className={css.data}>
            <div style={{ color: color1 }}>
              <strong>{capitalAtual}</strong>
            </div>
            <div style={{ color: color1 }}>
              <strong>{lucroTotal}</strong>
            </div>
            <div style={{ color: color2 }}>{totalJuros}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
