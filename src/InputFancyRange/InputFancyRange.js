// @flow
import PropTypes from 'prop-types';
import * as R from 'ramda';
import styled, { type ReactComponentFunctional } from 'styled-components';

export type Props = {
  value: number,
  max: number,
  min: number,
};

const getThumbPercentage = R.memoizeWith(
  R.toString,
  ({ value, max, min }) => ((value - min) / (max - min)) * 100,
);

const InputFancyRange: ReactComponentFunctional<Props> = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background-color: transparent; /* fixed for mozilla */
    height: 8px;
    border-radius: 31px;
    /* TODO: dynamic */
    background-image: ${({ value, max, min }: Props) => `
      linear-gradient(
      to right,
      #00a1de 0%,
      #00cff1 ${getThumbPercentage({ value, max, min })}%,
      rgba(0, 207, 241, 0.1) ${getThumbPercentage({ value, max, min })}%,
      rgba(0, 207, 241, 0.1) 100%
    )`};
  }

  &::-moz-range-track {
    -moz-appearance: none;
    background-color: transparent; /* fixed for mozilla */
    height: 8px;
    border-radius: 31px;
    /* TODO: dynamic */
    background-image: ${({ value, max, min }: Props) => `
      linear-gradient(
      to right,
      #00a1de 0%,
      #00cff1 ${getThumbPercentage({ value, max, min })}%,
      rgba(0, 207, 241, 0.1) ${getThumbPercentage({ value, max, min })}%,
      rgba(0, 207, 241, 0.1) 100%
    )`};
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-ms-track {
    -webkit-appearance: none;
    background-color: transparent; /* fixed for mozilla */
    height: 8px;
    border-radius: 31px;
    /* TODO: dynamic */
    background-image: ${({ value, max, min }: Props) => `
      linear-gradient(
      to right,
      #00a1de 0%,
      #00cff1 ${getThumbPercentage({ value, max, min })}%,
      rgba(0, 207, 241, 0.1) ${getThumbPercentage({ value, max, min })}%,
      rgba(0, 207, 241, 0.1) 100%
    )`};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none; /* fix for firefox */
    margin-top: -7px; /* fix for chrome */
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    background-image: radial-gradient(
      50% 50%,
      #ffffff 50%,
      #ffffff 73%,
      #f8f8f8 81%,
      #ebebeb 90%,
      #dddddd 95%
    );
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 2px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 1px 0 #00a1de,
      inset 0 0 0 2px #79d5f8;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    border: none; /* fix for firefox */
    margin-top: -7px; /* fix for chrome */
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    background-image: radial-gradient(
      50% 50%,
      #ffffff 50%,
      #ffffff 73%,
      #f8f8f8 81%,
      #ebebeb 90%,
      #dddddd 95%
    );
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 2px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 1px 0 #00a1de,
      inset 0 0 0 2px #79d5f8;
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    border: none; /* fix for firefox */
    margin-top: -7px; /* fix for chrome */
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    background-image: radial-gradient(
      50% 50%,
      #ffffff 50%,
      #ffffff 73%,
      #f8f8f8 81%,
      #ebebeb 90%,
      #dddddd 95%
    );
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 2px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 1px 0 #00a1de,
      inset 0 0 0 2px #79d5f8;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.2);
  }

  &::-ms-thumb:hover {
    transform: scale(1.2);
  }
`;
InputFancyRange.displayName = 'InputFancyRange';
InputFancyRange.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};
InputFancyRange.defaultProps = {
  type: 'range',
};
export default InputFancyRange;
