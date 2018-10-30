// @flow
import * as React from 'react';

export type Value = number | string;
export type ItemProps = {
  value: Value,
  children: React.Node,
};
class Item extends React.Component<
  ItemProps & {
    onClick: Value => Promise<any> | any,
  },
> {
  onClick = () => {
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

export default Item;
