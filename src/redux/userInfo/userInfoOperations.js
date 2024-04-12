import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { setToken } from '../../services/authAPI';
import {
  requestAvatarUpdate,
  requestUserInfoUpdate,
} from '../../services/userAPI';
import { requestUpdateWaterRate } from '../../services/waterDataAPI';

export const userAvatarThunk = createAsyncThunk(
  'users/avatar',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestAvatarUpdate(data);
      toast.success('Avatar updated successfully');
      return response;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userInfoThunk = createAsyncThunk(
  'users',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestUserInfoUpdate(data);
      toast.success('User info updated successfully');
      return response;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterRateThunk = createAsyncThunk(
  'waterrate/update',
  async (newWaterRate, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestUpdateWaterRate(newWaterRate);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
