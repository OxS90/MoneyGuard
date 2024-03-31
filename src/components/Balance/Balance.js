import React from 'react';
import css from './Balance.module.css';

export const Balance = () => {
  return (
    <div className={css.styleBalance}>
      <h3 className={css.balanceTitle}>Your balance</h3>
      <span className={css.numberBalance}>₴ 0.00</span>
    </div>
  );
};
