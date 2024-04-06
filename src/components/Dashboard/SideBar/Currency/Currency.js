import React, { useEffect } from 'react';
import { Wrap, StyledTable } from './CurrencyStyled';
// import { selectCurrency } from '../../../../redux/currency/selectors';
import { fetchCurrency } from '../../../../redux/currency/operations';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

export const Currency = () => {
  const dispatch = useDispatch();
  // const currency = useSelector(selectCurrency);

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

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
            {/* <td>{currency.rates.USD ? currency.rates.USD.toFixed(2) : '-'}</td>
            <td>{currency.rates.USD ? currency.rates.USD.toFixed(2) : '-'}</td> */}
          </tr>
          <tr>
            <td>EUR</td>
            {/* <td>{currency.rates.EUR ? currency.EUR.toFixed(2) : '-'}</td>
            <td>{currency.rates.EUR ? currency.EUR.toFixed(2) : '-'}</td> */}
          </tr>
        </tbody>
      </StyledTable>
      {/* <Graph /> */}
    </Wrap>
  );
};
