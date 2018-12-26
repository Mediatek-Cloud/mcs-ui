// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Overlay } from 'react-overlay-pack';
import Card, { type Props as CardProps } from '../Card/Card';
import { type ThemeProps } from '../utils/type.flow';

export const StyledCard: React.ComponentType<CardProps> = styled(Card)`
  max-width: 280px;
  padding: 10px;
  background-color: ${({ theme }: ThemeProps) => theme.color.grayLight};
  border: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
`;

export const StyledOverlay: React.ComponentType<*> = styled(Overlay)`
  pointer-events: none;
`;

export default StyledCard;
