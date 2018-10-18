// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-overlay-pack';
import P from '../P';

export type Props = { children: React.Node };

const ErrorMessage = ({ children }: Props) => (
  <Transition
    component={false}
    style={{
      transform: 'translateX(6px)',
    }}
    animation={{
      translateX: 0,
      ease: 'easeOutQuart',
    }}
  >
    <P color="error">{children}</P>
  </Transition>
);
ErrorMessage.propTypes = {
  children: PropTypes.node,
};

export default ErrorMessage;
