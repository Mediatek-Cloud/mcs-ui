/* eslint no-nested-ternary: 0 */
// @flow
import * as React from 'react';
import styled from 'styled-components';

import { IconArrowLeft } from '../Icons';

export const CalendarWrapper = styled.div`
  width: 300px;
  font-family: sans-serif;
`;

export const HeaderLayout: React.ComponentType<{||}> = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const IconArrowLeftWrapper = styled(IconArrowLeft)`
  width: 20px;
  transform: scale(1.5);
  cursor: pointer;
`;

export const IconArrowRightWrapper = styled(IconArrowLeft)`
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

export const DateLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div {
    // TODO refactor
    flex-basis: calc(100% / 7);
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
  }
`;

export const DateItem = styled.div`
  // TODO: add hover style
  background-color: ${({ isSelected, isToday }) =>
    // TODO add theme
    isSelected ? '#00A1DE' : isToday ? '#D1D2D3' : 'inherit'};
  color: ${({ isSelected, isOffRange }) =>
    isSelected ? '#fff' : isOffRange ? '#eee' : 'inherit'};
  border-radius: ${({ isSelected, isToday }) =>
    isSelected || isToday ? '50%' : 'none'};
  cursor: ${({ isOffRange }) => (isOffRange ? 'inherit' : 'pointer')};
  transform: scale(0.7);
  font-size: 1.4em;
`;
