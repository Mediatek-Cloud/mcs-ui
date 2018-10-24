// @flow
import * as React from 'react';

export type ItemProps = {
  value: any,
  children: React.Node,
};

export type ItemValueMapper = ItemProps => string;
