// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import emptyFunction from 'react-overlay-pack/lib/utils/emptyFunction';
import { type Color } from '../utils/type.flow';
import { Item } from './styled-components';

export type Props = {
  value: string,
  onClick?: (e: any, value: string | number) => void,
  color?: Color,
};
export type InnerProps = {
  value: string | number,
  onClick: (e: any, value: string | number) => void,
  color: Color,
};

class TabItem extends React.Component<Props> {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onClick: PropTypes.func, // (e, value) => void
    color: PropTypes.string,
  };

  static defaultProps = {
    onClick: emptyFunction,
    color: 'primary',
  };

  onClick = (e: any) => {
    const { onClick, value } = this.props;

    if (onClick) {
      onClick(e, value);
    }
  };

  render() {
    const { value, ...otherProps } = this.props;
    const { onClick } = this;

    return <Item {...otherProps} value={value} onClick={onClick} />;
  }
}

export default TabItem;
