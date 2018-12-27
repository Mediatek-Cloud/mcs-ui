// @flow
import * as React from 'react';
import styled from 'styled-components';
import Card, { type Props as CardProps } from '../Card/Card';
import P, { type Props as PProps } from '../P/P';
import { type ThemeProps } from '../utils/type.flow';
import opacity from '../utils/opacity';
import { type InnerProps, type Props } from './Toast';
import { mapColorByKind } from './propMappers';

const lighten = opacity(0.1);

export const StyledCard: React.ComponentType<CardProps> = styled(Card)`
  border: 1px solid ${mapColorByKind};
  background-color: rgba(255, 255, 255, 0.9);
`;

export const StyledP: React.ComponentType<PProps & Props> = styled(P)`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  color: ${mapColorByKind};
  background-color: ${({ theme, kind }: ThemeProps & InnerProps) =>
    lighten(theme.color[kind])};
`;
