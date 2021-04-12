
import {API} from "../../../main/dal/api";



export type RegistrationType = {
  success: boolean;
  error: string;
}

export const authAPI = {
    registration(email: string, password: string) {
        return API.post<RegistrationType>(`auth/register`, { email, password })
            .then(response => response.data);
    },
};

