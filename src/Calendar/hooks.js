// @flow
import * as React from 'react';
import D from 'date-fns';

export type UseFocusDate = (
  date: Date,
) => {
  focusDate: Date,
  onSubMonthFocusDate: Date => void,
  onAddMonthFocusDate: Date => void,
};

export const useFocusDate: UseFocusDate = date => {
  const [focusDate, setFocusDate] = React.useState<Date>(date);
  const onSubMonthFocusDate = React.useCallback(() => {
    setFocusDate(D.subMonths(focusDate, 1));
  }, [setFocusDate, focusDate]);
  const onAddMonthFocusDate = React.useCallback(() => {
    setFocusDate(D.addMonths(focusDate, 1));
  }, [setFocusDate, focusDate]);
  return {
    focusDate,
    onSubMonthFocusDate,
    onAddMonthFocusDate,
  };
};

export default useFocusDate;
