import React, { FC } from 'react';

import {
  capitalizeFirstLetter,
  transformLinkToTitle,
} from '../../../../utils/textTransform';
import { PATH } from '../../../../main/ui/App/Routes';
import {RegistrationForm} from "./RegistrationForm";


export const RegistrationFormContainer: FC = () => {
  const { LOGIN } = PATH;

  const loginLink: LoginLinkType = {
    link: LOGIN,
    title: capitalizeFirstLetter(transformLinkToTitle(LOGIN)),
  };

  return <RegistrationForm loginLink={loginLink} />;
};

export type LoginLinkType = {
  link: string;
  title: string;
};
