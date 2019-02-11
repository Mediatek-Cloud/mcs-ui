// @flow
import * as React from 'react';
import D from 'date-fns';
import { DaysLayout, DayItemContainer, DayItem } from './styled-components';
import { getDaysInMonth } from './utils';

const Day = ({ date, onChange, cursorDate, selectedDate, setSelectedDate }) => {
  const onClick = React.useCallback(() => {
    if (!D.isSameMonth(date, cursorDate)) return;
    setSelectedDate(date);
    if (onChange && !D.isSameDay(date, selectedDate)) onChange(date);
  }, [date, cursorDate, setSelectedDate, onChange]);

  return (
    <DayItemContainer>
      <DayItem
        key={date.getTime()}
        isSelected={D.isSameDay(date, selectedDate)}
        isOffRange={!D.isSameMonth(date, cursorDate)}
        isToday={D.isSameDay(date, new Date())}
        onClick={onClick}
      >
        {D.format(date, 'd')}
      </DayItem>
    </DayItemContainer>
  );
};

const DaysDisplay = ({
  onChange,
  cursorDate,
  selectedDate,
  setSelectedDate,
  weekStartsOn,
}) => (
  <DaysLayout>
    {getDaysInMonth({ date: cursorDate, weekStartsOn }).map(date => (
      <Day
        date={date}
        onChange={onChange}
        cursorDate={cursorDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    ))}
  </DaysLayout>
);
export default DaysDisplay;
