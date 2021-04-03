import React, { FC } from 'react';

import s from './Test.module.scss';
import { randomId } from '../../../utils/randomId';
import { unCamelCase } from '../../../utils/textTransform';
import { ExamplesType } from './TestContainer';

type PropsType = {
  examples: ExamplesType;
};

export const Test: FC<PropsType> = ({ examples }) => {
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
          {examples.map((item) => {
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
