import React, { FC, ElementType } from 'react';

import s from './Test.module.scss';
import { randomId } from '../../../utils/randomId';
import { unCamelCase } from '../../../utils/textTransform';
import { Preloader } from '../../common/Preloader';
import { Button } from '../../common/Button';
import { InputText } from '../../common/InputText';
import { InputCheckbox } from '../../common/InputCheckbox';
import { InputRadio } from '../../common/InputRadio';
import { Select } from '../../common/Select';

type ExampleType = [ElementType, Record<string, unknown>];
type ExamplesType = Record<string, ExampleType>;

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

export const Test: FC = () => {
  return (
    <div className={s.page}>
      <h1 className={s.title}>Common components:</h1>

      <table className={s.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(examples).map((item) => {
            const [title, [Example, props]] = item;

            return (
              <tr key={randomId()}>
                <td>{unCamelCase(title)}</td>
                <td>
                  <Example {...props} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
