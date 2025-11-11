import axios from 'axios';

const apiUrl = process.env.API_URL;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000,
});

api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log('Request Error:', error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    console.log(err);
  },
);

export default api;
