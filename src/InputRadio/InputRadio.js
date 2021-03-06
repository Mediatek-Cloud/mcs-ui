// @flow
import * as React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { StyledLabel, SVG, BoxCircle, CheckCircle } from './styled-components';

export type Props = {
  value: boolean,
  onChange: (value: boolean) => Promise<void> | void,
  children?: React.Node,
};

class InputRadio extends React.PureComponent<Props> {
  static propTypes = {
    value: PropTypes.bool, // (value: boolean) => Promise<void> | void,
    onChange: PropTypes.func,
    children: PropTypes.node,
  };

  onChange = () => {
    const { onChange, value } = this.props;
    onChange(!value);
  };

  render() {
    const { value, children, ...otherProps } = this.props;
    const { onChange } = this;

    return (
      <StyledLabel onClick={onChange}>
        <SVG
          viewBox="0 0 14 14"
          value={value}
          {...R.omit(['onChange'])(otherProps)}
        >
          <BoxCircle cx="7" cy="7" r="6" value={value} />
          <CheckCircle cx="7" cy="7" r="6" value={value} />
        </SVG>

        {children}
      </StyledLabel>
    );
  }
}

export default InputRadio;
