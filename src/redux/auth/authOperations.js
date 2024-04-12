import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestLogIn,
  requestLogOut,
  requestRefreshUser,
  requestSignUp,
  setToken,
} from '../../services/authAPI';
import { toast } from 'react-toastify';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const response = await requestSignUp(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogIn(formData);
      toast.success('Successfully logged in');
      return response;
    } catch (error) {
      toast.error('Failed to log in. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      await requestLogOut();
      toast.success('Successfully loggged out');
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestRefreshUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const token = thunkAPI.getState().auth.token;
      if (!token) return false;
      return true;
    },
  }
);
