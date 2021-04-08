import { API } from '../../../main/dal/api';
import { message } from './messageTemplate';

export type RequestDataType = {
  email: string;
  from?: string;
  message?: string;
};

type ResponseDataType = {
  info: string;
  success: boolean;
  answer: boolean;
  html: boolean;
};

export const recoveryPassApi = {
  sendEmail({ email }: RequestDataType): Promise<ResponseDataType> {
    return API.post<ResponseDataType>(`auth/forgot`, {
      email,
      from: 'Andrei Shved  <svensk.tut.by@gmail.com>',
      message,
    }).then((res) => res.data);
  },
};
