import React, { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './RecoveryPassForm.module.scss';
import { InputText } from '../../../../common/ui/InputText';
import { Button } from '../../../../common/ui/Button';
import { LoginLinkType } from './RecoveryPassFormContainer';

type PropsType = {
  loginLink: LoginLinkType;
  sendEmail: (email: string) => void;
};

export const RecoveryPassForm: FC<PropsType> = ({
  loginLink: { link, title },
  sendEmail,
}) => {
  const [emailValue, setEmailValue] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(emailValue);
    setEmailValue('');
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <InputText
        type="email"
        placeholder="Email"
        onChangeText={setEmailValue}
        value={emailValue}
      />

      <Button type="submit">Submit</Button>

      <Link to={link} className={s.link}>
        {title}
      </Link>
    </form>
  );
};
