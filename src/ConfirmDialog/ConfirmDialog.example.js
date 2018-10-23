// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ConfirmDialog from '.';

storiesOf('ConfirmDialog', module).add(
  'API',
  () => (
    <ConfirmDialog
      show
      onHide={action('onHide')}
      onSubmit={({ setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
      }}
      title="Attention!"
      cancel="Cancel"
      ok="Delete"
    >
      <div>確定要刪嗎？</div>
      <div>操作不可逆</div>
    </ConfirmDialog>
  ),
  {
    info: {
      text: 'Default',
      inline: true,
      source: false,
    },
  },
);
