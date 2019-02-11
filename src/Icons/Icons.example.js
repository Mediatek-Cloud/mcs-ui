// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { type Theme } from '../utils/type.flow';
import * as Components from '.';

const IconWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px;
  padding: 16px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color: ${({ theme }: { theme: Theme }) => theme.color.white};
  overflow: hidden;

  > pre {
    background-color: ${({ theme }: { theme: Theme }) => theme.color.grayLight};
    color: ${({ theme }: { theme: Theme }) => theme.color.grayDark};
    padding: 2px 5px;
  }

  > svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }: { theme: Theme }) => theme.color.primary};
  }
`;

storiesOf('Icons', module).add(
  'List',
  () => (
    <div>
      {Object.keys(Components)
        .filter(name => name.startsWith('Icon'))
        .map(name => {
          const Component = Components[name];
          return (
            <IconWrapper key={name}>
              <pre>{name}</pre>
              <Component />
            </IconWrapper>
          );
        })}
    </div>
  ),
  {
    info: {
      text: 'default',
      inline: true,
      source: false,
    },
  },
);
