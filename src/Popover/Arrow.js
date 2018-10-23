// @flow
import * as React from 'react';

export type Props = {};

const Arrow = (props: Props) => (
  <svg
    width={19}
    height={22}
    viewBox="-6 0 19 22"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path d="M8 0h1v12H8L0 6l8-6z" id="b" />
      <filter
        x="-88.9%"
        y="-58.3%"
        width="277.8%"
        height="233.3%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={2.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g transform="translate(5 4)" fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#a)" xlinkHref="#b" />
      <use fill="#FAFAFA" xlinkHref="#b" />
      <path stroke="#D1D2D3" d="M8.167.5L.833 6l7.334 5.5H8.5V.5h-.333z" />
    </g>
  </svg>
);

export default Arrow;
