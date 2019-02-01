// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Calendar from '.';

storiesOf('Calendar', module)
  .add('API', () => <Calendar onSelect={action('onSelect')} />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add(
    'With default value',
    () => (
      <Calendar
        defaultValue={new Date('2019-02-15')}
        onSelect={action('onSelect')}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  );
