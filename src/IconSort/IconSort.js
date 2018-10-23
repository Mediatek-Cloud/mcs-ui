// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledSVG } from './styled-components';

export type Props = {
  active: boolean,
  isAsc: boolean,
};

const IconSort = ({ active, isAsc, ...otherProps }: Props) => (
  <StyledSVG
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    active={active}
    isAsc={isAsc}
    {...otherProps}
  >
    <path
      id="up"
      fill="currentColor"
      d="M12,5.8L15.2,9l1.4-1.4L12,3L7.4,7.6L8.8,9L12,5.8z"
    />
    <path
      id="down"
      fill="currentColor"
      d="M12,18.2L8.8,15l-1.4,1.4L12,21l4.6-4.6L15.2,15"
    />
  </StyledSVG>
);
IconSort.propTypes = {
  active: PropTypes.bool.isRequired,
  isAsc: PropTypes.bool.isRequired,
};

export default IconSort;
