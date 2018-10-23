// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonText from '.';

storiesOf('ButtonText', module)
  .add('API', () => <ButtonText>button</ButtonText>, {
    info: {
      text: 'Default',
      inline: true,
      source: false,
    },
  })
  .add('With active props', () => <ButtonText active>button</ButtonText>, {
    info: {
      text: 'active',
      inline: true,
      source: false,
    },
  });
