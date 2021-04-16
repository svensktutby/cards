import React, { FC, FormEvent, useEffect, useState } from 'react';

import s from './LoginForm.module.scss';
import { InputText } from '../../../../common/ui/InputText';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '../../../../common/ui/Button';
import { LoginLinkType } from './LoginFormContainer';
import { InputCheckbox } from '../../../../common/ui/InputCheckbox';
import { randomId } from '../../../../utils/randomId';
import { Preloader } from '../../../../common/ui/Preloader';
import { useInput } from '../../../../hooks/ValidationFormAndrew';
import { ErrorMessage } from '../../../../common/ui/ErrorMessage';

type PropsType = {
  loginLinks: LoginLinkType[];
  sendLogin: (email: string, password: string, rememberMe: boolean) => void;
  closeMessage: (error: string) => void;
  loading: boolean;
  success: boolean;
  setSuc: (success: boolean) => void;
  error: string;
  redirectLink: string;
};

export const LoginForm: FC<PropsType> = ({
                                           loginLinks,
                                           sendLogin,
                                           loading,
                                           success,
                                           setSuc,
                                           error,
                                           closeMessage,
                                           redirectLink,
                                         }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const email = useInput('', { isEmail: true });
  const password = useInput('', { minLength: 8, isPassword: true });

  useEffect(() => {
    if (success) {
      email.setValue('');
      password.setValue('');
      setRememberMe(false);
      setSuc(false);
    }
  }, [success, setSuc]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (email.value.trim() && password.value.trim()) {
      sendLogin(email.value, password.value, rememberMe);
    }
  };

  const closeMessageHandler = (obj: any) => () => {
    closeMessage('');
    if (obj !== '') {
      obj.setDirty(false)}
  };

  if (success) {
    return <Redirect to={redirectLink} />;
  }

  return <form className={s.form} onSubmit={submitHandler}>
    <div className={s.messageWrapper}>
      {loading && <Preloader text='Sending...' />}
      {error && (
        <ErrorMessage clickHandler={closeMessageHandler('')}>
          {error}
        </ErrorMessage>
      )}
    </div>

    {email.isDirty && email.inputError && (
      <ErrorMessage clickHandler={closeMessageHandler(email)}>
        {email.inputError}
      </ErrorMessage>
    )}

    <InputText placeholder={'Login'}
               type={'email'}
               onChange={e => email.onChange(e)}
               onBlur={e => email.onBlur(e)}
               value={email.value}
               disabled={loading}
    />

    {password.isDirty && password.inputError &&(
      <ErrorMessage clickHandler={closeMessageHandler(password)}>
        {password.inputError}
      </ErrorMessage>
    )}
    <InputText placeholder={'Password'}
               type={'password'}
               onChange={e => password.onChange(e)}
               onBlur={e => password.onBlur(e)}
               value={password.value}
               disabled={loading}
    />
    <InputCheckbox type={'checkbox'}
                   checked={rememberMe}
                   onChangeChecked={setRememberMe}
    > Remember me
    </InputCheckbox>

    <Button type='submit' disabled={!email.inputValid || !password.inputValid || loading}>Submit</Button>

    <div className={s.linksForm}>
      {loginLinks.map(({ link, title }) => (
        <Link key={randomId()} to={link} className={s.link}>
          {title}
        </Link>
      ))}
    </div>
  </form>;
};
