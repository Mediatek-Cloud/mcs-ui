// @flow
import * as React from 'react';
import styled from 'styled-components';
import { getWeekdays } from './utils';

const WeekdaysWrapper = styled.div`
  display: flex;
  & > div {
    width: calc(100% / 7);
    text-align: center;
    margin: 10px 0;
  }
`;

const Weekdays = React.memo(() => (
  <WeekdaysWrapper>
    {getWeekdays({ format: 'EEE' }).map((weekDay, i) => (
      <div key={i}>
        <strong>{weekDay}</strong>
      </div>
    ))}
  </WeekdaysWrapper>
));

export default Weekdays;
