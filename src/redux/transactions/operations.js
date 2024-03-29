import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.b.goit.study';

export const getTransaction = createAsyncThunk(
  'transaction/getTransaction',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/transactions');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.delete('/api/transactions/{transactionId}');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
