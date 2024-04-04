import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const AppId = 'b62eb79a7add427d819f49f3ce24b362';

export const fetchCurrency = createAsyncThunk(
  'currency/fetchCurrency',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${AppId}`
      );
      const fetchedCurrency = {
        USD: {
          buy: response.data.rates.USD.buy,
          sale: response.data.rates.USD.sell,
        },
        EUR: {
          buy: response.data.rates.USD.buy,
          sale: response.data.rates.USD.sell,
        },
      };
      const fetchingTime = new Date().toString();
      return { data: fetchedCurrency, fetchingTime };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
