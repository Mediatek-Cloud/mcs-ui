// @flow
import * as React from 'react';
import D from 'date-fns';

export const useCursorDate = ({ date }) => {
  const [cursorDate, setCursorDate] = React.useState(date);
  const onSubCursorDate = React.useCallback(() => {
    setCursorDate(D.subMonths(cursorDate, 1));
  }, [setCursorDate, cursorDate]);
  const onAddCursorDate = React.useCallback(() => {
    setCursorDate(D.addMonths(cursorDate, 1));
  }, [setCursorDate, cursorDate]);
  return {
    cursorDate,
    setCursorDate,
    onSubCursorDate,
    onAddCursorDate,
  };
};
