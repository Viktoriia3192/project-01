import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://localhost:5173/project-01/`,
});
