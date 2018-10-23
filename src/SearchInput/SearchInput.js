// @flow
import * as React from 'react';
import { IconClose, IconSearch } from '../Icons';
import { StyledLabel, StyledInput } from './styled-components';

export type Props = {
  value: string,
  onChange: (e: any) => void,
  onFocus?: (e: any) => void,
  onBlur?: (e: any) => void,
  onClear: () => void,
  className?: string,
};
type State = {
  isFocus: boolean,
};

class SearchInput extends React.PureComponent<Props, State> {
  state = { isFocus: false };

  onFocus = (e: any) => {
    const { onFocus } = this.props;
    this.setState(() => ({ isFocus: true }));
    if (onFocus) {
      onFocus(e);
    }
  };

  onBlur = (e: any) => {
    const { onBlur } = this.props;
    this.setState(() => ({ isFocus: false }));
    if (onBlur) {
      onBlur(e);
    }
  };

  render() {
    const { isFocus } = this.state;
    const { value, onChange, onClear, className, ...otherProps } = this.props;
    const { onFocus, onBlur } = this;

    return (
      <StyledLabel isFocus={isFocus} className={className}>
        <IconSearch height={18} width={18} />
        <StyledInput
          {...otherProps}
          type="text"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {value && <IconClose height={18} width={18} onClick={onClear} />}
      </StyledLabel>
    );
  }
}

export default SearchInput;
