import React, { useEffect } from 'react';
import { Wrap } from './CurrencyStyled';
import { StyledTable } from './CurrencyStyled';
import { selectCurrencyRates } from '../../../../redux/currency/selectors';
import { fetchCurrencyRates } from '../../../../redux/currency/operations';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyChart } from './Chart';

export const Currency = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrencyRates);

  useEffect(() => {
    dispatch(fetchCurrencyRates());
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
            <td>RON</td>
            <td>{rates && rates['RON']}</td>
            <td>{rates && rates['RON']}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{rates && rates['EUR']}</td>
            <td>{rates && rates['EUR']}</td>
          </tr>
        </tbody>
      </StyledTable>
      <CurrencyChart />
    </Wrap>
  );
};
