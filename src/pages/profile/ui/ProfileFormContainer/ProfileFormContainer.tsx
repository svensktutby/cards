import React, { FC } from 'react';
import { ProfileForm } from './ProfileForm';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { PATH } from '../../../../main/ui/App/Routes';
import { logoutTC, setError } from '../../../login/bll/loginReducer';

export const ProfileFormContainer: FC = () => {
  const dispatch = useDispatch();

  const { LOGIN } = PATH;
  const loading = useTypedSelector<boolean>(
    (state) => state.login.loading,
  );

  const sendLogOut = () => {
    dispatch(logoutTC());
  };

  const userId = useTypedSelector<string | null>((state) => state.login.user._id);
  const error = useTypedSelector<string>((state) => state.login.error);
  const closeMessage = (error: string) => {
    dispatch(setError(error));
  };

  return <ProfileForm
    loading={loading}
    sendLogOut={sendLogOut}
    error={error}
    closeMessage={closeMessage}
    redirectLink={LOGIN}
    userId={userId}
  />;
};

export type LoginLinkType = {
  link: string;
  title: string;
};