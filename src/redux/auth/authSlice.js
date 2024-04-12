import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logOutThunk,
  refreshUserThunk,
  signInThunk,
  signUpThunk,
} from './authOperations';
import {
  updateWaterRateThunk,
  userAvatarThunk,
  userInfoThunk,
} from '../userInfo/userInfoOperations';

const initialState = {
  user: {
    email: '',
    avatarURL: '',
    userName: '',
    gender: '',
    waterRate: 1500,
  },
  token: null,
  isSignedIn: false,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isSignedIn = true;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isSignedIn = true;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isSignedIn = true;
      })
      .addCase(userInfoThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isSignedIn = true;
      })
      .addCase(userAvatarThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.avatarURL = payload;
        state.isSignedIn = true;
      })
      .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.waterRate = payload;
      })
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          logOutThunk.pending,
          signInThunk.pending,
          refreshUserThunk.pending,
          userInfoThunk.pending,
          updateWaterRateThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          logOutThunk.rejected,
          signInThunk.rejected,
          signUpThunk.rejected,
          refreshUserThunk.rejected,
          userInfoThunk.rejected,
          updateWaterRateThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});
export const authReducer = authSlice.reducer;
