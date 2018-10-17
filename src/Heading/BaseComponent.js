// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type Props = {
  level?: number,
  children: React.Node,
};

const BaseComponent = ({ level, children, ...otherProps }: Props) =>
  // $FlowFixMe
  React.createElement(`h${level}`, otherProps, children);

BaseComponent.displayName = 'BaseComponent';
BaseComponent.defaultProps = {
  level: 1,
};
BaseComponent.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseComponent;
