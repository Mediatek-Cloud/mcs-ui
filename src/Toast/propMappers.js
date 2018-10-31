// @flow
import * as R from 'ramda';
import { type InnerProps } from './Toast';
import { type ThemeProps } from '../utils/type.flow';

export const mapColorByKind = R.cond<InnerProps & ThemeProps, string>([
  [R.propEq('kind', 'default'), ({ theme }) => theme.color.grayDark],
  [R.T, ({ theme, kind }) => theme.color[kind]],
]);

export default mapColorByKind;
