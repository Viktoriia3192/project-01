import { axiosInstance } from '../constants';
import { setToken } from './authAPI';

export const requestRefreshUser = async () => {
  const { data } = await axiosInstance.get('users/current');
  setToken(data.token);
  return data;
};

export const requestAvatarUpdate = async (avatar) => {
  const formData = new FormData();
  formData.append('avatarURL', avatar);

  const { data } = await axiosInstance.patch('users/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  setToken(data.token);
  return data.avatarURL;
};

export const requestUserInfoUpdate = async (userData) => {
  const { data } = await axiosInstance.patch('users', userData);
  setToken(data.token);
  return data;
};

export const requestUpdateWaterRate = async (rate) => {
  const { data } = await axiosInstance.patch('users/water-rate', rate);
  setToken(data.token);
  return data.waterRate;
};
