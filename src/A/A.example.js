// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from '../utils/theme';
import { A, B, Heading } from '../index';

storiesOf('A', module)
  .add(
    'API',
    withInfo({
      text: 'anchor A',
      inline: true,
    })(() => <A>Link</A>),
  )
  .add(
    'With color props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <div>
        {Object.keys(theme.color).map(key => (
          <A key={key} color={key}>
            A link {key}
          </A>
        ))}
      </div>
    )),
  )
  .add(
    'Nested children with Heading',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <Heading>
        Heading Level 1&nbsp;
        <B>
          <A>Link</A>
        </B>
      </Heading>
    )),
  );
