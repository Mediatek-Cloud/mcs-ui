// @flow
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { type ComponentType } from '../utils/type.flow';

type Props = { height: number };

const SpaceTop: ComponentType<Props> = styled.div`
  margin-top: ${({ height }: Props) => height}px;
`;

SpaceTop.displayName = 'SpaceTop';
SpaceTop.propTypes = {
  height: PropTypes.number.isRequired,
};

export default SpaceTop;
