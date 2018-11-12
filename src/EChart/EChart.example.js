// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import EChart from '.';

const data = {
  x: [1, 2, 3, 4],
  y1: [10, 20, 30, 40],
  y2: [1, 2, 3, 4],
  y3: [11, 21, 31, 41],
  label: ['標籤一', '標籤二', '標籤三', '標籤四'],
};

const option = {
  legend: { data: ['y1', 'y2', 'y3'] },
  tooltip: { show: true },
  xAxis: [{ type: 'category', data: data.x }],
  yAxis: [{ name: 'Byte', type: 'value' }],
  dataZoom: [{ type: 'inside' }, { type: 'slider' }],
  series: [
    { name: 'y1', type: 'bar', stack: 'STACK', data: data.y1 },
    { name: 'y2', type: 'bar', stack: 'STACK', data: data.y2 },
    { name: 'y3', type: 'bar', stack: 'STACK', data: data.y3 },
  ],
  label: {
    formatter: ({
      seriesData: [seriesData],
    }: {
      value: string | number,
      seriesData: Array<{ dataIndex: number }>,
    }) => (seriesData ? data.label[seriesData.dataIndex] : ''),
  },
};

storiesOf('EChart', module).add(
  'API',
  () => <EChart option={option} style={{ height: 300 }} />,
  {
    info: {
      text: 'MCS Theme',
      inline: true,
      source: false,
    },
  },
);
