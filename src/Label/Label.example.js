// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '.';

storiesOf('Label', module).add('API', () => <Label required>Email</Label>, {
  info: {
    text: 'default',
    inline: true,
    source: false,
  },
});
