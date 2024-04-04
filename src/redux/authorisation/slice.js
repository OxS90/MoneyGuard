import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// Check if a token exists in local storage
const getTokenFromStorage = () => {
  return localStorage.getItem('authToken');
};

const initialState = {
  user: { username: null, email: null, balance: null },
  token: getTokenFromStorage(), // Initialize token from local storage
  isLoggedIn: !!getTokenFromStorage(), // Check if token exists for initial isLoggedIn state
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Add a reducer to clear token from local storage during logout
    clearToken: state => {
      localStorage.removeItem('authToken');
      state.token = null;
      state.isLoggedIn = false;
      state.user = { username: null, email: null };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const { clearToken } = authSlice.actions; // Export clearToken action

const authReducer = authSlice.reducer;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export default persistedAuthReducer;
