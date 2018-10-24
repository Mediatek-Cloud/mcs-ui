// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import IconCheck from '.';

storiesOf('IconCheck', module).add(
  'API',
  () => (
    <React.Fragment>
      <IconCheck />
      <IconCheck width={19} height={19} />
    </React.Fragment>
  ),
  {
    info: {
      text: 'Controlled API',
      inline: true,
      source: false,
    },
  },
);
