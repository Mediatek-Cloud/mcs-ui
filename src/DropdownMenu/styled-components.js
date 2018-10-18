// @flow
import * as React from 'react';
import styled from 'styled-components';
import Menu, { type Props as MenuProps } from '../Menu/Menu';
import Button, { type Props as ButtonProps } from '../Button/Button';
import { type ThemeProps } from '../utils/type.flow';

export const StyledButton: React.ComponentType<ButtonProps> = styled(Button)`
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
    width: 18px;
    height: 18px;
  }
`;

export const StyledMenu: React.ComponentType<MenuProps> = styled(Menu)`
  border: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
`;
