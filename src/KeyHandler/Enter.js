// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import KeyHandler from './KeyHandler';

export type Props = {
  onClick: (e: any) => void | Promise<void>,
};

const EVENT_NAME = 'keypress';
const KEY_NAME = 'Enter';

const Enter = ({ onClick }: Props) => (
  <KeyHandler eventName={EVENT_NAME} keyName={KEY_NAME} onClick={onClick} />
);

Enter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Enter;
