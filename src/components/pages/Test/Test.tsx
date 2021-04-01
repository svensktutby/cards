import React, { FC, ElementType } from 'react';

import s from './Test.module.scss';
import { Preloader } from '../../common/Preloader';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import { Checkbox } from '../../common/Checkbox';
import { randomId } from '../../../utils/randomId';

type ExampleType = [ElementType, Record<string, unknown>];
type ExamplesType = Record<string, ExampleType>;

const examples: ExamplesType = {
  preloader: [Preloader, { text: 'Loading' }],
  button: [Button, { children: 'Test' }],
  'button error': [Button, { children: 'Error', error: true }],
  input: [Input, {}],
  'input error': [Input, { error: 'some error' }],
  checkbox: [Checkbox, { children: 'Check me' }],
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
                <td>{title}</td>
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
