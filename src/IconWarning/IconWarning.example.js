// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import IconWarning from './IconWarning';

storiesOf('IconWarning', module).add(
  'IconWarning',
  () => (
    <React.Fragment>
      <IconWarning />
      <IconWarning width={100} height={90} />
    </React.Fragment>
  ),
  {
    info: {
      text: '50 X 45',
      inline: true,
    },
  },
);
