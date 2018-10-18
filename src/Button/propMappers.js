// @flow
import * as R from 'ramda';
import { darken1, darken2, darken3 } from '../utils/darken';
import { type Size, type Kind } from '../utils/type.flow';
import { type InnerProps } from './Button';

const SMALL: Size = 'small';
const DEFAULT: Kind = 'default';

export const width = R.cond([
  [R.propEq('block', true), R.always('100%')],
  [
    R.anyPass([R.propEq('square', true), R.propEq('round', true)]),
    R.path(['theme', 'height', 'normal']),
  ],
  [R.T, R.always('initial')],
]);

export const minWidth = R.cond([
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

export const borderRadius = R.cond([
  [R.propEq('round', true), R.always('50%')],
  [R.T, R.always('3px')],
]);

export const padding = R.cond([
  [
    R.anyPass([R.propEq('square', true), R.propEq('round', true)]),
    R.always('0'),
  ],
  [R.propEq('size', SMALL), R.always('0 5px')],
  [R.T, R.always('6px 15px')],
]);

export const fontSize = R.cond([
  [R.propEq('size', SMALL), R.path(['theme', 'fontSize', 'small'])],
  [R.T, R.path(['theme', 'fontSize', 'p'])],
]);

export const color = R.cond([
  [R.propEq('kind', DEFAULT), R.path(['theme', 'color', 'grayDark'])],
  [R.T, R.path(['theme', 'color', 'white'])],
]);

export const backgroundColor = R.cond([
  [
    R.propEq('active', true),
    ({ theme, kind }: InnerProps) => darken2(theme.color[kind]),
  ],
  [R.propEq('disabled', true), R.path(['theme', 'color', 'grayBase'])],
  [R.T, ({ theme, kind }: InnerProps) => theme.color[kind]],
]);

export const hoverBackgroundColor = R.cond([
  [R.propEq('disabled', true), R.path(['theme', 'color', 'grayBase'])],
  [R.T, ({ theme, kind }: InnerProps) => darken1(theme.color[kind])],
]);

export const activeBackgroundColor = R.cond([
  [R.propEq('disabled', true), R.path(['theme', 'color', 'grayBase'])],
  [R.T, ({ theme, kind }: InnerProps) => darken2(theme.color[kind])],
]);

export const borderColor = R.cond([
  [
    R.propEq('disabled', true),
    ({ theme }: InnerProps) => darken3(theme.color.grayBase),
  ],
  [R.T, ({ theme, kind }: InnerProps) => darken3(theme.color[kind])],
]);
