// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { IconFold } from '../Icons';
import Input from '../Input';
import Rotate from '../Rotate';
import {
  StyledInputGroup,
  Wrapper,
  StyledSelect,
  StyledButton,
} from './styled-components';
import { type ItemProps } from './type.flow';
import { type Kind } from '../utils/type.flow';

const PLACEHOLDER_VALUE = 'SELECT/PLACEHOLDER_VALUE';

export type Props = {
  value: any,
  items: Array<ItemProps>,
  focus?: boolean,
  placeholder?: string,
  kind?: Kind,
};
type State = {
  isOpen: boolean,
};

class Select extends React.PureComponent<Props, State> {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        children: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      }),
    ).isRequired,
    kind: PropTypes.string,
    placeholder: PropTypes.string,
    focus: PropTypes.bool,
  };

  static defaultProps = {
    kind: 'primary',
    value: '',
  };

  state = { isOpen: false };

  onFocus = () => this.setState({ isOpen: true });

  onBlur = () => this.setState({ isOpen: false });

  valueMapper = (value: any) => {
    const { items } = this.props;
    const selectedItem = R.find(R.propEq('value', value))(items);
    return (selectedItem && selectedItem.children) || '';
  };

  render() {
    const { isOpen } = this.state;
    const {
      focus,
      items,
      kind,
      value,
      placeholder,
      ...otherProps
    } = this.props;
    const { onFocus, onBlur, valueMapper } = this;
    return (
      <Wrapper>
        {/* Fake input */}
        <StyledInputGroup>
          <Input
            kind={kind}
            value={valueMapper(value)}
            placeholder={placeholder}
            readOnly
            focus={focus || isOpen}
            {...R.omit(['onChange'])(otherProps)}
          />
          <StyledButton kind={kind} active={focus || isOpen} square>
            <Rotate active={focus || isOpen}>
              <IconFold />
            </Rotate>
          </StyledButton>
        </StyledInputGroup>

        {/* Real select */}
        <StyledSelect
          value={value || PLACEHOLDER_VALUE}
          {...otherProps}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {placeholder && (
            <option value={PLACEHOLDER_VALUE} disabled>
              {placeholder}
            </option>
          )}
          {items.map(e => (
            <option key={e.value} {...e} />
          ))}
        </StyledSelect>
      </Wrapper>
    );
  }
}

export default Select;
