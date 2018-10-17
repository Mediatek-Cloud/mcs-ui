// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { css, type ReactComponentFunctional } from 'styled-components';
import BaseComponent from './BaseComponent';
import { type ThemeProps, type Color } from '../utils/type.flow';

type Props = { color?: Color, level?: number, children: React.Node };
type InnerProps = {
  color: Color,
  level: number,
  children: React.Node,
} & ThemeProps;

const Heading: ReactComponentFunctional<Props> = styled(BaseComponent)`
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
