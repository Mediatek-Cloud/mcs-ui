// @flow
import PropTypes from 'prop-types';
import styled, { type ReactComponentFunctional } from 'styled-components';
import P from '../P';
import { type ThemeProps } from '../utils/type.flow';

export const INPUT_MIN_WIDTH = 200;

export type Props = { width?: number };
type InnerProps = { width: number } & ThemeProps;

const Fieldset: ReactComponentFunctional<Props> = styled.div`
  /* Note: there is a problem with native fieldset using with flex. */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  /* Note: Label */
  > *:nth-child(1) {
    display: flex;
    align-items: flex-start;
    padding-top: 0.5em;
    margin-right: 10px;
    padding-bottom: 5px;
    flex-basis: 10em;
    flex-shrink: 0;
    flex-grow: 1; /* Note: for flex-wrap. ref: https://goo.gl/7fdFLp */
  }

  /* Note: Input wrapper */
  > *:nth-child(2) {
    flex-grow: 9999; /* Note: for flex-wrap. ref: https://goo.gl/7fdFLp */
    min-width: ${({ width }: InnerProps) => width}px; /* Note: for flex-wrap */

    /* Note: Error message */
    ${P} {
      margin-top: 5px;
    }
  }
`;
Fieldset.displayName = 'Fieldset';
Fieldset.propTypes = {
  width: PropTypes.number,
};
Fieldset.defaultProps = {
  width: INPUT_MIN_WIDTH,
};

export default Fieldset;
