// @flow
import * as React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import { StyledLabel } from './styled-components';
import emptyFunction from '../utils/emptyFunction';

export type Props = {
  value: boolean,
  disabled?: boolean,
  onChange: (value: boolean) => Promise<void> | void,
  children?: React.Node,
};

class InputCheckbox extends React.PureComponent<Props> {
  static propTypes = {
    value: PropTypes.bool, // (value: boolean) => Promise<void> | void,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node,
  };

  onChange = () => {
    const { onChange, value } = this.props;
    onChange(!value);
  };

  render() {
    const { value, disabled = false, children, ...otherProps } = this.props;
    const { onChange } = this;

    return (
      <StyledLabel
        disabled={disabled}
        onClick={disabled ? emptyFunction : onChange}
      >
        <Checkbox
          value={value}
          disabled={disabled}
          {...R.omit(['onChange'])(otherProps)}
        />
        {children}
      </StyledLabel>
    );
  }
}

export default InputCheckbox;
