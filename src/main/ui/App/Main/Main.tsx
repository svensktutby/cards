import React, { FC, useEffect } from 'react';

import s from './Main.module.scss';
import { Routes } from '../Routes';
import { useDispatch } from 'react-redux';
import { isAuthTC } from '../../../../pages/login/bll/loginReducer';

export const Main: FC = () => {

  return (
    <main className={s.main}>
      <div className={s.container}>
        <Routes />
      </div>
    </main>
  );
};
