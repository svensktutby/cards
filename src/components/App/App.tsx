import React, { FC } from 'react';

import s from './App.module.scss';
import { Header } from '../Header';
import { Profile } from '../pages/Profile';

export const App: FC = () => {
  return (
    <div className={s.app}>
      <Header />

      <div className={s.container}>
        <Profile />
      </div>
    </div>
  );
};
