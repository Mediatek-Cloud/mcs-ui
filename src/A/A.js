// @flow
import PropTypes from 'prop-types';
import styled, { type ReactComponentFunctional } from 'styled-components';
import { darken1, darken2 } from '../utils/darken';
import { type ThemeProps, type Color } from '../utils/type.flow';

export type Props = { color?: Color };
type InnerProps = { color: Color } & ThemeProps;

const A: ReactComponentFunctional<Props> = styled.a`
  color: ${({ theme, color }: InnerProps) => theme.color[color]};
  transition: color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme, color }: InnerProps) => darken1(theme.color[color])};
  }
  &:active {
    color: ${({ theme, color }: InnerProps) => darken2(theme.color[color])};
  }
`;

A.displayName = 'A';
A.propTypes = {
  color: PropTypes.string,
};
A.defaultProps = {
  color: 'primary',
};

export default A;
