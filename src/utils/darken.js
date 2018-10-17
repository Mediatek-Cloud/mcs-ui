// @flow
import { color } from 'd3-color';

export const darken = (k: number) => (specifier: string): string =>
  color(specifier)
    .darker(k)
    .toString();
export const darken1 = darken(0.18);
export const darken2 = darken(0.32);
export const darken3 = darken(0.6);
