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
import { useFocusDate } from './hooks';
import { IconArrowLeft } from '../Icons';
import emptyFunction from '../utils/emptyFunction';
import { type WeekStartsOn } from '../utils/type.flow';

export type Props = {
  defaultValue?: Date,
  weekStartsOn?: WeekStartsOn,
  weekdayFormat?: string,
  onChange?: Date => any,
};

const Calendar = ({
  defaultValue,
  weekStartsOn,
  weekdayFormat,
  onChange,
}: Props) => {
  const today = D.startOfDay(new Date());
  const { focusDate, onSubMonthFocusDate, onAddMonthFocusDate } = useFocusDate(
    R.defaultTo(today, defaultValue),
  );
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    R.defaultTo(today, defaultValue),
  );

  return (
    <CalendarWrapper>
      <HeaderLayout>
        <PaginationButton onClick={onSubMonthFocusDate}>
          <IconArrowLeft />
        </PaginationButton>
        <div>{D.format(focusDate, 'LLL yyyy')}</div>
        <PaginationButton isReversed onClick={onAddMonthFocusDate}>
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
        focusDate={focusDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        weekStartsOn={weekStartsOn}
      />
    </CalendarWrapper>
  );
};

Calendar.displayName = 'Calendar';
Calendar.defaultProps = {
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
