// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InputFancyRange from '.';

storiesOf('InputFancyRange', module).add(
  'API',
  () => <InputFancyRange value={20} min={1} max={100} readOnly />,
  {
    info: {
      text: '',
      inline: true,
      source: false,
    },
  },
);
