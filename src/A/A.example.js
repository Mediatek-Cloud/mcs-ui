// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../utils/theme';
import A from '.';
import B from '../B';
import Heading from '../Heading';

storiesOf('A', module)
  .add('API', () => <A>Link</A>, {
    info: {
      text: 'anchor A',
      inline: true,
    },
  })
  .add(
    'With color props',
    () => (
      <div>
        {Object.keys(theme.color).map(key => (
          <A key={key} color={key}>
            A link {key}
          </A>
        ))}
      </div>
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'Nested children with Heading',
    () => (
      <Heading>
        Heading Level 1&nbsp;
        <B>
          <A>Link</A>
        </B>
      </Heading>
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  );
