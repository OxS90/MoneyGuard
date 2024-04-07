import React, { useEffect } from 'react';
// import { useState } from 'react';
import { Wrap } from './CurrencyStyled';
// import { Graph } from './CurrencyStyled';
import { StyledTable } from './CurrencyStyled';
import { selectCurrencyRates } from '../../../../redux/currency/selectors';
import { fetchCurrencyRates } from '../../../../redux/currency/operations';
import { useDispatch, useSelector } from 'react-redux';
// import { Line } from 'react-chartjs-2';

export const Currency = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrencyRates);

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  // Prepare data for chart
  // const [currencyLabels, setCurrencyLabels] = useState([]);
  // const [currencyData, setCurrencyData] = useState([]);

  // useEffect(() => {
  //   if (rates) {
  //     const labels = Object.keys(rates);
  //     const data = Object.values(rates);
  //     setCurrencyLabels(labels);
  //     setCurrencyData(data);
  //   }
  // }, [rates]);

  // Filtered data for table
  // const filteredCurrencyLabels = ['EUR', 'RON'];
  // const filteredCurrencyData = filteredCurrencyLabels.map(
  //   currency => rates && rates[currency]
  // );

  // Chart data
  // const chartData = {
  //   labels: currencyLabels,
  //   datasets: [
  //     {
  //       label: 'Currency Rates',
  //       data: currencyData,
  //       fill: false,
  //       backgroundColor: 'rgba(75,192,192,0.4)',
  //       borderColor: 'rgba(75,192,192,1)',
  //     },
  //   ],
  // };

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
            <td>{rates && rates['RON']}</td>
            <td>{rates && rates['RON']}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{rates && rates['EUR']}</td>
            <td>{rates && rates['EUR']}</td>
          </tr>
        </tbody>
        {/* <tbody>
          {filteredCurrencyLabels.map((currency, index) => (
            <tr key={index}>
              <td>{currency}</td>
              <td>{filteredCurrencyData[currency]}</td>
              <td>{filteredCurrencyData[currency]}</td>
            </tr>
          ))}
        </tbody> */}
      </StyledTable>
      {/* <Graph>
        <Line data={chartData} />
      </Graph> */}
    </Wrap>
  );
};
