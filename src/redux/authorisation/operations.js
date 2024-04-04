
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken, clearToken } from '../../configAxios/api';
import { toast } from 'react-toastify';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await api.post('/auth/sign-up', credentials);
      setToken(res.data.token);
      console.log('Registration successful:', res.data.token);

      if (res.data && res.status === 201) {
        const name = credentials.name;
        toast.success(`Welcome to Money Guard, ${name}!`, {
          autoClose: 1200,
        });
      }
      return res.data;
    } catch (error) {
      if (error.res) {
        if (error.res.status === 409) {
          toast.error('Email is already in use!', {
            position: 'top-right',
            autoClose: 1200,
          });
          return thunkApi.rejectWithValue(error.message);
        }
      }
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await api.post('/auth/sign-in', credentials);
      setToken(res.data.token);
      console.log('Login successful:', res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  console.log(savedToken);
  try {
    await api.delete('/auth/sign-out');
    clearToken();
    console.log('Logout successful');
  } catch (error) {
    console.error('Logout failed:', error);
    return thunkApi.rejectWithValue(
      error.response?.data?.message || 'Logout failed.'
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    setToken(savedToken);
    try {
      const res = await api.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || 'Unable to fetch user data.'
      );
    }
  }
);
