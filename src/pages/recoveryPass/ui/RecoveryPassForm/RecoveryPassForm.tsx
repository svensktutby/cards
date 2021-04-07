import React, { FC, FormEvent, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import s from './RecoveryPassForm.module.scss';
import { InputText } from '../../../../common/ui/InputText';
import { Button } from '../../../../common/ui/Button';
import { LoginLinkType } from './RecoveryPassFormContainer';
import { Preloader } from '../../../../common/ui/Preloader';

type PropsType = {
  loginLink: LoginLinkType;
  sendEmail: (email: string) => void;
  loading: boolean;
  success: boolean;
  error?: string;
  redirectLink: string;
};

export const RecoveryPassForm: FC<PropsType> = ({
  loginLink: { link, title },
  sendEmail,
  loading,
  success,
  redirectLink,
}) => {
  const [email, setEmail] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim()) {
      sendEmail(email);
    }
  };

  if (success) {
    setEmail('');

    return <Redirect to={redirectLink} />;
  }

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <div className={s.preloaderWrapper}>
        {loading && <Preloader text="Sending..." />}
      </div>

      <InputText
        type="email"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        disabled={loading}
      />

      <Button type="submit" disabled={loading}>
        Submit
      </Button>

      <Link to={link} className={s.link}>
        {title}
      </Link>
    </form>
  );
};
