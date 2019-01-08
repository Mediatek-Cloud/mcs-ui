// @flow
import * as React from 'react';
import styled from 'styled-components';
import { darken1, darken2 } from '../utils/darken';
import { mapBorderColorByActive, mapColorByActive } from './propMappers';
import { type InnerProps } from './TabItem';
import { type ThemeProps } from '../utils/type.flow';

export const Item: React.ComponentType<InnerProps> = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: ${({ theme }: InnerProps & ThemeProps) => theme.height.normal};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${mapBorderColorByActive};
  color: ${mapColorByActive};
  font-size: ${({ theme }: InnerProps & ThemeProps) => theme.fontSize.p};
  padding: 0 15px;
  transition: border-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.1s,
    color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme, color }: InnerProps & ThemeProps) =>
      darken1(theme.color[color])};
  }

  &:active {
    color: ${({ theme, color }: InnerProps & ThemeProps) =>
      darken2(theme.color[color])};
  }
`;

export default Item;
