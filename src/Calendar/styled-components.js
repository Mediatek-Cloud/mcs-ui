/* eslint no-nested-ternary: 0 */
// @flow
import * as React from 'react';
import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 260px;
`;

export const HeaderLayout: React.ComponentType<{||}> = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const PaginationButton = styled.div`
  width: 30px;
  cursor: pointer;
  transform: ${({ isReversed }) => (isReversed ? 'scaleX(-1)' : 'none')};
  & > svg {
    transform: translateY(2px) scale(1.5);
  }
`;

export const WeekdaysWrapper = styled.div`
  display: flex;
  & > div {
    width: calc(100% / 7);
    text-align: center;
    margin: 5px 0;
  }
`;

export const DaysLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DayItemContainer = styled.div`
  flex-basis: calc(100% / 7);
`;

export const DayItem = styled.div`
  height: ${({ theme }) => theme.height.normal};
  width: ${({ theme }) => theme.height.normal};
  line-height: ${({ theme }) => theme.height.normal};
  text-align: center;
  vertical-align: middle;
  margin: auto;

  background-color: ${({ isSelected, isOffRange, isToday, theme }) =>
    isOffRange
      ? 'inherit'
      : isSelected
      ? theme.color.primary
      : isToday
      ? theme.color.grayBase
      : 'inherit'};
  color: ${({ isSelected, isOffRange, theme }) =>
    isSelected
      ? theme.color.white
      : isOffRange
      ? theme.color.grayBase
      : 'inherit'};
  &:hover {
    background-color: ${({ isOffRange, theme }) =>
      isOffRange ? 'inherit' : theme.color.primary};
    color: ${({ isOffRange, theme }) =>
      isOffRange ? theme.color.grayBase : theme.color.white};
  }
  border-radius: 50%;
  cursor: ${({ isOffRange }) => (isOffRange ? 'inherit' : 'pointer')};
`;
