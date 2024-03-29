import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authorisation/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
