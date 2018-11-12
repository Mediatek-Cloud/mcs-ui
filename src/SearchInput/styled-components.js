// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export const StyledLabel: React.ComponentType<{
  isFocus: boolean,
}> = styled.label`
  position: relative;
  height: ${({ theme }: ThemeProps) => theme.height.normal};
  width: 180px;
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  display: block;
  color: ${({ isFocus, theme }: { isFocus: boolean } & ThemeProps) =>
    isFocus ? theme.color.black : theme.color.grayDark};

  svg {
    position: absolute;
    height: 100%;
  }

  /* Note: Search Icon */
  svg:first-child {
    left: 5px;
  }

  /* Note: Close Icon */
  input + svg {
    right: 5px;
    color: ${({ theme }: ThemeProps) => theme.color.grayDark};
  }
`;

export const StyledInput: React.ComponentType<*> = styled.input`
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 3px;
  padding-left: 28px;
  padding-right: 22px;

  &::placeholder {
    opacity: 1;
    color: ${({ theme }: ThemeProps) => theme.color.grayBase};
  }

  &:focus {
    outline: 0;
  }
`;
