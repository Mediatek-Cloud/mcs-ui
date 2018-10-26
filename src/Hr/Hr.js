// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledHr, Content, Wrapper } from './styled-components';
import isString from '../utils/isString';

export type Props = {
  children?: string,
};

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
