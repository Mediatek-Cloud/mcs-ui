// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '.';

storiesOf('Avatar', module)
  .add('Default', () => <Avatar />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add('Default - Large', () => <Avatar size={150} />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add('With Url', () => <Avatar src="//placehold.it/30x30" />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add(
    'With Url - Large',
    () => <Avatar size={150} src="//placehold.it/150x150" />,
    {
      info: {
        text: '',
        inline: true,
      },
    },
  );
