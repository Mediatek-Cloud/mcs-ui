// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { css, type ReactComponentFunctional } from 'styled-components';
import { type ThemeProps, type Color } from '../utils/type.flow';
import BaseComponent from './BaseComponent';

type Props = { color?: Color, children: React.Node };
type InnerProps = { color: Color } & ThemeProps;

const P: ReactComponentFunctional<Props> = styled(BaseComponent)`
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
