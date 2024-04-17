import { axiosInstance } from '../constants';
import { setToken } from './authAPI';

export const requestToday = async () => {
  const { data } = await axiosInstance.get('water-notes/today');
  setToken(data.token);
  return data;
};

export const requestMonth = async (month) => {
  const { data } = await axiosInstance.get(`water-notes/month/${month}`);
  setToken(data.token);
  return data;
};

export const requestAddWater = async (waterData) => {
  const { data } = await axiosInstance.post('water-notes/', waterData);
  setToken(data.token);
  return data;
};

export const requestDeleteWater = async (waterId) => {
  const { data } = await axiosInstance.delete(`water-notes/${waterId}`);
  setToken(data.token);
  return data;
};

export const requestUpdateWater = async (waterId, waterData) => {
  const { data } = await axiosInstance.patch(
    `water-notes/${waterId}`,
    waterData
  );
  setToken(data.token);
  return data;
};

export const requestUpdateWaterRate = async (rate) => {
  const { data } = await axiosInstance.patch(`users/waterrate`, rate);
  setToken(data.token);
  return data.waterRate;
};
