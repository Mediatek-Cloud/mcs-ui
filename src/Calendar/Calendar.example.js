// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Calendar from '.';

storiesOf('Calendar', module)
  .add('API', () => <Calendar onChange={action('onChange')} />, {
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
        onChange={action('onChange')}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With weekday format',
    () => (
      <Calendar
        defaultValue={new Date('2017-06-26')}
        weekdayFormat="EEEEEE"
        onChange={action('onChange')}
      />
    ),
    {
      info: {
        text:
          'See https://date-fns.org/v2.0.0-alpha.27/docs/format for format patterns',
        inline: true,
      },
    },
  )
  .add(
    'Starts from Monday',
    () => <Calendar weekStartsOn={1} onChange={action('onChange')} />,
    {
      info: {
        text: '',
        inline: true,
      },
    },
  );
