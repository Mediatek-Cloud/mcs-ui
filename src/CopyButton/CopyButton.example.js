// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import A from '../A';
import CopyButton from '.';

storiesOf('CopyButton', module)
  .add(
    'API',
    () => (
      <React.Fragment>
        <CopyButton text="devieKey">Copy</CopyButton>
        <CopyButton text="https://mcs-ui.netlify.com">Copy Link</CopyButton>
      </React.Fragment>
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With Flex',
    () => (
      <div style={{ display: 'flex' }}>
        <A>6f52d070-bdd5-44da-af68-9a4a9950ec7c</A>
        <CopyButton text="6f52d070-bdd5-44da-af68-9a4a9950ec7c">
          Copy
        </CopyButton>
      </div>
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  );
