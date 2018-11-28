// @flow
import * as React from 'react';
import styled from 'styled-components';
import Button, { type Props as ButtonProps } from '../Button/Button';

export const StyledButton: React.ComponentType<ButtonProps> = styled(Button)`
  display: block;
`;

type Props = {
  show: boolean,
};

export const ChildrenWrapper: React.ComponentType<Props> = styled.div`
  visibility: ${({ show }: Props) => (show ? 'visible' : 'hidden')};
`;

export default ChildrenWrapper;
