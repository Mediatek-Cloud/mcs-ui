// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from './MenuItem';

storiesOf('MenuItem', module).add(
  'API for MenuItem',
  () => (
    <React.Fragment>
      <MenuItem>div tag (default)</MenuItem>
      <MenuItem active>div tag (active)</MenuItem>
      <MenuItem as="a">a Tag</MenuItem>
    </React.Fragment>
  ),
  {
    info: {
      text: '',
      inline: true,
    },
  },
);
