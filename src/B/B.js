// @flow
import styled, { type ReactComponentFunctional } from 'styled-components';

type Props = {};

const B: ReactComponentFunctional<Props> = styled.b`
  font-weight: bold;
`;

B.displayName = 'B';

export default B;
