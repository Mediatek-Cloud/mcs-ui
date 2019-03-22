// @flow
import * as React from 'react';
import D from 'date-fns';
import { DaysLayout, DayItemContainer, DayItem } from './styled-components';
import { getDaysInMonth } from './utils';
import { type WeekStartsOn } from '../utils/type.flow';

type InnerProps = {
  onChange?: Date => any,
  focusDate: Date,
  selectedDate: Date,
  setSelectedDate: Date => void,
};
type Props = InnerProps & {
  weekStartsOn?: WeekStartsOn,
};
type DayProps = InnerProps & {
  date: Date,
};

const Day = ({
  date,
  onChange,
  focusDate,
  selectedDate,
  setSelectedDate,
}: DayProps) => {
  const onClick = React.useCallback(() => {
    if (!D.isSameMonth(date, focusDate)) return;
    setSelectedDate(date);
    if (onChange && !D.isSameDay(date, selectedDate)) onChange(date);
  }, [date, focusDate, setSelectedDate, onChange]);

  return (
    <DayItemContainer>
      <DayItem
        key={date.getTime()}
        isSelected={D.isSameDay(date, selectedDate)}
        isOffRange={!D.isSameMonth(date, focusDate)}
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
  focusDate,
  selectedDate,
  setSelectedDate,
  weekStartsOn,
}: Props) => (
  <DaysLayout>
    {getDaysInMonth({ date: focusDate, weekStartsOn }).map(date => (
      <Day
        date={date}
        onChange={onChange}
        focusDate={focusDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    ))}
  </DaysLayout>
);

export default DaysDisplay;
