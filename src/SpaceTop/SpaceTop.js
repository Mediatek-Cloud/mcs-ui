// @flow
import styled, { type ReactComponentFunctional } from 'styled-components';
import PropTypes from 'prop-types';

type Props = { height: number };

const SpaceTop: ReactComponentFunctional<Props> = styled.div`
  margin-top: ${({ height }: Props) => height}px;
`;

SpaceTop.displayName = 'SpaceTop';
SpaceTop.propTypes = {
  height: PropTypes.number.isRequired,
};

export default SpaceTop;
