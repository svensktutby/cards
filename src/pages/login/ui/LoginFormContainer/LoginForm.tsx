import React, { FC, FormEvent } from 'react';

import s from './LoginForm.module.scss';
import { InputText } from '../../../../common/ui/InputText';
import { Link } from 'react-router-dom';
import { Button } from '../../../../common/ui/Button';
import { LoginLinksType } from './LoginFormContainer';
import { InputCheckbox } from '../../../../common/ui/InputCheckbox';

type PropsType = {
  loginLinks: LoginLinksType;
};

export const LoginForm: FC<PropsType> = ({ loginLinks: { links, titles }  }) => {
  const [ForgotPassTitle, regTitle] = titles;
  const [recoveryLink, regLink] = links;
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <InputText placeholder={'Login'} type={'email'} />
      <InputText placeholder={'Password'} type={'password'} />
      <InputCheckbox type={'checkbox'}>Remember me</InputCheckbox>

      <Button type="submit">Submit</Button>

      <div className={s.linksForm}>
        <Link to={recoveryLink} className={s.link}>
          {ForgotPassTitle}
        </Link>
        <Link to={regLink} className={s.link}>
          {regTitle}
        </Link>
      </div>
    </form>
  );
};
