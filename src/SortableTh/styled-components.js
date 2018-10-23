// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type Props } from './SortableTh';

export const StyledTh: React.ComponentType<Props> = styled.th`
  cursor: pointer;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  background-color: ${({ active }: Props) => (active ? '#f5f5f5' : 'unset')};

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 5px;
    margin-right: 16px; /* Note: th padding right */
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default StyledTh;
