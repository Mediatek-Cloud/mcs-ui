// @flow
import React from 'react';
import styled from 'styled-components';
import { IconArrowLeft } from '../Icons';

const StyledKeyboardArrowLeft = styled(IconArrowLeft)`
  width: 20px;
  transform: scale(1.5);
  cursor: pointer;
`;

const PrevButton = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <StyledKeyboardArrowLeft />
    </div>
  );
};

export default PrevButton;
