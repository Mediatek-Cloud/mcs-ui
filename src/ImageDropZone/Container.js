// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import P from '../P';
import { type ThemeProps } from '../utils/type.flow';

type Props = {
  src?: string,
  canDrop: boolean,
  height: number,
};

const Container: React.ComponentType<Props> = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props: Props) => props.height}px;
  padding: 12px;
  text-align: center;
  box-sizing: border-box;

  background-color: ${({ theme }: ThemeProps) => theme.color.grayLight};
  border: 1px
    ${(props: Props) => (props.src && !props.canDrop ? 'solid' : 'dashed')}
    ${(props: Props & ThemeProps) =>
      props.canDrop ? props.theme.color.primary : props.theme.color.grayBase};
  border-radius: 3px;
  transition: all cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;

  ${(props: Props) =>
    props.src &&
    css`
      background-image: url("${props.src}");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `};

  > ${P} {
    margin-top: 5px;
  }
`;

Container.displayName = 'Container';
Container.propTypes = {
  canDrop: PropTypes.bool.isRequired,
  src: PropTypes.string,
};

export default Container;
