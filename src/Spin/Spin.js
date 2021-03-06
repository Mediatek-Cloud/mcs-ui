// @flow
import * as React from 'react';
import styled from 'styled-components';
import rotate360 from './rotate360';

export type Props = {};

const Spin: React.ComponentType<Props> = styled.div`
  box-sizing: border-box;

  > * {
    transform-origin: center center;
    animation: ${rotate360} 0.6s infinite cubic-bezier(0.41, 0.01, 0.58, 1);
  }
`;

Spin.displayName = 'Spin';

export default Spin;
