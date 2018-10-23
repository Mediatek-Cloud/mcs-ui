// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import IconSort from '.';

storiesOf('IconSort', module).add(
  'API',
  () => (
    <React.Fragment>
      <IconSort active={false} isAsc={false} />
      <IconSort active isAsc={false} />
      <IconSort active isAsc />
    </React.Fragment>
  ),
  {
    info: {
      text: 'Default',
      inline: true,
      source: false,
    },
  },
);
