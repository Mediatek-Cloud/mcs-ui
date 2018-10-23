// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

export type Props = {
  width?: number,
  height?: number,
  value: number,
  max: number,
};

const Gauge = ({ width, height, value, max }: Props) => (
  <svg width={width} height={height} viewBox="0 0 188 162">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
        <stop stopColor="#00CFF1" offset="0%" />
        <stop stopColor="#00A1DE" offset="100%" />
      </linearGradient>
      <linearGradient x1="0%" y1="50%" x2="0%" y2="0%" id="b">
        <stop stopColor="#00A1DE" offset="0%" />
        <stop stopColor="#00CFF1" offset="100%" />
      </linearGradient>
    </defs>

    <g strokeWidth={8} fill="none" fillRule="evenodd" strokeLinecap="round">
      <path
        d="M26.3603897,153.63961 C10.0735931,137.352814 0,114.852814 0,90 C0,40.2943725 40.2943725,0 90,0 C139.705627,0 180,40.2943725 180,90 C180,114.852814 169.926407,137.352814 153.63961,153.63961"
        stroke="url(#a)"
        opacity={0.1}
        transform="translate(4 4)"
      />
      {value > 0 && (
        <path
          d="M26.3603897,153.63961 C10.0735931,137.352814 0,114.852814 0,90 C0,40.2943725 40.2943725,0 90,0 C139.705627,0 180,40.2943725 180,90 C180,114.852814 169.926407,137.352814 153.63961,153.63961"
          stroke="url(#b)"
          transform="translate(4 4)"
          style={{
            strokeDasharray: 424,
            strokeDashoffset: (1 - value / max) * 423, // 423 ~ 0
          }}
        />
      )}
    </g>
  </svg>
);
Gauge.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Gauge.defaultProps = {
  width: 208,
  height: 180,
};

export default Gauge;
