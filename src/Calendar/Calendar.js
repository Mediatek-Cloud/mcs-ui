// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import D from 'date-fns';
import DaysDisplay from './DaysDisplay';
import {
  CalendarWrapper,
  HeaderLayout,
  PaginationButton,
  WeekdaysWrapper,
} from './styled-components';
import { getWeekdays } from './utils';
import { useCursorDate } from './hooks';
import { IconArrowLeft } from '../Icons';
import emptyFunction from '../utils/emptyFunction';

const Calendar = ({ defaultValue, weekStartsOn, weekdayFormat, onChange }) => {
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
        {getWeekdays({ format: weekdayFormat, weekStartsOn }).map(weekDay => (
          <div key={weekDay}>
            <strong>{weekDay}</strong>
          </div>
        ))}
      </WeekdaysWrapper>
      <DaysDisplay
        onChange={onChange}
        cursorDate={cursorDate}
        setCursorDate={setCursorDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        weekStartsOn={weekStartsOn}
      />
    </CalendarWrapper>
  );
};

Calendar.defaultProps = {
  defaultValue: null,
  weekStartsOn: 0,
  weekdayFormat: 'EEE',
  onChange: emptyFunction,
};
Calendar.propTypes = {
  defaultValue: PropTypes.instanceOf(Date),
  weekStartsOn: PropTypes.number,
  weekdayFormat: PropTypes.string,
  onChange: PropTypes.func,
};

export default Calendar;
