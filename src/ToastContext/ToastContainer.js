// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import MLToast from '../Toast';
import { Fixed, Container } from './styled-components';
import { type Toast } from '../utils/type.flow';

export type Props = {
  toasts: Array<Toast>,
};

const ToastContainer = ({ toasts }: Props) => {
  const trans = useTransition(toasts, toast => toast.id, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,40px,0)' },
  });

  return (
    <Fixed>
      <Container>
        {trans.map(({ item: { kind, children }, key, props }) => (
          <animated.div key={key} style={props}>
            <MLToast kind={kind}>{children}</MLToast>
          </animated.div>
        ))}
      </Container>
    </Fixed>
  );
};
ToastContainer.displayName = 'ToastContainer';
ToastContainer.propTypes = {
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
      kind: PropTypes.string,
    }),
  ).isRequired,
};

export default ToastContainer;
