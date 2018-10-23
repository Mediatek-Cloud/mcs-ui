// @flow
import * as React from 'react';
import styled from 'styled-components';

const InputRadioGroup: React.ComponentType<*> = styled.div`
  display: flex;

  > * + * {
    margin-left: 10px;
  }
`;

export default InputRadioGroup;
