// @flow
import PropTypes from 'prop-types';
import styled, { type ReactComponentFunctional } from 'styled-components';
import opacity from '../utils/opacity';
import { type Kind, type ThemeProps } from '../utils/type.flow';

export type Props = { kind?: Kind };
type InnerProps = { kind: Kind } & ThemeProps;

const shadow = opacity(0.5);

const Textarea: ReactComponentFunctional<Props> = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  outline: 0;
  padding: 5px 10px;
  color: ${({ theme }: InnerProps) => theme.color.black};
  border-color: ${({ theme }: InnerProps) => theme.color.grayBase};
  font-size: ${({ theme }: InnerProps) => theme.fontSize.p};

  &:focus {
    border-color: ${({ theme, kind }: InnerProps) => theme.color[kind]};
    box-shadow: 0 0 3px 0
      ${({ theme, kind }: InnerProps) => shadow(theme.color[kind])};
  }

  &::placeholder {
    opacity: 1;
    color: ${({ theme }: InnerProps) => theme.color.grayBase};
  }

  &:disabled {
    background-color: ${({ theme }: InnerProps) => theme.color.white};
  }
`;

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  kind: PropTypes.string,
};

Textarea.defaultProps = {
  kind: 'primary',
};
export default Textarea;
