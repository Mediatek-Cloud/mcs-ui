// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TopBarProgress from '.';

storiesOf('TopBarProgress', module).add('API', () => <TopBarProgress />, {
  info: {
    text: '',
    inline: true,
  },
});
