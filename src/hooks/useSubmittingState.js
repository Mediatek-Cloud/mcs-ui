// @flow
import * as React from 'react';
import { type SetSubmitting } from '../utils/type.flow';

/**
 * Why? Make custom field component as same as Formik api.
 */

export type UseSubmittingState = () => {
  isSubmitting: boolean,
  setSubmitting: SetSubmitting,
};

const useSubmittingState: UseSubmittingState = () => {
  const [isSubmitting, setSubmitting] = React.useState<boolean>(false);

  return { isSubmitting, setSubmitting };
};

export default useSubmittingState;
