import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button } from '../../../../common/ui/Button';
import s from '../../../recoveryPass/ui/RecoveryPassForm/RecoveryPassForm.module.scss';
import { Preloader } from '../../../../common/ui/Preloader';
import { ErrorMessage } from '../../../../common/ui/ErrorMessage';
import { Redirect } from 'react-router-dom';
import { InputText } from '../../../../common/ui/InputText';
import { UserType } from '../../../login/bll/loginReducer';

type PropsType = {
  loading: boolean;
  sendLogOut: () => void;
  changeAuth: (name: string, avatar: string) => void;
  error: string;
  closeMessage: (error: string) => void;
  redirectLink: string;
  userId: string;
  user: UserType;
};

export const ProfileForm: FC<PropsType> = ({
                                             loading,
                                             sendLogOut,
                                             error,
                                             closeMessage,
                                             redirectLink,
                                             userId,
                                             user,
                                             changeAuth,
                                           }) => {
  let [editModeName, setEditModeName] = useState(false);
  let [editModeAvatar, setEditModeAvatar] = useState(false);
  let [name, setName] = useState(user.name);
  let [avatar, setAvatar] = useState(user.avatar);

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

  const activateEditMode = (value: string) => () => {
    if (value === 'name') {
      setEditModeName(true);
    } else {
      setEditModeAvatar(true);
    }
  };

  const deactivateEditMode = () => () => {
    setEditModeName(false);
    setEditModeAvatar(false);
    changeAuth(name, avatar !== undefined ? avatar : '');
  };
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const onAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAvatar(e.currentTarget.value);
  };

  return <form className={s.form} onSubmit={submitHandler}>
    <div className={s.messageWrapper}>
      <img src={user.avatar} alt={''} />
      <div>
        {
          !editModeAvatar ?
            <div>
              {'avatar: '}
              <span className={s.spanAvatar} onDoubleClick={activateEditMode('avatar')}>
           {user.avatar}
            </span>
            </div> : <div>
              <InputText autoFocus={true}
                         onChange={onAvatarChange}
                         onBlur={deactivateEditMode()}
                         value={avatar}
              />
            </div>
        }
        {
          !editModeName ?
            <div>
              {'name: '}
              <span onDoubleClick={activateEditMode('name')}>
                        {user.name || ''}
                    </span>
            </div> : <div>
              <InputText autoFocus={true}
                         onChange={onNameChange}
                         onBlur={deactivateEditMode()}
                         value={name}
              />
            </div>
        }
      </div>

      {loading && <Preloader text='Sending...' />}

      {error && (
        <ErrorMessage clickHandler={closeMessageHandler}>
          {error}
        </ErrorMessage>
      )}
    </div>

    <Button type='submit' disabled={loading}>LogOut</Button>
  </form>;
};
