// @flow
import React from 'react';

type Props = {};

const IconAvatar = (props: Props) => (
  <svg
    fill="currentColor"
    width="1em"
    height="1em"
    viewBox="0 0 300 300"
    {...props}
  >
    <path fill="none" d="M0 0h300v300H0z" />
    <path d="M185.9 209.7v-9.5c8-8.7 14.2-20.1 18.1-33.2 5.8-4.8 9.3-12.1 9.3-19.8 0-5.3-1.6-10.3-4.6-14.7v-26.4c0-34.5-21.3-54.2-58.5-54.2-36.6 0-58.5 20.3-58.5 54.2v26.4c-3 4.3-4.6 9.4-4.6 14.6 0 7.7 3.4 15 9.2 19.8 3.9 13.1 10.1 24.6 18.1 33.3v9.5c-1.9 3.9-16.5 15.4-76.7 39.4 27.5 31.2 67.6 51 112.4 51 44.7 0 84.7-19.7 112.2-50.7-60.1-24-74.5-35.8-76.4-39.7z" />
  </svg>
);

export default IconAvatar;
