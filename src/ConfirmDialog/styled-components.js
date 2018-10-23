// @flow
import * as React from 'react';
import styled from 'styled-components';

export const Content: React.ComponentType<*> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > svg {
    margin-bottom: 20px;
    width: 50px;
    height: 45px;
  }
`;

export default Content;
