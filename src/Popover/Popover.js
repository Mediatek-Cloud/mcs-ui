// @flow
import * as React from 'react';
import { Overlay } from 'react-overlay-pack';
import Arrow from './Arrow';
import { RIGHT_CENTER } from './position.config';
import { StyledCard } from './styled-components';

export type Props = {
  children: React.Node,
  content: React.Node,
  position: {
    card: Object,
    arrow: Object,
  },
  // Note: innerRef for the problem of outside click in dialog
  innerRef?: React.ElementRef<any>,
};
type State = { isOpen: boolean };

class Popover extends React.PureComponent<Props, State> {
  static defaultProps = {
    position: RIGHT_CENTER,
  };

  state = { isOpen: false };

  target = React.createRef<React.ElementRef<'div'>>();

  onClick = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  onHide = () => this.setState(() => ({ isOpen: false }));

  render() {
    const { children, content, innerRef, position } = this.props;
    const { isOpen } = this.state;
    const { onClick, onHide, target } = this;

    return (
      <React.Fragment>
        <div
          ref={target}
          onClick={onClick}
          onKeyPress={onClick}
          role="button"
          tabIndex="0"
          style={{ display: 'inline-block' }}
        >
          {children}
        </div>

        {/* Note: Card */}
        {isOpen && (
          <React.Fragment>
            <Overlay
              show={isOpen}
              resize
              target={target}
              onOutsideClick={onHide}
              {...position.card}
            >
              <StyledCard key="card" ref={innerRef}>
                {content}
              </StyledCard>
            </Overlay>

            {/* Note: Arrow */}
            <Overlay show={isOpen} resize target={target} {...position.arrow}>
              <Arrow key="arrow" />
            </Overlay>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Popover;
