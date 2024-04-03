import api from '../../configAxios/api';
import { setToken, clearToken } from '../../configAxios/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post('/auth/sign-up', credentials);
      setToken(res.data.token);
      console.log('Registration successful:', res.data);
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
      console.log('Login successful:', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Login failed. Please try again.'
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const navigate = useNavigate(); // Initialize useHistory hook

  try {
    // Make sure the endpoint matches your backend API's logout endpoint
    await api.delete('/auth/sign-out');
    clearToken();
    console.log('Logout successful');

    // Redirect to the login page after successful logout
    navigate.push('/login'); // Replace '/login' with your actual login page route
  } catch (error) {
    console.error('Logout failed:', error);
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || 'Logout failed.'
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
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
