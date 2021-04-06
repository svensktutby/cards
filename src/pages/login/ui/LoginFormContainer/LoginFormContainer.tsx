import React, { FC } from 'react';
import { LoginForm } from './LoginForm';
import { PATH } from '../../../../main/ui/App/Routes';
import {
  capitalizeFirstLetter,
  transformLinkToTitle,
} from '../../../../utils/textTransform';

export const LoginFormContainer: FC = () => {
  const { RECOVERY_PASS } = PATH;
  const { REGISTRATION } = PATH;

  const loginLinks: LoginLinksType = {
    links: [RECOVERY_PASS, REGISTRATION],
    titles: [
      capitalizeFirstLetter(transformLinkToTitle(' Forgot password?')),
      capitalizeFirstLetter(transformLinkToTitle(' Registration')),
    ],
  };
  return <LoginForm loginLinks={loginLinks} />;
};

export type LoginLinksType = {
  links: string[];
  titles: string[];
};
