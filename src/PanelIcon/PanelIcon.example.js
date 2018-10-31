// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IconMenu } from '../Icons';
import PanelIcon from '.';

storiesOf('PanelIcon', module).add(
  'API',
  () => (
    <PanelIcon>
      <IconMenu />
    </PanelIcon>
  ),
  {
    info: {
      text: 'default',
      inline: true,
    },
  },
);
