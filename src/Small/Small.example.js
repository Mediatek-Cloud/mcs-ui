// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import P from '../P';
import Small from '.';

storiesOf('Small', module)
  .add('API', () => <Small>Small content</Small>, {
    info: {
      text: '縮小字型。',
      inline: true,
    },
  })
  .add(
    'Within <P>',
    () => (
      <P>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>&nbsp;Small content&nbsp;</Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>
    ),
    {
      info: {
        text: '段落中出現。',
        inline: true,
        propTables: [],
      },
    },
  )
  .add(
    'With color',
    () => (
      <P color="primary">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>&nbsp;Small content&nbsp;</Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>
    ),
    {
      info: {
        text: '來自上層的顏色。',
        inline: true,
        propTables: [],
      },
    },
  );
