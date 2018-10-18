// @flow
export type Color =
  | 'black'
  | 'grayDark'
  | 'grayBase'
  | 'grayLight'
  | 'white'
  | 'default'
  | 'primary'
  | 'success'
  | 'error'
  | 'warning';
export type Kind = 'default' | 'primary' | 'success' | 'error' | 'warning';
export type Size = 'small' | 'normal';
export type Theme = {
  color: {
    black: string,
    grayDark: string,
    grayBase: string,
    grayLight: string,
    white: string,
    default: string,
    primary: string,
    success: string,
    error: string,
    warning: string,
  },
  base: {
    bodyBackgroundColor: string,
    bodyColor: string,
    fontSize: string,
    lineHeight: number,
  },
  fontSize: {
    small: string,
    p: string,
    h6: string,
    h5: string,
    h4: string,
    h3: string,
    h2: string,
    h1: string,
  },
  height: {
    normal: string,
    small: string,
    header: string,
  },
  mobile: {
    maxWidth: string,
    headerHeight: string,
  },
};
export type ThemeProps = { theme: Theme };
