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
import { PersistedAuthReducer } from '../redux/authorisation/slice';
import { statisticsReducer } from './statistics/slice';
import { PersistedTransactionReducer } from './transactions/slice';

export const store = configureStore({
  reducer: {
    auth: PersistedAuthReducer,
    statistics: statisticsReducer,
    transactions: PersistedTransactionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
