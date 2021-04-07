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

  const loginLinks: LoginLinkType[] = [
    {
      link: RECOVERY_PASS,
      title: capitalizeFirstLetter(transformLinkToTitle(' Forgot password?')),
    },
    {
      link: REGISTRATION,
      title: capitalizeFirstLetter(transformLinkToTitle(' Registration')),
    },
  ];
  return <LoginForm loginLinks={loginLinks} />;
};

export type LoginLinkType = {
  link: string;
  title: string;
};
