// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {};

const Panel: React.ComponentType<Props> = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};

  > header {
    background-color: ${({ theme }: ThemeProps) => theme.color.grayLight};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    height: 50px;
  }

  > main,
  > footer {
    padding: 20px;
  }
`;

Panel.displayName = 'Panel';

export default Panel;
