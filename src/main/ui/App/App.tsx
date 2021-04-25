import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './App.module.scss';
import { Header } from './Header';
import { Main } from './Main';
import { isAuthTC } from '../../../pages/login/bll/loginReducer';
import { Preloader } from '../../../common/ui/Preloader';

export const App: FC = () => {
  const dispatch = useDispatch<(action: Function) => Promise<void>>();
  const [init, setInit] = useState(false);
  useEffect(() => {
    dispatch(isAuthTC()).then(res => setInit(true));
  }, []);
  return (
    <div className={s.app}>
      <Header />

      {init ? <Main /> : <Preloader />}
    </div>
  );
};
