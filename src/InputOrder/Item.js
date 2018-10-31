// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { type Value, type ItemProps } from './type.flow';

type Props = ItemProps & {
  onClick: Value => Promise<any> | any,
};

class Item extends React.Component<Props> {
  onClick: any => void = () => {
    const { value, onClick } = this.props;
    onClick(value);
  };

  render() {
    const { children } = this.props;
    const { onClick } = this;

    return (
      <div onClick={onClick} onKeyPress={onClick} role="button" tabIndex="0">
        {children}
      </div>
    );
  }
}

Item.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Item;
