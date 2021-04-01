import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  FC,
} from 'react';

import s from './Checkbox.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type PropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  labelClassName?: string;
};

export const Checkbox: FC<PropsType> = ({
  type,
  onChange,
  onChangeChecked,
  className,
  labelClassName,
  children,

  ...restProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  const finalLabelClassName = `${s.label} ${
    labelClassName ? labelClassName : ''
  }`;
  const finalCheckboxClassName = `${s.checkbox} ${className ? className : ''}`;

  return (
    <label className={s.checkboxWrapper}>
      <input
        type="checkbox"
        onChange={onChangeHandler}
        className={finalCheckboxClassName}
        {...restProps}
      />

      <span className={finalLabelClassName}>{children}</span>
    </label>
  );
};
