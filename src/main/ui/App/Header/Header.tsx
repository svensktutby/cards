import React, { FC, useEffect } from 'react';

import s from './Header.module.scss';
import { NavContainer } from './Nav/NavContainer';
import { useDispatch } from 'react-redux';
import { isAuthTC } from '../../../../pages/login/bll/loginReducer';

export const Header: FC = () => {

  return (
    <header className={s.header}>
      <div className={s.container}>
        <NavContainer />
      </div>
    </header>
  );
};