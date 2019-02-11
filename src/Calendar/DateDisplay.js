// @flow
import * as React from 'react';
import D from 'date-fns';
import { DateLayout, DateItemContainer, DateItem } from './styled-components';
import { getDaysInMonth } from './utils';

const DateDisplay = ({
  onChange,
  cursorDate,
  setCursorDate,
  selectedDate,
  setSelectedDate,
}) => {
  // TODO onClick callback with useCallback
  return (
    <DateLayout>
      {getDaysInMonth(cursorDate).map(d => (
        <DateItemContainer>
          <DateItem
            key={d.getTime()}
            isSelected={D.isSameDay(d, selectedDate)}
            isOffRange={!D.isSameMonth(d, cursorDate)}
            isToday={D.isSameDay(d, new Date())}
            onClick={() => {
              if (!D.isSameMonth(d, cursorDate)) return;
              setSelectedDate(d);
              if (onChange && !D.isSameDay(d, selectedDate)) {
                onChange(d);
              }
            }}
          >
            {D.format(d, 'd')}
          </DateItem>
        </DateItemContainer>
      ))}
    </DateLayout>
  );
};

export default DateDisplay;
