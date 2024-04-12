import { createAsyncThunk } from '@reduxjs/toolkit';

import { setToken } from '../../services/authAPI';
import {
  requestAddWater,
  requestDeleteWater,
  requestMonth,
  requestToday,
  requestUpdateWater,
} from '../../services/waterDataAPI';

export const todayThunk = createAsyncThunk(
  'waterdata/today',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestToday();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const monthThunk = createAsyncThunk(
  'waterdata/month',
  async (month, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      const response = await requestMonth(month + 1);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterThunk = createAsyncThunk(
  'waterdata/add',
  async (waterData, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      const response = await requestAddWater(waterData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'waterdata/delete',
  async (waterId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      const response = await requestDeleteWater(waterId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterThunk = createAsyncThunk(
  'waterdata/update',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      const { id, newData } = data;
      const response = await requestUpdateWater(id, newData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
