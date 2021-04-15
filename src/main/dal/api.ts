import axios from 'axios';
import { DEV } from '../../config';

export const baseURL = DEV
  ? 'http://localhost:7542/2.0/'
  : 'https://neko-back.herokuapp.com/2.0/';

export const api = axios.create({
  baseURL,
  withCredentials: true,
});



