// @flow
import * as React from 'react';

export type Props = {};

const Arrow = (props: Props) => (
  <svg
    width={18}
    height={22}
    viewBox="-5 0 18 22"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path id="b" d="M13 4l-8 6 8 6" />
      <filter
        x="-100%"
        y="-58.3%"
        width="300%"
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
    <g fill="currentColor" fillRule="evenodd">
      <use fill="#000" filter="url(#a)" xlinkHref="#b" />
      <use xlinkHref="#b" />
      <path d="M12.5 5l-6.667 5 6.667 5V5z" />
    </g>
  </svg>
);

export default Arrow;
