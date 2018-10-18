// @flow
import * as React from 'react';
import ToastContext from './ToastContext';
import { type HOC, type AddToast } from '../utils/type.flow';

export type InjectedProps = { addToast: AddToast };

const withAddToast: HOC<*, InjectedProps> = BaseComponent => (
  props: Object,
) => (
  <ToastContext.Consumer>
    {({ addToast }) => <BaseComponent {...props} addToast={addToast} />}
  </ToastContext.Consumer>
);

export default withAddToast;
