import axios from 'axios';

import { DEV } from '../../config';

export const baseURL = DEV
  ? 'http://localhost:7542/2.0/'
  : 'https://neko-back.herokuapp.com/2.0/';

export const API = axios.create({
  baseURL,
  withCredentials: true,
});

export type RegistrationType = {
  success: boolean;
  error: string;
}

export const authAPI = {
    registration(email: string, password: string) {
        return API.post<RegistrationType>(`auth/login`, { email, password })
            .then(response => response.data);
    },
};

