import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencyRates } from './operations';

const initialState = {
  rates: null,
  isLoading: false,
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrencyRates.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload.rates;
      })
      .addCase(fetchCurrencyRates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
