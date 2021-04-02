import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from 'react';
import s from './InputRadio.module.scss';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

export const InputRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  className,
  onChange,
  onChangeOption,
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const finalRadioClassName = `${s.radio} ${className ? className : ''}`;

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label key={name + '-' + i} className={s.radioWrapper}>
          <input
            type="radio"
            name={name}
            value={o}
            checked={value === o}
            onChange={onChangeCallback}
            className={finalRadioClassName}
          />
          <span className={s.label}>{o}</span>
        </label>
      ))
    : [];

  return <>{mappedOptions}</>;
};
