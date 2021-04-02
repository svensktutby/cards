import React, { FC, ElementType } from 'react';

import { Preloader } from '../../common/Preloader';
import { Button } from '../../common/Button';
import { InputText } from '../../common/InputText';
import { InputCheckbox } from '../../common/InputCheckbox';
import { InputRadio } from '../../common/InputRadio';
import { Select } from '../../common/Select';
import { Test } from './Test';

type ExampleType = [ElementType, Record<string, unknown>];
export type ExamplesType = Record<string, ExampleType>;

const examples: ExamplesType = {
  preloader: [Preloader, { text: 'Loading' }],
  button: [Button, { children: 'Test' }],
  buttonError: [Button, { children: 'Error', error: true }],
  inputText: [InputText, {}],
  inputTextError: [InputText, { error: 'some error' }],
  inputCheckbox: [InputCheckbox, { children: 'Check me' }],
  inputRadio: [
    InputRadio,
    {
      options: ['React', 'Redux', 'Typescript'],
      name: 'skills',
      value: 'React',
    },
  ],
  select: [
    Select,
    { options: ['React', 'Redux', 'Typescript'], value: 'Redux' },
  ],
};

export const TestContainer: FC = () => {
  return <Test examples={examples} />;
};
