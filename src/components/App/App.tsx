import React, { FC } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import s from './App.module.scss';
import { Header } from '../Header';
import { Routes } from './Routes';

export const App: FC = () => {
  return (
    <Router>
      <div className={s.app}>
        <Header />

        <div className={s.container}>
          <Routes />
        </div>
      </div>
    </Router>
  );
};
