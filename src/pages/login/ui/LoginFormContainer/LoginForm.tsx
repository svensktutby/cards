import React, { FC, FormEvent, useEffect, useState } from 'react';

import s from './LoginForm.module.scss';
import { InputText } from '../../../../common/ui/InputText';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '../../../../common/ui/Button';
import { LoginLinkType } from './LoginFormContainer';
import { InputCheckbox } from '../../../../common/ui/InputCheckbox';
import { randomId } from '../../../../utils/randomId';
import { ErrorMessage } from '../../../../common/ui/ErrorMassage';

type PropsType = {
  loginLinks: LoginLinkType[];
  sendLogin: (email: string, password: string, rememberMe: boolean) => void;
  closeMessage: (error: string) => void;
  success: boolean;
  setSuc: (success: boolean) => void;
  error: string;
  redirectLink: string;
};

export const LoginForm: FC<PropsType> = ({
                                           loginLinks,
                                           sendLogin,
                                           success,
                                           setSuc,
                                           error,
                                           closeMessage,
                                           redirectLink,
                                         }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (success) {
      setEmail('');
      setPassword('');
      setRememberMe(false);
      setSuc(false);
    }
  }, [success, setSuc]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      sendLogin(email, password, rememberMe);
    }
  };

  const closeMessageHandler = () => {
    closeMessage('');
  };

  if (success) {
    return <Redirect to={redirectLink} />;
  }

  return <form className={s.form} onSubmit={submitHandler}>
    <div className={s.messageWrapper}>
      {error && (
        <ErrorMessage clickHandler={closeMessageHandler}>
          {error}
        </ErrorMessage>
      )}
    </div>

    <InputText placeholder={'Login'}
               type={'email'}
               onChangeText={setEmail}
               value={email}
    />
    <InputText placeholder={'Password'}
               type={'password'}
               onChangeText={setPassword}
               value={password}
    />
    <InputCheckbox type={'checkbox'}
                   checked={rememberMe}
                   onChangeChecked={setRememberMe}
    > Remember me
    </InputCheckbox>

    <Button type='submit'>Submit</Button>

    <div className={s.linksForm}>
      {loginLinks.map(({ link, title }) => (
        <Link key={randomId()} to={link} className={s.link}>
          {title}
        </Link>
      ))}
    </div>
  </form>;
};
