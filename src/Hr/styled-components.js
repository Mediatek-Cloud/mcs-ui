// @flow
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export const StyledHr = styled.hr`
  flex: 1;
  border: 0;
  border-top: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
`;

export const Content = styled.div`
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.small};
  margin: 0 8px;
  color: ${({ theme }: ThemeProps) => theme.color.grayDark};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
