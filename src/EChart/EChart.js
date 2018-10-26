// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts/lib/echarts';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/brush';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/legend';
import echartTheme from './echartTheme';

echarts.registerTheme('mcs', echartTheme);

export type Props = {
  option: Object,
};

const EChart = ({ option, ...otherProps }: Props) => (
  <ReactEchartsCore
    echarts={echarts}
    option={option}
    theme="mcs"
    notMerge // Note: disable mutate
    {...otherProps}
  />
);
EChart.propTypes = {
  option: PropTypes.shape({
    legend: PropTypes.object,
    tooltip: PropTypes.object,
    xAxis: PropTypes.object,
    yAxis: PropTypes.object,
    dataZoom: PropTypes.object,
    series: PropTypes.object,
    label: PropTypes.object,
  }).isRequired,
};
export default EChart;
