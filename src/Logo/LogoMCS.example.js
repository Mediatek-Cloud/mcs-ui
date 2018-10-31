// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LogoMCS } from '.';

storiesOf('Logo', module).add(
  'LogoMCS',
  () => (
    <React.Fragment>
      <LogoMCS />
      <LogoMCS width={238} height={52} />
    </React.Fragment>
  ),
  {
    info: {
      text: '119 X 26, 238 X 52',
      inline: true,
    },
  },
);
