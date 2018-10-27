// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import IconImage from '.';

storiesOf('IconImage', module).add(
  'API with size 300',
  () => (
    <React.Fragment>
      <IconImage width={300} height={300} />
    </React.Fragment>
  ),
  {
    info: {
      text: 'Controlled API',
      inline: true,
      source: false,
    },
  },
);
