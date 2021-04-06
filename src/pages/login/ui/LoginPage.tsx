import React, { FC } from 'react';

import s from './LoginPage.module.scss';
import { LoginFormContainer } from './LoginFormContainer/LoginFormContainer';

export const LoginPage: FC = () => {
  return (
    <section className={s.page}>
      <h2>Login</h2>

      <LoginFormContainer />
    </section>
  );
};
