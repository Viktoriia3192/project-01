import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://project01-water-backend.onrender.com/api/',
});
// export const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3030/api/',
// });
