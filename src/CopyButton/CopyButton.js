// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import copyToClipboard from 'copy-to-clipboard';
import { IconLoading, IconDone } from '../Icons';
import Spin from '../Spin';
import { StyledButton, ChildrenWrapper } from './styled-components';

export type Status = 'loading' | 'default' | 'success';
export type Props = { children: React.Node, text: string };
export type State = { status: Status };

class CopyButton extends React.PureComponent<Props, State> {
  state = { status: 'default' };

  componentWillUnmount() {
    this.clearTimeout();
  }

  onClick = () => {
    const { text } = this.props;
    this.clearTimeout();
    this.setState({ status: 'loading' });

    copyToClipboard(text);

    this.timeoutID1 = setTimeout(() => {
      this.setState({ status: 'success' });
    }, 500);

    this.timeoutID2 = setTimeout(() => {
      this.setState({ status: 'default' });
    }, 1800);
  };

  clearTimeout = () => {
    if (this.timeoutID1) clearTimeout(this.timeoutID1);
    if (this.timeoutID2) clearTimeout(this.timeoutID2);
  };

  timeoutID1: TimeoutID;

  timeoutID2: TimeoutID;

  render() {
    const { children } = this.props;
    const { status } = this.state;
    const { onClick } = this;

    return (
      <StyledButton size="small" onClick={onClick}>
        <ChildrenWrapper show={status === 'default'}>
          {children}
        </ChildrenWrapper>

        {status === 'loading' && (
          <Spin>
            <IconLoading key="loading" />
          </Spin>
        )}
        {status === 'success' && <IconDone key="success" />}
      </StyledButton>
    );
  }
}

CopyButton.displayName = 'CopyButton';
CopyButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CopyButton;
