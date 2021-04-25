import React, { FC } from 'react';
import { ProfileForm } from './ProfileForm';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { PATH } from '../../../../main/ui/App/Routes';
import { changeAuthTC, logoutTC, setError } from '../../../login/bll/loginReducer';

export const ProfileFormContainer: FC = () => {
  const dispatch = useDispatch();

  const { LOGIN } = PATH;
  const loading = useTypedSelector<boolean>(
    (state) => state.login.loading,
  );

  const changeAuth = (name: string, avatar: string) => {
    dispatch(changeAuthTC(name, avatar));
  };
  const sendLogOut = () => {
    dispatch(logoutTC());
  };

  const userId = useTypedSelector<string>((state) => state.login.user._id);
  const user = useTypedSelector<any>((state) => state.login.user);
  const error = useTypedSelector<string>((state) => state.login.error);
  const closeMessage = (error: string) => {
    dispatch(setError(error));
  };

  return <ProfileForm
    loading={loading}
    sendLogOut={sendLogOut}
    changeAuth={changeAuth}
    error={error}
    closeMessage={closeMessage}
    redirectLink={LOGIN}
    userId={userId}
    user={user}
  />;
};
