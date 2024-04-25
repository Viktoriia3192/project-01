export const selectAuthToken = (state) => state.auth.token;
export const selectAuthUserData = (state) => state.auth.user;
export const selectAuthIsSignedIn = (state) => state.auth.isSignedIn;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const getStartDay = (state) => state.auth.user.createdAt;
// export const selectWaterRate = (state) => state.auth.user.waterRate;
