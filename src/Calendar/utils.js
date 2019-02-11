// @flow
import D from 'date-fns';

export const getWeekdays = ({
  format = 'EEE' /*: string */,
  weekStartsOn = 0 /* number */,
}) /*: [string] */ => {
  const now = new Date();
  return D.eachDayOfInterval({
    start: D.startOfWeek(now, { weekStartsOn }),
    end: D.endOfWeek(now, { weekStartsOn }),
  }).map(d => D.format(d, format));
};

export const getDaysInMonth /* ({date: Date, weekStartsOn: number}) => [Date] */ = ({
  date,
  weekStartsOn = 0,
}) => {
  const start = D.startOfWeek(D.startOfMonth(date), { weekStartsOn });
  return Array(42)
    .fill()
    .map((_, i) => D.addDays(start, i));
};

export const roundTen /* number => number */ = x => Math.floor(x / 10) * 10;
