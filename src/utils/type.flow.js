// @flow
import * as React from 'react';

// HOC
export type HOC<Base, InjectedProps> = (
  Component: React.ComponentType<Base>,
) => React.ComponentType<$Diff<Base, InjectedProps>>;

// Formik api
export type SetSubmitting = (isSubmitting: boolean) => void;

// ReactRef
export type ReactRef<T> = { current: null | T };

// Toast
export type ToastKind = 'error' | 'success';
export type Toast = {
  id: string,
  kind: ToastKind,
  children: React.Node,
};
export type AddToast = ({ kind: ToastKind, children: React.Node }) => void;

// Theme
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
    [Color]: string,
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
