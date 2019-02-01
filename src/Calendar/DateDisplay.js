// @flow
import * as React from 'react';
import D from 'date-fns';
import { DateLayout, DateItem } from './styled-components';
import { getDaysInMonth } from './utils';

const DateDisplay = ({
  onSelect,
  cursorDate,
  setCursorDate,
  selectedDate,
  setSelectedDate,
}) => {
  // TODO onClick callback with useCallback

  return (
    <DateLayout>
      {getDaysInMonth(cursorDate).map(d => (
        <DateItem
          key={d.getTime()}
          isSelected={
            D.format(d, 'yyyyMMdd') === D.format(selectedDate, 'yyyyMMdd')
          }
          isOffRange={D.getMonth(d) !== D.getMonth(cursorDate)}
          isToday={D.format(d, 'yyyyMMdd') === D.format(new Date(), 'yyyyMMdd')}
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
    </DateLayout>
  );
};

export default DateDisplay;
