// @flow
import * as React from 'react';
import styled from 'styled-components';
import D from 'date-fns';
import DateDisplay from './DateDisplay';
import {
  StyledKeyboardArrowLeft,
  StyledKeyboardArrowRight,
} from './styled-components';
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
        <div
          onClick={onSubCursorDate}
          onKeyPress={onSubCursorDate}
          role="button"
          tabIndex="-1"
        >
          <StyledKeyboardArrowLeft />
        </div>
        <div>{D.format(cursorDate, 'LLL yyyy')}</div>
        <div
          onClick={onAddCursorDate}
          onKeyPress={onAddCursorDate}
          role="button"
          tabIndex="0"
        >
          <StyledKeyboardArrowRight />
        </div>
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
