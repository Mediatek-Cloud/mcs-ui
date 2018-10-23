// @flow
import { withState } from 'recompose';
import { type HOC, type SetSubmitting } from '../utils/type.flow';

/**
 * Why? Make custom field component as same as Formik api.
 */

export type InjectedProps = {
  isSubmitting: boolean,
  setSubmitting: SetSubmitting,
};

const withSubmittingState: HOC<*, InjectedProps> = withState(
  'isSubmitting',
  'setSubmitting',
  false,
);

export default withSubmittingState;
