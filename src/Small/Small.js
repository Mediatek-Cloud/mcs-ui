// @flow
import styled, { type ReactComponentFunctional } from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {};
type InnerProps = Props & ThemeProps;

const Small: ReactComponentFunctional<Props> = styled.small`
  font-size: ${({ theme }: InnerProps) => theme.fontSize.small};
`;

Small.displayName = 'Small';

export default Small;
