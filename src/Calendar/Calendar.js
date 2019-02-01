// @flow
import * as React from 'react';
import D from 'date-fns';
import DateDisplay from './DateDisplay';
import {
  CalendarWrapper,
  HeaderLayout,
  IconArrowLeftWrapper,
  IconArrowRightWrapper,
  WeekdaysWrapper,
} from './styled-components';
import { getWeekdays } from './utils';
import { useCursorDate } from './hooks';

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
  } = useCursorDate({ date: defaultValue ? defaultValue : today });
  const [selectedDate, setSelectedDate] = React.useState(
    defaultValue ? defaultValue : today,
  );

  return (
    <CalendarWrapper>
      <HeaderLayout>
        <div
          onClick={onSubCursorDate}
          onKeyPress={onSubCursorDate}
          role="button"
          tabIndex="-1"
        >
          <IconArrowLeftWrapper />
        </div>
        <div>{D.format(cursorDate, 'LLL yyyy')}</div>
        <div
          onClick={onAddCursorDate}
          onKeyPress={onAddCursorDate}
          role="button"
          tabIndex="0"
        >
          <IconArrowRightWrapper />
        </div>
      </HeaderLayout>
      <WeekdaysWrapper>
        {getWeekdays({ format: 'EEE' }).map((weekDay, i) => (
          <div key={i}>
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
