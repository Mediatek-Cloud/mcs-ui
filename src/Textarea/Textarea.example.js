// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { kind } from '../utils/theme';
import Textarea from '.';

const Wrapper: React.ComponentType<*> = styled.div`
  > * {
    margin: 15px;
    width: 300px;
  }
`;

storiesOf('Textarea', module)
  .add('API', () => <Textarea placeholder="placeholder" rows="3" />, {
    info: {
      text: '',
      inline: true,
      source: false,
    },
  })
  .add(
    'With kind props',
    () => (
      <Wrapper>
        {Object.keys(kind).map(key => (
          <Textarea key={key} kind={key} placeholder={key} />
        ))}
      </Wrapper>
    ),
    {
      info: {
        text: '使用內建 kind props 樣式。',
        inline: true,
        source: false,
      },
    },
  );
