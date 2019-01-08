// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  type ThemeProps,
  type Color,
  type ComponentType,
} from '../utils/type.flow';

export type Props = { color?: Color, children: React.Node };
type InnerProps = { color: Color } & ThemeProps;

const P: ComponentType<Props> = styled.p`
  margin: 0;
  font-size: ${({ theme }: InnerProps) => theme.fontSize.p};

  ${({ color, theme }: InnerProps) =>
    color &&
    css`
      color: ${theme.color[color]};
    `};
`;

P.displayName = 'P';
P.propTypes = {
  color: PropTypes.string,
};

export default P;
