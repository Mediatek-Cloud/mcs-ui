// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Gauge from '.';

storiesOf('Gauge', module)
  .add(
    'API',
    () => (
      <Gauge value={15} max={16}>
        button
      </Gauge>
    ),
    {
      info: {
        text: 'Default',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With width props',
    () => (
      <Gauge value={8} max={16} width={104} height={90}>
        button
      </Gauge>
    ),
    {
      info: {
        text: 'active',
        inline: true,
        source: false,
      },
    },
  );
