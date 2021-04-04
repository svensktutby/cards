import React, { FC, ElementType } from 'react';

import { unCamelCase } from '../../../utils/textTransform';
import { Test } from './Test';
import { Preloader } from '../../../common/ui/Preloader';
import { Link } from '../../../common/ui/Link';
import { Button } from '../../../common/ui/Button';
import { InputText } from '../../../common/ui/InputText';
import { InputCheckbox } from '../../../common/ui/InputCheckbox';
import { InputRadio } from '../../../common/ui/InputRadio';
import { Select } from '../../../common/ui/Select';

const exampleLibrary: ExampleLibraryType = {
  preloader: [Preloader, { text: 'Loading' }],
  link: [Link, { href: '/', children: 'Link' }],
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

const examples: ExamplesType = Object.entries(
  exampleLibrary,
).map(([title, example]) => [unCamelCase(title), example]);

export const TestContainer: FC = () => {
  return <Test examples={examples} />;
};

type ExampleType = [ElementType, Record<string, unknown>];
type ExampleLibraryType = Record<string, ExampleType>;
export type ExamplesType = [string, ExampleType][];
