// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {};

const Breadcrumb: React.ComponentType<Props> = styled.div`
  display: flex;

  > * + * {
    &::before {
      content: '>';
      margin: 0 5px;
      color: ${({ theme }: ThemeProps) => theme.color.black};
    }
  }
`;
Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
