import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrency.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload.data;
      });
  },
});

const currencyReducer = currencySlice.reducer;

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['data', 'fetchingTime'],
};
export const persistedCurrencyReducer = persistReducer(
  currencyPersistConfig,
  currencyReducer
);

export default persistedCurrencyReducer;
