import React, { FC } from 'react';

import s from './RecoveryPassPage.module.scss';
import { RecoveryPassFormContainer } from './RecoveryPassForm/RecoveryPassFormContainer';

export const RecoveryPassPage: FC = () => {
  return (
    <section className={s.page}>
      <h2>Recovery Password</h2>

      <RecoveryPassFormContainer />
    </section>
  );
};
