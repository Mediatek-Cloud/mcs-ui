// @flow
import * as React from 'react';
import styled from 'styled-components';

export type Props = {};

const B: React.ComponentType<Props> = styled.b`
  font-weight: bold;
`;

B.displayName = 'B';

export default B;
