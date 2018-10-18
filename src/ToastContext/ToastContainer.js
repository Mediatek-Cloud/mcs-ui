// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';
import MLToast from '../Toast';
import { Fixed, Container } from './styled-components';
import { type Toast } from '../utils/type.flow';

export type Props = {
  toasts: Array<Toast>,
};

const ToastContainer = ({ toasts }: Props) => (
  <Fixed>
    <Container>
      <Transition
        keys={toasts.map(({ id }: Toast) => id)}
        from={{ opacity: 0, height: 0 }}
        enter={{ opacity: 1, height: 'auto' }}
        leave={{ opacity: 0, height: 0 }}
      >
        {toasts.map(({ kind, id, children }: Toast) => (styles: Object) => (
          <div key={id} style={styles}>
            <MLToast kind={kind}>{children}</MLToast>
          </div>
        ))}
      </Transition>
    </Container>
  </Fixed>
);

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
