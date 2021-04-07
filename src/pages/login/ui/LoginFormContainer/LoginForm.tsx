import React, { FC, FormEvent } from 'react';

import s from './LoginForm.module.scss';
import { InputText } from '../../../../common/ui/InputText';
import { Link } from 'react-router-dom';
import { Button } from '../../../../common/ui/Button';
import { LoginLinkType } from './LoginFormContainer';
import { InputCheckbox } from '../../../../common/ui/InputCheckbox';
import { randomId } from '../../../../utils/randomId';

type PropsType = {
  loginLinks: LoginLinkType[];
};

export const LoginForm: FC<PropsType> = ({ loginLinks }) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <InputText placeholder={'Login'} type={'email'} />
      <InputText placeholder={'Password'} type={'password'} />
      <InputCheckbox type={'checkbox'}>Remember me</InputCheckbox>

      <Button type='submit'>Submit</Button>

      <div className={s.linksForm}>
        {loginLinks.map(({ link, title }) => (
          <Link key={randomId()} to={link} className={s.link}>
            {title}
          </Link>
        ))}
      </div>
    </form>
  );
};
