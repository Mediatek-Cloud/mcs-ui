// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type Props as AvatarProps } from './Avatar';
import { type ThemeProps } from '../utils/type.flow';

const Wrapper: React.ComponentType<AvatarProps> = styled.div`
  img,
  svg {
    display: inline-block;
    border-radius: 50%;
    border: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
    padding: 1px;
    background: ${({ theme }: ThemeProps) => theme.color.white};
    fill: ${({ theme }: ThemeProps) => theme.color.grayBase};
    box-sizing: border-box;
    object-fit: cover;
  }
`;

export default Wrapper;
