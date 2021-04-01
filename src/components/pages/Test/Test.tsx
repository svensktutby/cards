import React, { FC } from 'react';

import s from './Test.module.scss';

export const Test: FC = () => {
  return (
    <div className={s.test}>
      <div>Test</div>
    </div>
  );
};
