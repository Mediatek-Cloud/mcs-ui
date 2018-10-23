// @flow
import * as React from 'react';
import ReactTopBarProgress from 'react-topbar-progress-indicator';
import theme from '../utils/theme';
import { type Theme } from '../utils/type.flow';

ReactTopBarProgress.config({
  barThickness: 4,
  barColors: {
    '0': (theme: Theme).color.primary,
    '1.0': (theme: Theme).color.primary,
  },
  shadowBlur: 5,
  shadowColor: 'rgba(0, 0, 0, 0.2)',
});

const TopBarProgress: React.ComponentType<*> = ReactTopBarProgress;

export default TopBarProgress;
