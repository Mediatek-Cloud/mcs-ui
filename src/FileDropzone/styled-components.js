// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

type ContainerProps = {
  canDrop: boolean,
  height: number,
};

export const Container: React.ComponentType<ContainerProps> = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: ${({ height }: ContainerProps) => height}px;
  padding: 12px;
  color: ${({ theme }: ThemeProps) => theme.color.grayBase};
  background-color: ${({ theme }: ThemeProps) => theme.color.grayLight};
  border: 1px dashed
    ${({ theme, canDrop }: { canDrop: boolean } & ThemeProps) =>
      canDrop ? theme.color.primary : theme.color.grayBase};
  border-radius: 3px;
  transition: all cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
`;

export const FileNameDisplay: React.ComponentType<*> = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};

  > * {
    display: flex;
    align-items: stretch;
  }

  > *:first-child {
    overflow: hidden;

    svg {
      flex-shrink: 0;
      margin-right: 5px;
      fill: ${({ theme }: ThemeProps) => theme.color.primary};
    }
  }
`;

export const TextOverflow: React.ComponentType<*> = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const FileLoadingIcon: React.ComponentType<{
  isLoading: boolean,
}> = styled.div`
  display: flex;

  /* Note: Spin div */
  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 5px;
    fill: ${({ theme, isLoading }: { isLoading: boolean } & ThemeProps) =>
      isLoading ? theme.color.grayDark : theme.color.success};
  }
`;
