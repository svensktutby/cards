import { UserType } from '../bll/loginReducer';
import { api } from '../../../main/dal/api';

export const authAPI = {
  login(email: string, password: string, rememberMe = false) {
    return api.post<UserType>(`auth/login`, { email, password, rememberMe })
      .then(response => response.data);
  },
};