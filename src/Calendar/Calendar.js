// @flow
import * as React from 'react';
import * as R from 'ramda';
import D from 'date-fns';
import DateDisplay from './DateDisplay';
import {
  CalendarWrapper,
  HeaderLayout,
  PaginationButton,
  WeekdaysWrapper,
} from './styled-components';
import { getWeekdays } from './utils';
import { useCursorDate } from './hooks';
import { IconArrowLeft } from '../Icons';

const Calendar = ({
  defaultValue = null /*: string | number | Date  */,
  onSelect /*: Date => any  */,
}) => {
  const today = D.startOfDay(new Date());
  const {
    cursorDate,
    setCursorDate,
    onSubCursorDate,
    onAddCursorDate,
  } = useCursorDate({ date: R.defaultTo(today, defaultValue) });
  const [selectedDate, setSelectedDate] = React.useState(
    R.defaultTo(today, defaultValue),
  );

  return (
    <CalendarWrapper>
      <HeaderLayout>
        <PaginationButton onClick={onSubCursorDate}>
          <IconArrowLeft />
        </PaginationButton>
        <div>{D.format(cursorDate, 'LLL yyyy')}</div>
        <PaginationButton isReversed onClick={onAddCursorDate}>
          <IconArrowLeft />
        </PaginationButton>
      </HeaderLayout>
      <WeekdaysWrapper>
        {getWeekdays({ format: 'EEE' }).map(weekDay => (
          <div key={weekDay}>
            <strong>{weekDay}</strong>
          </div>
        ))}
      </WeekdaysWrapper>
      <DateDisplay
        onSelect={onSelect}
        cursorDate={cursorDate}
        setCursorDate={setCursorDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </CalendarWrapper>
  );
};

export default Calendar;
