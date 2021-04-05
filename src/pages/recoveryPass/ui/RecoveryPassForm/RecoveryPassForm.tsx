import React, { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import s from './RecoveryPassForm.module.scss';
import { InputText } from '../../../../common/ui/InputText';
import { Button } from '../../../../common/ui/Button';
import { LoginLinkType } from './RecoveryPassFormContainer';

type PropsType = {
  loginLink: LoginLinkType;
};

export const RecoveryPassForm: FC<PropsType> = ({
  loginLink: { link, title },
}) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <InputText type="email" placeholder="Email" />

      <Link to={link} className={s.link}>
        {title}
      </Link>

      <Button type="submit">Submit</Button>
    </form>
  );
};
