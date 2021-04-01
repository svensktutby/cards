import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type PropsType = DefaultButtonPropsType & {
  error?: boolean;
};

export const Button: FC<PropsType> = ({ error, className, ...restProps }) => {
  const finalClassName = `${s.btn} ${error ? s.error : s.default} ${
    className ? className : ''
  }`;

  return <button className={finalClassName} {...restProps} />;
};
