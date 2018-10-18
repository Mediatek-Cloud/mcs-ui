// @flow
import * as R from 'ramda';
import { type InnerProps } from './Toast';

export const mapColorByKind = R.cond([
  [R.propEq('kind', 'default'), R.path(['theme', 'color', 'grayDark'])],
  [R.T, ({ kind }: InnerProps) => R.path(['theme', 'color', kind])],
]);

export default mapColorByKind;
