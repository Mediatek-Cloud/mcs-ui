// @flow
import * as React from 'react';
import styled from 'styled-components';
import Card, { type Props as CardProps } from '../Card/Card';

export type Props = CardProps;

const Menu: React.ComponentType<Props> = styled(Card)`
  display: inline-flex;
  flex-direction: column;
  padding: 5px 0;
`;

Menu.displayName = 'Menu';

export default Menu;
