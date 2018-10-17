// @flow
import * as React from 'react';
import * as R from 'ramda';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from '../utils/theme';
import { Heading } from '../index';

const remToPx = (rem: number): string =>
  `${parseFloat(theme.base.fontSize) * parseFloat(rem)}px`;

storiesOf('Heading', module)
  .add(
    'API',
    withInfo({
      text: 'Default h1 & color: currentColor',
      inline: true,
    })(() => <Heading>Level 1</Heading>),
  )
  .add(
    'With level props',
    withInfo({
      text: '使用不同等級的 Level。',
      inline: true,
      propTables: false,
    })(() => (
      <div>
        {R.range(1, 7).map(key => (
          <Heading key={key} level={key}>
            h{key} - Level {key} &nbsp; ({theme.fontSize[`h${key}`]} ={' '}
            {remToPx(theme.fontSize[`h${key}`])})
          </Heading>
        ))}
      </div>
    )),
  )
  .add(
    'With color props',
    withInfo({
      text: '使用不同等級的 Color。',
      inline: true,
      propTables: false,
    })(() => (
      <div>
        {Object.keys(theme.color).map(key => (
          <Heading key={key} level={2} color={key}>
            Level 2 {key}
          </Heading>
        ))}
      </div>
    )),
  );
