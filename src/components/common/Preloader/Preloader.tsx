import React, { FC } from 'react';

import s from './Preloader.module.scss';

type PropsType = {
  text?: string;
};

export const Preloader: FC<PropsType> = ({ text }) => {
  return (
    <div className={s.preloader}>
      <div className={s.loader}>{text}</div>
    </div>
  );
};
