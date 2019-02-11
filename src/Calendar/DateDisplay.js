// @flow
import * as React from 'react';
import D from 'date-fns';
import { DateLayout, DateItemContainer, DateItem } from './styled-components';
import { getDaysInMonth } from './utils';

const Day = ({ date, onChange, cursorDate, selectedDate, setSelectedDate }) => {
  const onClick = React.useCallback(() => {
    if (!D.isSameMonth(date, cursorDate)) return;
    setSelectedDate(date);
    if (onChange && !D.isSameDay(date, selectedDate)) onChange(date);
  }, [date, cursorDate, setSelectedDate, onChange]);

  return (
    <DateItemContainer>
      <DateItem
        key={date.getTime()}
        isSelected={D.isSameDay(date, selectedDate)}
        isOffRange={!D.isSameMonth(date, cursorDate)}
        isToday={D.isSameDay(date, new Date())}
        onClick={onClick}
      >
        {D.format(date, 'd')}
      </DateItem>
    </DateItemContainer>
  );
};

const DateDisplay = ({
  onChange,
  cursorDate,
  selectedDate,
  setSelectedDate,
  weekStartsOn,
}) => (
  <DateLayout>
    {getDaysInMonth({ date: cursorDate, weekStartsOn }).map(date => (
      <Day
        date={date}
        onChange={onChange}
        cursorDate={cursorDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    ))}
  </DateLayout>
);
export default DateDisplay;
