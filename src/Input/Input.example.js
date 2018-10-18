// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { kind } from '../utils/theme';
import Input from '.';

const Wrapper: React.ComponentType<*> = styled.div`
  > * {
    margin: 15px;
    width: 300px;
  }
`;

storiesOf('Input', module)
  .add('API', () => <Input placeholder="placeholder" />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add('With focus props', () => <Input placeholder="placeholder" focus />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add(
    'With kind props',
    () => (
      <Wrapper>
        {Object.keys(kind).map(key => (
          <Input key={key} kind={key} placeholder={key} />
        ))}
      </Wrapper>
    ),
    {
      info: {
        text: '使用內建 kind props 樣式。',
        inline: true,
      },
    },
  )
  .add(
    'With type props',
    () => {
      const types = [
        'text',
        'email',
        'number',
        'password',
        'tel',
        'search',
        'month',
        'week',
        'date',
        'color',
        'file',
        'radio',
        'time',
        'url',
        'range',
      ];

      return (
        <Wrapper>
          {types.map(key => (
            <Input key={key} type={key} placeholder={key} />
          ))}
        </Wrapper>
      );
    },
    {
      info: {
        text: '使用內建 type props 樣式。',
        inline: true,
      },
    },
  );
