// @flow
import PropTypes from 'prop-types';
import styled, { css, type ReactComponentFunctional } from 'styled-components';
import { darken1 } from '../utils/darken';
import { type ThemeProps } from '../utils/type.flow';

export type Props = { active?: boolean };
type InnerProps = { active: boolean } & ThemeProps;

const MenuItem: ReactComponentFunctional<Props> = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 15px;
  min-width: 80px;
  cursor: pointer;
  box-sizing: border-box;
  color: ${({ theme }: InnerProps) => theme.color.black};
  min-height: ${({ theme }: InnerProps) => theme.height.normal};

  * {
    transition: initial;
  }

  &:hover {
    background-color: ${({ theme }: InnerProps) => theme.color.primary};
    color: ${({ theme }: InnerProps) => theme.color.white};

    * {
      color: ${({ theme }: InnerProps) => theme.color.white};
    }
  }

  /* Active */
  &:active {
    background-color: ${({ theme }: InnerProps) =>
      darken1(theme.color.primary)};
    color: ${({ theme }: InnerProps) => theme.color.white};

    * {
      color: ${({ theme }: InnerProps) => theme.color.white};
    }
  }
  ${({ theme, active }: InnerProps) =>
    active &&
    css`
      background-color: transparent;
      color: ${theme.color.primary};

      * {
        color: ${theme.color.primary};
      }
    `};
`;

MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = {
  active: PropTypes.bool,
};
MenuItem.defaultProps = {
  active: false,
};

export default MenuItem;
