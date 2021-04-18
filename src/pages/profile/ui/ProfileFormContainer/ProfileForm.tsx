import React, { FC, FormEvent } from 'react';
import { Button } from '../../../../common/ui/Button';
import s from '../../../recoveryPass/ui/RecoveryPassForm/RecoveryPassForm.module.scss';
import { Preloader } from '../../../../common/ui/Preloader';
import { ErrorMessage } from '../../../../common/ui/ErrorMessage';
import { Redirect } from 'react-router-dom';

type PropsType = {
  loading: boolean;
  sendLogOut: () => void
  error: string;
  closeMessage: (error: string) => void;
  redirectLink: string;
  userId: string
};

export const ProfileForm: FC<PropsType> = ({
                                             loading,
                                             sendLogOut,
                                             error,
                                             closeMessage,
                                             redirectLink,
                                             userId,
                                           }) => {

  const closeMessageHandler = () => {
    closeMessage('');
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendLogOut();
  };

  if (userId === '') {
    return <Redirect to={redirectLink} />;
  }

  return <form className={s.form} onSubmit={submitHandler}>
    <div className={s.messageWrapper}>
      {loading && <Preloader text='Sending...' />}

      {error && (
        <ErrorMessage clickHandler={closeMessageHandler}>
          {error}
        </ErrorMessage>
      )}
    </div>
    <Button type='submit'>LogOut</Button>
  </form>;
};
