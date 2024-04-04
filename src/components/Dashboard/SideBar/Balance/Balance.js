import React from 'react';
import { useSelector } from 'react-redux'; // Importăm useSelector pentru a accesa starea Redux
import css from './Balance.module.css';
// Balance.js

const Balance = () => {
  const totalBalance = useSelector(state => state.balance.totalBalance); // Extragem totalul soldului din starea Redux

  return (
    <div className={css.styleBalance}>
      <h3 className={css.balanceTitle}>Your balance</h3>
      <span className={css.numberBalance}>
        ₴ {totalBalance.toFixed(2)}
      </span>{' '}
      {/* Afisăm soldul total al utilizatorului */}
    </div>
  );
};

export default Balance;
