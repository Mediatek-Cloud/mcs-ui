// @flow
import * as React from 'react';
import styled from 'styled-components';
import InputGroup, {
  type Props as InputGroupProps,
} from '../InputGroup/InputGroup';
import Button, { type Props as ButtonProps } from '../Button/Button';
import { type ThemeProps } from '../utils/type.flow';

export const StyledInputGroup: React.ComponentType<InputGroupProps> = styled(
  InputGroup,
)`
  position: absolute;
  width: 100%;
  pointer-events: none;
`;

export const Wrapper: React.ComponentType<*> = styled.div`
  position: relative;
`;

export const StyledSelect: React.ComponentType<*> = styled.select`
  width: 100%;
  border: 0;
  height: ${({ theme }: ThemeProps) => theme.height.normal};
  background-color: ${({ theme }: ThemeProps) => theme.color.white};
  outline: 0;
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.p};
  color: ${({ theme }: ThemeProps) => theme.color.black};
  appearance: none;
  cursor: pointer;
`;

export const StyledButton: React.ComponentType<ButtonProps> = styled(Button)`
  font-size: 18px;
  color: ${({ theme }: ThemeProps) => theme.color.white};
`;
