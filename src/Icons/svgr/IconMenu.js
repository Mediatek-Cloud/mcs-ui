// @flow
import * as React from 'react';

type Props = {};

const IconMenu = (props: Props) => (
  <svg
    fill="currentColor"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export default IconMenu;
