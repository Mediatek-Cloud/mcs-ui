// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from '.';

storiesOf('Panel', module).add(
  'API',
  () => (
    <Panel>
      <header>Panel Header (header)</header>
      <main>Panel body (main)</main>
      <footer>footer</footer>
    </Panel>
  ),
  {
    info: {
      text: '',
      inline: true,
    },
  },
);
