// @flow
import styled, { type ReactComponentFunctional } from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {};

const Table: ReactComponentFunctional<Props> = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead tr {
    background-color: ${({ theme }: ThemeProps) => theme.color.grayLight};
    color: ${({ theme }: ThemeProps) => theme.color.grayDark};

    > * {
      padding: 8px 0 8px 16px;
    }
  }

  tr {
    border-bottom: 1px solid
      ${({ theme }: ThemeProps) => theme.base.bodyBackgroundColor};

    > * {
      padding: 16px 0 16px 16px;
    }
  }

  th {
    text-align: left;
    font-weight: normal;
  }
`;

export default Table;
