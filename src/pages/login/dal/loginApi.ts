import { UserType } from '../bll/loginReducer';
import { API } from '../../../main/dal/api';

export const authAPI = {
  login(email: string, password: string, rememberMe = false) {
    return API.post<UserType>(`auth/login`, { email, password, rememberMe })
      .then(response => response.data);
  },
};