import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import {
  capitalizeFirstLetter,
  transformLinkToTitle,
} from '../../../../utils/textTransform';
import { PATH } from '../../../../main/ui/App/Routes';
import { RecoveryPassForm } from './RecoveryPassForm';
import { sendEmailAsync } from '../../bll/recoveryPassThunk';

export const RecoveryPassFormContainer: FC = () => {
  const { LOGIN, SET_PASS } = PATH;

  const loginLink: LoginLinkType = {
    link: LOGIN,
    title: capitalizeFirstLetter(transformLinkToTitle(LOGIN)),
  };

  const dispatch = useDispatch();

  const loading = useTypedSelector<boolean>(
    (state) => state.recoveryPass.loading,
  );
  const success = useTypedSelector<boolean>(
    (state) => state.recoveryPass.success,
  );

  const sendEmail = (email: string) => {
    dispatch(sendEmailAsync(email));
  };

  return (
    <RecoveryPassForm
      loginLink={loginLink}
      sendEmail={sendEmail}
      loading={loading}
      success={success}
      redirectLink={SET_PASS}
    />
  );
};

export type LoginLinkType = {
  link: string;
  title: string;
};
