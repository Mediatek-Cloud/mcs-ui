// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isString from '../utils/isString';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {
  children?: string,
};

export const StyledHr = styled.hr`
  flex: 1;
  border: 0;
  border-top: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
`;

export const Content = styled.div`
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.small};
  margin: 0 8px;
  color: ${({ theme }: ThemeProps) => theme.color.grayDark};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Hr = ({ children, ...otherProps }: Props) => {
  if (!isString(children)) return <StyledHr {...otherProps} />;

  return (
    <Wrapper {...otherProps}>
      <StyledHr />
      <Content>{children}</Content>
      <StyledHr />
    </Wrapper>
  );
};

Hr.displayName = 'Hr';
Hr.propTypes = {
  children: PropTypes.string,
};

export default Hr;
