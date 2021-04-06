import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import {
  capitalizeFirstLetter,
  transformLinkToTitle,
} from '../../../../utils/textTransform';
import { PATH } from '../../../../main/ui/App/Routes';
import { RecoveryPassForm } from './RecoveryPassForm';
import { recoveryPassActions } from '../../bll/recoveryPassActions';

export const RecoveryPassFormContainer: FC = () => {
  const { LOGIN } = PATH;

  const loginLink: LoginLinkType = {
    link: LOGIN,
    title: capitalizeFirstLetter(transformLinkToTitle(LOGIN)),
  };

  const dispatch = useDispatch();

  const sendEmail = (email: string) => {
    dispatch(recoveryPassActions.setRequest(email));
  };

  return <RecoveryPassForm loginLink={loginLink} sendEmail={sendEmail} />;
};

export type LoginLinkType = {
  link: string;
  title: string;
};
