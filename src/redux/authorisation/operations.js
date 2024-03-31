import axios from 'axios';
import { api, setToken, clearToken } from '../../configAxios/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post('/auth/sign-up', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Registration failed. Please try again.'
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post('/auth/sign-in', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Login failed. Please try again.'
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.delete('/auth/sign-out');
    clearToken();
    return null; // Return a value even if it's null
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || 'Logout failed.'
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Token is missing.');
    }

    try {
      setToken(persistedToken);
      const res = await api.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Unable to fetch user data.'
      );
    }
  }
);
