// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hr from '.';

storiesOf('Hr', module)
  .add('API', () => <Hr />, {
    info: {
      text: 'default',
      inline: true,
    },
  })
  .add('With children', () => <Hr>String</Hr>, {
    info: {
      text: 'With string inside.',
      inline: true,
    },
  });
