// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SpaceTop from '.';

storiesOf('SpaceTop', module).add(
  'API',
  () => <SpaceTop height={20}>SpaceTop content</SpaceTop>,
  {
    info: {
      text: 'margin-top',
      inline: true,
    },
  },
);
