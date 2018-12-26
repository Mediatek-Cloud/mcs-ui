// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as R from 'ramda';
import Tooltip from './Tooltip';
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

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 300px;

  > * {
    margin-bottom: 30px;
  }
`;

storiesOf('Tooltip', module)
  .add(
    'default',
    () => (
      <Tooltip hover content="Tooltip hover content">
        <div>Click me</div>
      </Tooltip>
    ),
    {
      info: {
        text: 'RIGHT_CENTER',
        inline: true,
      },
    },
  )
  .add(
    'With position',
    () => (
      <Wrapper>
        <Tooltip content="Tooltip hover content" position={RIGHT_CENTER}>
          <div style={{ backgroundColor: 'skyblue' }}>RIGHT_CENTER</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={LEFT_CENTER}>
          <div style={{ backgroundColor: 'skyblue' }}>LEFT_CENTER</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={TOP_CENTER}>
          <div style={{ backgroundColor: 'skyblue' }}>TOP_CENTER</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={TOP_RIGHT}>
          <div style={{ backgroundColor: 'skyblue' }}>TOP_RIGHT</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={TOP_LEFT}>
          <div style={{ backgroundColor: 'skyblue' }}>TOP_LEFT</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={BOTTOM_CENTER}>
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_CENTER</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={BOTTOM_RIGHT}>
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_RIGHT</div>
        </Tooltip>

        <Tooltip content="Tooltip hover content" position={BOTTOM_LEFT}>
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_LEFT</div>
        </Tooltip>
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
} from 'mcs-ui/Tooltip/position.config';
~~~
`,
        inline: true,
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
        title="Tooltip in dialog"
        cancel="Cancel"
        ok="Ok"
      >
        <Tooltip
          content="The editable area of scene is the same as the size of image you upload or your computer screen if there is no image uploaded."
          position={R.pipe(
            R.assocPath(['card', 'alignConfig', 'offset'], [0, 25]),
            R.assocPath(['arrow', 'alignConfig', 'offset'], [0, 50]),
          )(TOP_CENTER)}
        >
          <div
            style={{
              border: 'skyblue 2px solid',
              height: '50px',
              width: '200px',
            }}
          >
            Hover me
          </div>
        </Tooltip>
      </ConfirmDialog>
    ),
    {
      info: {
        text: 'clicking on tooltip will not trigger `onHide`',
        inline: true,
        source: false,
      },
    },
  );
