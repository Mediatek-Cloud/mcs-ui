// @flow
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  > * + * {
    margin-left: 5px;
  }
`;

export default Container;
