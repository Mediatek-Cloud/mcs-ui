// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import B from '.';
import P from '../P';
import Small from '../Small';
import Heading from '../Heading';

storiesOf('B', module)
  .add('API', () => <B>Bold content</B>, {
    info: {
      text: '粗體。',
      inline: true,
      source: false,
    },
  })
  .add(
    'CJK',
    () => (
      <Heading level={4}>
        <B>控制開關粗體字</B>
      </Heading>
    ),
    {
      info: {
        text: '粗體中文字。',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'Within <P>',
    () => (
      <P>
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <Small>
          <B>&nbsp;Bold content&nbsp;</B>
        </Small>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>
    ),
    {
      info: {
        text: '段落中出現。',
        inline: true,
        source: false,
        propTables: [],
      },
    },
  )
  .add(
    'With color',
    () => (
      <P color="primary">
        Nisi eu eiusmod cupidatat aute laboris commodo excepteur
        <B>&nbsp;Bold content&nbsp;</B>
        incididunt incididunt aliquip pariatur est minim officia sit.
      </P>
    ),
    {
      info: {
        text: '來自上層的顏色。',
        inline: true,
        source: false,
        propTables: [],
      },
    },
  );
