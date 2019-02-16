/* eslint no-nested-ternary: 0 */
// @flow
import * as React from 'react';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

type DayItemProps = {
  isSelected: boolean,
  isOffRange: boolean,
  isToday: boolean,
};

type DayItemInnerProps = DayItemProps & ThemeProps;

export const CalendarWrapper: React.ComponentType<{}> = styled.div`
  width: 260px;
`;

export const HeaderLayout: React.ComponentType<{}> = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const PaginationButton: React.ComponentType<{}> = styled.div`
  width: 30px;
  cursor: pointer;
  transform: ${({ isReversed }) => (isReversed ? 'scaleX(-1)' : 'none')};
  & > svg {
    transform: translateY(2px) scale(1.5);
  }
`;

export const WeekdaysWrapper: React.ComponentType<{}> = styled.div`
  display: flex;
  & > div {
    width: calc(100% / 7);
    text-align: center;
    margin: 5px 0;
  }
`;

export const DaysLayout: React.ComponentType<{}> = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DayItemContainer: React.ComponentType<{}> = styled.div`
  flex-basis: calc(100% / 7);
`;

export const DayItem: React.ComponentType<DayItemProps> = styled.div`
  height: ${({ theme }: DayItemInnerProps) => theme.height.normal};
  width: ${({ theme }: DayItemInnerProps) => theme.height.normal};
  line-height: ${({ theme }: DayItemInnerProps) => theme.height.normal};
  text-align: center;
  vertical-align: middle;
  margin: auto;

  background-color: ${({
    isSelected,
    isOffRange,
    isToday,
    theme,
  }: DayItemInnerProps) =>
    isOffRange
      ? 'inherit'
      : isSelected
      ? theme.color.primary
      : isToday
      ? theme.color.grayBase
      : 'inherit'};
  color: ${({ isSelected, isOffRange, theme }: DayItemInnerProps) =>
    isSelected
      ? theme.color.white
      : isOffRange
      ? theme.color.grayBase
      : 'inherit'};
  &:hover {
    background-color: ${({ isOffRange, theme }: DayItemInnerProps) =>
      isOffRange ? 'inherit' : theme.color.primary};
    color: ${({ isOffRange, theme }: DayItemInnerProps) =>
      isOffRange ? theme.color.grayBase : theme.color.white};
  }
  border-radius: 50%;
  cursor: ${({ isOffRange }: DayItemInnerProps) =>
    isOffRange ? 'inherit' : 'pointer'};
`;
