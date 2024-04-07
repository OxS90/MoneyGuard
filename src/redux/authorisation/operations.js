import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken, clearToken } from '../../configAxios/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await api.post('/auth/sign-up', credentials);
      setToken(res.data.token);
      toast.success('Registration successful!', {
        position: 'top-right',
        autoClose: 5000,
      });
      return res.data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error('Validation error. Please check your input!', {
          position: 'top-right',
          autoClose: 5000,
        });
      } else if (error.res) {
        if (error.res.status === 409) {
          toast.error('User with such email already exists!', {
            position: 'top-right',
            autoClose: 5000,
          });
          return thunkApi.rejectWithValue(
            error.res.data.message || 'Registration failed. Please try again.'
          );
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
      const { username } = res.data.user;
      toast.success(`Welcome back, ${username}!`, {
        position: 'top-right',
        autoClose: 5000,
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          toast.error('Validation error. Please check your input!', {
            position: 'top-right',
            autoClose: 5000,
          });
        } else if (status === 403) {
          toast.error('Forbidden. Provided password is incorrect!', {
            position: 'top-right',
            autoClose: 5000,
          });
        } else if (status === 404) {
          toast.error('User with such email not found. Please register!', {
            position: 'top-right',
            autoClose: 5000,
          });
        }
        return thunkApi.rejectWithValue(
          error.response.data.message || 'Login failed. Please try again.'
        );
      }
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await api.delete('/auth/sign-out');
    clearToken();
    toast.success('Logout successful!', {
      position: 'top-right',
      autoClose: 5000,
    });
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        toast.error('Unauthorized. Please login again!', {
          position: 'top-right',
          autoClose: 5000,
        });
      }
      return thunkApi.rejectWithValue(
        error.response.data.message || 'Logout failed.'
      );
    }
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
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          toast.error('Unauthorized. Please login again!', {
            position: 'top-right',
            autoClose: 5000,
          });
        }
        return thunkApi.rejectWithValue(
          error.response.data.message || 'Unable to fetch user data.'
        );
      }
    }
  }
);
