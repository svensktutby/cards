import React, { FC } from 'react';

import s from './TestPage.module.scss';
import { TestContainer } from './TestContainer';

export const TestPage: FC = () => {
  return (
    <div>
      <h1 className={s.title}>Common components:</h1>

      <TestContainer />
    </div>
  );
};
