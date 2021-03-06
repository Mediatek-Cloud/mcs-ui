// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import BaseComponent from './BaseComponent';
import {
  type ThemeProps,
  type Color,
  type ComponentType,
} from '../utils/type.flow';

export type Props = { color?: Color, level?: number, children: React.Node };
type InnerProps = {
  color: Color,
  level: number,
  children: React.Node,
} & ThemeProps;

const Heading: ComponentType<Props> = styled(BaseComponent)`
  margin: 0;
  font-weight: normal;
  font-size: ${({ theme, level }: InnerProps) => theme.fontSize[`h${level}`]};
  ${({ theme, color }: InnerProps) =>
    color &&
    css`
      color: ${theme.color[color]};
    `};
`;

Heading.displayName = 'Heading';
Heading.propTypes = {
  level: PropTypes.number,
  color: PropTypes.string,
};
Heading.defaultProps = {
  level: 1,
};

export default Heading;
