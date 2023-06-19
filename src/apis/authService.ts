import { apiClient } from '../helpers/httpClient';
import { localStorage } from '../helpers/localStorage';
import type { LogInParams } from './models/LogInParams';
import { RegisterParams } from './models/RegisterParams';
import { history } from '../pages/app/BrowserRouter';

const API_URL = import.meta.env.VITE_API_URL;

export const authService = {
  logIn(data: LogInParams) {
    return apiClient
      .post(API_URL + '/auth/signin', data)
      .then(({data}) => data)
      .catch((error) => {
        throw error.response;
      });
  },
  register(data: RegisterParams) {
    return apiClient
      .post(API_URL + '/auth/signup', data)
      .then(({data}) => data)
      .catch((error) => {
        throw error.response;
      });
  },
  getToken() {
    const token = localStorage.get('token');
    return JSON.parse(token);
  },
  logout () {
    localStorage.clear();
    history.push('/');
  },
};
