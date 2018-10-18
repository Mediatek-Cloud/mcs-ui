// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ToastContainer } from '.';

storiesOf('ToastContainer', module)
  .add('API', () => <ToastContainer toasts={[]} />, {
    info: {
      text: 'API',
      inline: true,
    },
  })
  .add(
    'With toasts props',
    () => (
      <ToastContainer
        toasts={[{ id: 'id', kind: 'error', children: 'error children' }]}
      />
    ),
    {
      info: {
        text: 'API',
        inline: true,
      },
    },
  )
  .add(
    'With two toasts',
    () => (
      <ToastContainer
        toasts={[
          { id: 'id 1', kind: 'error', children: 'error children' },
          { id: 'id 2', kind: 'success', children: 'success children' },
        ]}
      />
    ),
    {
      info: {
        text: 'API',
        inline: true,
      },
    },
  );
