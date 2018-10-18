// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { IconDelete } from '../Icons';
import MenuItem from '../MenuItem';
import Menu, { type Props as MenuProps } from './Menu';
import Heading from '../Heading';
import P from '../P';
import A from '../A';
import B from '../B';

const StyledMenu: React.ComponentType<MenuProps> = styled(Menu)`
  width: 300px;
`;

storiesOf('Menu', module)
  .add('API for Menu', () => <Menu>Children</Menu>, {
    info: {
      text: '',
      inline: true,
      source: false,
    },
  })
  .add(
    'Min width',
    () => (
      <Menu>
        <MenuItem onClick={action('index: 1')}>複製</MenuItem>
        <MenuItem onClick={action('index: 1')}>刪除</MenuItem>
      </Menu>
    ),
    {
      info: {
        text: 'min-width: 80px',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'Fixed width',
    () => (
      <StyledMenu>
        <MenuItem onClick={action('index: 1')}>MenuItem 1</MenuItem>
        <MenuItem onClick={action('index: 2')}>MenuItem Content 2</MenuItem>
        <MenuItem onClick={action('index: 3')}>
          <Heading>MenuItem Heading 1</Heading>
        </MenuItem>
        <MenuItem onClick={action('index: 4')}>
          <P>MenuItem P</P>
        </MenuItem>
        <MenuItem onClick={action('index: 5')}>
          <P color="error">MenuItem P error</P>
        </MenuItem>
        <MenuItem onClick={action('index: 6')}>
          <A>MenuItem A</A>
        </MenuItem>
        <MenuItem onClick={action('index: 7')}>
          <B>MenuItem B</B>
        </MenuItem>
        <MenuItem onClick={action('index: 8')}>
          <IconDelete />
        </MenuItem>
        <MenuItem as="a">{`<a>`} Tag</MenuItem>
      </StyledMenu>
    ),
    {
      info: {
        text: 'With fixed width',
        inline: true,
        source: false,
      },
    },
  );
