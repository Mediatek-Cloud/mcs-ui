// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import KeyHandler from './KeyHandler';

export type Props = {
  onClick: (e: any) => void | Promise<void>,
};

const EVENT_NAME = 'keyup';
const KEY_NAME = 'Escape';

const Esc = ({ onClick }: Props) => (
  <KeyHandler eventName={EVENT_NAME} keyName={KEY_NAME} onClick={onClick} />
);

Esc.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Esc;
