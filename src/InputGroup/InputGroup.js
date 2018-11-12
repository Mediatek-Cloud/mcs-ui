// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {};

const InputGroup: React.ComponentType<Props> = styled.div`
  display: flex;

  > button {
    flex-shrink: 0;
  }

  /* ============================
   * First Child
   * ============================
   */

  > *:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* ============================
   * Middle Child
   * ============================
   */

  > *:not(:first-child):not(:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* ============================
   * Last Child
   * ============================
   */

  > *:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /**
   * Unit
   */

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0 5px;
    min-height: ${({ theme }: ThemeProps) => theme.height.normal};
    min-width: ${({ theme }: ThemeProps) => theme.height.normal};
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.color.grayBase};
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.grayDark};
  }
  > * + span {
    border-left-width: 0;
  }
  > * + span:not(:last-child) {
    border-right-width: 0;
  }
  > span:first-child {
    border-right-width: 0;
  }
  > span:last-child {
    border-left-width: 0;
  }
`;

InputGroup.displayName = 'InputGroup';

export default InputGroup;
