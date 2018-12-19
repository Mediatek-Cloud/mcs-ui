// @flow
import * as React from 'react';
import styled from 'styled-components';
import { darken3 } from '../utils/darken';
import { type Color, type ThemeProps } from '../utils/type.flow';

type InnerProps = {
  size: number,
  kind: Color,
  checked: boolean,
} & ThemeProps;

export const Container: React.ComponentType<{
  size?: number,
  kind?: Color,
  checked: boolean,
  diabled?: boolean,
}> = styled.div`
  line-height: 1em;
  font-size: 12px;
  border-radius: 2px;
  width: ${({ size }: InnerProps) => size}px;
  height: ${({ size }: InnerProps) => size}px;
  box-sizing: border-box;
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.5s cubic-bezier(0.23, 1, 0.32, 1),
    border 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  color: ${({ checked, theme, kind }: InnerProps) => {
    if (checked) {
      return kind === 'default' ? theme.color.grayDark : theme.color.white;
    }
    return 'transparent';
  }};
  background-color: ${({ checked, theme, kind }: InnerProps) =>
    checked ? theme.color[kind] : theme.color.white};
  border: 1px solid
    ${({ checked, theme, kind }: InnerProps) =>
      checked ? darken3(theme.color[kind]) : theme.color.grayBase};
`;

export const Content: React.ComponentType<{ checked: boolean }> = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(${({ checked }: InnerProps) => (checked ? 1 : 0)});
  transform-origin: 50% 50%;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`;
