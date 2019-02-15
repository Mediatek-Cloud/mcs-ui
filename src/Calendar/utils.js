// @flow
import D from 'date-fns';
import { type WeekStartsOn } from '../utils/type.flow';

type GetWeekdays = ({
  format?: string,
  weekStartsOn?: WeekStartsOn,
}) => Array<string>;

type GetDaysInMonth = ({
  date: Date,
  weekStartsOn?: WeekStartsOn,
}) => Array<Date>;

export const getWeekdays: GetWeekdays = ({
  format = 'EEE',
  weekStartsOn = 0,
}) => {
  const now = new Date();
  return D.eachDayOfInterval({
    start: D.startOfWeek(now, { weekStartsOn }),
    end: D.endOfWeek(now, { weekStartsOn }),
  }).map(d => D.format(d, format));
};

export const getDaysInMonth: GetDaysInMonth = ({ date, weekStartsOn = 0 }) => {
  const start = D.startOfWeek(D.startOfMonth(date), { weekStartsOn });
  return Array(42)
    .fill()
    .map((_, i) => D.addDays(start, i));
};
