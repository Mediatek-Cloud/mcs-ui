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

export const getDaysInMonth /* d: Date => [Date] */ = date =>
  Array(42)
    .fill()
    .map((_, i) => D.addDays(D.startOfWeek(D.startOfMonth(date)), i - 1));
// TODO introduce weekStartsOn
// NOTE: to exclude final week in special case
// .filter((d, i) => i < 35 || d.startOf('week').month === date.month);

export const roundTen /* number => number */ = x => Math.floor(x / 10) * 10;
