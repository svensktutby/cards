import React, { FC } from 'react';
import { LoginForm } from './LoginForm';
import { PATH } from '../../../../main/ui/App/Routes';
import { capitalizeFirstLetter, transformLinkToTitle } from '../../../../utils/textTransform';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { loginPageTC, setError, setSuccess } from '../../bll/loginReducer';

export const LoginFormContainer: FC = () => {
  const dispatch = useDispatch();

  const { RECOVERY_PASS, REGISTRATION, PROFILE } = PATH;

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

  const userId = useTypedSelector<string>((state) => state.login.user._id);
  const loading = useTypedSelector<boolean>(
    (state) => state.login.loading,
  );
  const success = useTypedSelector<boolean>(
    (state) => state.login.success,
  );
  const error = useTypedSelector<string>((state) => state.login.error);

  const sendLogin = (email: string, password: string, rememberMe: boolean) => {
    dispatch(loginPageTC(email, password, rememberMe));
  };

  const setSuc = (success: boolean) => {
    dispatch(setSuccess(success));
  };
  const closeMessage = (error: string) => {
    dispatch(setError(error));
  };

  return <LoginForm loginLinks={loginLinks}
                    sendLogin={sendLogin}
                    loading={loading}
                    success={success}
                    userId={userId}
                    setSuc={setSuc}
                    error={error}
                    closeMessage={closeMessage}
                    redirectLink={PROFILE}
  />;
};

export type LoginLinkType = {
  link: string;
  title: string;
};
