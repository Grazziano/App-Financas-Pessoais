import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://192.168.0.8:3333',
  timeout: 5000,
});

export default api;
