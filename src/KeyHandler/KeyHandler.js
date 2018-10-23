/* global window */
// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

export type Props = {
  onClick: (e: any) => void | Promise<void>,
  eventName: string,
  keyName: string,
};

class KeyHandler extends React.PureComponent<Props> {
  static propTypes = {
    eventName: PropTypes.string.isRequired,
    keyName: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { handleKey } = this;
    const { eventName } = this.props;
    window.document.addEventListener(eventName, handleKey);
  }

  componentWillUnmount() {
    const { handleKey } = this;
    const { eventName } = this.props;
    window.document.removeEventListener(eventName, handleKey);
  }

  handleKey = ({ key }: KeyboardEvent) => {
    const { onClick, keyName } = this.props;
    if (key === keyName) {
      onClick();
    }
  };

  render() {
    return null;
  }
}

export default KeyHandler;
