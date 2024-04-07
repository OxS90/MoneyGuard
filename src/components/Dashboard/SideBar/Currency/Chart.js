import React, { useEffect, useState } from 'react';
import { Wrap, Graph } from './CurrencyStyled';
// import { StyledTable } from './CurrencyStyled';
import { selectCurrencyRates } from '../../../../redux/currency/selectors';
import { fetchCurrencyRates } from '../../../../redux/currency/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

export const CurrencyChart = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrencyRates);

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  // Prepare data for chart
  const [currencyLabels, setCurrencyLabels] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    if (rates) {
      const labels = Object.keys(rates);
      const data = Object.values(rates);
      setCurrencyLabels(labels);
      setCurrencyData(data);
    }
  }, [rates]);

  const chart2Data = {
    labels: currencyLabels,
    datasets: [
      {
        label: 'Currency Rates',
        data: currencyData,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  const remountChart = () => {
    setChartKey(prevKey => prevKey + 1);
  };
  return (
    <Wrap>
      {/* <StyledTable>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {currencyLabels.map((currency, index) => (
            <tr key={index}>
              <td>{currency}</td>
              <td>{rates && rates[currency]}</td>
              <td>{rates && rates[currency]}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable> */}
      <div>
        <button onClick={remountChart}>Reload Chart</button>
        <Graph key={chartKey}>
          <Line data={chart2Data} />
        </Graph>
      </div>
    </Wrap>
  );
};
