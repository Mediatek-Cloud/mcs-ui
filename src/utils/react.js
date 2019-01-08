/* eslint prefer-destructuring: 0 */
// @flow
import * as React from 'react';

/**
 * Type from:
 * https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js
 * https://github.com/streamich/react-use/commit/cdc5ec596d216eb63e24b500a1d7a86a0823f214
 */

export * from 'react';

export type UseState = <T>(
  initialState: T | (() => T),
) => [T, (newState: T) => void];
export const useState: UseState = (React: any).useState;

export type UseReducer = <S, A>(
  reducer: (S, A) => S,
  initialState: S,
  initialAction: A | void | null,
) => [S, (A) => void];
export const useReducer: UseReducer = (React: any).useReducer;

export type UseEffect = (
  didUpdate: () => (() => void) | void,
  params?: any[],
) => void;
export const useEffect: UseEffect = (React: any).useEffect;

export interface ReactRef<T> {
  current: T;
}
export type UseRef = <T>(initialValue: T) => ReactRef<T>;
export const useRef: UseRef = (React: any).useRef;

export type UseCallback = <T>(callback: T, args: any[]) => T;
export const useCallback: UseCallback = (React: any).useCallback;

export type UseMemo = <T>(fn: Function, args: any[]) => T;
export const useMemo: UseMemo = (React: any).useMemo;
