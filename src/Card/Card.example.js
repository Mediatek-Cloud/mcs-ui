// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('Card', module).add('API', () => <Card>Card Content</Card>, {
  info: {
    text: '一個簡單到不行的白底。',
    inline: true,
    source: false,
  },
});
