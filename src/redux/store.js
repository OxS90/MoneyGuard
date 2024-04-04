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
import { authReducer } from '../redux/authorisation/slice';
import { statisticsReducer } from './statistics/slice';
import balanceReducer from './balance/balanceSlice'; // Balance Backend Ciprian
import { transactionsReducer } from './transactions/slice';
import { modalReducer } from '../redux/modal/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    statistics: statisticsReducer,
    transactions: transactionsReducer,
    balance: balanceReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
