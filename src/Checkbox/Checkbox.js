// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import IconCheck from '../IconCheck';
import { Container, Content } from './styled-components';
import { type Kind } from '../utils/type.flow';

export type Props = {
  value: any,
  size?: number,
  kind?: Kind,
  render?: (value: any) => React.Node,
};

function Checkbox({ value, size, kind, render, ...otherProps }: Props) {
  const child = render && render(value);

  return (
    <Container checked={!!child} size={size} kind={kind} {...otherProps}>
      <Content checked={!!child}>{child}</Content>
    </Container>
  );
}
Checkbox.defaultProps = {
  size: 14,
  kind: 'primary',
  render: (value: boolean): React.Node =>
    value ? <IconCheck width={8} height={8} /> : null,
};
Checkbox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  size: PropTypes.number,
  kind: PropTypes.string,
  render: PropTypes.func, // (value: any) => React.Node,
};

export default Checkbox;
