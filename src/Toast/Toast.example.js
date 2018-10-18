// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { kind } from '../utils/theme';
import Toast from '.';

const DemoWrapper: React.ComponentType<*> = styled.div`
  > * {
    margin-bottom: 16px;
  }
`;

storiesOf('Toast', module)
  .add('API', () => <Toast>Success! You have delete the item.</Toast>, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add(
    'With kind props',
    () => (
      <DemoWrapper>
        {Object.keys(kind).map(key => (
          <Toast key={key} kind={key}>
            {key} - You have delete the item.
          </Toast>
        ))}
      </DemoWrapper>
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  );
