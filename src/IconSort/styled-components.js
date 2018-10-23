// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';
import { type Props } from './IconSort';

export const StyledSVG: React.ComponentType<Props> = styled.svg`
  color: ${({ theme }: ThemeProps) => theme.color.grayDark};

  path:nth-child(1) {
    color: ${({ active, isAsc, theme }: Props & ThemeProps) =>
      active && isAsc ? theme.color.black : 'unset'};
  }

  path:nth-child(2) {
    color: ${({ active, isAsc, theme }: Props & ThemeProps) =>
      active && !isAsc ? theme.color.black : 'unset'};
  }
`;

export default StyledSVG;
