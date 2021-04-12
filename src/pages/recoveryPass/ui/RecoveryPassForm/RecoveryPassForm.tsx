import React, { FC, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import s from './RecoveryPassForm.module.scss';
import { useForm, UseFormReturnType } from '../../../../hooks/useForm';
import { validate } from '../../../../utils/formValidationRules';
import { InputText } from '../../../../common/ui/InputText';
import { Button } from '../../../../common/ui/Button';
import { Preloader } from '../../../../common/ui/Preloader';
import { ErrorMessage } from '../../../../common/ui/ErrorMessage';
import { LoginLinkType } from './RecoveryPassFormContainer';

type PropsType = {
  loginLink: LoginLinkType;
  sendEmail: (email: string) => void;
  closeMessage: () => void;
  setSuccess: (success: boolean) => void;
  loading: boolean;
  success: boolean;
  error: string;
  redirectLink: string;
};

export const RecoveryPassForm: FC<PropsType> = ({
  loginLink: { link, title },
  sendEmail,
  closeMessage,
  setSuccess,
  loading,
  success,
  error,
  redirectLink,
}) => {
  const initialValues = {
    email: '',
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
  }: UseFormReturnType = useForm(initialValues, formCallback, validate);

  function formCallback() {
    values.email && sendEmail(values.email);
  }

  useEffect(() => {
    success && setSuccess(false);

    closeMessage();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  if (success) {
    return <Redirect to={redirectLink} />;
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <div className={s.messageWrapper}>
        {loading && <Preloader text="Sending..." />}

        {error && (
          <ErrorMessage clickHandler={closeMessage}>{error}</ErrorMessage>
        )}
      </div>

      <InputText
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={values.email}
        disabled={loading}
        error={errors.email}
        required
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
