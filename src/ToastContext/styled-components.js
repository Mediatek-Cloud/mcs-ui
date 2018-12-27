// @flow
import * as React from 'react';
import styled from 'styled-components';

export const Fixed: React.ComponentType<*> = styled.div`
  position: fixed;
  bottom: 40px;
  width: 100%;
  z-index: 1; /* Note: fix for dialog portal */
`;

export const Container: React.ComponentType<*> = styled.div`
  padding: 0 20px;

  > * {
    max-width: 446px;
    margin: 8px auto;
  }
`;
