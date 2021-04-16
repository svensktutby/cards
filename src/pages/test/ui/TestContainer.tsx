import React, { FC, ElementType } from 'react';

import { unCamelCase } from '../../../utils/textTransform';
import { Test } from './Test';
import { Preloader } from '../../../common/ui/Preloader';
import { ErrorMessage } from '../../../common/ui/ErrorMessage';
import { LinkNative } from '../../../common/ui/LinkNative';
import { Button } from '../../../common/ui/Button';
import { InputText } from '../../../common/ui/InputText';
import { InputCheckbox } from '../../../common/ui/InputCheckbox';
import { InputRadio } from '../../../common/ui/InputRadio';
import { Select } from '../../../common/ui/Select';

const exampleLibrary: ExampleLibraryType = {
  preloader: [Preloader, { text: 'Loading' }],
  errorMessage: [
    ErrorMessage,
    { children: 'Error message', clickHandler: () => {} },
  ],
  link: [LinkNative, { href: '/', children: 'Hover me' }],
  button: [Button, { children: 'Click me' }],
  buttonError: [Button, { children: 'Error', error: true }],
  inputText: [InputText, { placeholder: 'Write here' }],
  inputEmail: [InputText, { type: 'email', placeholder: 'Email' }],
  inputPassword: [InputText, { type: 'password', placeholder: 'Password' }],
  inputTextError: [InputText, { error: 'an error', placeholder: 'Write here' }],
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

const examples: ExamplesType = Object.entries(
  exampleLibrary,
).map(([title, example]) => [unCamelCase(title), example]);

export const TestContainer: FC = () => {
  return <Test examples={examples} />;
};

type ExampleType = [ElementType, Record<string, unknown>];
type ExampleLibraryType = Record<string, ExampleType>;
export type ExamplesType = [string, ExampleType][];
