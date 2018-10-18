// @flow
import PropTypes from 'prop-types';
import styled, { type ReactComponentFunctional } from 'styled-components';
import * as propMappers from './propMappers';
import { type ThemeProps, type Kind, type Size } from '../utils/type.flow';

export type Props = {
  kind?: Kind,
  block?: boolean,
  square?: boolean,
  round?: boolean,
  size?: Size,
  active?: boolean,
  disabled?: boolean,
};
export type InnerProps = {
  kind: Kind,
  block: boolean,
  square: boolean,
  round: boolean,
  size: Size,
  active: boolean,
  disabled: boolean,
} & ThemeProps;

const Button: ReactComponentFunctional<Props> = styled.button`
  border-width: 1px;
  border-style: solid;
  outline: none;
  box-sizing: border-box;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  line-height: 0;
  cursor: ${({ disabled }: InnerProps) =>
    disabled ? 'not-allowed;' : 'pointer'};

  &:hover {
    background-color: ${propMappers.hoverBackgroundColor};
  }

  &:active {
    background-color: ${propMappers.activeBackgroundColor};
  }

  background-color: ${propMappers.backgroundColor};
  color: ${propMappers.color};
  border-radius: ${propMappers.borderRadius};
  width: ${propMappers.width};
  min-width: ${propMappers.minWidth};
  height: ${({ theme, size }: InnerProps) => theme.height[size]};
  padding: ${propMappers.padding};
  font-size: ${propMappers.fontSize};
  border-color: ${propMappers.borderColor};
`;

Button.displayName = 'Button';
Button.propTypes = {
  kind: PropTypes.string,
  block: PropTypes.bool,
  square: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal']),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  kind: 'primary',
  block: false,
  square: false,
  round: false,
  size: 'normal',
  active: false,
  disabled: false,
};

export default Button;
