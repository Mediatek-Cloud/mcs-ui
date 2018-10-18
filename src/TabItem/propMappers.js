// @flow
import * as R from 'ramda';
import { type ThemeProps } from '../utils/type.flow';
import { type InnerProps } from './TabItem';

export const mapBorderColorByActive = R.cond([
  [
    R.propEq('active', true),
    ({ theme, color }: InnerProps & ThemeProps) => theme.color[color],
  ],
  [R.T, R.always('transparent')],
]);
export const mapColorByActive = R.cond([
  [
    R.propEq('active', true),
    ({ theme, color }: InnerProps & ThemeProps) => theme.color[color],
  ],
  [R.T, R.path(['theme', 'color', 'black'])],
]);
