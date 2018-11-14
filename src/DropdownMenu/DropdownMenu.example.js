// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconFold } from '../Icons';
import DropdownMenu from './DropdownMenu';
import MenuItem from '../MenuItem';
import Rotate from '../Rotate';
import { StyledButton } from './styled-components';
import { BOTTOM_RIGHT, BOTTOM_LEFT } from './position.config';

const Wrapper: React.ComponentType<*> = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 300px;

  > * {
    margin-bottom: 30px;
  }
`;

class DropdownMenuWithRef extends React.PureComponent<*> {
  menu = React.createRef();

  onClick = () => {
    action('WithRef')(this.menu);
  };

  render() {
    const { menu, onClick } = this;
    return (
      <DropdownMenu
        innerRef={menu}
        itemRenderer={() => (
          <React.Fragment>
            <MenuItem onClick={onClick}>Edit</MenuItem>
            <MenuItem onClick={onClick}>Delete</MenuItem>
          </React.Fragment>
        )}
      >
        <div>Click me</div>
      </DropdownMenu>
    );
  }
}

storiesOf('DropdownMenu', module)
  .add(
    'default',
    () => (
      <DropdownMenu
        itemRenderer={() => (
          <React.Fragment>
            <MenuItem onClick={action('Edit close')}>Edit</MenuItem>
            <MenuItem onClick={action('Delete close')}>Delete</MenuItem>
          </React.Fragment>
        )}
      >
        <div>Click me</div>
      </DropdownMenu>
    ),
    {
      info: {
        text: 'BOTTOM_RIGHT',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With position',
    () => (
      <Wrapper>
        <DropdownMenu
          itemRenderer={() => (
            <React.Fragment>
              <MenuItem onClick={action('Edit close')}>Edit</MenuItem>
              <MenuItem onClick={action('Delete close')}>Delete</MenuItem>
            </React.Fragment>
          )}
          position={BOTTOM_RIGHT}
        >
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_RIGHT</div>
        </DropdownMenu>

        <DropdownMenu
          itemRenderer={() => (
            <React.Fragment>
              <MenuItem onClick={action('Edit close')}>Edit</MenuItem>
              <MenuItem onClick={action('Delete close')}>Delete</MenuItem>
            </React.Fragment>
          )}
          position={BOTTOM_LEFT}
        >
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_LEFT</div>
        </DropdownMenu>
      </Wrapper>
    ),
    {
      info: {
        text: `
~~~js
import {
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
} from 'mcs-ui/lib/DropdownMenu/position.config';
~~~
`,
        inline: true,
        source: false,
      },
    },
  )
  .add(
    '[itemRenderer] With close',
    () => (
      <DropdownMenu
        position={BOTTOM_LEFT}
        itemRenderer={({ close }) => (
          <React.Fragment>
            <MenuItem onClick={close}>Edit</MenuItem>
            <MenuItem onClick={close}>Delete</MenuItem>
          </React.Fragment>
        )}
      >
        <div>Click me</div>
      </DropdownMenu>
    ),
    {
      info: {
        text: `
~~~js
<DropdownMenu
  itemRenderer={({ close }) => (
    <React.Fragment>
      <MenuItem onClick={close}>Edit</MenuItem>
      <MenuItem onClick={close}>Delete</MenuItem>
    </React.Fragment>
  )}
>
  <div>Click me</div>
</DropdownMenu>
~~~
      `,
        inline: true,
        source: false,
      },
    },
  )
  .add(
    '[children] With isOpen',
    () => (
      <DropdownMenu
        itemRenderer={({ close }) => (
          <React.Fragment>
            <MenuItem onClick={close}>Scene</MenuItem>
            <MenuItem onClick={close} active>
              User privileges
            </MenuItem>
          </React.Fragment>
        )}
      >
        {({ isOpen }) => (
          <StyledButton active={isOpen} style={{ marginLeft: 100 }}>
            Edit
            <Rotate active={isOpen}>
              <IconFold />
            </Rotate>
          </StyledButton>
        )}
      </DropdownMenu>
    ),
    {
      info: {
        text: `
~~~js
<DropdownMenu
  itemRenderer={() => ()}
>
  {({ isOpen }) => (
    <StyledButton active={isOpen}>
      Edit
    </StyledButton>
  )}
</DropdownMenu>
~~~
      `,
        inline: true,
        source: false,
      },
    },
  )
  .add(
    '[children] With open',
    () => (
      <DropdownMenu
        itemRenderer={({ close }) => (
          <React.Fragment>
            <MenuItem onClick={close}>Scene</MenuItem>
            <MenuItem onClick={close} active>
              User privileges
            </MenuItem>
          </React.Fragment>
        )}
      >
        {({ isOpen, open }) => (
          <StyledButton
            active={isOpen}
            style={{ marginLeft: 100 }}
            onMouseEnter={open}
          >
            Edit <IconFold />
          </StyledButton>
        )}
      </DropdownMenu>
    ),
    {
      info: {
        text: `
~~~js
<DropdownMenu
  itemRenderer={() => ()}
>
  {({ open }) => (
    <StyledButton
      onMouseOver={open}
    >
      Edit
    </StyledButton>
  )}
</DropdownMenu>
~~~
      `,
        inline: true,
        source: false,
      },
    },
  )
  .add('With innerRef', () => <DropdownMenuWithRef />, {
    info: {
      text: 'innerRef',
      inline: true,
      source: false,
    },
  });
