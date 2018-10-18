// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { type Kind } from '../utils/type.flow';
import { StyledCard, StyledP } from './styled-components';

export type Props = { children: React.Node, kind?: Kind };
export type InnerProps = { children: React.Node, kind: Kind };

const Toast = ({ children, kind, ...otherProps }: Props) => (
  <StyledCard {...otherProps} kind={kind}>
    <StyledP kind={kind}>{children}</StyledP>
  </StyledCard>
);

Toast.displayName = 'Toast';
Toast.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.string,
};
Toast.defaultProps = {
  kind: 'primary',
};

export default Toast;
