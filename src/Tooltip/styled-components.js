// @flow
import styled, { type ReactComponentFunctional } from 'styled-components';
import Card, { type Props as CardProps } from '../Card/Card';
import { type ThemeProps } from '../utils/type.flow';

export const StyledCard: ReactComponentFunctional<CardProps> = styled(Card)`
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${({ theme }: ThemeProps) => theme.color.white};
`;

export default StyledCard;
