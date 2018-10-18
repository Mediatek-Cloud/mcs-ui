// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '.';

storiesOf('Breadcrumb', module).add(
  'API',
  () => (
    <Breadcrumb>
      <div>item 1</div>
      <div>item 2</div>
    </Breadcrumb>
  ),
  {
    info: {
      text: 'default',
      inline: true,
    },
  },
);
