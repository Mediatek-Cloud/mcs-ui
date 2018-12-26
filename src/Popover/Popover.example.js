// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Popover from './Popover';
import {
  RIGHT_CENTER,
  LEFT_CENTER,
  TOP_CENTER,
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
} from './position.config';
import ConfirmDialog from '../ConfirmDialog';

const Wrapper: React.ComponentType<*> = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 300px;

  > * {
    margin-bottom: 30px;
  }
`;

storiesOf('Popover', module)
  .add(
    'default',
    () => (
      <Popover content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded.">
        <div>Click me</div>
      </Popover>
    ),
    {
      info: {
        text: 'RIGHT_CENTER',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With position',
    () => (
      <Wrapper>
        <Popover
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={RIGHT_CENTER}
        >
          <div style={{ backgroundColor: 'skyblue' }}>RIGHT_CENTER</div>
        </Popover>

        <Popover
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={LEFT_CENTER}
        >
          <div style={{ backgroundColor: 'skyblue' }}>LEFT_CENTER</div>
        </Popover>

        <Popover
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={TOP_CENTER}
        >
          <div style={{ backgroundColor: 'skyblue' }}>TOP_CENTER</div>
        </Popover>

        <Popover
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={TOP_RIGHT}
        >
          <div style={{ backgroundColor: 'skyblue' }}>TOP_RIGHT</div>
        </Popover>

        <Popover
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={TOP_LEFT}
        >
          <div style={{ backgroundColor: 'skyblue' }}>TOP_LEFT</div>
        </Popover>

        <Popover
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={BOTTOM_CENTER}
        >
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_CENTER</div>
        </Popover>

        <Popover
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={BOTTOM_RIGHT}
        >
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_RIGHT</div>
        </Popover>

        <Popover
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={BOTTOM_LEFT}
        >
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_LEFT</div>
        </Popover>
      </Wrapper>
    ),
    {
      info: {
        text: `
~~~js
import {
  RIGHT_CENTER,
  LEFT_CENTER,
  TOP_CENTER,
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
} from 'mcs-ui/lib/Popover/position.config';
~~~
`,
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'in dialog',
    () => (
      <ConfirmDialog
        show
        onHide={action('onHide')}
        onSubmit={action('onSubmit')}
        title="Popover in dialog"
        cancel="Cancel"
        ok="Ok"
      >
        <Popover content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded.">
          <div style={{ backgroundColor: 'skyblue' }}>Click me</div>
        </Popover>
      </ConfirmDialog>
    ),
    {
      info: {
        text: 'clicking in dialog and on popover will not trigger `onHide`',
        inline: true,
        source: false,
      },
    },
  );
