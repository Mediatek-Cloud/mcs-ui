// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import isString from '../utils/isString';
import { type Color } from '../utils/type.flow';

type Props = { color?: Color, children: React.Node };

const getBaseComponent = R.ifElse(isString, R.always('p'), R.always('div'));

const BaseComponent = ({ children, ...otherProps }: Props) =>
  React.createElement(getBaseComponent(children), otherProps, children);

BaseComponent.displayName = 'BaseComponent';
BaseComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseComponent;
