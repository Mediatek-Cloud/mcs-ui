// @flow
import PropTypes from 'prop-types';
import styled, { type ReactComponentFunctional } from 'styled-components';
import opacity from '../utils/opacity';
import { type Kind, type ThemeProps } from '../utils/type.flow';

const shadow = opacity(0.5);

export type Props = {
  kind?: Kind,
  focus?: boolean,
};
type InnerProps = {
  kind: Kind,
  focus: boolean,
} & ThemeProps;

const Input: ReactComponentFunctional<Props> = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  outline: 0;
  padding: 0 10px;
  line-height: 1;
  min-height: ${({ theme }: InnerProps) => theme.height.normal};
  color: ${({ theme }: InnerProps) => theme.color.black};
  font-size: ${({ theme }: InnerProps) => theme.fontSize.p};
  border-color: ${({ theme, focus, kind }: InnerProps) =>
    focus ? theme.color[kind] : theme.color.grayBase};
  box-shadow: ${({ theme, focus, kind }: InnerProps) =>
    focus ? `0 0 3px 0 ${shadow(theme.color[kind])}` : 'none'};

  &:focus {
    border-color: ${({ theme, kind }: InnerProps) => theme.color[kind]};
    box-shadow: 0 0 3px 0
      ${({ theme, kind }: InnerProps) => shadow(theme.color[kind])};
  }

  &::placeholder {
    opacity: 1;
    color: ${({ theme }: InnerProps) => theme.color.grayBase};
  }
`;

Input.displayName = 'Input';
Input.propTypes = {
  kind: PropTypes.string,
  focus: PropTypes.bool,
};

Input.defaultProps = {
  kind: 'primary',
  focus: false,
};
export default Input;
