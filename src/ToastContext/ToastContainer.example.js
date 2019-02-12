// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ToastContainer } from '.';

const ToastContainerWithState = () => {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const tid1 = setTimeout(() => {
      setToasts([{ id: 'id 1', kind: 'error', children: 'error children' }]);
    }, 1000);
    const tid2 = setTimeout(() => {
      setToasts([
        { id: 'id 1', kind: 'error', children: 'error children' },
        { id: 'id 2', kind: 'success', children: 'success children' },
      ]);
    }, 2500);

    const tid3 = setTimeout(() => {
      setToasts([
        { id: 'id 2', kind: 'success', children: 'success children' },
      ]);
    }, 3000);

    const tid4 = setTimeout(() => {
      setToasts([]);
    }, 4000);

    return () => {
      if (tid1) clearTimeout(tid1);
      if (tid2) clearTimeout(tid2);
      if (tid3) clearTimeout(tid3);
      if (tid4) clearTimeout(tid4);
    };
  }, [setToasts]);

  return <ToastContainer toasts={toasts} />;
};

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
  )
  .add('With state', () => <ToastContainerWithState />, {
    info: {
      inline: true,
    },
  });
