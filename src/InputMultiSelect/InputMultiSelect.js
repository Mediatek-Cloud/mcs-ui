// @flow
import * as React from 'react';
import styled from 'styled-components';
import InputOrder from '../InputOrder/InputOrder';
import Checkbox from '../Checkbox';
import { type Value, type ItemProps } from '../InputOrder/Item';

type Props = {
  value: Array<Value>,
  onChange: (value: Array<Value>) => Promise<void> | void,
  items: Array<ItemProps>,
};

const StyledInputOrder = styled(InputOrder)`
  > * {
    margin: 5px 10px;
  }
`;

const InputMultiSelect = (props: Props) => (
  <StyledInputOrder
    {...props}
    itemRenderer={({ value: itemValue }, { value, kind }) => (
      <Checkbox value={value.includes(itemValue)} size={14} kind={kind} />
    )}
  />
);

export default InputMultiSelect;
