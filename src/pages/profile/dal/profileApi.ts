import { API } from '../../../main/dal/api';

export const logOutAPI = {
  logOut() {
    return API.delete(`auth/me`)
      .then(response => response.data);
  },
};
export const isAuthAPI = {
  isAuth() {
    return API.post(`auth/me`)
      .then(response => response.data);
  },
};