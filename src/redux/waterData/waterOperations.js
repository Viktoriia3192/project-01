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
  'water-notes/today',
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
  'water-notes/month',
  async (date, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      const response = await requestMonth(date);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterThunk = createAsyncThunk(
  'water-notes',
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
  'water-notes/delete-dose-water',
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
  'water-notes/update-dose-water',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      //тут потрібно змінити id i newData на те що буде передано з EditWaterModal
      const { id, newData } = data;
      const response = await requestUpdateWater(id, newData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
