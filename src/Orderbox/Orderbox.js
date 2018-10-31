// @flow
import * as React from 'react';
import Checkbox, { type Props } from '../Checkbox/Checkbox';

const numberRenderer: number => React.Node = (value: number) => {
  const checked: boolean = typeof value === 'number' && value > 0;
  return checked ? value : null;
};

const Orderbox = (props: Props): React.Node => (
  <Checkbox render={numberRenderer} size={18} {...props} />
);

export default Orderbox;
