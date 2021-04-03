import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import s from './App.module.scss';
import { store } from '../../bll/store';
import { Header } from './Header';
import { Main } from './Main';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={s.app}>
          <Header />

          <Main />
        </div>
      </Router>
    </Provider>
  );
};
