import React, { FC } from 'react';

import s from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>Header</div>
    </div>
  );
};
