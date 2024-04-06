import React from 'react';
import { useSelector } from 'react-redux'; // Importăm useSelector pentru a accesa starea Redux
import css from './Balance.module.css';
import { selectBalance } from '../../../../redux/authorisation/selectors';

const Balance = () => {
  // const totalBalance = useSelector(state => state.balance.totalBalance); // Extragem totalul soldului din starea Redux
  function formatNumber(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }

  const balance = useSelector(selectBalance);

  return (
    <div className={css.styleBalance}>
      <h3 className={css.balanceTitle}>Your balance</h3>
      <span className={css.numberBalance}>
        $ {formatNumber(Number(balance))}
      </span>{' '}
      {/* Afisăm soldul total al utilizatorului */}
    </div>
  );
};

export default Balance;
