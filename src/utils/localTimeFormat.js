// @flow
// $FlowFixMe
import formatter from 'date-fns/format/index';

// Remind: date-fns always return local time
const localTimeFormat = (
  date: string | number | Date,
  format: string = 'yyyy-MM-dd HH:mm',
): string => formatter(new Date(date), format);

export default localTimeFormat;
