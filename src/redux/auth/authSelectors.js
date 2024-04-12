export const selectAuthToken = (state) => state.auth.token;
export const selectAuthUserData = (state) => state.auth.user;
export const selectAuthIsSignedIn = (state) => state.auth.isSignedIn;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
