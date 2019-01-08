// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import InputGroup, {
  type Props as InputGroupProps,
} from '../InputGroup/InputGroup';
import Input, { type Props as InputProps } from '../Input/Input';
import Menu, { type Props as MenuProps } from '../Menu/Menu';
import { type ThemeProps } from '../utils/type.flow';

export const StyledMenu: React.ComponentType<
  {
    width: number,
  } & MenuProps,
> = styled(Menu)`
  position: absolute;
  overflow-y: hidden;
  overflow-x: hidden;
  border: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
  box-sizing: border-box;
  width: ${({ width }: { width: number } & ThemeProps) => width}px;

  /* TODO: I do not want to add z-index ... */
  z-index: 1;

  /* Note: override react-virtualized style */
  * {
    outline: 0;
  }
`;

export const StyledInputGroup: React.ComponentType<
  {
    disableFilter: boolean,
  } & InputGroupProps,
> = styled(InputGroup)`
  position: relative;

  > * {
    ${({ disableFilter }: { disableFilter: boolean } & ThemeProps) =>
      disableFilter &&
      css`
        cursor: pointer;
      `};
  }
`;

export const NoRowWrapper: React.ComponentType<*> = styled.div`
  height: ${({ theme }: ThemeProps) => theme.height.normal};
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: ${({ theme }: ThemeProps) => theme.color.grayDark};
`;

export const FakeInputValue: React.ComponentType<InputProps> = styled(Input)`
  position: absolute;
  background-color: transparent;
  border: 1px solid transparent;
  user-select: none;
  pointer-events: none;
  width: ${({ theme }: ThemeProps) => `calc(100% - ${theme.height.normal})`};

  &:focus {
    border: 1px solid transparent;
    box-shadow: none;
  }
`;

export const TextOverflow: React.ComponentType<*> = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
