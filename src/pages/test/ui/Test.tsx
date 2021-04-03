import React, { FC } from 'react';

import s from './Test.module.scss';
import { randomId } from '../../../utils/randomId';
import { ExamplesType } from './TestContainer';

type PropsType = {
  examples: ExamplesType;
};

export const Test: FC<PropsType> = ({ examples }) => {
  return (
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
              <td>{title}</td>
              <td>
                <Example {...props} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
