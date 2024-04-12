import { axiosInstance } from '../constants';

export const setToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestSignUp = async (formData) => {
  const { data } = await axiosInstance.post('auth/signup', formData);
  setToken(data.token);
  return data;
};

export const requestLogIn = async (formData) => {
  const { data } = await axiosInstance.post('auth/signin', formData);
  setToken(data.token);
  return data;
};

export const requestLogOut = async () => {
  const { data } = await axiosInstance.post('auth/logout');
  setToken(data.token);
  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await axiosInstance.get('users/current');
  setToken(data.token);
  return data;
};
