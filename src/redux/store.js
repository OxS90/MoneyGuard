import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import persistedAuthReducer from '../redux/authorisation/slice';
import { statisticsReducer } from './statistics/slice';
import persistedBalanceReducer from './balance/balanceSlice';
import persistedTransactionsReducer from './transactions/slice';
import { modalReducer } from '../redux/modal/slice';
import currencyReducer from '../redux/currency/slice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    statistics: statisticsReducer,
    transactions: persistedTransactionsReducer,
    balance: persistedBalanceReducer,
    modal: modalReducer,
    currency: currencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
