// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import IconCheck from '../IconCheck';
import { Container, Content } from './styled-components';
import { type Kind } from '../utils/type.flow';
import emptyFunction from '../utils/emptyFunction';

export type Props = {
  value: any,
  disabled?: boolean,
  size?: number,
  kind?: Kind,
  onClick?: (e: any) => any,
  render?: (value: any) => React.Node,
};

function Checkbox({
  value,
  disabled,
  size,
  kind,
  onClick,
  render,
  ...otherProps
}: Props) {
  const child = render && render(value);

  return (
    <Container
      checked={!!child}
      disabled={disabled}
      size={size}
      kind={kind}
      onClick={disabled ? emptyFunction : onClick}
      {...otherProps}
    >
      <Content checked={!!child}>{child}</Content>
    </Container>
  );
}
Checkbox.defaultProps = {
  disabled: false,
  size: 14,
  kind: 'primary',
  onClick: emptyFunction,
  render: (value: boolean): React.Node =>
    value ? <IconCheck width={8} height={8} /> : null,
};
Checkbox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.number,
  kind: PropTypes.string,
  onClick: PropTypes.func,
  render: PropTypes.func, // (value: any) => React.Node,
};

export default Checkbox;
