// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {};
type InnerProps = Props & ThemeProps;

const Small: React.ComponentType<Props> = styled.small`
  font-size: ${({ theme }: InnerProps) => theme.fontSize.small};
`;

Small.displayName = 'Small';

export default Small;
