// @flow
import { type Theme } from '../utils/type.flow';
import theme, { fontFamily } from '../utils/theme';

const {
  color: {
    grayLight,
    grayBase,
    grayDark,
    warning,
    primary,
    success,
    black,
    white,
  },
}: Theme = theme;

const axisCommon = {
  axisLine: {
    lineStyle: {
      color: grayBase,
    },
  },
  axisTick: {
    show: false,
  },
  axisLabel: {
    textStyle: {
      fontSize: 12,
      color: grayDark,
    },
    interval: 0,
  },
  splitLine: {
    show: false,
  },
  splitArea: {
    show: false,
  },
  nameGap: 15,
  nameTextStyle: {
    color: grayDark,
  },
};

export default {
  // Note: Global font style
  textStyle: {
    color: black,
    fontSize: 14,
    fontFamily,
  },
  // Note: SVG container padding
  grid: {
    left: '8%',
    right: '3%',
  },
  color: [warning, primary, success],
  legend: {
    textStyle: {
      padding: [2, 0, 0, 0],
    },
    itemHeight: 14,
    itemWidth: 14,
    itemGap: 10,
    inactiveColor: grayBase,
    x: 'right',
    padding: [0, 15, 0, 0],
  },
  dataZoom: {
    showDataShadow: true,
    height: 20,
    handleSize: '100%',
    backgroundColor: '#F2F2F2',
    dataBackground: {
      lineStyle: {
        color: grayDark,
        opacity: 0.2,
      },
      areaStyle: {
        color: grayBase,
        opacity: 0.2,
      },
    },
    fillerColor: 'rgba(53, 54, 48, 0.05)',
    handleColor: 'rgba(53, 54, 48, 0.2)',
    borderColor: grayBase,
    textStyle: {
      color: grayDark,
    },
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: grayLight,
    borderWidth: 1,
    borderColor: grayBase,
    padding: 10,
    textStyle: {
      color: black,
    },
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: grayBase,
      },
      label: {
        backgroundColor: grayDark,
        color: white,
        margin: 5,
      },
    },
    extraCssText:
      'box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2); border-radius: 3px;',
  },
  timeAxis: axisCommon,
  logAxis: axisCommon,
  valueAxis: axisCommon,
  categoryAxis: axisCommon,
};
