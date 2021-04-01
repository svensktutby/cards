import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  FC,
} from 'react';

import s from './Input.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type PropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  errorClassName?: string;
};

export const Input: FC<PropsType> = ({
  type,
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  errorClassName,

  ...restProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);

    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    e.key === 'Enter' && onEnter && onEnter();
  };

  const finalErrorClassName = `${s.error} ${
    errorClassName ? errorClassName : ''
  }`;
  const finalInputClassName = `${s.input} ${error && s.errorInput} ${
    className ? className : ''
  }`;

  return (
    <div className={s.inputWrapper}>
      {error && <span className={finalErrorClassName}>{error}</span>}

      <input
        type="text"
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
        className={finalInputClassName}
        {...restProps}
      />
    </div>
  );
};
