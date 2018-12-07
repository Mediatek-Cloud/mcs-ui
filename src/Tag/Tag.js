// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {};

const Tag: React.ComponentType<Props> = styled.div`
  color: ${({ theme }: ThemeProps) => theme.color.warning};
  background-color: #fefaf4;
  border: 1px solid ${({ theme }: ThemeProps) => theme.color.warning};
  height: 20px;
  padding: 0 5px;
  display: inline-flex;
  border-radius: 3px;
`;

export default Tag;
