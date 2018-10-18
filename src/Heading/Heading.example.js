// @flow
import * as React from 'react';
import * as R from 'ramda';
import { storiesOf } from '@storybook/react';
import theme from '../utils/theme';
import Heading from '.';

const remToPx = (rem: number): string =>
  `${parseFloat(theme.base.fontSize) * parseFloat(rem)}px`;

storiesOf('Heading', module)
  .add('API', () => <Heading>Level 1</Heading>, {
    info: {
      text: 'Default h1 & color: currentColor',
      inline: true,
      source: false,
    },
  })
  .add(
    'With level props',
    () => (
      <div>
        {R.range(1, 7).map(key => (
          <Heading key={key} level={key}>
            h{key} - Level {key} &nbsp; ({theme.fontSize[`h${key}`]} ={' '}
            {remToPx(theme.fontSize[`h${key}`])})
          </Heading>
        ))}
      </div>
    ),
    {
      info: {
        text: '使用不同等級的 Level。',
        inline: true,
        source: false,
        propTables: [],
      },
    },
  )
  .add(
    'With color props',
    () => (
      <div>
        {Object.keys(theme.color).map(key => (
          <Heading key={key} level={2} color={key}>
            Level 2 {key}
          </Heading>
        ))}
      </div>
    ),
    {
      info: {
        text: '使用不同等級的 Color。',
        inline: true,
        source: false,
        propTables: [],
      },
    },
  );
