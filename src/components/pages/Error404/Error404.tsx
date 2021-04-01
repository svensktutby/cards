import React, { FC } from 'react';

import s from './Error404.module.scss';

export const Error404: FC = () => {
  return (
    <div className={s.error404}>
      <h1>Not Found</h1>
    </div>
  );
};
