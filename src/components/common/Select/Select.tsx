import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from 'react';

import s from './Select.module.scss';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

export const Select: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,

  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <option key={o + '-' + i} value={o}>
          {o}
        </option>
      ))
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const finalSelectClassName = `${s.select} ${className ? className : ''}`;

  return (
    <select
      onChange={onChangeCallback}
      className={finalSelectClassName}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};
