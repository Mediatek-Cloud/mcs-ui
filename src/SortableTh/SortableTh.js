// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import IconSort from '../IconSort';
import { StyledTh } from './styled-components';

export type Props = { active: boolean, isAsc: boolean, children?: React.Node };

const SortableTh = ({ active, isAsc, children, ...otherProps }: Props) => (
  <StyledTh active={active} isAsc={isAsc} {...otherProps}>
    <div>
      {children}
      <IconSort width={14} height={14} active={active} isAsc={isAsc} />
    </div>
  </StyledTh>
);
SortableTh.propTypes = {
  active: PropTypes.bool.isRequired,
  isAsc: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default SortableTh;
