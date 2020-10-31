import {create} from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3001',
  timeout: 3000,
  headers: {
    Accept: 'application/json'
  }
});

export default api;
