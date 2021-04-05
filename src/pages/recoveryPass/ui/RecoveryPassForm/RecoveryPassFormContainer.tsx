import React, { FC } from 'react';

import {
  capitalizeFirstLetter,
  transformLinkToTitle,
} from '../../../../utils/textTransform';
import { PATH } from '../../../../main/ui/App/Routes';
import { RecoveryPassForm } from './RecoveryPassForm';

export const RecoveryPassFormContainer: FC = () => {
  const { LOGIN } = PATH;

  const loginLink: LoginLinkType = {
    link: LOGIN,
    title: capitalizeFirstLetter(transformLinkToTitle(LOGIN)),
  };

  return <RecoveryPassForm loginLink={loginLink} />;
};

export type LoginLinkType = {
  link: string;
  title: string;
};
