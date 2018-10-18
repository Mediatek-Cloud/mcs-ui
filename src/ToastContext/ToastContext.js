// @flow
import * as React from 'react';
import debug from 'debug';
import { type AddToast } from '../utils/type.flow';

export type Context = { addToast: AddToast };

const log = debug('mcs-ui:ToastsContext');

const ToastsContext = React.createContext(
  ({
    addToast: ({ kind, children }) => log(JSON.stringify({ kind, children })),
  }: Context),
);

export default ToastsContext;
