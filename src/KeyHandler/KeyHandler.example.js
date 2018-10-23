// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { KeyHandler, Enter, Esc } from '.';

storiesOf('KeyHandler', module)
  .add(
    'API',
    () => (
      <KeyHandler
        eventName="keyup"
        keyName="a"
        onClick={action('KeyHandler onClick')}
      />
    ),
    {
      info: {
        text: 'keyup a',
        inline: true,
        source: false,
      },
    },
  )
  .add('Enter', () => <Enter onClick={action('Enter onClick')} />, {
    info: {
      text: 'Enter',
      inline: true,
      source: false,
    },
  })
  .add('Esc', () => <Esc onClick={action('Esc onClick')} />, {
    info: {
      text: 'Esc',
      inline: true,
      source: false,
    },
  });
