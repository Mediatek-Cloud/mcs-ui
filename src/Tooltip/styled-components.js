// @flow
import styled, { type ReactComponentFunctional } from 'styled-components';
import { Overlay } from 'react-overlay-pack';
import Card, { type Props as CardProps } from '../Card/Card';
import { type ThemeProps } from '../utils/type.flow';

export const StyledCard: ReactComponentFunctional<CardProps> = styled(Card)`
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${({ theme }: ThemeProps) => theme.color.white};
`;

export const StyledOverlay: React.ComponentType<*> = styled(Overlay)`
  pointer-events: none;
`;

export default StyledCard;
