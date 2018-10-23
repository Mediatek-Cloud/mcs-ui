// @flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import InputRadio from '../InputRadio';
import InputRadioGroup from '.';

storiesOf('InputRadioGroup', module).add(
  'API',
  () => (
    <InputRadioGroup>
      <InputRadio value onChange={action('onChange')}>
        1
      </InputRadio>
      <InputRadio value={false} onChange={action('onChange')}>
        2
      </InputRadio>
    </InputRadioGroup>
  ),
  {
    info: {
      text: '',
      inline: true,
      source: false,
    },
  },
);
