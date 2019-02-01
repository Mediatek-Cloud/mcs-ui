// @flow
import * as React from 'react';
import styled from 'styled-components';
import D from 'date-fns';
import { WeekdaysWrapper } from './styled-components';
import { getWeekdays, getDaysInMonth } from './utils';

const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div {
    flex-basis: calc(100% / 7);
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
  }
`;

const DateItem = styled.div`
  background-color: ${({ isSelected, isToday }) =>
    isSelected ? '#00A1DE' : isToday ? '#D1D2D3' : 'inherit'};
  color: ${({ isSelected, isOffRange, isToday }) =>
    isSelected ? '#fff' : isOffRange ? '#eee' : 'inherit'};
  border-radius: ${({ isSelected, isToday }) =>
    isSelected || isToday ? '50%' : 'none'};
  cursor: ${({ isOffRange }) => (isOffRange ? 'inherit' : 'pointer')};
  transform: scale(0.7);
  font-size: 1.4em;
`;

const DateDisplay = ({
  onSelect,
  cursorDate,
  setCursorDate,
  selectedDate,
  setSelectedDate,
}) => {
  // TODO onClick callback with useCallback

  return (
    <div>
      <WeekdaysWrapper>
        {getWeekdays({ format: 'EEE' }).map((weekDay, i) => (
          <div key={i}>
            <strong>{weekDay}</strong>
          </div>
        ))}
      </WeekdaysWrapper>
      <FlexLayout>
        {getDaysInMonth(cursorDate).map((d, i) => (
          <DateItem
            key={i}
            isSelected={
              D.format(d, 'yyyyMMdd') === D.format(selectedDate, 'yyyyMMdd')
            }
            isOffRange={D.getMonth(d) !== D.getMonth(cursorDate)}
            isToday={
              D.format(d, 'yyyyMMdd') === D.format(new Date(), 'yyyyMMdd')
            }
            onClick={() => {
              // off range
              if (D.getMonth(d) !== D.getMonth(cursorDate)) return;
              setSelectedDate(d);
              if (onSelect) onSelect(d);
            }}
          >
            {D.format(d, 'd')}
          </DateItem>
        ))}
      </FlexLayout>
    </div>
  );
};

export default DateDisplay;
