// @flow
import * as R from 'ramda';
import { type InnerProps } from './TabItem';
import { type ThemeProps } from '../utils/type.flow';

export const mapBorderColorByActive = R.cond<InnerProps & ThemeProps, string>([
  [R.propEq('active', true), ({ theme, color }) => theme.color[color]],
  [R.T, R.always('transparent')],
]);
export const mapColorByActive = R.cond<InnerProps & ThemeProps, string>([
  [R.propEq('active', true), ({ theme, color }) => theme.color[color]],
  [R.T, ({ theme }) => theme.color.black],
]);
