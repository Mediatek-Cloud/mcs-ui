// @flow
import React from 'react';
import styled from 'styled-components';
import { IconArrowLeft } from '../Icons';

const StyledKeyboardArrowRight = styled(IconArrowLeft)`
  width: 20px;
  transform: scaleX(-1) scale(1.5);
  cursor: pointer;
`;

const NextButton = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <StyledKeyboardArrowRight />
    </div>
  );
};

export default NextButton;
