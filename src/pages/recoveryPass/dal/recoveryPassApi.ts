import { API } from '../../../main/dal/api';

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
      from: 'svensktutby  <svensk.tut.by@gmail.com>',
      message: `<div style="background-color: #17a2b8; padding: 15px; font-size: 20px">
                            password recovery link: <a href='http://localhost:3000/Progect#/set-pass/$token$'>link</a>
                      </div>`,
    }).then((res) => res.data);
  },
};

// {info: "sent —ฅ/ᐠ.̫ .ᐟ\ฅ—", success: true, answer: false, html: false}
