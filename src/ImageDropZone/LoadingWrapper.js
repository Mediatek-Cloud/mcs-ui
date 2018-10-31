// @flow
import * as React from 'react';
import styled from 'styled-components';
import Spin from '../Spin';
import { type Props as SpinProps } from '../Spin/Spin';
import { type ThemeProps } from '../utils/type.flow';

const LoadingWrapper: React.ComponentType<SpinProps> = styled(Spin)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 0;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);

  color: ${({ theme }: ThemeProps) => theme.color.grayLight};
`;

export default LoadingWrapper;
