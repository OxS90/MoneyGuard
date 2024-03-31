import React from 'react';
import css from './Balance.module.css';

export const Balance = () => {
  return (
    <div className={css.style}>
      <title>Your balance</title>
      <div>₴ 0.00</div>
    </div>
  );
};
