// @flow
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import * as React from 'react';
import { Overlay } from 'react-overlay-pack';
import { StyledCard, StyledOverlay } from './styled-components';
import Arrow from './Arrow';
import { TOP_CENTER } from './position.config';

class Tooltip extends React.PureComponent<
  {
    children: React.Node,
    content: React.Node,
    position: {
      card: Object,
      arrow: Object,
    },
    // Note: innerRef for the problem of outside click in dialog
    innerRef?: (ref: ?React.ElementRef<typeof StyledCard>) => void,
  },
  { isOpen: boolean },
> {
  static defaultProps = {
    position: TOP_CENTER,
  };

  state = { isOpen: false };

  target = React.createRef<React.ElementRef<'div'>>();

  onMouseOver = () => this.setState(() => ({ isOpen: true }));

  onHide = () => this.setState(() => ({ isOpen: false }));

  render() {
    const { children, content, innerRef, position } = this.props;
    const { isOpen } = this.state;
    const { onMouseOver, onHide, target } = this;

    return (
      <React.Fragment>
        <div
          ref={target}
          onMouseOver={onMouseOver}
          onMouseLeave={onHide}
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
              style={{ pointerEvents: 'none' }}
              {...position.card}
            >
              <StyledCard key="card" ref={innerRef} onMouseOver={onMouseOver}>
                {content}
              </StyledCard>
            </Overlay>

            {/* Note: Arrow */}
            <StyledOverlay
              show={isOpen}
              resize
              target={target}
              style={{ pointerEvents: 'none' }}
              {...position.arrow}
            >
              <Arrow key="arrow" />
            </StyledOverlay>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Tooltip;
