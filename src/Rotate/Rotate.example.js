// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { IconFold, IconGoDown } from '../Icons';
import Rotate from '.';
import { type ThemeProps } from '../utils/type.flow';

const IconWrapper: React.ComponentType<*> = styled.div`
  display: inline-block;
  color: ${({ theme }: ThemeProps) => theme.color.primary};
  font-size: 24px;
  cursor: pointer;
`;

class StatefulRotate extends React.Component<any, { isActive: boolean }> {
  state = { isActive: false };

  onClick = () => this.setState(({ isActive }) => ({ isActive: !isActive }));

  render() {
    const { isActive } = this.state;
    const { onClick } = this;

    return (
      <IconWrapper>
        <Rotate active={isActive} onClick={onClick} {...this.props} />
      </IconWrapper>
    );
  }
}

storiesOf('Rotate', module)
  .add(
    'API',
    () => (
      <IconWrapper>
        <Rotate>
          <IconFold />
        </Rotate>
      </IconWrapper>
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With active props',
    () => (
      <IconWrapper>
        <Rotate active>
          <IconFold />
        </Rotate>
      </IconWrapper>
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With state',
    () => (
      <StatefulRotate>
        <IconFold />
      </StatefulRotate>
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With other icon',
    () => (
      <StatefulRotate>
        <IconGoDown />
      </StatefulRotate>
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  );
