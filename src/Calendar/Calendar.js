// @flow
import * as React from 'react';
import styled from 'styled-components';
import D from 'date-fns';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import DateDisplay from './DateDisplay';
import { useCursorDate } from './hooks';

const CalendarWrapper = styled.div`
  width: 300px;
  font-family: sans-serif;
`;

const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

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
      <FlexLayout>
        <PrevButton onClick={onSubCursorDate} />
        <div>{D.format(cursorDate, 'LLL yyyy')}</div>
        <NextButton onClick={onAddCursorDate} />
      </FlexLayout>
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
