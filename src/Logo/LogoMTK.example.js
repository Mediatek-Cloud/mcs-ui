// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import LogoMTK from './LogoMTK';

storiesOf('Logo', module).add(
  'LogoMTK',
  () => (
    <React.Fragment>
      <LogoMTK />
      <LogoMTK width={59} height={15} />
    </React.Fragment>
  ),
  {
    info: {
      text: '118 X 30',
      inline: true,
      source: false,
    },
  },
);
