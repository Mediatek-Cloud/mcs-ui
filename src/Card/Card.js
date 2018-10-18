// @flow
import styled, { type ReactComponentFunctional } from 'styled-components';
import { type ThemeProps, type Color } from '../utils/type.flow';

export type Props = {};
type InnerProps = { color: Color } & ThemeProps;

const Card: ReactComponentFunctional<Props> = styled.div`
  box-sizing: border-box;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color: ${({ theme }: InnerProps) => theme.color.white};
  overflow: hidden;
`;

Card.displayName = 'Card';

export default Card;
