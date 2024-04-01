import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { api } from '../../configAxios/api';

export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/transactions');
      const data = response.data;

      localStorage.setItem('transactions', JSON.stringify(data));

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/transactions/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (data, { rejectWithValue }) => {
    try {
      const { transactionDate, type, categoryId, comment, amount } = data;

      const transactionData = {
        transactionDate: new Date(transactionDate).toISOString(),
        type: type.toUpperCase(),
        categoryId,
        comment,
        amount: parseFloat(amount),
      };

      const response = await api.post('/transactions', transactionData);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      return rejectWithValue(error.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  'transactions/editTransaction',
  async ({ id, values }, thunkAPI) => {
    try {
      if (values.type === 'income') {
        const { category, ...changedData } = values;
        const response = await api.patch(`/transactions/${id}`, changedData);
        return response.data;
      } else {
        const response = await api.patch(`/transactions/${id}`, values);
        return response.data;
      }
    } catch (e) {
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'transactions/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/transaction-categories`);
      localStorage.setItem('categories', JSON.stringify(response.data));
    } catch (e) {
      toast.error(e.response.data.message);
      return rejectWithValue(e.message);
    }
  }
);
