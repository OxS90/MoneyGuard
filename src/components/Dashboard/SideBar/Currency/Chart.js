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
      const importantCurrencies = [
        'GBP',

        'CZK',

        'AUD',
        'CAD',
        'ZAR',
        'CHF',
        'CNH',
        'HKD',
        'BGN',
        'NZD',
      ];

      const noisedRates = {};
      importantCurrencies.forEach(currency => {
        const rate = rates[currency];
        const noise = (Math.random() - 0.5) * 0.1; // Adjust noise level as needed
        noisedRates[currency] = rate + noise;
      });

      // Convert rates object to an array of objects [{ currency: 'USD', rate: 1.23 }, ...]
      const ratesArray = Object.keys(noisedRates).map(currency => ({
        currency,
        rate: noisedRates[currency],
      }));

      // // Sort rates array by rate in descending order
      // ratesArray.sort((a, b) => b.rate - a.rate);

      // Extract labels and data for the chart
      const labels = ratesArray.map(currency => currency.currency);
      const data = ratesArray.map(currency => currency.rate);

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

  const maxYAxisValue = Math.max(...currencyData) * 1.1; // Adjust the multiplier as needed for desired height

  const chartOptions = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Currency',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Rate',
        },
        max: maxYAxisValue, // Set the maximum value for the y-axis
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Top Currencies Exchange Rates',
      },
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.4, // Adjust tension for smoother lines
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Ensure responsiveness
  };

  return (
    <Wrap>
      <Graph>
        <Line data={chartData} options={chartOptions} />
      </Graph>
    </Wrap>
  );
};
