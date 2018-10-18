// @flow
import * as React from 'react';
import styled from 'styled-components';

export const Fixed: React.ComponentType<*> = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  z-index: 1; /* Note: fix for dialog portal */
`;

export const Container: React.ComponentType<*> = styled.div`
  padding: 0 100px;

  > * {
    margin-top: 8px;
  }
`;
