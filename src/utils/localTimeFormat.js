// @flow
// $FlowFixMe
import formatter from 'date-fns/format/index';

type Formatter = number => string;

// Remind: date-fns always return local time
const localTimeFormat: Formatter = (date, format = 'yyyy-MM-dd HH:mm') =>
  formatter(new Date(date), format);

export default localTimeFormat;
