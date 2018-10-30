// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

type Props = {
  height: number,
};

export const Container: React.ComponentType<Props> = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
  border-radius: 3px;
  height: ${(props: Props) => props.height}px;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};
  overflow: auto;

  > * {
    display: flex;
    margin: 10px;
    min-width: 45%;
    outline: none;
    cursor: pointer;
    align-items: flex-start;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 5px;
`;
