import React, { useEffect } from 'react';
import { Graph, Ball, BallEur, Wrap, StyledTable } from './CurrencyStyled';
import { selectCurrency } from '../../redux/currency/selectors';
import { fetchCurrency } from '../../redux/currency/operations';
import { useDispatch, useSelector } from 'react-redux';

export const Currency = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCurrencyData = localStorage.getItem('persist:currency');
    const savedCurrencyObj = JSON.parse(savedCurrencyData);
    if (savedCurrencyObj.data !== 'null') {
      if (didOneHourPass()) {
        dispatch(fetchCurrency());
      }
    } else {
      dispatch(fetchCurrency());
    }
  }, [dispatch]);

  function didOneHourPass() {
    const savedCurrencyData = localStorage.getItem('persist:currency');
    const savedCurrencyObj = JSON.parse(savedCurrencyData);

    if (savedCurrencyObj) {
      const savedTime = Date.parse(savedCurrencyObj.fetchingTime);
      const currentTime = new Date();
      const timeDifference = currentTime - savedTime;
      const oneHourInMilliseconds = 60 * 60 * 1000;
      return timeDifference >= oneHourInMilliseconds;
    }

    return false;
  }

  const currency = useSelector(selectCurrency);
  return (
    <Wrap>
      <StyledTable>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{currency.USD.buy.toFixed(2)}</td>
            <td>{currency.USD.sale.toFixed(2)}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{currency.EUR.buy.toFixed(2)}</td>
            <td>{currency.EUR.sale.toFixed(2)}</td>
          </tr>
        </tbody>
      </StyledTable>
      <Graph>
        <source
          //   srcSet={`${tablet1x} 1x, ${tablet2x} 2x, ${tablet3x} 3x`}
          alt="Currency"
          media="(min-width: 768px) and (max-width: 1023px)"
        />
        <source
          //   srcSet={`${web1x} 1x, ${web2x} 2x, ${web3x} 3x`}
          alt="Currency"
          media="(min-width: 1024px)"
        />
        <img alt="Currency" draggable="false" />
        <Ball>{currency.USD.buy.toFixed(2)}</Ball>
        <BallEur>{currency.EUR.buy.toFixed(2)}</BallEur>
      </Graph>
    </Wrap>
  );
};
