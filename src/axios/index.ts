import axios from 'axios';

export const instance1 = axios.create({
  baseURL: process.env.INSTANCE1_baseURL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const instance2 = axios.create({
  baseURL: process.env.INSTANCE2_baseURL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
