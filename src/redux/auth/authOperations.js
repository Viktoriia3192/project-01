import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestLogIn,
  requestLogOut,
  requestSignUp,
  setToken,
} from '../../services/authAPI';
import { toastError, toastSuccess } from '../../services/toastNotification';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const response = await requestSignUp(formData);
      toastSuccess('Successfully signed up');
      return response;
    } catch (error) {
      toastError('Failed to sign up. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogIn(formData);
      toastSuccess('Successfully logged in');
      return response;
    } catch (error) {
      toastError('Failed to log in. Try again');
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
      toastSuccess('Successfully loggged out');
      return;
    } catch (error) {
      toastError('Failed to log out. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
