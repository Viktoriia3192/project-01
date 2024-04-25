import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addWaterThunk,
  deleteWaterThunk,
  monthThunk,
  todayThunk,
  updateWaterThunk,
} from './waterOperations';

const initialState = {
  todayWater: {},
  monthWater: [],
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'waterData',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(todayThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todayWater = payload;
        state.error = null;
      })
      .addCase(monthThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.monthWater = payload;
        state.error = null;
      })
      .addCase(addWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.todayWater.dosesWater.length) {
          state.todayWater.dosesWater = [
            ...state.todayWater.dosesWater,
            payload,
          ];
        } else {
          state.todayWater.dosesWater.push(payload);
        }
        state.error = null;
      })

      .addCase(updateWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        const updateIndex = state.todayWater.dosesWater.findIndex(
          (item) => item._id === payload._id
        );
        if (updateIndex !== -1) {
          state.todayWater.dosesWater[updateIndex] = payload;
        }
        state.error = null;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.todayWater.dosesWater = state.todayWater.dosesWater.filter(
          (item) => item._id !== payload._id
        );
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          todayThunk.pending,
          monthThunk.pending,
          addWaterThunk.pending,
          deleteWaterThunk.pending,
          updateWaterThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          todayThunk.rejected,
          monthThunk.rejected,
          addWaterThunk.rejected,
          deleteWaterThunk.rejected,
          updateWaterThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
console.log(waterSlice)
export const waterDataReducer = waterSlice.reducer;
