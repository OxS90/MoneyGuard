import React, { useEffect, useState } from 'react';
import { Wrap } from './CurrencyStyled';
import { selectCurrencyRates } from '../../../../redux/currency/selectors';
import { fetchCurrencyRates } from '../../../../redux/currency/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Graph } from './CurrencyStyled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CurrencyChart = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrencyRates);

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  const [currencyLabels, setCurrencyLabels] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    if (rates) {
      const labels = Object.keys(rates);
      const data = Object.values(rates);
      setCurrencyLabels(labels);
      setCurrencyData(data);
    }
  }, [rates]);

  const chartData = {
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

  return (
    <Wrap>
      <Graph>
        <Line data={chartData} />
      </Graph>
    </Wrap>
  );
};
