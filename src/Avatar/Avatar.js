// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { IconAvatar } from '../Icons';
import Wrapper from './styled-components';

type Props = {
  src?: string,
  size?: number,
};

const Avatar = ({ src, size }: Props) => (
  <Wrapper>
    {src ? (
      <img alt="" src={src} width={size} height={size} />
    ) : (
      <IconAvatar width={size} height={size} />
    )}
  </Wrapper>
);

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
};
Avatar.defaultProps = {
  size: 30,
};

export default Avatar;
