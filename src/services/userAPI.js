import { axiosInstance } from '../constants';
import { setToken } from './authAPI';

export const requestAvatarUpdate = async (avatar) => {
  const formData = new FormData();
  formData.append('picture', avatar);

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
  return data.user;
};
