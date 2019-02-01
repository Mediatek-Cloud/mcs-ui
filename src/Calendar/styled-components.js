// @flow
import * as React from 'react';
import styled from 'styled-components';

import { IconArrowLeft } from '../Icons';

export const StyledKeyboardArrowLeft = styled(IconArrowLeft)`
  width: 20px;
  transform: scale(1.5);
  cursor: pointer;
`;

export const StyledKeyboardArrowRight = styled(IconArrowLeft)`
  width: 20px;
  transform: scaleX(-1) scale(1.5);
  cursor: pointer;
`;

export const WeekdaysWrapper = styled.div`
  display: flex;
  & > div {
    width: calc(100% / 7);
    text-align: center;
    margin: 10px 0;
  }
`;
