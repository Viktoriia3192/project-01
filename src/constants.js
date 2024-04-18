import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://project01-water-backend.onrender.com/api/',
});
