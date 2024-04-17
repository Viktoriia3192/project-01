import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://project01-water-backend.onrender.com:3030/api/',
});
