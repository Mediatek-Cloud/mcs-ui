// @flow
import * as R from 'ramda';
import { darken1, darken2, darken3 } from '../utils/darken';
import { type Size, type Kind } from '../utils/type.flow';
import { type InnerProps } from './Button';

const SMALL: Size = 'small';
const DEFAULT: Kind = 'default';

export const width = R.cond<InnerProps, string>([
  [R.propEq('block', true), R.always('100%')],
  [
    R.anyPass([R.propEq('square', true), R.propEq('round', true)]),
    ({ theme }) => theme.height.normal,
  ],
  [R.T, R.always('initial')],
]);

export const minWidth = R.cond<InnerProps, string>([
  [
    R.anyPass([
      R.propEq('block', true),
      R.propEq('square', true),
      R.propEq('round', true),
    ]),
    R.always('initial'),
  ],
  [R.propEq('size', SMALL), R.always('40px')],
  [R.T, R.always('80px')],
]);

export const borderRadius = R.cond<InnerProps, string>([
  [R.propEq('round', true), R.always('50%')],
  [R.T, R.always('3px')],
]);

export const padding = R.cond<InnerProps, string>([
  [
    R.anyPass([R.propEq('square', true), R.propEq('round', true)]),
    R.always('0'),
  ],
  [R.propEq('size', SMALL), R.always('0 5px')],
  [R.T, R.always('6px 15px')],
]);

export const fontSize = R.cond<InnerProps, string>([
  [R.propEq('size', SMALL), ({ theme }) => theme.fontSize.small],
  [R.T, ({ theme }) => theme.fontSize.p],
]);

export const color = R.cond<InnerProps, string>([
  [R.propEq('kind', DEFAULT), ({ theme }) => theme.color.grayDark],
  [R.T, ({ theme }) => theme.color.white],
]);

export const backgroundColor = R.cond<InnerProps, string>([
  [R.propEq('active', true), ({ theme, kind }) => darken2(theme.color[kind])],
  [R.propEq('disabled', true), ({ theme }) => theme.color.grayBase],
  [R.T, ({ theme, kind }) => theme.color[kind]],
]);

export const hoverBackgroundColor = R.cond<InnerProps, string>([
  [R.propEq('disabled', true), ({ theme }) => theme.color.grayBase],
  [R.T, ({ theme, kind }) => darken1(theme.color[kind])],
]);

export const activeBackgroundColor = R.cond<InnerProps, string>([
  [R.propEq('disabled', true), ({ theme }) => theme.color.grayBase],
  [R.T, ({ theme, kind }) => darken2(theme.color[kind])],
]);

export const borderColor = R.cond<InnerProps, string>([
  [R.propEq('disabled', true), ({ theme }) => darken3(theme.color.grayBase)],
  [R.T, ({ theme, kind }) => darken3(theme.color[kind])],
]);
