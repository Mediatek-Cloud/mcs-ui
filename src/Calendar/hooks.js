// @flow
import * as React from 'react';
import D from 'date-fns';

export const useCursorDate = ({ date }) => {
  const [cursorDate, setCursorDate] = React.useState(date);
  const onSubMonthCursorDate = React.useCallback(() => {
    setCursorDate(D.subMonths(cursorDate, 1));
  }, [setCursorDate, cursorDate]);
  const onAddMonthCursorDate = React.useCallback(() => {
    setCursorDate(D.addMonths(cursorDate, 1));
  }, [setCursorDate, cursorDate]);
  return {
    cursorDate,
    setCursorDate,
    onSubMonthCursorDate,
    onAddMonthCursorDate,
  };
};

export default useCursorDate;
